import React from "react";
class Lsdemo extends React.Component
{
    constructor(props){
      super(props);
      this.state = {};
    }
    componentDidMount()
    {
      if(localStorage.getItem("uname"))
      {
        var a =localStorage.getItem("uname");
        this.setState({msg:"Data is :" +a});
      }
    }
    saveData()
    {
      var a = this.state.txt1;
      localStorage.setItem("uname",a);
      this.setState({msg:"Data Saved"});
    }
    getData()
    {
      if(localStorage.getItem("uname"))
      {
        var b = localStorage.getItem("uname");
        this.setState({msg:"Hi," +b});
      }
      else
      {
          this.setState({msg:"Data is not Availabe"})
      }
    }
    removeData()
    {
      localStorage.removeItem("uname");
      this.setState({msg:"Data Removed"});
    }
    render()
    {
      return(
        <>
        <h1>LocalStorage using Textbox</h1>
        {this.state.msg} <br />
        Name: <input type="text" onChange={(e) => this.setState({txt1:e.target.value})}/>
        <br />
        <button onClick = {this.saveData.bind(this)}>Save</button>
        <button onClick = {this.getData.bind(this)}>Get</button>
        <button onClick = {this.removeData.bind(this)}>Remove</button>

        </>
      )
    }
}

export default Lsdemo;
