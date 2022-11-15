import { createSlice } from "@reduxjs/toolkit";
import { quoteAPI } from "../../provider/api";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    value: "",
    fav: [],
    personalQuote: [],
  },
  reducers: {
    getQuote: (state, action) => {
      state.value = action.payload;
    },
    favQuote: (state, action) => {
      if (state.fav.length < 1) {
        state.fav.push(action.payload);
      } else {
        state.fav.forEach((item) => {
          if (item !== action.payload) {
            state.fav.push(action.payload);
          }
        });
      }
    },
    addPersonalQuote: (state, action) => {
      if (state.personalQuote.length < 1) {
        state.personalQuote.push(action.payload);
      } else {
        state.personalQuote.forEach((item) => {
          if (item !== action.payload) {
            state.personalQuote.push(action.payload);
          }
        });
      }
    },
  },
});

export const getQuoteAsync = () => async (dispatch) => {
  try {
    // const response = await quoteAPI.get(`${API_URL}/${data}`);
    const response = await quoteAPI.get();
    // console.log(response.data.quote);
    dispatch(getQuote(response.data.quote));
  } catch (err) {
    throw new Error(err);
  }
};

// Action creators are generated for each case reducer function
export const { getQuote, favQuote, addPersonalQuote } = quoteSlice.actions;
export const showQuote = (state) => state.quote.value;
export const showFav = (state) => state.quote.fav;
export const showPersonalQuote = (state) => state.quote.personalQuote;
export default quoteSlice.reducer;
