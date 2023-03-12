import { NintendoGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nintendoGamesArr } from "../../api/nintendoGames";

export interface GameArticles {
    Narticles: NintendoGameArticle[];
}

const initialState: GameArticles = {
    Narticles: nintendoGamesArr,
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
        addCard: (state, action: PayloadAction<NintendoGameArticle>) => {
            state.Narticles.push(action.payload);
        },
        toggleBuying: (state, action: PayloadAction<string>) => {
            const index = state.Narticles.findIndex((a) => a.id === action.payload);
            if (index !== -1) {
                state.Narticles[index].isGettingBuied = !state.Narticles[index].isGettingBuied;
            }
        },
        BuiedNintendoCard: (state, action: PayloadAction<string>) => {
            //action.payload = id of the card to remove
            const index = state.Narticles.findIndex((c) => c.id === action.payload);

            //delete the card at index:
            state.Narticles.splice(index, 1);
        },
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer
export const { toggleBuying, BuiedNintendoCard } = gameSlice.actions

