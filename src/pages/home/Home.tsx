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
import mortal from './images/mortal.jpeg';
import dragonheart from './images/dragonheart.jpg';
import Jinglejangle from './images/jingle.jpeg';
import AmericanMurder from './images/murder.jpg';
import Dreamkatcher from './images/dreamkatch.jpeg';
import UnknownOrigins from './images/uncknow.jpg';

import ComingSoonMovie from '../../models/coming-soon-movie';
import TrendingMovie from '../../models/trending-movie';
import RecentViews from './components/recent views/recent-views';
import RecentShow from './components/recent-show/recent-show';
import Movie from '../../models/movie';


export default function Home(): JSX.Element {

    const [comingSoonMovies, setComingSoonMovies] = useState<Array<ComingSoonMovie>>([
        new ComingSoonMovie('Tenet', Tenet, '29 October 2020'),
        new ComingSoonMovie('Hubie Halloween', Halloween, '20 November 2020'),
        new ComingSoonMovie('Unknown Origins', UnknownOrigins, '28 August 2020'),
        new ComingSoonMovie('Bloodshot', Bloodshot, '12 March 2020'),
    ]);

    const [recentViews, setRecentViews] = useState<Array<ComingSoonMovie>>([
        new ComingSoonMovie('Dragon Heart', dragonheart, '04 February 2020'),
        new ComingSoonMovie('Jingle Jangle', Jinglejangle, '06 November 2020'),
        new ComingSoonMovie('American Murder', AmericanMurder, '30 September 2020'),
        new ComingSoonMovie('Dreamkatcher', Dreamkatcher, '22 March 2020'),
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
                    <div className="recents-content">
                        <RecentViews movieList={recentViews}/>
                        <RecentShow recentMovie={new Movie('Mortal Kombat', mortal)}/>
                    </div>
                </div>

                <ComingSoon moviesList={comingSoonMovies} />
            </div>
        </section>
    );

}