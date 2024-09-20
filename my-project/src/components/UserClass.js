import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:2,
        }

        console.log(this.props.name+" constructor");
    }

    componentDidMount(){
        console.log(this.props.name+" Mount");
    }

    render(){
        console.log(this.props.name+" render");
        const {location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="user-card">
                {/* <h3>Count: {count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count increase</button>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1,
                    })
                }}>Count decrease</button>
                <h3>Count2: {count2}</h3>
                <h2>Name : {this.props.name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : shraddhamistry37@gmail.com</h4> */}
            </div>
        )
    }
}

export default UserClass;