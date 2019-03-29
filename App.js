import React from 'react';
import { AppRegistry, TextInput, StyleSheet, Text, View, TouchableOpacity, ListView, Alert } from 'react-native';
// import console = require('console');


export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      name: '',
      attack: '',
      power: '',
      toggle: true,
      mentor: [
        {id: 1, name: 'Clayton', attack: 'Floss', power: `Spirit of Richard Simmons`}, 
        {id: 2,name: 'Hunter', attack: 'The Houdini',power: 'He Gone'},
        {id: 3,name: 'Isaiah', attack: 'Weasel Leg Kick',power: 'Weasel Speed'},
        {id: 4,name: 'Todd', attack: 'Being Lazy',power: 'Move Objects with his Mind'},
        ],
      battlers: [],
      fighterOne: '',
      fighterTwo: '',
      winner: 'The winner is Todd the peoples champion'

    }
  }
  handleName(val){
    this.setState({
      name: val
    })
  }
  handleAttack(val){
    this.setState({
      attack: val
    })
  }
  handlePower(val){
    this.setState({
      power: val
    })
  }
  handleMentor(){
    const { name, attack, power } = this.state
    this.setState({
      toggle: false,
      // mentor: this.state.mentor.push({name, attack, power})
    })
    console.log('hit handleMentor', this.state.mentor)
  }
  handleBattle = (i) => {
    console.log('hit handleBattle', i)
    if(this.state.fighterOne === ''){
      console.log(i)
     return this.setState({
        fighterOne: i
      })
    } else if(this.state.fighterTwo === ''){
      return this.setState({
        fighterTwo: i
      }) 
    } else {
          return null
        }

  }
  winnerB = () => {

    Alert.alert(`The winner is Todd our champion`)

  }
  mapped = () => {
    return mappedMentors = this.state.mentor.map(i => {
      console.log('what is i', i)
        return (
          <View key={i.id} style={styles.displayMentor}>
          <TouchableOpacity value={i} onPress={() => this.handleBattle(i.name)} style={styles.buttonMentor}>
          
            <Text style={styles.displayMentor}>{i.name}</Text>
            <Text>Attack: {i.attack}</Text>
            <Text>Power: {i.power}</Text>
            </TouchableOpacity>
          </View>
        )
    })
  }
  
  render() {
    // const mappedMentors = this.state.mentor.map(i => {
    //   return (
    //     <View>
    //       <Text>{i.name}</Text>
    //       <Text>{i.attack}</Text>
    //       <Text>{i.power}</Text>
    //     </View>
    //   )
    // })
    console.log('this.state', this.state)
    if( this.state.toggle === true){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {this.setState({toggle: !this.state.toggle})}}>
        <Text>Battle Zone</Text>
      </TouchableOpacity>
        <Text style={styles.title}>Welcome to Mentor Battles</Text>
        <TextInput
        style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.text}
        placeholder={'Name'}
      />
      <TextInput
        style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(attack) => this.setState({attack})}
        value={this.state.text}
        placeholder={'Special Attack'}
      />
      <TextInput
        style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(power) => this.setState({power})}
        value={this.state.text}
        placeholder={'Super Power'}
      />
      <TouchableOpacity style={styles.button} onPress={() => {this.handleMentor()}}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      </View>
    );
    }
    else {
      return(
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {this.setState({toggle: !this.state.toggle})}}>
        <Text>Add Mentor</Text>
      </TouchableOpacity>
        
        <Text style={styles.battle}>Battle Arena</Text>
        <View>
          <Text style={styles.title}>Battler One</Text>
          <Text style={styles.name}>{this.state.fighterOne}</Text>
          <Text style={styles.title}>Battler Two</Text>
          <Text style={styles.name}>{this.state.fighterTwo}</Text>
          <TouchableOpacity style={styles.button} onPress={this.winnerB}><Text>Battle</Text></TouchableOpacity>
        </View>
        
        
        {this.mapped()}


      </View>
      )}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 100,
    padding: 10,
    margin: 10
  },
  buttonMentor: {
    alignItems: 'center',
    width: 200,
    backgroundColor: '#00ff00',
    padding: 10,
    margin: 10,
    fontSize: 20
  },
  name: {
    fontSize: 40,
    color: '#00ff00'
  },
  battle: {
    fontSize: 60,
    color: '#0000cc'
  },
  title: {
    fontSize:20
  },
  displayMentor: {
    fontSize:20
  }
});
