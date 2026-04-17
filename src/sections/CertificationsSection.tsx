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

  const certificates = (portfolio.certificates ?? []).map(
    (certificate, index) => ({
      id: `course-${certificate.title}-${index}`,
      title: certificate.title,
      image: assetPath(certificate.image),
    }),
  );

  const internshipCertificates = (portfolio.internshipCertificates ?? []).map(
    (certificate, index) => ({
      id: `internship-${certificate.title}-${index}`,
      title: certificate.title,
      image: assetPath(certificate.image),
    }),
  );

  const marquee = [...certificates, ...certificates];
  const internshipMarquee = [
    ...internshipCertificates,
    ...internshipCertificates,
  ];
  const baseMarqueeDuration = 120;
  const topMarqueeDuration = internshipCertificates.length
    ? (baseMarqueeDuration * certificates.length) /
      internshipCertificates.length
    : baseMarqueeDuration;

  const renderCertificateCard = (
    certificate: { id: string; title: string; image: string },
    index: number,
    typeLabel: string,
    footerText: string,
  ) => (
    <motion.article
      key={`${certificate.id}-${index}`}
      className="group certificate-3d-card w-[260px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1430]/80"
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
        <p className="flex items-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-cyan/75">
          <Award size={12} /> {typeLabel}
        </p>
        <h3 className="line-clamp-2 text-base font-semibold text-white">
          {certificate.title}
        </h3>
        <p className="flex items-center gap-2 text-xs text-white/60">
          <Sparkles size={12} className="text-cyan" /> {footerText}
        </p>
      </div>
    </motion.article>
  );

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

      <div className="space-y-10">
        <GlassCard className="relative overflow-hidden p-0">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
          <div className="certificate-water-bg pointer-events-none absolute inset-0" />

          <div className="relative px-5 pt-7">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
              Course Certifications
            </p>
            <p className="mt-2 text-sm text-white/65">
              Academic, technical, and industry learning credentials.
            </p>
          </div>

          <div
            className="certificate-marquee relative mt-4 flex w-max gap-5 px-5 pb-8"
            style={{ animationDuration: `${topMarqueeDuration}s` }}
          >
            {marquee.map((certificate, index) =>
              renderCertificateCard(
                certificate,
                index,
                "Certificate",
                "Verified learning milestone",
              ),
            )}
          </div>
        </GlassCard>

        {internshipCertificates.length ? (
          <GlassCard className="relative overflow-hidden p-0">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
            <div className="certificate-water-bg pointer-events-none absolute inset-0" />

            <div className="relative px-5 pt-7">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                Internship Certificates
              </p>
              <p className="mt-2 text-sm text-white/65">
                Verified internship completion records from industry experience.
              </p>
            </div>

            <div
              className="certificate-marquee-reverse relative mt-4 flex w-max gap-5 px-5 pb-9"
              style={{ animationDuration: `${baseMarqueeDuration}s` }}
            >
              {internshipMarquee.map((certificate, index) =>
                renderCertificateCard(
                  certificate,
                  index,
                  "Internship Certificate",
                  "Verified internship credential",
                ),
              )}
            </div>
          </GlassCard>
        ) : null}
      </div>

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
