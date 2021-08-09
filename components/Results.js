import Thumbnail from "./Thumbnail"

function Results({results}) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
            <p>Change from goodbye branch</p>
            {results.map(result=>(
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>  
    )
}

export default Results
