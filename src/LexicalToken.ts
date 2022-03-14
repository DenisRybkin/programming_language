import LexicalTokenType from "./LexicalTokenType";

export default class LexicalToken {
    type : LexicalTokenType;
    text : string;
    position : number;

    constructor(type: LexicalTokenType, text: string, position: number) {
        this.type = type;
        this.text = text;
        this.position = position;
    }
}