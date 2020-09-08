import Link from "next/link";
import Head from "next/head";

import Logo from "../public/logo.svg";

const Layout = ({ children, title, description }) => (
  <>
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
    <header className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Logo className="logo" />
            <span className="ml-3 text-xl"></span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-white cursor-pointer">Anasayfa</a>
          </Link>
          <Link href="/events">
            <a className="mr-5 hover:text-white cursor-pointer">
              Etkinliklerimiz
            </a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-white cursor-pointer">Hakkımızda</a>
          </Link>
          <Link href="/team">
            <a className="mr-5 hover:text-white cursor-pointer">
              Yönetim Kurulumuz
            </a>
          </Link>
          <Link href="/history">
            <a className="mr-5 hover:text-white cursor-pointer">Tarihçe</a>
          </Link>
          <Link href="/contact">
            <a className="mr-5 hover:text-white cursor-pointer">İletişim</a>
          </Link>
        </nav>
      </div>
    </header>
    <main className="min-h-screen bg-gray-900">{children}</main>
    <footer className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"></div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © 2020 ACM Bilkent Webmaster Team
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/bilkentacm/" passHref={true}>
              <a className="text-gray-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </Link>
            <Link href="https://twitter.com/bilkentacm" passHref={true}>
              <a className="ml-3 text-gray-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </Link>
            <Link href="https://www.instagram.com/bilkentacm/" passHref={true}>
              <a className="ml-3 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/company/acmbilkent/"
              passHref={true}
            >
              <a className="ml-3 text-gray-600">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
