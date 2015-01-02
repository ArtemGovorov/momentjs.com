var locales = {
    'af'     : 'Afrikaans',
    'ar'     : 'Arabic',
    'ar-ma'  : 'Arabic (Morocco)',
    'ar-sa'  : 'Arabic (Saudi Arabia)',
    'ar-tn'  : 'Arabic (Tunisia)',
    'az'     : 'Azerbaijani',
    'be'     : 'Belarusian',
    'bg'     : 'Bulgarian',
    'bn'     : 'Bengali',
    'bo'     : 'Tibetan',
    'br'     : 'Breton',
    'bs'     : 'Bosnian',
    'ca'     : 'Catalan',
    'cs'     : 'Czech',
    'cv'     : 'Chuvash',
    'cy'     : 'Welsh',
    'da'     : 'Danish',
    'de'     : 'German',
    'de-at'  : 'German (Austria)',
    'el'     : 'Greek',
    'en'     : 'English',
    'en-au'  : 'English (Australia)',
    'en-ca'  : 'English (Canada)',
    'en-gb'  : 'English (England)',
    'eo'     : 'Esperanto',
    'es'     : 'Spanish',
    'et'     : 'Estonian',
    'eu'     : 'Basque',
    'fa'     : 'Persian',
    'fi'     : 'Finnish',
    'fo'     : 'Farose',
    'fr'     : 'French',
    'fr-ca'  : 'French (Canada)',
    'fy'     : 'Frisian',
    'gl'     : 'Galician',
    'he'     : 'Hebrew',
    'hi'     : 'Hindi',
    'hr'     : 'Croatian',
    'hu'     : 'Hungarian',
    'hy-am'  : 'Armenian',
    'id'     : 'Bahasa Indonesia',
    'is'     : 'Icelandic',
    'it'     : 'Italian',
    'ja'     : 'Japanese',
    'ka'     : 'Georgian',
    'km'     : 'Khmer (Cambodia)',
    'ko'     : 'Korean',
    'lb'     : 'Luxembourgish',
    'lt'     : 'Lithuanian',
    'lv'     : 'Latvian',
    'mk'     : 'Macedonian',
    'ml'     : 'Malayalam',
    'mr'     : 'Marathi',
    'ms-my'  : 'Bahasa Malayu',
    'my'     : 'Burmese',
    'nb'     : 'Norwegian',
    'ne'     : 'Nepalese',
    'nl'     : 'Dutch',
    'nn'     : 'Norwegian Nynorsk',
    'pl'     : 'Polish',
    'pt'     : 'Portuguese',
    'pt-br'  : 'Portuguese (Brazil)',
    'ro'     : 'Romanian',
    'ru'     : 'Russian',
    'sk'     : 'Slovak',
    'sl'     : 'Slovenian',
    'sq'     : 'Albanian',
    'sr'     : 'Serbian',
    'sr-cyrl': 'Serbian Cyrillic',
    'sv'     : 'Swedish',
    'ta'     : 'Tamil',
    'th'     : 'Thai',
    'tl-ph'  : 'Tagalog (Filipino)',
    'tr'     : 'Turkish',
    'tzm'    : 'Tamaziɣt',
    'tzm-latn': 'Tamaziɣt Latin',
    'uk'     : 'Ukrainian',
    'uz'     : 'Uzbek',
    'vi'     : 'Vietnamese',
    'zh-cn'  : 'Chinese',
    'zh-tw'  : 'Chinese (Traditional)'
};

module.exports = Object.keys(locales).map(function(key){
    return {
        abbr : key,
        name : locales[key]
    };
}).sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
});
