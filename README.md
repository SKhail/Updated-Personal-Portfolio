# Personal Portfolio

This is a personal portfolio website built with [React], and [Tailwind CSS] . The website showcases my projects, skills, and contact information.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo [here]().

## Features

- Responsive design
- Dark mode support
- Projects showcase
- Skills display
- Contact form

## Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed.

### Installation Steps

1. Clone the repository:
   - ```bash
     git clone https://github.com/yourusername/your-repo-name.git
     ```
2. Navigate to the project directory:
   - ```bash
     cd your-repo-name
     ```
3. Install the dependencies:
   - ```bash
     npm install
     ```

## Usage

To start the development server, run:

```bash
npm run dev
```

## ByteSaid Chatbot

This portfolio includes an AI chatbot persona called ByteSaid. It answers questions about Said's skills, experience, education, projects, AI career goals, and contact details.

### Local Development

For the frontend only:

```bash
npm run dev
```

To test the chatbot function locally, run the site through Netlify CLI:

```bash
netlify dev
```

The frontend calls the function at:

```bash
/.netlify/functions/chat
```

### Deployment

The `netlify.toml` file configures Netlify to run:

```bash
npm run build
```

and publish the `dist` folder. The serverless function is deployed from `netlify/functions/chat.js`.
