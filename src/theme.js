import { Platform } from "react-native"

const theme = {
    appBar: {
        primary: '#121417',
        primaryText: '#fff',
        secondaryText: '#9299A0'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary:'#0366d6',
        white: '#fafafa',
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        })
    },
    fontWeights:{
        normal: '400',
        bold: '700'
    },
}


export default theme