
import { Chapter } from '../../types';

export const grade11MathematicsChapters: Chapter[] = [
  {
    id: 'math-11-1',
    name: 'Relations and Functions',
    description: 'Understanding relations and functions, their properties and applications',
    questions: [
      {
        id: 'math-11-1-1',
        question: 'What is the domain of the function f(x) = √(x-2)?',
        options: ['x ≥ 2', 'x ≤ 2', 'x > 2', 'All real numbers'],
        correct: 'x ≥ 2',
        explanation: 'For the square root to be defined, the expression under the root must be non-negative: x-2 ≥ 0, so x ≥ 2.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-2',
        question: 'If f(x) = 2x + 3 and g(x) = x², what is (f∘g)(x)?',
        options: ['2x² + 3', '2x + 3x²', '(2x + 3)²', '2(x + 3)²'],
        correct: '2x² + 3',
        explanation: '(f∘g)(x) = f(g(x)) = f(x²) = 2(x²) + 3 = 2x² + 3',
        difficulty: 'medium',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-3',
        question: 'Which represents a one-to-one function?',
        options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 2x + 1', 'f(x) = sin(x)'],
        correct: 'f(x) = 2x + 1',
        explanation: 'A linear function with non-zero slope is always one-to-one (injective).',
        difficulty: 'easy',
        topic: 'Function Types'
      }
    ]
  },
  {
    id: 'math-11-2',
    name: 'Rational Expression and Rational Functions',
    description: 'Working with rational expressions, equations and their graphs',
    questions: [
      {
        id: 'math-11-2-1',
        question: 'Simplify: (x² - 4)/(x + 2)',
        options: ['x - 2', 'x + 2', 'x² - 2', '(x - 2)(x + 2)'],
        correct: 'x - 2',
        explanation: 'Factor numerator: (x² - 4) = (x - 2)(x + 2). Cancel common factor (x + 2).',
        difficulty: 'easy',
        topic: 'Simplifying Rational Expressions'
      },
      {
        id: 'math-11-2-2',
        question: 'What are the vertical asymptotes of f(x) = 1/(x² - 9)?',
        options: ['x = 3', 'x = -3', 'x = ±3', 'No vertical asymptotes'],
        correct: 'x = ±3',
        explanation: 'Vertical asymptotes occur where denominator = 0: x² - 9 = 0, so x = ±3.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-3',
        question: 'Solve: 1/x + 1/(x+1) = 2/3',
        options: ['x = 1, x = 2', 'x = 1/2, x = 2', 'x = 1, x = 1/2', 'x = 2, x = 3'],
        correct: 'x = 1/2, x = 2',
        explanation: 'Multiply through by common denominator 3x(x+1) and solve the resulting quadratic.',
        difficulty: 'hard',
        topic: 'Rational Equations'
      }
    ]
  }
];
