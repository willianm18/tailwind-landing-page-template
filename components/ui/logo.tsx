import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="NexFlow">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path d="M8 16L13 11L17 15L24 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21L13 16L17 20L24 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
      <span className="text-lg font-bold tracking-tight text-foreground">
        Nex<span className="text-primary">Flow</span>
      </span>
    </Link>
  );
}