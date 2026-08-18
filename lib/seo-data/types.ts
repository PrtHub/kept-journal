export interface ComparisonItem {
  slug: string;
  competitorName: string;
  competitorType: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  overview: string;
  verdict: string;
  differences: {
    feature: string;
    kept: string;
    competitor: string;
    whyItMatters: string;
  }[];
  tableMatrix: {
    dimension: string;
    kept: string;
    competitor: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

export interface UseCaseItem {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  theProblem: string;
  howKeptWorks: string;
  steps: {
    step: string;
    title: string;
    description: string;
  }[];
  keyBenefits: {
    title: string;
    detail: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

export interface FeatureItem {
  slug: string;
  title: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  description: string;
  architectureDetails: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}
