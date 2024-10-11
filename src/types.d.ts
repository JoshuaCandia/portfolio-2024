export type SocialIcon = Record<string, string | any>;

export interface iProjects {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
  icon?: string;
  techIcon: any;
  mainTech: iMainTech;
  latest?: boolean;
}

export interface iMainTech {
  title: string;
  url: string;
  techIcon: any;
}
