import { Heart } from "lucide-react";

const teamMembers = [
  { name: "CEO", role: "Strategic leadership, company direction" },
  { name: "CTO", role: "Technical architecture, engineering execution" },
  { name: "Senior Coder", role: "Implementation, testing, PRs" },
  { name: "QA", role: "Verification, acceptance testing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              ONE SIAMSOFT
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Building reliable software solutions with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Team
            </h3>
            <ul className="space-y-1.5">
              {teamMembers.map((m) => (
                <li key={m.name} className="text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                    {m.name}
                  </span>{" "}
                  — {m.role}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Navigation
            </h3>
            <ul className="space-y-1.5">
              {["Home", "About", "Services", "Contact"].map((page) => (
                <li key={page}>
                  <a
                    href={`/${page === "Home" ? "" : page.toLowerCase()}`}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-1 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} ONE SIAMSOFT CO., LTD. Made with{" "}
          <Heart size={12} className="inline text-red-500" /> by the ONE SIAMSOFT team.
        </div>
      </div>
    </footer>
  );
}
