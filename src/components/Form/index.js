import React, { Component } from "react";
import "./styles.css";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import axios from 'axios';

const options = [
  ['pt', 'Português'],
  ['es', 'Español'],
  ['en', 'English']
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', lang: options[0][0]};
    this.optionList = options.map((option) =>
      <option key={option[0]} value={option[0]}>{option[1]}</option>
    );

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  }

  handleSelectChange(event) {
    this.setState({lang: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let input = this.state.input.trim();
    if (input === '') {
      alert('Por favor, insira o termo a ser pesquisado.');
      this.setState({input: ''});
    } else {
      axios.get(`/?${this.state.lang}+${this.state.input}`)
      .then((response)=> {
        console.log("Data submitted successfully", response);
      }).catch((error)=> {
        console.log("got error while posting data", error);
      });
    }
  }

  render() {
    return (
      <form id="box">
        <Input id="input" label="Buscar termo" value={this.state.value} onChange={this.handleInputChange} />
        <Select id="select" name="idioma" onChange={this.handleSelectChange}>{this.optionList}</Select>
        <Button onClick={this.handleSubmit}>Gerar vídeo</Button>
      </form>
    );
  }
}

export default Form;