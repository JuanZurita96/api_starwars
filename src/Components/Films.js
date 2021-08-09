import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../Redux/FilmsReducer';
import { Link } from 'react-router-dom';

export const Films = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const recieveFilms = () => dispatch(getFilms());
        recieveFilms();
    }, [dispatch]);
    const films = useSelector(state => state.films.films);
    const images = [
        {
            episode: 1,
            url: 'https://m.media-amazon.com/images/I/81jCnACyELL._AC_SL1500_.jpg'
        },
        {
            episode: 2,
            url: 'https://m.media-amazon.com/images/P/B0091R2VXW.01._SCLZZZZZZZ_SX500_.jpg'
        },
        {
            episode: 3,
            url: 'https://images-na.ssl-images-amazon.com/images/I/91RuQy-UBfL._RI_.jpg'
        },
        {
            episode: 4,
            url: 'https://m.media-amazon.com/images/P/B00513DG9I.01._SCLZZZZZZZ_SX500_.jpg'
        },
        {
            episode: 5,
            url: 'https://m.media-amazon.com/images/P/B0131FN6W4.01._SCLZZZZZZZ_SX500_.jpg'
        },
        {
            episode: 6,
            url: 'https://m.media-amazon.com/images/P/B00513HX56.01._SCLZZZZZZZ_SX500_.jpg'
        }
    ]
    return (
        <>
        {
            films.sort((a,b) => a.episode_id - b.episode_id).map((f,i) => {
                return (
                    <div key ={f.title} className='col col3'>
                        <h1 className='title'>{f.title}</h1>
                        <h2 className='title'>Episodio: {f.episode_id}</h2>
                        <Link to={`/${f.episode_id}`}>
                            <img
                            src={images[i].url}
                            alt={f.title}
                            />
                            <button className='btn'>MÁS INFORMACIÓN</button>
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}
export default Films;