import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../../redux/actions/action";
import Card from "../card/Card";

const Favorites = () => {

    const myfavs = useSelector((state) => state.myFavorites)

    const dispatch = useDispatch()
    const onClose = (id) => { 
        dispatch(removeFav(id))
    }

    return(
        <>
            {
                myfavs.map(({ id, name, status, species, 
                gender, origin, image}) =>  {
                    return(
                    <Card 
                        key={id} 
                        id={id} 
                        name={name} 
                        status={status} 
                        species={species} 
                        gender={gender} 
                        image={image} 
                        origin={origin.name} 
                        onClose={onClose}
                    />
                )
                })
            }
        </>
    )
}

export default Favorites;