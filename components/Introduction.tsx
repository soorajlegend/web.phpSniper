import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { BeakerIcon, Square2StackIcon } from '@heroicons/react/24/outline'

const Introduction = () => {

    const code = ` <?php
    include 'path/to/sniper.php';

    $table = 'users';
    $columns = 'name, email';
    $values = "'John Doe', 'johndoe@example.com'";
    
    $inserted = insert($table, $columns, $values);
    
    if ($inserted) {
        echo "Data inserted successfully!";
    } else {
        echo "Failed to insert data!";
    }
    ?>`;

    const encodedCode = encodeURIComponent(code);

    return (
        <div className='h-screen flex space-x-0 flex-col md:space-x-10 md:flex-row items-center'>
            <div className="w-full flex flex-col space-y-3">
                <h1 className='text-3xl font-bold gradient-text'>Introduction</h1>
                <p>
                    PHP Sniper is a powerful PHP library that provides a range of functions for managing and manipulating data in a database. With PHP Sniper, developers can easily add, retrieve, update and delete data in a database, making it an essential tool for any web development project. Our library is designed to be easy to use and highly flexible, with a focus on providing a streamlined and efficient experience for developers. Whether you are working on a small-scale personal project or a large enterprise-level application, PHP Sniper can help you simplify your workflow and streamline your database operations.
                </p>

                <h1 className='text-2xl font-bold gradient-text'>Getstarted by cloning our github repo</h1>
                <div className="flex flex-col md:flex-row  md:space-x-5">
                    <a target='_blank' href='https://github.com/phpSniper/php-sniper.git' className='bg rounded-xl px-5 flex items-center text-black font-semibold'>
                        Github
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-10 p-1" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" /></svg>
                    </a>
                    <div className="flex items-center rounded-xl bg-gray-800 px-4 space-x-3">
                    <code className="">https://github.com/phpSniper/php-sniper.git</code>
                    <Square2StackIcon className="h-6 w-6 text-blue-500 hover:scale-125 focus:scale-125 cursor-pointer transition"/>
                    </div>
                </div>

            </div>
            <div className="w-full">
                <SyntaxHighlighter language="php" style={vscDarkPlus}>
                    {decodeURIComponent(encodedCode)}
                </SyntaxHighlighter>
            </div>

        </div>
    )
}

export default Introduction