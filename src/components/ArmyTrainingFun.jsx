import {useState} from 'react'
const HOCFun = (Person) =>{
    
    function ArmyTrainingFun() {
        const [gunShots, setgunShots]=useState(0)

        const handleGunShots=()=>{
            setgunShots(gunShots+1)
        }

        return (
            <Person
                hocGunName="AKM"
                hocHandleGunShots={handleGunShots}
                hocGunShots={gunShots}
            />
        )
    }
    return ArmyTrainingFun
}
export default HOCFun