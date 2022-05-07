import LexicalToken from "./LexicalToken";
import LexicalTokenType, {lexicalTokenTypesList} from "./LexicalTokenType";

export default class Lexer {
    code: string;
    position: number = 0;
    nLine: number = 1;
    tokenList: LexicalToken[] = [];


    constructor(code: string) {
        this.code = code;
    }

    lexicalAnalysis(): LexicalToken[] {
        while (this.handlerLexicalToken()) {
            // здесь наверное худо бедно буду взаимодействовать с  будующим парсером :)
        }
        this.tokenList = this.tokenList.filter(token => token.type.lexicalKey !== lexicalTokenTypesList.space.lexicalKey);

        return this.tokenList;
    }

    handlerLexicalToken(): boolean {
        if (this.position >= this.code.length) return false;
        const lexicalTokenTypesValues: LexicalTokenType[] = Object.values(lexicalTokenTypesList);
        for(let i = 0; i < lexicalTokenTypesValues.length; i++) {
            const currentTokenType = lexicalTokenTypesValues[i];
            const regex = new RegExp('^' + currentTokenType.regex);
            const result = this.code.substr(this.position).match(regex);
            if(result && result[0]){
                const newLexicalToken = new LexicalToken(currentTokenType,result[0], this.position,this.nLine);
                if(result[0] === '\n') this.nLine += 1;
                this.position += result[0].length;
                this.tokenList.push(newLexicalToken);
                return true;
            }
        }
        const unknownLexeme = new LexicalToken(lexicalTokenTypesValues.find(item => item.lexicalKey === 'unknown')!,this.code.substr(this.position),this.position,this.nLine)
        this.tokenList.push(unknownLexeme);
        return false
        // throw new Error(`На строке ${this.nLine}, позиции ${this.position} обнаружена неопознаная лексема, перед "${this.code.substr(this.position)}"`)
    }
}