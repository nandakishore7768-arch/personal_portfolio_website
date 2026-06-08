function Contact(){
    return(
        <div className="flex justify-center items-center bg-blue-950 display-inline rounded-4xl w-1/2 mx-auto mb-10" id="contact">
            <h2 className="p-4 text-white">Contact Me Through |</h2>
            <div className="flex text-white p-4 gap-4 justify-end items-end">
                <button className="hover:bg-green-500 shadow-md hover:scale-105 hover:shadow-xl hover:shadow-black rounded-4xl p-4 transition duration-150"><a href="https://www.linkedin.com/in/k-nanda-kishore-2088a6337/" target="_blank">LinkedIn</a></button>
                <button className="hover:bg-green-500 shadow-md hover:scale-105 hover:shadow-xl hover:shadow-black rounded-4xl p-4 transition duration-150"><a href="https://github.com/nandakishore7768-arch" target="_blank">Github</a></button>
                <button className="hover:bg-green-500 shadow-md hover:scale-105 hover:shadow-xl hover:shadow-black rounded-4xl p-4 transition duration-150"><a href="mailto:nandakishore7768@gmail.com" target="_blank">Mail</a></button>
            </div>
        </div>
    )
}

export default Contact