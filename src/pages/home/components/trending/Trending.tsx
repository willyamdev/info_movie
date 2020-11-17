import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/trending.css';
import { PlayCircleOutline, NavigateNext, NavigateBefore } from '@material-ui/icons'
import TrendingMovie from '../../../../models/trending-movie';

// export type TrendingMovie = {
//     bannerImage: string,
//     movieTrailer: string
// };

interface PropsTypes{
    moviesList: Array<TrendingMovie>
}

export default function Trending(props: PropsTypes) {

    let trendingList = useRef<HTMLDivElement>(null);

    function next() {
        let trendingElement = trendingList.current;
        // console.log(trendingElement?.scrollWidth);

        trendingElement?.scrollTo(trendingElement?.scrollWidth, 0);
    }

    function prev() {
        let trendingElement = trendingList.current;
        trendingElement?.scrollTo(0, 0);
    }

    return (
        <div className="trending">
            <div className="top">
                <p>Trending</p>
                <Link to="/">More..</Link>
            </div>

            <div className="trending-slider-container">
                <div className="slider-button left-prev" onClick={prev}>
                    <NavigateBefore style={{ margin: "0", fontSize: '30px' }} />
                </div>
                <div className="slider-button right-next" onClick={next}>
                    <NavigateNext style={{ margin: "0", fontSize: '30px' }} />
                </div>

                <div className="trending-itens-list" ref={trendingList}>
                    {
                        props.moviesList.map((data) => (
                            <div className="trending-item" style={{
                                backgroundImage: `url(${data.movieCape})`,
                            }}>
                                <PlayCircleOutline style={{ fontSize: "60px", zIndex: 2 }} color="secondary" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );


}