import React from 'react';

export default props => {

    return (
        <div className="text-center container mx-auto mt-40">
            <div className="w-1/2 mx-auto">
                <div className="mb-4">
                    <img className="h-64 mx-auto border-solid border-4 border-secondary-100 rounded-full flex items-center justify-center" src="/img/logo_plain.png" alt="Ruff Guides logo of a dog on a pink background" />
                </div>
                <h1 className="font-heading text-5xl mb-2">Welcome to Ruff Guides</h1>
                <p className="leading-normal mb-10">Find your pawfect family friend by answering a few simple questions</p>
                <p className="leading-normal flex items-center justify-center content-center">
                    <a href="/search" className="rounded-lg bg-primary-100 hover:bg-primary-300 hover:underline p-3 mr-8 text-white">start looking!</a>
                    <a href="/about">find out more</a>
                </p>
            </div>
        </div>
    )
};