import React, {Component} from 'react';

import { connect } from 'react-redux';

import {activateGeod,closeGeod,submitValue} from './redux';

// App.js
export class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
   }
    
    onClick1()
    {
        alert("hi")
        
        this.props.activateGeod({ title: 'I am a geo dude!' })
        
    }
    onClick2()
    {
         alert("hi2")
       this.props.closeGeod({ title: 'Exit!' }); 
        
    }
    inputValue(e)
    {
        //console.log(e.target.value)
         this.setState({value:e.target.value});
        
        
    }
    
    valueSubmmit()
    {
        alert(this.state.value)
        this.props.submitValue({itemList:this.state.value})
        
    }
    
    

  render() {
    return (
      <div>

        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ?
          <button onClick={this.onClick2.bind(this)}>
            Exit Geod
          </button> :
          <button onClick={this.onClick1.bind(this) }>
            Click Me!
          </button>
       }
       
       <input type="text" name="list"  onChange={this.inputValue.bind(this)} />
           <button onClick={this.valueSubmmit.bind(this)}>Add</button>

    <span>{this.props.item.itemList}</span>

      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
  item:state.item
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
  submitValue,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
