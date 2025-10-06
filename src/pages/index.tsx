import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import TailWindThemeSelector from '../components/TailWindThemeSelector';

function HomepageHeader() {
  return (
    <header className="relative overflow-hidden bg-orange-50 dark:bg-zinc-900 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left space-y-6">
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

            {/* Quick Start Code */}
            <div className="mt-8 bg-gray-900 dark:bg-black rounded-lg shadow-2xl p-6 border border-gray-700 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-2">Quick Start</span>
              </div>
              <pre className="text-sm md:text-base text-left overflow-x-auto">
                <code className="text-gray-300">
                  <span className="text-gray-500"># Ensure Apple container is running</span>
                  {'\n'}
                  <span className="text-orange-400">container system start</span>
                  {'\n'}
                  <span className="text-gray-500"># Run Socktainer</span>
                  {'\n'}
                  <span className="text-orange-400">./socktainer</span>
                  {'\n\n'}
                  <span className="text-gray-500"># Use with Docker CLI</span>
                  {'\n'}
                  <span className="text-green-400">export</span> <span className="text-blue-400">DOCKER_HOST</span>=
                  <span className="text-yellow-500">unix://$HOME/.socktainer/container.sock</span>
                  {'\n'}
                  <span className="text-orange-400">docker</span> <span className="text-purple-400">ps</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-8 border-2 border-orange-200 dark:border-orange-800 max-w-md transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  {/* Apple Container */}
                  <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-zinc-950 rounded-xl border border-orange-200 dark:border-orange-800">
                    <div className="text-5xl">🍏</div>
                    <div>
                      <div className="font-bold text-lg text-gray-800 dark:text-zinc-200">Apple Container</div>
                      <div className="text-sm text-gray-600 dark:text-zinc-400">Containerization Framework</div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-3xl animate-bounce">↕️</div>
                      <div className="text-sm font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/50 px-3 py-1 rounded-full">
                        Socktainer (REST API)
                      </div>
                    </div>
                  </div>

                  {/* Docker API */}
                  <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-zinc-950 rounded-xl border border-orange-200 dark:border-orange-800">
                    <div className="text-5xl">🐳</div>
                    <div>
                      <div className="font-bold text-lg text-gray-800 dark:text-zinc-200">Docker REST API</div>
                      <div className="text-sm text-gray-600 dark:text-zinc-400">Compatible Interface</div>
                    </div>
                  </div>
                </div>

                {/* Feature badges */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                    Lightweight 🪶
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                    Swift based
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Docker API for Apple Container`}
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
