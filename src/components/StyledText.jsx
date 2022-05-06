import react from "react";
import {Text, StyleSheet} from "react-native"
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize:  theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    textAlignCenter:{
        textAlign: 'center'
    }
})

export default function StyledText ({align, children, color, fontSize,fontWeight, style, ...restOfProps}) {
    const textStyle = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return(
        <Text style={textStyle}{...restOfProps}>{children}</Text>
    )

}
