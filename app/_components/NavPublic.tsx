'use client';

import { NavLink } from '_components';

export { NavPublic };

function NavPublic() {
   

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
            <div className="navbar-nav">
                
                <NavLink href="/account/login" className="nav-item nav-link">Home</NavLink>
                <NavLink href="/about" className="nav-item nav-link">About this Web Application</NavLink>
                
                
            </div>
        </nav>
    );
}