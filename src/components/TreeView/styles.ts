import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    tickWrapper: {
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        borderColor: "#105067"
    },
    text: {
        fontWeight: "400",
        fontSize: 17,
        marginLeft: 10
    },
});

export default styles;
