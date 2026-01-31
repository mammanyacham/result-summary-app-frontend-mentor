import data from "/src/data.json"
import Stats from "./Stats"

export default function Result() {

    

    const categories = data.map(dat => 
    <Stats 
        icon={dat.icon}
        category={dat.category}
        score={dat.score}
        color={dat.color}
        backgroundColor={dat.backgroundColor}
        key={dat.category}
    />)

    return (
        <div className="container">

            <section className="result-section">
                <h1>Your Result</h1>
                <div className="overall-score">
                    <span className="overall-score-span">76</span>
                    <span className="percent">of 100</span>
                </div>
                <p className="great">Great</p>
                <p className="note">You scored higher than 65% of the people who have taken these tests.</p>
            </section>


            <section className="summary-section">
                <div className="h2-div">
                    <h2>Summary</h2>
                </div>
                
                     {categories}
                    <div className="button-div">
                        <button>Continue</button>  
                    </div>
            </section>
            
        </div>
    )
}