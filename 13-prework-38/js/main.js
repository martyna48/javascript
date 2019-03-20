function licz(wart1, wart2) {
    let wynik = wart1 + wart2;
    let wynik2 = wart1 * wart2;
    let wynik3 = wart1 - wart2;
  
    if (wynik < 0) {
      console.log("Wynik jest ujemny");
    } else {
      console.log("Wynikiem dodawania jest " + wynik);
    };
  
    if (wynik2 < 0) {
      console.log("Wynik jest ujemny");
    } else {
      console.log("Wynikiem mnozenia jest " + wynik2);
    };
  
    if (wynik3 < 0) {
      console.log("Wynik jest ujemny");
    } else {
      console.log("Wynikiem odejmowania jest " + wynik3)
  
    };
  }