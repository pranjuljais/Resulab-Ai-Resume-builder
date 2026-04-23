import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/60 to-white mt-40">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <a href="#">
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
          </a>
          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Community
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-green-600 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60 pl-15">
            Smart resumes for the next generation of talent.
          </p>
          <div className="flex items-center gap-4 mt-3 mr-15">
            <a
              href="https://www.linkedin.com/in/pranjul-jaiswal-0859bb256/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin size-5 "
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/curious_coder_aman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="instaGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#feda75" />
                    <stop offset="25%" stop-color="#fa7e1e" />
                    <stop offset="50%" stop-color="#d62976" />
                    <stop offset="75%" stop-color="#962fbf" />
                    <stop offset="100%" stop-color="#4f5bd5" />
                  </linearGradient>
                </defs>

                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="url(#instaGradient)"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"
                  stroke="url(#instaGradient)"
                  stroke-width="2"
                  fill="none"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="url(#instaGradient)" />
              </svg>
            </a>
          </div>
          <p className="mt-3 text-center mr-1">
            © 2026
            <a className="ml-2">AI-Resume-Builder</a>
          </p>
        </div>
      </footer>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </>
  );
};

export default Footer;
