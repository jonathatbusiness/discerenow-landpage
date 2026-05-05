import Link from "next/link";
import type { ReactNode } from "react";

type FeaturedLinkProps = {
  href: string;
  children: ReactNode;
  label?: string;
  external?: boolean;
};

export default function FeaturedLink({
  href,
  children,
  label,
  external = false,
}: FeaturedLinkProps) {
  const className =
    "my-8 flex rounded-none bg-[#e9ddff] p-0 shadow-none transition-colors duration-200 hover:bg-[#e1d1ff]";

  const content = (
    <>
      <span
        aria-hidden="true"
        className="block w-[8px] shrink-0 bg-dn-purple"
      />

      <span className="block flex-1 px-6 py-5">
        {label ? (
          <span className="mb-3 block text-sm font-black uppercase tracking-[0.08em] text-dn-purple">
            {label}
          </span>
        ) : null}

        <span className="block text-xl font-medium leading-snug text-dn-text">
          {children}
        </span>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
