export default class LexicalTokenType {
    lexicalName : string;
    regex : string;

    constructor(lexicalName: string, regex: string) {
        this.lexicalName = lexicalName;
        this.regex = regex;
    }
}

export const lexicalTokenTypesList = {
    'number' : new LexicalTokenType('number', '[0-9]*'),
    'identifier' : new LexicalTokenType('identifier' , '[a-z]*'),
    'key_word::var_declaration' : new LexicalTokenType('key_word::var_declaration', 'Var'),
    'key_word::start' : new LexicalTokenType('key_word::start', 'Begin'),
    'key_word::end' : new LexicalTokenType('key_word::start', 'End'),
    'key_word::type_definition-l' : new LexicalTokenType('key_word::type_definition-l', 'Logical'),
    'key_word::type_definition-n' : new LexicalTokenType('key_word::type_definition-n', 'Number'),
    'space' : new LexicalTokenType('space', '[ \\n\\t\\r]'),
    "assign" : new LexicalTokenType('assign', ':='),
    'semicolon' : new LexicalTokenType('semicolon',';'),
    "comma" : new LexicalTokenType('comma',','),
    "dot" : new LexicalTokenType('dot','\\.'),
    "colon" : new LexicalTokenType('colon',':'),
    "exclamation mark" : new LexicalTokenType('exclamation mark','!'),
    'and' : new LexicalTokenType('and','\\&'),
    'or' : new LexicalTokenType('and','\\|'),
    'plus' : new LexicalTokenType('plus','\\+'),
    'minus' : new LexicalTokenType('minus','\\-'),
    'l-par' : new LexicalTokenType('plus','\\('),
    'r-par' : new LexicalTokenType('minus','\\)'),

}