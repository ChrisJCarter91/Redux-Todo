import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

import styled from 'styled-components';

const StyledInput = styled.div`
display: flex;
justify-content: center;
width: auto;
align-items: center;
margin-top: 20px;
`;

const newStyledDiv = styled.div`
border: 2px solid black;
`;

class Todo extends Component {

    toggleComplete(event) {
        this.props.toggleComplete(this.props.index);
    }

    render() {
        return (
            <newStyledDiv>
                <StyledInput>
                    <input 
                        type='radio'
                        onChange={this.toggleComplete.bind(this)} />
                    {this.props.todo.value}
             </StyledInput>
            </newStyledDiv>
        );
    }
}

export default connect(null, {toggleComplete })(Todo);