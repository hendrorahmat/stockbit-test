
function findFirstStringInBracket(str){
    let indexFirstBracketFound = str.indexOf("(");
    let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
    wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

    if (
        str.length > 0 && 
        indexFirstBracketFound >= 0 && 
        wordsAfterFirstBracket && 
        indexClosingBracketFound >= 0
    ){
        return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
    } else {
        return '';
    }
}