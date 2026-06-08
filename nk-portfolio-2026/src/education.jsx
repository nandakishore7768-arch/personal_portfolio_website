function Card(props){
    return(
        <div className={`text-white bg-blue-600 rounded-4xl p-6 my-2 w-5/8 shadow-md shadow-black ${props.className || ''} hover:bg-white hover:text-blue-800 hover:scale-102 hover:shadow-xl hover:shadow-black transition duration-150`}>
            <h2 className="font-bold text-xl mb-4">{props.kind}</h2>
            <p><span className="font-bold mr-2">Organization : </span>{props.organization}</p>
            <p><span className="font-bold mr-2">Grades obtained : </span>{props.marks_obtained}</p>
        </div>
    )
}

function Education(){
    return(
        <div className="text-white mx-10 bg-blue-400 p-10 rounded-4xl flex flex-col shadow-lg animate-[fadeIn_1s_ease-out]" id="education">
            <h2 className="text-4xl font-bold my-5 tracking-light text-center">Education</h2>
            <Card kind = "elementary school" organization = "Sindhi Model Senior Secondary School" marks_obtained = "98.6%"></Card>
            <Card kind = "High school" organization = "Sindhi Model Senior Secondary School" marks_obtained = "91%" className="self-end"></Card>
            <Card kind = "university" organization = "Birla Institute of Technology and Science" marks_obtained = "8.89"/>
        </div>
    )
}

export default Education