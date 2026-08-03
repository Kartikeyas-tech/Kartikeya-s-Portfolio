export interface ExpertiseItem {
  id: string;
  mark: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  num: string;
  title: string;
  description: string;
  details?: string;
}

export interface EngagementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  org?: string;
  msg: string;
  timestamp: string;
}
