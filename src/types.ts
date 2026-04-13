export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: Record<string, number>;
  }[];
}

export interface Answer {
  questionId: number;
  selectedText: string;
  score: Record<string, number>;
}

export interface PersonalityResult {
  personality_code: string;
  personality_type: string;
  dimension_scores: Record<string, number>;
  zha_xin_summary: string;
  match_recommendation: string[];
  avoid_warning: string[];
}
