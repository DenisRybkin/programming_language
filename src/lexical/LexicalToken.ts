import LexicalTokenType from "./LexicalTokenType";

export default class LexicalToken {
    type : LexicalTokenType;
    text : string;
    position : number;
    nLine : number;

    constructor(type: LexicalTokenType, text: string, position: number, nLine : number) {
        this.type = type;
        this.text = text;
        this.position = position;
        this.nLine = nLine;
    }
}