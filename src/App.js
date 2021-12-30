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

const delay = ms => new Promise(res => setTimeout(res, ms));

const initialCards = [
  {id: 1, title: "arabidopsis", name:"Arabidopsis thaliana", clicked: "no", img: arabidopsis}, {id: 2, title: "fly", name:"Drosophila melanogaster",clicked: "no", img: drosophila}, 
  {id: 3, title: "bacteria", name:"Escherichia coli",clicked: "no", img: ecoli}, {id: 4, title: "worm", name:"Caenorhabditis elegans",clicked: "no", img: elegans}, 
  {id: 5, title: "human cells", name:"Homo sapiens",clicked: "no", img: humancell}, {id: 6, title: "chimpanzee", name:"Pan troglodytes",clicked: "no", img: labchimp}, 
  {id: 7, title: "frog", name:"Xenopus laevis",clicked: "no", img: laevis}, {id: 8, title: "mouse", name:"Mus musculus",clicked: "no", img: mice}, 
  {id: 9, title: "rat", name:"Rattus norvegicus domestica",clicked: "no", img: rat}, {id: 10, title: "yeast", name:"Saccharomyces cerevisiae",clicked: "no", img: saccharo}, 
  {id: 11, title: "small frog", name:"Xenopus tropicalis",clicked: "no", img: tropicalis}, {id: 12, title: "Zebrafish", name:"Danio rerio",clicked: "no", img: zebrafish}
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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {shuffleArray(cards).map(card=><Card key={card.title} cardToDisplay={card} cards={cards} setCards={setCards}
        currentScore={currentScore} setScore={setScore} maxScore={maxScore} setMaxScore={setMaxScore}/>)}
      </div>
    </div>
  )
}

const Card = ({cardToDisplay, cards, setCards, currentScore, setScore, maxScore, setMaxScore}) => {
  const cardFunction = async (card) =>{
    await delay(300)

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
    <div onClick={()=>cardFunction(cardToDisplay,setScore)} className="col item align-self-center">
      <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top images" src={cardToDisplay.img} alt={cardToDisplay.title}></img>
        <div className="card-body">
          <h5 className="card-title">{cardToDisplay.title}</h5>
          <p className="card-text">{cardToDisplay.name}</p>
          
        </div>
      </div>  
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
    <div className="container-fluid mainContainer hero-image">
      <div className="row panel">
        <div className="col">
          <Title />
        </div>
        <div className="col score">
          <ScoreBoard currentScore={currentScore} maxScore={maxScore}/>
        </div>
      </div>
      <div className="row">
        <CardDisplayer currentScore={currentScore} setScore={setCurrentScore}
        maxScore={maxScore} setMaxScore={setMaxScore}/>
      </div>
    </div>
  );
}

export default App;
