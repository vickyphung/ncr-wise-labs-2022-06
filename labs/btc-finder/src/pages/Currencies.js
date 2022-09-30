// export default function Currencies (props) {
//     return <h1>This is the Currencies Page</h1>;
//   };


// Creating an array of the currencies our app can find prices for
// Looping over that array to generate a link for each one to the price route
// The currency symbol should be placed in the :symbol part of the URL

import { Link } from "react-router-dom";

export default function Currencies (props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};