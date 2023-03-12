import { Fragment } from "react";
import Swal from "sweetalert2";
import { useAppSelector } from "../../app/hooks";
/* import { NintendoGameArticle, SonyGameArticle, XboxGameArticle } from "../../features/games/games";
import { BuiedCard } from "../../features/games/gameNintendoSlice"; */
import NintendoGameItem from "../games/NintendoGameItem";
import PSGameItem from "../games/SonyPSGameItem";
import XboxGameItem from "../games/XboxGameItem";
import NintendoGamesPart from "../buying-part/NintendoGamesPart";
import XboxGamesPart from "../buying-part/XboxGamesPart";
import SonyGamesPart from "../buying-part/SonyGamesPart";
import NewGamesPart from "../buying-part/NewGamesPart";
import NewGameItem from "../games/NewGameItem";


const BuyingBasket = (/* props: [NintendoGameArticle, SonyGameArticle, XboxGameArticle] */) => {
    const { Narticles } = useAppSelector((state) => state.NintendoGames);
    const { Xarticles } = useAppSelector((state) => state.XboxGames);
    const { PSarticles } = useAppSelector((state) => state.PSGames);
    const { articles } = useAppSelector((state) => state.NewGames);
    let x = [...Narticles, ...Xarticles, ...PSarticles, ...articles]
    const buiedGames = x.filter((a) => a.isGettingBuied);
    /*     const dispatch = useAppDispatch(); */
    console.log(buiedGames)

    return (
        <>
            <button
                onClick={() => {
                    Swal.fire({
                        title: "Are you sure you want to buy those games?",
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: `No`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            buiedGames.map((a) => (
                                <Fragment>
                                    {
                                        (a.company === 'Nintendo' && <NintendoGamesPart id={""} nameOfGame={""} description={""} company={""} />) ||
                                        (a.company === 'X-Box' && <XboxGamesPart id={""} nameOfGame={""} description={""} company={""} />) ||
                                        (a.company === 'Sony Playstation' && <SonyGamesPart id={""} nameOfGame={""} description={""} company={""} />) ||
                                        (a.company === 'New' && <NewGamesPart id={""} nameOfGame={""} description={""} company={""} />)
                                    }
                                </Fragment>
                            ))
                            Swal.fire("Thanks for Order!", "", "success");
                        } else if (result.isDenied) {
                            Swal.fire("Keeping the Order", "", "info");
                        }
                    });
                }}
            >
                Buy:
            </button >
            <h2 className="text-center">Buying Basket: </h2>
            <div className="d-flex justify-content-center flex-wrap p-1">
                {buiedGames.map((a) => (
                    <Fragment key={a.id}>
                        {
                            (a.company === 'Sony Playstation' && <PSGameItem  {...a} />) ||
                            (a.company === 'Nintendo' && <NintendoGameItem  {...a} />) ||
                            (a.company === 'X-Box' && <XboxGameItem  {...a} />) ||
                            (a.company === 'New' && <NewGameItem  {...a} />)
                        }
                    </Fragment>
                ))}
            </div>
            {/* <button
                onClick={() => {
                    Swal.fire({
                        title: "Are you sure you want to buy those games?",
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: `No`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(BuiedCard(props[buiedGames].id));
                            Swal.fire("Thanks for Order!", "", "success");
                        } else if (result.isDenied) {
                            Swal.fire("Keeping the Order", "", "info");
                        }
                    });
                }}
            >
                Buy:
            </button> */}
        </>
    )
}

export default BuyingBasket