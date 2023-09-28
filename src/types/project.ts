import { ReactNode } from "react";
import { Skills } from ".";

export interface Project {
  name: string;
  time: string;
  impact: (string | ReactNode)[];
  description: string;
  skills: Skills;
}
