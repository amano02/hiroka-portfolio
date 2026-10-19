"use client";

import { useCallback, useState } from "react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [email]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="font-ui motion-safe-transition border border-black-muted/70 px-5 py-3 text-sm tracking-[0.18em] text-text-secondary transition-colors duration-300 hover:border-text-muted hover:text-text-primary"
    >
      {copied ? "Copied" : "Copy Email"}
    </button>
  );
}
