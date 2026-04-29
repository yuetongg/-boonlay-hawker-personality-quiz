import { QuizScore } from './types';

export function serializeAnswers(answers: Record<number, string>): string {
  const params = new URLSearchParams();
  Object.entries(answers).forEach(([key, value]) => {
    params.set(`q${key}`, value);
  });
  return params.toString();
}

export function deserializeAnswers(searchParams: URLSearchParams): Record<number, string> {
  const answers: Record<number, string> = {};
  const keys = Array.from(searchParams.keys()).filter((k) => k.startsWith('q'));

  keys.forEach((key) => {
    const questionId = parseInt(key.substring(1));
    const value = searchParams.get(key);
    if (value) {
      answers[questionId] = value;
    }
  });

  return answers;
}

export function serializeScores(scores: QuizScore): string {
  const params = new URLSearchParams();
  Object.entries(scores).forEach(([trait, score]) => {
    params.set(trait, score.toString());
  });
  return params.toString();
}

export function deserializeScores(searchParams: URLSearchParams): QuizScore {
  return {
    W: parseInt(searchParams.get('W') || '0'),
    D: parseInt(searchParams.get('D') || '0'),
    B: parseInt(searchParams.get('B') || '0'),
    A: parseInt(searchParams.get('A') || '0'),
  };
}

export function formatTraitName(trait: string): string {
  const names: Record<string, string> = {
    W: 'Warmth',
    D: 'Depth',
    B: 'Boldness',
    A: 'Adaptability',
  };
  return names[trait] || trait;
}
