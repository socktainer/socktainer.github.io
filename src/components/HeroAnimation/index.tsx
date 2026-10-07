import type { ReactNode } from 'react';
import styles from './styles.module.css';

const nodeClass =
  'flex items-center gap-3 h-16 px-3 rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-zinc-950';

function Node({ icon, title, subtitle, glow }: { icon: string; title: string; subtitle: string; glow: string }) {
  return (
    <div className={`${nodeClass} ${glow}`}>
      <div className="text-3xl w-10 text-center">{icon}</div>
      <div className="text-left">
        <div className="font-bold text-gray-800 dark:text-zinc-200">{title}</div>
        <div className="text-xs text-gray-600 dark:text-zinc-400">{subtitle}</div>
      </div>
    </div>
  );
}

function Hop({ label }: { label: string }) {
  return <div className="h-8 flex items-center text-xs font-mono text-orange-600 dark:text-orange-400">{label}</div>;
}

export default function HeroAnimation(): ReactNode {
  return (
    <div
      role="img"
      aria-label="docker run sends a request through the Docker socket to Socktainer, which starts the container in its own lightweight VM with Apple container, and the result goes back to the Docker CLI."
      className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-6 border-2 border-orange-200 dark:border-orange-800 w-full max-w-md"
    >
      {/* Terminal */}
      <div className="bg-gray-900 dark:bg-black rounded-lg p-4 border border-gray-700 font-mono text-sm text-left">
        <div className="flex gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-300">
          <span className="text-green-400">$ </span>
          <span className={styles.typing}>docker run -d nginx</span>
          <span className={`${styles.caret} text-orange-400`}>▌</span>
        </div>
        <div className={`${styles.output} text-gray-400`}>3f2a9c1e7b4d…</div>
      </div>

      {/* Request flow */}
      <div className="relative mt-5 pl-8">
        <div className="absolute left-3 top-8 bottom-8 w-0.5 bg-orange-200 dark:bg-orange-800">
          <span className={styles.req}></span>
          <span className={styles.res}></span>
        </div>
        <Node icon="🐳" title="Docker CLI" subtitle="docker, compose, testcontainers…" glow={styles.glowCli} />
        <Hop label="unix://~/.socktainer/container.sock" />
        <Node icon="🧦" title="Socktainer" subtitle="Docker REST API" glow={styles.glowSock} />
        <Hop label="Containerization framework" />
        <Node icon="🍏" title="Apple container" subtitle="one lightweight VM per container" glow={styles.glowApple} />
      </div>

      {/* Running containers */}
      <div className="mt-3 pl-8 flex flex-wrap gap-2 text-xs font-mono">
        <span className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
          VM · redis
        </span>
        <span className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
          VM · postgres
        </span>
        <span
          className={`${styles.vm} px-2 py-1 rounded-md bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-800`}
        >
          VM · nginx
        </span>
      </div>
    </div>
  );
}
