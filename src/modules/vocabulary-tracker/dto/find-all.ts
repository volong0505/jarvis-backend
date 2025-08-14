export class FindAllByLanguageRequest {
    keyword?: string;
}

class WordsItem_Examples {
    sentence!: string;
    pronunciation?: string | null;
    meaning!: string;
}
export class WordsItem {
    _id!: string;
    word!: string;
    meaning!: string;
    ipa!: string;
    level?: string;
    partsOfSpeech?: string;
    translation!: string;
    pronunciation!: string | null;
    tags?: string[];
    examples!: WordsItem_Examples[] | [];
}

export class FindAllByLanguageResponse {
    data!: WordsItem[]
}
