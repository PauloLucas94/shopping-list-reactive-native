import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {styles} from './styles';

import { Participant } from '../../components/Participant';

export function Home() {

  const[participants, setParticipants]=useState<string[]>([])
  const[participantName, setParticipantName]=useState('')

  //const participants=['Tufic', 'Belinha', 'Latica', 'Ursinha', 'Maria-Mole', 'Mingal', 'Chaplin', 'Carlitos', 'Pand', 'Busgar', 'Shaun', 'Snow', 'Pow-Pow']  
  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Item já existe", "Já existe na lista um item com esse nome" )
    }

    setParticipants(prevState=>[...prevState, participantName])
    setParticipantName('')
  }
  
  function handleParticipantRemove(name:string) {
    //console.log("Nome do Usuário -> ",name)

    Alert.alert("Remover" , `Deseja remover o item: ${name}?`, [
      {
        text:'Sim',
        onPress: ()=> setParticipants(prevState=>prevState.filter(participant=>participant!==name))
      },
      {
        text:'Não',
        style:'cancel'
      }
    ]);
    console.log(`Você clicou para remover o item: ${name}`)
  }

  // function handleState(value: string) {
  //   setParticipantName(value);
  //   console.log(participantName)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Minha Lista de Compras!
      </Text>
      <Text style={styles.eventDate}>
        Outubro de 2024
      </Text>
      <View style={styles.form}>
        <TextInput style={styles.input} 
          placeholder='Nome do Item'
          placeholderTextColor='gray'
          onChangeText={setParticipantName}
          value={participantName}
          //   keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
        <FlatList
          data={participants}
          keyExtractor={item=>item}
          renderItem={({item})=>(
            <Participant 
            key={item}
            name={item} 
            onRemove={()=>handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.listEmptyText}>
              Nenhum item listado ainda. Gostaria de adicionar algum item ao carrinho?
            </Text>
          )}
        />
    </View>  
  )
}