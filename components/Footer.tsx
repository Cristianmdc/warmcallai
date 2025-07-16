"use client";

import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <span className="w-6 h-6 block">{/* PNG Logo */}
                <Image src="/logoAndName.png" width={36} height={36} alt="WarmCallAI logo" priority />
              </span>
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              AI insights for sales pros. Every call counts.
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} WarmCallAI - All rights reserved
            </p>
          </div>
          
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                PRODUCT
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/#pricing" className="link link-hover">
                  Pricing
                </Link>
                <Link href="/blog" className="link link-hover">
                  Blog
                </Link>
                <a href="/#" target="_blank" className="link link-hover">
                  API Documentation
                </a>
                <a href="/#" target="_blank" className="link link-hover">
                  Integrations
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                COMPANY
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a href="/#" target="_blank" className="link link-hover">
                  About Us
                </a>
                <a href="/#" target="_blank" className="link link-hover">
                  Careers
                </a>
                <a href="/#" target="_blank" className="link link-hover">
                  Press
                </a>
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy Policy
                </Link>
                <a href="/#" target="_blank" className="link link-hover">
                  Cookie Policy
                </a>
                <a href="/#" target="_blank" className="link link-hover">
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust badges and contact info */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-base-content/10 pt-8 px-8">
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-blue-700 font-semibold text-xs">
            <img src="https://img.icons8.com/color/48/000000/lock--v1.png" alt="Secure" className="w-5 h-5" /> SOC 2
          </span>
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-green-700 font-semibold text-xs">
            <img src="https://img.icons8.com/color/48/000000/gdpr.png" alt="Compliant" className="w-5 h-5" /> GDPR
          </span>
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-yellow-700 font-semibold text-xs">
            <img src="https://img.icons8.com/color/48/000000/star--v1.png" alt="5-star" className="w-5 h-5" /> 5-Star
          </span>
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-gray-700 font-semibold text-xs">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm0 9c-2.33 0-7 1.17-7 3.5V20h14v-1c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/></svg> hello@warmcallai.com
          </span>
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-gray-700 font-semibold text-xs">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="currentColor"/></svg> 1-800-WARM-CALL
          </span>
        </div>
        <div className="text-xs text-base-content/60 text-center md:text-right">
          123 Innovation Drive, San Francisco, CA 94105
        </div>
      </div>
    </footer>
  );
};

export default Footer;
