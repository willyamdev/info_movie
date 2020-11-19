import React from 'react';
import './css/vertical-menu.css';
import { connect, DefaultRootState, useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import * as Actions from '../../../../store/actions';
import { Link } from 'react-router-dom';

function VerticalMenu({ menuVerticalValue }: { menuVerticalValue: DefaultRootState }) {

    const dispatch = useDispatch();

    return (
        <div className={menuVerticalValue ? "vertical-menu vertical-menu--open" : "vertical-menu"}>
            <div className={menuVerticalValue ? "vertical-menu__content vertical--menu--open" : "vertical-menu__content"}>
                <div className="vertical-menu__top">
                    <MenuIcon onClick={() => dispatch(Actions.handleMenu(false))} fontSize="large" />
                </div>

                <div className="vertical-menu__links">
                    <Link to="/">Movies</Link>
                    <Link to="/">Genres</Link>
                    <Link to="/">Articles</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Account</Link>
                </div>
            </div>
        </div>
    );
}

export default connect(state => ({ menuVerticalValue: state }))(VerticalMenu);