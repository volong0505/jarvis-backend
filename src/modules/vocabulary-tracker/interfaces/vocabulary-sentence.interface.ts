export interface VocabularySentence {
  sentence: string;
  pronunciation?: string | null;
  meaning?: string | null;
  id?: number; // Optional ID for tracking purposes
}