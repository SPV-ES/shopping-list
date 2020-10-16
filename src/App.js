import React, {Component} from 'react'
import NavBar from './NavBar'
import ListOfArticles from './ListOfArticles.js'
import './App.css'

export default class App extends Component{
    state = {
        articles: [
            {id:1, value:0},
            {id:2, value:2},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:1}
        ]
    }

    handleDelete = (id) => {
        this.setState({
            articles: this.state.articles.filter(x => x.id !== id)
        })
    }

    handleAddToCounter = art => {
        const articles = [...this.state.articles]
        const index = articles.indexOf(art)
        //articles[index] = {...art}
        articles[index].value++
        this.setState({articles: articles})
    }

    handleDeleteFromCounter = art => {
        const articles = [...this.state.articles]
        const index = articles.indexOf(art)
        //articles[index] = {...art}
        if (articles[index].value > 0) articles[index].value--
        this.setState({articles: articles})
    }    

    handleReset = () => {
        const articles = this.state.articles.map(x=>{
            x.value = 0
            return x;
        })

        this.setState({
            articles
        })
    }

    render(){
        return(
            <div className="App">
                <NavBar totalCounter={this.totalCounter()}/>
                <ListOfArticles 
                    articles = {this.state.articles}
                    onAddToCounter = {(art) => this.handleAddToCounter(art)}
                    onDeleteFromCounter = {(art) => this.handleDeleteFromCounter(art)}
                    onReset = {this.handleReset}
                    onDelete = {(id) =>this.handleDelete(id)}
                />
            </div>
        )    
    }

    totalCounter(){
        let totalCounter = 0
        this.state.articles.map(art =>
            totalCounter += art.value
            );
        return totalCounter;
    }
}