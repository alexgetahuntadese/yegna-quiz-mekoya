
import { Chapter } from '../../types';

export const grade11MathematicsChapters: Chapter[] = [
  {
    id: 'math-11-1',
    name: 'Functions and Relations',
    description: 'Advanced study of functions, their properties, and relationships',
    questions: [
      {
        id: 'math-11-1-1',
        question: 'What is the domain of f(x) = √(x - 3)?',
        options: ['x ≥ 3', 'x ≤ 3', 'All real numbers', 'x > 3'],
        correct: 'x ≥ 3',
        explanation: 'For the square root to be defined, the expression inside must be non-negative: x - 3 ≥ 0, so x ≥ 3.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-2',
        question: 'If f(x) = 2x + 1 and g(x) = x², what is (f ∘ g)(3)?',
        options: ['19', '15', '7', '10'],
        correct: '19',
        explanation: '(f ∘ g)(3) = f(g(3)) = f(9) = 2(9) + 1 = 19.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-3',
        question: 'What is the inverse of f(x) = (2x - 1)/3?',
        options: ['f⁻¹(x) = (3x + 1)/2', 'f⁻¹(x) = (3x - 1)/2', 'f⁻¹(x) = 3x + 1', 'f⁻¹(x) = 2x/3 + 1'],
        correct: 'f⁻¹(x) = (3x + 1)/2',
        explanation: 'To find the inverse: y = (2x - 1)/3, solve for x: 3y = 2x - 1, x = (3y + 1)/2.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'math-11-2',
    name: 'Polynomial Functions',
    description: 'Study of polynomial functions, their graphs, and properties',
    questions: [
      {
        id: 'math-11-2-1',
        question: 'What is the degree of the polynomial 3x⁴ - 2x² + 5x - 1?',
        options: ['3', '4', '5', '2'],
        correct: '4',
        explanation: 'The degree of a polynomial is the highest power of x, which is 4 in this case.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-2',
        question: 'What is the remainder when x³ - 2x² + x - 3 is divided by (x - 2)?',
        options: ['-1', '1', '3', '-3'],
        correct: '-1',
        explanation: 'Using the remainder theorem: f(2) = 8 - 8 + 2 - 3 = -1.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-3',
        question: 'If x - 1 is a factor of x³ + ax² + bx - 6, and the polynomial has roots 1, 2, -3, what is a + b?',
        options: ['0', '2', '-2', '1'],
        correct: '0',
        explanation: 'If roots are 1, 2, -3, then f(x) = (x-1)(x-2)(x+3) = x³ + 0x² - 5x - 6, so a = 0, b = -5, but checking: a + b = 0.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'math-11-3',
    name: 'Trigonometry',
    description: 'Advanced trigonometric functions, identities, and applications',
    questions: [
      {
        id: 'math-11-3-1',
        question: 'What is sin(π/4)?',
        options: ['1/2', '√2/2', '√3/2', '1'],
        correct: '√2/2',
        explanation: 'sin(π/4) = sin(45°) = √2/2.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-3-2',
        question: 'Which identity is correct?',
        options: ['sin²x + cos²x = 1', 'sin²x - cos²x = 1', 'sin²x + cos²x = 0', 'sinx + cosx = 1'],
        correct: 'sin²x + cos²x = 1',
        explanation: 'This is the Pythagorean trigonometric identity.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-3-3',
        question: 'What is cos(2θ) in terms of cos(θ)?',
        options: ['2cos²θ - 1', '2cosθ', 'cos²θ - 1', '1 - cos²θ'],
        correct: '2cos²θ - 1',
        explanation: 'Using the double angle formula: cos(2θ) = cos²θ - sin²θ = cos²θ - (1 - cos²θ) = 2cos²θ - 1.',
        difficulty: 'hard'
      }
    ]
  }
];
