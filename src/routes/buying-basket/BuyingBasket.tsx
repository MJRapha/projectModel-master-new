import { Fragment } from "react";
import Swal from "sweetalert2";
import { useAppSelector } from "../../app/hooks";
//import { NintendoGameArticle, SonyGameArticle, XboxGameArticle } from "../../features/games/games";
//import { BuiedCard } from "../../features/games/gameSlice";
import NintendoGameItem from "../games/NintendoGameItem";
import PSGameItem from "../games/SonyPSGameItem";
import XboxGameItem from "../games/XboxGameItem";


const BuyingBasket = (/* props: [NintendoGameArticle, SonyGameArticle, XboxGameArticle] */) => {
    const { Narticles } = useAppSelector((state) => state.NintendoGames);
    const { Xarticles } = useAppSelector((state) => state.XboxGames);
    const { PSarticles } = useAppSelector((state) => state.PSGames);
    let x = [...Narticles, ...Xarticles, ...PSarticles]
    const buiedGames = x.filter((a) => a.isGettingBuied);
    //const dispatch = useAppDispatch();
    console.log(buiedGames)
    return (
        <>
            <h2 className="text-center">Buying Basket: </h2>
            <div className="d-flex justify-content-center flex-wrap p-1">
                {buiedGames.map((a) => (
                    <Fragment key={a.id}>
                        {
                            (a.company === 'Sony Playstation' && <PSGameItem  {...a} />) ||
                            (a.company === 'Nintendo' && <NintendoGameItem  {...a} />) ||
                            (a.company === 'X-Box' && <XboxGameItem  {...a} />)
                        }
                    </Fragment>
                ))}
            </div>
            <button
                onClick={() => {
                    //dispatch addCard(card)
                    Swal.fire({
                        title: "Are you sure you want to buy those games?",
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: `No`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            /* dispatch(BuiedCard(props.id)); */
                            Swal.fire("Thanks for Order!", "", "success");
                        } else if (result.isDenied) {
                            Swal.fire("Keeping the Order", "", "info");
                        }
                    });
                }}
            >
                Add Card:
            </button>
        </>
    )
}

export default BuyingBasket