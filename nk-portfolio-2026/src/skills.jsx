function Card(props){
    return(
        <div className="bg-blue-400 text-white px-10 py-4 shadow-md shadow-black rounded-4xl hover:bg-white hover:scale-102 hover:text-blue-800 transition duration-150 hover:shadow-xl shadow-black h-50">
            <h2 className="text-2xl"><strong>{props.title}</strong></h2>
            <p className="mt-3">{props.skill}</p>    
        </div>
    )
}

function Skills(){
    return(
        <div className="text-white mx-10 my-10 bg-blue-900 rounded-4xl h-100 animate-[fadeIn_1s_ease-out]" id="skills">
            <h2 className="p-10 text-4xl font-bold text-center">Skills</h2>
            <div className="grid grid-cols-3 gap-2 m-4">
                <div><Card title = "Web Development" skill = "HTML, CSS, JavaScript, React JS, Bootstrap, Tailwind CSS, Fast API, Node JS, Express JS"/></div>
                <div><Card title = "machine learning" skill = "Python, Pandas, Numpy, MatplotLib, Seaborn, Scikit Learn"></Card></div>
                <div><Card title = "Gen AI" skill = "Langchain, Langgraph, MCP, RAG GuardRails"/></div>
            </div>
        </div>
    )
}

export default Skills