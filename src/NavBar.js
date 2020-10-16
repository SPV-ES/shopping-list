import React,{Component} from 'react'
import './NavBar.css'

export default class NavBar extends Component{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span style={{color: 'white'}}>NavBar {this.props.totalCounter}</span>
            </nav>
        )
    }
}