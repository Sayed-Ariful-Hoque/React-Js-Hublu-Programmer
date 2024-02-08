import React, {Component} from "react"

class About extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Sayed Ariful Hoque",
            age: "24",
            prof: "Content Creating"
            // prof: {
            //     prof1: "Web Devoloper",
            //     prof2: "Bagnass",
            // }

        }
    }

    ChangeValue(ab){
        this.setState(
            {
                prof: "Freelancing"
            }
        )
    }
    ChangMaind = this.ChangeValue.bind(this, this.ab)
    render(){
        return(
            <div>
                {/* <h1>My Name is {this.state.name} My Age is {this.state.age} my profaction is {this.state.prof.prof2}</h1> */}

                <h1>My propassion is {this.state.prof}</h1>
                <button onClick={this.ChangMaind}>Chang Prof</button>
            </div>
        )
    }
}

export default About








// import React, {Component} from "react";

// class About extends Component{
//     state = {
//         name: "Ariful",
//         age: "24",
//         prof: "Web Devoloper"

//     }
//     render(){
//         return(
//             <div>
//                 <h1>{"may Name is " + this.state.name + "My Older is " + this.state.age + " My Profession is " + this.state.prof }</h1>
//             </div>
//         )
//     }
// }

// export default About


// import React, {Component} from "react";
// import About from './About';
// class About extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>This is About page</h1>
//             </div>
//         )
//     }
// }

// export default About

