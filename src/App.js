import { useState } from "react"
import arabidopsis from "./assets/img/arabidopsis.jpg"
import drosophila from "./assets/img/drosophila.jpg"
import ecoli from "./assets/img/ecoli.jpg"
import elegans from "./assets/img/elegans.jpg"
import humancell from "./assets/img/humancell.jpg"
import labchimp from "./assets/img/labchimp.jpg"
import laevis from "./assets/img/laevis.jpg"
import mice from "./assets/img/mice.jpg"
import rat from "./assets/img/rat.jpg"
import saccharo from "./assets/img/saccharomycerevisiae.jpg"
import tropicalis from "./assets/img/xenopus.png"
import zebrafish from "./assets/img/zebrafish.png"


const initialCards = [
  {id: 1, title: 1, clicked: "no", img: arabidopsis}, {id: 2, title: 2, clicked: "no", img: drosophila}, 
  {id: 3, title: 3, clicked: "no", img: ecoli}, {id: 4, title: 4, clicked: "no", img: elegans}, 
  {id: 5, title: 5, clicked: "no", img: humancell}, {id: 6, title: 6, clicked: "no", img: labchimp}, 
  {id: 7, title: 7, clicked: "no", img: laevis}, {id: 8, title: 8, clicked: "no", img: mice}, 
  {id: 9, title: 9, clicked: "no", img: rat}, {id: 10, title: 10, clicked: "no", img: saccharo}, 
  {id: 11, title: 11, clicked: "no", img: tropicalis}, {id: 12, title: 12, clicked: "no", img: zebrafish}
]

const Title = () => {
  return (
    <div className="appTitle">
      <h2>Memory Game</h2>
      <p>You get points by clicking on a image that you didn't click yet.
        Don't repeat images!!
      </p>
    </div>
  )
}

const CardDisplayer = ({currentScore, setScore, maxScore, setMaxScore}) => {
  const [cards, setCards] = useState([...initialCards])
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

  return (
    <div className="container">
      <div className="row row-cols-3">
        {shuffleArray(cards).map(card=><Card key={card.title} cardToDisplay={card} cards={cards} setCards={setCards}
        currentScore={currentScore} setScore={setScore} maxScore={maxScore} setMaxScore={setMaxScore}/>)}
      </div>
    </div>
  )
}

const Card = ({cardToDisplay, cards, setCards, currentScore, setScore, maxScore, setMaxScore}) => {
  const cardFunction = (card) =>{
    console.log("is card clicked?", card.clicked)
    if(card.clicked==="no"){
      setCards(cards.map(card=>card.id===cardToDisplay.id? {...card, clicked: "yes"}: card))
      setScore(currentScore+1)
    }
    else{
      setCards([...initialCards])
      if(currentScore>maxScore){setMaxScore(currentScore)}
      setScore(0)
    }
  
  }
  return(
  <div onClick={()=>cardFunction(cardToDisplay,setScore)} className="col">
    {cardToDisplay.title}
    <img className="img-fluid" src={cardToDisplay.img} alt={cardToDisplay.title}></img>
  </div>
  )

}

const ScoreBoard = ({currentScore, maxScore}) => {
  return(
    <div>
      <div>Current score: {currentScore}</div>
      <div>Best score: {maxScore} </div>
    </div>
  )
}

const App = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)

  return (
    <div className="container mainContainer">
      <div className="row">
        <div className="col">
          <Title />
        </div>
        <div className="col">
          <ScoreBoard currentScore={currentScore} maxScore={maxScore}/>
        </div>
      </div>
      <div className="row">
        <CardDisplayer currentScore={currentScore} setScore={setCurrentScore}
        maxScore={maxScore} setMaxScore={setMaxScore}/>
      </div>
      <div>Copyright</div>
    </div>
  );
}

export default App;
