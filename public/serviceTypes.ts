import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  slug: string;
  description: string;
  content: string;
  images: StaticImageData[];
  upgradeImage: StaticImageData[];
  why: string;
  benefits: Array<{ title: string; text: string }>;
  typesIntro?: string;
  types?: Array<{ title: string; text: string }>;
  space: string;
  spaceTypes: Array<{ type: string; text: string }>;
  installationIntro?: string;
  installationSteps?: Array<{ step: string; text: string }>;
  maintenance?: {
    intro: string;
    steps: string[];
  };
  upgrade?: {
    intro: string;
    text: string;
  };
  finishesIntro?: string;
  finishes?: Array<{ title: string; text: string }>;
  contactText?: string;
  servicesIntro?: string;
  servicesDescription?: string;
  services?: Array<{ title: string; text: string }>;
  removalIntro?: string;
  removalSteps?: Array<{ step: string; text: string }>;
  whyUs?: string;
  whyUsSteps?: Array<{ step: string; text: string }>;
  expertiseIntro?: string;
  expertiseDescription?: string;
  expertise?: Array<{ title: string; text: string }>;
  workIntro?: string;
  work?: Array<{ title: string; text: string }>;
}

export interface ServicesData {
  services: Service[];
}
