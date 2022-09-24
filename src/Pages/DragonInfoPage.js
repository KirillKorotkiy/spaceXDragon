import { useGetDragonsById } from "hooks/useGetCurrentDragon"

export const DragonInfoPage = () => {
    const dragon = useGetDragonsById()
    console.log(dragon)

    return (
        <>
            {/* <img src="" alt="" />
            <h2></h2>
            <p></p> */}
        </>
    )
}