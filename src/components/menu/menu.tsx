import React, { Component } from 'react'
import './menu.css'
import { NavLink } from 'react-router-dom'

export class Menu extends Component {
    public render(): JSX.Element {
        return (
            <div className="menu">

                <NavLink to="/home" exact>Home</NavLink>
                <NavLink to="/products" exact>Products</NavLink>
                <NavLink to="/about" exact>About</NavLink>

            </div>
        )
    }
}