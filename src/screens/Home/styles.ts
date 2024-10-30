import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'black',
      padding: 24
    },
    eventName:{
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 100,
      textAlign: 'left',
    },
    eventDate:{
      color: 'gray',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'left',
    },
    input: {
      flex: 1,
      marginTop: 0,
      backgroundColor: '#1f1e25',
      height: 56,
      borderRadius: 5,
      color: 'gray',
      padding: 16,
      fontSize: 16,
    },
    buttonText:{
      color: 'white',
      fontSize: 24
    },
    button:{
      width: 56,
      height:56,
      borderRadius:5,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginRight:12,
      marginTop: 36,
      marginBottom:42,                                                                                                          
    },
    listEmptyText:{
      color:'#fff',
      fontSize: 14,
      textAlign: 'center'
    }
  });