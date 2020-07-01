import React from 'react';
import HeaderNav from './HeaderNav';
import ActiveUser from './ActiveUser';

const Header = ({ user }) => {
    return (
        <div>
            <h1>Would You Rather</h1>
            <div>
                <HeaderNav />
                {user && <ActiveUser user={user} />}
            </div>
        </div>
    );
}

export default Header;
