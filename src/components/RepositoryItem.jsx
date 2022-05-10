import react from "react";
import {View, Text, StyleSheet,Image, Platform} from "react-native"
import RepositoryStats from "./RespositoryStats";
import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 25, 
        paddingTop: 5, 
        paddingBottom: 5, 
        marginTop: 10, 
        marginLeft: 10, 
        marginRight: 10, 
        color:'white', 
        borderRadius: 5 ,  
        borderWidth: 5, 
        borderColor: '#560bad'
    },
    strong:{
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 100,
    },
    language: {
        padding: 6,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            default: theme.colors.primary,
            android: 'green',
            ios: 'purple'
        }),
        borderRadius: 4,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    }
})

const RepositoryHeader = ({ownerAvatarUrl, fullName,description, language}) => {
    return (
        <View style={{flexDirection:'row', paddingBottom: 2}}>
            <View style={{paddingRight: 10}}>
                <Image source={{uri:ownerAvatarUrl}} style={styles.tinyLogo}/>
            </View>
            <View style={{flexGrow: 1, paddingRight: 10}}>
                <StyledText style={styles.strong}>{fullName}</StyledText>
                <StyledText>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
    )
}

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

export default RepositoryItem