import React from "react";
import {FlatList,View, Text} from "react-native"
import RepositoryItem from "./RepositoryItem";
import Constants from "expo-constants";
import useRepositories from "../hooks/useRepositories";

const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          marginTop: 10
        }}
      />
    );
  }


const RepositoryList = () => {
     const {repositories} = useRepositories()
    return (
        <FlatList 
        style={{marginBottom: Constants.statusBarHeight }}
        data={repositories}
        ItemSeparatorComponent={()=> <ItemDivider></ItemDivider>}
        renderItem={({item: repositories})=>(
           <RepositoryItem {...repositories}/>
        )}>
        </FlatList>
    )
}


export default RepositoryList