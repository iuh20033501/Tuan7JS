import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';



export default function Screen1({navigation}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://653f4bda9e8bd3be29e030ff.mockapi.io/image')
        .then((response) => response.json())
        .then((json) => {
            setData(json)

        })
  }, []);
  return (
    <View style={styles.container}>
      <Text style ={styles.banner}>Welcome to Cafe World</Text>
      <View style={{alignItems:'center', }}>
      {data.map((item) => { return(
        <Image style={styles.img} source={{uri:item.image}}></Image>
      )})}
    </View>
 <TouchableOpacity style={styles.divbtn} onPress={()=> navigation.navigate('Screen2')}>
            <Text style={{fontSize:20, textAlign:'center',color:'white'}}> GET STARTED</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    fontSize:25,
    textAlign:'center',
    marginTop:50,
    fontWeight:'bold'
  },
  img: {
    width: 250,
    height: 80,
    marginTop:50,
  },
  divbtn: {
    marginTop:50,
    width: "80%",
    height:50,
    backgroundColor:"#00BDD6",
    alignSelf:'center'
  }
});
