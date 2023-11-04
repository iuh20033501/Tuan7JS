import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
export default function Screen4({navigation}) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://65464bf5fe036a2fa9557979.mockapi.io/image4')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
    
            })
      }, []);
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('Screen3')}><Image style={styles.icon} source={require('../demo/image/iconback.png')}>
            </Image></TouchableOpacity>
            <Text style={styles.txt}>Your order</Text>
            <Image style={styles.icon} source={require('../demo/image/iconloc.png')}></Image>
        </View>
        <View style={{alignItems:'center'}}>
        {data.map((item, index) => { return(
            <TouchableOpacity key={index} >
            <Image style={styles.img} source={{uri:item.image}}></Image>
            </TouchableOpacity>
            )})}
        </View>
        <TouchableOpacity style={styles.divbtn} onPress={()=> alert('ok')}>
            <Text style={{fontSize:20, textAlign:'center',color:'white', marginTop:10}}> GO TO CART</Text>
    </TouchableOpacity>
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
  body:{
    marginTop:20,
    width:"80%",
    height:"15%",
    backgroundColor:'#00BDD6',
    alignSelf:'center',
    borderRadius:5,
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
  },
  img:{
    marginTop:30,
    width:340,
    height:60,
  },
  divbtn: {
    marginTop:50,
    width: "80%",
    height:50,
    backgroundColor:"#EFB034",
    alignSelf:'center',
    borderRadius:5
  }
});
