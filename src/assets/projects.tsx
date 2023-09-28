import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Rotational Worker Helper",
    description: "A web application to assist rotating seasonal workers.",
    impact: [
      "Independently built backend component from scratch.",
      "Single-handedly integrate all third party APIs with the frontend component.",
    ],
    time: "Sep 2023 -",
    skills: {
      frontend: ["ReactJS", "TypeScript"],
      backend: ["ExpressJS", "NodeJS"],
      database: ["Realtime Database"],
      cloud: ["Firebase"],
      testing: [],
    },
  },
  {
    name: "[Internal] Testing Framework Project",
    description:
      "Built an internal automation testing framework that is syntactically friendly to QA Engineers.",
    impact: [
      "Build the framework's foundation.",
      "Document the framework with how to maintain for developers and how to implement for testers.",
    ],
    time: "Sep 2023 -",
    skills: {
      frontend: ["JavaScript"],
      cloud: ["AWS"],
      testing: ["Test Cafe"],
      backend: [],
      database: [],
    },
  },
  {
    name: "[Confidential] Child Support Project",
    description:
      "A web application that allow users to tune in, review, and print their child support case.",
    impact: [
      "Spearheaded the conceptualization, and execution, of merging repositories, effectively mitigated 40% of development effort.",
    ],
    time: "Mar 2023 - Sep 2023",
    skills: {
      database: ["PostgreSQL", "DynamoDB"],
      frontend: ["ReactJS", "TypeScript"],
      backend: ["Python"],
      cloud: ["AWS"],
      testing: ["Cypress"],
    },
  },
  {
    name: "Augustana College GPA Calculator",
    description:
      "A single-paged web application that provide GPA estimation for the upcoming semester.",
    impact: [
      "Defined use case and executed.",
      <>
        <a href="https://www.augustana.edu/academics/registrar/calculator">
          Augustana College's
        </a>{" "}
        choice for GPA Calculator application.
      </>,
      <>
        Visit{" "}
        <a href="https://augustanacomputerscienceprojects.github.io/gpa-calc">
          the app
        </a>{" "}
        here.
      </>,
    ],
    time: "Sep 2022 - Dec 2022",
    skills: {
      frontend: ["JavaScript"],
      backend: [],
      database: [],
      testing: [],
      cloud: [],
    },
  },
  {
    name: "Cooking Papa",
    description:
      "A mobile application that provide food recommendation with just a snap of the ingredient.",
    impact: ["Brainstormed the idea and the tech stack for the project."],
    time: "Feb 2022 - May 2022",
    skills: {
      frontend: ["Flutter"],
      cloud: ["Firebase"],
      backend: [],
      testing: [],
      database: [],
    },
  },
  {
    name: "[Confidential] Property Value Assessment Project",
    description:
      "A helper stand-alone API component that assist Salesforce with a better heap space.",
    impact: [
      "Cut the operation time by 80%.",
      "Wrote reusable code that slashed subsequent developers effort by up to 40%.",
    ],
    time: "Jun 2022 - Aug 2022",
    skills: {
      database: ["PostgreSQL"],
      backend: ["C#"],
      cloud: ["Heroku"],
      frontend: [],
      testing: [],
    },
  },
  {
    name: "Enfue",
    description:
      "A combination of application tracking system and professional networking platform.",
    impact: [
      "Independently developed APIs from scratch based on prototypes.",
      <>
        Visit <a href="https://enfue.com/">Enfue</a> for completed product.
      </>,
    ],
    time: "May 2022 - Jun 2022",
    skills: {
      database: ["PostgreSQL"],
      backend: ["NestJS", "NodeJS"],
      frontend: [],
      cloud: [],
      testing: [],
    },
  },
  {
    name: "[Confidential] Property Tax Project",
    description:
      "A large-scale, microservice web application for managing property and billing property taxes with a gigantic scope.",
    impact: [
      "Honorarily served as the Agile team's Technical Lead position.",
      "Maintain code style's compliance with SonarQube.",
      "Collaborate with Scrum Master to manage the team's allocation.",
    ],
    time: "Jun 2021 - Jan 2022",
    skills: {
      database: ["SQL Server"],
      frontend: ["Angular"],
      backend: ["C#"],
      cloud: ["Azure"],
      testing: ["Fluent Assertion", "XUnit", "Jasmine"],
    },
  },
  {
    name: "Websites Revamp Project",
    description: "Revamping multiple webpages",
    impact: [
      <>
        Independently executed the revamping of 3 websites:{" "}
        <a href="https://datahouse.asia/">DataHouse Asia</a> (actually, the
        older version of it 😔), <a href="https://capturedx.com">CaptureDx</a>,{" "}
        <a href="https://www.lumisight.com/">Lumisight</a>
      </>,
    ],
    time: "Mar 2021 - May 2021",
    skills: {
      frontend: ["JavaScript"],
      backend: ["PHP"],
      database: [],
      cloud: [],
      testing: [],
    },
  },
  {
    name: "[Confidential] Proof of Concept Projects",
    description: "Urgent PoC projects",
    impact: ["Rapidly delivered projects which quality"],
    time: "Mar 2021 - May 2021",
    skills: {
      frontend: ["JavaScript", "TypeScript"],
      backend: [],
      database: [],
      cloud: [],
      testing: [],
    },
  },
];
