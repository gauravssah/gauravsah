import { FormEvent, useState } from "react";
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";
import { generateSmartReply } from "../utils/ai";

type ContactSectionProps = {
  portfolio: PortfolioData;
};

export function ContactSection({ portfolio }: ContactSectionProps) {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "there");
    const message = String(formData.get("message") || "your message");
    setStatus(generateSmartReply(name, message));
    event.currentTarget.reset();
  };

  return (
    <AnimatedSection
      id="contact"
      className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Contact and collaboration"
        description="Send a message, and use the links below to reach me directly."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <GlassCard className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan/50"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan/50"
              />
            </div>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Message"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan/50"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-6 py-3 font-medium text-bg transition hover:opacity-90"
            >
              Send Message <Send size={18} />
            </button>
          </form>
          {status ? (
            <div className="mt-5 rounded-2xl border border-cyan/20 bg-cyan/8 px-4 py-3 text-sm text-cyan/90">
              {status}
            </div>
          ) : null}
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white">Direct contact</h3>
            <div className="mt-5 space-y-4 text-sm text-white/75">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-cyan" />{" "}
                {portfolio.contact.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-cyan" />{" "}
                {portfolio.contact.phone}
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan" />{" "}
                {portfolio.contact.location}
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white">Social links</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {portfolio.socials.map((social) => {
                const Icon =
                  social.label === "GitHub"
                    ? Github
                    : social.label === "LinkedIn"
                      ? Linkedin
                      : social.label === "Medium"
                        ? Globe
                        : Twitter;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-cyan/40 hover:text-white"
                  >
                    <Icon size={16} className="text-cyan" /> {social.label}
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
