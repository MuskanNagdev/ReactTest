import HOCFun from "./ArmyTrainingFun"
function Sanjay(props) {
  return (
    <div>
        <h3 onMouseOver={props.hocHandleGunShots}>
            Sanjay {props.hocGunName} Gunshots : {props.hocGunShots}
        </h3>
    </div>
  )
}

export default HOCFun(Sanjay)