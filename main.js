const arr=[
{studentName:'Bob', favSong:'Bohemian Rhapsody', favArtist:'Queen', favGame:'Tetris'},
{studentName: 'Roseanne', favSong: 'Fly Away', favArtist: 'BTOB', favGame: 'Golden Sun'},
{studentName: 'Jacob', favSong: 'Before I Forget', favArtist: 'Slipknot', favGame: 'Elder Scrolls V: Skyrim'},
{studentName: "Melissa", favSong: "Warm Me Up", favArtist: "Pierce the Veil", favGame: "Stardew Valley"},
{studentName: 'Lev', favSong: 'Unanswered', favArtist: 'Red Morrow', favGame: 'Skyrim'},
{studentName: "Raimond", favSong: "Thnks fr th Mmrs", favArtist: "Fall Out Boy", favGame:"Elden Ring"},
{studentName: "LaBronn", favSong: 'Kozmic Blues', favArtist: 'Janis Joplin', favGame: "Mortal Kombat"},
{studentName:"Basil", favSong: "Electric Avenue", favArtist:"Lightning Bolt", favGame:"chess"},
{studentName: 'Trinity', favSong:'Lofi Beats to Study/Relax To', favArtist:'K. Flay', favGame: 'Kingdom Hearts'},
]
const apiKey = `9b4V7GqPvj8MtNh9x165FjzGJQvImDzu`;

window.addEventListener('DOMContentLoaded',main);

function main(){
    const form = document.querySelector('form'); //reference form element
    form.addEventListener('submit', findStudent) //add listener to when form submitted




}
/*  psuedocoded event listener
function addEventListener(event, callbackFunc){
  if(event.isHappening){
      callbackFunc(event.info);
  }
}*/

function findStudent(event){
    event.preventDefault();
    console.log(event.target);
    let formData = new FormData(event.target); //Making the input accessible to js
    let studentObj = Object.fromEntries(formData); //converts form data to object
    let cardTitleEl = document.querySelector('.card-title');
    let cardTextEl = document.querySelector('.card-text');
    let cardImage = document.querySelector('.card-img-top');

    let student= arr.find(item=> item[studentObj.type]===studentObj.search);
    console.log(student);
    if(student){
        let {studentName, favSong, favGame, favArtist} = student;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${favGame}`;
        axios.get(url).then(({data})=>{
            let imageInfo = data.data;
            console.log(imageInfo[0]); 
            let imageUrl = imageInfo[0].images.original.url;
            console.log(imageUrl)
            cardImage.src = `${imageUrl}`;
            let title = `<strong>Info about ${studentName}</strong>`
        let template =`${studentName} is listening to ${favSong} while playing ${favGame} and is going to go to ${favArtist}'s concert later!`;
        cardTitleEl.innerHTML = title;
        cardTextEl.innerText= template;
        })
       
    }
    
}
/*let type = process.argv[2];
let search = process.argv[3];
console.log(type,search);
findStudent(type,search);*/

