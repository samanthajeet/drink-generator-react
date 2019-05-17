import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";
import axios from 'axios'

const Cabinet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid black;
`;

const CabinetInput = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const types = [
  { label: "hard alcohol", value: "hard alcohol" },
  { label: "liqueur", value: "liqueur" },
  { label: "syrup", value: "syrup" },
  { label: "garnish", value: "garnish" },
  { label: "aperitif", value: "aperitif" }
];

const customStyles = {
    option: (provided, state) => ({
      ...provided,
    //   borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: '10rem',
      height: '2rem',
      display: 'flex',
      border: '1px solid black'
    }),

  }

class AddtoCabinet extends Component {
  state = {
    userInputName: "",
    userInputType: "",
    cabinet: []
  };

  componentDidMount(){
      this.getCabinet()
  }

  getCabinet(){
    axios.get(`/api/cabinet`).then(response => this.setState({cabinet: response.data}))
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  addToCabinet = async() => {
    const ingredient_name = this.state.userInputName
    const ingredient_type = this.state.userInputType
    let response = await axios.post(`/api/addToCabinet`, {ingredient_name, ingredient_type})  
    this.setState({userInputName: '', userInputType:'select type', cabinet: response.data})
  }

  render() {

    const mappedCabinet = this.state.cabinet.map( item => {
        return (
            <div key={item.id}>
                <p>{item.ingredient_name}</p>
            </div>
        )
    })

    return (
      <Cabinet>
        <h1>your cabinet</h1>
        <CabinetInput>
          <input
            placeholder="add to your cabinet"
            onChange={e => this.handleChange("userInputName", e.target.value)}
            value={this.state.userInputName}
          />
          <Select
            options={types}
            onChange={e => this.handleChange("userInputType", e.value)}
            styles={customStyles}
          />
        </CabinetInput>
        <button onClick={() => this.addToCabinet()} >add item</button>
        {mappedCabinet}
      </Cabinet>
    );
  }
}

export default AddtoCabinet;
