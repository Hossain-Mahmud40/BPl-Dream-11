# BPL Dream XI

BPL Dream XI is a modern fantasy cricket squad builder built with React and Vite. Users can claim free coins, browse available cricket players, choose players for their squad, track their remaining wallet balance, and remove selected players with coin refunds.

## Live Website

Visit the deployed project here:

**https://bpl-dream-11-theta.vercel.app**

## Project Overview

This project provides a polished single-page fantasy cricket experience inspired by Dream11-style team selection. The interface focuses on clear player comparison, simple budget management, and a professional responsive layout suitable for desktop and mobile screens.

Users start with an initial coin balance, can claim an additional free credit bonus, and then build a squad by selecting players from the marketplace. Each selected player is added to the squad list, and removing a player refunds that player's cost back to the wallet.

## Key Features

- Claim 1000 free coins from the hero section
- View live wallet balance in the sticky navigation bar
- Browse available cricket players in responsive cards
- See player country, role, rating, batting style, bowling style, and price
- Select players while preventing duplicate selections
- Track selected squad count and total squad value
- Remove selected players and automatically refund coins
- Toast notifications for successful actions and errors
- Empty squad state with helpful guidance
- Modern responsive UI with a polished hero section and footer

## Tech Stack

- React
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Axios
- Vercel

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Hossain-Mahmud40/BPl-Dream-11.git
cd BPl-Dream-11
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production-ready build in the `dist` folder.

```bash
npm run lint
```

Runs ESLint to check source code quality.

```bash
npm run preview
```

Serves the production build locally for preview.

## Project Structure

```text
bpl-dream-11/
├── public/
│   └── data.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Navbar/
│   │   ├── Players/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Core User Flow

1. The user lands on the BPL Dream XI homepage.
2. The user claims 1000 free coins from the hero section.
3. The user browses available players in the marketplace.
4. The user selects players while staying within the available coin balance.
5. The selected squad view displays chosen players and squad value.
6. The user can remove a player to receive a coin refund.

## Deployment

The project is deployed on Vercel.

Production URL:

```text
https://bpl-dream-11-theta.vercel.app
```

The Vercel build command is:

```bash
npm run build
```

The output directory is:

```text
dist
```

## Author

Developed by Hossain Mahmud.
