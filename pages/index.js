import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-orange-400 to-pink-400 transform hover:bg-gradient-to-l hover:from-pink-400 hover:via-orange-400 hover:to-green-400">
          Hi, I'm Colin.
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm an ocean engineer, web developer, and sometimes photographer. If
          you'd like to get in touch, you can find me on&nbsp;
          <Link href="https://twitter.com/cpdis">
            <a>Twitter</a>
          </Link>
          ,&nbsp;
          <Link href="https://github.com/cpdis">
            <a>Github</a>
          </Link>
          ,&nbsp;
          <Link href="https://angel.co/colin-dismuke">
            <a>AngelList</a>
          </Link>
          ,&nbsp;
          <Link href="https://www.linkedin.com/in/colindismuke">
            <a>LinkedIn</a>
          </Link>
          , and&nbsp;
          <Link href="https://www.instagram.com/cpdis/">
            <a>Instagram</a>
          </Link>
          . I'm <span className="font-bold">cpdis</span> pretty much everywhere
          so, if you're wondering, that's probably me.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="monorepo-lerna-yarn-workspaces"
        />
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="WFH Toys"
          description="All of the tools, toys, and gear you need to work from home — in one place."
          href="https://wfh.toys/"
          icon="react2025"
        />
        <ProjectCard
          title="Pick Em"
          description="An investor application that makes it easier to research stocks and make better investment decisions."
          href="https://getpickem.co/"
          icon="nextjs"
        />
        <ProjectCard
          title="password.coffee ☕"
          description="Locations, descriptions, and those 🔑's to the Wifi kingdom. 🗺️."
          href="https://password.coffee/"
          icon="fastfeedback"
        /> */}
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
