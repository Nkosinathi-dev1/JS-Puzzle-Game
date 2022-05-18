const cardArray=[
    {
        name:'Alphabet-A',
        img:'images/image-A.PNG'
    },
    {
        name:'Alphabet-B',
        img:'images/image-B.PNG'
    },
    {
        name:'Alphabet-C',
        img:'images/image-C.PNG'
    },
    {
        name:'Alphabet-D',
        img:'images/image-D.PNG'
    },
    {
        name:'Alphabet-E',
        img:'images/image-E.PNG'
    },
    {
        name:'Alphabet-F',
        img:'images/image-F.PNG'
    },
    {
        name:'Alphabet-A',
        img:'images/image-A.PNG'
    },
    {
        name:'Alphabet-B',
        img:'images/image-B.PNG'
    },
    {
        name:'Alphabet-C',
        img:'images/image-C.PNG'
    },
    {
        name:'Alphabet-D',
        img:'images/image-D.PNG'
    },
    {
        name:'Alphabet-E',
        img:'images/image-E.PNG'
    },
    {
        name:'Alphabet-F',
        img:'images/image-F.PNG'
    }
]

 
cardArray.sort(()=>0.5 - Math.random())

const gridDisplay= document.querySelector('#grid')

const cardsChosen=[]
const cardChosenIds=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card= document.createElement('img')
        card.setAttribute('src','images/image-unkown.PNG')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
       gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('img')

    if(cardsChosen[0]==cardsChosen[1]){
        alert('You found the match')
        cards[cardChosenIds[0]].setAttribute('src','images/image-blank.PNG')
    }
}

//flip card
function flipCard(){

    const cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId]).name
    cardChosenIds.push(cardId)

    console.log(cardsChosen)
    console.log(cardChosenIds)

    this.setAttribute('src',cardArray[cardId].img)

    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
}
