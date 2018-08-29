import React, { Component } from 'react';
import {Platform, View, Text, SectionList, StyleSheet } from 'react-native';

import ItemContact from './../Contacts/components/item-contact';
import CustomText from './components/custom-text';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        };
    }

    componentDidMount = () => {
        const contacts = [
            {
                name: 'Alberto Perez',
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
                name: 'Alba Gil',
                phone: '3203887056',
                photo: 'https://i.ytimg.com/vi/gbNdhbeTLuI/maxresdefault.jpg',
                id: 3
            }
        ];

        this.setState({
            contactList: contacts
        });
    }

    renderItem = ({ item }) => <ItemContact navigation={this.props.navigation} contact={item} />
    sectionHeader = ({ section }) =>
        <Text style={styles.header}>
            {section.key}
        </Text>
    keyExtractor = item => item.id.toString()

    render() {
        return (
            <View>
                <CustomText />
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.sectionHeader}
                    sections={[
                        {
                            data: this.state.contactList, key: 'A'
                        },
                        {
                            data: [], key: 'B'
                        },
                        {
                            data: this.state.contactList, key: 'C'
                        },
                        {
                            data: this.state.contactList, key: 'D'
                        },
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS == 'ios' ? '#CCC' : '#58ACFA',        
        ...Platform.select({
            ios:{
                paddingVertical: 5,
                marginBottom: 5,
            },
            android:{
                paddingVertical: 15,
                marginBottom: 15,
            }
        })
    }
});

export default Diary;
