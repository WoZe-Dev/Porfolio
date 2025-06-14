import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const Connaissance: React.FC = () => {
  const generalSkills = [
    { name: "Résolution de problèmes", color: "#4CAF50", isLearning: false, isBad: false },
    { name: "Communication efficace", color: "#2196F3", isLearning: false, isBad: false },
    { name: "Gestion du temps", color: "#FFC107", isLearning: false, isBad: false },
  ];

  const programmingSkills = [
    { name: "Typescript", color: "#007acc", isLearning: false, isBad: false },
    { name: "Python", color: "#FFD43B", isLearning: false, isBad: false },
    { name: "Javascript", color: "#F0DB4F", isLearning: false, isBad: false },
    { name: "SQL", color: "#003B57", isLearning: false, isBad: false },
    { name: "PHP", color: "#484C89", isLearning: false, isBad: true },
    { name: "C#", color: "#00599c", isLearning: false, isBad: true },
  ];

  const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const webSkills = [
    { name: "React", color: randomColor(), isLearning: false, isBad: false },
    { name: "Next.js", color: randomColor(), isLearning: false, isBad: false },
    { name: "Node.js", color: randomColor(), isLearning: false, isBad: false },
    { name: "TailwindCSS", color: randomColor(), isLearning: false, isBad: false },
    { name: "HTML", color: randomColor(), isLearning: false, isBad: false },
    { name: "CSS", color: randomColor(), isLearning: false, isBad: false },
    { name: "JavaScript", color: randomColor(), isLearning: false, isBad: false },
  ];

  const renderSkills = (skills: typeof generalSkills) => (
    <div className="flex  flex-wrap gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          data-is-learning={skill.isLearning}
          data-is-bad={skill.isBad}
          className="relative flex  items-center justify-center gap-1 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 p-4 leading-none text-gray-900 dark:text-gray-100 data-[is-learning='true']:animate-pulse data-[is-bad='true']:opacity-50"
        >
          <span>
            <svg width="1em" height="1em" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="64" fill={skill.color} />
            </svg>
          </span>
          <span>{skill.name}</span>
          {skill.isLearning && (
            <span className="absolute right-2 top-2">
              <span className="relative flex h-1 w-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-1 w-1 rounded-full bg-green-500"></span>
              </span>
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className=" dark:bg-black text-gray-900 dark:text-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Section Header */}
      <div className="flex items-center vertical justify-center gap-1 text-xl font-medium md:justify-start">
        <span>Connaissances</span>
      </div>

      {/* Accordion Root */}
      <Accordion.Root type="multiple">
        {/* Item 1: Compétences générales */}
        <Accordion.Item
          value="general-skills"
          className="mt-px border-b vertical border-gray-200 dark:border-gray-700"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-7 text-lg leading-none outline-none transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <span>Compétences générales</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="transition-transform duration-300 group-data-[state=open]:rotate-180"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="p-4">
              {renderSkills(generalSkills)}
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Item 2: Langages de programmation */}
        <Accordion.Item
          value="programming-skills"
          className="mt-px border-b vertical border-gray-200 dark:border-gray-700"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-7 text-lg leading-none outline-none transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <span>Langages de programmation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="transition-transform duration-300 group-data-[state=open]:rotate-180"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="p-4">
              {renderSkills(programmingSkills)}
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Item 3: Développement Web */}
        <Accordion.Item
          value="web-skills"
          className="mt-px border-b vertical border-gray-200 dark:border-gray-700"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-7 text-lg leading-none outline-none transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <span>Front-end</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="transition-transform duration-300 group-data-[state=open]:rotate-180"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="p-4">
              {renderSkills(webSkills)}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default Connaissance;