import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate =useNavigate()
  
    const handleClick = () => {
        navigate('about')
    }
    return (
    <>    
        <div>
            Home Page
        </div>
        <button type='submit' onClick={handleClick}>Go to about</button>   

    </>
  )
}
