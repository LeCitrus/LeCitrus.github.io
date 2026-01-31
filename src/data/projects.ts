export type ProjectCategory = "hackathon" | "course" | "personal";

export interface ProjectItem {
  title: string;
  link: string;
  description: string;
  skills: string[];
  category: ProjectCategory;
}

export const projects: ProjectItem[] = [
  {
    title: "Imposter Detector",
    link: "https://imposter-detector.vercel.app/",
    description: "Modifies sound files to inject vine boom sound effects",
    skills: ["react", "chakra-ui", "mp3"],
    category: "hackathon",
  },
  {
    title: "Math GPT",
    link: "https://arithme.tech/",
    description: "Reads LaTeX equations and returns the solution",
    skills: ["react", "api", "chakra-ui"],
    category: "hackathon",
  },
  {
    title: "Lost and Coffee (repo)",
    link: "https://github.com/LeCitrus/Lost-and-Coffee",
    description: "Submission for GameJam 2021",
    skills: ["gamemaker"],
    category: "hackathon",
  },
  {
    title: "AndroidImpact (repo)",
    link: "https://github.com/CMPUT301F22T08/AndroidImpact",
    description: "Foodstuffs tracking app",
    skills: ["agile", "android", "java"],
    category: "course",
  },
  {
    title: "Movie Database With Pymongo (repo)",
    link: "https://github.com/LeCitrus/CMPUT291-Mini-Project-2",
    description: "Movie search using pymongo",
    skills: ["pymongo"],
    category: "course",
  },
  {
    title: "Fish Game (repo)",
    link: "https://github.com/LeCitrus/Fish-Game-JS",
    description: "Replication of rowing machine fish game",
    skills: ["javascript", "html"],
    category: "personal",
  },
  {
    title: "Exercise Tracker (repo)",
    link: "https://github.com/LeCitrus/Exercise-Tracker",
    description: "Mobile app to track exercises",
    skills: ["flutter"],
    category: "personal",
  },
];