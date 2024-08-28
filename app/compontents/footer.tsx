import React from "react";
import Head from "next/head";



const footer = () => {
    return(
        <div>
            <Head>
                <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
            </Head>
            <footer className="bg-gray-100 text-white py-10">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="https://github.com/Hustini"
                           className="text-gray-900 hover:text-indigo-500 transition duration-300 ease-in-out">
                            <i className="bx bxl-github text-3xl"></i></a>
                        <a href="https://www.instagram.com/_salih_ejder/"
                           className="text-gray-900 hover:text-indigo-500 transition duration-300 ease-in-out">
                            <i className="bx bxl-instagram text-3xl"></i></a>
                        <a href="mailto:ejdersalih02@gmail.com"
                           className="text-gray-900 hover:text-indigo-500 transition duration-300 ease-in-out">
                            <i className="bx bxs-envelope text-3xl"></i></a>
                    </div>
                    <div>
                        <p className="text-gray-900">Copyright &copy;2024 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer