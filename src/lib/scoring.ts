import { QuizScore, TraitKey } from './types';
import { questions } from './quizData';

export function calculateScores(answers: Record<number, string>): QuizScore {
  const scores: QuizScore = { W: 0, D: 0, B: 0, A: 0 };

  Object.entries(answers).forEach(([questionId, selectedLabel]) => {
    const question = questions.find((q) => q.id === parseInt(questionId));
    if (!question) return;

    const option = question.options.find((o) => o.label === selectedLabel);
    if (!option) return;

    scores.W += option.scores.W;
    scores.D += option.scores.D;
    scores.B += option.scores.B;
    scores.A += option.scores.A;
  });

  return scores;
}

export function countStrongWins(answers: Record<number, string>, trait: TraitKey): number {
  let count = 0;

  Object.entries(answers).forEach(([questionId, selectedLabel]) => {
    const question = questions.find((q) => q.id === parseInt(questionId));
    if (!question) return;

    const option = question.options.find((o) => o.label === selectedLabel);
    if (!option) return;

    // Count if this trait got a +2 on this question
    if (option.scores[trait] === 2) {
      count++;
    }
  });

  return count;
}

export function determinePrimaryTrait(
  scores: QuizScore,
  answers: Record<number, string>
): string {
  const traits: TraitKey[] = ['W', 'D', 'B', 'A'];
  const sorted = traits.sort((a, b) => scores[b] - scores[a]);

  const highest = sorted[0];
  const secondHighest = sorted[1];

  // If no tie, return the highest
  if (scores[highest] !== scores[secondHighest]) {
    return highest;
  }

  // There's a tie between highest and second highest
  // Use Q10 answer (tie-breaker question) to guide
  const q10Answer = answers[10];

  if (q10Answer === 'A') {
    // A leans toward W/A traits
    if (highest === 'W' || highest === 'A') {
      return highest;
    } else if (secondHighest === 'W' || secondHighest === 'A') {
      return secondHighest;
    }
  } else if (q10Answer === 'B') {
    // B leans toward B/D traits
    if (highest === 'B' || highest === 'D') {
      return highest;
    } else if (secondHighest === 'B' || secondHighest === 'D') {
      return secondHighest;
    }
  }

  // If Q10 doesn't break the tie, use strong wins (+2 count)
  const highestWins = countStrongWins(answers, highest);
  const secondHighestWins = countStrongWins(answers, secondHighest);

  return highestWins >= secondHighestWins ? highest : secondHighest;
}

export function getTopTwoTraits(
  scores: QuizScore,
  answers: Record<number, string>
): [string, string] {
  const traits: TraitKey[] = ['W', 'D', 'B', 'A'];

  // Primary trait with tie-breaker logic
  const primaryTrait = determinePrimaryTrait(scores, answers);

  // Secondary trait is the highest of the remaining
  const remaining = traits.filter((t) => t !== primaryTrait);
  const secondary = remaining.reduce((a, b) =>
    scores[b] >= scores[a] ? b : a
  );

  return [primaryTrait, secondary];
}
