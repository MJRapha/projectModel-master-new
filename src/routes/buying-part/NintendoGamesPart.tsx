import Swal from 'sweetalert2';
import NintendoGameItem from '../games/NintendoGameItem';
import { BuiedCard } from '../../features/games/gameNintendoSlice';
import { NintendoGameArticle } from '../../features/games/games';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Fragment } from 'react';

const NintendoGamesPart = (props: NintendoGameArticle) => {
    const { Narticles } = useAppSelector((state) => state.NintendoGames);
    const buiedNintendoGames = Narticles.filter((a) => a.isGettingBuied);
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap p-1">
                {buiedNintendoGames.map((a) => (
                    <>
                        <Fragment key={a.id}>
                            <NintendoGameItem  {...a} />
                        </Fragment>
                    </>
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
                            dispatch(BuiedCard(props.id));
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

export default NintendoGamesPart