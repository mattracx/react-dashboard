import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

class Navigation extends Component {
    render() {
        return <ul>
            <li><FontAwesomeIcon icon={faHome}/> Overview</li>
            <li><FontAwesomeIcon icon={faHome}/> Test2</li>
            <li><FontAwesomeIcon icon={faHome}/> Test3</li>
            <li><FontAwesomeIcon icon={faHome}/> Test4</li>
        </ul>
    }
};
export default Navigation;