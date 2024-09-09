export interface INavigationItem {
  href: string;
  title: string;
}

export interface WorkExperience {
  date: {
    startDate: Date;
    endDate: Date | 'Present';
  };
  companyName: string;
  location: string;
  position: string;
}

export interface ISkillSet {
  title: string;
  description: string;
  icons: Array<{ src: string; alt: string }>;
}
