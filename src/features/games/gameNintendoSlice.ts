import { NintendoGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nintendoGamesArr } from "../../api/nintendoGames";

export interface GameArticles {
    Narticles: NintendoGameArticle[];
}

const initialState: GameArticles = {
    Narticles: nintendoGamesArr,
};

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<NintendoGameArticle>) => {
            state.Narticles.push(action.payload);
        }
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer

