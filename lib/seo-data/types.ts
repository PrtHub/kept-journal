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

export interface PromptCollectionItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  description: string;
  prompts: {
    question: string;
    context: string;
  }[];
  howToUseInKept: string;
  faq: {
    q: string;
    a: string;
  }[];
}

export interface GuideItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  sections: {
    heading: string;
    body: string;
  }[];
  keyTakeaways: string[];
  faq: {
    q: string;
    a: string;
  }[];
}

export interface AlternativeItem {
  slug: string;
  targetApp: string;
  targetType: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  whyPeopleSwitch: string;
  keyDifferences: {
    title: string;
    keptApproach: string;
    targetApproach: string;
  }[];
  comparisonSummary: string;
  faq: {
    q: string;
    a: string;
  }[];
}
