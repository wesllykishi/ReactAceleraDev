import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import { onChange } from '../actions/index'
import { bindActionCreators } from 'redux'
import Highlighter from "react-highlight-words"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchString:""
    }
  }

  onchange(value){
    this.setState({
      searchString:value
    })

    this.props.onChange(value)
  }

  render() {
    const { listItems,valorBuscar } = this.props.reduce   

    return (
      <div className="App">
        <Navbar value={valorBuscar} onChange={(e) => this.onchange(e.target.value)} />
        <div className="container mt-10">
          <div className="row">
            {
              listItems.map((value,index) =>
                  <RecipeItem 
                    key={index}
                    title={valorBuscar ==="" ? value.title:
                    <Highlighter 
                      highlightClassName="title"
                      searchWords={[valorBuscar]} 
                      textToHighlight={value.title}
                      autoEscape={true} />}
                    href={value.href}
                    ingredients={value.ingredients === "" ? value.ingredients:
                      <Highlighter 
                      highlightClassName="ingredients"
                      searchWords={[valorBuscar]} 
                      textToHighlight={value.ingredients}
                      autoEscape={true} />}
                    thumbnail={value.thumbnail}
                  /> )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  reduce: store.itemReducers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onChange }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);
