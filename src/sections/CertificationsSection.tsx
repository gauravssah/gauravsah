import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";
import { assetPath } from "../utils/assetPath";

type CertificationsSectionProps = {
  portfolio: PortfolioData;
};

function getCertificateImage(index: number) {
  return assetPath(`/images/certificates/certificate-${index + 1}.jpg`);
}

export function CertificationsSection({
  portfolio,
}: CertificationsSectionProps) {
  const certificates = portfolio.certificates.map((title, index) => ({
    id: `${title}-${index}`,
    title,
    image: getCertificateImage(index),
  }));

  const marquee = [...certificates, ...certificates];

  return (
    <AnimatedSection
      id="certifications"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Verified learning and credentials"
        description="Industry and course certifications that reflect continuous learning in frontend engineering, cloud concepts, and software development fundamentals."
      />

      <GlassCard className="relative overflow-hidden p-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
        <div className="certificate-water-bg absolute inset-0" />

        <div className="certificate-marquee relative flex w-max gap-5 px-5 py-8">
          {marquee.map((certificate, index) => (
            <motion.article
              key={`${certificate.id}-${index}`}
              className="group certificate-3d-card w-[260px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1430]/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
              whileHover={{ rotateY: 7, rotateX: -5, y: -8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = assetPath(
                      "/images/profile-portrait.jpg",
                    );
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/15 to-transparent" />
              </div>

              <div className="space-y-2 p-4">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-cyan/75">
                  <Award size={12} /> Certificate
                </p>
                <h3 className="line-clamp-2 text-base font-semibold text-white">
                  {certificate.title}
                </h3>
                <p className="flex items-center gap-2 text-xs text-white/60">
                  <Sparkles size={12} className="text-cyan" /> Verified learning
                  milestone
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </GlassCard>
    </AnimatedSection>
  );
}
