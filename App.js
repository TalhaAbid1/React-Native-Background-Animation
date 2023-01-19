import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, Linking} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  return (
    <>
      <Video
        source={require('./res/video.mp4')}
        style={styles.backgroundVideo}
        repeat
        resizeMode="cover"
        muted
        rate={1.0}></Video>
      <View>
        <Image source={require('./res/logo.png')}/>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={()=>{ Linking.openURL('https://github.com/TalhaAbid1')}}>
          <Text style={[styles.alpha , {color:'#808080', opacity:0.7 , fontSize:30,}]}>DEVELOVERZ</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Enter Your Email"
          placeholderTextColor={'#fff'}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Enter Your Password"
          placeholderTextColor={'#fff'}
          secureTextEntry={true}
        />
      </View>
      
      <TouchableOpacity onPress={()=>{
        Alert.alert("DEVELOVERZ","This Button Do Nothing")
        }}>
        <Text style={styles.LoninBtnStyle}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{
        Alert.alert("DEVELOVERZ","This Button Do Nothing")
        }}>
        <Text style={styles.LoninBtnStyle}>Sign Up</Text>
      </TouchableOpacity>

    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  alpha:{
    alignSelf:'center',
    fontWeight:'bold',
  },
  TextInputStyle: {
    borderBottomColor:'#FFD700',
    borderBottomWidth:3,
    color: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    opacity:0.5,
    fontWeight:'bold',
  },
  LoninBtnStyle:{
    backgroundColor:'#FFD700',
    paddingHorizontal:150,
    paddingVertical:10,
    marginTop:25,
    borderRadius:10,
    opacity:0.4,
    alignSelf:'center',
    color:'#fff',
    fontWeight:'bold',
  },
  footer:{
    position:'absolute',
    bottom:3,
    alignSelf:'center'
  },
});

export default App;
