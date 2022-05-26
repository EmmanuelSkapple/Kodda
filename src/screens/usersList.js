import React,{ useState,useEffect } from 'react';
import {Text, View,StyleSheet, Image, StatusBar, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Loading } from '../components/Loading';
import UserItem from '../components/userItem';
import { getUsers } from '../services/Users';



export default function  UsersList (props){
    const [usersList, setUsersList] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    useEffect(()=>{
        getUsersFromApi()
    },[])

    const getUsersFromApi = async () => {
      try{
        setIsFetching(true);
        let reqList = await getUsers();
        if(reqList.status == 200){
            setUsersList(reqList.users);
        }else{
            Alert.alert('Error','users could not be found!')
        }
        setIsFetching(false);
      }catch(err){
          console.log(err)
        Alert.alert('Error','something went wrong!')
      }
    }

    const showProfiletUser = (userData) => {
        props.navigation.navigate('UserProfile',{userData:userData})
    }

 

  return(
    <View styles={styles.container}>
       <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
       </View>
       {isFetching?
        <Loading />
        :
        <FlatList
            ListHeaderComponent={
                <View style={styles.listHeader}>
                    <Text style={styles.listHeaderText}>Users list</Text>
                </View>
            }
            data={usersList}
            renderItem={({item})=><UserItem key={item.login.uuid} item={item} showProfiletUser={showProfiletUser} />}
            keyExtractor={(item, index) => item?.login?.uuid.toString()}
            ListFooterComponent={<></>}
            showsVerticalScrollIndicator={false}
            ListFooterComponentStyle={{ marginTop: 90 }}
       />
       }
       
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
  },
  headerContainer:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00000'

  },
  listHeader:{
    padding:5,
    borderBottomColor:'#c1c1c1',
    borderBottomWidth:1,
    width:'95%',
    alignSelf:'center'
  },
  listHeaderText:{
    color:'#212121',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  logo:{
      width:'50%',
      height:90,
      resizeMode:'cover'
  },
  
})