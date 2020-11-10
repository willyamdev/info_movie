import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import './css/coming-soon.css';

export type ComingSoonMovie = {
    bannerImage: string,
    title: string,
    premiereTime: string
};

interface PropsTypes extends InputHTMLAttributes<HTMLInputElement> {
    moviesList: Array<ComingSoonMovie>,
}

export default function ComingSoon(props: PropsTypes): JSX.Element {

    return (
        <div className="coming-soon">
            <div className="top">
                <p>Em breve</p>
                <Link to="/">Ver mais..</Link>
            </div>

            {
                props.moviesList.map((data) => (
                    <div className="coming-soon-item">
                        <img src={data.bannerImage} alt="" />

                        <div className="info-content">
                            <h4>{data.title}</h4>
                            <p>Estreia em</p>
                            <h4>{data.premiereTime}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}