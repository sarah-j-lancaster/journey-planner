This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed at:

[https://journey-planner.vercel.app/](https://journey-planner.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load custom Google Fon.

## Future optimisations:

- Set up a MSW and unit test the app interactions with it
  - Page loads with dropdown populated + unhappy path
  - Clicking on a dropdown option calls MSW
  - Trip cards are rendered from returned network call
  - Clicking on trip button calls booking endpoint
  - Button status is updated to booking during networking and button is disabled
  - Button status is updated to booked after successful network request and button is disabled
  - Button status is updated to error after failed network request and button is clickable
  - Booked state is persisted between stop selection change
- Better error handling and error pages
- Set up SASS variables for media queries and proper globals CSS file
- Make dropdown trigger searchable
