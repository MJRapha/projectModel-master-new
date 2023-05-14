import { NewGameArticle, NintendoGameArticle, XboxGameArticle, SonyGameArticle, SoonGameArticle } from './../features/games/games.d';

//giving type props for every Array of games
export type NewGamesItemProps = {} & NewGameArticle;
export type SoonGamesItemProps = {} & SoonGameArticle;
export type NintendoGamesItemProps = {} & NintendoGameArticle;
export type XboxGamesItemProps = {} & XboxGameArticle;
export type SonyGamesItemProps = {} & SonyGameArticle;

//type for the activetion of the button
export type IsActiveProps = {
    isActive: boolean
}
