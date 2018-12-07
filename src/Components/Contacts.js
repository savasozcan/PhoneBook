import React from 'react';
import List from './List'
import Form from './Form'

class Contacts extends React.Component{
    render() {
        return(
            <div>
                <List/>
                <ul className={"list"}>
                    <li>
                        <span className="name">Savaş Özcan</span>
                        <span className="phone">05684587588</span>
                        <span className="clearfix"></span>
                    </li>
                    <li>
                        <span className="name">Manuel Holmes</span>
                        <span className="phone">05487524875</span>
                        <span className="clearfix"></span>
                    </li>
                    <li>
                        <span className="name">James Buffat</span>
                        <span className="phone">05489635874</span>
                        <span className="clearfix"></span>
                    </li>
                </ul>
                <Form/>
            </div>
        );
    }
}

export default Contacts;