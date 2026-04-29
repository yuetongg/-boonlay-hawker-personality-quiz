import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    question: 'You arrive at the entrance. A faint aroma fills the air. What pulls you in first?',
    options: [
      {
        text: 'A rich, familiar scent that feels like home',
        label: 'A',
        scores: { W: 2, D: 1, B: 0, A: 0 },
      },
      {
        text: "A sharp, exciting smell you can't quite place",
        label: 'B',
        scores: { W: 0, D: 0, B: 2, A: 1 },
      },
    ],
  },
  {
    id: 2,
    question: 'The path splits into two alleys.',
    options: [
      {
        text: 'A lively street full of chatter and laughter',
        label: 'A',
        scores: { W: 2, D: 0, B: 1, A: 0 },
      },
      {
        text: 'A quieter lane, dimly lit but intriguing',
        label: 'B',
        scores: { W: 0, D: 2, B: 0, A: 1 },
      },
    ],
  },
  {
    id: 3,
    question: 'You spot a table at the hawker centre. What do you do?',
    options: [
      {
        text: 'Share a table with others already seated',
        label: 'A',
        scores: { W: 2, D: 0, B: 0, A: 1 },
      },
      {
        text: "Look around for your own space, even if it takes longer",
        label: 'B',
        scores: { W: 0, D: 2, B: 1, A: 0 },
      },
    ],
  },
  {
    id: 4,
    question: "You're handed a mystery dish to try.",
    options: [
      {
        text: 'Something comforting and well-balanced',
        label: 'A',
        scores: { W: 2, D: 0, B: 0, A: 1 },
      },
      {
        text: 'Something bold and intense',
        label: 'B',
        scores: { W: 0, D: 1, B: 2, A: 0 },
      },
    ],
  },
  {
    id: 5,
    question: 'A sudden drizzle starts.',
    options: [
      {
        text: 'You stay and enjoy the moment anyway',
        label: 'A',
        scores: { W: 0, D: 2, B: 0, A: 1 },
      },
      {
        text: 'You quickly adjust and find shelter',
        label: 'B',
        scores: { W: 0, D: 0, B: 1, A: 2 },
      },
    ],
  },
  {
    id: 6,
    question: 'A stranger asks to join you.',
    options: [
      {
        text: 'You welcome them easily',
        label: 'A',
        scores: { W: 2, D: 0, B: 1, A: 0 },
      },
      {
        text: 'You hesitate, but allow it',
        label: 'B',
        scores: { W: 0, D: 2, B: 0, A: 1 },
      },
    ],
  },
  {
    id: 7,
    question: 'The crowd grows louder.',
    options: [
      {
        text: 'You thrive in the energy',
        label: 'A',
        scores: { W: 0, D: 0, B: 2, A: 1 },
      },
      {
        text: 'You step back and take it in quietly',
        label: 'B',
        scores: { W: 0, D: 2, B: 0, A: 1 },
      },
    ],
  },
  {
    id: 8,
    question: "You're asked to choose a dish for everyone.",
    options: [
      {
        text: 'Something safe that everyone will enjoy',
        label: 'A',
        scores: { W: 2, D: 0, B: 0, A: 1 },
      },
      {
        text: 'Something unique, even if not everyone likes it',
        label: 'B',
        scores: { W: 0, D: 1, B: 2, A: 0 },
      },
    ],
  },
  {
    id: 9,
    question: 'The night is ending, and you reflect.',
    options: [
      {
        text: 'It was about the people and shared moments',
        label: 'A',
        scores: { W: 2, D: 1, B: 0, A: 0 },
      },
      {
        text: 'It was about the experience and discovery',
        label: 'B',
        scores: { W: 0, D: 2, B: 1, A: 0 },
      },
    ],
  },
  {
    id: 10,
    question: 'At the final stall, the vendor asks:',
    options: [
      {
        text: 'Do you follow what feels right?',
        label: 'A',
        scores: { W: 2, D: 0, B: 0, A: 1 },
      },
      {
        text: 'Or do you shape your own path?',
        label: 'B',
        scores: { W: 0, D: 1, B: 2, A: 0 },
      },
    ],
  },
];
