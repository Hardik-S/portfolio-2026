import { portfolioContent } from './content'

function App() {
  const { person, navigation, metrics, featuredCaseStudies, howIWork, experience, links } = portfolioContent
  const withBase = (path: string) =>
    path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}` : path

  return (
    <div className="page-shell">
      <div className="noise noise-a" aria-hidden="true" />
      <div className="noise noise-b" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hardik Shrestha home">
          <span className="brand-mark">HS</span>
          <span className="brand-copy">
            <strong>{person.name}</strong>
            <span>Operator dossier</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-layout" id="top">
        <aside className="dossier-rail">
          <div className="dossier-card portrait-card">
            <img alt="Portrait of Hardik Shrestha" src={withBase(person.portrait)} />
          </div>

          <div className="dossier-card identity-card">
            <p className="eyebrow">Hardik Shrestha</p>
            <h1>{person.headline}</h1>
            <p className="identity-support">{person.subheadline}</p>
            <p className="identity-intro">
              My edge is taking scattered constraints, shaping them into a working system, and making the
              output credible enough for other people to move on.
            </p>

            <div className="dossier-actions">
              <a className="button button-primary" href="#projects">
                See the work
              </a>
              <a className="button button-secondary" href={withBase(links[0]?.href ?? '#')}>
                Open resume
              </a>
            </div>
          </div>

          <div className="dossier-card metrics-card" id="proof">
            <p className="eyebrow">Selected proof</p>
            <div className="metric-list">
              {metrics.map((metric) => (
                <article className="metric-item" key={metric.label}>
                  <span>{metric.value}</span>
                  <strong>{metric.label}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="dossier-card contact-card">
            <p className="eyebrow">Direct links</p>
            <div className="contact-stack">
              {links.map((link) => (
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
            </div>
          </div>
        </aside>

        <div className="content-column">
          <section className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Product, ops, and technical execution</p>
              <h2>Not another personal site. A clearer read on how I operate when the work is messy.</h2>
              <p>
                The strongest signal in my background is not one title. It is a repeated pattern across
                backend transitions, internal tooling, MVPs, and student-led execution: ambiguous situation,
                clearer structure, working artifact, usable outcome.
              </p>
            </div>

            <div className="hero-panel-grid">
              <article className="hero-panel-card">
                <span className="panel-label">Operating pattern</span>
                <strong>Frame the ambiguity. Build the artifact. Prove the result.</strong>
                <p>This is the same move whether the work looks like data cleanup, product framing, or software.</p>
              </article>

              <article className="hero-panel-card">
                <span className="panel-label">Best-fit work</span>
                <strong>Workflow redesign, internal systems, product thinking, technical communication.</strong>
                <p>Useful where a team needs clarity, execution, and someone who can connect disciplines.</p>
              </article>

              <article className="hero-panel-card hero-panel-card-accent">
                <span className="panel-label">Current standard</span>
                <strong>Make the page feel like a dossier, not a dashboard.</strong>
                <p>Less gimmick, stronger signal, and enough taste that the work feels worth a closer look.</p>
              </article>
            </div>
          </section>

          <section className="section-block intro-block">
            <div className="section-heading">
              <p className="eyebrow">What matters here</p>
              <h2>The goal is not to look busy. The goal is to make judgment visible.</h2>
            </div>
            <div className="intro-card">
              <p>
                This portfolio is structured like a working brief. The hierarchy is intentional: what I do,
                where it has held up, what I changed, and why the result was credible. If the first pass
                works, the next step should be a conversation, not a scavenger hunt.
              </p>
            </div>
          </section>

          <section className="section-block" id="projects">
            <div className="section-heading">
              <p className="eyebrow">Selected work</p>
              <h2>Four cases that show the same operating pattern in different environments.</h2>
            </div>

            <div className="case-stack">
              {featuredCaseStudies.map((caseStudy) => (
                <article className="case-study-card" key={caseStudy.id}>
                  <div className="case-study-head">
                    <div>
                      <p className="eyebrow">{caseStudy.eyebrow}</p>
                      <h3>{caseStudy.title}</h3>
                      <p className="case-summary">{caseStudy.summary}</p>
                    </div>

                    <div className="case-meta">
                      <span>{caseStudy.role}</span>
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>

                  <div className="case-grid">
                    <div className="case-card">
                      <span className="case-label">Challenge</span>
                      <p>{caseStudy.challenge}</p>
                    </div>
                    <div className="case-card">
                      <span className="case-label">Action</span>
                      <p>{caseStudy.work}</p>
                    </div>
                    <div className="case-card case-card-result">
                      <span className="case-label">Result</span>
                      <p>{caseStudy.result}</p>
                    </div>
                    <div className="case-card">
                      <span className="case-label">Why it matters</span>
                      <p>{caseStudy.tradeoff}</p>
                    </div>
                  </div>

                  <div className={`artifact-block ${caseStudy.artifactImage ? 'has-visual' : ''}`}>
                    <div className="artifact-copy">
                      <span className="panel-label">{caseStudy.artifactTitle}</span>
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
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="how-i-work">
            <div className="section-heading">
              <p className="eyebrow">How I work</p>
              <h2>One pattern, repeated on different scales.</h2>
            </div>

            <div className="method-grid">
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
            <div className="section-heading">
              <p className="eyebrow">Additional signals</p>
              <h2>Useful context once the core pattern is clear.</h2>
            </div>

            <div className="timeline-grid">
              {experience.map((item) => (
                <article className="timeline-card" key={`${item.org}-${item.title}`}>
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-body">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block final-block" id="contact">
            <div className="section-heading">
              <p className="eyebrow">Next step</p>
              <h2>If the work here is useful, the best next move is a sharper conversation.</h2>
            </div>
            <div className="final-card">
              <p>
                I am most useful in roles where product, operations, and technical execution overlap and the
                path is not fully defined yet.
              </p>
              <div className="final-actions">
                <a className="button button-primary" href="mailto:hshrestha.hba2026@ivey.ca">
                  Email Hardik
                </a>
                <a className="button button-secondary" href="https://linkedin.com/in/hardik-shres/">
                  Open LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
