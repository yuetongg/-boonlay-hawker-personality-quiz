'use client';

import React from 'react';
import Image from 'next/image';
import { PersonalityResult, QuizScore } from '@/lib/types';
import { Button } from './common/Button';
import { formatTraitName } from '@/lib/utils';

interface ResultCardProps {
  result: PersonalityResult;
  scores: QuizScore;
  onRestart?: () => void;
  onShare?: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  scores,
  onRestart,
  onShare,
}) => {
  const maxScore = Math.max(scores.W, scores.D, scores.B, scores.A);

  return (
    <div className="space-y-6">
      {/* Dish Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100 sm:h-80">
        <Image
          src={result.image}
          alt={result.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Result Info */}
      <div className="space-y-2 text-center">
        <div className="text-5xl">{result.emoji}</div>
        <h1 className="text-3xl font-bold text-gray-900">{result.name}</h1>
        <p className="text-lg text-gray-600">{result.description}</p>
      </div>

      {/* Trait Breakdown */}
      <div className="rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 font-semibold text-gray-900">Your Traits</h2>
        <div className="space-y-3">
          {(['W', 'D', 'B', 'A'] as const).map((trait) => (
            <div key={trait} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  {formatTraitName(trait)}
                </span>
                <span className="text-gray-600">{scores[trait]}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div
                  className={`h-2 rounded-full transition-all ${
                    trait === 'W'
                      ? 'bg-blue-500'
                      : trait === 'D'
                        ? 'bg-purple-500'
                        : trait === 'B'
                          ? 'bg-red-500'
                          : 'bg-green-500'
                  }`}
                  style={{ width: `${(scores[trait] / maxScore) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {onRestart && (
          <Button
            onClick={onRestart}
            variant="secondary"
            fullWidth
          >
            Take Again
          </Button>
        )}
        {onShare && (
          <Button
            onClick={onShare}
            variant="outline"
            fullWidth
          >
            Share Result
          </Button>
        )}
      </div>
    </div>
  );
};
