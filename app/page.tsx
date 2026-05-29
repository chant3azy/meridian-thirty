"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Logo } from "@/components/logo"
import { SiteHeader } from "@/components/site-header"
import { fadeUp, fadeUpReduced } from "@/lib/motion"
import {
  CAPABILITIES,
  CLIENTS,
  HERO_IMAGE,
  INSIGHT_IMAGE,
  SITE,
} from "@/lib/site"

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`text-sm uppercase tracking-[0.28em] ${light ? "text-[#7eb8e8]" : "text-[#3d8fd9]"}`}
    >
      {children}
    </p>
  )
}

function OutlineButton({
  href,
  children,
  light = false,
  icon = true,
}: {
  href: string
  children: React.ReactNode
  light?: boolean
  icon?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border px-8 py-5 text-sm uppercase tracking-[0.18em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 ${
        light
          ? "border-[#3d8fd9]/50 hover:border-[#5eb0f5] hover:bg-[#3d8fd9]/10"
          : "border-[#3d8fd9] text-[#1a2d4a] hover:bg-[#3d8fd9] hover:text-white"
      }`}
    >
      {children}
      {icon ? (
        <ArrowRight
          size={18}
          className="transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden
        />
      ) : null}
    </Link>
  )
}

export default function HomePage() {
  const reduceMotion = useReducedMotion()
  const heroVariants = reduceMotion ? fadeUpReduced : fadeUp

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#3d8fd9] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="bg-[#050d18] text-white">
        <SiteHeader />

        <main id="main" className="overflow-x-hidden">
          {/* Hero */}
          <section
            className="relative flex min-h-[100svh] items-end"
            aria-labelledby="hero-title"
          >
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,143,217,0.22),transparent_32%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050d18] via-[#050d18]/88 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050d18] via-transparent to-transparent"
              aria-hidden
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-48">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroVariants}
              >
                <Eyebrow light>
                  Independent Strategy &amp; Transformation Advisory
                </Eyebrow>

                <h1
                  id="hero-title"
                  className="mt-8 max-w-5xl font-serif text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.95] tracking-tight"
                >
                  {SITE.name}
                </h1>

                <div
                  className="mt-10 h-px w-16 bg-[#3d8fd9]"
                  aria-hidden
                />

                <p className="mt-10 text-lg uppercase tracking-[0.3em] text-[#7eb8e8] sm:text-xl">
                  {SITE.tagline}
                </p>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  We partner with ambitious organisations to solve complex
                  challenges and unlock lasting value.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">
                  <OutlineButton href="#work" light>
                    Discover Our Work
                  </OutlineButton>
                  <Link
                    href="#insights"
                    className="inline-flex items-center px-8 py-5 text-sm uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                  >
                    View Insights
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Clients */}
          <section
            id="work"
            className="border-y border-white/5 bg-[#0a1628] py-14"
            aria-labelledby="clients-heading"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <h2 id="clients-heading" className="sr-only">
                Clients
              </h2>
              <p className="mb-12 text-center">
                <Eyebrow light>Trusted by leaders. Delivering impact.</Eyebrow>
              </p>

              <ul
                className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
                role="list"
              >
                {CLIENTS.map((client, i) => (
                  <li key={client}>
                    <FadeIn
                      delayIndex={i}
                      className="flex items-center justify-center text-center text-lg font-light text-white/70 transition-colors hover:text-white"
                    >
                      <span
                        className={
                          client === "nationalgrid"
                            ? "lowercase tracking-wide"
                            : undefined
                        }
                      >
                        {client}
                      </span>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Capabilities */}
          <section
            id="capabilities"
            className="bg-[#f8fafc] py-24 text-[#0a1628] lg:py-28"
            aria-labelledby="capabilities-heading"
          >
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-5 lg:gap-20 lg:px-10">
              <FadeIn className="lg:col-span-2">
                <Eyebrow>What we do</Eyebrow>
                <h2
                  id="capabilities-heading"
                  className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight lg:text-6xl"
                >
                  Solving today.
                  <br />
                  Shaping tomorrow.
                </h2>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600">
                  We combine deep expertise with a collaborative approach to
                  deliver tailored solutions that drive sustainable results.
                </p>
                <Link
                  href="#capabilities"
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#3d8fd9] transition-colors hover:text-[#1a2d4a]"
                >
                  Explore our capabilities
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </FadeIn>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
                {CAPABILITIES.map((item, i) => (
                  <FadeIn key={item.title} delayIndex={i}>
                    <article className="group h-full rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#3d8fd9] hover:shadow-[0_20px_60px_rgba(61,143,217,0.1)]">
                      <div
                        className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#3d8fd9]/25 bg-[#f0f7ff]"
                        aria-hidden
                      >
                        <span className="h-2 w-2 rounded-full bg-[#3d8fd9]" />
                      </div>
                      <h3 className="text-2xl font-medium tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Featured insight */}
          <section
            id="insights"
            className="relative overflow-hidden"
            aria-labelledby="insight-heading"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative flex items-center bg-[#050d18] px-6 py-24 lg:px-10">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,143,217,0.14),transparent_35%)]"
                  aria-hidden
                />
                <div className="relative z-10 max-w-xl">
                  <Eyebrow light>Featured insight</Eyebrow>
                  <h2
                    id="insight-heading"
                    className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight lg:text-6xl"
                  >
                    The next horizon of transformation
                  </h2>
                  <p className="mt-8 text-lg leading-relaxed text-white/70">
                    Insights and perspectives on the forces reshaping
                    industries and how leaders can stay ahead.
                  </p>
                  <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#7eb8e8]">
                    Transformation · July 2026
                  </p>
                  <Link
                    href="#insights"
                    className="group mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#7eb8e8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                  >
                    Read the latest insights
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[420px] lg:min-h-[520px]">
                <Image
                  src={INSIGHT_IMAGE}
                  alt="Modern spiralling architectural staircase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-[#050d18]/25"
                  aria-hidden
                />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            id="about"
            className="relative overflow-hidden bg-[#f8fafc] py-28 text-center text-[#0a1628] lg:py-32"
            aria-labelledby="cta-heading"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(61,143,217,0.08),transparent_40%)]"
              aria-hidden
            />
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <h2
                id="cta-heading"
                className="font-serif text-4xl leading-[1.08] tracking-tight lg:text-6xl"
              >
                We are {SITE.name}.
                <br />
                <span className="text-[#4a5568]">Partners in possibility.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                Independent advisory for organisations navigating transformation
                at scale.
              </p>
              <div className="mt-12">
                <OutlineButton href="#contact" icon={false}>
                  Start a Conversation
                </OutlineButton>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t border-white/5 bg-[#050d18] py-14"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div>
              <Logo size="footer" />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
                Independent advisory for organisations navigating transformation,
                growth, and operational change.
              </p>
              <p className="mt-6 text-sm text-white/40">
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
              </p>
            </div>

            <address className="flex flex-col gap-3 text-sm uppercase not-italic tracking-[0.18em] text-white/50 lg:text-right">
              {SITE.offices.map((city) => (
                <span key={city}>{city}</span>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                {SITE.email}
              </a>
            </address>
          </div>
        </footer>
      </div>
    </>
  )
}
