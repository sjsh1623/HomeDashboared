import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import WeatherTemplate from "./src/component/template/WeatherTemplate";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <WeatherTemplate/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
