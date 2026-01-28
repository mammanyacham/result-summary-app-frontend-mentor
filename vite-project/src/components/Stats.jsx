

export default function Stats(props) {

    

    return(
            <div className="stat">
                <img src={props.icon} alt={props.category}/>
                <p>{props.category}</p>
                <p>{props.score}<span>/100</span></p>
            </div>
    )
}