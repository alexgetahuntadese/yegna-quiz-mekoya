import { Chapter } from '../types';
import { grade9HistoryChapters } from './grade9';
import { grade10HistoryChapters } from './grade10';
import { grade11HistoryChapters } from './grade11';

export const historyChapters: Chapter[] = [
  ...grade9HistoryChapters,
  ...grade10HistoryChapters,
  ...grade11HistoryChapters
];
