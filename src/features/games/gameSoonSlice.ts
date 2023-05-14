import { SoonGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { comingSoonGamesArr } from "../../api/comingSoonGames";

//interface
export interface GameArticles {
    articles: SoonGameArticle[];
}

//initial state
const initialState: GameArticles = {
    articles: comingSoonGamesArr,
};

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<SoonGameArticle>) => {
            state.articles.push(action.payload);
        }
    },
});

//export the reducer
export default gameSlice.reducer

