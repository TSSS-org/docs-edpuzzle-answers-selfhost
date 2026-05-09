import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.badge}>Self-Hosted</div>
        <h1 className={styles.heroTitle}>
          Edpuzzle <span className={styles.heroAccent}>Answers</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Run your own server. Get answers, skip videos,<br />
          and auto-answer questions — fully under your control.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/">
            Get Started →
          </Link>
          <Link className={styles.btnSecondary} to="https://github.com/TSSS-org/edpuzzle-answers-selfhost">
            GitHub ↗
          </Link>
        </div>
      </div>
      <div className={styles.heroGrid} aria-hidden="true">
        {Array.from({length: 80}).map((_, i) => (
          <div key={i} className={styles.gridCell} />
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Multiple Choice Answers',
      desc: 'Instantly fetch answers for any multiple choice Edpuzzle assignment.',
    },
    {
      icon: '🤖',
      title: 'AI Open-Ended Answers',
      desc: 'Uses Google Gemini to automatically answer free-response questions.',
    },
    {
      icon: '⏩',
      title: 'Video Skipper',
      desc: 'Jump to any point in the video or skip it entirely.',
    },
    {
      icon: '🔒',
      title: 'Fully Self-Hosted',
      desc: 'Everything runs on your machine. No accounts, no data sent anywhere.',
    },
    {
      icon: '🎓',
      title: 'Canvas & Schoology',
      desc: 'Works on Edpuzzles embedded in Canvas and Schoology too.',
    },
    {
      icon: '🛠️',
      title: 'Easy Setup',
      desc: 'One command gets you running. No complicated config required.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <h2 className={styles.sectionTitle}>Everything you need</h2>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickstart}>
      <div className={styles.quickstartInner}>
        <div className={styles.quickstartText}>
          <h2 className={styles.sectionTitle}>Up in minutes</h2>
          <p className={styles.quickstartSubtitle}>
            The easy install method handles everything automatically.
            One command, and you're done.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <span>Download the repo and unzip it</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <span>Run <code>python3 setup.py</code></span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <span>Sign in with a teacher account</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <span>Open <code>localhost:8080</code> and you're set</span>
            </div>
          </div>
          <Link className={styles.btnPrimary} to="/docs/">
            Full Install Guide →
          </Link>
        </div>
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} style={{background: '#ff5f57'}} />
            <span className={styles.dot} style={{background: '#febc2e'}} />
            <span className={styles.dot} style={{background: '#28c840'}} />
            <span className={styles.terminalTitle}>terminal</span>
          </div>
          <div className={styles.terminalBody}>
            <p><span className={styles.prompt}>$</span> python3 setup.py</p>
            <p className={styles.dim}>Setting up virtual environment...</p>
            <p className={styles.dim}>Installing dependencies...</p>
            <p className={styles.dim}>Installing Playwright...</p>
            <p className={styles.dim}>Building app...</p>
            <p className={styles.success}>✓ Setup complete!</p>
            <p>&nbsp;</p>
            <p><span className={styles.prompt}>$</span> python3 server/main.py</p>
            <p className={styles.success}>✓ Server running on localhost:8080</p>
            <p className={styles.dim}>Opening login window...</p>
            <p className={styles.cursor}>▋</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.ctaTitle}>Ready to get started?</h2>
      <p className={styles.ctaSubtitle}>Pick your OS and follow the install guide.</p>
      <div className={styles.ctaButtons}>
        <Link className={styles.btnPrimary} to="/docs/installation/easy-linux-mac">
          Linux / macOS
        </Link>
        <Link className={styles.btnPrimary} to="/docs/installation/easy-windows">
          Windows
        </Link>
        <Link className={styles.btnOutline} to="/docs/faq">
          FAQ
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <main>
        <Hero />
        <Features />
        <QuickStart />
        <CTA />
      </main>
    </Layout>
  );
}
