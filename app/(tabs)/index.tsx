import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.contentText} >
        Welcome to the app!
        </Text>
        <Text> Hi </Text>

      <Link href="/settings">Vist about screen</Link>
        </View>
  );
}











const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  contentText: {
    fontSize: 20,
  }
})