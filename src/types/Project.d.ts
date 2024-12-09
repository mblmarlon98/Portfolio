import { Img } from "./Image";

export type ProjectList = {
    projectList: ProjectDetail[];
}

export type CodeScreenshot = {
    url: string;
    alt: string;
  };
  
  export type FeatureDetail = {
    name: string; // Name of the feature (e.g., "Power-ups")
    description: string; // General description of the feature
    screenshots: Img[]; // Screenshots related to the feature
    codeScreenshots: CodeScreenshot[]; // Code screenshots showcasing implementation
  };
  
  export type ChallengeDetail = {
    description: string; // Description of the challenge
    screenshots: Img[]; // Screenshots showcasing the challenge or solution
    codeScreenshots: CodeScreenshot[]; // Code screenshots explaining the solution
  };
  
  export type ProjectResource = {
    title: string; // Resource name
    url?: string; // Optional URL for external resources
    interpret?: string; // Author or creator of the resource
  };
  
  export type ProjectDetail = {
    title: string; // Project title
    description: string; // Project description
    img: Img; // Cover image or thumbnail for the project
    year: string; // Year of creation
    role: string; // Role of the user in the project (e.g., Developer, Artist)
    progress: number; // Progress percentage for the progress bar
    screenshots?: Img[]; // Gallery of project screenshots
    features?: FeatureDetail[]; // List of features with detailed descriptions
    challenges?: ChallengeDetail[]; // List of challenges and solutions
    rules?: string[]; // List of gameplay or project rules
    resources?: ProjectResource[]; // List of project resources
    tools?: string[]; // Tools, frameworks, or languages used
    folderName: string; // Folder name for embedding the game
  };