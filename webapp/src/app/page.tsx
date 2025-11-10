const principles = [
  {
    title: "Autonomy",
    description:
      "Agents pursue goals with minimal human oversight, planning tasks and adapting as conditions change.",
  },
  {
    title: "Perception",
    description:
      "They observe the world through structured data, sensors, or APIs to stay informed before taking action.",
  },
  {
    title: "Reasoning",
    description:
      "Decision-making blends symbolic rules, statistical models, and large language models to pick the next best move.",
  },
  {
    title: "Action",
    description:
      "Agents execute work through tools: database writes, API calls, robotic motion, or even natural-language responses.",
  },
];

const lifecycle = [
  {
    label: "Sense",
    detail:
      "Collect signals such as user input, telemetry, documents, or sensor feeds that describe the current state.",
  },
  {
    label: "Understand",
    detail:
      "Summarize and interpret context, aligning observations with long-term goals and policies.",
  },
  {
    label: "Plan",
    detail:
      "Break the objective into executable steps, estimating cost, risk, and dependencies along the way.",
  },
  {
    label: "Act",
    detail:
      "Call tools, services, or actuators. Agents often loop through evaluation steps to measure progress.",
  },
  {
    label: "Learn",
    detail:
      "Capture outcomes, update memories, and refine policies so future runs improve automatically.",
  },
];

const useCases = [
  {
    heading: "Customer copilots",
    summary:
      "Deploy in support channels to triage tickets, draft resolutions, and hand off nuanced cases to humans.",
  },
  {
    heading: "Software automation",
    summary:
      "Automate build pipelines, QA verification, and documentation updates triggered by code changes.",
  },
  {
    heading: "Operations orchestration",
    summary:
      "Coordinate inventory, logistics, and incident response with continuous monitoring and escalation rules.",
  },
  {
    heading: "Creative tooling",
    summary:
      "Assist with research, brainstorming, and content production while honoring brand and compliance guardrails.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <header className="relative isolate overflow-hidden px-6 pb-24 pt-24 sm:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_55%)]" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-emerald-300/80">AI Fundamentals</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            What is an AI Agent?
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            An AI agent is a software system that observes its environment, reasons about
            possible strategies, and acts toward a goal with minimal human direction. Modern
            agents combine large language models with traditional automation to deliver
            reliable, auditable outcomes.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Autonomy meets oversight
            </span>
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sky-100">
              Loop of sense → plan → act
            </span>
            <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-indigo-100">
              Tool-augmented intelligence
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-28 sm:px-12 lg:px-20">
        <section className="grid gap-6 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-10 backdrop-blur-sm md:grid-cols-[1.25fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Core definition</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              AI agents are goal-driven programs that blend perception, reasoning, and
              action. Unlike simple scripts, they make context-aware decisions, react to
              feedback, and adapt their strategy on the fly. The best agents clarify their
              objectives with natural language, but execute work through deterministic,
              auditable tools.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/70">
              Quick facts
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Built around feedback loops instead of static instructions.</li>
              <li>Observe state via APIs, documents, sensors, or user prompts.</li>
              <li>Choose actions using policies, heuristics, or LLM reasoning.</li>
              <li>Improve by storing memory, learning from outcomes, and updating tools.</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-700/60 bg-slate-900/50 p-10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Foundational principles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="group rounded-2xl border border-slate-700/50 bg-slate-950/50 p-6 transition transform-gpu hover:border-emerald-400/40 hover:shadow-[0_15px_35px_-20px_rgba(16,185,129,0.7)]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-700/60 bg-slate-900/30 p-10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Agent lifecycle</h2>
          <p className="mt-3 text-base text-slate-300">
            Practitioners often model agents as iterative loops. Each iteration evaluates
            the environment, updates intent, and chooses the next action. Small, frequent
            loops keep agents grounded and prevent runaway behavior.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {lifecycle.map((step, index) => (
              <div
                key={step.label}
                className="relative rounded-2xl border border-slate-700/50 bg-slate-950/60 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.label}</h3>
                <p className="mt-3 text-sm text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-10">
            <h2 className="text-2xl font-semibold text-emerald-100">Essential components</h2>
            <ul className="mt-6 space-y-4 text-sm text-emerald-50/90">
              <li>
                <strong className="text-emerald-50">Policy &amp; goals:</strong> mission definition,
                constraints, and success metrics articulated in natural language or formal rules.
              </li>
              <li>
                <strong className="text-emerald-50">Reasoning engine:</strong> planners, LLMs, or
                hybrid systems that turn objectives into runnable plans.
              </li>
              <li>
                <strong className="text-emerald-50">Memory:</strong> short-term scratchpads, vector
                databases, and knowledge graphs that preserve relevant context.
              </li>
              <li>
                <strong className="text-emerald-50">Tooling interfaces:</strong> API wrappers,
                robotic actuators, or code interpreters that make plans executable.
              </li>
              <li>
                <strong className="text-emerald-50">Guardrails:</strong> safety filters, approval gates,
                and observability pipelines that keep operations trustworthy.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white">Why they matter now</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Advances in foundation models, low-cost compute, and API ecosystems make it
              practical to orchestrate complex work with AI agents. Teams deploy them to
              improve efficiency, personalize customer experiences, and augment human experts
              without sacrificing governance. Thoughtful design keeps humans in the loop for
              critical decisions while letting agents handle the heavy lifting.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-700/60 bg-slate-900/50 p-10 backdrop-blur-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-white">Where AI agents shine</h2>
              <p className="mt-3 text-base text-slate-300">
                The same architectural pattern can automate tasks across industries. The
                examples below showcase mixtures of cognitive work, operational rigor, and
                human collaboration.
              </p>
            </div>
            <a
              href="https://vercel.com/blog/ai-agents"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
            >
              Explore real-world stacks →
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <article
                key={item.heading}
                className="rounded-2xl border border-slate-700/50 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.heading}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-10 text-sm text-slate-300 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Building responsibly</h2>
          <p className="mt-3">
            Responsible agents start with transparent governance: define scope, obtain consent
            for data access, and keep humans in control of irreversible actions. Monitor
            latency, cost, failure modes, and ethical impacts with the same rigor used for any
            production software system.
          </p>
          <p className="mt-3">
            Add circuit breakers, rate limits, and red-team reviews, and track telemetry like
            tool success rates or fallback frequency. Mature teams pair agents with playbooks
            that document how to intervene when anomalies appear.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-10 text-center text-xs text-slate-500">
        <p>
          Crafted with Next.js &amp; Tailwind CSS · Learn more about modern agents via the
          <a
            className="ml-1 text-emerald-300 hover:underline"
            href="https://research.google/pubs/pub46620/"
            target="_blank"
            rel="noreferrer"
          >
            foundational research
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
