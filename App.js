import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <View style={styles.box}>
          <Text style={styles.text3}>Jimin</Text>
          <Text style={styles.text3}>FILTER</Text>
        </View>
        <View style={styles.area1}>
          <View style={styles.box1}>
            <Text style={styles.text}>I’m your filter </Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.text}>that will change your world. </Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.text}>Put me over your heart</Text>
          </View>
        

        </View>
      </View>
      <View style={styles.box2}>
            <Text style={styles.text1}>110719016</Text>
            <Text style={styles.text1}>吳悅如</Text>
          </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D93AD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  area:{
    width:300,
    height:300,
    flexDirection:'row',
    backgroundColor: '#DE8F6E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop:10,
  },
  area1:{
    width:100,
    height:50,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop:10,
  },

  box:{
    marginRight:30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box1:{
    width:135,
    height:70,
    padding:10,
    backgroundColor:'#88AB75',
    justifyContent: 'center',
    marginTop:10,
    marginRight:15,
  },
  box2:{
    width:300,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#EAB7A2',
    marginTop:20,
    borderRadius:10,
  },

  text:{
    fontSize:20,
    color:'#fff',
  },
  text1:{
    fontSize:20,
    color:'#fff',
  },
  text3:{
    fontSize:40,
    color:'#fff',
  },
});
