import React, { useState } from 'react'
import { CheckBadgeIcon, Square2StackIcon } from '@heroicons/react/24/outline'
import Snippet from '../components/Snippet';

const GetStarted = () => {
    const [copySuccess, setCopySuccess] = useState(false);


    const link = "https://github.com/phpSniper/php-sniper.git"


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const config = `
    // Replace these credentials with your own
    $host = "Your_host_name";
    $user = "Your_username";
    $pass = "Your_password";
    $db = "your_database_name";
    `;

    const include = `include "./sniper.php";`;

    const sample = `
    <?php
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
    ?>
    `
  return (
<div className='md:px-10 space-y-5 py-5'>
<h1 className='text-2xl font-bold gradient-text'>Installation</h1>

<div className="flex flex-col space-y-3 p-5 shadow-xl rounded-xl w-auto max-w-3xl dark:bg-gray-800">
    <h2 className='text-xl font-semibold'>Step 1</h2>
    <p>Clone the PHP Sniper repository from GitHub or download the zip file from the github repository, then include it in your project directory. </p>
    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row  md:space-x-5">
        <a target='_blank' href='https://github.com/phpSniper/php-sniper.git' className='bg rounded-xl px-5 flex items-center justify-center text-black font-semibold'>
            Github
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-10 p-1" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" /></svg>
        </a>
        <div className="flex items-center rounded-xl text-sm bg-white shadow-lg dark:bg-gray-800 px-4 py-2 space-x-3">
            <code className="">{link}</code>
            <div onClick={handleCopy}>
                {
                    copySuccess ? (
                        <CheckBadgeIcon className="h-6 w-6 text-blue-500 hover:scale-125 focus:scale-125 cursor-pointer transition" />
                    ) : (
                        <Square2StackIcon className="h-6 w-6 text-blue-500 hover:scale-125 focus:scale-125 cursor-pointer transition" />
                    )
                }
            </div>
        </div>
    </div>
</div>
<div className="flex flex-col space-y-3 p-5 shadow-xl rounded-xl w-auto max-w-3xl dark:bg-gray-800">
    <h2 className='text-xl font-semibold'>Step 2</h2>
    <p className="">Update the config.php file located in the functions folder with your database credentials to allow it to connect to your database.
    </p>
    <div>
        <code className='text-sm bg-gray-200 dark:bg-gray-900/50 px-5 py-2 rounded-xl'>./functions/config.php</code>
    </div>
        <div className="w-auto h-auto rounded-xl overflow-hidden">
        <Snippet code={config} />
        </div>
</div>

<div className="flex flex-col space-y-3 p-5 shadow-xl rounded-xl w-auto max-w-3xl dark:bg-gray-800">
    <h2 className='text-xl font-semibold'>Step 3</h2>
    <p className="">Include sniper.php in your PHP script.</p>
    <div className="w-auto h-auto rounded-xl overflow-hidden">
        <Snippet code={include} />
        </div>
</div>
<div className="flex flex-col space-y-3 p-5 shadow-xl rounded-xl w-auto max-w-3xl dark:bg-gray-800">
    <h2 className='text-xl font-semibold'>Step 4</h2>
    <p className="">Start using the functions provided by PHP Sniper.</p>
    <div className="w-auto h-auto rounded-xl overflow-hidden">
        <Snippet code={sample} />
        </div>
</div>
<p className="flex flex-col space-y-3 p-5 shadow-xl rounded-xl w-auto max-w-3xl dark:bg-gray-800">If you encounter any issues, feel free to post it in the discussion section of our github repository.</p>

</div>
    )
}

export default GetStarted