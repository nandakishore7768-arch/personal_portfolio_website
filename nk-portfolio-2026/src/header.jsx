function Header(){
    return(
        <div className="h-40">
            <div className="group z-50 h-20 flex w-full bg-transparent fixed">
                <div className="flex items-center justify-center gap-6 my-6 bg-gray-600 h-18 w-160 m-auto rounded-full hover:shadow-2xl hover:shadow-black text-white hover:scale-105 transition-transform duration-150 -translate-y-full hover:translate-y-0 transition-transform duration-200 ease-out">
                    <a href="#home" className="rounded-full hover:bg-white px-5 py-3 hover:text-blue-800 hover:shadow-xl hover:shadow-gray-800 transition duration-150">Home</a>
                    <a href="#skills" className="rounded-full hover:bg-white px-5 py-3 hover:text-blue-800 hover:shadow-xl hover:shadow-gray-800 transition duration-150">Skills</a>
                    <a href="#education" className="rounded-full hover:bg-white px-5 py-3 hover:text-blue-800 hover:shadow-xl hover:shadow-gray-800 transition duration-150">Education</a>
                    <a href="#project" className="rounded-full hover:bg-white px-5 py-3 hover:text-blue-800 hover:shadow-xl hover:shadow-gray-800 transition duration-150">Project</a>
                    <a href="#contact" className="rounded-full hover:bg-white px-5 py-3 hover:text-blue-800 hover:shadow-xl hover:shadow-gray-800 transition duration-150">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header

