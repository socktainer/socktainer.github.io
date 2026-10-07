import Link from '@docusaurus/Link';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '@theme/Layout';
import type { ReactElement } from 'react';
import { useState } from 'react';
import TailWindThemeSelector from '../components/TailWindThemeSelector';
import styles from './download.module.css';

const RELEASES = 'https://github.com/socktainer/socktainer/releases';
const LATEST = `${RELEASES}/latest/download`;
const BREW_TAP = 'brew tap socktainer/tap \\\n  https://github.com/socktainer/homebrew-tap';

// Long commands use shell line continuations so they stay readable and still paste as-is.
const installTabs: { id: string; label: string; commands: string[]; links: { label: string; to: string }[] }[] = [
  {
    id: 'brew',
    label: 'Homebrew',
    commands: [BREW_TAP, 'brew install socktainer/tap/socktainer'],
    links: [{ label: 'Homebrew tap repository', to: 'https://github.com/socktainer/homebrew-tap' }],
  },
  {
    id: 'zip',
    label: 'ZIP',
    commands: [
      `curl -L -o socktainer.zip \\\n  ${LATEST}/socktainer.zip`,
      'unzip socktainer.zip',
      'chmod +x socktainer',
      'sudo mv socktainer /usr/local/bin/',
    ],
    links: [{ label: 'Download socktainer.zip', to: `${LATEST}/socktainer.zip` }],
  },
  {
    id: 'binary',
    label: 'Binary',
    commands: [
      `curl -L -o socktainer \\\n  ${LATEST}/socktainer`,
      'chmod +x socktainer',
      'sudo mv socktainer /usr/local/bin/',
    ],
    links: [{ label: 'Download socktainer binary', to: `${LATEST}/socktainer` }],
  },
  {
    id: 'next',
    label: 'Pre-release',
    commands: [BREW_TAP, 'brew install socktainer/tap/socktainer-next'],
    links: [
      { label: 'Pre-releases repository', to: 'https://github.com/socktainer/prereleases' },
      { label: 'Pre-release tags', to: 'https://github.com/socktainer/prereleases/tags' },
    ],
  },
];

const pillClass =
  'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-zinc-800/70 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700';
const linkClass =
  'inline-flex items-center gap-2 font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300';

function InstallTabs(): ReactElement {
  const [active, setActive] = useState(installTabs[0].id);
  const [copied, setCopied] = useState(false);
  const tab = installTabs.find(t => t.id === active) ?? installTabs[0];

  const copy = () =>
    navigator.clipboard?.writeText(tab.commands.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });

  return (
    <div className="bg-gray-900 dark:bg-black rounded-xl shadow-2xl p-5 border border-gray-700">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="flex gap-1.5 mr-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div role="tablist" aria-label="Installation method" className="flex flex-wrap gap-1.5">
          {installTabs.map(t => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={t.id === active}
              aria-controls="install-panel"
              onClick={() => setActive(t.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                t.id === active
                  ? 'bg-orange-500/20 text-orange-300 border-orange-500/60'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:text-gray-200 hover:border-gray-500'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="ml-auto px-2 py-0.5 rounded border border-gray-600 text-xs text-gray-300 hover:text-white hover:border-gray-400 bg-transparent cursor-pointer"
        >
          {copied ? '✓ Copied' : '⧉ Copy'}
        </button>
      </div>

      <div key={tab.id} id="install-panel" role="tabpanel" aria-labelledby={`tab-${tab.id}`} className={styles.panel}>
        <pre className="text-xs md:text-sm text-left overflow-x-auto bg-transparent p-0 m-0">
          <code className="text-gray-300 bg-transparent border-0 p-0">
            {tab.commands.map(command => (
              <div key={command}>
                {command.split('\n').map((line, i) => (
                  <div key={line}>
                    <span className="text-green-400 select-none">{i === 0 ? '$ ' : ''}</span>
                    <span className={i === 0 ? 'text-gray-200' : 'text-yellow-500'}>{line}</span>
                  </div>
                ))}
              </div>
            ))}
          </code>
        </pre>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {tab.links.map(link => (
            <Link key={link.to} to={link.to} className={linkClass}>
              {link.label}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Download(): ReactElement {
  return (
    <Layout title="Download" description="Download Socktainer - Docker REST API for Apple Containers">
      <TailWindThemeSelector />

      <header className="relative overflow-hidden bg-orange-50 dark:bg-zinc-900 py-12 md:py-16">
        {/* Faint dot grid, as on the homepage */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 text-zinc-400/40 dark:text-zinc-500/25"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <img
            src="https://img.shields.io/github/v/release/socktainer/socktainer?style=flat&label=latest&color=f97316"
            alt="Latest release"
            height={20}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-orange-600 dark:text-orange-400 mb-4">
            Download Socktainer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-300 mb-8">
            Get started with Socktainer on your Apple Silicon Mac
          </p>

          <Link
            to={`${LATEST}/socktainer-installer.pkg`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-[background-color,box-shadow] duration-200 text-lg"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download socktainer-installer.pkg
          </Link>
          <p className="mt-3 text-sm text-gray-600 dark:text-zinc-400">
            Double-click to install. The installer guides you through it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className={pillClass}>macOS 26 (Tahoe) or later</span>
            <span className={pillClass}>Apple silicon (M1 or later)</span>
            <Link to="https://github.com/apple/container" className={`${pillClass} hover:text-orange-600`}>
              Apple container installed
            </Link>
            <span className={pillClass}>Docker CLI (optional)</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4">Other ways to install</h2>
          <InstallTabs />
        </section>

        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Link to={RELEASES} className={linkClass}>
            All releases and release notes
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link to="https://github.com/socktainer/prereleases/tags" className={linkClass}>
            Pre-release tags
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        {/* Next steps */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl p-8 md:p-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Installed? Start here.</h2>
            <p className="m-0 text-orange-50">Follow the guide to run your first Docker command on Apple containers.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/docs/intro"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold rounded-lg shadow transition-colors"
            >
              Getting Started Guide
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              to="https://github.com/socktainer/socktainer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
              View on GitHub
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
