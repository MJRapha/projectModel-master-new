import { SonyGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { psGamesArr } from "../../api/psGames";


export interface GameArticles {
    PSarticles: SonyGameArticle[];
}

const initialState: GameArticles = {
    PSarticles: psGamesArr,
};

/* interface GameArticles {
    loading: boolean,
    error: string,
    articles: [],
}

const initialState: GameArticles = {
    loading: false,
    error: "",
    articles: [],
}; */

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<SonyGameArticle>) => {
            state.PSarticles.push(action.payload);
        },
        toggleBuying: (state, action: PayloadAction<string>) => {
            const index = state.PSarticles.findIndex((a) => a.id === action.payload);
            if (index !== -1) {
                state.PSarticles[index].isGettingBuied = !state.PSarticles[index].isGettingBuied;
            }
        },
        BuiedSonyCard: (state, action: PayloadAction<string>) => {
            //action.payload = id of the card to remove
            const index = state.PSarticles.findIndex((c) => c.id === action.payload);

            //delete the card at index:
            state.PSarticles.splice(index, 1);
        },
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer
export const { toggleBuying, BuiedSonyCard } = gameSlice.actions

