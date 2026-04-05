import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { PortfolioData } from "../data/portfolio";
import { answerPortfolioQuestion } from "../utils/ai";

type ChatbotWidgetProps = {
  portfolio: PortfolioData;
};

type ChatEntry = {
  role: "assistant" | "user";
  content: string;
};

export function ChatbotWidget({ portfolio }: ChatbotWidgetProps) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatEntry[]>([
    {
      role: "assistant",
      content:
        "Ask anything about Gaurav: skills, projects, internships, education, contact details, or resume.",
    },
  ]);

  const quickPrompts = useMemo(
    () => [
      "What are Gaurav’s main skills?",
      "Tell me about GoalTrackr and TicketFlix.",
      "What internships has Gaurav done?",
      "How can I contact Gaurav?",
    ],
    [],
  );

  const submitQuestion = () => {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    const nextMessages: ChatEntry[] = [
      ...messages,
      { role: "user", content: trimmed },
      {
        role: "assistant",
        content: answerPortfolioQuestion(trimmed, portfolio),
      },
    ];
    setMessages(nextMessages);
    setQuestion("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[min(92vw,380px)] overflow-hidden rounded-3xl border border-white/10 bg-[#07111f]/95 shadow-glowStrong backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan/70">
                Ask about Gaurav
              </p>
              <h3 className="flex items-center gap-2 text-sm font-medium text-white">
                <Bot size={16} /> AI Assistant
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 transition hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-72 space-y-3 overflow-auto px-4 py-4">
            {messages.map((entry, index) => (
              <div
                key={`${entry.role}-${index}`}
                className={
                  entry.role === "user"
                    ? "ml-8 rounded-2xl bg-cyan/12 px-3 py-2 text-sm text-white"
                    : "mr-8 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted"
                }
              >
                {entry.content}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setQuestion(prompt)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 transition hover:border-cyan/40 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    submitQuestion();
                  }
                }}
                placeholder="Type a question..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan/50"
              />
              <button
                type="button"
                onClick={submitQuestion}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-neon to-cyan px-4 text-white transition hover:opacity-90"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-cyan/30 bg-white/10 text-cyan shadow-glow backdrop-blur-xl transition hover:scale-105 hover:bg-white/15"
        >
          <MessageCircle
            size={22}
            className="transition group-hover:scale-110"
          />
        </button>
      )}
    </div>
  );
}
