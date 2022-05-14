import React, { useState } from 'react'

const MainAddRemoveEdit = () => {
    const [serviceList, setServiceList] = useState([{ service: "" }])
    console.log("Values", serviceList)
    const handleServiceAdd = () => {
        setServiceList([...serviceList, { service: "", }])
    }
    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1)
        setServiceList(list)
    }
    const handleServiceChange = (e, index) => {
        console.log(e)
        const { name, value } = e.target
        const list = [...serviceList];
        list[index][name] = value
        setServiceList(list)

    }
    return (
        <form autoComplete="off">
            <label>Services(s)</label>
            {serviceList.map((singleService, index) => (
                <div key={index}>
                    <input type="text"
                        name="service"
                        id="service"
                        required
                        value={singleService.service}
                        onChange={(e) => handleServiceChange(e, index)}
                    />
                    {serviceList.length - 1 === index && serviceList.length < 4 &&
                        <button onClick={handleServiceAdd}>Add a service</button>

                    }
                    {serviceList.length > 1 ?
                        <button onClick={() => handleServiceRemove(index)} >Remove</button>

                        : null}
                    {serviceList.map((singleService, index) => (
                        <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                        </ul>
                    ))}
                </div>

            ))
            }


        </form >
    )
}

export default MainAddRemoveEdit