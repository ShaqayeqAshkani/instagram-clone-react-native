import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Users from "@/data/users";
import { ScrollView } from "react-native";


const Stories = () => {
  return (
    <View>
      <ScrollView horizontal>
        {Users.map((story, index) => (
          <View key={index} style={{alignItems:'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{color :'white'}}>{story.username} </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
    story :{
width:70,
height:70,
 borderRadius:35,
 marginLeft:6,
 borderWidth:3,
 borderColor:'tomato'
    }
});
