import React, { Component } from 'react';

class Form extends Component{
    render() {
        return(
            <div>
                <input type={"text"} name={"name"} id={"name"} placeholder={"Enter a name"}/>
                <input type={"tel"} name={"phone"} id={"phone"} placeholder={"Enter a phone"}/>
                <button className={"btn"}>Add</button>
            </div>
        );
    }
}

export default Form;