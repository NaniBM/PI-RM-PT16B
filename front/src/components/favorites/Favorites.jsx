import { useDispatch, useSelector } from "react-redux";
import { removeFav, filterCards, orderCards } from "../../redux/actions/action";
import Card from "../card/Card";
import styled from "styled-components"
import { useState } from "react";

const DivContainter = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Favorites = () => {

    const { myFavorites } = useSelector((state) => state)
    // const [aux, setAux] = useState(false)

    const dispatch = useDispatch()
    const onClose = (id) => { 
        dispatch(removeFav(id))
    }

    const handleOrder=(e)=>{
        dispatch(orderCards(e.target.value))
        // setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
        // setAux(!aux)
    }

    const genders = [
        {
            title: 'Unknown',
            value: 'unknown'
        },
        {
            title: 'Male',
            value: 'Male'
        },
        {
            title: 'Female',
            value: 'Female'
        },
        {
            title: 'Genderless',
            value: 'Genderless'
        }
    ]

    return(
        <div>
            <div>
                <label >Sort by </label>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>
            <div>
                <label >Filter by </label>
                <select onChange={handleFilter}>
                    {
                        genders.map((gender)=>(
                            <option value={gender.value}>{gender.title}</option>
                        ))
                    }
                </select>
            </div>
            <DivContainter>
                {
                    myFavorites.map(({ id, name, status, species, 
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
            </DivContainter>
        </div>
    )
}

export default Favorites;