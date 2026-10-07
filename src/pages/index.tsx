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
    <header className="relative overflow-hidden flex items-center min-h-[calc(100svh-var(--ifm-navbar-height))] bg-orange-50 dark:bg-zinc-900 py-6 lg:py-8">
      {/* Ambient background: faint dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-zinc-400/40 dark:text-zinc-500/25"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div className="relative w-full container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Hero Text */}
          <div className="min-w-0 text-center lg:text-left space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur bg-orange-100/80 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
              <FontAwesomeIcon icon={faMicrochip} />
              Only for Apple Silicon
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance text-orange-600 dark:text-orange-400 leading-none">
              Socktainer
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-balance text-gray-800 dark:text-zinc-200">
              Docker REST API for Apple Containers
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0">
              Use your existing Docker tooling on macOS with{' '}
              <Link to="https://github.com/apple/container" className="whitespace-nowrap">
                Apple containers 🍏
              </Link>
              , through a Docker-compatible REST API built on Apple's Container Framework.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-[background-color,box-shadow] duration-200 text-base"
                to="/download"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download Now
              </Link>
              <Link
                className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-orange-500 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transition-[background-color,box-shadow] duration-200 text-base"
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

function WorksWith() {
  return (
    <section
      style={{ animationRange: 'entry 0% entry 100%' }}
      className="reveal-on-scroll border-y border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/40"
    >
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-600 dark:text-zinc-400">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Works with
          </span>
          <span className="font-medium text-gray-800 dark:text-zinc-200">Docker CLI</span>
          <span className="font-medium text-gray-800 dark:text-zinc-200">Testcontainers</span>
          <span className="font-medium text-gray-800 dark:text-zinc-200">Podman Desktop</span>
        </div>
        <a href="https://github.com/socktainer/socktainer" className="flex items-center gap-2">
          <img
            src="https://img.shields.io/github/stars/socktainer/socktainer?style=flat&logo=github&label=stars&color=f97316"
            alt="GitHub stars"
            height={20}
          />
          <img
            src="https://img.shields.io/github/v/release/socktainer/socktainer?style=flat&label=release&color=f97316"
            alt="Latest release"
            height={20}
          />
        </a>
      </div>
    </section>
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
      <WorksWith />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
