import React from 'react';
import { InputLabel, Input } from '@material-ui/core';

var response = {}

function QueLabel(props) {
  var que = props.question;
  return <InputLabel className="question fi">{props.question}</InputLabel>
}

function AnsInput(props) {
  return <Input type="text" onChange={(e) => e.target.value}  className="answer fi"/>
}

function handleAns(event) {

}


export {
  QueLabel,
  AnsInput
}