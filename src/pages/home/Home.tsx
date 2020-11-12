import React, { useState } from 'react';
import ComingSoon, { ComingSoonMovie } from './components/coming-soon/ComingSoon';
import MainBanner from './components/main-banner/MainBanner';
import './css/home.css';
import Trending, {TrendingMovie} from './components/trending/Trending';

import Halloween from './images/o-halloween-do-hubie.jpg';
import Bloodshot from './images/bloodshot.jpg';
import Tenet from './images/tenet.jpg';
import dolitle from './images/dolitle.jpeg';
import freeguy from './images/freeguy.jpeg';
import nilo from './images/nilo.jpg';
import bob from './images/bob.jpeg';
import joker from './images/joker.jpg';
import sonic from './images/sonic.jpeg';


export default function Home(): JSX.Element {

    const [comingSoonMovies, setComingSoonMovies] = useState<Array<ComingSoonMovie>>([
        {
            bannerImage: Tenet,
            title: "Tenet",
            premiereTime: "29 October 2020"
        },
        {
            bannerImage: Halloween,
            title: "Hubie Halloween",
            premiereTime: "20 November 2020"
        },
        {
            bannerImage: Bloodshot,
            title: "Bloodshot",
            premiereTime: "12 March 2020"
        }
    ]);

    const [trendingMovies, setTrendingMovies] = useState<Array<TrendingMovie>>([
        {
            bannerImage: dolitle,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        },
        {
            bannerImage: freeguy,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        },
        {
            bannerImage: nilo,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        },
        {
            bannerImage: bob,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        },
        {
            bannerImage: joker,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        },
        {
            bannerImage: sonic,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        }
    ]);

    return (
        <section className="home-page">
            <MainBanner title="Wonder Woman 1984" genres={["Action"]} linkMovie="https://www.youtube.com/watch?v=Y5BejyusI2s" />

            <div className="content">
                <div className="main-content">
                    <Trending moviesList={trendingMovies}/>
                </div>

                <ComingSoon moviesList={comingSoonMovies} />
            </div>
        </section>
    );

}