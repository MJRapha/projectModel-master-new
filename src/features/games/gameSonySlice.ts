import { SonyGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { psGamesArr } from "../../api/psGames";

//interface
export interface GameArticles {
    PSarticles: SonyGameArticle[];
}

//initial state
const initialState: GameArticles = {
    PSarticles: psGamesArr,
};

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<SonyGameArticle>) => {
            state.PSarticles.push(action.payload);
        }
    },
});

//export the reducer
export default gameSlice.reducer

