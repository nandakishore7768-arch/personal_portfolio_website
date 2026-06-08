const portfolioIntro = `Hi, I'm Nanda Kishore. I am a Self-Taught Gen AI Full-Stack Developer driven by a singular mission: building intelligent, end-to-end applications that solve real-world problems.

My engineering philosophy bridges the gap between deep algorithmic intelligence and elegant user interaction. On the backend, I leverage a robust computer science foundation in Java, C++, and Python, alongside data science essentials like Pandas, NumPy, and Scikit-Learn. However, my true specialization lies in the modern AI paradigm—architecting advanced Generative AI systems using LangChain and LangGraph, implementing context-aware RAG pipelines, and building seamless agent communication layers with MCP (Model Context Protocol).

But an AI engine is only as good as its delivery. That is why I use ReactJS and Tailwind CSS to build fluid, responsive, and pixel-perfect user interfaces. I handle the entire lifecycle of a Gen AI application: from designing complex multi-agent workflows under the hood to refining the micro-interactions, dark-mode toggles, and dropdown animations that make the user experience flawless.

When I'm not orchestrating AI agents or writing clean frontend components, you can find me immersing myself in video games or listening to music to recharge my creative batteries.

This website is a living showroom of my engineering journey and the functional AI apps I've shipped. Take a look around, explore the architecture, and if you are looking for a developer who can build the brain and the beauty of next-generation software—lets connect.`;

function Introduction(){
    return(
        <div className="p-10 ml-10 text-white mt-0 flex m-auto bg-blue-800 rounded-4xl justify-center items-center gap-6 mr-10 animate-[fadeIn_1s_ease-out]" id="home">
            <h2 className="text-4xl w-1/4 font-bold">About Me</h2>
            <p className="w-3/4 text-xl hover:bg-white shadow-md shadow-black hover:text-blue-700 leading-relaxed hover:scale-102 transition-transform duration-150 bg-blue-400 p-5 rounded-4xl shadow-md hover:shadow-black hover:shadow-xl">{portfolioIntro}</p>
        </div>
    )
}

export default Introduction