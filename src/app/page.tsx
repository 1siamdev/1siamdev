import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Cpu,
  Database,
  HeadphonesIcon,
  Layers,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Cloud Infrastructure",
    description:
      "Design, migrate, and manage multi-cloud environments with enterprise-grade security and compliance.",
    icon: Cloud,
    href: "/services",
  },
  {
    title: "IT Service Management",
    description:
      "End-to-end SIAM solutions that unify service desks, streamline workflows, and reduce operational costs.",
    icon: Layers,
    href: "/services",
  },
  {
    title: "Data Engineering",
    description:
      "Build scalable data pipelines, warehouses, and analytics platforms to power informed decision-making.",
    icon: Database,
    href: "/services",
  },
  {
    title: "Cybersecurity",
    description:
      "Proactive threat detection, incident response, and compliance frameworks to protect your enterprise.",
    icon: Shield,
    href: "/services",
  },
  {
    title: "DevOps & Automation",
    description:
      "Continuous integration, delivery pipelines, and infrastructure-as-code for faster, safer deployments.",
    icon: Cpu,
    href: "/services",
  },
  {
    title: "Managed Support",
    description:
      "24/7 IT support, monitoring, and incident management to keep your business running without interruption.",
    icon: HeadphonesIcon,
    href: "/services",
  },
];

const valueProps = [
  {
    title: "Enterprise Expertise",
    description:
      "Decades of combined experience delivering mission-critical IT solutions for Fortune 500 companies.",
  },
  {
    title: "SIAM-Native Approach",
    description:
      "Service Integration and Management is at the core of everything we do—breaking silos, aligning vendors.",
  },
  {
    title: "Results-Driven",
    description:
      "We measure success by your outcomes: reduced downtime, lower costs, faster time-to-market.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 px-6 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl text-center sm:text-left">
          <span className="inline-block rounded-full bg-brand-600/20 px-4 py-1.5 text-xs font-medium tracking-wider text-brand-200 uppercase">
            ONE SIAMSOFT
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Enterprise IT Service Management,
            <br />
            <span className="text-accent-400">Simplified</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-200 sm:mx-0">
            We help enterprises unify, automate, and optimise their IT
            operations through Service Integration and Management — reducing
            complexity, cutting costs, and accelerating digital transformation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-accent-500/25 active:scale-[0.98]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-400/30 px-8 py-3 text-sm font-semibold text-brand-200 transition-all hover:border-brand-400/60 hover:text-white active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              Why ONE SIAMSOFT?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              We believe great IT service management is the foundation of
              business agility. Here is what sets us apart.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {valueProps.map((prop) => (
              <div key={prop.title} className="group text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 sm:mx-0">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-900">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="bg-zinc-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              Comprehensive IT service management solutions tailored to your
              enterprise needs.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="mt-4 font-semibold text-brand-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-800 to-brand-900 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-200">
            Let us discuss how ONE SIAMSOFT can help your enterprise achieve
            operational excellence through smart service management.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-accent-500/25 active:scale-[0.98]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-400/30 px-8 py-3 text-sm font-semibold text-brand-200 transition-all hover:border-brand-400/60 hover:text-white active:scale-[0.98]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
