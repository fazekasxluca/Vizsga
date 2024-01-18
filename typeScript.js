function osszesOszto(szam1) {
    var osztok = [];
    if (szam1 != 0) {
        for (var i = 0; i <= szam1; i++) {
            if (szam1 % i === 0) {
                osztok.push(i);
            }
        }
    }
    return osztok;
}
function parosDarab(tomb1) {
    var db = 0;
    for (var i = 0; i < tomb1.length; i++) {
        if (tomb1[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}
function fuggvenyhivasPalindrom(fgv) {
    var eredmeny = fgv();
    var palindrom = true;
    var tomb = [];
    tomb.push(eredmeny);
    for (var i = 0, j = tomb.length - 1; i < tomb.length / 2; i++, j--) {
        if (tomb[i] !== tomb[j]) {
            palindrom = false;
            break;
        }
        else {
            palindrom = true;
        }
    }
    return palindrom;
}
;
function palindrom() {
    return "indul a görög aludni";
}
var eredmeny = fuggvenyhivasPalindrom(palindrom);
console.log(eredmeny);
