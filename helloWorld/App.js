import React , {useState} from 'react'
import {View, StyleSheet, FlatList,Alert} from 'react-native'
import Header from './Components/Header'
import ListItem from './Components/ListItem'
import AddItem from './Components/AddItem'

function App() {
    const [items, setItems] = useState([
      {id: '1', text: 'Milk'},
      {id: '2', text: 'Bread'},
      {id: '3', text: 'Juice'},
      {id: '4', text: 'Fruits'}
    ])

    const deleteItem = (id) => {
      setItems(prevItems => {
        return prevItems.filter(item => item.id != id); 
      })
    }

    const addItem = (text) => {
      if(!text)
      {  Alert.alert('Error', 'Please enter an item',[ {text: 'Ok'}]) }
      else {  
      setItems(prevItems => {
         return [{id: prevItems.id + '1', text: text}, ...prevItems]
       })}
    }

    return (
         <View style = {styles.container} >
           <Header/>
           <AddItem addItem ={addItem} />
           <FlatList data ={items} renderItem = {({item}) => <ListItem item = {item} deleteItem = {deleteItem}/>} />
         </View>             
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 20,
     
   }
  })

export default App