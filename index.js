import BibliaEkumenicznaKsiegi from "./Jsons/BibliaEkumeniczna.json" assert { type: "json" };
const BWBible = BibliaEkumenicznaKsiegi;
const SelectBook = document.querySelector("#SelectBook");
const SelectChapter= document.querySelector("#SelectChapters");

// console.log(BWBible.BibliaEkumenicznaKsiegi[x].ROZDZIALY[y].WERSETY);

// BWBible.BibliaEkumenicznaKsiegi[x].ROZDZIALY[y].WERSETY.forEach((werset) => {
//   console.log(werset.TRESC);
// });

// BWBible.BibliaEkumenicznaKsiegi.forEach((x, index) => {
//   console.log(`${index}: ${x.TYTUL} `);
// });


  BWBible.BibliaEkumenicznaKsiegi.forEach((x, index) => {
    SelectBook.innerHTML += `<option value=${index}> ${x.TYTUL}</option>`
});


SelectBook.addEventListener("change", refreshChapters);

SelectChapter.addEventListener('change', getVerses)

function refreshChapters(){
  SelectChapter.innerHTML = ''
   BWBible.BibliaEkumenicznaKsiegi[SelectBook.value].ROZDZIALY.forEach((x, index) => {
    SelectChapter.innerHTML += `<option value=${index}> ${x.NR}</option>`
});
getVerses()
}

function getVerses(){
  document.querySelector('.content').innerHTML = ''
  BWBible.BibliaEkumenicznaKsiegi[SelectBook.value].ROZDZIALY[SelectChapter.value].WERSETY.forEach((x, index) =>{
      document.querySelector('.content').innerHTML +=  `<p class="Verse"><span class="VerseIndex">${index+1}</span> ${x.TRESC}</p>`;
  })
}

refreshChapters()
getVerses()






