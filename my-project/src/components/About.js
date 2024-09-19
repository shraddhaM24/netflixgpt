import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            <p>About US</p>
            <User name={"Shraddha Mistry (function)"} />
            <UserClass name={"Shraddha Mistry (Class)"} location={"Mumbai (Class))"} />
        </div>
    )
};

export default About;