import React,{Component} from 'react'
import './Articles.css'

export default class ListOfArticles extends Component{
    // addToCounter = () => {
    //     const {counter} = this.state;
    //     this.setState({
    //         counter: counter + 1
    //     });
    // }

    // deleteFromCounter = () =>{
    //     this.setState({
    //         counter: (this.state.counter===0)? 0 : (this.state.counter - 1)
    //     });
    // }

    // deleteArticle = () =>{
    //     //raise event to the parent
    // }
    render(){
        return(
            <div className="Articles">
                <div className="Article-Counter">
                    <div className={this.getArticleCounterClasses()}>{this.formatCounter()}</div>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={this.props.onAddToCounter}>+</button>
                <button className="btn btn-secondary btn-sm" onClick={this.props.onDeleteFromCounter}>-</button>
                <div className="btn btn-danger" onClick={this.props.onDelete}>Delete</div>
            </div>
        )
    }

    formatCounter(){
        const {value} = this.props;
        return (value=== 0)? 'zero':value;
    }

    getArticleCounterClasses() {
        let classes = "badge"
        classes += (this.props.value === 0) ? " badge-warning" : " badge-primary"
        return classes
    }
}