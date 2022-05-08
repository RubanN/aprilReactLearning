import React, { useState, useEffect } from 'react'

const ReactSearchFilter = () => {
    const itemList = [
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
        "Peanuts",
        "Butter",
        "Tomato"
    ];
    const [filteredList, setFilteredList] = useState(itemList);
    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value
        // Create copy of item list
        let updateList = [...itemList];
        // Include all elements which includes the search query
        updateList = updateList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updateList);
    }
    return (
        <div className="App">
            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            < div id="item-list" >
                <ol>
                    {filteredList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>

            </ div>
        </div>
    )
}

export default ReactSearchFilter
