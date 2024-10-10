import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';

import { useContext } from 'react';
import RouteContext from '../app/context/RouteContext';


export default function MainView() {

  const { setPath } = useContext(RouteContext)

  const changePath = (args: string) => {
    setPath(args)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleTopText}>Bienvenue sur</Text>
      <Text style={styles.titleBottomText}>In My Mind</Text>
      <Image style={styles.image} source={require("@/assets/images/InMinds.png")} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => { changePath("/inscription") }} style={styles.inscriptionBtn}><Text style={styles.inscriptionText}>S'inscrire</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { changePath("/connexion") }} style={styles.connexionBtn}><Text style={styles.connexionText}>Se connecter</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "90%",
    height: "50%",
    marginTop: 25
  },
  titleTopText: {
    color: "#708B75",
    fontWeight: "600",
    fontSize: 20
  },
  titleBottomText: {
    color: "#708B75",
    fontWeight: "600",
    fontSize: 32
  },
  btnContainer: {
    width: "100%",
  },
  inscriptionBtn: {
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
  inscriptionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400"
  },
  connexionBtn: {
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
  connexionText: {
    color: "#708B75",
    fontSize: 16,
    fontWeight: "400"
  }
});
