import 'bootstrap/dist/css/bootstrap.min.css';
import 'globals.css';

export const metadata = {
    title: 'Next.js 13 - User Registration and Login Example'
}

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">

            <meta name="description" content="Full Stack Web Application by Next.js and MongoDB "></meta>
            <body>
                {children}

                {/* credits */}
                <div className="text-center mt-4">
                  Web Developer - Per Olsen - Denmark
                </div>
            </body>
        </html>
    );
}
