import { useState, useEffect, useRef } from "react";

export const FirstUseRef = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>

        </div>
    )
}
export const SecondRef = () => {
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus()
    }
    return (
        <>
            <input
                type="text"
                ref={inputElement}
            />
            <button onClick={focusInput}>Focus</button>
        </>
    )
}
export const ThridRef = () => {
    const countRef = useRef(0);
    const handle = () => {
        countRef.current++
        console.log(`Clicked ${countRef.current} times`);

    }
    console.log("I Rendered")

    return (
        <>
            <button onClick={handle}>Count</button>
        </>
    )
}
export const Stopwatch = () => {
    const timerRef = useRef(0);
    const [count, setCount] = useState(0)

    const startHandler = () => {
        if (timerRef.current) {
            timerRef.current = setInterval(() => setCount(c => c + 1), 1000)
        }
    }
    const stopHandler = () => {
        clearTimeout(timerRef.current);
        timerRef.current = 0
    }
    useEffect(() => {
        return () => clearInterval(timerRef.current)
    }, [])
    return (
        <>
            <div>Timer: {count}s</div>

            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>

        </>
    )
}
export const AccessingElement = () => {
    const elementRef = useRef();
    useEffect(() => {
        const divElemenet = elementRef.current;
        console.log(divElemenet)
    }, [])
    return (
        <>
            <div ref={elementRef}>
                I'm an element

            </div>
        </>
    )
}
export const InputFocus = () => {
    const inputFocus = useRef();
    useEffect(() => {
        inputFocus.current.focus()
    }, [])
    return (
        <input ref={inputFocus} type="text"></input>
    )
}
export const InputFocusEmpty = () => {
    const inputRef = useRef();
    useEffect(() => {
        //Logs HTMLELEMENT
        console.log(inputRef.current)
        inputRef.current.focus()
    }, [])
    // Logs `undefined` during initial rendering
    console.log(inputRef.current);
    return (
        <>
            <input ref={inputRef} type="text" />
        </>
    )
}
export const FocusPoint = () => {
    // Creating a ref object using useRef hook
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value = "Hey ruban how is your learning is going on "
        focusPoint.current.focus()
    }
    return (
        <>
            <button onClick={onClickHandler}>ACTION</button>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint}>

            </textarea>
        </>
    )
}
export const Component = () => {
    const inputRef = useRef(null)
    const focusInput = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
export const Updates = () => {
    const inputUpdate = useRef(0);
    const [text, setText] = useState('');

    const handleCount = () => {
        inputUpdate.current++
        console.log(inputUpdate)

    }

    return (
        <>
            <button onClick={handleCount}>Click</button>
        </>
    )
} 
