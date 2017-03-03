import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { ActionCreators } from '../Actions'
import { bindActionCreators } from 'redux'

const {
  View,
  Text,
  TouchableHighlight
} = ReactNative

class AppContainer extends Component {
  // gets addrecipe action
  addRecipe(number){
    this.props.addReciper(number)
  }

  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          I am the App Container! Recipe Counter: {this.props.recipeCount}
        </Text>
        <TouchableHighlight onPress={() => {this.addRecipe(3) }}>
          <Text> Add Recipe </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    recipeCount: state.recipeCount
  }
}, mapDispatchToProps)(AppContainer);
