"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_NAME = "dn_blog_locale_choice";

function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

function setCookie(name: string, value: string) {
  const maxAge = 60 * 60 * 24 * 180;

  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export default function BlogLocalePrompt() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedChoice = getCookie(COOKIE_NAME);

    if (savedChoice) {
      return;
    }

    const languages = navigator.languages ?? [navigator.language];
    const isBrazilianPortuguese = languages.some((language) =>
      language.toLowerCase().startsWith("pt-br"),
    );

    if (isBrazilianPortuguese) {
      setIsVisible(true);
    }
  }, []);

  function stayInEnglish() {
    setCookie(COOKIE_NAME, "en");
    setIsVisible(false);
  }

  function goToPortuguese() {
    setCookie(COOKIE_NAME, "pt-br");
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-dn-bg/70 px-5 backdrop-blur-sm">
      <div className="max-w-md rounded-[28px] border border-white/10 bg-white p-6 shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-dn-blue">
          Idioma detectado
        </p>

        <h2 className="mt-3 text-2xl font-black leading-tight text-dn-text">
          Identificamos que seu navegador está em português do Brasil.
        </h2>

        <p className="mt-4 leading-7 text-dn-muted">
          Você prefere acessar a versão em português do blog do DiscereNow?
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pt-br/blog"
            onClick={goToPortuguese}
            className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-5 py-3 text-sm font-black shadow-lg"
          >
            <span className="text-white">Ir para PT-BR</span>
          </Link>

          <button
            type="button"
            onClick={stayInEnglish}
            className="flex flex-1 items-center justify-center rounded-full border border-dn-border bg-dn-surface-soft px-5 py-3 text-sm font-black text-dn-text transition hover:bg-white"
          >
            Continuar em inglês
          </button>
        </div>
      </div>
    </div>
  );
}
