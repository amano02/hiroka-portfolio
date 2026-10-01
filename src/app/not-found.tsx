import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-enter flex min-h-[60vh] flex-col items-start justify-center px-5 sm:px-8 lg:px-12">
      <p className="font-display text-4xl text-text-primary">404</p>
      <p className="mt-4 text-text-secondary">ページが見つかりませんでした。</p>
      <Link
        href="/"
        className="font-ui mt-8 text-sm tracking-[0.2em] text-text-muted hover:text-text-primary"
      >
        HOME ↗
      </Link>
    </div>
  );
}
