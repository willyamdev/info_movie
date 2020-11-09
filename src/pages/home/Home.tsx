import React from 'react';
import MainBanner from './components/main-banner/MainBanner';
import './css/home.css';

export default function Home(): JSX.Element {

    return (
        <section className="home-page">
            <MainBanner title="Wonder Woman 1984" genres={["Action", "Adventure"]}/>
        </section>
    );

}