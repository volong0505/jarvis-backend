export class FindAllByLanguageRequest {
    languageCode!: string;
}

class WordsItem_Examples {
    sentence!: string;
    pronunciation?: string | null;
    meaning!: string;
}

class WordsItem_RelatedWords {
    word!: string;
    translation!: string;
}

export class WordsItem {
    id!: string;
    word!: string;
    meaning!: string;
    ipa!: string;
    level?: string;
    partsOfSpeech?: string;
    translation!: string;
    pronunciation!: string | null;
    category?: string;
    examples!: WordsItem_Examples[] | [];
    relatedWords!: WordsItem_RelatedWords[]
}

export class FindAllByLanguageResponse {
    data!: WordsItem[]
}