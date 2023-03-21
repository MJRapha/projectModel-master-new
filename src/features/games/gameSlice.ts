import { NewGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newGamesArr } from "../../api/newGamesArr";

export interface GameArticles {
    articles: NewGameArticle[];
}

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
        },
        toggleBuying: (state, action: PayloadAction<number>) => {
            const index = state.articles.findIndex((a) => a.id === action.payload);
            console.log(index);

            if (index !== -1) {

            }
        },
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer
export const { toggleBuying } = gameSlice.actions

