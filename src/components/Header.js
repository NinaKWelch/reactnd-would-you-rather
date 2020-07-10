import React from 'react';
import { withRouter } from "react-router-dom";
import HeaderNav from './HeaderNav';
import ActiveUser from './ActiveUser';

const Header = ({ authedUser }) => {
    return (
        <div>
            <h1>Would You Rather</h1>
            <div>
                <HeaderNav />
                {authedUser && <ActiveUser authedUser={authedUser} />}
            </div>
        </div>
    );
}

export default withRouter(Header);
