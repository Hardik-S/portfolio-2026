import { useEffect, useMemo, useState } from 'react'
import { portfolioContent, type SimulatorScenario } from './content'

type View = 'home' | 'workbench'
type Theme = 'light' | 'night'
type SimulatorStepKey = keyof Pick<
  SimulatorScenario,
  'constraint' | 'firstMove' | 'artifact' | 'tradeoff' | 'proof'
>

const simulatorSteps: { key: SimulatorStepKey; label: string }[] = [
  { key: 'constraint', label: "What's actually broken?" },
  { key: 'firstMove', label: 'What matters first?' },
  { key: 'artifact', label: 'What would I build in 48 hours?' },
  { key: 'tradeoff', label: 'What would I ignore?' },
  { key: 'proof', label: 'How would I prove progress?' },
]

function App() {
  const { person, home, navigation, metrics, simulatorScenarios, featuredCaseStudies, howIWork, experience, links } =
    portfolioContent

  const [activeView, setActiveView] = useState<View>('home')
  const [theme, setTheme] = useState<Theme>('light')
  const [activeScenarioId, setActiveScenarioId] = useState(simulatorScenarios[0]?.id ?? '')
  const [activeStep, setActiveStep] = useState<SimulatorStepKey>('constraint')

  const withBase = (path: string) =>
    path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}` : path

  const resumeLink = links.find((link) => link.label === 'Resume')?.href ?? '#'
  const directLinks = links.filter((link) => link.label !== 'Resume')
  const featuredCase = featuredCaseStudies[0]
  const timelineColumns = experience.reduce<[typeof experience, typeof experience]>(
    (columns, item, index) => {
      columns[index % 2].push(item)
      return columns
    },
    [[], []],
  )

  const activeScenario = useMemo(
    () => simulatorScenarios.find((scenario) => scenario.id === activeScenarioId) ?? simulatorScenarios[0],
    [activeScenarioId, simulatorScenarios],
  )

  const relatedCase = featuredCaseStudies.find((caseStudy) => caseStudy.id === activeScenario?.relatedCaseStudyId)

  const handleScenarioChange = (id: string) => {
    setActiveScenarioId(id)
    setActiveStep('constraint')
  }

  useEffect(() => {
    // Keep the night-theme code in the codebase, but force the live portfolio
    // into the light presentation until the toggle is reintroduced.
    setTheme('light')
    window.localStorage.setItem('portfolio-theme', 'light')
    document.documentElement.style.colorScheme = 'light'
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
    document.documentElement.style.colorScheme = theme === 'night' ? 'dark' : 'light'
  }, [theme])

  return (
    <div className="portfolio-shell" data-theme={theme}>
      <header className="site-nav">
        <a
          className="site-brand"
          href="#top"
          aria-label="Hardik Shrestha home"
          onClick={() => setActiveView('home')}
        >
          <span className="site-mark">HS</span>
          <span className="site-brand-copy">
            <strong>{person.name}</strong>
            <span>{person.roleTag}</span>
          </span>
        </a>
      </header>

      <div className="site-actions">
        <div className="site-nav-row">
          <nav className="view-switch" aria-label="Primary">
            {navigation.tabs.map((item) => (
              <button
                className={`view-switch-button ${activeView === item.id ? 'is-active' : ''}`}
                key={item.id}
                type="button"
                onClick={() => setActiveView(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="site-links">
            {navigation.anchors.map((item) => (
              <a href={withBase(item.href)} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main id="top">
        {activeView === 'home' ? (
          <>
            <section className="hero hero-home">
              <div className="hero-copy">
                <h1>
                  I turn messy product situations into <span className="hero-highlight">clear next moves</span>, real
                  artifacts, and evidence people can trust.
                </h1>
                <p className="hero-support">{person.subheadline}</p>

                <div className="hero-actions">
                  <button className="button button-primary" type="button" onClick={() => setActiveView('workbench')}>
                    Open Workbench
                  </button>
                  <a className="button button-secondary" href={withBase(resumeLink)}>
                    Open resume
                  </a>
                </div>
              </div>

              <aside className="hero-portrait-card">
                <div className="portrait-frame">
                  <img alt="Portrait of Hardik Shrestha" src={withBase(person.portrait)} />
                </div>
                <div className="portrait-caption">
                  <span className="eyebrow">Best fit</span>
                  <p>Messy systems, early product work, internal tooling, and execution that needs structure fast.</p>
                </div>
              </aside>
            </section>

            <section className="proof-strip" aria-label="Selected proof">
              {metrics.map((metric) => (
                <article className="proof-card" key={metric.label}>
                  <span className="proof-value">{metric.value}</span>
                  <strong className="proof-label">{metric.label}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </section>

            <section className="simulator-section">
              <div className="section-heading compact-heading">
                <span className="section-kicker">Standout Feature</span>
                <h2>{home.simulatorTitle}</h2>
                <p>{home.simulatorIntro}</p>
              </div>

              <div className="simulator-shell">
                <div className="scenario-list" role="tablist" aria-label="Decision scenarios">
                  {simulatorScenarios.map((scenario) => (
                    <button
                      className={`scenario-card ${activeScenario?.id === scenario.id ? 'is-active' : ''}`}
                      key={scenario.id}
                      role="tab"
                      type="button"
                      aria-selected={activeScenario?.id === scenario.id}
                      onClick={() => handleScenarioChange(scenario.id)}
                    >
                      <span className="scenario-label">{scenario.label}</span>
                      <strong>{scenario.scenario}</strong>
                    </button>
                  ))}
                </div>

                {activeScenario ? (
                  <article className="simulator-panel" role="tabpanel">
                    <div className="simulator-topline">
                      <span className="section-kicker">Decision simulator</span>
                      <p>{activeScenario.scenario}</p>
                    </div>

                    <div className="step-switch" aria-label="Decision steps">
                      {simulatorSteps.map((step) => (
                        <button
                          className={`step-chip ${activeStep === step.key ? 'is-active' : ''}`}
                          key={step.key}
                          type="button"
                          onClick={() => setActiveStep(step.key)}
                        >
                          {step.label}
                        </button>
                      ))}
                    </div>

                    <div className="step-panel">
                      <span className="step-title">
                        {simulatorSteps.find((step) => step.key === activeStep)?.label ?? ''}
                      </span>
                      <p>{activeScenario[activeStep]}</p>
                    </div>

                    {relatedCase ? (
                      <div className="simulator-footer">
                        <span className="section-kicker">Maps to real work</span>
                        <strong>{relatedCase.title}</strong>
                        <p>{relatedCase.summary}</p>
                        <button className="text-link" type="button" onClick={() => setActiveView('workbench')}>
                          Open the full case in Workbench
                        </button>
                      </div>
                    ) : null}
                  </article>
                ) : null}
              </div>
            </section>

            {featuredCase ? (
              <section className="featured-case-section">
                <div className="section-heading compact-heading">
                  <span className="section-kicker">Open First</span>
                  <h2>{home.featuredTitle}</h2>
                  <p>{home.featuredIntro}</p>
                </div>

                <article className="featured-case-card">
                  <div className="featured-case-copy">
                    <span className="eyebrow">{featuredCase.eyebrow}</span>
                    <h3>{featuredCase.title}</h3>
                    <p>{featuredCase.summary}</p>
                  </div>

                  <div className="featured-case-grid">
                    <div>
                      <span className="case-label">Challenge</span>
                      <p>{featuredCase.challenge}</p>
                    </div>
                    <div>
                      <span className="case-label">Result</span>
                      <p>{featuredCase.result}</p>
                    </div>
                  </div>

                  <button className="button button-secondary" type="button" onClick={() => setActiveView('workbench')}>
                    Read the full case
                  </button>
                </article>
              </section>
            ) : null}
          </>
        ) : (
          <>
            <section className="workbench-hero">
              <div className="section-heading workbench-heading">
                <span className="section-kicker">Workbench</span>
                <h2>The denser view: projects, method, and operating proof.</h2>
                <p>If you want to evaluate how I work in more detail, this is the useful view.</p>
              </div>
            </section>

            <section className="section-block" id="projects">
              <div className="section-header">
                <div className="section-rail">
                  <span className="section-kicker">01 / Selected Work</span>
                </div>
                <div className="section-heading">
                  <h2>Projects with enough detail for you to judge the work.</h2>
                </div>
              </div>

              <div className="case-list">
                {featuredCaseStudies.map((caseStudy) => (
                  <article className="case-row" key={caseStudy.id}>
                    <aside className="case-meta-column">
                      <p className="case-org">{caseStudy.title}</p>
                      <p className="case-eyebrow">{caseStudy.eyebrow}</p>
                      <div className="case-meta">
                        <span>{caseStudy.role}</span>
                        <span>{caseStudy.timeline}</span>
                      </div>
                    </aside>

                    <div className="case-body">
                      <h3>{caseStudy.summary}</h3>
                      <div className="case-grid">
                        <div className="case-cell">
                          <span className="case-label">Challenge</span>
                          <p>{caseStudy.challenge}</p>
                        </div>
                        <div className="case-cell">
                          <span className="case-label">Action</span>
                          <p>{caseStudy.work}</p>
                        </div>
                        <div className="case-cell case-cell-result">
                          <span className="case-label">Result</span>
                          <p>{caseStudy.result}</p>
                        </div>
                        <div className="case-cell">
                          <span className="case-label">Why it matters</span>
                          <p>{caseStudy.tradeoff}</p>
                        </div>
                      </div>

                      <div className={`artifact-row ${caseStudy.artifactImage ? 'artifact-row-visual' : ''}`}>
                        <div className="artifact-copy">
                          <span className="artifact-label">{caseStudy.artifactTitle}</span>
                          <p>{caseStudy.artifactCaption}</p>
                          <ul>
                            {caseStudy.proofNotes.map((note) => (
                              <li key={note}>{note}</li>
                            ))}
                          </ul>
                          <div className="source-strip">
                            {caseStudy.sourceNotes.map((note) => (
                              <span key={note}>{note}</span>
                            ))}
                          </div>
                        </div>

                        {caseStudy.artifactImage ? (
                          <div className="artifact-visual">
                            <img alt={`${caseStudy.title} artifact`} src={withBase(caseStudy.artifactImage)} />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-block" id="how-i-work">
              <div className="section-header">
                <div className="section-rail">
                  <span className="section-kicker">02 / Method</span>
                </div>
                <div className="section-heading">
                  <h2>Frame. Build. Prove.</h2>
                </div>
              </div>

              <div className="method-row">
                <div className="section-rail section-rail-spacer" aria-hidden="true" />
                {howIWork.map((item, index) => (
                  <article className="method-card" key={item.title}>
                    <span className="method-index">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-block">
              <div className="section-header">
                <div className="section-rail">
                  <span className="section-kicker">03 / Experience</span>
                </div>
                <div className="section-heading">
                  <h2>Useful context once the pattern is clear.</h2>
                </div>
              </div>

              <div className="timeline-row">
                <div className="section-rail section-rail-spacer" aria-hidden="true" />
                {timelineColumns.map((column, columnIndex) => (
                  <div className="timeline-column" key={columnIndex}>
                    {column.map((item) => (
                      <article className="timeline-card" key={`${item.org}-${item.title}`}>
                        <span className="timeline-date">{item.date}</span>
                        <h3>{item.title}</h3>
                        <p className="timeline-org">{item.org}</p>
                        <p className="timeline-body">{item.body}</p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="contact-section" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">Contact</span>
            <h2>{home.contactTitle}</h2>
            <p>{home.contactBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:hshrestha.hba2026@ivey.ca">
                Email Hardik
              </a>
              <a className="button button-secondary" href={withBase(resumeLink)}>
                Open resume
              </a>
            </div>
          </div>

          <div className="contact-links-panel">
            {directLinks.map((link) => (
              <a
                className="contact-link"
                href={link.href}
                key={link.label}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              >
                <span>{link.label}</span>
                <strong>{link.href.replace('mailto:', '')}</strong>
              </a>
            ))}

            <a className="contact-link" href={withBase(resumeLink)}>
              <span>Resume</span>
              <strong>Hardik_Shrestha_resume.pdf</strong>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
