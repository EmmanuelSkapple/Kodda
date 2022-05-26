import React from 'react';
import {Text, View,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import ImageCircle from './imageCircle';

const screenWidth = Dimensions.get('window').width;

const  UserItem = ({item, showProfiletUser}) => {

  return(
    <TouchableOpacity onPress={()=>showProfiletUser(item)} style={styles.container}>
        <ImageCircle src={{uri:item.picture.medium}} size={screenWidth/8}  />
        <View style={styles.descriptionContainer}>
            <Text style={styles.titleItem}>{item.name.first}</Text>
            <Text style={styles.subTitleItem}>@{item.login.username}</Text>
            <Text style={styles.subTitleItem2}>{item.location.country}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default UserItem;

const styles = StyleSheet.create({
    container:{
      width:"95%",
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      alignSelf:'center',
      marginVertical:5,
      padding:10,
      elevation:2,
      borderRadius:8,
      backgroundColor:'#FAFAFA'
    },
    descriptionContainer:{
        marginLeft:10
    },
    titleItem:{
        fontSize:20,
        fontWeight:'bold'
    },
    subTitleItem:{
        fontSize:14
    },
    subTitleItem2:{
        fontSize:14,
        color:'#c1c1c1'
    }
})