import react from "react";
import {FlatList,View, Text} from "react-native"
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";
import Constants from "expo-constants";

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