# Boonlay Hawker Personality Quiz

A personality quiz themed around Singapore's Boonlay Hawker Centre. Discover which iconic hawker dish matches your personality through 4 traits: Warmth, Depth, Boldness, and Adaptability.

## Features

- **10 Interactive Questions**: Navigate through a guided hawker centre experience
- **4 Personality Traits**: Warmth (W), Depth (D), Boldness (B), Adaptability (A)
- **12 Unique Results**: Each personality combination maps to a different hawker dish
- **Smart Tie-breaker Logic**: Question 10 helps resolve personality trait conflicts
- **Beautiful UI**: Responsive design optimized for mobile and desktop
- **Share Results**: Share your personality match with friends

## Tech Stack

- **Framework**: Next.js 14+ with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (auto-deploy on push to main)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── quiz/page.tsx            # Quiz flow
│   ├── result/page.tsx          # Result display
│   └── globals.css              # Global styles
├── components/
│   ├── QuizQuestion.tsx         # Question component
│   ├── QuizProgress.tsx         # Progress bar
│   ├── ResultCard.tsx           # Result display
│   └── common/
│       ├── Button.tsx           # Reusable button
│       └── Container.tsx        # Layout wrapper
├── lib/
│   ├── types.ts                 # TypeScript types
│   ├── quizData.ts              # Quiz questions & answers
│   ├── personalityData.ts       # Personality results
│   ├── scoring.ts               # Scoring logic
│   └── utils.ts                 # Utility functions
└── hooks/
    └── useQuizState.ts          # Quiz state management
```

## Personality Results

### High Warmth (W)
- **W + B**: Nasi Lemak (The Icon) - Grounded but commanding presence
- **W + A**: Chicken Rice (The Purist) - Simple, dependable, widely loved
- **W + D**: Fish Soup (The Grounding Presence) - Calm, thoughtful, emotionally steady

### High Boldness (B)
- **B + W**: Satay (The Connector) - Charismatic, thrives with people
- **B + D**: Sambal Stingray (The Challenger) - Intense, honest, unforgettable
- **B + A**: Satay & BBQ Wings (The Bold Presence) - Expressive, dominant, high energy

### High Depth (D)
- **D + W**: Beancurd (The Support System) - Quietly strong, uplifting others
- **D + B**: Bar Chor Mee (The Intense Thinker) - Complex, emotionally rich
- **D + A**: Hokkien Mee (The Quiet Depth) - Layered, subtle, underestimated

### High Adaptability (A)
- **A + W**: Roti Prata (The Adapter) - Flexible, fits anywhere
- **A + D**: Orh Luak (The Individualist) - Unique, not for everyone
- **A + B**: Duck Noodle (The Independent) - Self-contained, strong identity

## Scoring Logic

1. Each answer awards points to personality traits (typically +2 primary, +1 secondary)
2. After all 10 questions, traits are scored
3. The top 2 traits form the personality result
4. **Tie-breaker**: Question 10 guides the direction (A→W/A, B→B/D)
5. If still tied: The trait with more "+2" wins are selected

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys with zero config
4. Auto-deploys on every push to main branch

```bash
git push origin main
```

## Development Notes

- Quiz state is managed via React Context Hook (useQuizState)
- Answers are stored in URL search params for easy sharing
- Scores are serialized in URL for transparent result sharing
- All data (questions, personalities) is client-side with no backend needed

## Future Enhancements

- Analytics to track popular personality types
- Social sharing with Open Graph meta tags
- Quiz history/favorites
- Comparison with other users
- Mobile app version

## License

MIT

## Author

Built with ❤️ for Boonlay Hawker Centre personalities
