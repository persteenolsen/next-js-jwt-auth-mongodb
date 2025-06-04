import { redirect } from 'next/navigation';

import { auth } from '_helpers/server';
import { Alert, NavPublic } from '_components';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if logged in redirect to home page
    if (auth.isAuthenticated()) {
        redirect('/');
    }

    return (
        <div className="app-container bg-light">
            <NavPublic />
            <Alert />
            
            <div className="p-4">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
}