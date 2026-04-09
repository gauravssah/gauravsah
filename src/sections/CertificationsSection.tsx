import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Sparkles, X } from "lucide-react";
import { createPortal } from "react-dom";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";
import { assetPath } from "../utils/assetPath";

type CertificationsSectionProps = {
  portfolio: PortfolioData;
};

export function CertificationsSection({
  portfolio,
}: CertificationsSectionProps) {
  const [activeCertificate, setActiveCertificate] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const certificates = portfolio.certificates.map((certificate, index) => ({
    id: `${certificate.title}-${index}`,
    title: certificate.title,
    image: assetPath(certificate.image),
  }));

  const marquee = [...certificates, ...certificates];

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    if (activeCertificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [activeCertificate]);

  return (
    <AnimatedSection
      id="certifications"
      className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Verified learning and credentials"
        description="Industry and course certifications that reflect continuous learning."
      />

      <GlassCard className="relative overflow-hidden p-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
        <div className="certificate-water-bg pointer-events-none absolute inset-0" />

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
                <button
                  type="button"
                  onClick={() =>
                    setActiveCertificate({
                      title: certificate.title,
                      image: certificate.image,
                    })
                  }
                  className="relative z-10 block h-full w-full cursor-zoom-in"
                  aria-label={`Open ${certificate.title} certificate`}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = assetPath(
                        portfolio.media.certificateFallbackImage,
                      );
                    }}
                  />
                </button>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/15 to-transparent" />
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

      {createPortal(
        <AnimatePresence>
          {activeCertificate ? (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertificate(null)}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-[10000] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                onClick={() => setActiveCertificate(null)}
                aria-label="Close certificate preview"
              >
                <X size={18} />
              </button>

              <motion.img
                src={activeCertificate.image}
                alt={`${activeCertificate.title} full certificate`}
                className="max-h-[90vh] w-auto max-w-[95vw] rounded-2xl border border-white/15 bg-[#0b1430] object-contain"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
                onError={(event) => {
                  event.currentTarget.src = assetPath(
                    portfolio.media.certificateFallbackImage,
                  );
                }}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </AnimatedSection>
  );
}
