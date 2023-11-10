import React, { Component } from 'react'
import Any from './Any'

export default class Class extends Component {
    state= {
        name:"Matrical"
    }
  render() {
    return (
      <div>
        <center>
            <Any name={this.state.name}/>
           
        </center>
      </div>
    )
  }
}
