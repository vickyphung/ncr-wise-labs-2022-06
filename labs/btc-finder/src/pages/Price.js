// export default function Price (props) {
//     return <h1>This is the Price Page</h1>;
//   };

// store the apikey and currency symbol in different variables
// use the useEffect hook to make an api call
// interpolate the apikey and symbol in the fetch URL
// save the resulting data in state and render it
// loaded and loading function for rendering the data if exists

import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Our api key from coinapi.io
  const apiKey = process.env.REACT_APP_API_KEY;
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=D52E3049-6389-4DC1-BF84-A531B40BF3F0`;

  //state to hold the coin data
  const [coin, setCoin] = useState("null");

  //function to fetch coin data
//   const getCoin = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setCoin(data);
//   };

  const getCoin = async () => {
    try{
      //gradb data
      const response = await fetch(url);
      //set data as json
      const data = await response.json();
      //sets coin as data
      setCoin(data);
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

//   // loaded function for when data is fetched
//   const loaded = () => {
//     return (
//       <div>
//         <h1>
//           {coin.asset_id_base}/{coin.asset_id_quote}
//         </h1>
//         <h2>{coin.rate}</h2>
//       </div>
//     );
//   };

//   // Function for when data doesn't exist
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };

//   // if coin has data, run the loaded function, otherwise, run loading
//   return coin && coin.rate ? loaded() : loading();

  return (
    <div>
      <h1>
        {coin?.asset_id_base}/{coin?.asset_id_quote}
      </h1>
      <h2>{coin?.rate}</h2>
    </div>
  )
};