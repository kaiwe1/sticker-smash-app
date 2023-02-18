import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface Props {
  placeholderImageSource: ImageSourcePropType
  selectedImage?: null | string
}

export default function ImageViewer({ placeholderImageSource, selectedImage }: Props) {
  const imageSource = selectedImage !== null
  ? { uri: selectedImage }
  : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
