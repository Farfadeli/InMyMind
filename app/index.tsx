import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';

import MainView from '@/app/MainView';
import Inscription from '@/components/Inscription';
import RouteContext from '@/app/context/RouteContext';
import { useState } from 'react';
import Connexion from '@/components/Connexion';
import HomeView from '@/components/HomePage';

export default function HomeScreen() {
  const [path, setPath] = useState<string>("/");

  return (
    <RouteContext.Provider value={{ path, setPath }}>
      {
        path == "/" ? <MainView /> :
          path == "/inscription" ? <Inscription /> :
            path == "/connexion" ? <Connexion /> :
              path == "/home" ? <HomeView /> :
                <View><Text>Error</Text></View>

      }
    </RouteContext.Provider>
  )
}