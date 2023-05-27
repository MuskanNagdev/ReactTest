import { Component } from "react"

const HOC = Person =>{
    class newPerson extends Component{
        state={
            gunShots:0    
        }
        //if we write arrow function then we don't need to use binding
        handleGunShots=()=>{
            this.setState({gunShots:this.state.gunShots+1})
        }
        render(){
            return(
                <Person
                    hocGunName="AK47"
                    hocHandleGunShots={this.handleGunShots}
                    hocGunShots={this.state.gunShots}
                />
            );
        }
    }
    return newPerson
}

export default HOC