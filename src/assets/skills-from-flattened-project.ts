import { projects } from "./projects";
import { Skills } from "../types";

export const skillsFromFlattenedProject: Skills = {
  database: Array.from(
    new Set(projects.map((project) => project.skills.database).flat())
  ).sort(),
  frontend: Array.from(
    new Set(projects.map((project) => project.skills.frontend).flat())
  ).sort(),
  backend: Array.from(
    new Set(projects.map((project) => project.skills.backend).flat())
  ).sort(),
  cloud: Array.from(
    new Set(projects.map((project) => project.skills.cloud).flat())
  ).sort(),
  testing: Array.from(
    new Set(projects.map((project) => project.skills.testing).flat())
  ).sort(),
};
