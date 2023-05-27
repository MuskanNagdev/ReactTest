
function CounterClick(props) {
  return (
    <div>
        <button onClick={props.increment}>
            Clicked me {props.count} times
        </button>
    </div>
  )
}

export default CounterClick