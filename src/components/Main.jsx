import react from "react";
import {Text, View} from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";

const Main = () => {
    return(
        <View style={{marginTop:Constants.statusBarHeight, flexGrow: 1, backgroundColor:'#6C757D'}}>
           <RepositoryList/>
        </View>
    )
}

export default Main