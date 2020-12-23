import React, { Component } from 'react'

class TopForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            title: '',
            author: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
    }

    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }

    render () {
        const {title} = this.state
        const {author} = this.state
        return (
        <div>
            <h1>This Data will be sent to Google Sheets</h1>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <form onSubmit={this.handleSubmit}>
            <p><input type='text' placeholder='Title' name='title' onChange={this.handleInputChange} /></p>
            <p><input type='text' placeholder='Your Name' name='author' onChange={this.handleInputChange} /></p>
            <p><button>Send Data</button></p>
            </form>
        </div>
        )
    }
}

export default TopForm