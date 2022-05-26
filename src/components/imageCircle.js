import React from 'react';
import {Image} from 'react-native';



export default function  ImageCircle (props){
  return(
    <Image
      style={[{ height: props.size, width: props.size, borderRadius: props.size/2 },props.style?props.style:{}]}
      source={props.src}
    />
  )
}
