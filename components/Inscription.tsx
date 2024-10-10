import { Image, StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import RouteContext from '@/app/context/RouteContext';
import { useContext, useState } from 'react';

export default function Inscription(){

    const {setPath} = useContext(RouteContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorText , setErrorText] = useState("")


    const add_user = async () => {
        const response = await fetch('http://localhost:8000/user/inscription', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email : email,
                password: password
            })
          });
          const content = await response.json();
          console.log(content)
          if(content.success){
            setPath("/home")
          }
          else{
            setErrorText(content.error)
          }
        
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.topText}>Bienvenue !</Text>
            <Text style={styles.bottomText}>S'inscrire</Text>
            <Image style={styles.img} source={require("@/assets/images/perso_inscription.png")} />
            <TextInput style={styles.inputs} onChangeText={setFirstName} value={firstName} placeholder='First Name...'/>
            <TextInput style={styles.inputs} onChangeText={setLastName} value={lastName} placeholder='Last Name...'/>
            <TextInput style={[styles.inputs, errorText != "" ? {borderColor: "red"}:{borderColor : "#EDEDED"}] } onChangeText={setEmail} value={email} placeholder='Email...'/>
            <Text style={styles.error}>{errorText}</Text>
            <TextInput secureTextEntry style={styles.inputs} onChangeText={setPassword} value={password} placeholder='Password...'/>
            <TouchableOpacity onPress={add_user} style={styles.btn}><Text style={styles.btnText}>S'inscrire</Text></TouchableOpacity>
            <View style={styles.alreadyAccount}>
                <Text>Vous avez un compte ?</Text>
                <TouchableOpacity><Text style={styles.connexion}>Se connecter</Text></TouchableOpacity>
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
        marginTop: 50, fontWeight: "500",
        marginLeft: "auto", marginRight: "auto"
    },
    bottomText : {
        fontSize: 32, color : "#708B75", fontWeight: "600",
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
        marginTop: 10,
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
        fontWeight: "500"
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
    },
    error :{
        color : "red",
        marginLeft : "auto",
        marginRight: "auto",
        marginTop: 2.5
    }
})