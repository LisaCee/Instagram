import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
                    <i class="fab fa-instagram fa-lg"></i> 
                    <div className='pipe'>|</div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png' alt='Instagram name in cursive' className='name'/>

                    <div className='inputWithIcon'>
                        <input type='text' placeholder='Search' />
                        <span><i class="fab fa-instagram fa-lg"></i> </span>    
                    </div>

                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </Row>
        )
    }
}

export default SearchBar;
