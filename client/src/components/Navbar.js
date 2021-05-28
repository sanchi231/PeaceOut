import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to='/'>Peace Out</Link>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto mr-3 mt-1 mb-1">
                        <li className="nav-item" key={'signup'}>
                            <Link className="nav-link" to='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}



export default Navbar