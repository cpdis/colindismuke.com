import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Traveled to Israel">
      ***
      </Step>
    </ul>
    <Divider />    
    <Year>2013</Year>
    <ul>
      <Step title="Traveled to Australia">
      ***
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Started Working At Delmar Systems">
        ***
      </Step>
      <Step title="First Ironman 🏅">
        ***
      </Step>            
      <Step title="Graduated from Texas A&M University, Again 🎓">
        ***
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Started Graduate School">
      ***
      </Step>    
      <Step title="Second Internship">
      ***
      </Step>
      <Step title="Got Married 💍">
      ***
      </Step>
      <Step title="Graduated From Texas A&M University 🎓">
      ***
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title="Traveled to New Zealand">
      Spent two weeks traveling around the North Island of New Zealand. One of the best places on 🌏.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="Landed First Internship in Las Palmas, La Canaria, Spain">
      ***
      </Step>
    </ul>
    <Divider />
    <Year>2006</Year>
    <ul>
      <Step title="Switched from mechanical engineering to ocean engineering">
        ***
      </Step>
      <Step title="Started at Texas A&M University, whoop!">
        ***
      </Step>
      <Step title="Graduated High School">
        ***
      </Step>
    </ul>
    <Divider />
    <Year>1996</Year>
    <ul>
      <Step title="Moved back to Houston — Katy, TX specifically">
        The year that we moved, the population of the two cities was approximately equal. Katy has since exploded while Longview has remained stagnant.
      </Step>
    </ul>
    <Divider />
    <Year>1990</Year>
    <ul>
      <Step title="Moved to Longview, TX">
        It was great.
      </Step>
    </ul>
    <Divider />
    <Year>1987</Year>
    <ul>
      <Step title="Born 👶🏼🍼 in Houston, TX" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Joined ▲Vercel">
        ***
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined ▲Vercel">
        ***
        </Step>
        <Step title="Launched React 2025 💯">
        ***
        </Step>
        <Step title="Emerging Technology Leader of the Year 🏆">
        ***
        </Step>
        <Step title="Got Married 🥳">
        ***
        </Step>
        <Step title="Became a Tech Lead 👨🏻‍💻">
        ***
        </Step>
        <Step title="Mastering Next.js made $10K 📈">
        ***
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Software Engineer III ✨">
        ***
        </Step>
        <Step title="Mastering Next.js ⚛️">
        ***
        </Step>
        <Step title="Bought a Townhome 🏡">
        ***
        </Step>
        <Step title="Got Engaged 💍">
        ***
        </Step>
        <Step title="Spoke at Talent42 🎤">
        ***
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
