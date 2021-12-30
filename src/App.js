import { useState } from "react"

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

const CardDisplayer = ({currentScore, setScore}) => {
  const cards = [
    {id: 1, title: 1, clicked: "no"}, {id: 2, title: 2, clicked: "no"}, 
    {id: 3, title: 3, clicked: "no"}, {id: 4, title: 4, clicked: "no"}, 
    {id: 5, title: 5, clicked: "no"}, {id: 6, title: 6, clicked: "no"}, 
    {id: 7, title: 7, clicked: "no"}, {id: 8, title: 8, clicked: "no"}, 
    {id: 9, title: 9, clicked: "no"}, {id: 10, title: 10, clicked: "no"}, 
    {id: 11, title: 11, clicked: "no"}, {id: 12, title: 12, clicked: "no"}
  ]
  
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
        {shuffleArray(cards).map(card=><Card key={card.title} cardToDisplay={card} currentScore={currentScore} setScore={setScore}/>)}
      </div>
    </div>
  )
}

const Card = ({cardToDisplay, currentScore, setScore}) => {
  const cardFunction = (card) =>{
    card.clicked="yes"
    console.log(card)
    setScore(currentScore+1)
  }
  return <div onClick={()=>cardFunction(cardToDisplay,setScore)} className="col">{cardToDisplay.title}</div>

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
        <CardDisplayer currentScore={currentScore} setScore={setCurrentScore}/>
      </div>
      <div>Copyright</div>
    </div>
  );
}

export default App;
