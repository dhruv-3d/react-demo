import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { QueLabel, AnsInput} from './helper';

class FormCompo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      que: [
        'What are you?',
        'Seriously?',
        "Can't you be a butterfly?",
        'Then what about a turtle?',
      ],
      index: 0
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {index: prevState.index + 1};
    });
  }

  render(){
    const ques = this.state.que;
    const i = this.state.index;
    console.log("aaa:",i);
    return(
      <div className="form-compo">
        <Link to="/">Go to Login page</Link>
        <center>
          <div className="form-body">
            <QueLabel question={ques[i]}/>
            <AnsInput answer/>
            <Button onClick={this.handleClick} variant="raised">
              <i className="material-icons">navigate_next</i>
            </Button>
          </div>
        </center>
      </div>
    );
  }
}

export default FormCompo;