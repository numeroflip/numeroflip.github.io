import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import TimelineCard from "./TimelineCard";
const classes = {
  timeLine: clsx(
    "w-[--timeline-width] justify-self-center border-2 border-current bg ",
  ),
};

/*
 * DATA
 */

type TimelineEntry = {
  title: string;
  date: string;
  company: React.ReactNode;
  description: React.ReactNode;
  projects: Experience[];
  tech?: string[];
};

type Experience = {
  name: string;
  description: string;
  list: React.ReactNode[];
  tech: string[];
};

function defineProject(obj: Experience) {
  return obj;
}

const timelineEntries: TimelineEntry[] = [
  {
    title: "Frontend Engineer",
    date: "2022 - Present",
    company: (
      <>
        Prepend GmbH <span className="text-xs font-normal">(remote)</span>
      </>
    ),
    description: "",
    projects: [
      defineProject({
        name: "Catering Organization Platform",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
        list: [
          "Maintained the Frontend of the web application using React and Next.js",
          "Implemented A/B testing and analytics to measure user engagement",
          "Collaborated with designers to implement a redesign of the ecommerce app (AB tested)",
          "Implemented web performance optimization techniques to improve page load times by 30%",
          ,
        ],
        tech: ["TS", "React", "Tailwind", "Next.js"],
      }),
      defineProject({
        name: "Real Estate Platform and Marketplace",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
        list: [
          "Built the ",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
          "ea explicabo aspernatur esse! Culpa, quis voluptatibus sunt distinctio unde ipsam",
        ],
        tech: ["TS", "React", "Tailwind", "Next.js", "Contentful"],
      }),
      defineProject({
        name: "Management solutions for medical representatives",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
          "ea explicabo aspernatur esse! Culpa, quis voluptatibus sunt distinctio unde ipsam",
        ],
        tech: ["React", "Laravel", "PHP", "MySQL", "GraphQL", "Firebase"],
      }),
    ],
  },
  {
    title: "Frontend Engineer",
    date: "2021 - 2022",
    company: "Codelit Kft (remote)",
    description: "",
    projects: [
      defineProject({
        name: "A social app for local communities",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
          "ea explicabo aspernatur esse! Culpa, quis voluptatibus sunt distinctio unde ipsam",
        ],
        tech: ["TS", "React", "Tailwind", "Next.js"],
      }),
      defineProject({
        name: "An online learning platform",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius provident",
          "ea explicabo aspernatur esse! Culpa, quis voluptatibus sunt distinctio unde ipsam",
        ],
        tech: ["TS", "React", "Material UI", "Docker", "Nodejs"],
      }),
    ],
  },
];

/*
 * COMPONENT
 */

const Timeline = () => {
  return (
    <section className="mx-auto my-32 [--timeline-width:8px] md:[--timeline-width:8px]">
      <div className="relative mx-auto w-fit">
        <TimelineEndFragment type="top" />

        <ul className="relative my-1 flex min-h-64 w-full flex-col justify-center gap-10 pt-2">
          {timelineEntries.map((entry) => (
            <TimelineCard
              as="li"
              company={entry.company}
              date={entry.date}
              key={entry.date}
              title={entry.title}
              description={
                <>
                  {entry.description}
                  <div className="prose mb-2 flex flex-col gap-10 text-text">
                    {entry.projects.map((project) => (
                      <section
                        className="border-2 border-current bg-white p-5 pb-4 shadow-straight"
                        key={project.name}
                      >
                        <h4 className="mt-0">Project: {project.name}</h4>
                        <ul className="mb-5 text-sm">
                          {project.list.map((item) => (
                            <li key={item?.toString()}>{item}</li>
                          ))}
                        </ul>
                        <Tech items={project.tech} />
                      </section>
                    ))}
                  </div>
                </>
              }
            />
          ))}
          <TimelineBase />
        </ul>

        <TimelineEndFragment type="bottom" />
      </div>
    </section>
  );
};

/*
 * Timeline
 */

function TimelineBase() {
  return (
    <div
      aria-hidden
      className={clsx(
        "absolute inset-0 z-0 flex flex-col gap-1 rounded-full",
        /*         "md:items-center md:justify-center",
         */
      )}
    >
      <div className={twMerge(classes.timeLine, "z-20 grow")}></div>
    </div>
  );
}

interface TimelineFragmentProps {
  type: "top" | "bottom";
}
function TimelineEndFragment({ type }: TimelineFragmentProps) {
  return (
    <div
      className={clsx("z-0 flex w-full flex-col gap-1" /* "md:items-center" */)}
    >
      {type === "top" ? (
        <>
          <div
            className={twMerge(classes.timeLine, "z-0 h-[5px] rounded-none")}
          ></div>
          <div
            className={twMerge(classes.timeLine, "z-0 h-2 rounded-none")}
          ></div>
        </>
      ) : (
        <>
          <div
            className={twMerge(classes.timeLine, "z-0 h-2 rounded-none")}
          ></div>
          <div
            className={twMerge(classes.timeLine, "z-0 h-[5px] rounded-none")}
          ></div>
        </>
      )}
    </div>
  );
}

function Tech({ items }: { items: string[] }) {
  return (
    <ul className="not-prose ml-auto flex w-fit flex-wrap justify-end gap-2 overflow-hidden rounded-md px-2 text-xs text-text/60">
      {items.map((item) => (
        <React.Fragment key={item}>
          <li
            key={item}
            className="group relative block rounded-sm bg-secondary-100 px-2 py-0.5 text-secondary-900 before:absolute before:-left-2 before:top-0 before:block before:h-full"
          >
            {item}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Timeline;
