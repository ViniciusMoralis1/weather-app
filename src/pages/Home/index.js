import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function Home(){
  const [ city, setCity ] = useState('');

  function navigate(){
    console.log(city);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Weather App!</Text>
      <Text style={styles.subtitle}>Primeiro, digite abaixo a cidade que você deseja visualizar.</Text>

      <TextInput 
        style={styles.inputCidade} 
        placeholder="Digite aqui..." 
        placeholderTextColor="#fff" 
        value={city} 
        onChangeText={setCity} 
        autoCapitalize={'words'}
      />

      <TouchableOpacity style={styles.continueButton} activeOpacity={0.7} onPress={navigate}>
        <Text style={styles.continueText}>Continuar</Text>
        <Icon name="arrow-forward-ios" color={'#fff'} size={20}></Icon>
      </TouchableOpacity>

    </View>
  )
}
