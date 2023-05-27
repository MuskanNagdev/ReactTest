import { useContext } from 'react'
import {useState} from 'react'
import {FirstName} from '../App'
function ChildB() {
 
//   const [text, setText]=useState('')
//   const handleText= (e)=>{
//     console.log(e.target.value)
//     setText(e.target.value)
//   }

//   const onSubmit =(e) =>{
//     console.log(text)
//     changeName(text)
    
//   }


  const fname = useContext(FirstName)

  return (
        <>
            <FirstName.Consumer>
                {/* <input type="text" onChange={handleText} value={text}/>
                <button onClick={onSubmit}>Change</button> */}
                {(fname) =>{
                   return <h1> {fname} is defined with context </h1>
                }}
            </FirstName.Consumer>
        </>    
  )
}

export default ChildB