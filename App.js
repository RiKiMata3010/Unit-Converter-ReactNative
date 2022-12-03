//Phoenix Armand Ani
//101336759

import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MainScreen({navigation}) {
//Variables for Switching
const [enabled, setEnabled] = useState(true)
const [text, setText] = useState('Press to Switch Units')
let squarefeet = input0 * 10.76
const toggle = () =>{
  if(enabled) {
    setText("Square Meters")
  }else{
    setText("Square Feet")
  }
  setEnabled(previousState => !previousState)
  
}
//Variables for Pricing
const [input0, setInput0] = useState('');
const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
//flooring = size*flooring_price
//installation = size*installation_cost
//total_cost= flooring+installation
let flooring = input0  * input1
let installation = input0 * input2
let totalcost = flooring + installation
let metertotalcost = meterflooring + meterinstallation
let meterflooring = flooring * 10.76
let meterinstallation = installation * 10.76
let taxes = totalcost * 0.13
let metertaxes = metertotalcost * 0.13
let overall = totalcost + taxes


  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Switch
        onValueChange={toggle}
        value={enabled}
        
      />
      <Text>Enter Size of the Room in Square Meters</Text>
      <TextInput style={styles.input}
        keyboardType=''
        placeholder={enabled ? 'Square Feet' : 'Square Meters'}
        onChangeText={(value) => setInput0(value)}
        
      />
      <Text>Square {enabled ? "Feet " + input0*10.76 : "Meters " + input0}</Text>
      <Text>------------------------</Text>
      <Text>Price Per Unit of Flooring</Text>
      <TextInput style={styles.input}
        keyboardType=''
        placeholder='$'
        onChangeText={(value) => setInput1(value)}/>
      <Text>Flooring Price in {enabled ? "Square Feet $" + flooring : "Square Meters $" + meterflooring}</Text>
      <Text>------------------------</Text>
      <Text>Price Per Unit of Installation</Text>
      <TextInput style={styles.input}
        keyboardType=''
        placeholder='$'
        onChangeText={(value) => setInput2(value)}
      />
      <Text>Installation Price in {enabled ? "Square Feet $" + installation : "Square Meters $" + meterinstallation}</Text>
      <Text>...</Text>

      <Text>Total Before Tax in {enabled ? "Square Feet $" + totalcost : "Square Meters $" +  totalcost*10.76}</Text>
      <Text>Taxes in {enabled ? "Square Feet $" + taxes : "Square Meters $" + taxes*10.76}</Text>
      <Text>Overall Price in {enabled ? "Square Feet $" + overall : "Square Meters $" + overall*10.76}</Text>



      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
    </View>

  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Student Name : Phoenix Armand Ani</Text>
      <Text>Student ID : 101336759</Text>
      <Text></Text>
      <Button title="Go Back to Home" onPress={() => navigation.navigate('Main')} />
      <Text></Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Main" component={MainScreen} options={{ title:'Main Screen' }} 
        />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1, 
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
    
  }
});

export default App;
