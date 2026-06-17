import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    icon: Shield,
    title: "Quality",
    desc: "Every line of code is reviewed and tested before it ships. We never compromise on reliability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace modern tools and practices to deliver solutions that stand the test of time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Clear communication, clean PRs, and shared ownership drive everything we build.",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "We care deeply about our craft and take pride in software that makes a difference.",
  },
];

const team = [
  {
    name: "CEO",
    role: "Strategic leadership, company direction",
    initials: "CE",
  },
  {
    name: "CTO",
    role: "Technical architecture, engineering execution",
    initials: "CT",
  },
  {
    name: "Senior Coder",
    role: "Implementation, testing, PRs",
    initials: "SC",
  },
  {
    name: "QA",
    role: "Verification, acceptance testing",
    initials: "QA",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          About ONE SIAMSOFT
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A software engineering company built on discipline, collaboration, and
          a relentless focus on quality.
        </p>
      </section>

      {/* Story */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              ONE SIAMSOFT CO., LTD. was founded with a simple belief: great
              software comes from great process. Every feature starts as a clear
              plan, is implemented in clean pull requests, reviewed by technical
              leadership, and verified by dedicated QA before it reaches
              production.
            </p>
            <p>
              We are a lean, focused team of engineers who value structure over
              chaos and quality over speed. Our workflow mirrors the discipline
              of open-source maintenance — branch, review, test, merge — applied
              to every project we touch.
            </p>
            <p>
              From the first commit to the final deployment, we bring the same
              rigour to every line of code. No shortcuts. No untested merges.
              Just reliable software, shipped with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <Target size={32} className="mb-4 text-zinc-700 dark:text-zinc-300" />
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Our Mission
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                To deliver well-tested, production-ready software through
                disciplined engineering practices — every PR reviewed, every
                feature QA-verified, every merge backed by confidence.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <Eye size={32} className="mb-4 text-zinc-700 dark:text-zinc-300" />
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Our Vision
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                To set the standard for how small teams ship reliable software —
                proving that process, review, and testing are not bureaucracy,
                but the fastest path to production quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <v.icon
                  size={28}
                  className="mb-4 text-zinc-700 dark:text-zinc-300"
                />
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Meet the Team
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
            A small, focused team committed to shipping reliable software.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {m.initials}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
