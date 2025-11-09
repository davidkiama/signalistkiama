import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link className="auth-logo" href="/sign-in">
          <Image src="assets/icons/logo.svg" alt="SignalistKiama Logo" width={140} height={32} />
        </Link>

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>

      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote>
            Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel
            more confident making moves in the market
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Ethan R.</cite>
              <p className="max-md:text-xs test-gray-500">Retail Investor</p>
            </div>

            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  key={star}
                  className="w-5 h-5"
                  src="assets/icons/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            className="auth-dashboard-preview absolute top-0"
            src="/assets/images/dashboard.png"
            alt="Dashboard preview"
            width={1440}
            height={1150}
          />
        </div>
      </section>
    </main>
  );
};

export default layout;
