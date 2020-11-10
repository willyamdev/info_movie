import React, { InputHTMLAttributes } from 'react';
import './css/info-movie.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fontSize?: number;
}

export default function InfoMovie(props: InputProps) {

    let style = {
        fontSize: props.fontSize
    };

    return (
        <div className="info-movie-brand">
            <p style={style}>
                info<p className="spotlight">Movie</p>
            </p>
        </div>
    );


}