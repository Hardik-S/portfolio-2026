export type Metric = {
  label: string
  value: string
  note: string
}

export type CaseStudy = {
  id: string
  slug: string
  title: string
  eyebrow: string
  role: string
  timeline: string
  summary: string
  challenge: string
  work: string
  result: string
  tradeoff: string
  artifactTitle: string
  artifactCaption: string
  artifactImage?: string
  proofNotes: string[]
  sourceNotes: string[]
}

export type HowIWorkItem = {
  title: string
  body: string
}

export type ExperienceItem = {
  date: string
  title: string
  org: string
  body: string
}

export type LinkItem = {
  label: string
  href: string
}

export type SimulatorScenario = {
  id: string
  label: string
  scenario: string
  constraint: string
  firstMove: string
  artifact: string
  tradeoff: string
  proof: string
  relatedCaseStudyId: string
}

export const portfolioContent = {
  person: {
    name: 'Hardik Shrestha',
    roleTag: 'Product / Ops / Technical Execution',
    headline: 'I turn messy product situations into clear next moves, real artifacts, and evidence people can trust.',
    subheadline:
      'Computer Science + HBA. I do my best work where product framing, workflow design, technical execution, and written synthesis need to line up fast.',
    portrait: '/artifacts/hardik-portrait.jpg',
  },
  home: {
    kicker: 'Anton, here is the fastest way to evaluate how I work.',
    simulatorTitle: 'Put me in the mess.',
    simulatorIntro:
      'Pick a situation. I will show you how I frame it, what I would build first, what I would ignore, and how I would prove progress.',
    featuredTitle: 'One project to open first',
    featuredIntro:
      'If you only open one project, start with SwimDrinkFish. It is the clearest example of how I work when the environment is changing underneath the team.',
    contactTitle: 'If this lines up with what you need, I would value the conversation.',
    contactBody:
      'I am most useful on work that sits between product thinking, technical constraints, and operational follow-through.',
  },
  navigation: {
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'workbench', label: 'Workbench' },
    ] as const,
    anchors: [
      { label: 'Contact', href: '#contact' },
      { label: 'Resume', href: '/Hardik_Shrestha_resume.pdf' },
    ] satisfies LinkItem[],
  },
  metrics: [
    {
      label: 'SwimDrinkFish',
      value: '20+ hrs/week',
      note: 'Validation and workflow time saved during a backend overhaul.',
    },
    {
      label: 'PointClickCare',
      value: '100x throughput',
      note: 'Bulk user migration capability for IAM tooling.',
    },
    {
      label: 'Kinaxis',
      value: '80% faster',
      note: 'Validation turnaround on AI-platform release work.',
    },
  ] satisfies Metric[],
  simulatorScenarios: [
    {
      id: 'migration',
      label: 'Backend migration',
      scenario: 'A public-facing system is changing underneath the team, ownership is fuzzy, and the people depending on the output are not engineers.',
      constraint:
        'The risk is not only technical. The bigger problem is that validation rules, identifiers, and trust are all drifting at once.',
      firstMove:
        'Map the breakpoints: what changed, where manual work is happening, which records are unreliable, and who needs confidence right now.',
      artifact:
        'Within 48 hours I would build a working validation sheet or intake workflow that makes inconsistencies visible and gives the team one source of truth.',
      tradeoff:
        'I would not start with elegant architecture. I would start with the smallest operational layer that reduces confusion and stops bad data from spreading.',
      proof:
        'You know it is working when turnaround drops, fewer edge cases require hand-holding, and non-technical stakeholders can see why the system is trustworthy again.',
      relatedCaseStudyId: 'swimdrinkfish',
    },
    {
      id: 'tooling',
      label: 'Workflow bottleneck',
      scenario: 'An internal workflow is slowing a team down, but people describe the pain in vague terms and nobody agrees on the real bottleneck.',
      constraint:
        'If you automate the wrong step, you preserve the confusion and just make it faster.',
      firstMove:
        'Trace the work by hand first. Find where waiting, rework, and hidden dependencies pile up, then cut the loop that creates the most recurring drag.',
      artifact:
        'I would produce a stripped-down workflow map and a prototype or script that removes the highest-friction handoff instead of rebuilding the whole process.',
      tradeoff:
        'I would ignore nice-to-have reporting until the path itself is cleaner. Better process before better dashboards.',
      proof:
        'The signal is shorter cycle time, fewer manual checks, and less explaining required every time the workflow runs.',
      relatedCaseStudyId: 'pointclickcare',
    },
    {
      id: 'ai-product',
      label: 'AI product idea',
      scenario: 'A concept sounds exciting in a meeting, but it is still unclear what user behavior it improves or what a believable MVP actually is.',
      constraint:
        'The danger is building a polished fiction: interesting positioning, weak product behavior, and no clear learning loop.',
      firstMove:
        'Shrink the problem until one behavior change is testable. Define the user moment, the friction, and the smallest feature that could earn repeated use.',
      artifact:
        'In 48 hours I would make a lightweight prototype with one tight flow, realistic copy, and a concrete hypothesis about what the user should do next.',
      tradeoff:
        'I would skip speculative platform thinking. If the core loop is not credible, the strategy deck can wait.',
      proof:
        'The test is whether someone can use it immediately, understand the value without explanation, and give feedback on behavior instead of abstractions.',
      relatedCaseStudyId: 'emotional-echoes',
    },
    {
      id: 'student-initiative',
      label: 'Raw initiative',
      scenario: 'A team has energy and a concept, but it still feels too vague for other people to react to seriously.',
      constraint:
        'Without a tangible artifact, the conversation stays generic and the idea never gets sharper.',
      firstMove:
        'Clarify the hook, pick the one thing the concept must make visible, and force the team toward something people can see, try, or critique.',
      artifact:
        'I would build the first serious artifact fast: mockups, a prototype, a pitch object, or a simple site that makes the concept concrete.',
      tradeoff:
        'I would not over-polish the story before the artifact exists. Tangibility first, refinement second.',
      proof:
        'It starts working when feedback becomes specific, team decisions get easier, and the project shifts from idea-talk to real iteration.',
      relatedCaseStudyId: 'picture-this',
    },
  ] satisfies SimulatorScenario[],
  featuredCaseStudies: [
    {
      id: 'swimdrinkfish',
      slug: 'swim',
      title: 'SwimDrinkFish',
      eyebrow: 'Workflow redesign under migration pressure',
      role: 'Data Analyst, Swim Guide',
      timeline: 'May 2025 to Aug 2025',
      summary:
        'Kept a public-facing beach data system usable while backend infrastructure and validation logic were changing underneath it.',
      challenge:
        'The operating reality was messy: fragmented spreadsheets, inconsistent identifiers, affiliate-managed beach records, and changing backend requirements all at once.',
      work:
        'I redesigned validation and ingestion workflows, reconciled identifiers and GPS records across 3,000+ beaches, and helped move the team toward more repeatable automation instead of manual checking.',
      result:
        'The system became faster to trust and easier to maintain, saving 20+ staff hours per week while improving reliability for technical, operations, and policy stakeholders.',
      tradeoff:
        'The value was not just the technical cleanup. It was making migration risk legible for non-engineers who still depended on the output.',
      artifactTitle: 'Why open this first',
      artifactCaption:
        'This is the clearest example of how I handle ambiguous systems, mixed stakeholders, changing technical ground, and the need for a concrete operating fix.',
      proofNotes: [
        'Workflow redesign during a backend transition.',
        '3,000+ beaches reconciled across inconsistent records.',
        '20+ staff hours per week saved through better validation and ingestion.',
      ],
      sourceNotes: ['Resume', 'CCV', 'Application materials'],
    },
    {
      id: 'pointclickcare',
      slug: 'iam',
      title: 'PointClickCare',
      eyebrow: 'Product-adjacent engineering that shipped',
      role: 'Software Engineer Co-Op, Identity Access Management',
      timeline: 'May 2022 to Aug 2022',
      summary:
        'Worked on identity and access tooling that had to be credible for administrators, not just technically correct.',
      challenge:
        'The team needed a cleaner authentication experience and a migration path that could handle much higher user volume without forcing a rebuild every time a new service was added.',
      work:
        'I worked on an Azure-based IAM stack, contributed to product-facing implementation work, and helped support bulk migration capability for much higher user volume.',
      result:
        'The migration path could process 100x more users simultaneously and reduced recurring internal effort while staying usable for administrators.',
      tradeoff:
        'Its value is direct shipping experience inside real constraints, where product credibility mattered as much as technical correctness.',
      artifactTitle: 'Implementation signal',
      artifactCaption:
        'This is a practical case of shipping inside an established product environment rather than only framing an idea from scratch.',
      proofNotes: [
        '100x simultaneous migration capability.',
        'Hands-on work across Azure, Java, React, Vue, JavaScript, and Postman.',
        'Clear example of product-adjacent engineering delivery.',
      ],
      sourceNotes: ['Resume', 'CCV'],
    },
    {
      id: 'emotional-echoes',
      slug: 'echoes',
      title: 'Emotional Echoes',
      eyebrow: 'AI product framing with an actual MVP',
      role: 'Course concept turned local MVP',
      timeline: 'Academic project',
      summary:
        'Designed and built a mindfulness-tool MVP around mood logging, reflection, lightweight AI-style insights, and guided recommendations.',
      challenge:
        'Reflective products often ask too much initiative from the user. The more friction there is to logging and reflection, the easier it is to abandon the practice.',
      work:
        'I defined the behavior gap, shaped an MVP around lighter reflection, and built local frontend versions to test mood tracking, reminders, insights, and recommendations.',
      result:
        'The project became a testable product concept rather than a pitch-only idea, which is the more useful threshold for learning.',
      tradeoff:
        'The point is not production AI. The point is disciplined MVP thinking around one believable behavior change.',
      artifactTitle: 'Prototype signal',
      artifactCaption:
        'This shows product framing and prototype execution meeting in the same project rather than living in separate decks and demos.',
      proofNotes: [
        'Mood logging and reflection timeline built into the MVP.',
        'AI-style insights used as a product interaction, not a vague promise.',
        'Concept moved from positioning into a working flow.',
      ],
      sourceNotes: ['Local MVP repo', 'Project README'],
    },
    {
      id: 'picture-this',
      slug: 'picture',
      title: 'Picture This!',
      eyebrow: 'Prototype and pitch artifact',
      role: 'Product lead, Ivey New Venture Project',
      timeline: '2024 to 2025',
      summary:
        'Led the framing and prototyping of a storytelling card-game concept so the team had something specific to pitch, test, and improve.',
      challenge:
        'The idea needed more than enthusiasm. It needed a legible product, a clearer hook, and enough visual structure for other people to react to seriously.',
      work:
        'I led a six-person team through concept framing, prototype development, and business-plan work, with mockups and a lightweight website prototype as the concrete outputs.',
      result:
        'The concept moved from vague idea to tangible artifact, which is often the real inflection point in student product work.',
      tradeoff:
        'This is not the most technical case here, but it is strong evidence that I can move a fuzzy concept into something testable and discussable.',
      artifactTitle: 'Prototype artifact',
      artifactCaption:
        'The visual prototype mattered because it gave the team and outside readers something concrete to react to instead of a generic concept summary.',
      artifactImage: '/artifacts/picture-this-box.png',
      proofNotes: [
        'Six-person team led from framing into prototype work.',
        'Mockups, business plan, and website prototype all existed as real artifacts.',
        'Strong example of turning a vague initiative into a tangible object.',
      ],
      sourceNotes: ['Box mockup', 'Card mockup', 'Written plan'],
    },
  ] satisfies CaseStudy[],
  howIWork: [
    {
      title: 'Frame',
      body:
        'Make the actual constraint visible fast: what is changing, what is failing, who depends on it, and what cannot break.',
    },
    {
      title: 'Build',
      body:
        'Move toward the smallest artifact that creates shared understanding: a workflow, prototype, migration path, brief, or testable concept.',
    },
    {
      title: 'Prove',
      body:
        'Anchor the story in something real: time saved, throughput improved, adoption made easier, or a clearer decision made possible.',
    },
  ] satisfies HowIWorkItem[],
  experience: [
    {
      date: '2025',
      title: 'Swim Guide backend transition',
      org: 'SwimDrinkFish',
      body:
        'Redesigned validation and migration-adjacent workflows while coordinating technical, operations, and policy-facing needs.',
    },
    {
      date: '2024',
      title: 'LoblawTank winner and PM event organizer',
      org: 'Loblaw / Ivey',
      body:
        'Built the case for a FlashFood x Too Good To Go concept and helped organize PM and Python events with 40 in-person and 220+ online attendees.',
    },
    {
      date: '2022 to 2023',
      title: 'AI platform validation and release confidence',
      org: 'Kinaxis',
      body:
        'Redesigned test workflows and reduced turnaround time by 80% while supporting release readiness in a fast-moving AI environment.',
    },
    {
      date: '2022 to 2025',
      title: 'Chess club operations and capacity planning',
      org: 'London Chess Club',
      body:
        'Restructured governance, launched a website, modernized operations, and ran a 128-player tournament across two days.',
    },
  ] satisfies ExperienceItem[],
  links: [
    { label: 'Resume', href: '/Hardik_Shrestha_resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/Hardik-S' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/hardik-shres/' },
    { label: 'Email', href: 'mailto:hshrestha.hba2026@ivey.ca' },
  ] satisfies LinkItem[],
} as const
