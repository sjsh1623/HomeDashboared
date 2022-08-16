import {View, StyleSheet, Text} from "react-native";
import {Shadow} from "react-native-shadow-2";

const CardOrganism = (props) => {
    const {width, height} = props;
    return (
            <View style={{
                width: width,
                height: height,
                ...styles.cardContainer
            }}>
                {props.children}
            </View>

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        padding: 1,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
});

export default CardOrganism;
