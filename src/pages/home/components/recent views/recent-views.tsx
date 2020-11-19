import React from 'react';
import './css/recent-views.css';
import ComingSoonMovie from '../../../../models/coming-soon-movie';

interface PropsTypes {
    movieList: Array<ComingSoonMovie>
}

export default function RecentViews(props: PropsTypes) {

    return (
        <div className="recent-views">
            <div className="top">
                <p>Recent Views</p>
            </div>

            {
                props.movieList.map((data, index) => (
                    <div className="recent-movie-item" key={index}>
                        <img src={data.movieCape} alt="" />
                        <div className="info-container">
                            <div className="info-content">
                                <span>{data.movieTitle}</span>
                                <span>{data.premiereDate}</span>
                            </div>

                            <button>Review</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}