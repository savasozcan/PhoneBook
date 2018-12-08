import React from 'react';
import PropTypes from 'prop-types';
import '../List.css'

class List extends React.Component{
    constructor() {
        super();
        this.onChangeFilterText = this.onChangeFilterText.bind(this)
    }

    static propTypes = {
        contacts: PropTypes.array.isRequired,
    }

    state = {
        filterText: ''
    }

    onChangeFilterText(e) {
        this.setState({
           filterText: e.target.value
        });
    }

    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )

        return(
            <div>
                <input type={"text"} value={this.state.filterText} onChange={this.onChangeFilterText} placeholder={"Filter by name or phone"}/>
                <ul className="list">
                    {
                        filteredContacts.map(contact =>
                            <li key={contact.phone}>
                                <span className={"name"}>{contact.name}</span>
                                <span className={"phone"}>{contact.phone}</span>
                                <span className={"clearfix"}></span>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;