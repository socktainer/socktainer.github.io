import Link from '@docusaurus/Link';
import { faArrowRight, faDownload, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroAnimation from '@site/src/components/HeroAnimation';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickStart from '@site/src/components/QuickStart';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import TailWindThemeSelector from '../components/TailWindThemeSelector';

function HomepageHeader() {
  return (
    <header className="relative overflow-hidden bg-orange-50 dark:bg-zinc-900 py-10 md:py-12">
      {/* Ambient background: faint dot grid and a soft glow behind the animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-zinc-400/40 dark:text-zinc-500/25"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl bg-orange-400/20 dark:bg-orange-500/10"
      />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="min-w-0 text-center lg:text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur bg-orange-100/80 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
              <FontAwesomeIcon icon={faMicrochip} />
              Only for Apple Silicon
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-orange-600 dark:text-orange-400 leading-tight">
              Socktainer
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-balance text-gray-800 dark:text-zinc-200">
              Docker REST API for Apple Containers
            </p>

            <div className="text-lg md:text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0">
              <p>
                Use your existing Docker tooling on macOS with{' '}
                <Link to="https://github.com/apple/container" className="whitespace-nowrap">
                  Apple containers 🍏
                </Link>
                .
              </p>
              <p>Docker compatible REST API server built on Apple's Container Framework.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-[background-color,box-shadow] duration-200 text-lg"
                to="/download"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download Now
              </Link>
              <Link
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-orange-500 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transition-[background-color,box-shadow] duration-200 text-lg"
                to="/docs/intro"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <QuickStart />
          </div>

          {/* Hero Visual */}
          <div className="min-w-0 flex justify-center lg:justify-end">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Docker API for Apple Container"
      description="Docker-compatible REST API server built on Apple's Container Framework. Use Docker CLI, Testcontainers on macOS with containers."
    >
      {' '}
      <TailWindThemeSelector />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
