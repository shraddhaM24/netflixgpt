import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                {/* <User name={"Shraddha Mistry (function)"} /><br/><hr/> */}
                <UserClass name={"First"} location={"Mumbai (Class))"} />
                {/* <UserClass name={"Second"} location={"Mumbai (Class))"} />
                <UserClass name={"Third"} location={"Mumbai (Class))"} /> */}
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

/* Mounting
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

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update -> when component will be remove i.e go to some other page
 *
 *
 *
 *
 */

export default About;