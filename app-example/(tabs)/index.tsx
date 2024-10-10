import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.titleTopText}>Bienvenue sur</Text>
        <Text style={styles.titleBottomText}>In My Mind</Text>
        <Image style={styles.image} source={require("@/assets/images/InMinds.png")}/>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.inscriptionBtn}><Text style={styles.inscriptionText}>S'inscrire</Text></TouchableOpacity>
            <TouchableOpacity style={styles.connexionBtn}><Text style={styles.connexionText}>Se connecter</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  image:{
    width: "90%",
    height: "50%",
    marginTop: 25
  },
  titleTopText : {
    color: "#708B75",
    fontWeight: 500,
    fontSize: 20
  },
  titleBottomText : {
    color : "#708B75",
    fontWeight: 500,
    fontSize: 32
  },
  btnContainer : {
    width: "100%",
  },
  inscriptionBtn : {
    width: "90%",
    height: 42,
    backgroundColor: "#708B75",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#708B75",
    borderWidth: 1,
    borderRadius: 16
  },
  inscriptionText : {
    color: "white",
    fontSize: 16,
    fontWeight: 400
  },
  connexionBtn : {
    width: "90%",
    height: 42,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#708B75",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 16
  },
  connexionText : {
    color: "#708B75",
    fontSize: 16,
    fontWeight: 400
  }
});
