import LexicalToken from "../lexical/LexicalToken";
import LexicalTokenType from "../lexical/LexicalTokenType";
// import {match} from "assert";

export default class Parser {
    tokens : LexicalToken[];
    position : number = 0;
    scope : any = {};
    
    constructor(tokens: LexicalToken[]) {
        this.tokens = tokens;
    }

    match(...expected : LexicalTokenType[]) : LexicalToken | null {
        if(this.position < this.tokens.length){
            const currentToken = this.tokens[this.position];
            if(expected.find(type => type.lexicalKey === currentToken.type.lexicalKey)) {
                this.position += 1;
                return currentToken;
            }
        }
        return null;
    }

    require(...expected : LexicalTokenType[]) : LexicalToken {
        const token = this.match(...expected);
        if(!token) throw Error(`на позиции ${this.position} ожидается ${expected[0].lexicalKey}`);
        return token;
    }
}