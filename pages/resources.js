import Container from '@/components/Container';
import NextLink from 'next/link';

export default function Resources() {
  return (
    <Container
      title="Resources – Colin Dismuke"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="w-full flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resources
        </h1>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Articles
        </h3>
        <NextLink href="https://cash.app/bitcoin">
          <a className="mb-2 hover:underline text-black dark:text-white">
            My First Bitcoin
          </a>
        </NextLink>
        <NextLink href="https://a16z.com/2021/04/02/nfts-readings-resources/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            NTF Canon
          </a>
        </NextLink>
        <NextLink href="https://a16z.com/2018/02/10/crypto-readings-resources/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Crypto Canon
          </a>
        </NextLink>
        <NextLink href="https://j.mirror.xyz/2j2iAo4su48mkfZoGWHZCMVkmPi8mE_YOyyMWrNPAX4">
          <a className="mb-2 hover:underline text-black dark:text-white">
            NFTs are about more than art
          </a>
        </NextLink>
        <NextLink href="https://j.mirror.xyz/k0yCgq0bjgn2X0AujhwjKIYk4SDBpdNayjU5_E8Wm4I">
          <a className="mb-2 hover:underline text-black dark:text-white">
            New Internet logic
          </a>
        </NextLink>
        <NextLink href="https://p.mirror.xyz/cVN3KOss0uqpZwxHQKtC4Syvn1RfXaxofFKHJuKLWS4">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Crypto x Creator Economy
          </a>
        </NextLink>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Newsletters
        </h3>
        <NextLink href="https://newsletter.banklesshq.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Bankless
          </a>
        </NextLink>
        <NextLink href="https://latecheckout.substack.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Late Checkout
          </a>
        </NextLink>
        <NextLink href="https://collisions.substack.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Collisions
          </a>
        </NextLink>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Podcasts
        </h3>
        <NextLink href="https://modern.finance/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Modern Finance
          </a>
        </NextLink>
        <NextLink href="https://www.proof.xyz/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Proof
          </a>
        </NextLink>
        <NextLink href="http://podcast.banklesshq.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Bankless
          </a>
        </NextLink>
        <NextLink href="https://podcasts.apple.com/us/podcast/two-bored-apes/id1579517707">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Two Bored Apes
          </a>
        </NextLink>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <NextLink href="https://artblocks.io/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Art Blocks
          </a>
        </NextLink>
        <NextLink href="https://www.larvalabs.com/cryptopunks">
          <a className="mb-2 hover:underline text-black dark:text-white">
            CryptoPunks
          </a>
        </NextLink>
        <NextLink href="https://www.blitmap.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Blitmap
          </a>
        </NextLink>
        <NextLink href="https://www.lootproject.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Loot Project
          </a>
        </NextLink>
        <NextLink href="https://punkscomic.com/">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Punks Comics
          </a>
        </NextLink>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          People
        </h3>
        <NextLink href="https://twitter.com/iamDCinvestor">
          <a className="mb-2 hover:underline text-black dark:text-white">
            iamDCinvestor
          </a>
        </NextLink>
        <NextLink href="https://twitter.com/JasonHitchcock">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Jason Hitchcock
          </a>
        </NextLink>
        <NextLink href="https://twitter.com/kevinrose">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Kevin Rose
          </a>
        </NextLink>
        <NextLink href="https://twitter.com/dhof">
          <a className="mb-2 hover:underline text-black dark:text-white">
            Dom Hoffman
          </a>
        </NextLink>
        <NextLink href="https://twitter.com/john_c_palmer">
          <a className="mb-2 hover:underline text-black dark:text-white">
            John Palmer
          </a>
        </NextLink>
      </div>
    </Container>
  );
}
