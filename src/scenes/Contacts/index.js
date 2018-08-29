import React, { Component } from 'react';

import { View, Text, Button,FlatList} from 'react-native';
import ItemContact from './components/item-contact';
import ItemSeparator from './components/item.separator';

class Contacts extends Component {

    constructor(props){
        super(props);
        this.state={
            contactList: []
        };
    }

    componentDidMount= ()=>{
        const contacts = [
            {
                name: 'Pepito Perez',
                phone: '3209897656',
                photo: 'https://www.cambio16.com/wp-content/uploads/2017/08/foto-el-nino-del-meme-triunfal-reaparece-10-anos-despues.jpg',
                id: 1
            },
            {
                name: 'Maria Gomez',
                phone: '3209847653',
                photo: 'http://naxio.com.ar/sites/default/files/imagen/blog/foto_perfil.jpeg',
                id: 2
            },
            {
                name: 'Majo Gil',
                phone: '3203887056',
                photo: 'https://i.ytimg.com/vi/gbNdhbeTLuI/maxresdefault.jpg',
                id: 3
            }
        ];

        this.setState({
            contactList: contacts
        });
    };

    static navigationOptions = {
        title: 'Contactos',
    }
    
    renderItem=({item}) => <ItemContact navigation={this.props.navigation} contact={item} />
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay contactos</Text> 
    keyExtractor=item => item.id.toString()

    render() {
        return (
            <View>
                <Text> {this.props.navigation.getParam('name', 'NO-SUPERHERO')} </Text>
                {/*<Button
                    title="Atras"
                    onPress={() => { this.props.navigation.goBack() }}
                />*/}
                {/*Creaci+on de lista*/}
                <FlatList
                    data={this.state.contactList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />

            </View>
        );
    }
}

export default Contacts;