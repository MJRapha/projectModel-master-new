import { XboxGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { xboxGamesArr } from "../../api/xboxGames";

export interface GameArticles {
    Xarticles: XboxGameArticle[];
}

const initialState: GameArticles = {
    Xarticles: xboxGamesArr,
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
        addCard: (state, action: PayloadAction<XboxGameArticle>) => {
            state.Xarticles.push(action.payload);
        },
        toggleBuying: (state, action: PayloadAction<string>) => {
            const index = state.Xarticles.findIndex((a) => a.id === action.payload);
            if (index !== -1) {
                state.Xarticles[index].isGettingBuied = !state.Xarticles[index].isGettingBuied;
            }
        },
        BuiedXboxCard: (state, action: PayloadAction<string>) => {
            //action.payload = id of the card to remove
            const index = state.Xarticles.findIndex((c) => c.id === action.payload);

            //delete the card at index:
            state.Xarticles.splice(index, 1);
        },
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer
export const { toggleBuying, BuiedXboxCard } = gameSlice.actions

