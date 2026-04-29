'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PersonalityResult } from '@/lib/types';
import { Button } from './common/Button';

interface ResultCardProps {
  result: PersonalityResult;
  onRestart?: () => void;
  onExplore?: string; // Path to explore page
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  onRestart,
  onExplore,
}) => {
  return (
    <div className="space-y-6">
      {/* Dish Image */}
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-100" style={{ height: '600px' }}>
        <Image
          src={result.image}
          alt={result.name}
          fill
          className="object-contain p-4"
          priority
        />
      </div>

      {/* Result Info */}
      <div className="space-y-2 text-center">
        <div className="text-5xl">{result.emoji}</div>
        <h1 className="text-3xl font-bold text-gray-900">{result.name}</h1>
        <p className="text-lg text-gray-600">{result.description}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        {onExplore && (
          <Link href={onExplore} className="w-full">
            <Button variant="primary" fullWidth>
              Explore All Dishes
            </Button>
          </Link>
        )}
        {onRestart && (
          <Button onClick={onRestart} variant="secondary" fullWidth>
            Take Quiz Again
          </Button>
        )}
      </div>
    </div>
  );
};
