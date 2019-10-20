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
    let {submitForm,history} = this.props
    let {inputData} = this.state
    e.preventDefault()
    history.push('/')
    submitForm(inputData)
  }
  returnHome = () => {
    let {history} = this.props
    history.push('/')
  }
  render() {
    const {inputData} = this.state
    return (
      <div>
        <div className="header"><h1 onClick={this.returnHome}><b>Youtube Clone</b></h1></div>
        <Paper style={{padding:"0 20px",margin:"0 0"}}>
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
      </div>
    );
  }

}

export default SearchBar;
