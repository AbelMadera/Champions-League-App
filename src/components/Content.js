import React, { useState } from "react";
import "../App.css"
import GameResults from "./GameResults"
import Standings from "./Standings"

const Content = () => {

    const [active, setActive] = useState(true);

    return (
        <div className="content-container">
            <div className="tabs">
                <div className="tab-leagues" onClick={() => setActive(true)}>
                    <h2 style={{ color: active ? "blue" : null }}>Game Results</h2>
                </div>
                <div className="tab-standings" onClick={() => setActive(false)}>
                    <h2 style={{ color: !active ? "blue" : null }}>Standings</h2>
                </div>
            </div>

            {active ? <GameResults /> : <Standings />}
        </div>
    )
}

export default Content