ENAGRAM — Text Comparison Tool
A web application built as an interview project. Enagram is a Georgian-language productivity suite with a focus on text diffing — compare two texts side by side and instantly see what was added, removed, or kept the same.

Features

Text Comparison — Paste two versions of a text and get a word-level diff powered by the Longest Common Subsequence (LCS) algorithm
Visual Diff Output — Added words highlighted in green, removed words in red with strikethrough, unchanged text in neutral
Diff Summary — Shows a count of added and removed words at a glance
Animated Loading State — Progress bar with percentage feedback during diff computation
Responsive Layout — Sidebar navigation on desktop, collapsible top navbar on mobile
Language Selector — UI toggle between Georgian and English
Format Preservation Toggle — Option to preserve original text formatting
New Comparison Flow — Reset and start a fresh comparison with one click


Tech Stack
LayerTechnologyFrameworkReact 18 + TypeScriptStylingTailwind CSSBundlerViteAlgorithmLCS (dynamic programming)

Project Structure
src/
├── assets/               # Icons and images
├── components/
│   ├── layout/
│   │   ├── navbar.tsx    # Mobile top navigation bar
│   │   ├── sidebar.tsx   # Desktop collapsible sidebar
│   │   └── menu.tsx      # Top toolbar (language, format, reset)
│   └── common/
│       └── loading.tsx   # Animated progress bar component
├── App.tsx               # Main app logic and diff orchestration
├── App.css
└── main.tsx

Getting Started
Prerequisites

Node.js v18+
npm or yarn

Installation
bashgit clone https://github.com/aponchikaj/enagram.git
cd enagram
npm install
Running locally
bashnpm run dev
Open http://localhost:5173 in your browser.
Building for production
bashnpm run build

How the Diff Works
The comparison uses a classic Longest Common Subsequence dynamic programming approach:

Both texts are split into word arrays
An m × n DP table is built to find the longest matching word sequence
The table is backtracked to label each word as same, added, or removed
Results are rendered inline with color-coded highlights

Time complexity: O(m × n) where m and n are word counts of each text.

Author
Built by Lazare Mirziashvili as part of a frontend interview project.