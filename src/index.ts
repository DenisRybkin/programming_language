import Lexer from "./Lexer";

const code = `Var a, bc, cd:Logical;
    Begin
    a := 101;
    b := 1;
    c := (a & !b) | 0;
    End.`

const lexer = new Lexer(code);

lexer.lexicalAnalysis();
console.log(lexer.tokenList);