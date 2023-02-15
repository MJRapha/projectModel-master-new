import Swal from 'sweetalert2';
import XboxGameItem from '../games/XboxGameItem';
import { BuiedCard } from '../../features/games/gameXboxSlice';
import { XboxGameArticle } from '../../features/games/games';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Fragment } from 'react';

const XboxGamesPart = (props: XboxGameArticle) => {
    const { Xarticles } = useAppSelector((state) => state.XboxGames);
    const buiedXboxGames = Xarticles.filter((a) => a.isGettingBuied);
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap p-1">
                {buiedXboxGames.map((a) => (
                    <>
                        <Fragment key={a.id}>
                            <XboxGameItem  {...a} />
                        </Fragment>
                    </>
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

export default XboxGamesPart