import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function Screen2({navigation}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://653f4bda9e8bd3be29e030ff.mockapi.io/image2')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
    
            })
      }, []);
      return (
        <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('Screen1')}><Image style={styles.icon} source={require('../demo/image/iconback.png')}>
            </Image></TouchableOpacity>
            <Text style={styles.txt}>SHOP NEAR ME</Text>
            <Image style={styles.icon} source={require('../demo/image/iconloc.png')}></Image>
        </View>
          <View style={{alignItems:'center', }}>
          {data.map((item) => { return(
            <TouchableOpacity onPress={()=> navigation.navigate('Screen3')}>
            <Image style={styles.img} source={{uri:item.image}}></Image>
            </TouchableOpacity>
            )})}
        </View> 
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  img:{
    marginTop:50,
    width:300,
    height:180,
  },
  icon:{
    width:30,
    height:30,
    marginLeft:-20,
    marginTop:5
  },
  txt:{
    fontSize:25,
    marginTop:5,
    fontWeight:'bold'
  }
});
