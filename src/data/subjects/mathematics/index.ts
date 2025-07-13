import { Chapter } from '../types';
import { grade9MathematicsChapters } from './grade9';
import { grade10MathematicsChapters } from './grade10';
import { grade11MathematicsChapters } from './grade11';

export const mathematicsChapters: Chapter[] = [
  ...grade9MathematicsChapters,
  ...grade10MathematicsChapters,
  ...grade11MathematicsChapters
];
