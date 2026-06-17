import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/Images/profilepic.png";

const starterQuestions = [
  "Give me a summary of Said",
  "What experience does Said have?",
  "What AI-related skills does Said have?",
  "What projects has Said built?",
  "How can I contact Said?",
];

const initialMessages = [
  {
    role: "assistant",
    text: "Hi, I'm ByteSaid, Said's portfolio guide. Ask for a summary, skills, experience, projects, education, or contact details.",
  },
];

const getRouteAction = (questionText) => {
  const normalisedQuestion = questionText.toLowerCase();

  if (normalisedQuestion.includes("project") || normalisedQuestion.includes("built") || normalisedQuestion.includes("portfolio")) {
    return {
      label: "Open Projects page",
      to: "/projects",
    };
  }

  if (normalisedQuestion.includes("journey") || normalisedQuestion.includes("education") || normalisedQuestion.includes("experience")) {
    return {
      label: "Open CV page",
      to: "/cv",
    };
  }

  return null;
};

const getLocalPortfolioReply = (questionText) => {
  const normalisedQuestion = questionText.toLowerCase();

  if (normalisedQuestion.includes("project") || normalisedQuestion.includes("built") || normalisedQuestion.includes("portfolio")) {
    return "Said has built projects including Smart Gadget, Movie Quest, Anime Quest, Weather Dashboard, Daily Planner, Java Coffee, and a CLI README Generator. For the full list, open the Projects page.";
  }

  if (normalisedQuestion.includes("skill") || normalisedQuestion.includes("ai") || normalisedQuestion.includes("technical")) {
    return "Said works with JavaScript, Python, React, Django, Pandas, Power BI, Azure, MongoDB, PostgreSQL, Selenium, Postman, and PowerApps. He is interested in AI-focused engineering, automation, and practical technology roles.";
  }

  if (normalisedQuestion.includes("experience") || normalisedQuestion.includes("work") || normalisedQuestion.includes("job")) {
    return "Said has experience as a Software Engineer at LIFYA, an IT Specialist at Yusen Logistics, and a Software Developer in Testing and Technical Support at Infinity. His work includes dashboards, workflow automation, QA, technical support, and process improvement.";
  }

  if (normalisedQuestion.includes("education") || normalisedQuestion.includes("journey") || normalisedQuestion.includes("degree")) {
    return "Said is studying an MSc in Computer Science with Artificial Intelligence at the University of York. He also has a frontend certificate from the University of Birmingham/edX and a BSc in Ecommerce and Business from the University of Plymouth.";
  }

  if (normalisedQuestion.includes("contact") || normalisedQuestion.includes("email") || normalisedQuestion.includes("github")) {
    return "You can contact Said by email at saidkhail091@gmail.com or view his GitHub at github.com/SKhail.";
  }

  if (normalisedQuestion.includes("summary") || normalisedQuestion.includes("about") || normalisedQuestion.includes("candidate")) {
    return "Said Khail is a technical engineer with experience across software development, automation, workflow optimisation, testing, support, and stakeholder-facing technical delivery. He is especially interested in AI-focused and problem-solving roles.";
  }

  return "I can answer questions about Said’s summary, skills, experience, projects, education, AI career goals, and contact details. Try asking for a summary or asking about his projects.";
};

const AskSaid = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [question, setQuestion] = useState("");
  const [suggestions, setSuggestions] = useState(starterQuestions);
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = async (questionText) => {
    const trimmedQuestion = questionText.trim();

    if (!trimmedQuestion || isLoading) {
      return;
    }

    setQuestion("");
    setIsLoading(true);
    setMessages((currentMessages) => [...currentMessages, { role: "user", text: trimmedQuestion }]);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedQuestion }),
      });

      const responseText = await response.text();
      let data = null;

      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch {
        data = null;
      }

      if (!response.ok || !data) {
        throw new Error("The serverless chatbot function is not running in this preview.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          text: data.reply,
          action: getRouteAction(trimmedQuestion),
        },
      ]);

      if (Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions);
      }
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          text: getLocalPortfolioReply(trimmedQuestion),
          action: getRouteAction(trimmedQuestion),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    askQuestion(question);
  };

  return (
    <section
      id="ask-said"
      className="relative min-h-screen overflow-hidden bg-[#f6fbff] px-4 pb-28 pt-16 text-slate-950 transition-colors dark:bg-[#081126] dark:text-white sm:px-6 lg:px-10"
    >
      <div aria-hidden="true" className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-cyan-300/60 blur-3xl dark:bg-cyan-500/20"></div>
      <div aria-hidden="true" className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-fuchsia-300/50 blur-3xl dark:bg-fuchsia-500/20"></div>
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/70 blur-3xl dark:bg-blue-500/20"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="w-full">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={ProfilePic}
              alt="Said Khail"
              className="mx-auto h-28 w-28 rounded-full border-4 border-white object-cover shadow-2xl shadow-blue-400/30 dark:border-white/10 sm:h-36 sm:w-36"
            />
            <h1 className="mt-3 font-header text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">Said Khail</h1>
            <p className="mt-4 font-header text-lg font-semibold text-blue-600 dark:text-cyan-200 sm:text-2xl"> AI-Curious Problem Solver</p>
            <p className="mx-auto mt-6 max-w-2xl font-body text-base italic leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
              "Building practical software, automation, and AI-focused solutions that help teams work smarter."
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex min-h-[38rem] flex-col rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-blue-200/60 backdrop-blur dark:border-white/10 dark:bg-[#101b3a]/90 dark:shadow-black/30 sm:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-2xl text-white shadow-lg shadow-fuchsia-300/40">
                    <span aria-hidden="true">◇</span>
                  </div>
                  <div>
                    <p className="font-nav text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-cyan-300">Chat with portfolio</p>
                    <h2 className="mt-2 font-header text-2xl font-bold text-slate-950 dark:text-white">ByteSaid</h2>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-3xl px-5 py-4 font-body text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white"
                          : "bg-slate-100 text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-100"
                      }`}
                    >
                      {message.text}
                      {message.action && (
                        <Link
                          to={message.action.to}
                          className="mt-4 inline-flex rounded-2xl bg-blue-600 px-4 py-2 font-body text-xs font-semibold text-white transition hover:bg-blue-500"
                        >
                          {message.action.label}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-3xl bg-slate-100 px-5 py-4 font-body text-sm text-slate-600 shadow-sm">Thinking...</div>
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-white/10 dark:bg-white/10 sm:flex-row"
              >
                <label htmlFor="ask-said-question" className="sr-only">
                  Ask ByteSaid a question
                </label>
                <input
                  id="ask-said-question"
                  type="text"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask ByteSaid for a summary, skills, experience..."
                  maxLength="500"
                  className="min-h-12 flex-1 rounded-2xl border border-slate-200 bg-white px-4 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-fuchsia-400 dark:border-white/10 dark:bg-[#081126] dark:text-white dark:placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={isLoading || !question.trim()}
                  className="rounded-2xl bg-slate-950 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
                >
                  Ask
                </button>
              </form>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => askQuestion(suggestion)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 font-body text-xs text-slate-600 shadow-sm transition hover:border-fuchsia-300 hover:text-fuchsia-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-center font-body text-xs text-slate-500 dark:text-slate-400">ByteSaid only answers portfolio-related questions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskSaid;
