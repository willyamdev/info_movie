import React from 'react';
import { Link } from 'react-router-dom';
import InfoMovie from '../../../global/components/info-movie-logo/InfoMovie';
import './css/main-banner.css';
import MenuIcon from '@material-ui/icons/Menu';
import { connect, useDispatch } from 'react-redux';
import * as Actions from '../../../../store/actions';

interface InputProps {
    title: string,
    movieBanner?: string,
    genres: Array<string>,
    linkMovie: string
}

function MainBanner({ props }: { props: InputProps }) {

    const dispatch = useDispatch();

    return (
        <header className="main-banner">
            <nav className="navigation-bar">
                <InfoMovie fontSize={30} />
                <div className="navigation-bar-links">
                    <Link to="/">Movies</Link>
                    <Link to="/">Genres</Link>
                    <Link to="/">Articles</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Account</Link>
                </div>
                <MenuIcon color="secondary" className="navigation-menu-button" fontSize="large" onClick={() => dispatch(Actions.handleMenu(true))} />
            </nav>

            <div className="banner-movie-info-content">
                <h3>Premiere now</h3>
                <h2>{props.title}</h2>
                <div className="genres-container">
                    {props.genres.map((data, index) => (
                        <div className="genre" key={index}>
                            {data}
                        </div>
                    ))}
                </div>
                <button onClick={() => window.open(props.linkMovie, '_blank')}>
                    Watch Now
                </button>
            </div>


        </header>
    );
}

const mapStateToProps = (state: boolean, ownProps: InputProps) => ({
    props: ownProps
});

export default connect(mapStateToProps)(MainBanner)