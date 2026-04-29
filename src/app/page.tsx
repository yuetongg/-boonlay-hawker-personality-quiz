'use client';

import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-8 text-center">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="text-6xl">🍜</div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Boonlay Hawker
          </h1>
          <h2 className="text-2xl font-semibold text-orange-600">
            Personality Quiz
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-3 max-w-md mx-auto">
          <p className="text-lg text-gray-700">
            Wander through the Boonlay Hawker Centre and discover your personality through the lens of its most iconic dishes.
          </p>
          <p className="text-sm text-gray-600">
            Answer 10 questions to find out which hawker dish matches your personality traits.
          </p>
        </div>

        {/* Traits Preview */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg bg-blue-50 p-3">
            <div className="text-xl mb-1">🔵</div>
            <p className="font-semibold text-gray-900">Warmth</p>
            <p className="text-xs text-gray-600">Social & Grounded</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-3">
            <div className="text-xl mb-1">🟣</div>
            <p className="font-semibold text-gray-900">Depth</p>
            <p className="text-xs text-gray-600">Introspective</p>
          </div>
          <div className="rounded-lg bg-red-50 p-3">
            <div className="text-xl mb-1">🔴</div>
            <p className="font-semibold text-gray-900">Boldness</p>
            <p className="text-xs text-gray-600">Expressive & Intense</p>
          </div>
          <div className="rounded-lg bg-green-50 p-3">
            <div className="text-xl mb-1">🟢</div>
            <p className="font-semibold text-gray-900">Adaptability</p>
            <p className="text-xs text-gray-600">Flexible & Easy</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/quiz">
          <Button size="lg" fullWidth className="mt-8">
            Start the Quiz
          </Button>
        </Link>
      </div>
    </Container>
  );
}
