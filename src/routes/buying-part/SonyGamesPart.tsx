import Swal from 'sweetalert2';
import PSGameItem from '../games/SonyPSGameItem';
import { BuiedCard } from '../../features/games/gameSonySlice';
import { SonyGameArticle } from '../../features/games/games';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Fragment } from 'react';

const SonyGamesPart = (props: SonyGameArticle) => {
    const { PSarticles } = useAppSelector((state) => state.PSGames);
    const buiedSonyGames = PSarticles.filter((a) => a.isGettingBuied);
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap p-1">
                {buiedSonyGames.map((a) => (
                    <Fragment key={a.id}>
                        <PSGameItem  {...a} />
                    </Fragment>
                ))}
            </div>
            <button
                onClick={() => {
                    //dispatch addCard(card)
                    Swal.fire({
                        title: "Are you sure you want to those the games?",
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: `No`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(BuiedCard(props.id));
                            Swal.fire("Deleted!", "", "success");
                        } else if (result.isDenied) {
                            Swal.fire("Keeping the card", "", "info");
                        }
                    });
                }}
            >
                Add Card:
            </button>
        </>
    )
}

export default SonyGamesPart