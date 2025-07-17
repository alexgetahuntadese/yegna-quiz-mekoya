
import { Question, Chapter } from './types';
import { mathematicsChapters } from './subjects/mathematics';
import { physicsChapters } from './subjects/physics';
import { chemistryChapters } from './subjects/chemistry';
import { biologyChapters } from './subjects/biology';
import { englishChapters } from './subjects/english';
import { historyChapters } from './subjects/history';
import { geographyChapters } from './subjects/geography';
import { technicalDrawingChapters } from './subjects/technical-drawing';
import { economicsChapters } from './subjects/economics';
import { generalBusinessChapters } from './subjects/general-business';
import { civicsChapters } from './subjects/civics';
import { physicalEducationChapters } from './subjects/physical-education';
import { informationTechnologyChapters } from './subjects/information-technology';
import { nationalLanguageChapters } from './subjects/national-language';
import { agricultureChapters } from './subjects/agriculture';
import { validateChapter, validateQuestionsArray, logValidationResults } from '@/utils/dataValidation';
import { logger } from '@/utils/errorLogger';

export interface QuestionsBySubject {
  mathematics: Chapter[];
  physics: Chapter[];
  chemistry: Chapter[];
  biology: Chapter[];
  'technical-drawing': Chapter[];
  english: Chapter[];
  history: Chapter[];
  geography: Chapter[];
  economics: Chapter[];
  'general-business': Chapter[];
  civics: Chapter[];
  'physical-education': Chapter[];
  'information-technology': Chapter[];
  'national-language': Chapter[];
  agriculture: Chapter[];
}

// Validate all chapters during initialization
const validateSubjectChapters = (subjectName: string, chapters: Chapter[]): Chapter[] => {
  const validChapters: Chapter[] = [];
  
  chapters.forEach((chapter, index) => {
    try {
      const validation = validateChapter(chapter);
      logValidationResults(`${subjectName} - Chapter ${index + 1}`, validation);
      
      if (validation.isValid) {
        validChapters.push(chapter);
      } else {
        logger.error('DataValidation', `Invalid chapter in ${subjectName}`, {
          chapterIndex: index,
          chapterId: chapter?.id,
          errors: validation.errors
        });
      }
    } catch (error) {
      logger.error('DataValidation', `Error validating chapter in ${subjectName}`, {
        chapterIndex: index,
        error
      });
    }
  });
  
  logger.info('DataValidation', `${subjectName}: ${validChapters.length}/${chapters.length} chapters validated`);
  return validChapters;
};

export const questionsBySubject: QuestionsBySubject = {
  mathematics: validateSubjectChapters('Mathematics', mathematicsChapters),
  physics: validateSubjectChapters('Physics', physicsChapters),
  chemistry: validateSubjectChapters('Chemistry', chemistryChapters),
  biology: validateSubjectChapters('Biology', biologyChapters),
  'technical-drawing': validateSubjectChapters('Technical Drawing', technicalDrawingChapters),
  english: validateSubjectChapters('English', englishChapters),
  history: validateSubjectChapters('History', historyChapters),
  geography: validateSubjectChapters('Geography', geographyChapters),
  economics: validateSubjectChapters('Economics', economicsChapters),
  'general-business': validateSubjectChapters('General Business', generalBusinessChapters),
  civics: validateSubjectChapters('Civics', civicsChapters),
  'physical-education': validateSubjectChapters('Physical Education', physicalEducationChapters),
  'information-technology': validateSubjectChapters('Information Technology', informationTechnologyChapters),
  'national-language': validateSubjectChapters('National Language', nationalLanguageChapters),
  agriculture: validateSubjectChapters('Agriculture', agricultureChapters)
};

export const getTotalQuestionsBySubject = (subject: string): number => {
  try {
    const subjectKey = subject as keyof QuestionsBySubject;
    if (!questionsBySubject[subjectKey]) {
      logger.warn('Questions', `Subject not found: ${subject}`);
      return 0;
    }
    
    const total = questionsBySubject[subjectKey].reduce((total, chapter) => {
      if (!chapter?.questions || !Array.isArray(chapter.questions)) {
        logger.warn('Questions', `Invalid questions array in chapter ${chapter?.id || 'unknown'}`);
        return total;
      }
      return total + chapter.questions.length;
    }, 0);
    
    logger.info('Questions', `Total questions for ${subject}: ${total}`);
    return total;
  } catch (error) {
    logger.error('Questions', `Error getting total questions for ${subject}`, error);
    return 0;
  }
};

export const getChaptersBySubject = (subject: string): Chapter[] => {
  try {
    const subjectKey = subject as keyof QuestionsBySubject;
    if (!questionsBySubject[subjectKey]) {
      logger.warn('Questions', `Subject not found: ${subject}`);
      return [];
    }
    
    const chapters = questionsBySubject[subjectKey] || [];
    logger.info('Questions', `Retrieved ${chapters.length} chapters for ${subject}`);
    return chapters;
  } catch (error) {
    logger.error('Questions', `Error getting chapters for ${subject}`, error);
    return [];
  }
};

export const getQuestionsForQuiz = (
  subject: string, 
  chapterId: string, 
  difficulty: 'easy' | 'medium' | 'hard', 
  numberOfQuestions: number
): Question[] => {
  try {
    logger.info('Questions', `Getting quiz questions: ${subject}/${chapterId}/${difficulty} (${numberOfQuestions})`);
    
    const chapters = getChaptersBySubject(subject);
    const chapter = chapters.find(c => c?.id === chapterId);
    
    if (!chapter) {
      logger.warn('Questions', `Chapter not found: ${chapterId} in ${subject}`);
      return [];
    }

    if (!chapter.questions || !Array.isArray(chapter.questions)) {
      logger.error('Questions', `Invalid questions array in chapter ${chapterId}`);
      return [];
    }

    const filteredQuestions = chapter.questions.filter(q => {
      if (!q || typeof q !== 'object') {
        logger.warn('Questions', `Invalid question object in chapter ${chapterId}`);
        return false;
      }
      return q.difficulty === difficulty;
    });

    logger.info('Questions', `Found ${filteredQuestions.length} ${difficulty} questions in chapter ${chapterId}`);

    if (filteredQuestions.length === 0) {
      logger.warn('Questions', `No ${difficulty} questions found in chapter ${chapterId}`);
      return [];
    }

    // Validate questions before returning
    const validation = validateQuestionsArray(filteredQuestions);
    logValidationResults(`Quiz Questions ${subject}/${chapterId}/${difficulty}`, validation);
    
    if (!validation.isValid) {
      logger.error('Questions', 'Quiz questions failed validation', validation.errors);
      // Return valid questions only
      const validQuestions = filteredQuestions.filter(q => {
        const qValidation = validateQuestion(q);
        return qValidation.isValid;
      });
      logger.info('Questions', `Using ${validQuestions.length} valid questions out of ${filteredQuestions.length}`);
      return validQuestions.slice(0, numberOfQuestions);
    }

    if (filteredQuestions.length <= numberOfQuestions) {
      return filteredQuestions;
    }

    // Shuffle and return requested number
    const shuffledQuestions = [...filteredQuestions].sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numberOfQuestions);
    
  } catch (error) {
    logger.error('Questions', `Error getting quiz questions`, {
      subject,
      chapterId,
      difficulty,
      numberOfQuestions,
      error
    });
    return [];
  }
};
