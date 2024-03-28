import Button from "@/components/Shared/Button";
import Logo from "@/components/Shared/Logo";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <header className="container py-4 flex justify-center md:justify-between items-center">
      <Logo />
      <nav className="flex gap-6 items-center">
        <Link
          href="/#contact"
          className="text-md px-4 hidden lg:inline-block font-semibold text-green-100"
        >
          Contact
        </Link>
        <Button className="max-sm:hidden" variant="highlight">
          How it works
        </Button>
        <Button className="max-lg:hidden" variant="filled">
          Get Started
        </Button>
      </nav>
    </header>
  );
}
