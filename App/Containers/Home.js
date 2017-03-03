import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text
} = ReactNative
import { connect } from 'react-redux'

class Home extends Component {
  searchPressed(){
    this.props.fetchRecipes('bacon,cucmber,banana')
  }
  render() {
    return (
      <View style={{marginTop: 20}}>
        <View>
          <TouchableHighlight onPress={ () => this.searchPressed() }>
            <Text>Fetch Recipes</Text>
          </TouchableHighlight>
        <ScrollView>
        </ScrollView>
        </View>
      </View>
    )
  }
}
function mapStateToProps(state){
  return {
    searchedRecipes: state.searchedRecipes
  }
}
export default connect(mapStateToProps)(Home);
