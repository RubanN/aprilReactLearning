import React,{useState,useEffect} from 'react'


const useCounter =()=>{
    const [count,setCount] = useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    return [count,increment]
}
const Counter = () => {
    const[count,increment] = useCounter()

    useEffect(()=>{
        const handle = setInterval(()=>increment(),1000)
        return()=>{
            clearInterval(handle)
        }
    },[])
 
  return (
    <div>
        {count}
        <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter