import { Icon } from "@/components/core";
import { IconNames } from "@/components/core/icon/types";
import type { FC } from "react";
import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  icon: IconNames;
};

const companyLinks: FooterLink[] = [
  { label: "Partnerships", href: "#partnerships" },
  { label: "About us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
];

const helpLinks: FooterLink[] = [
  {
    label: "Contact Us",
    href: "mailto:hello@evolvafrica.com",
    isExternal: true,
  },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

const socialLinks: SocialLink[] = [
  { label: "X", href: "https://x.com", icon: "X" },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "Facebook",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "Instagram",
  },
  { label: "GitHub", href: "https://github.com", icon: "Github" },
];

const FooterNavLink: FC<{ item: FooterLink }> = ({ item }) => {
  const className =
    "text-sm text-gray-600 transition-colors duration-200 hover:text-white font-poppins";

  if (item.isExternal || !item.href.startsWith("/")) {
    return (
      <a
        href={item.href}
        className={className}
        {...(item.isExternal
          ? { target: "_blank", rel: "noreferrer" }
          : undefined)}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.href} className={className}>
      {item.label}
    </Link>
  );
};

const SocialButton: FC<{ item: SocialLink }> = ({ item }) => {
  const { icon } = item;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/25 bg-white/8 text-blue-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300/70 hover:bg-white/12 hover:text-white"
    >
      <Icon name={icon} className="h-4.5 w-4.5" />
    </a>
  );
};

export const Footer: FC = () => {
  return (
    <footer className="bg-blue-900 px-4 pb-8 pt-10 text-white sm:px-6 lg:px-8 mt-56">
      <div className="mx-auto max-w-320 -translate-y-40 md:-translate-y-56 rounded-4xl bg-[linear-gradient(120deg,#eef7dc_0%,#dcefe5_46%,#cadcff_100%)] px-6 py-10 text-center text-blue-900 shadow-[0_28px_80px_rgba(0,8,29,0.24)] sm:px-10 md:px-14 md:py-14 lg:px-20 lg:py-16">
        <h2 className="mx-auto max-w-269.5 font-neue-machina text-2xl font-extrabold leading-10 md:leading-18 tracking-[-0.04em] md:text-5xl lg:text-[4.5rem]">
          Want to Evolv Beyond the Narrative ?
        </h2>

        <p className="mx-auto mt-6 max-w-269.5 text-base leading-7 text-blue-900/80 sm:text-lg font-poppins">
          Join our community to get updates, stories, and opportunities from the
          Evolv Africa Summit community. Stay connected, inspired, and ready to
          make an impact.
        </p>

        <Link
          to="#"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-primary px-7 font-neue-machina text-base font-semibold text-white shadow-[0_10px_22px_rgba(29,68,184,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Involve me!
        </Link>
      </div>

      <div className="mx-auto -mt-28 md:-mt-12 max-w-320">
        <div className="grid gap-12 pb-12 pt-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Evolv Africa home"
            >
              <Icon
                name="Logo"
                width={220}
                height={98}
                className="h-auto w-44 sm:w-52"
              />
            </Link>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((item) => (
                <SocialButton key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-neue-machina text-2xl font-bold">Company</h3>
            <nav className="mt-6 flex flex-col gap-5">
              {companyLinks.map((item) => (
                <FooterNavLink key={item.label} item={item} />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-neue-machina text-2xl font-bold">Help</h3>
            <nav className="mt-6 flex flex-col gap-5">
              {helpLinks.map((item) => (
                <FooterNavLink key={item.label} item={item} />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-neue-machina text-2xl font-bold">
              Subscribe to Newsletter
            </h3>

            <form
              className="mt-6 flex rounded-[1.25rem] flex-row sm:items-stretch"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-newsletter-email">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-white px-5 text-base text-blue-900 outline-none transition-shadow duration-200 placeholder:text-blue-900/35 focus:shadow-[0_0_0_3px_rgba(161,196,255,0.35)] rounded-r-none"
              />
              <button
                type="submit"
                className="min-h-14 rounded-2xl bg-primary px-7 font-neue-machina text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-600 rounded-l-none"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/18 pt-6">
          <p className="text-center text-sm text-blue-100/70">
            © Copyright 2026, All Rights Reserved by Evolv Africa
          </p>
        </div>
      </div>
    </footer>
  );
};
