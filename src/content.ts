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
  colors: [string, string]
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

export const portfolioContent = {
  person: {
    name: 'Hardik Shrestha',
    headline: 'I help teams make messy product problems legible, testable, and shippable.',
    subheadline:
      'Computer Science + HBA, strongest where product framing, workflow design, technical execution, and written synthesis need to align.',
    intro:
      'The local source material tells a consistent story: I do my best work when the path is unclear, the constraints are real, and someone needs to turn scattered inputs into a system or artifact other people can trust.',
    portrait: '/artifacts/hardik-portrait.jpg',
  },
  navigation: [
    { label: 'Proof', href: '#proof' },
    { label: 'Projects', href: '#projects' },
    { label: 'How I Work', href: '#how-i-work' },
    { label: 'Contact', href: '#contact' },
  ] satisfies LinkItem[],
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
    {
      label: 'London Chess Club',
      value: '260% growth',
      note: 'Membership growth after governance, operations, and website changes.',
    },
  ] satisfies Metric[],
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
        'The work mattered less because it was technically complex and more because it made migration risk legible for non-engineers who still depended on the output.',
      artifactTitle: 'Operational proof',
      artifactCaption:
        'The case is documented through the resume, CCV, and tailored application materials that all converge on the same migration story and outcome.',
      proofNotes: [
        'Resume master and CCV both cite 20+ staff hours per week saved.',
        'Multiple local application answers reframe this as coordination under migration pressure, not just ETL work.',
        'The strongest local wording stresses backend transition, documentation, and stakeholder trust.',
      ],
      sourceNotes: [
        'resume_master.md',
        'ccv_master.md',
        '00 - Resume/completed/_jobflow/j1 output.txt',
        '00 - Resume/completed/_jobflow/j3 output.txt',
      ],
      colors: ['#48b7ff', '#2dd4bf'],
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
        'I built on an Azure-based SPA IAM stack with Java, React, Vue, JavaScript, and Postman, and contributed to bulk-migration capability for higher-volume user handling.',
      result:
        'The migration path could process 100x more users simultaneously and saved recurring internal effort, while giving me direct experience on the product-delivery side of engineering work.',
      tradeoff:
        'Its value is direct experience inside real implementation constraints, where shipping quality mattered as much as technical correctness.',
      artifactTitle: 'Implementation signal',
      artifactCaption:
        'This case is supported by resume and CCV records describing the IAM stack, migration scope, and delivery impact.',
      proofNotes: [
        'CCV records Azure, Java, React, Vue, JS, and Postman on the IAM work.',
        'Resume variants consistently mention 100x bulk migration capability.',
        'This is the cleanest local evidence that I have shipped product-facing software, not just process work.',
      ],
      sourceNotes: [
        'public/Hardik_Shrestha_resume.pdf',
        'resume_master.md',
        'ccv_master.md',
      ],
      colors: ['#9b8cff', '#5ea7ff'],
    },
    {
      id: 'emotional-echoes',
      slug: 'echoes',
      title: 'Emotional Echoes',
      eyebrow: 'AI product framing with an actual MVP',
      role: 'Course concept turned local MVP',
      timeline: 'Academic project',
      summary:
        'Designed and built a mindfulness-tool MVP around mood logging, timeline reflection, AI-style insights, and guided meditation recommendations.',
      challenge:
        'Reflective products often ask too much initiative from the user. The more friction there is to logging and reflection, the easier it is to abandon the practice.',
      work:
        'I explored a Headspace-adjacent concept, built frontend MVP versions locally, and defined features like mood tracking, reminders, insights, and meditation recommendations using browser storage rather than a backend.',
      result:
        'The project is useful not because it proves production AI, but because it shows structured product thinking: identify a behavior gap, make the interaction lighter, and test the concept as an MVP instead of a pitch deck.',
      tradeoff:
        'The strength of the case is straightforward: it moved from concept to prototype, with enough product definition to make the idea testable.',
      artifactTitle: 'Local repo evidence',
      artifactCaption:
        'Two local Emotional Echoes repositories document the feature set, user flow, and MVP implementation details. That makes this case more credible than a pure concept summary.',
      proofNotes: [
        'README documents mood tracking, timeline visualization, AI-style insights, reminders, and guided meditations.',
        'One repo is a frontend-only React MVP; another frames the concept as a Headspace extension.',
        'The local source supports UI/UX and product-framing claims better than inflated strategic hindsight.',
      ],
      sourceNotes: [
        'GitHub/EmotionalEchoes/README.md',
        'GitHub/EmotionalEchoesY/README.md',
      ],
      colors: ['#ff9b6a', '#ff6f91'],
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
        'The concept moved from vague idea to tangible artifact, which is often the actual inflection point in student product work.',
      tradeoff:
        'This is not my most technical work, but it is the cleanest visual proof that I can move early concepts toward something testable and discussable.',
      artifactTitle: 'Prototype artifact',
      artifactCaption:
        'Local files include the box mockup, card mockup, written business plan, and website prototype. That is enough real material to treat this as an artifact-backed case study.',
      artifactImage: '/artifacts/picture-this-box.png',
      proofNotes: [
        'Local NVP folder includes box mockup, card mockup, written business plan, and static website prototype.',
        'This is one of the strongest non-generic visuals available locally.',
        'The artifact makes the work easier to believe than a text-only claim about "product storytelling."',
      ],
      sourceNotes: [
        '02 - Ivey/07 - NVP/box-mockup.png',
        '02 - Ivey/07 - NVP/card-mockup.png',
        '02 - Ivey/07 - NVP/Deliverable #3a_ DRAFT Written Business Plan.pdf',
      ],
      colors: ['#74f2ce', '#f6d860'],
    },
  ] satisfies CaseStudy[],
  howIWork: [
    {
      title: 'Frame',
      body:
        'Start by making the actual constraint visible: what is changing, what is failing, who depends on it, and what cannot break.',
    },
    {
      title: 'Build',
      body:
        'Move quickly toward the smallest artifact that creates shared understanding: a workflow, a prototype, a migration path, a brief, or a testable concept.',
    },
    {
      title: 'Prove',
      body:
        'Anchor the story in something concrete: time saved, throughput improved, adoption made easier, or a clearer decision made possible.',
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
        'Built the case for a FlashFood x Too Good To Go concept and helped organize a PM fundamentals and Python in Finance event with 40 in-person and 220+ online attendees.',
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
        'Restructured governance, launched a website, modernized operations, and ran a 128-player tournament across two days with venue, prizes, scheduling, and registration logistics.',
    },
  ] satisfies ExperienceItem[],
  links: [
    { label: 'Resume', href: '/Hardik_Shrestha_resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/Hardik-S' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/hardik-shres/' },
    { label: 'Email', href: 'mailto:hshrestha.hba2026@ivey.ca' },
  ] satisfies LinkItem[],
}
