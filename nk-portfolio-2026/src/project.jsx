const description = "This is my first project in which I created and deployed my portfolio project, I used Tailwind CSS for the styling, used React for the components and since there is no data collection or retrival involved, there is no backend placed here."

function Card(props){
    return(
        <div className="bg-blue-600 text-white p-4 mx-3 mb-3 rounded-4xl shadow-md hover:scale-102 shadow-black hover:shadow-xl shadow-black hover:bg-white hover:text-blue-800 transition duration-150">
                <div className="flex items-baseline gap-3 w-screen mb-4">
                    <p className="font-bold text-2xl w-6/32">{props.title} -</p>
                    <p className="text-xl w-1/2 text-left">{props.stack}</p>      
                    <p className="text-xl w-1/4 text-center">{props.time}</p>       
                </div>
                
            <p className="text-xl leading-relaxed">{props.description}</p>
        </div>
    )
}

function Project(){
    return(
        <div className="text-white bg-blue-500 m-10 rounded-4xl pb-5" id="project">
            <h2 className="font-bold text-4xl text-center p-3">Project</h2>
            <Card title = "Portfolio Website" stack = "HTML, CSS, ReactJS, TailWindCSS, Gen AI" time = "June 2026" description = {description} />
        </div>
    )
}

export default Project