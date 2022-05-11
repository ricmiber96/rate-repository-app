import react from "react";
import {ViewPropTypes, StyleSheet} from "react-native"
import Constants from "expo-constants";
import theme from "../theme"
import { View, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledText from "./StyledText";
import { Link } from "react-router-native";
import { useLocation } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: red,
        paddingTop: Constants.statusBarHeight + 10,
    },
    text: {
        color: theme.appBar.secondaryText,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.primaryText,
    }

})

const AppBarTab = ({children, to}) => {

    const {pathname} = useLocation()

    const active = pathname === to

    const textStyle = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight="bold" style={textStyle}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
  
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/signin">Sign In</AppBarTab>
                <AppBarTab to="/register">Register</AppBarTab>
                <AppBarTab to="/main">Main</AppBarTab>
                <AppBarTab to="/orders">Orders</AppBarTab>
                <AppBarTab to="/favs">Fav</AppBarTab>
                <AppBarTab to="/settings">Settings</AppBarTab>
            </ScrollView>
        </View>
    )
}


export default AppBar