function esVocal(letra) {
    
    var letra = letra.toLowerCase();
  
    
    if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
    ) {
      return true;
    } else {
      return false;
    }
  }
  console.log(esVocal('a'));  
console.log(esVocal('E'));  
console.log(esVocal('b'));   
console.log(esVocal('Z'));   
