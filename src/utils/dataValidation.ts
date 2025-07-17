
import { Chapter, Question } from '@/data/types';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export const validateChapter = (chapter: any): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!chapter) {
    errors.push('Chapter is null or undefined');
    return { isValid: false, errors, warnings };
  }

  if (typeof chapter.id !== 'string' || !chapter.id.trim()) {
    errors.push('Chapter ID is missing or invalid');
  }

  if (typeof chapter.name !== 'string' || !chapter.name.trim()) {
    errors.push('Chapter name is missing or invalid');
  }

  if (!Array.isArray(chapter.questions)) {
    errors.push('Chapter questions must be an array');
  } else {
    chapter.questions.forEach((question: any, index: number) => {
      const questionValidation = validateQuestion(question);
      if (!questionValidation.isValid) {
        errors.push(`Question ${index + 1}: ${questionValidation.errors.join(', ')}`);
      }
      warnings.push(...questionValidation.warnings.map(w => `Question ${index + 1}: ${w}`));
    });

    if (chapter.questions.length === 0) {
      warnings.push('Chapter has no questions');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

export const validateQuestion = (question: any): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!question) {
    errors.push('Question is null or undefined');
    return { isValid: false, errors, warnings };
  }

  if (typeof question.id !== 'string' || !question.id.trim()) {
    errors.push('Question ID is missing or invalid');
  }

  if (typeof question.question !== 'string' || !question.question.trim()) {
    errors.push('Question text is missing or invalid');
  }

  if (!Array.isArray(question.options)) {
    errors.push('Question options must be an array');
  } else {
    if (question.options.length < 2) {
      errors.push('Question must have at least 2 options');
    }
    if (question.options.length > 6) {
      warnings.push('Question has more than 6 options (may affect UI)');
    }
    
    const hasEmptyOptions = question.options.some((opt: any) => 
      typeof opt !== 'string' || !opt.trim()
    );
    if (hasEmptyOptions) {
      errors.push('All options must be non-empty strings');
    }
  }

  if (typeof question.correct !== 'string' || !question.correct.trim()) {
    errors.push('Correct answer is missing or invalid');
  } else if (Array.isArray(question.options) && !question.options.includes(question.correct)) {
    errors.push('Correct answer not found in options');
  }

  if (!['easy', 'medium', 'hard'].includes(question.difficulty)) {
    errors.push('Question difficulty must be easy, medium, or hard');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

export const validateQuestionsArray = (questions: any[]): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!Array.isArray(questions)) {
    errors.push('Questions must be an array');
    return { isValid: false, errors, warnings };
  }

  const difficultyCount = {
    easy: 0,
    medium: 0,
    hard: 0
  };

  questions.forEach((question, index) => {
    const validation = validateQuestion(question);
    if (!validation.isValid) {
      errors.push(`Question ${index + 1}: ${validation.errors.join(', ')}`);
    }
    warnings.push(...validation.warnings);

    if (validation.isValid && question.difficulty) {
      difficultyCount[question.difficulty as keyof typeof difficultyCount]++;
    }
  });

  // Balance warnings
  const total = questions.length;
  if (total > 0) {
    const easyPercent = (difficultyCount.easy / total) * 100;
    const hardPercent = (difficultyCount.hard / total) * 100;
    
    if (easyPercent > 70) {
      warnings.push('Chapter has too many easy questions (>70%)');
    }
    if (hardPercent > 50) {
      warnings.push('Chapter has too many hard questions (>50%)');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

export const logValidationResults = (context: string, result: ValidationResult) => {
  if (!result.isValid) {
    console.error(`❌ Validation failed for ${context}:`, result.errors);
  }
  
  if (result.warnings.length > 0) {
    console.warn(`⚠️ Validation warnings for ${context}:`, result.warnings);
  }

  if (result.isValid && result.warnings.length === 0) {
    console.log(`✅ Validation passed for ${context}`);
  }
};
