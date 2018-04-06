import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        const newSearch = e.target.value;
        this.setState({search: newSearch});
    };
    render() {
        return (
                <Row className='search'>
                    <i className="fab fa-instagram fa-lg"></i> 
                    <div className='pipe'>|</div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png' alt='Instagram name in cursive' className='name'/>

                    <div className='inputWithIcon'>
                        <input type='text' placeholder='Search' />    
                    </div>

                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </Row>
        )
    }
}

export default SearchBar;
