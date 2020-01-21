import React, { Component } from 'react'
import "./layout.css"
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Menu } from '../menu/menu'
import { Home } from '../home/home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Products } from '../products/products'
import { About } from '../about/about'
import { PageNotFound } from '../page-not-found/page-not-found'
import Details from '../details/details'

export class Layout extends Component {
    public render(): JSX.Element {
        return (
            <div className="layout">
                <BrowserRouter>
                    <header>
                        <Header></Header>
                    </header>
                    <aside>
                        <Menu></Menu>
                    </aside>
                    <main>
                        <Switch>
                            <Route path="/home" component={Home} exact />
                            <Route path="/products" component={Products} exact />
                            <Route path="/products/:prodID" component={Details} exact />
                            <Route path="/about" component={About} exact />
                            <Redirect from="/" to="/home" exact />
                            <Route component={PageNotFound} />
                        </Switch>
                    </main>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </BrowserRouter>
            </div>
        )
    }

}