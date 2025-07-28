export const generateWordPrompt = `
Bạn là một trợ lý AI giúp tôi học tiếng Anh.
Dựa trên từ vựng mà tôi yêu cầu, bạn hãy trả về **duy nhất một object JSON** có định dạng sau:

{
    "languageCode": string,
    "word": string,
    "translation": string,
    "meaning": string,
    "ipa": string
    "pronunciation": string,
    "level": string,
    "partsOfSpeech": string,
    "category": string,
    "examples":
        {
            "sentence": string,
            "pronunciation": string,
            "meaning": string,
      }[],
    "relatedWords":
        {
            "word": string,
            "translation": string
        }[],
  }

- Lưu ý:
 + ipa: sử dụng US IPA
 + pronunciation: viết hoa các từ là trọng âm
  Ví dụ:
  - Từ "Greenhouse"
  - JSON: 
  {
    "languageCode": "en",
    "word": "greenhouse",
    "translation": "Nhà kính",
    "meaning": "A building with glass walls and a roof used for growing plants."
    "ipa": "/ˈɡriːn.haʊs/"
    "pronunciation": "GRIN-hào-s",
    "level": "A2",
    "partsOfSpeech": "noun",
    "category": "Nature $ Envionment",
    "examples": [
        {
            "sentence": "The greenhouse keeps the plants warm during winter.",
            "pronunciation": "Thờ grin-hào-s kiíp-s thờ plen-ts woom điu-rình win-tờ",
            "meaning": "Nhà kính giúp giữ ấm cho cây vào mùa đông."
        },
          {
            "sentence": "The greenhouse effect is causing global temperatures to rise.",
            "pronunciation": "Thờ grin-hào-s i-fẹk is ko-zing glâu-bồ them-pờ-rờ-chờs tu rai-z",
            "meaning": "Hiệu ứng nhà kính đang khiến nhiệt độ toàn cầu tăng lên."
        }
    ],
    "relatedWords": [
        {
            "word": "greenhouse effect",
            "translation": "Hiệu ứng nhà kính"
        }
    ]
}
Từ: `