import { useState, type CSSProperties, type ReactNode } from 'react';
import styles from './styles.module.css';

const COMMANDS = `container system start
./socktainer
export DOCKER_HOST=unix://$HOME/.socktainer/container.sock
docker ps`;

const at = (d: number, n?: number) => ({ '--d': `${d}s`, '--n': n }) as CSSProperties;

function Command({ d, n, cont, children }: { d: number; n: number; cont?: boolean; children: ReactNode }) {
  return (
    <div className={styles.show} style={at(d)}>
      <span className="text-green-400 select-none">{cont ? '    ' : '$ '}</span>
      <span className={styles.typed} style={at(d, n)}>
        {children}
      </span>
    </div>
  );
}

function Output({ d, children }: { d: number; children: ReactNode }) {
  return (
    <div className={`${styles.fade} text-gray-400 select-none`} style={at(d)}>
      {children}
    </div>
  );
}

function Step({ d, n, label }: { d: number; n: number; label: string }) {
  return (
    <span
      className={`${styles.step} px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/50`}
      style={at(d)}
    >
      {n} · {label}
    </span>
  );
}

export default function QuickStart(): ReactNode {
  const [copied, setCopied] = useState(false);
  const copy = () =>
    navigator.clipboard?.writeText(COMMANDS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });

  return (
    <div className="mt-2 bg-gray-900 dark:bg-black rounded-lg shadow-2xl p-4 md:p-5 border border-gray-700 max-w-2xl mx-auto lg:mx-0">
      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-medium">
        <div className="flex gap-1.5 mr-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Step d={0.3} n={1} label="Start" />
        <span className="text-gray-600">─</span>
        <Step d={1.7} n={2} label="Run" />
        <span className="text-gray-600">─</span>
        <Step d={3} n={3} label="Use" />
        <button
          type="button"
          onClick={copy}
          className="ml-auto px-2 py-0.5 rounded border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 bg-transparent cursor-pointer"
        >
          {copied ? '✓ Copied' : '⧉ Copy'}
        </button>
      </div>
      <pre className="text-xs md:text-sm text-left overflow-x-auto bg-transparent p-0 m-0">
        <code className="text-gray-300 bg-transparent border-0 p-0">
          <Command d={0.3} n={22}>
            <span className="text-orange-400">container system start</span>
          </Command>
          <Output d={1.3}>✓ Apple container ready</Output>
          <Command d={1.7} n={12}>
            <span className="text-orange-400">./socktainer</span>
          </Command>
          <Output d={2.4}>✓ listening on ~/.socktainer/container.sock</Output>
          <Command d={3} n={20}>
            <span className="text-green-400">export</span> <span className="text-blue-400">DOCKER_HOST</span>
            {'=\\'}
          </Command>
          <Command cont d={3.8} n={39}>
            <span className="text-yellow-500">unix://$HOME/.socktainer/container.sock</span>
          </Command>
          <Command d={5.3} n={9}>
            <span className="text-orange-400">docker</span> <span className="text-purple-400">ps</span>
          </Command>
          <Output d={5.9}>{'CONTAINER ID   IMAGE   STATUS\n3f2a9c1e7b4d   nginx   Up 2 seconds'}</Output>
        </code>
      </pre>
    </div>
  );
}
