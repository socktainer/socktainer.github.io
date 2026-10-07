import Link from '@docusaurus/Link';
import HeroAnimation from '@site/src/components/HeroAnimation';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickStart from '@site/src/components/QuickStart';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import TailWindThemeSelector from '../components/TailWindThemeSelector';

function HomepageHeader() {
  return (
    <header className="relative overflow-hidden bg-orange-50 dark:bg-zinc-900 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="min-w-0 text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 dark:text-orange-400 leading-tight">
              Socktainer
              <div className="inline-block">
                <span className="inline-flex items-center gap-1 px-4 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium border border-orange-200 dark:border-orange-800">
                  <span>Only for Apple Silicon</span>
                </span>
              </div>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-zinc-200">
              Docker REST API for Apple Containers
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0">
              <p>
                Use your existing Docker tooling on macOS with{' '}
                <Link to="https://github.com/apple/container">Apple containers 🍏</Link>.{' '}
              </p>
              <p>Docker compatible REST API server built on Apple's Container Framework.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                to="/download"
              >
                <span className="text-xl">📥</span>
                Download Now
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-orange-500 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                to="/docs/intro"
              >
                <span className="text-xl">📚</span>
                Get Started
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
