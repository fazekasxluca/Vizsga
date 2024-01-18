function osszesOszto(szam1: number): number[] {
  var osztok: number[] = [];
  if (szam1 != 0) {
    for (var i: number = 0; i <= szam1; i++) {
      if (szam1 % i === 0) {
        osztok.push(i);
      }
    }
  }
  return osztok;
}

function parosDarab(tomb1: number[]): number {
  var db: number = 0;

  for (var i: number = 0; i < tomb1.length; i++) {

    if (tomb1[i] % 2 === 0) {

      db++;
    }
  }

  return db;
}

const elemek:string[] = ["Elem1","Elem2","Elem3"];

function fuggvenyhivasPalindrom (fgv:()=> string):boolean{

  var eredmeny:string = fgv();
  var palindrom:boolean = true;
  var tomb:string[] = [];
  tomb.push(eredmeny);

for(var i:number = 0, j:number = tomb.length -1; i < tomb.length / 2 ; i++,j--)
{
   if(tomb[i] !== tomb[j])
   {
    palindrom = false;
    break;

   }
   else
   {
    palindrom = true;
   }
   
  }
  return palindrom;
};


function palindrom():string
{ 
   
  return "indul a görög aludni";
}

var eredmeny = fuggvenyhivasPalindrom(palindrom);
console.log(eredmeny);