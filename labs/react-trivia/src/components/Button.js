import {useState} from "react";
import Trivia from "./Trivia";
export default function Button(props) {

  const [trivia, setTrivia] = useState(null);


  const getQuestion = async (searchTerm) => {
      try {
        const response = await fetch(
          `http://jservice.io/api/random`
        );
        const data = await response.json();
        setTrivia(data);
        console.log(data)
      } catch(e){
        console.error(e)
      }
    };
    
  return (
    <div>
        <div>
          <button onClick={getQuestion}>Get Question!</button>
        </div>

        {/* <Trivia trivia={trivia}/> */}
        
          {trivia?.map((question, index) => (
              <div className="game">

                  <div className="question">
                    <h2>Question</h2>
                    {question.question}
                  </div>

                  <div className="category">
                    <h2>Category</h2>
                    {question.category.title} 
                  </div>

                  <div className="value">
                    <h2>Value</h2>
                    {question.value}
                  </div>
      
                  <div className="answer">
                    <h2>Answer</h2>
                    {question.answer}
                  </div>

              </div>
          ))}
    </div>
  );
}
  