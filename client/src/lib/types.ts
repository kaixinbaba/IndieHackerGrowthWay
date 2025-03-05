export interface Resource {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  resources: Resource[];
}

export interface ResourcesData {
  sections: Section[];
}
