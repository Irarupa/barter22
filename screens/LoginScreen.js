import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import * as Permissions from 'expo-permissions';
import firebase from "firebase"
import db from "../config"


export default class Loginscreen extends React.Component {
  constructor(){
    super()
    this.state={
        emailId:'',
        password:'',
        isModalVisible:'false',
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
        confirmPassword:'',
    }
}

userLogIn=(email,password)=>{
firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
    return (
        alert("successfully logged in")
    )
}).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    return alert(errorMessage)
})
}
  userSignup=(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
        return Alert.alert("user added successfully")
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
  })
  }
  render() {
       return(
        <View>
        <TextInput
        style={styles.inputBox}
        placeholder="Enter your E-mailId"
        keyboardType={"email-address"}
        onChangeText={(text)=>{
          this.setState({
              emailId:text
          })
         }}
        />
        <TextInput
        style={styles.inputBox}
        placeholder="Enter your password"
        secureTextEntry="true"
        keyboardType={"password"}
        onChangeText={(text)=>{
          this.setState({
              password:text
          })
         }}/>

        <TouchableOpacity style={styles.registerButton}onPress={()=>{
        this.userLogIn(this.state.emailId,this.state.password)
                }}>
        <Text style={styles.buttonText}>Login</Text></TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>signup</Text>
          </TouchableOpacity>  

        </View>  
     
       ) 
        } 
        
      
      }
  
  const styles=StyleSheet.create({
    scanButton:{
      backgroundColor:"lightblue",
      margin:10,
      padding:10,
      width: "30%",
      height: 60,
      borderRadius: 10
      
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    buttonText:{
      textAlign:"center",
      color:"black",
      fontWeight: "bold",
      fontSize: 20
      
    },
    inputBox:{
      width: 200,
      height: 400,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },

    registerButton:{
      width:200,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:10,
      marginTop:30
    }
  })