import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShips } from '../Redux/ShipsReducer';
import { useParams } from 'react-router-dom';

export const Ships = () => {
    const [toggle, setToggle] = useState([])
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const recieveShips = () => dispatch(getShips());
        recieveShips();
    }, [dispatch]);
    const ships = useSelector(state => state.ships.ships);
    const films = useSelector(state => state.films.films);
    const filtrado = films.find(ep => ep.episode_id == id);
    const ship = ships.map(e => {
        for (let i = 0; i < filtrado.starships.length; i++) {
            if(e.url == filtrado.starships[i]){
                return e
            }
        }
    }).filter(f => f !== undefined);
    const toggleData = name =>{
        const showS = toggle.slice();
        const index = showS.indexOf(name);
        if(index >= 0){
            showS.splice(index, 1);
            setToggle(showS);
        }else{
            showS.push(name);
            setToggle(showS);
        }
    };
    return(
        <>
        {
            ship.map((s,i) => {
                return (
                    <div key={s.name} className='col col2'>
                        <h1 className='title'>{s.name}</h1>
                        {toggle.includes(s.name) && (
                        <div className='info'>
                            <h2>Modelo:</h2><br/>
                            <p>{s.model}</p>
                            <h2>Fabricante:</h2><br/>
                            <p>{s.manufacturer}</p>
                            <h2>Costo:</h2><br/>
                            <p>{s.cost_in_credits}</p>
                            <h2>Longitud:</h2><br/>
                            <p>{s.length}</p>
                            <h2>Vel. Max.:</h2><br/>
                            <p>{s.max_atmosphering_speed}</p>
                            <h2>Tripulación:</h2><br/>
                            <p>{s.crew}</p>
                            <h2>Pasajeros:</h2><br/>
                            <p>{s.passengers}</p>
                            <h2>Clase:</h2><br/>
                            <p>{s.starship_class}</p>
                        </div>
                        )}
                        <button onClick={() => toggleData(s.name)} className='btn'>Mostrar Informacion</button>
                    </div>
                )
            })
        }
        </>
    )
}
export default Ships;