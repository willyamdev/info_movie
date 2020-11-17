import React from 'react';
import './css/recent-show.css';
import Movie from '../../../../models/movie';
import { PlayCircleOutline } from '@material-ui/icons'

interface PropsTypes {
    recentMovie: Movie
}

export default function RecentShow(props: PropsTypes) {

    return (
        <div className="recent-show">
            <div className="top">
                <p>Recent Show</p>
            </div>

            <div className="recent-show-item" style={{
                backgroundImage: `url(${props.recentMovie.movieCape})`,
            }}>
                <PlayCircleOutline style={{ fontSize: "60px", zIndex: 2 }} color="secondary" />
            </div>
        </div>
    );

}