// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).

function prestupnaGodina(g) {
    let godina = "";
    if ((g % 4 == 0 && g % 100 > 0) || g % 400 == 0) {
        return (godina = "prestupna godina");
    }
    return (godina = "nije prestupna godina");
}

console.log(prestupnaGodina(2022));

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

let samoglasnici = ["a", "e", "i", "o", "u"];

// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

// 5. Kreirati funkciju koja prihvata niz stringova kao ulazni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] => rezultat [“pp”].

// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.
// Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] ,
// Primer 2: “Science" => [7, "S", "e", "e", "@ index 5"]

// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.

// 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]