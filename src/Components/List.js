import React from 'react';
import '../List.css'

class List extends React.Component{
    render() {
        return(
            <div>
                <input type={"text"} placeholder={"Find with name or phone"}/>
            </div>
        );
    }
}

export default List;