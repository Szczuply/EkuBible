import BibliaEkumenicznaKsiegi from "./Jsons/BibliaEkumeniczna.json" assert { type: "json" };
const BWBible = BibliaEkumenicznaKsiegi;
const SelectBook = document.querySelector("#SelectBook");
const SelectChapter = document.querySelector("#SelectChapters");
const prevChapterButton = document.getElementById("prevChapterButton");
const nextChapterButton = document.getElementById("nextChapterButton");
let currentChapter;
let currentBook;

BWBible.BibliaEkumenicznaKsiegi.forEach((x, index) => {
  SelectBook.innerHTML += `<option value=${index}> ${x.TYTUL}</option>`;
});

SelectBook.addEventListener("change", () => {
  refreshChapters(SelectBook.value);
});
SelectChapter.addEventListener("change", () => {
  getVerses(SelectBook.value, SelectChapter.value);
});
nextChapterButton.addEventListener("click", () => {
  getVerses(SelectBook.value, currentChapter + 1);
});
prevChapterButton.addEventListener("click", () => {
  getVerses(SelectBook.value, currentChapter - 1);
});

function refreshChapters(BookNumber) {
  currentBook = BookNumber;
  SelectChapter.innerHTML = "";
  BWBible.BibliaEkumenicznaKsiegi[BookNumber].ROZDZIALY.forEach((x, index) => {
    let newOption = document.createElement("option");
    newOption.textContent = `${x.NR}`;
    newOption.setAttribute("value", `${index}`);
    SelectChapter.appendChild(newOption);
  });
  getVerses(SelectBook.value, SelectChapter.value);
}

function getVerses(BookNumber, ChapterNumber) {
  if (
    ChapterNumber < 0 ||
    ChapterNumber >=
      BWBible.BibliaEkumenicznaKsiegi[BookNumber].ROZDZIALY.length
  ) {
    alert("Przepraszamy, ale nie znaleźliśmy podanego rozdziału");
  } else {
    document.querySelector(".content").innerHTML = "";
    currentChapter = new Number(ChapterNumber);
    BWBible.BibliaEkumenicznaKsiegi[BookNumber].ROZDZIALY[
      ChapterNumber
    ].WERSETY.forEach((x, index) => {
      let newParagraph = document.createElement("p");
      newParagraph.classList.add("verseParagraph");
      newParagraph.innerHTML = `<span>${index + 1}</span> ${x.TRESC}`;
      document.querySelector(".content").appendChild(newParagraph);
      console.log(BWBible.BibliaEkumenicznaKsiegi[BookNumber].ROZDZIALY.length);
    });
    console.log(ChapterNumber);
  }
}

refreshChapters(SelectBook.value);
getVerses(SelectBook.value, SelectChapter.value);
