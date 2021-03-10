import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <NowPlaying />
        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">
                About
              </a>
            </Link>
            <Link href="/newsletter">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Newsletter
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://twitter.com/cpdis">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://github.com/cpdis">GitHub</ExternalLink>
            <ExternalLink href="https://www.youtube.com/channel/UC4uoapaUBBkaXtUyc9NB8fw">
              YouTube
            </ExternalLink>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/uses">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Uses
              </a>
            </Link>
            {/* <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link> */}
          </div>
        </div>
      </footer>
      <div className="flex mx-auto mb-2 justify-center text-gray-500">
        Proud member of the&nbsp;
        <a href="https://weirdwidewebring.net/" target="_blank">
          Weird Wide Webring
        </a>
        .
      </div>

      <div className="flex mx-60 mb-4 justify-between bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-orange-400 to-pink-400 transform hover:bg-gradient-to-l hover:from-pink-400 hover:via-orange-400 hover:to-green-400">
        <div>
          <a href="https://weirdwidewebring.net/prev.html?ref=colindismuke.com">
            Previous
          </a>
        </div>
        <div>‡</div>
        <div>
          <a href="https://weirdwidewebring.net/next.html?ref=colindismuke.com">
            Next
          </a>
        </div>
        <div>‡</div>
        <div>
          <a href="https://weirdwidewebring.net/random.html">Random</a>
        </div>
        <div>‡</div>
        <div>
          <a href="https://weirdwidewebring.net">All</a>
        </div>
        <div>‡</div>
        <div>
          <a href="https://weirdwidewebring.net/join.html">Join</a>
        </div>
      </div>
    </div>
  );
}
