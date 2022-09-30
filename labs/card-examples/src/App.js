import "./styles.css";
//import card1
import Card from "./components/Card";
import Card2 from "./components/Card2";
import cardsArr from "./data";
console.log(cardsArr)

const cards = cardsArr.map((ele, idx) => {
  return (
    // <Card
    //   key={idx}
    //   title={ele.title}
    //   url={ele.url}
    //   img={ele.img}
    //   text={ele.text}
    // />
    <Card
      key={idx}
      {...ele}
    />
    
  );
});

// console.log(cards);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cards}</section>
    </div>
  );
}


















