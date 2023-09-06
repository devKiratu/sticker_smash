import { Image, StyleSheet, View } from "react-native";

export default function ImageViewer({ placeholderimage }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={placeholderimage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
