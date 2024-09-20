import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{

    constructor(props) {
        super(props)
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Mount");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
                <p>About US</p>
                {/* <User name={"Shraddha Mistry (function)"} /><br/><hr/> */}
                <UserClass name={"First"} location={"Mumbai (Class))"} />
                <UserClass name={"Second"} location={"Mumbai (Class))"} />
                <UserClass name={"Third"} location={"Mumbai (Class))"} />
            </div>
        )
    }
}

// const About = () =>{
//     return (
//         <div>
//             <p>About US</p>
//             <User name={"Shraddha Mistry (function)"} /><br/><hr/>
//             <UserClass name={"Shraddha Mistry (Class)"} location={"Mumbai (Class))"} />
//         </div>
//     )
// };

/*
    - Parent Constructor
    - Parent render
        - First constructor
        - First render

        - Second constructor
        - Second render

        <DOM update - in single batch>
        - First Mount
        - Second Mount
    - Parent Mount
*/

export default About;