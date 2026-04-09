import { chatbotKnowledge, Project, PortfolioData } from "../data/portfolio";

function normalizeQuestion(input: string) {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function getTopItems(items: string[], limit = 5) {
  return items.slice(0, limit).join(", ");
}

function formatList(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function findAskedProject(question: string, portfolio: PortfolioData) {
  const normalized = normalizeQuestion(question);
  return portfolio.projects.find((project) => {
    const title = project.title.toLowerCase();
    const aliases = title
      .replace(/official website/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 3);

    return (
      normalized.includes(title) ||
      aliases.some((alias) => normalized.includes(alias))
    );
  });
}

function buildIntroResponse(portfolio: PortfolioData) {
  return [
    `${portfolio.hero.name} is a ${portfolio.about.headline}.`,
    portfolio.hero.intro,
    "",
    "Quick highlights:",
    formatList(portfolio.hero.highlights),
  ].join("\n");
}

function buildSkillsResponse(portfolio: PortfolioData) {
  const skillBlocks = portfolio.skills
    .map((skill) => `- ${skill.title}: ${getTopItems(skill.items, 6)}`)
    .join("\n");

  return [
    `${portfolio.hero.name} works across frontend, backend, and product-focused engineering.`,
    "",
    "Core technical skills:",
    skillBlocks,
    "",
    `Soft skills: ${portfolio.softSkills.join(", ")}.`,
  ].join("\n");
}

function buildProjectsResponse(portfolio: PortfolioData) {
  const details = portfolio.projects
    .map(
      (project) =>
        `- ${project.title}: ${project.description}\n  Tech: ${project.tech.join(", ")}\n  Live: ${project.live}`,
    )
    .join("\n");

  return [
    "Featured projects:",
    details,
    "",
    "If you want, ask about a specific project name for a deeper breakdown.",
  ].join("\n");
}

function buildProjectSpecificResponse(project: Project) {
  return [
    `${project.title} overview:`,
    project.description,
    "",
    `Tech stack: ${project.tech.join(", ")}.`,
    `GitHub: ${project.github}`,
    `Live: ${project.live}`,
  ].join("\n");
}

function buildExperienceResponse(portfolio: PortfolioData) {
  const internshipLines = portfolio.experience
    .map((item) => {
      const keyPoints = item.points.slice(0, 2).join(" ");
      return `- ${item.title} at ${item.company} (${item.period}): ${keyPoints}`;
    })
    .join("\n");

  return [
    `Internship and work experience summary (${portfolio.experience.length} roles):`,
    internshipLines,
    "",
    "Ask me any role name for complete point-wise details.",
  ].join("\n");
}

function buildRoleSpecificExperienceResponse(
  portfolio: PortfolioData,
  normalized: string,
) {
  const role = portfolio.experience.find((item) => {
    const title = item.title.toLowerCase();
    const company = item.company.toLowerCase();
    return normalized.includes(title) || normalized.includes(company);
  });

  if (!role) {
    return null;
  }

  return [
    `${role.title} - ${role.company} (${role.period})`,
    "",
    "Responsibilities and outcomes:",
    formatList(role.points),
  ].join("\n");
}

function buildEducationResponse(portfolio: PortfolioData) {
  const lines = portfolio.education
    .map(
      (item) =>
        `- ${item.title}, ${item.institution} (${item.year}) - ${item.detail}`,
    )
    .join("\n");

  return [`Education details:`, lines].join("\n");
}

function buildCertificatesResponse(portfolio: PortfolioData) {
  const sample = portfolio.certificates.slice(0, 8).map((cert) => cert.title);
  return [
    `${portfolio.hero.name} has ${portfolio.certificates.length}+ certifications across CS fundamentals, cloud, Linux, and web development.`,
    "",
    "Top certifications:",
    formatList(sample),
  ].join("\n");
}

function buildContactResponse(portfolio: PortfolioData) {
  return [
    "Contact details:",
    `- Email: ${portfolio.contact.email}`,
    `- Phone: ${portfolio.contact.phone}`,
    `- Location: ${portfolio.contact.location}`,
    `- LinkedIn: ${portfolio.socials.find((social) => social.label.toLowerCase() === "linkedin")?.url ?? "Not listed"}`,
    `- GitHub: ${portfolio.socials.find((social) => social.label.toLowerCase() === "github")?.url ?? "Not listed"}`,
  ].join("\n");
}

function buildResumeResponse(portfolio: PortfolioData) {
  return [
    "Resume is available in the Resume section.",
    `Direct file path: ${portfolio.resumeUrl}`,
    "Click the Download Resume button to download it instantly.",
  ].join("\n");
}

function buildAchievementsResponse() {
  return [
    "Key strengths and highlights:",
    formatList(chatbotKnowledge.strengths),
    "",
    "Notable achievements:",
    formatList(chatbotKnowledge.achievements),
  ].join("\n");
}

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
  const normalized = normalizeQuestion(question);

  const askedProject = findAskedProject(question, portfolio);
  const roleSpecific = buildRoleSpecificExperienceResponse(
    portfolio,
    normalized,
  );

  if (roleSpecific) {
    return roleSpecific;
  }

  if (askedProject) {
    return buildProjectSpecificResponse(askedProject);
  }

  if (
    includesAny(normalized, [
      "who",
      "about",
      "introduce",
      "profile",
      "kaun",
      "kon",
      "intro",
      "apna",
      "batao",
      "apke bare",
      "tumhare bare",
    ])
  ) {
    return buildIntroResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "skill",
      "tech",
      "stack",
      "tools",
      "technology",
      "technologies",
      "kis tech",
      "kya aata",
      "expertise",
    ])
  ) {
    return buildSkillsResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "project",
      "build",
      "portfolio project",
      "banaya",
      "banaye",
      "kaam",
    ])
  ) {
    return buildProjectsResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "experience",
      "internship",
      "work",
      "job",
      "intern",
      "anubhav",
      "tajurba",
      "staj",
    ])
  ) {
    return buildExperienceResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "education",
      "college",
      "cgpa",
      "degree",
      "school",
      "academics",
      "padhai",
      "qualification",
    ])
  ) {
    return buildEducationResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "certificate",
      "certification",
      "certificates",
      "nptel",
      "aws",
      "linux",
      "praman",
      "certificate list",
    ])
  ) {
    return buildCertificatesResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "contact",
      "email",
      "phone",
      "location",
      "linkedin",
      "github",
      "reach",
      "sampark",
      "number",
      "mobile",
      "mail",
    ])
  ) {
    return buildContactResponse(portfolio);
  }

  if (includesAny(normalized, ["resume", "cv", "biodata", "download resume"])) {
    return buildResumeResponse(portfolio);
  }

  if (
    includesAny(normalized, [
      "strength",
      "special",
      "focus",
      "achievement",
      "accomplishment",
      "highlight",
      "why hire",
    ])
  ) {
    return buildAchievementsResponse();
  }

  if (includesAny(normalized, ["language", "speak", "hindi", "english"])) {
    return `${chatbotKnowledge.name} communicates in ${chatbotKnowledge.languages.join(" and ")}.`;
  }

  if (
    includesAny(normalized, [
      "learning",
      "currently",
      "preparing",
      "study",
      "roadmap",
    ])
  ) {
    return `Current learning focus: ${chatbotKnowledge.learningNow.join(", ")}. ${chatbotKnowledge.codingPractice}`;
  }

  if (
    includesAny(normalized, [
      "hire",
      "available",
      "opportunity",
      "open to work",
    ])
  ) {
    return chatbotKnowledge.availability;
  }

  return [
    `I can give detailed and accurate information about ${chatbotKnowledge.name}.`,
    "Try asking one of these:",
    "- Introduce yourself",
    "- Explain GoalTrackr project in detail",
    "- Share all internships with responsibilities",
    "- Show education and CGPA",
    "- List top certifications",
    "- Share contact details and resume",
  ].join("\n");
}

export function summarizeTechStack(project: Project) {
  return project.tech.join(" • ");
}
