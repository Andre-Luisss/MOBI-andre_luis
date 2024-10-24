import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyCwzR9l5eO4ePo52iHn6nVn58A4Re8OCwk",
  authDomain: "meuprimeirofirebase-d80b5.firebaseapp.com",
  projectId: "meuprimeirofirebase-d80b5",
  storageBucket: "meuprimeirofirebase-d80b5.appspot.com",
  messagingSenderId: "843065739034",
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };
  
  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Sobrenome"        
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button title="Cadastrar" onPress={sendData} />
    </View>
  );
};

export default App;