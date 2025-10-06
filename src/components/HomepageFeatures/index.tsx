import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  link?: string;
  linkText?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built on Apple Container',
    icon: '🍏',
    description: (
      <>
        Leverages Apple's containerization framework for macOS. Designed specifically for Apple Silicon (arm64) to
        provide fast, secure, and efficient container operations.
      </>
    ),
  },
  {
    title: 'Docker API Compatible',
    icon: '🐳',
    description: (
      <>
        Provides a Docker-compatible REST API interface. Use your favorite Docker tools like Docker CLI, TestContainers,
        and other Docker clients seamlessly with Apple containers.
      </>
    ),
  },
  {
    title: 'Testcontainers Support',
    icon: '☕',
    description: (
      <>Perfect for Java developers using Testcontainers. Run your integration tests on macOS without Docker Desktop.</>
    ),
    link: '/tutorial/testcontainers',
    linkText: 'View Tutorial →',
  },
  {
    title: 'Unix Socket Interface',
    icon: '🔌',
    description: (
      <>
        Listens on a Unix domain socket at{' '}
        <code className="text-orange-600 dark:text-orange-400">$HOME/.socktainer/container.sock</code>. Simple setup
        with environment variable <code className="text-orange-600 dark:text-orange-400">DOCKER_HOST</code>.
      </>
    ),
  },
  {
    title: 'Container Lifecycle',
    icon: '♻️',
    description: (
      <>
        Full support for container operations: create, start, stop, remove, inspect, logs, health checks, and exec.
        Monitor container events for real-time updates.
      </>
    ),
  },
  {
    title: 'Image Management',
    icon: '📦',
    description: (
      <>
        Manage container images with ease: list, pull, and delete images. Compatible with standard OCI image formats and
        container registries.
      </>
    ),
  },
];

function Feature({ title, icon, description, link, linkText }: FeatureItem) {
  return (
    <div className="group relative">
      <div className="h-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-orange-400 dark:hover:border-orange-500 transform hover:-translate-y-1">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-zinc-100">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-zinc-300 text-center leading-relaxed">{description}</p>

        {/* Optional Link */}
        {link && linkText && (
          <div className="mt-6 text-center">
            {link.startsWith('/') ? (
              <Link
                to={link}
                className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition-colors"
              >
                {linkText}
              </Link>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition-colors"
              >
                {linkText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600 dark:text-orange-400">Key Features</h2>
          <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Running Docker workloads on macOS with Apple's container framework
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {FeatureList.map(props => (
            <Feature key={props.title} {...props} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-orange-100 dark:bg-orange-950/50 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-zinc-100">Ready to get started? 🚀</h3>
            <p className="text-gray-600 dark:text-zinc-300 mb-6 max-w-2xl">
              Download Socktainer and start running your Docker workloads on Apple containers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>📥</span>
                Download Latest Release
              </Link>
              <a
                href="https://github.com/socktainer/socktainer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-800 dark:text-zinc-100 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>⭐</span>
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
