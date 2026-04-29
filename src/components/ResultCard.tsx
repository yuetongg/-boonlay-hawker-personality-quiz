'use client';

import React, { useState } from 'react';
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
  onExplore,
}) => {
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `I'm a ${result.name}! Check out the Boonlay Hawker Personality Quiz`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Boonlay Hawker Personality Quiz',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        setShareState('copied');
        setTimeout(() => setShareState('idle'), 2000);
      } catch {
        console.error('Failed to copy');
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Dish Image */}
      <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 'auto', minHeight: '500px', maxHeight: '700px' }}>
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
        <h1 className="text-3xl font-bold text-gray-900">{result.name}</h1>
        <p className="text-lg text-gray-600">{result.description}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Button
          onClick={handleShare}
          variant="primary"
          fullWidth
        >
          {shareState === 'copied' ? 'Copied to Clipboard!' : 'Share Result'}
        </Button>
        {onExplore && (
          <Link
            href={onExplore}
            onClick={() => {
              // Store current URL for back navigation
              if (typeof window !== 'undefined') {
                sessionStorage.setItem('resultUrl', window.location.href);
              }
            }}
            className="w-full"
          >
            <Button variant="secondary" fullWidth>
              Explore All Dishes
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
