import ChildB from './ChildB'
import ChildC from './ChildC'
function ChildA({Name, changeName}) {
  return (
    <div>
        {/* <ChildB Name={Name} changeName={changeName}/> */}
        <ChildC/>
    </div>
  )
}

ChildA.defaultProps={
    Name:"Manish"
}

export default ChildA