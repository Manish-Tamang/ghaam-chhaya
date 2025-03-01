# Yabesh Thapa Fan Website

This is a fan-made website dedicated to the Nepali artist Yabesh Thapa. It's built using Next.js and showcases his music, videos, merch, and other information.

## Features

- **Hero Section:** Displays a prominent image of Yabesh Thapa with links to his social media profiles.
- **Tabs Section:** Allows users to navigate between different content sections like Videos, Merch, Music, About, and More.
- **Official Videos:** A carousel showcasing Yabesh Thapa's official music videos using `react-player`. Play/Pause functionality is included within the carousel.
- **Merch:** Displays available merchandise in a carousel format with links to purchase them.
- **Music Grid:** Shows a grid of Yabesh Thapa's top tracks fetched from the Spotify API using a carousel. Includes album art and a play button.
- **About:** Provides a biography of Yabesh Thapa, including information about his influences and upcoming album.
- **FAQ Section:** An accordion component that answers frequently asked questions about Yabesh Thapa.
- **More Section:** A placeholder section for additional content.

## Technologies Used

- **Next.js:** React framework for building performant web applications.
- **TypeScript:** Provides static typing for enhanced code quality and maintainability.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Radix UI:** A set of unstyled, accessible React primitives.
- **Embla Carousel:** A lightweight and performant carousel library.
- **Framer Motion:** A motion library for creating animations.
- **React Player:** A React component for playing a variety of URLs, including YouTube videos.
- **Spotify API:** Used to fetch artist's top tracks and albums.
- **Lucide React:** A collection of beautiful and consistent SVG icons.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Manish-Tamang/ghaam-chhaya.git
   cd ghaam-chhaya
   ```

2. **Install dependencies:**

   ```bash
   npm install # or yarn install or pnpm install or bun install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   SPOTIFY_CLIENT_ID=<your_spotify_client_id>
   SPOTIFY_CLIENT_SECRET=<your_spotify_client_secret>
   SPOTIFY_REFRESH_TOKEN=<your_spotify_refresh_token>
   ```

   **Note:** You will need to obtain your Spotify Client ID, Client Secret, and Refresh Token from the Spotify Developer Dashboard: [https://developer.spotify.com/](https://developer.spotify.com/)

4. **Run the development server:**

   ```bash
   npm run dev # or yarn dev or pnpm dev or bun dev
   ```

5. **Open your browser and navigate to `http://localhost:3000`** to view the website.

## Folder Structure

```
├── .eslintrc.json # ESLint configuration
├── .gitignore # Specifies intentionally untracked files that Git should ignore
├── README.md # This file
├── app # Next.js app directory
│ ├── api # API routes
│ │ └── spotify # Spotify API endpoints
│ │ ├── artist-tracks # Endpoint to fetch artist tracks from Spotify
│ │ └── top-tracks # Endpoint to fetch top tracks from Spotify
│ ├── favicon.ico # Favicon
│ ├── fonts # Custom fonts
│ ├── globals.css # Global CSS styles
│ ├── layout.tsx # Root layout component
│ └── page.tsx # Home page component
├── components.json # Shadcn UI component configuration
├── components # React components
│ ├── accordion.tsx # Accordion component
│ ├── button.tsx # Button component
│ ├── carousel.tsx # Carousel component
│ ├── faq-section.tsx # FAQ Section component
│ ├── hero-section.tsx # Hero section component
│ ├── latest-releases.tsx # Lists latest music releases (Spotify API)
│ ├── merch.tsx # Merch carousel component
│ ├── more-section.tsx # More Section component
│ ├── music-grid.tsx # Music grid component
│ ├── music-list.tsx # Music list component (potentially redundant)
│ ├── navigation.tsx # Navigation component
│ ├── official-videos.tsx # Official videos carousel component
│ ├── section-header.tsx # Section header component
│ ├── tabs-section.tsx # Tabs section component
│ ├── tabs.tsx # Tabs component
│ └── ui # Re-exported UI components
├── data # Static data
│ ├── faqs.ts # FAQ data
│ ├── merch.ts # Merch data
│ └── videos.ts # Video data
├── lib # Utility functions
│ └── utils.ts # Utility functions (e.g., class merging)
├── next.config.mjs # Next.js configuration
├── package-lock.json # Records the exact versions of dependencies
├── package.json # Project metadata and dependencies
├── postcss.config.mjs # PostCSS configuration
├── public # Public assets
│ ├── bg.jpg # Background image
│ ├── m1.png ... m6.png # Merchandise images
│ ├── thumbnails # Video thumbnails
│ └── videos # Video files
├── tailwind.config.js # Tailwind CSS configuration
├── tailwind.config.ts # Tailwind CSS configuration (TypeScript version)
└── tsconfig.json # TypeScript configuration
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.