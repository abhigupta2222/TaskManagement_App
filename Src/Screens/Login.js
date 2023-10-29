import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';


const Login = (props) => {

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
          <Text style={styles.headtxt}>Login</Text>

          <Text style={styles.small}>Log in to Continue</Text>
          <View style={styles.formgroup}>
            <Text style={styles.username}>UserName</Text>
            <TextInput placeholder='Enter UserName' style={styles.username_input}></TextInput>
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.password}>Password</Text>
            <TextInput placeholder='Enter Password' style={styles.password_input}></TextInput>
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
            <Text style={styles.btntxt}>Log In</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textdown}>Don't have an account?
              <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.textside}> Create new account</Text>
              </TouchableOpacity>

            </Text>

          </View>
        </View>

      </View>



    </View>
  );
};
export default Login;
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
    height: '40%'
  },
  s2: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    height: '60%',
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
    fontSize: 45,
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
    marginTop: 10,
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
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30

  },
  username_input: {
    width: '84%',
    height: 50,
    borderRadius: 10,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFB0CC',

  },
  password: {
    marginHorizontal: 38,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  password_input: {
    width: '84%',
    height: 50,
    borderRadius: 10,
    color: 'yellow',
    alignSelf: 'center',
    backgroundColor: '#FFB0CC',
    padding: 15
  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginVertical: 5,
    color: 'blue',


  },
  btn: {

    margin: 35,
    borderRadius: 10,
    borderColor: 'black',
    width: '85%',
    height: 60,
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
    marginTop: 2

  },
  textside: {
    color: 'blue',
    margin: -2,
  },
  rem: {
    marginHorizontal: 60,
    marginTop: -25,
    marginBottom: 15

  },
  box: {
    marginHorizontal: 33,
    marginTop: 5
  }


})



