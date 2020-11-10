import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import './css/trending.css';
import { PlayCircleOutline } from '@material-ui/icons';

export type TrendingMovie = {
    bannerImage: string,
    movieTrailer: string
};

interface PropsTypes extends InputHTMLAttributes<HTMLInputElement> {
    moviesList: Array<TrendingMovie>
}

export default function Trending(props: PropsTypes) {

    return (
        <div className="trending">
            <div className="top">
                <p>Tendências</p>
                <Link to="/">Ver mais..</Link>
            </div>

            <div className="trending-itens-list">
                {
                    props.moviesList.map((data) => (
                        <div className="trending-item" style={{
                            backgroundImage: `url(${data.bannerImage})`,
                        }}>
                            <PlayCircleOutline style={{fontSize:"60px", zIndex:2}} color="secondary" />
                        </div>
                    ))
                }
            </div>
        </div>
    );


}