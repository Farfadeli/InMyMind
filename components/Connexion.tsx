import { Image, StyleSheet, TouchableOpacity, View, Text, TextInput, ScrollView } from 'react-native';

import RouteContext from '@/app/context/RouteContext';
import { useContext, useState } from 'react';

export default function Connexion(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.topText}>Bon retour !</Text>
            <Text style={styles.bottomText}>Se connecter</Text>
            <Image style={styles.img} source={require("@/assets/images/perso_inscription.png")} />
            <TextInput style={styles.inputs} onChangeText={setEmail} value={email} placeholder='Email...'/>
            <TextInput style={styles.inputs} onChangeText={setPassword} value={password} placeholder='Password...'/>
            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Se connecter</Text></TouchableOpacity>
            <View style={styles.alreadyAccount}>
                <Text>Pas de compte ?</Text>
                <TouchableOpacity><Text style={styles.connexion}>S'inscrire</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : {
        width : "100%", height: "100%",
        display: "flex"
    },
    topText : {
        fontSize : 20, color : "#708B75",
        marginTop: 50, fontWeight: 500,
        marginLeft: "auto", marginRight: "auto"
    },
    bottomText : {
        fontSize: 32, color : "#708B75", fontWeight: 600,
        marginLeft: "auto", marginRight: "auto"
    },
    img : {
        flex: 1,
        width: 350,
        height: 350,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop : 30,
        resizeMode: 'contain'
    },
    inputs : {
        borderColor : "#EDEDED",
        borderWidth: 1,
        padding : 10,
        color: "#9BAB8F",
        borderRadius: 16,
        marginTop: 30,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    btn : {
        backgroundColor : "#9BAB8F",
        width : "75%",
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
        height: 40,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 8
    },
    btnText : {
        color: "white",
        fontWeight: 500
    },
    alreadyAccount:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 5
    },
    connexion : {
        color : "#9BAB8F",
        marginLeft: 10
    }
})