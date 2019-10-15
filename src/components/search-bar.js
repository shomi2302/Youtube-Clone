import React, { Component } from 'react';
import {TextField,Paper} from '@material-ui/core'


class SearchBar extends Component {
  state = {
    inputData:''
  }
  handleChange = (e) => {
    this.setState({inputData:e.target.value})
  }
  handleSubmit = (e) => {
    let {submitForm} = this.props
    let {inputData} = this.state
    e.preventDefault()
    submitForm(inputData)
  }
  render() {
    const {inputData} = this.state
    return (
      <Paper elevation={6} style={{padding:"0 20px",margin:"20px 0"}}>
        <form onSubmit={this.handleSubmit}>
          <TextField
             value={inputData}
             onChange={this.handleChange}
             id="standard-name"
             label="Youtube Search"
             margin="normal"
             style={{width:"100%", paddingBottom:"10px"}}
           />
       </form>
      </Paper>
    );
  }

}

export default SearchBar;
