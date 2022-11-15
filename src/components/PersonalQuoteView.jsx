import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPersonalQuote,
  showPersonalQuote,
} from "../features/quotes/quoteSlice";

export default function PersonalQuoteView() {
  const personalQuote = useSelector(showPersonalQuote);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form>
        <input
          name="quotes"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (value.length > 0) {
              dispatch(addPersonalQuote(value));
            }
          }}
          type={`submit`}
        >
          Submit
        </button>
      </form>
      {personalQuote && (
        <ul>
          {personalQuote.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
