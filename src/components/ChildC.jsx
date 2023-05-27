import { useEffect } from "react"
import { useContext} from "react"
import { useState} from "react"
import { FirstName } from '../App'
function ChildC() {

    // here below i have used three hooks  useContext, useState and useEffect
    const [num, setNum] = useState(0)
    const fname = useContext(FirstName)
    const increment = ()=>{
        setNum(num + 1) 
    }
    useEffect(()=>{
        document.title="Clicked "+num+" times"
    })
    return (
        <>
            <h1> My name is {fname} with count {num} </h1>
            <button onClick={increment} type="button">Click me</button>
        </>
    )
}
export default ChildC