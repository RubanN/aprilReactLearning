import React, { useState } from "react";
import "./style.css"
const data = [
    {
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 3,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 4,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 5,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 6,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    },
    {
        "id": 7,
        "name": "sand dollar",
        "year": 2006,
        "color": "#DECDBE",
        "pantone_value": "13-1106"
    },
    {
        "id": 8,
        "name": "chili pepper",
        "year": 2007,
        "color": "#9B1B30",
        "pantone_value": "19-1557"
    },
    {
        "id": 9,
        "name": "blue iris",
        "year": 2008,
        "color": "#5A5B9F",
        "pantone_value": "18-3943"
    },
    {
        "id": 10,
        "name": "mimosa",
        "year": 2009,
        "color": "#F0C05A",
        "pantone_value": "14-0848"
    },
    {
        "id": 11,
        "name": "turquoise",
        "year": 2010,
        "color": "#45B5AA",
        "pantone_value": "15-5519"
    },
    {
        "id": 12,
        "name": "honeysuckle",
        "year": 2011,
        "color": "#D94F70",
        "pantone_value": "18-2120"
    },
    {
        "id": 13,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 14,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 15,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 16,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 17,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 18,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    },
    {
        "id": 19,
        "name": "sand dollar",
        "year": 2006,
        "color": "#DECDBE",
        "pantone_value": "13-1106"
    },
    {
        "id": 20,
        "name": "chili pepper",
        "year": 2007,
        "color": "#9B1B30",
        "pantone_value": "19-1557"
    },
    {
        "id": 21,
        "name": "blue iris",
        "year": 2008,
        "color": "#5A5B9F",
        "pantone_value": "18-3943"
    },
    {
        "id": 22,
        "name": "mimosa",
        "year": 2009,
        "color": "#F0C05A",
        "pantone_value": "14-0848"
    },
    {
        "id": 23,
        "name": "turquoise",
        "year": 2010,
        "color": "#45B5AA",
        "pantone_value": "15-5519"
    },
    {
        "id": 24,
        "name": "honeysuckle",
        "year": 2011,
        "color": "#D94F70",
        "pantone_value": "18-2120"
    }
];
const ReactArray = () => {
    // const [addValue, setAddValue] = useState('')
    // const 

    return (
        <div className="App">
            <a href="https://www.cluemediator.com">Clue Mediator</a>
            <div className="box-container">
                {data.map((d, i) => {
                    return (
                        <div key={i} className="box" style={{ backgroundColor: d.color }}>
                            <b>Name:</b>{d.name}<br />
                            <b>Year: </b>{d.year}<br />
                            <b>Color: </b>{d.color}<br />
                            <b>Pantone value: </b>{d.pantone_value}<br />
                            <input
                                type="text"
                                name="addValue"
                                placeholder="add some content"
                            // value={addValue}
                            // onChange={handleInput}

                            />
                            <button>Add</button>
                            <button>remove</button>
                        </div>
                    )
                })}
                <div className="clearboth"></div>
            </div>
        </div>
    )
};

export default ReactArray;
