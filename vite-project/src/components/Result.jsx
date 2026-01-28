import data from "/src/data.json"
import Stats from "./Stats"

export default function Result() {

    

    const categories = data.map(dat => 
    <Stats 
        icon={dat.icon}
        category={dat.category}
        score={dat.score}
        key={dat.category}
    />)

    return (
        <div className="container">
            <div className="result">
                <h1>Your Result</h1>
                <div className="score">
                    <span>76</span>
                    <span>of 100</span>
                </div>
                <p>Great</p>
                <p>you scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className="summary">
                <h1>Summary</h1>
                {categories}
                <button>Continue</button>  
            </div>
        </div>
    )
}