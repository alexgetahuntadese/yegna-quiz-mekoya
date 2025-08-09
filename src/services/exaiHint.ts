import { Question } from '@/data/types';

export type ExaiHintLevel = 1 | 2;

export interface ExaiHintPayload {
  title: string;
  bullets: string[];
  example?: string;
}

// Very lightweight keyword extractor (no external deps)
const STOP_WORDS = new Set([
  'the','is','are','a','an','of','and','or','to','in','on','for','with','by','from','that','this','these','those','as','at','be','which','what','how','why','when','where','who','whom','into','about','it','its','their','there'
]);

function extractKeywords(text: string, max = 6): string[] {
  const words = (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w && !STOP_WORDS.has(w) && w.length > 2);
  const freq: Record<string, number> = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  return Object.entries(freq)
    .sort((a,b) => b[1]-a[1])
    .slice(0, max)
    .map(([w]) => w);
}

function maskAnswer(text: string, answer: string): string {
  if (!text || !answer) return text;
  try {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escaped, 'gi');
    return text.replace(re, '_____');
  } catch {
    return text;
  }
}

function buildWorkedExample(question: Question, keywords: string[]): string {
  // Create a tiny, generic worked example without revealing the answer
  const topic = (question.topic || keywords[0] || 'concept').toLowerCase();
  const q = question.question?.replace(/\s+/g, ' ').trim() || 'the question';
  return `Example: Consider a similar ${topic} case. Identify the key condition(s) in "${q.slice(0, 80)}${q.length>80?'…':''}" and test each option against it. Eliminate those that violate the condition; the remaining option best fits the scenario.`;
}

export function generateExaiHint(question: Question, level: ExaiHintLevel): ExaiHintPayload {
  // Defensive defaults
  const qText = question?.question || '';
  const options = Array.isArray(question?.options) ? question.options : [];
  const correct = question?.correct || '';
  const explanation = question?.explanation || '';

  const keywords = extractKeywords(qText + ' ' + explanation);

  // Universal bullets
  const baseBullets = [
    'Underline keywords in the question and restate it in your own words.',
    'Eliminate options that clearly conflict with the core condition(s).',
    'Compare remaining options to the keywords and look for the best match.'
  ];

  const maskedExplanation = explanation ? maskAnswer(explanation, correct) : '';

  if (level === 1) {
    const guidance: string[] = [];
    if (keywords.length) guidance.push(`Focus on: ${keywords.slice(0,3).join(', ')}`);
    if (options.length) guidance.push('Scan options for wording that conflicts with the question.');
    if (maskedExplanation) guidance.push('Think about the underlying rule hinted by the explanation of similar problems.');

    return {
      title: 'Exai Hint — Level 1 (Guided Steps)',
      bullets: [...guidance, ...baseBullets].slice(0, 4)
    };
  }

  // Level 2 — worked example style
  const example = buildWorkedExample(question, keywords);
  const maskedExample = maskAnswer(example, correct);

  const lvl2Bullets = [
    'Map each keyword to a condition you can test.',
    'Test each option against the conditions; discard any that fail a single key test.',
    maskedExplanation ? 'Use the principle suggested by similar explanations to justify the final pick.' : 'Justify your choice using the conditions you identified.'
  ];

  return {
    title: 'Exai Hint — Level 2 (Worked Example)',
    bullets: lvl2Bullets,
    example: maskedExample
  };
}
