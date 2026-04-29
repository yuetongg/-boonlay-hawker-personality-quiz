'use client';

import { useState, useCallback } from 'react';

export interface UseQuizStateReturn {
  answers: Record<number, string>;
  currentQuestion: number;
  setAnswer: (questionId: number, answer: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (questionId: number) => void;
  resetQuiz: () => void;
  isAnswered: (questionId: number) => boolean;
  isCompleted: boolean;
}

export function useQuizState(totalQuestions: number = 10): UseQuizStateReturn {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const setAnswer = useCallback((questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion, totalQuestions]);

  const previousQuestion = useCallback(() => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const goToQuestion = useCallback((questionId: number) => {
    if (questionId >= 1 && questionId <= totalQuestions) {
      setCurrentQuestion(questionId);
    }
  }, [totalQuestions]);

  const resetQuiz = useCallback(() => {
    setAnswers({});
    setCurrentQuestion(1);
  }, []);

  const isAnswered = useCallback(
    (questionId: number) => Boolean(answers[questionId]),
    [answers]
  );

  const isCompleted =
    Object.keys(answers).length === totalQuestions &&
    answers[totalQuestions] !== undefined;

  return {
    answers,
    currentQuestion,
    setAnswer,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    resetQuiz,
    isAnswered,
    isCompleted,
  };
}
