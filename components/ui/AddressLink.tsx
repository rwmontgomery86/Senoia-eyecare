"use client";

import { ReactNode, MouseEventHandler } from "react";

export default function AddressLink({
  address,
  children,
  className = "",
}: {
  address: string;
  children: ReactNode;
  className?: string;
}) {
  const query = encodeURIComponent(address);
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const appleUrl = `https://maps.apple.com/?q=${query}`;

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (typeof navigator === "undefined") return;
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
      e.preventDefault();
      window.location.href = appleUrl;
    }
  };

  return (
    <a
      href={googleUrl}
      target="_blank"
      rel="noopener"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
