import { useState, useEffect } from "react";

export const UseEffetexamples = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((x) => x + 1)
        }, 1000)
    })
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    )
}
export const UseEffectExamples1 = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]) // <- add the count variable here
    console.log(count)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>

        </>
    )
}
export const UseEffectCleanUp = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((c) => c + 1)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <h1>I've rendered {count} times!</h1>
        </>
    )
}
export const User = () => {
    const [message, setMessage] = useState('Hi there, how are you?');
    useEffect(() => {
        console.log('trigger use effect hook');
        setTimeout(() => {
            setMessage("I'm fine, thanks for asking.");
        }, 1000)
    }, [])
    return (
        <>
            <h1>{message}</h1>
        </>
    )
}
export const ParentLifecycleDemo = () => {
    // Set up a piece of state, so that we have
    // a way to trigger a re-render.
    const [random, setRandom] = useState(Math.random());
    // Set up another piece of state to keep track of
    // whether the LifecycleDemo is shown or hidden
    const [mounted, setMounted] = useState(true);
    // This function will change the random number,
    // and trigger a re-render (in the console,
    // you'll see a "render!" from LifecycleDemo)
    const reRender = () => setRandom(Math.random())
    // This function will unmount and re-mount the
    // LifecycleDemo, so you can see its cleanup function
    // being called.
    const toggle = () => setMounted(!mounted);
    return (
        <>
            <button onClick={reRender}>Re-render</button>
            <button onClick={toggle}>Show/Hide LifecycleDemo</button>
            {mounted && <LifecycleDemo />}
        </>
    )
}
export const LifecycleDemo = () => {
    // Pass useEffect a function
    useEffect(() => {
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log('render!');
        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return () => console.log('unmount...')
    })
    return "I'm a lifecycle demo";

}
export const Top = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Top rendered");

    })
    return (
        <>
            <div onClick={() => setCount(count + 1)}>Top Level {count}
                <Middle />
            </div>
        </>
    )
}
export const Middle = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Middle rendered");
    });

    return (
        <div>
            <div onClick={() => setCount(count + 1)}>Middle Level {count}</div>
            <Bottom />
        </div>
    )
}
export const Bottom = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Bottom rendered");
    });
    return <div onClick={() => setCount(count + 1)}>Bottom Level {count}</div>;

}
export const ThreeCounts = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    useEffect(() => {
        console.log("count2 changed!");
    }, [count2]);

    return (
        <div>
            {count1} {count2} {count3}
            <br />
            <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
            <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
        </div>
    )
}
export const Demo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return (
        <>
            <PropChangeWatch a={count1} b={count2} />
            <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
        </>
    )
}
export const PropChangeWatch = ({ a, b }) => {
    useEffect(() => {
        console.log("value of 'a' changed to", a);

    }, [a]);
    return (
        <div>
            I've got 2 props: a={a} and b={b}
        </div>
    );
}
export const Reddit = () => {
    // Initialize state to hold the posts
    const [posts, setPosts] = useState([]);
    // effect functions can't be async, so declare the
    // async function inside the effect, then call it
    useEffect(() => {
        async function fetchData() {
            // Call fetch as usual
            const res = await fetch("https://www.reddit.com/r/reactjs.json")
            // Pull out the data as usual
            const json = await res.json();
            // Save the posts into state
            // (look at the Network tab to see why the path is like this)
            setPosts(json.data.children.map(c => c.data));
        }
        fetchData();

    }, [])
    return (
        <>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </>
    )
}
