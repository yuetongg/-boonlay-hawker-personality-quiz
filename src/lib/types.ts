// Type definitions for the quiz

export interface TraitScores {
  W: number;
  D: number;
  B: number;
  A: number;
}

export interface Option {
  text: string;
  label: string;
  scores: TraitScores;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface QuizScore {
  W: number;
  D: number;
  B: number;
  A: number;
}

export interface PersonalityResult {
  traits: string;
  name: string;
  emoji?: string;
  description: string;
  image: string;
  primaryTrait: string;
  secondaryTrait: string;
}

export type TraitKey = 'W' | 'D' | 'B' | 'A';
