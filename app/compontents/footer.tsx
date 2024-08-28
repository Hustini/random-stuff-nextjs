import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const footer = () => {
    return (
        <footer className="bg-gray-100 text-white py-10">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-8">
                    <a href="https://github.com/Hustini"
                       className="text-gray-900 hover:text-indigo-500 transition duration-300 ease-in-out">
                        <FaGithub size={30}/></a>
                    <a href="https://www.instagram.com/_salih_ejder/"
                       className="text-gray-900 hover:text-indigo-500 transition duration-300 ease-in-out">
                        <FaInstagram size={30}/></a>
                    <a href="mailto:ejdersalih02@gmail.com"
                       className="text-gray-900 hover:text-indigo-500 transition duration-300 ease-in-out">
                        <IoMdMail size={30}/></a>
                </div>
                <div>
                    <p className="text-gray-900">Copyright &copy;2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default footer