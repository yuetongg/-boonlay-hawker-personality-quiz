'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { QuizQuestion } from '@/components/QuizQuestion';
import { QuizProgress } from '@/components/QuizProgress';
import { Button } from '@/components/common/Button';
import { useQuizState } from '@/hooks/useQuizState';
import { questions } from '@/lib/quizData';
import { calculateScores, getTopTwoTraits } from '@/lib/scoring';
import { serializeScores, deserializeAnswers } from '@/lib/utils';

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  const quizState = useQuizState(questions.length);

  // Load existing answers from URL on mount
  useEffect(() => {
    setMounted(true);
    const existingAnswers = deserializeAnswers(searchParams);
    if (Object.keys(existingAnswers).length > 0) {
      Object.entries(existingAnswers).forEach(([questionId, answer]) => {
        quizState.setAnswer(parseInt(questionId), answer);
      });
    }
  }, []);

  if (!mounted) {
    return (
      <Container className="py-8">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  const currentQuestion = questions.find((q) => q.id === quizState.currentQuestion);
  if (!currentQuestion) return null;

  const handleNext = () => {
    if (quizState.currentQuestion === questions.length) {
      // Quiz complete, redirect to result
      const scores = calculateScores(quizState.answers);
      const [primary, secondary] = getTopTwoTraits(scores, quizState.answers);
      const scoresQuery = serializeScores(scores);
      router.push(`/result?${scoresQuery}&primary=${primary}&secondary=${secondary}`);
    } else {
      quizState.nextQuestion();
    }
  };

  const handlePrevious = () => {
    quizState.previousQuestion();
  };

  const handleAnswer = (answer: string) => {
    quizState.setAnswer(currentQuestion.id, answer);
  };

  const isAnswerSelected = quizState.isAnswered(currentQuestion.id);
  const isLastQuestion = quizState.currentQuestion === questions.length;

  return (
    <Container className="py-8">
      <div className="space-y-8">
        {/* Progress Bar */}
        <QuizProgress
          current={quizState.currentQuestion}
          total={questions.length}
        />

        {/* Question */}
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={quizState.answers[currentQuestion.id]}
          onAnswerSelect={handleAnswer}
        />

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={quizState.currentQuestion === 1}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isAnswerSelected}
            className="flex-1"
          >
            {isLastQuestion ? 'See Result' : 'Next'}
          </Button>
        </div>

        {/* Question Indicators */}
        <div className="flex flex-wrap gap-2 justify-center">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => quizState.goToQuestion(q.id)}
              className={`h-10 w-10 rounded-lg font-semibold transition-colors ${
                q.id === quizState.currentQuestion
                  ? 'bg-orange-600 text-white'
                  : quizState.isAnswered(q.id)
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<Container className="py-8"><div className="text-center">Loading quiz...</div></Container>}>
      <QuizContent />
    </Suspense>
  );
}
