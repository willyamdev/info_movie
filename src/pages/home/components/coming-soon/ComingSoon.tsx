import React from 'react';
import { Link } from 'react-router-dom';
import './css/coming-soon.css';
import ComingSoonMovie from '../../../../models/coming-soon-movie';

// export type ComingSoonMovie = {
//     bannerImage: string,
//     title: string,
//     premiereTime: string
// };

interface PropsTypes {
    moviesList: Array<ComingSoonMovie>,
}

export default function ComingSoon(props: PropsTypes): JSX.Element {

    return (
        <div className="coming-soon">
            <div className="top">
                <p>Coming Soon</p>
                <Link to="/">More..</Link>
            </div>

            {
                props.moviesList.map((data, index) => (
                    <div className="coming-soon-item" key={index}>
                        <img src={data.movieCape} alt="" />

                        <div className="info-content">
                            <h4>{data.movieTitle}</h4>
                            <p>Premiere in</p>
                            <h4>{data.premiereDate}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}