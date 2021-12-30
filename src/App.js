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

const CardDisplayer = () => {
  const cards = [
    {id: 1, title: 1}, {id: 2, title: 2}, {id: 3, title: 3}, 
    {id: 4, title: 4}, {id: 5, title: 5}, {id: 6, title: 6}, 
    {id: 7, title: 7}, {id: 8, title: 8}, {id: 9, title: 9}, 
    {id: 10, title: 10}, {id: 11, title: 11}, {id: 12, title: 12}
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
        {shuffleArray(cards).map(card=><Card key={card.title} cardToDisplay={card}/>)}
      </div>
    </div>
  )
}

const Card = ({cardToDisplay}) => {
  return <div className="col">{cardToDisplay.title}</div>

}

const ScoreBoard = () => {
  return(
    <div>
      <div>Current score: 0</div>
      <div>Best score: 0</div>
    </div>
  )
}

const App = () => {
  return (
    <div className="container mainContainer">
      <div className="row">
        <div className="col">
          <Title />
        </div>
        <div className="col">
          <ScoreBoard />
        </div>
      </div>
      <div className="row">
        <CardDisplayer />
      </div>
      <div>Copyright</div>
    </div>
  );
}

export default App;
