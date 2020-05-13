import React from 'react';
import { NavLink as Link } from 'react-router-dom';

// Constants
import ROUTES from '../constants/routes';


export default props => {

    return (
        <div className="container mx-auto">
            <header className="flex justify-around items-center mt-10">
                <div className="flex justify-start items-center w-56">
                    <img
                        className="h-16 w-16 border-solid border-4 border-secondary-100 rounded-full mr-2"
                        src="/img/logo_plain.png"
                        alt="Ruff Guides logo of a dog on a pink background"
                    />
                    <span className="font-heading text-2xl">Ruff Guides</span>
                </div>
                <nav>
                    <Link to={ROUTES.HOME} className="text-primary-100 hover:underline px-5"><strong>home</strong></Link>
                    <Link to={ROUTES.ABOUT} className="text-primary-100 hover:underline px-5"><strong>about</strong></Link>
                    <Link to={ROUTES.SEARCH} className="text-primary-100 hover:underline px-5"><strong>search</strong></Link>
                </nav>
            </header>

            <div className="mt-32">
                {props.children}
            </div>

            <footer className="text-center fixed bottom-0 inset-x-0 pb-5 text-gray-700 text-sm">
                &copy; {new Date().getFullYear()}. a website by <a className="text-primary-100 underline" href="https://robkendal.co.uk"><strong>rob kendal</strong></a>
            </footer>
        </div>
    )
};