import { chatbotKnowledge, Project, PortfolioData } from "../data/portfolio";

export function generateProjectDescription(title: string, techText: string) {
  const tech = techText
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);

  return `Built ${title} as a polished, scalable experience using ${tech.join(", ") || techText || "modern web technologies"}. The implementation emphasizes reusable components, responsive layout, and clean developer workflows.`;
}

export function generateSmartReply(name: string, message: string) {
  const summary = message.trim().slice(0, 120) || "your message";

  return `Hi ${name}, thanks for reaching out. I reviewed ${summary}. I will get back to you soon with a thoughtful response and next steps.`;
}

export function answerPortfolioQuestion(
  question: string,
  portfolio: PortfolioData,
) {
  const normalized = question.toLowerCase();

  const topSkills = portfolio.skills
    .flatMap((skill) => skill.items)
    .slice(0, 8)
    .join(", ");

  const projectsList = portfolio.projects
    .map((project) => project.title)
    .join(", ");

  const latestExperience = portfolio.experience[0];

  const askedProject = portfolio.projects.find((project) =>
    normalized.includes(project.title.toLowerCase()),
  );

  if (askedProject) {
    return `${askedProject.title}: ${askedProject.description} Tech stack includes ${askedProject.tech.join(", ")}. Live: ${askedProject.live}.`;
  }

  if (
    normalized.includes("who") ||
    normalized.includes("about") ||
    normalized.includes("gaurav") ||
    normalized.includes("introduce")
  ) {
    return `${chatbotKnowledge.name} is a ${chatbotKnowledge.role}. ${chatbotKnowledge.headline}. ${chatbotKnowledge.availability}`;
  }

  if (
    normalized.includes("skill") ||
    normalized.includes("tech") ||
    normalized.includes("stack")
  ) {
    return `${chatbotKnowledge.name} works with ${chatbotKnowledge.skills.join(", ")}. Core categories: ${portfolio.skills.map((skill) => skill.title).join(", ")}. Top tools right now: ${topSkills}.`;
  }

  if (normalized.includes("project") || normalized.includes("build")) {
    return `Highlighted projects are ${projectsList}. GoalTrackr and TicketFlix are full-stack production-style apps, while Animalslover is a real startup website delivery experience.`;
  }

  if (
    normalized.includes("experience") ||
    normalized.includes("internship") ||
    normalized.includes("work")
  ) {
    return `Experience includes ${chatbotKnowledge.experience}. Latest role: ${latestExperience?.title ?? "Intern"} at ${latestExperience?.company ?? "a product team"} (${latestExperience?.period ?? "recent"}).`;
  }

  if (
    normalized.includes("education") ||
    normalized.includes("college") ||
    normalized.includes("cgpa")
  ) {
    return `Education: ${chatbotKnowledge.education}. Previous academic records include diploma and intermediate science, with consistent performance.`;
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("phone") ||
    normalized.includes("location")
  ) {
    return `You can contact ${chatbotKnowledge.name} at ${chatbotKnowledge.email} or ${chatbotKnowledge.phone}. Location: ${chatbotKnowledge.location}.`;
  }

  if (normalized.includes("resume") || normalized.includes("cv")) {
    return `Resume is available in the Resume section and can be downloaded directly from this portfolio.`;
  }

  if (
    normalized.includes("strength") ||
    normalized.includes("special") ||
    normalized.includes("focus")
  ) {
    return `Core strengths: ${chatbotKnowledge.strengths.join(", ")}. Current focus areas: ${chatbotKnowledge.focusAreas.join(", ")}.`;
  }

  if (
    normalized.includes("achievement") ||
    normalized.includes("accomplishment") ||
    normalized.includes("highlight")
  ) {
    return `Notable highlights: ${chatbotKnowledge.achievements.join(" | ")}.`;
  }

  if (normalized.includes("language") || normalized.includes("speak")) {
    return `${chatbotKnowledge.name} communicates in ${chatbotKnowledge.languages.join(" and ")}.`;
  }

  if (
    normalized.includes("learning") ||
    normalized.includes("currently") ||
    normalized.includes("preparing")
  ) {
    return `Current learning focus: ${chatbotKnowledge.learningNow.join(", ")}. ${chatbotKnowledge.codingPractice}`;
  }

  if (normalized.includes("hire") || normalized.includes("available")) {
    return chatbotKnowledge.availability;
  }

  return `I can help with detailed information about ${chatbotKnowledge.name}: skills, projects, internships, education, contact details, and resume.`;
}

export function summarizeTechStack(project: Project) {
  return project.tech.join(" • ");
}
