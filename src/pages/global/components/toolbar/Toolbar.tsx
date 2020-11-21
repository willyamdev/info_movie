import React, { useEffect, useRef } from 'react';
import InfoMovie from '../info-movie-logo/InfoMovie';
import './css/toolbar.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { connect, useDispatch } from 'react-redux';
import * as Actions from '../../../../store/actions';

function Toolbar() {

    const dispatch = useDispatch();
    let toolbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.onscroll = () => {
            let toolbarElement = toolbarRef.current;
            let currentScrollPos = window.pageYOffset;

            if (currentScrollPos < 100) {
                toolbarElement?.setAttribute('class', 'toolbar');
            } else if (currentScrollPos == 0) {
                toolbarElement?.setAttribute('class', 'toolbar');
            } else {
                toolbarElement?.setAttribute('class', 'toolbar toolbar-expanded');
            }

            //SE QUISER QUE A BARRA ENCOLHA SEMPRE QUE FOR PARA CIMA
            // prevScrollPos = currentScrollPos;
        }
    }, []);

    return (
        <div className="toolbar" ref={toolbarRef}>
            <Link to="/">
                <InfoMovie fontSize={22} />
            </Link>

            <div className="toolbar-links">
                <Link to="/">Movies</Link>
                <Link to="/">Genres</Link>
                <Link to="/">Articles</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Account</Link>
            </div>
            <MenuIcon className="toolbar-menu-btn" onClick={()=> dispatch(Actions.handleMenu(true))}/>
        </div>
    );
}

export default connect(null)(Toolbar);