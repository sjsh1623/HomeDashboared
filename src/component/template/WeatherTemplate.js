import {View, Text} from "react-native";
import CardOrganism from "../organisms/CardOrganism";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherTemplate = (props) => {
    return (
        <CardOrganism
            width={400}
            height={100}>
            <Text>TEXT</Text>
            <Text>TEST</Text>
        </CardOrganism>
    )
}

export default WeatherTemplate;
