'use client';

import React from 'react';
import { Question } from '@/lib/types';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => onAnswerSelect(option.label)}
            className={`w-full rounded-lg border-2 p-4 text-left transition-all duration-200 ${
              selectedAnswer === option.label
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-300 bg-white hover:border-orange-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 h-6 w-6 rounded-full border-2 flex-shrink-0 ${
                  selectedAnswer === option.label
                    ? 'border-orange-600 bg-orange-600'
                    : 'border-gray-300'
                }`}
              />
              <p className="text-gray-900">{option.text}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
