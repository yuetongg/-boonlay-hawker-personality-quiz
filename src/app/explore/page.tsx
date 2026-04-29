'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { personalityResults } from '@/lib/personalityData';

export default function ExplorePage() {
  return (
    <Container className="py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Explore All Personalities
          </h1>
          <p className="text-lg text-gray-600">
            Discover all 12 hawker centre personalities
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalityResults.map((personality) => (
            <div
              key={personality.traits}
              className="rounded-lg bg-white border-2 border-gray-100 p-6 hover:border-orange-300 transition-colors"
            >
              {/* Image */}
              <div className="relative h-40 w-full mb-4 rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  src={personality.image}
                  alt={personality.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Info */}
              <div className="space-y-2 text-center">
                <div className="text-3xl">{personality.emoji}</div>
                <h3 className="font-bold text-gray-900">{personality.name}</h3>
                <p className="text-sm text-gray-600">{personality.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mastercopy */}
        <div className="space-y-4 mt-12 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            The Boonlay Hawker Collection
          </h2>
          <div className="relative h-96 w-full rounded-lg bg-gray-100 overflow-hidden">
            <Image
              src="/assets/mastercopy.png"
              alt="Boonlay Hawker Mastercopy"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 justify-center pt-8">
          <Link href="/result">
            <Button variant="outline">
              Back to Result
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
