import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

class Contacts extends Component {

    static navigationOptions = {
        title: 'Contacts'
    }

    render() {
        return (
            <View>
                <Text> {this.props.navigation.getParam('name','NO-SUPERHERO')} </Text>
                <Button 
                    title= "Go Back"
                    onPress= {()=>{this.props.navigation.goBack()}}
                />
            </View>
        );
    }
}

export default Contacts;