import { useState } from 'react';

export default function CopyButton({ value, className = '' }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the value stays visible to copy by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copiar ${value}`}
      className={`h-8 px-3 rounded-lg text-[13px] font-semibold flex items-center gap-1.5 transition-colors ${
        copied ? 'bg-lime text-black' : 'bg-white/10 hover:bg-white/15 text-white'
      } ${className}`}
    >
      <i className={`bi ${copied ? 'bi-check2' : 'bi-copy'}`} aria-hidden="true" />
      <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
    </button>
  );
}
