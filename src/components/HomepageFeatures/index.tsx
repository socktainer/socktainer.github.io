import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const chipClass =
  'px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800';
const termClass = 'rounded-lg bg-zinc-950 border border-zinc-800 p-3 font-mono text-xs text-zinc-300 overflow-x-auto';

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span key={item} className={chipClass}>
          {item}
        </span>
      ))}
    </div>
  );
}

type Tile = {
  title: string;
  icon: string;
  description: ReactNode;
  visual: ReactNode;
  span?: string;
};

const tiles: Tile[] = [
  {
    title: 'Docker API compatible',
    icon: '🐳',
    description: 'A Docker-compatible REST API, so the tools you already use talk to Apple containers unchanged.',
    visual: <Chips items={['Docker CLI', 'Testcontainers', 'Podman Desktop', 'any Docker API client']} />,
    span: 'lg:col-span-2',
  },
  {
    title: 'Built on Apple container',
    icon: '🍏',
    description: "Runs on Apple's containerization framework, designed for Apple Silicon.",
    visual: <Chips items={['arm64', '1 VM per container', 'Swift']} />,
  },
  {
    title: 'Testcontainers',
    icon: '☕',
    description: 'Run your integration tests on macOS without Docker Desktop.',
    visual: (
      <Link
        to="/tutorial/testcontainers"
        className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
      >
        View tutorial →
      </Link>
    ),
  },
  {
    title: 'Container lifecycle',
    icon: '♻️',
    description: 'Create, run and inspect containers, follow logs, exec into them and stream events.',
    visual: (
      <div className="space-y-3">
        <div className={termClass}>
          <span className="text-green-400">$ </span>docker logs -f web
          <div className="text-zinc-500">listening on :8080</div>
        </div>
        <Chips
          items={['create', 'start', 'stop', 'restart', 'kill', 'rm', 'inspect', 'logs', 'exec', 'attach', 'events']}
        />
      </div>
    ),
    span: 'lg:col-span-2',
  },
  {
    title: 'Image management',
    icon: '📦',
    description: 'Pull, build and push OCI images, with authentication for your registries.',
    visual: <Chips items={['pull', 'build', 'push', 'tag', 'list', 'delete', 'save / load']} />,
    span: 'lg:col-span-2',
  },
  {
    title: 'Unix socket',
    icon: '🔌',
    description: 'Point DOCKER_HOST at the socket and you are done.',
    visual: (
      <div className={termClass}>
        <div>
          <span className="text-green-400">export</span> DOCKER_HOST=
        </div>
        <div className="pl-4 whitespace-nowrap text-yellow-500">unix://$HOME/.socktainer/container.sock</div>
      </div>
    ),
  },
];

function Feature({ title, icon, description, visual, span = '' }: Tile) {
  return (
    <div
      className={`${styles.reveal} ${span} min-w-0 flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-[0_0_32px_-8px_rgb(249_115_22/0.45)] transition-[border-color,box-shadow] duration-300`}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-xl text-xl bg-orange-100 dark:bg-orange-950/50">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-zinc-100">{title}</h3>
        <p className="m-0 text-gray-600 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">{visual}</div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center lg:text-left mb-12">
          <div className="text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2">
            Why Socktainer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-zinc-100">Key Features</h2>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto lg:mx-0">
            Running Docker workloads on macOS with Apple's container framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map(tile => (
            <Feature key={tile.title} {...tile} />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`${styles.reveal} mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl p-8 md:p-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl`}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready to get started?</h3>
            <p className="m-0 text-orange-50">
              Download Socktainer and start running your Docker workloads on Apple containers today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/download"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold rounded-lg shadow transition-colors"
            >
              📥 Download
            </Link>
            <a
              href="https://github.com/socktainer/socktainer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg transition-colors"
            >
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
