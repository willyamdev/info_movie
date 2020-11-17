import React, { useState } from 'react';
import ComingSoon from './components/coming-soon/ComingSoon';
import MainBanner from './components/main-banner/MainBanner';
import './css/home.css';
import Trending from './components/trending/Trending';

import Halloween from './images/o-halloween-do-hubie.jpg';
import Bloodshot from './images/bloodshot.jpg';
import Tenet from './images/tenet.jpg';
import dolitle from './images/dolitle.jpeg';
import freeguy from './images/freeguy.jpeg';
import nilo from './images/nilo.jpg';
import bob from './images/bob.jpeg';
import joker from './images/joker.jpg';
import sonic from './images/sonic.jpeg';

import ComingSoonMovie from '../../models/coming-soon-movie';
import TrendingMovie from '../../models/trending-movie';


export default function Home(): JSX.Element {

    const [comingSoonMovies, setComingSoonMovies] = useState<Array<ComingSoonMovie>>([
        new ComingSoonMovie('Tenet', Tenet, '29 October 2020'),
        new ComingSoonMovie('Hubie Halloween', Halloween, '20 November 2020'),
        new ComingSoonMovie('Bloodshot', Bloodshot, '12 March 2020'),
        new ComingSoonMovie('Bloodshot', Bloodshot, '12 March 2020'),
        new ComingSoonMovie('Bloodshot', Bloodshot, '12 March 2020'),
    ]);

    const [trendingMovies, setTrendingMovies] = useState<Array<TrendingMovie>>([
        new TrendingMovie('Sonic', sonic, 'https://youtu.be/hej47fWFLQs'),
        new TrendingMovie('Dolitle', dolitle, 'https://youtu.be/hej47fWFLQs'),
        new TrendingMovie('Nilo', nilo, 'https://youtu.be/hej47fWFLQs'),
        new TrendingMovie('Sponge Bob', bob, 'https://youtu.be/hej47fWFLQs'),
        new TrendingMovie('Joker', joker, 'https://youtu.be/hej47fWFLQs'),
        new TrendingMovie('Freeguy', freeguy, 'https://youtu.be/hej47fWFLQs'),
    ]);

    return (
        <section className="home-page">
            <MainBanner title="Wonder Woman 1984" genres={["Action"]} linkMovie="https://www.youtube.com/watch?v=Y5BejyusI2s" />

            <div className="content">
                <div className="main-content">
                    <Trending moviesList={trendingMovies} />
                </div>

                <ComingSoon moviesList={comingSoonMovies} />
            </div>
        </section>
    );

}