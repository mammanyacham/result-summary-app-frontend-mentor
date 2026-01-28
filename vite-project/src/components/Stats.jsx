

export default function Stats(props) {    
   return(
    <div className="stat" style={{backgroundColor: props.backgroundColor}}>
        <div>
            <img src={props.icon} alt={props.category}/>
            <p style={{color: props.color, }}>{props.category}</p>
        </div>
        
        <p className="score">{props.score} <span>/ 100</span></p>
    </div>
    )
}