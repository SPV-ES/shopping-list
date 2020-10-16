import React,{Component} from 'react'
import './ListOfArticles.css'
import Articles from './Articles.js'

export default class ListOfArticles extends Component{
    // state = {
    //     articles: [
    //         {id:1, value:0},
    //         {id:2, value:2},
    //         {id:3, value:0},
    //         {id:4, value:0},
    //         {id:5, value:0}
    //     ]
    // }

    // handleDelete = (id) => {
    //     this.setState({
    //         articles: this.state.articles.filter(x => x.id !== id)
    //     })
    // }

    // addToCounter = art => {
    //     const articles = [...this.state.articles]
    //     const index = articles.indexOf(art)
    //     //articles[index] = {...art}
    //     articles[index].value++
    //     this.setState({articles: articles})
    // }

    // deleteFromCounter = art => {
    //     const articles = [...this.state.articles]
    //     const index = articles.indexOf(art)
    //     //articles[index] = {...art}
    //     if (articles[index].value > 0) articles[index].value--
    //     this.setState({articles: articles})
    // }    

    // reset(){
    //     const articles = this.state.articles.map(x=>{
    //         x.value = 0
    //         return x;
    //     })

    //     this.setState({
    //         articles
    //     })
    // }

    render(){
        return(
            <div className="ListOfArticles">
                <div style={{display:'inline'}}>
                    <button 
                        className="btn btn-primary" 
                        onClick={this.props.onReset}   
                    >Reset</button>
                </div>
                {this.props.articles.map(art =>
                    <Articles key={art.id} 
                            value={art.value}
                            onDelete={() => this.props.onDelete(art.id)} 
                            onAddToCounter={()=>this.props.onAddToCounter(art)}
                            onDeleteFromCounter={()=>this.props.onDeleteFromCounter(art)} 
                            // onSelect={() => this.handleDelete(art.id)} 
                            // onAddToCounter={()=>this.addToCounter(art)}
                            // onDeleteFromCounter={()=>this.deleteFromCounter(art)} 
                    />
                )}
            </div>
        )
    }
}