'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { ResultCard } from '@/components/ResultCard';
import { Button } from '@/components/common/Button';
import { deserializeScores } from '@/lib/utils';
import { getPersonalityResult } from '@/lib/personalityData';
import { PersonalityResult, QuizScore } from '@/lib/types';

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [scores, setScores] = useState<QuizScore | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const primary = searchParams.get('primary');
    const secondary = searchParams.get('secondary');
    const scoresData = deserializeScores(searchParams);

    if (!primary || !secondary) {
      router.push('/');
      return;
    }

    const personalityResult = getPersonalityResult(primary, secondary);
    if (!personalityResult) {
      router.push('/');
      return;
    }

    setResult(personalityResult);
    setScores(scoresData);
  }, [searchParams, router]);

  if (!mounted || !result || !scores) {
    return (
      <Container className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading your result...</p>
        </div>
      </Container>
    );
  }

  const handleRestart = () => {
    router.push('/');
  };

  return (
    <Container className="py-8">
      <div className="space-y-8">
        {/* Celebration */}
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Your Personality Match!
          </h1>
        </div>

        {/* Result Card */}
        <ResultCard
          result={result}
          onRestart={handleRestart}
          onExplore="/explore"
        />

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <Button variant="secondary" size="md">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<Container className="flex items-center justify-center min-h-screen"><div className="text-center"><div className="animate-spin text-4xl mb-4">⏳</div><p className="text-gray-600">Loading your result...</p></div></Container>}>
      <ResultContent />
    </Suspense>
  );
}
