import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MainScreen({navigation}) {
const [input0, setInput0] = useState('');
const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');

//flooring = size*flooring_price
//installation = size*installation_cost
//total_cost= flooring+installation
let flooring = input0  * input1
let installation = input0 * input2
let totalcost = flooring + installation
let taxes = totalcost * 0.13
let overall = totalcost + taxes
  return (
    <View style={styles.container}>
      <Text>Enter Size of the Room</Text>
      <TextInput style={styles.input}
        keyboardType=''
        placeholder='inches'
        onChangeText={(value) => setInput0(value)}
      />
      <Text>------------------------</Text>
      <Text>Price Per Unit of Flooring</Text>
      <TextInput style={styles.input}
        keyboardType=''
        placeholder='$'
        onChangeText={(value) => setInput1(value)}/>
      <Text>Flooring Price :${flooring}</Text>
      <Text>------------------------</Text>
      <Text>Price Per Unit of Installation</Text>
      <TextInput style={styles.input}
        keyboardType=''
        placeholder='Price Unit per Installation'
        onChangeText={(value) => setInput2(value)}
      />
      <Text>Installation Price :${installation}</Text>
      <Text>...</Text>

      <Text>Total Price Before Tax : ${totalcost}</Text>
      <Text>Taxes : ${taxes}</Text>
      <Text>Overall Price : ${overall}</Text>



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
