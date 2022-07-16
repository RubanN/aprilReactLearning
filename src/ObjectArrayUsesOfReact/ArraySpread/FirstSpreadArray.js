import React, { useState } from 'react'

const FirstSpreadArray = () => {
    const [items, setItems] = useState([])
    const updateList = () => {
        const newArra = [...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }]
        setItems(newArra)
    }
    return (
        <div>
            <button onClick={updateList}>Click</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}</ul>
        </div>
    )
}

export default FirstSpreadArray

export const SeondArray = () => {
    const [items, setItems] = useState([])
    const [friend, setFriend] = useState("ruban");
    const addFriendList = () => {
        if (!items.find((item) => item.name === friend)) {
            setItems([...items, { id: items.length, name: friend }])
        } else {
            alert(`${friend} is already addded`)
        }
    }
    return (
        <>
            <h1>ADD a friend list</h1>
            <input type="text"
                value={friend}
                onChange={(event) => setFriend(event.target.value)} />
            <button onClick={addFriendList}>Add friend</button>
            <ui>
                {items.map((x) => {
                    <li key={x.id}>{x.name}</li>
                })}
            </ui>
        </>
    )
}
export const ThridArray = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState('');
    const addItem = () => {
        console.log("Item", items, text)
        setItems([
            ...items, { id: items.length, name: text }
        ])
        setText("")

    }
    const deleteFunc = (index) => {
        const deleteItems = items.filter((x, index) => x == !x)
        setItems(deleteItems)
    }
    return (
        <div>
            <input
                value={text}
                onChange={(event) =>
                    setText(event.target.value)}
            />
            <button onClick={addItem}>Add friend</button>
            <ul>
                {items.map((item, index) => (
                    <li>{item.name}</li>

                ))}
            </ul>
            {items.length > 1 ? <button onClick={(index) => deleteFunc(index)}>Delete</button> : null}
        </div>


    )
}
export const FourArray = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState("")
    const addItem = () => {
        setItems([...items], {
            id: Math.floor(Math.random() * 10),
            value: text
        })

    }
    return (
        <div>
            <button onClick={addItem}>Add a Random Number</button>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <ul>
                {items.map((x) => (
                    <li key={x.id}>{x.value}</li>
                ))}
            </ul>
        </div>
    )
}
export const FiveArray = () => {
    const [state, setState] = useState([])
    const [arrArray, setArrArray] = useState([])
    const onChangeValue = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
        setArrArray(...prev => [...prev, state])
    }
    return (
        <>
            <form onSubmit={submit}>
                <input onChange={onChangeValue} />
                <button type="submit">Add value</button>

            </form >
            <div>
                <ul>
                    {arrArray.map(x => <li>{x}</li>)}
                </ul>
            </div>
        </>

    )
}
export const SixArray = () => {
    const friendsArray = [
        {
            name: "John",
            age: 19,
        },
        {
            name: "Candy",
            age: 18,
        },
        {
            name: "mandy",
            age: 20,
        },
    ];
    const [friends, setFriends] = useState(friendsArray); // Setting default value
    const [text, setText] = useState(""); //
    const handleAddFriend = (event) => {
        const { name, value } = event.target
        const newList = [...friends, {
            name: text,
            age: 20
        }]
        setFriends(newList)

    }
    return (
        <main>
            <ul>
                {/* Mapping over array of friends */}
                {friends.map((friend, index) => (
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                    </li>
                ))}
                <input type="text" value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button onClick={handleAddFriend}>Add Friends</button>

            </ul>
        </main>
    )
}
export const SevenArray = () => {
    const [items, setItems] = useState([]);
    // handle click event of the button to add item
    const addMoreItem = () => {
        setItems(prev => [...prev, {
            id: prev.length,
            value: getRandomNumber(),
        }])
    }
    const getRandomNumber = () => {
        return Math.random().toString().substring(2, 8)
    }
    return (
        <>
            <label>Output:</label>

            <button onClick={addMoreItem}>Add More</button>
            <pre>{JSON.stringify(items, null, 2)}</pre>

        </>
    )
}
export const EightArray = () => {
    // sample data structure
    const [data, setData] = useState([
        {
            id: 1,
            name: 'john',
            gender: 'm'
        },
        {
            id: 2,
            name: 'mary',
            gender: 'f'
        }
    ]);
    const updateArray = index => e => {
        setData(datas => ({
            ...datas,
            [index]: e.target.value
        }))
    }
    return (
        <>
            {data.map((item, index) => {
                <li key={item.name}>
                    <input type="text" name="name" value={item.name}
                        onChange={updateArray(index)}
                    />
                </li>
            })}

        </>
    )
}
