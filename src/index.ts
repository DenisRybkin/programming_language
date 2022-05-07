import Lexer from "./lexical/Lexer";
import fileManager from "fs"

fileManager.readFile('src/input', 'utf8', (err, code) => {
        if (err) throw Error(err.code);
        const lexer = new Lexer(code!);
        lexer.lexicalAnalysis();
        fileManager.writeFile('src/outputLexemes', JSON.stringify(lexer.tokenList), function (err) {
            if (err) return console.log(err);
            console.log('Success');
        });
    }
);



