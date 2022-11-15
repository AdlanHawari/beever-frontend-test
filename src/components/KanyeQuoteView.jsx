import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  favQuote,
  getQuoteAsync,
  showFav,
  showQuote,
} from "../features/quotes/quoteSlice";

export default function KanyeQuoteView() {
  const quote = useSelector(showQuote);
  const fav = useSelector(showFav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuoteAsync());
  }, []);

  useEffect(() => {
    console.log(quote);
  }, [quote]);

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>

      <h3>{quote}</h3>

      <button onClick={() => dispatch(getQuoteAsync())}>Get Quote</button>
      <button onClick={() => dispatch(favQuote(quote))}>Add Favorite</button>
      {fav && (
        <ul>
          {fav.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
