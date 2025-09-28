// types/index.ts
export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  image: string;
}