import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {
    
}

export default function HomeScreen(props:HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });