'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { personalityResults } from '@/lib/personalityData';
import { PersonalityResult } from '@/lib/types';

export default function ExplorePage() {
  const [selectedDish, setSelectedDish] = useState<PersonalityResult | null>(null);

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
            <button
              key={personality.traits}
              onClick={() => setSelectedDish(personality)}
              className="rounded-lg bg-white border-2 border-gray-100 p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer text-left"
            >
              {/* Image */}
              <div className="relative h-56 w-full mb-4 rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  src={personality.image}
                  alt={personality.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Info */}
              <div className="space-y-2 text-center">
                <h3 className="font-bold text-gray-900">{personality.name}</h3>
                <p className="text-sm text-gray-600">{personality.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Mastercopy */}
        <div className="space-y-4 mt-12 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            The Boonlay Hawker Collection
          </h2>
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-100" style={{ height: '500px' }}>
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

      {/* Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4 bg-white border-b flex-shrink-0">
              <button
                onClick={() => setSelectedDish(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto flex-1 p-8 space-y-6">
              {/* Large Image - Constrained Height */}
              <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ height: '350px' }}>
                <Image
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Info */}
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-bold text-gray-900">{selectedDish.name}</h2>
                <p className="text-lg text-gray-600">{selectedDish.description}</p>
              </div>

              {/* Close Button */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => setSelectedDish(null)}
                  variant="secondary"
                  size="lg"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
