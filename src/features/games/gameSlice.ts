import { NewGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newGamesArr } from "../../api/newGamesArr";

//interface
export interface GameArticles {
    articles: NewGameArticle[];
}

//initial state
const initialState: GameArticles = {
    articles: newGamesArr,
};

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<NewGameArticle>) => {
            state.articles.push(action.payload);
        }
    },
});

//export the reducer
export default gameSlice.reducer

