import React,{ useState,useEffect } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCircle from '../components/imageCircle';
import { BirthDayFormart } from '../utils/dateFormat';
const screenWidth = Dimensions.get('window').width;


export default function  UserProfile (props){
    const [userData, setUserData] = useState(null)
    useEffect(() => {
         setUserData(props?.route?.params.userData)
    }, [])
    
  return(
    <View>
        <View style={styles.headerContainer}>
            <HeaderNavigation navigation={props.navigation} />
            <InfoPersonal userData={userData}/>            
        </View>
        <InfoPersonalForm userData={userData}/>
       
    </View>
  )
}

const HeaderNavigation = ({navigation}) => {
    return(
        <View style={styles.navigationContainer}>    
            <View style={styles.goBackBtn}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Feather color='#FFF' size={40}  name='chevron-left' />
                </TouchableOpacity>
            </View>
            <Text style={styles.textHeader}>Profile</Text>
            <View style={styles.settingsBtn}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Feather color='#FFF' size={30}  name='settings' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const InfoPersonal = ({userData})=> {
    return(
        <View style={styles.infoPersonalContainer}> 
            <ImageCircle style={styles.photoProfile} src={{uri:userData?.picture.large}} size={screenWidth/4} />
            <Text style={styles.titleInfoPersonal}>{userData?.name.first} {userData?.name.last}</Text>
            <Text style={styles.subTitleInfoPersonal}>@{userData?.login.username}</Text>
            <View style={styles.ageContainer}>
             <Text style={styles.subTitleInfoPersonal}>{userData?.dob.age} years</Text>
                <View style={styles.dividerVertical}/>
             <Text style={styles.subTitleInfoPersonal}>{userData?.location.country}</Text>
            </View>
        </View>
    )
}

const InfoPersonalForm = ({userData})=> {

    return(
        <View style={styles.extraInfoContainer}> 
            <View style={styles.intemExtraInfo}>
                <Feather color='#8A8A8A' size={25}  name='mail' />
                <View style={styles.descriptionItemExtraInfo}>
                    <Text style={styles.indicatorInfo}>Email</Text>
                    <Text style={styles.titleExtraInfo}>{userData?.email}</Text>
                </View> 
           </View>
           <View style={styles.intemExtraInfo}>
                <Feather color='#8A8A8A' size={25}  name='phone' />
                <View style={styles.descriptionItemExtraInfo}>
                    <Text style={styles.indicatorInfo}>Phone</Text>
                    <Text style={styles.titleExtraInfo}>{userData?.phone}</Text>
                </View> 
           </View>
           <View style={styles.intemExtraInfo}>
                <MaterialCommunityIcons color='#8A8A8A' size={25}  name='cake-variant-outline' />
                <View style={styles.descriptionItemExtraInfo}>
                    <Text style={styles.indicatorInfo}>Birthday</Text>
                    <Text style={styles.titleExtraInfo}>{BirthDayFormart(userData?.dob.date)}</Text>
                </View> 
           </View>
           <View style={styles.intemExtraInfo}>
                <MaterialCommunityIcons color='#8A8A8A' size={25}  name='account-clock-outline' />
                <View style={styles.descriptionItemExtraInfo}>
                    <Text style={styles.indicatorInfo}>Registered</Text>
                    <Text style={styles.titleExtraInfo}>{BirthDayFormart(userData?.registered.date)}</Text>
                </View> 
           </View>
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
        backgroundColor:'#9000cb',
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    navigationContainer:{
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'100%',
    },
    goBackBtn:{
        position:'absolute',
        left:0,
        zIndex:3
    },
    settingsBtn:{
        position:'absolute',
        right:10,
        zIndex:3
    },
    textHeader:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
        color:'#FFFFFF',
        width:'100%'
    },
    photoProfile:{
        borderWidth:2,
        borderColor:'#FFFFFF'
    },
    infoPersonalContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    ageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'70%',
        marginTop:30,
        alignSelf:'center',
        position:'relative'
    },
    dividerVertical:{
        height:50,
        width:1,
        backgroundColor:'#FFFFFF'
    },
    titleInfoPersonal:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center',
        width:'50%'
    },
    subTitleInfoPersonal:{
        fontSize:14,
        color:'#F2F2F2',
        textAlign:'center',
        width:'50%'

    },
    extraInfoContainer:{
        marginTop:30,
        paddingHorizontal:10
    },
    intemExtraInfo:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:'95%',
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'#c1c1c1',
        paddingVertical:20
    },
    descriptionItemExtraInfo:{
        marginLeft:10,
        marginTop:3
    },
    indicatorInfo:{
        fontSize:14,
        color:'#8A8A8A',
        fontWeight:'normal',
        marginBottom:5
    },
    titleExtraInfo:{
        fontSize:16,
        color:'#8A8A8A',
    },

})