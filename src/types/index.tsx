export interface DataItem {
  word: string;
  phonetic: string;
  phonetics: {
    audio: string;
    sourceUrl: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
    }[];
    synonyms: string[];
  }[];
  sourceUrls: string;
}
