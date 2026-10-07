import type { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.css';

// Single-column grid: zone backgrounds and the flow track are placed on explicit rows behind the content.
const row = (gridRow: string): CSSProperties => ({ gridRow, gridColumn: 1 });

const nodeClass =
  'relative z-10 mx-3 flex items-center justify-center gap-3 h-14 px-3 rounded-xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-zinc-900';
const zoneLabelClass = 'relative z-10 mx-3 mt-3 text-[10px] font-semibold uppercase tracking-wider text-left';

function Node({
  icon,
  title,
  subtitle,
  glow,
  gridRow,
  className = '',
}: {
  icon: string;
  title: string;
  subtitle: string;
  glow: string;
  gridRow: string;
  className?: string;
}) {
  return (
    <div style={row(gridRow)} className={`${nodeClass} ${glow} ${className}`}>
      <div className="text-3xl">{icon}</div>
      <div className="text-left">
        <div className="font-bold text-gray-800 dark:text-zinc-200">{title}</div>
        <div className="text-xs text-gray-600 dark:text-zinc-400">{subtitle}</div>
      </div>
    </div>
  );
}

export default function HeroAnimation(): ReactNode {
  return (
    <div
      role="img"
      aria-label="On the CLI side, docker run sends a request through the Unix socket. On the socket side, Socktainer receives it and Apple container starts the container in its own lightweight VM, then the result goes back to the Docker CLI."
      className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-4 border-2 border-orange-200 dark:border-orange-800 w-full max-w-md"
    >
      <div className="grid gap-1.5">
        {/* Zones */}
        <div
          style={row('1 / 4')}
          className="rounded-xl border border-dashed border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/30"
        />
        <div
          style={row('5 / 10')}
          className="rounded-xl border border-dashed border-orange-300 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30"
        />

        {/* Flow track, from the Docker CLI center to the Apple container center */}
        <div style={row('3 / 9')} className="relative pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-7 bottom-7 w-0.5 bg-orange-300 dark:bg-orange-700">
            <span className={styles.req}></span>
            <span className={styles.res}></span>
          </div>
        </div>

        {/* CLI side */}
        <div style={row('1')} className={`${zoneLabelClass} text-sky-700 dark:text-sky-300`}>
          CLI side
        </div>
        <div
          style={row('2')}
          className="relative z-10 mx-3 bg-gray-900 dark:bg-black rounded-lg p-3 border border-gray-700 font-mono text-sm text-left"
        >
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
        <Node
          icon="🐳"
          title="Docker CLI"
          subtitle="docker, compose, testcontainers…"
          glow={styles.glowCli}
          gridRow="3"
          className="mb-3"
        />

        {/* Socket boundary */}
        <div style={row('4')} className="relative flex justify-center py-1">
          <span className="relative z-10 px-3 py-1 rounded-full whitespace-nowrap font-mono text-[10px] sm:text-[11px] bg-white dark:bg-zinc-900 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-700">
            🔌 unix://$HOME/.socktainer/container.sock
          </span>
        </div>

        {/* Socket side */}
        <div style={row('5')} className={`${zoneLabelClass} text-orange-700 dark:text-orange-300`}>
          Socket side
        </div>
        <Node icon="🪄" title="Socktainer" subtitle="Docker REST API" glow={styles.glowSock} gridRow="6" />
        <div
          style={row('7')}
          className="h-8 flex items-center pl-[calc(50%+0.75rem)] whitespace-nowrap text-[10px] font-mono text-orange-600 dark:text-orange-400"
        >
          Containerization framework
        </div>
        <Node
          icon="🍏"
          title="Apple container"
          subtitle="one lightweight VM per container"
          glow={styles.glowApple}
          gridRow="8"
        />
        <div style={row('9')} className="relative z-10 mx-3 mb-3 flex flex-wrap justify-center gap-2 text-xs font-mono">
          <span className="px-2 py-1 rounded-md bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
            VM · redis
          </span>
          <span className="px-2 py-1 rounded-md bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
            VM · postgres
          </span>
          <span
            className={`${styles.vm} px-2 py-1 rounded-md bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-800`}
          >
            VM · nginx
          </span>
        </div>
      </div>
    </div>
  );
}
