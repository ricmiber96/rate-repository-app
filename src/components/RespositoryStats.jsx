import react from "react";
import {View} from 'react-native'
import StyledText from "./StyledText";


const parseThousands = (value) => {
    return value >= 1000 ? `${Math.round(value/100)/10}k` : String(value)

}

const RepositoryStats = (props) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText fontWeight="bold" align="center">Stars:</StyledText>
                <StyledText align="center">{parseThousands(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Forks:</StyledText>
                <StyledText align="center">{parseThousands(props.forksCount)}</StyledText>            
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Reviews:</StyledText>
                <StyledText align="center">{parseThousands(props.reviewCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Rating:</StyledText>
                <StyledText align="center">{parseThousands(props.ratingAverage)}</StyledText>
            </View>   
        </View>
    )
}


export default RepositoryStats