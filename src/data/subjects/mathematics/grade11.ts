
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
    name: 'Matrices',
    description: 'Matrix operations, properties and applications',
    questions: [
      {
        id: 'math-11-3-1',
        question: 'What is the result of adding matrices A = [2, 3] and B = [1, 4]?',
        options: ['[3, 7]', '[2, 12]', '[1, 1]', '[3, 1]'],
        correct: '[3, 7]',
        explanation: 'Matrix addition is done element by element: [2+1, 3+4] = [3, 7].',
        difficulty: 'easy',
        topic: 'Matrix Addition'
      },
      {
        id: 'math-11-3-2',
        question: 'What is the transpose of matrix A = [[1, 2], [3, 4]]?',
        options: ['[[1, 3], [2, 4]]', '[[4, 3], [2, 1]]', '[[1, 2], [3, 4]]', '[[2, 1], [4, 3]]'],
        correct: '[[1, 3], [2, 4]]',
        explanation: 'The transpose of a matrix is obtained by interchanging rows and columns.',
        difficulty: 'medium',
        topic: 'Matrix Transpose'
      },
      {
        id: 'math-11-3-3',
        question: 'If A = [[2, 1], [0, 3]] and B = [[1, 0], [2, 1]], what is AB?',
        options: ['[[4, 1], [6, 3]]', '[[4, 1], [6, 1]]', '[[2, 1], [6, 3]]', '[[4, 0], [6, 3]]'],
        correct: '[[4, 1], [6, 3]]',
        explanation: 'Matrix multiplication: AB₁₁ = 2×1 + 1×2 = 4, AB₁₂ = 2×0 + 1×1 = 1, AB₂₁ = 0×1 + 3×2 = 6, AB₂₂ = 0×0 + 3×1 = 3.',
        difficulty: 'hard',
        topic: 'Matrix Multiplication'
      }
    ]
  },
  {
    id: 'math-11-4',
    name: 'Determinants and their Properties',
    description: 'Calculating determinants and understanding their geometric meaning',
    questions: [
      {
        id: 'math-11-4-1',
        question: 'What is the determinant of the 2×2 matrix [[3, 2], [1, 4]]?',
        options: ['10', '12', '14', '8'],
        correct: '10',
        explanation: 'For a 2×2 matrix [[a,b],[c,d]], det = ad - bc = 3×4 - 2×1 = 12 - 2 = 10.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-2',
        question: 'If det(A) = 5 and det(B) = 3, what is det(AB)?',
        options: ['15', '8', '2', '5/3'],
        correct: '15',
        explanation: 'The determinant of a product equals the product of determinants: det(AB) = det(A) × det(B) = 5 × 3 = 15.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-3',
        question: 'What is the determinant of [[1, 2, 3], [0, 4, 5], [0, 0, 6]]?',
        options: ['24', '120', '30', '0'],
        correct: '24',
        explanation: 'For an upper triangular matrix, the determinant is the product of diagonal elements: 1 × 4 × 6 = 24.',
        difficulty: 'hard',
        topic: '3×3 Determinants'
      }
    ]
  },
  {
    id: 'math-11-5',
    name: 'Vectors',
    description: 'Vector operations, properties and geometric applications',
    questions: [
      {
        id: 'math-11-5-1',
        question: 'What is the magnitude of vector v = (3, 4)?',
        options: ['5', '7', '12', '25'],
        correct: '5',
        explanation: 'The magnitude of vector (a, b) is √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5.',
        difficulty: 'easy',
        topic: 'Vector Magnitude'
      },
      {
        id: 'math-11-5-2',
        question: 'If u = (2, 3) and v = (1, -1), what is u + v?',
        options: ['(3, 2)', '(1, 4)', '(2, -3)', '(3, -2)'],
        correct: '(3, 2)',
        explanation: 'Vector addition is component-wise: (2, 3) + (1, -1) = (2+1, 3+(-1)) = (3, 2).',
        difficulty: 'medium',
        topic: 'Vector Addition'
      },
      {
        id: 'math-11-5-3',
        question: 'What is the dot product of vectors a = (2, 3) and b = (4, 1)?',
        options: ['11', '8', '5', '14'],
        correct: '11',
        explanation: 'Dot product: a·b = (2)(4) + (3)(1) = 8 + 3 = 11.',
        difficulty: 'hard',
        topic: 'Dot Product'
      }
    ]
  },
  {
    id: 'math-11-6',
    name: 'Transformations of the Plane',
    description: 'Geometric transformations including translations, rotations, and reflections',
    questions: [
      {
        id: 'math-11-6-1',
        question: 'What is the image of point (2, 3) under translation by vector (1, -2)?',
        options: ['(3, 1)', '(1, 5)', '(2, -6)', '(3, -1)'],
        correct: '(3, 1)',
        explanation: 'Translation adds the translation vector: (2, 3) + (1, -2) = (2+1, 3+(-2)) = (3, 1).',
        difficulty: 'easy',
        topic: 'Translation'
      },
      {
        id: 'math-11-6-2',
        question: 'What is the image of point (3, 0) under rotation of 90° counterclockwise about the origin?',
        options: ['(0, 3)', '(-3, 0)', '(0, -3)', '(3, 0)'],
        correct: '(0, 3)',
        explanation: 'Rotation of 90° counterclockwise transforms (x, y) to (-y, x): (3, 0) → (0, 3).',
        difficulty: 'medium',
        topic: 'Rotation'
      },
      {
        id: 'math-11-6-3',
        question: 'What is the image of point (4, 2) under reflection across the x-axis?',
        options: ['(4, -2)', '(-4, 2)', '(2, 4)', '(-4, -2)'],
        correct: '(4, -2)',
        explanation: 'Reflection across the x-axis changes the sign of the y-coordinate: (4, 2) → (4, -2).',
        difficulty: 'hard',
        topic: 'Reflection'
      }
    ]
  },
  {
    id: 'math-11-7',
    name: 'Statistics',
    description: 'Data analysis, measures of central tendency and dispersion',
    questions: [
      {
        id: 'math-11-7-1',
        question: 'What is the mean of the data set: 2, 4, 6, 8, 10?',
        options: ['5', '6', '7', '8'],
        correct: '6',
        explanation: 'Mean = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6.',
        difficulty: 'easy',
        topic: 'Mean'
      },
      {
        id: 'math-11-7-2',
        question: 'What is the median of the data set: 1, 3, 5, 7, 9, 11?',
        options: ['5', '6', '7', '8'],
        correct: '6',
        explanation: 'For an even number of values, the median is the average of the two middle values: (5 + 7) / 2 = 6.',
        difficulty: 'medium',
        topic: 'Median'
      },
      {
        id: 'math-11-7-3',
        question: 'What is the standard deviation of the data set: 2, 4, 6 (population)?',
        options: ['√(8/3)', '2', '√8', '4/3'],
        correct: '√(8/3)',
        explanation: 'Mean = 4. Variance = [(2-4)² + (4-4)² + (6-4)²]/3 = [4 + 0 + 4]/3 = 8/3. Standard deviation = √(8/3).',
        difficulty: 'hard',
        topic: 'Standard Deviation'
      }
    ]
  },
  {
    id: 'math-11-8',
    name: 'Probability',
    description: 'Basic probability concepts, conditional probability and probability distributions',
    questions: [
      {
        id: 'math-11-8-1',
        question: 'What is the probability of getting a head when flipping a fair coin?',
        options: ['1/4', '1/3', '1/2', '2/3'],
        correct: '1/2',
        explanation: 'A fair coin has two equally likely outcomes: heads or tails. P(Head) = 1/2.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-2',
        question: 'If P(A) = 0.3 and P(B) = 0.4, and A and B are independent, what is P(A ∩ B)?',
        options: ['0.12', '0.7', '0.1', '0.35'],
        correct: '0.12',
        explanation: 'For independent events, P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.',
        difficulty: 'medium',
        topic: 'Independent Events'
      },
      {
        id: 'math-11-8-3',
        question: 'In a bag with 3 red and 2 blue balls, what is P(Red|first ball drawn is Red)?',
        options: ['1/2', '2/4', '3/5', '2/3'],
        correct: '1/2',
        explanation: 'After drawing one red ball, there are 2 red and 2 blue balls left. P(Red) = 2/4 = 1/2.',
        difficulty: 'hard',
        topic: 'Conditional Probability'
      }
    ]
  }
];
