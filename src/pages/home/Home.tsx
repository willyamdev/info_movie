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


export default function Home(): JSX.Element {

    const [comingSoonMovies, setComingSoonMovies] = useState<Array<ComingSoonMovie>>([
        {
            bannerImage: Tenet,
            title: "Tenet",
            premiereTime: "29 de Outubro de 2020"
        },
        {
            bannerImage: Halloween,
            title: "O Halloween do Hubie",
            premiereTime: "20 de Novembro de 2020"
        },
        {
            bannerImage: Bloodshot,
            title: "Bloodshot",
            premiereTime: "12 de Março de 2020"
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
            bannerImage: bob,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        },
        {
            bannerImage: bob,
            movieTrailer: 'https://youtu.be/hej47fWFLQs'
        }
    ]);

    return (
        <section className="home-page">
            <MainBanner title="Mulher Maravilha 1984" genres={["Ação", "Aventura"]} linkMovie="https://www.youtube.com/watch?v=Y5BejyusI2s" />

            <div className="content">
                <div className="main-content">
                    <Trending moviesList={trendingMovies}/>
                </div>

                <ComingSoon moviesList={comingSoonMovies} />
            </div>
        </section>
    );

}