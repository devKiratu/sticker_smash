import { Image, StyleSheet, View } from "react-native";

export default function ImageViewer({ placeholderimage, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderimage;
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
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
