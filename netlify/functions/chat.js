const PROFILE_CONTEXT = `
Said Khail is a technical engineer with an interest in AI-focused engineering, automation, and practical technology roles.

Summary:
- Hands-on experience building and improving software systems in startup and business environments.
- Experienced in automation, workflow optimisation, application development, customer onboarding, troubleshooting, and internal process improvement.
- Comfortable collaborating with technical and non-technical teams.

Technical skills:
- Languages: JavaScript, Python
- Frameworks and libraries: React, Django
- Data and analytics: Pandas, Power BI
- Tools: Git, Azure, MongoDB, PostgreSQL, Selenium, Postman, PowerApps
- Methodology: Kanban

Education:
- MSc Computer Science with Artificial Intelligence, University of York, 2024-2026.
- Relevant subjects: Machine Learning, Applied AI, Algorithms, Cloud Computing, Data Structures.
- edX Frontend certificate, University of Birmingham, 2023-2024.
- Relevant subjects: JavaScript, CSS, React, Tailwind.
- BSc Ecommerce and Business, University of Plymouth, 2015-2018.
- Relevant subjects: Digital Marketing, Ethics and Compliance, Finance, Big Data.

Experience:
- LIFYA, London, Intern to Software Engineer, June 2024 - Jan 2025.
  Built a multi-vendor dashboard in a startup team using the MERN stack. Helped vendor management and compliance with product standards. Built core dashboard features that reduced manual admin time by 30%. Improved workflow usability, contributing to a 40% drop in vendor resubmission. Worked with Git, Azure, Kanban, and agile delivery.
- Yusen Logistics, Northampton, IT Specialist, Sept 2022 - Sept 2023.
  Deployed PowerApps solutions integrating SharePoint to automate logistics workflows, removing 35% of manual processes. Delivered training and documentation to 20+ staff members and supported adoption of the tools.
- Infinity, Reigate, Software Developer in Testing and Technical Support, May 2019 - July 2020.
  Designed Selenium automated testing scripts that reduced manual testing time by 40%. Helped create test plans and end-to-end QA for releases, contributing to a 30% reduction in release errors. Worked with development and product teams to reproduce bugs and assure feature integration. Delivered B2B support for call tracking software by phone and email, handling 100-150 tickets per week.

Portfolio projects:
- Smart Gadget: ecommerce app for discovering and purchasing gadgets.
- Movie Quest: team-built movie search application.
- Anime Quest: anime quiz with a high score system.

Contact:
- GitHub: https://github.com/SKhail
- Email: saidkhail091@gmail.com
`;

const SUGGESTED_QUESTIONS = [
  'What AI-related skills does Said have?',
  'What experience does Said have?',
  'What projects has Said built?',
  'Why is Said interested in AI solutions?',
  'How can I contact Said?',
];

const TOPIC_KEYWORDS = [
  'said',
  'khail',
  'cv',
  'resume',
  'portfolio',
  'summary',
  'about',
  'background',
  'project',
  'projects',
  'experience',
  'work',
  'job',
  'role',
  'hire',
  'hiring',
  'recruiter',
  'employer',
  'candidate',
  'skills',
  'skill',
  'education',
  'degree',
  'msc',
  'university',
  'ai',
  'artificial intelligence',
  'machine learning',
  'developer',
  'engineer',
  'solutions',
  'react',
  'python',
  'javascript',
  'django',
  'pandas',
  'power bi',
  'azure',
  'mongodb',
  'postgresql',
  'selenium',
  'powerapps',
  'contact',
  'email',
  'github',
  'lifya',
  'yusen',
  'infinity',
];

const headers = {
  'Content-Type': 'application/json',
};

const fallbackReply = {
  reply:
    'I can only answer questions about Said Khail, including his skills, experience, projects, education, AI career goals, and contact details. Try one of the suggested questions below.',
  suggestions: SUGGESTED_QUESTIONS,
};

const isOnTopic = (message) => {
  const normalisedMessage = message.toLowerCase();
  return TOPIC_KEYWORDS.some((keyword) => normalisedMessage.includes(keyword));
};

const buildPrompt = (message) => `
You are ByteSaid, a concise chatbot persona on Said Khail's personal portfolio website.

Rules:
- Only answer using the profile context below.
- Answer in the third person, using "Said".
- Keep answers warm, professional, and under 120 words unless the user asks for detail.
- If the question is not about Said's skills, experience, projects, education, AI career goals, or contact details, say you cannot answer and offer suggested questions.
- Do not invent facts, dates, employers, qualifications, project details, or contact details.
- If the profile context does not include the answer, say that the website does not currently include that detail.
- Position Said toward AI-focused, automation, and practical problem-solving roles when relevant, without claiming a fixed job title.

Profile context:
${PROFILE_CONTEXT}

User question:
${message}
`;

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let message = '';

  try {
    const body = JSON.parse(event.body || '{}');
    message = String(body.message || '').trim();
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  if (!message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Please send a question.' }),
    };
  }

  if (message.length > 500) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Please keep your question under 500 characters.' }),
    };
  }

  if (!isOnTopic(message)) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(fallbackReply),
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';

  if (!apiKey) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply:
          'ByteSaid is ready',
        suggestions: SUGGESTED_QUESTIONS,
      }),
    };
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: buildPrompt(message) }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 220,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);

      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          reply: 'ByteSaid could not reach Gemini just now. Please try one of the suggested questions again in a moment.',
          suggestions: SUGGESTED_QUESTIONS,
        }),
      };
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.map((part) => part.text).join('').trim();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply: reply || fallbackReply.reply,
        suggestions: SUGGESTED_QUESTIONS,
      }),
    };
  } catch (error) {
    console.error('Chat function error:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        reply: 'ByteSaid had a temporary problem. Please try again shortly.',
        suggestions: SUGGESTED_QUESTIONS,
      }),
    };
  }
}
