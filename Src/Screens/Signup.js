import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';




const Signup = (props) => {

const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>
      <Image style={styles.bg} source={require('../Assets/images.jpg')} />

      <View style={styles.container1}>
        <View style={styles.s1}>
          <Text style={styles.h1}>Welcome To TaskManager</Text>
          <Text style={styles.h2}>For updating work</Text>
        </View>

        <View style={styles.s2}>
          <Text style={styles.headtxt}>Sign up</Text>

          <Text style={styles.small}>Create a new account to Continue</Text>
          <View style={styles.formgroup}>
            <Text style={styles.username}><Image style={styles.icon} source={require('../Assets/download.png')} /> Name</Text>
            <TextInput placeholder='Enter Full Name' style={styles.username_input}></TextInput>
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.password}><Image style={styles.eicon} source={require('../Assets/email.png')} /> Email</Text>
            <TextInput placeholder='Enter Email' style={styles.password_input}></TextInput>
          </View>

          

          <View style={styles.formgroup}>
            <Text style={styles.password}><Image style={styles.icon} source={require('../Assets/password.png')} /> Password</Text>
            <TextInput placeholder='Enter Password' style={styles.password_input}></TextInput>
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.password}><Image style={styles.icon} source={require('../Assets/password.png')} /> Re-enter Password</Text>
            <TextInput placeholder='Enter Re-enter Password' style={styles.password_input}></TextInput>
          </View>
          <View  >
           
          <CheckBox style={styles.box}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />  
          <Text style={styles.rem}> Remember me </Text>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Sign up</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textdown}>Already registered?
             <TouchableOpacity  onPress={() => props.navigation.navigate('Login')}>
         <Text style={styles.textside}>  Sign in</Text>
      </TouchableOpacity>
            </Text>

          </View>
        </View>

      </View>



    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  s1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%'
  },
  s2: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    height: '80%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  h1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30

  },
  h2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,

  },

  headtxt: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000'
  },
  small: {
    color: '#000',
    fontWeight: '400',
    fontSize: 15,
    marginTop: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  bg: {

    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1

  },
  username: {

    marginHorizontal: 38,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
    color: '#000',
    marginTop: 60

  },
  username_input: {
    width: '84%',
    height: 40,
    borderRadius: 10,
    color: 'black',
    alignSelf: 'center',

    padding: 5,
    backgroundColor: '#FFB0CC',

  },
  password: {
    marginHorizontal: 38,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
    color: 'black',
    marginTop: 15
  },
  password_input: {
    width: '84%',
    height: 40,
    borderRadius: 10,
    color: 'black',
    alignSelf: 'center',
    backgroundColor: '#FFB0CC',
    padding: 5,

  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 20,

    color: 'blue',


  },
  btn: {

    margin: 50,
    borderRadius: 10,
    borderColor: 'black',
    width: '85%',
    height: '7%',
    backgroundColor: '#fa2a55',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5

  },
  btntxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

  },
  formgroup: {
    display: 'flex',

  },
  textdown: {
    display: 'flex',
    alignSelf: 'center',

  },
  textside: {
    color: 'blue',
    margin: -5,
  },
  rem: {
marginHorizontal:60,
marginTop:-25,
marginBottom:15

  },
  icon: {
    width: 20,
    height: 20
  },
  eicon: {
    width: 23,
    height: 22
  },
  box:{
 marginHorizontal:33,
 marginTop:5
   
   
   
    }


})



