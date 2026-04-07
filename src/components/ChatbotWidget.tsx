import { useEffect, useMemo, useRef, useState } from "react";
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
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<ChatEntry[]>([
    {
      role: "assistant",
      content: portfolio.chatbotUi.welcomeMessage,
    },
  ]);

  const quickPrompts = useMemo(
    () => portfolio.chatbotUi.quickPrompts,
    [portfolio.chatbotUi.quickPrompts],
  );

  useEffect(() => {
    if (!open || !messagesContainerRef.current) {
      return;
    }

    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }, [messages, open]);

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
                {portfolio.chatbotUi.panelEyebrow}
              </p>
              <h3 className="flex items-center gap-2 text-sm font-medium text-white">
                <Bot size={16} /> {portfolio.chatbotUi.panelTitle}
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
          <div
            ref={messagesContainerRef}
            className="max-h-72 space-y-3 overflow-y-auto px-4 py-4"
          >
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
                placeholder={portfolio.chatbotUi.inputPlaceholder}
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
          aria-label={portfolio.chatbotUi.closedButtonLabel}
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
