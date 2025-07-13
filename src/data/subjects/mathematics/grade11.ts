
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
  },
  {
    id: 'math-11-3',
    name: 'Exponential and Logarithmic Functions',
    description: 'Understanding exponential growth/decay and logarithmic relationships',
    questions: [
      {
        id: 'math-11-3-1',
        question: 'What is log₂(8)?',
        options: ['2', '3', '4', '6'],
        correct: '3',
        explanation: 'log₂(8) = 3 because 2³ = 8.',
        difficulty: 'easy',
        topic: 'Basic Logarithms'
      },
      {
        id: 'math-11-3-2',
        question: 'Solve: 2^x = 32',
        options: ['x = 4', 'x = 5', 'x = 6', 'x = 16'],
        correct: 'x = 5',
        explanation: '2^5 = 32, so x = 5.',
        difficulty: 'medium',
        topic: 'Exponential Equations'
      },
      {
        id: 'math-11-3-3',
        question: 'What is the inverse of f(x) = log₃(x)?',
        options: ['f⁻¹(x) = 3^x', 'f⁻¹(x) = x³', 'f⁻¹(x) = 3x', 'f⁻¹(x) = x/3'],
        correct: 'f⁻¹(x) = 3^x',
        explanation: 'The inverse of a logarithmic function is an exponential function with the same base.',
        difficulty: 'hard',
        topic: 'Inverse Functions'
      }
    ]
  },
  {
    id: 'math-11-4',
    name: 'Trigonometric Functions',
    description: 'Sine, cosine, tangent and their applications',
    questions: [
      {
        id: 'math-11-4-1',
        question: 'What is sin(90°)?',
        options: ['0', '1', '-1', '1/2'],
        correct: '1',
        explanation: 'sin(90°) = 1, which is the maximum value of the sine function.',
        difficulty: 'easy',
        topic: 'Basic Trigonometry'
      },
      {
        id: 'math-11-4-2',
        question: 'What is the period of f(x) = sin(2x)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: 'π',
        explanation: 'The period of sin(bx) is 2π/b. For sin(2x), period = 2π/2 = π.',
        difficulty: 'medium',
        topic: 'Trigonometric Periods'
      },
      {
        id: 'math-11-4-3',
        question: 'Solve: sin(x) = 1/2 for 0 ≤ x ≤ 2π',
        options: ['x = π/6, 5π/6', 'x = π/4, 3π/4', 'x = π/3, 2π/3', 'x = π/2'],
        correct: 'x = π/6, 5π/6',
        explanation: 'sin(x) = 1/2 at x = π/6 (30°) and x = 5π/6 (150°) in [0, 2π].',
        difficulty: 'hard',
        topic: 'Trigonometric Equations'
      }
    ]
  },
  {
    id: 'math-11-5',
    name: 'Sequences and Series',
    description: 'Arithmetic and geometric sequences and their sums',
    questions: [
      {
        id: 'math-11-5-1',
        question: 'What is the common difference in the arithmetic sequence: 3, 7, 11, 15, ...?',
        options: ['3', '4', '7', '11'],
        correct: '4',
        explanation: 'The common difference is 7 - 3 = 4 (or 11 - 7 = 4).',
        difficulty: 'easy',
        topic: 'Arithmetic Sequences'
      },
      {
        id: 'math-11-5-2',
        question: 'What is the 10th term of the arithmetic sequence with first term a₁ = 2 and common difference d = 3?',
        options: ['29', '32', '35', '27'],
        correct: '29',
        explanation: 'Using aₙ = a₁ + (n-1)d: a₁₀ = 2 + (10-1)×3 = 2 + 27 = 29.',
        difficulty: 'medium',
        topic: 'Arithmetic Sequences'
      },
      {
        id: 'math-11-5-3',
        question: 'What is the sum of the first 5 terms of the geometric series: 2 + 6 + 18 + 54 + ...?',
        options: ['162', '242', '202', '182'],
        correct: '242',
        explanation: 'First term a = 2, ratio r = 3. Sum = a(rⁿ-1)/(r-1) = 2(3⁵-1)/(3-1) = 2(242)/2 = 242.',
        difficulty: 'hard',
        topic: 'Geometric Series'
      }
    ]
  },
  {
    id: 'math-11-6',
    name: 'Coordinate Geometry',
    description: 'Lines, circles, and conic sections in the coordinate plane',
    questions: [
      {
        id: 'math-11-6-1',
        question: 'What is the slope of the line passing through points (2, 3) and (6, 11)?',
        options: ['2', '1/2', '4', '8'],
        correct: '2',
        explanation: 'Slope = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(6 - 2) = 8/4 = 2.',
        difficulty: 'easy',
        topic: 'Linear Equations'
      },
      {
        id: 'math-11-6-2',
        question: 'What is the equation of the circle with center (3, 4) and radius 5?',
        options: ['(x-3)² + (y-4)² = 25', '(x+3)² + (y+4)² = 25', '(x-3)² + (y-4)² = 5', 'x² + y² = 25'],
        correct: '(x-3)² + (y-4)² = 25',
        explanation: 'The standard form of a circle is (x-h)² + (y-k)² = r² where (h,k) is the center and r is the radius.',
        difficulty: 'medium',
        topic: 'Circle Equations'
      },
      {
        id: 'math-11-6-3',
        question: 'What is the distance between points (-1, 2) and (3, 5)?',
        options: ['5', '√7', '7', '25'],
        correct: '5',
        explanation: 'Distance = √[(x₂-x₁)² + (y₂-y₁)²] = √[(3-(-1))² + (5-2)²] = √[16 + 9] = √25 = 5.',
        difficulty: 'hard',
        topic: 'Distance Formula'
      }
    ]
  }
];
