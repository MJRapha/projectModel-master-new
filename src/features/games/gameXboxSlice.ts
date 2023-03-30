import { XboxGameArticle } from "./games.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { xboxGamesArr } from "../../api/xboxGames";

export interface GameArticles {
    Xarticles: XboxGameArticle[];
}

const initialState: GameArticles = {
    Xarticles: xboxGamesArr,
};

export const gameSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<XboxGameArticle>) => {
            state.Xarticles.push(action.payload);
        }
    },
});
// also exported fetchUsers at the top

//export the reducer
export default gameSlice.reducer

