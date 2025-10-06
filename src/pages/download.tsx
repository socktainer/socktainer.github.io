import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type { ReactElement } from 'react';
import { useState } from 'react';
import TailWindThemeSelector from '../components/TailWindThemeSelector';

export default function Download(): ReactElement {
  const [showZipInstructions, setShowZipInstructions] = useState(false);
  const [showBinaryInstructions, setShowBinaryInstructions] = useState(false);
  return (
    <Layout title="Download" description="Download Socktainer - Docker REST API for Apple Containers">
      <TailWindThemeSelector />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-6">
            Download Socktainer
          </h1>

          <p className="text-xl text-gray-600 dark:text-zinc-300 mb-12">
            Get started with Socktainer on your Apple Silicon Mac
          </p>

          {/* PKG Installer - Recommended */}
          <section className="mb-12 p-6 bg-orange-50 dark:bg-zinc-900 rounded-lg border-2 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📦</span>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">PKG Installer (Recommended)</h2>
            </div>

            <p className="text-gray-600 dark:text-zinc-300 mb-4">
              The easiest way to install Socktainer is using the macOS installer package:
            </p>

            <div className="flex flex-col gap-4">
              <Link
                to="https://github.com/socktainer/socktainer/releases/latest/download/socktainer-installer.pkg"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
              >
                <span className="text-2xl">📥</span>
                <span>Download socktainer-installer.pkg</span>
              </Link>

              <p className="text-sm text-gray-600 dark:text-zinc-400">
                Simply download and double-click to install. The installer will guide you through the process.
              </p>
            </div>
          </section>

          {/* Homebrew Installation - Alternative */}
          <section className="mb-12 p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍺</span>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">
                Homebrew Installation (Alternative)
              </h2>
            </div>

            <p className="text-gray-600 dark:text-zinc-300 mb-4">
              If you prefer using Homebrew to manage installations and updates:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                  1. Add the Socktainer tap:
                </p>
                <div className="bg-gray-900 dark:bg-black p-4 rounded-md">
                  <code className="text-green-400 font-mono text-sm">brew tap socktainer/tap</code>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">2. Install Socktainer:</p>
                <div className="bg-gray-900 dark:bg-black p-4 rounded-md">
                  <code className="text-green-400 font-mono text-sm">brew install socktainer</code>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  For more information, visit the{' '}
                  <Link
                    to="https://github.com/socktainer/homebrew-tap"
                    className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline"
                  >
                    Homebrew tap repository
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Other Downloads */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">�</span>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">Other Download Options</h2>
            </div>

            <div className="space-y-6">
              {/* ZIP Archive */}
              <div className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">📁</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2">ZIP Archive</h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-400 mb-4">
                      Complete package with all components
                    </p>

                    <div className="flex flex-col gap-3">
                      <Link
                        to="https://github.com/socktainer/socktainer/releases/latest/download/socktainer.zip"
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline text-sm"
                      >
                        <span>📥</span>
                        Download socktainer.zip
                      </Link>

                      <button
                        onClick={() => setShowZipInstructions(!showZipInstructions)}
                        className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      >
                        <span>{showZipInstructions ? '▼' : '▶'}</span>
                        {showZipInstructions ? 'Hide' : 'Show'} installation instructions
                      </button>
                    </div>

                    {showZipInstructions && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Install using curl:</p>
                        <div className="bg-gray-900 dark:bg-black p-4 rounded-md">
                          <code className="text-green-400 font-mono text-sm block">
                            curl -L -o socktainer.zip
                            https://github.com/socktainer/socktainer/releases/latest/download/socktainer.zip
                          </code>
                          <code className="text-green-400 font-mono text-sm block mt-2">unzip socktainer.zip</code>
                          <code className="text-green-400 font-mono text-sm block mt-2">chmod +x socktainer</code>
                          <code className="text-green-400 font-mono text-sm block mt-2">
                            sudo mv socktainer /usr/local/bin/
                          </code>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Binary Only */}
              <div className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">⚙️</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2">Binary Only</h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-400 mb-4">Standalone socktainer binary</p>

                    <div className="flex flex-col gap-3">
                      <Link
                        to="https://github.com/socktainer/socktainer/releases/latest/download/socktainer"
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline text-sm"
                      >
                        <span>📥</span>
                        Download socktainer binary
                      </Link>

                      <button
                        onClick={() => setShowBinaryInstructions(!showBinaryInstructions)}
                        className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      >
                        <span>{showBinaryInstructions ? '▼' : '▶'}</span>
                        {showBinaryInstructions ? 'Hide' : 'Show'} installation instructions
                      </button>
                    </div>

                    {showBinaryInstructions && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Install using curl:</p>
                        <div className="bg-gray-900 dark:bg-black p-4 rounded-md">
                          <code className="text-green-400 font-mono text-sm block">
                            curl -L -o socktainer
                            https://github.com/socktainer/socktainer/releases/latest/download/socktainer
                          </code>
                          <code className="text-green-400 font-mono text-sm block mt-2">chmod +x socktainer</code>
                          <code className="text-green-400 font-mono text-sm block mt-2">
                            sudo mv socktainer /usr/local/bin/
                          </code>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* All Releases */}
              <div className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg">
                <Link
                  to="https://github.com/socktainer/socktainer/releases"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <span className="text-3xl">🔖</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2">All Releases</h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-400">
                      Browse all versions and release notes on GitHub
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* System Requirements */}
          <section className="mb-12 p-6 bg-gray-50 dark:bg-zinc-900 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💻</span>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">System Requirements</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-zinc-300">
              <li>macOS 26 (Tahoe) or later with Apple silicon (M1, M2, M3, M4, or later)</li>
              <li>
                <Link
                  to="https://github.com/apple/container"
                  className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline"
                >
                  Apple Container framework
                </Link>{' '}
                installed
              </li>
              <li>Docker CLI (optional, for Docker compatibility)</li>
            </ul>
          </section>

          {/* Next Steps */}
          <section className="p-6 bg-orange-50 dark:bg-zinc-900 rounded-lg border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🚀</span>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">Next Steps</h2>
            </div>

            <p className="text-gray-600 dark:text-zinc-300 mb-4">
              After installation, check out our documentation to get started:
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/docs/intro"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>📚</span>
                Getting Started Guide
              </Link>

              <Link
                to="https://github.com/socktainer/socktainer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-orange-500 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transition-all"
              >
                <span>💻</span>
                View on GitHub
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
