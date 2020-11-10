import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import InfoMovie from '../../../global/components/info-movie-logo/InfoMovie';
import './css/main-banner.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string,
    movieBanner?: string,
    genres: Array<string>,
    linkMovie: string
}

export default function MainBanner(props: InputProps) {


    return (
        <header className="main-banner">
            <nav className="navigation-bar">
                <InfoMovie fontSize={30} />
                <div className="navigation-bar-links">
                    <Link to="/">Filmes</Link>
                    <Link to="/">Gêneros</Link>
                    <Link to="/">Artigos</Link>
                    <Link to="/">Sobre</Link>
                    <Link to="/">Conta</Link>
                </div>
            </nav>

            <div className="banner-movie-info-content">
                <h3>Em estreia</h3>
                <h2>{props.title}</h2>
                <div className="genres-container">
                    {props.genres.map((data) => (
                        <div className="genre">
                            {data}
                        </div>
                    ))}
                </div>
                <button onClick={() => window.open(props.linkMovie, '_blank')}>
                    Assista agora
                </button>
            </div>


        </header>
    );

}