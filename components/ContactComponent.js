import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Card } from 'react-native-elements';




class Contact extends Component {


    static navigationOptions = {
        title: 'Contact Us' 
   }


    render() {
        return (
            <ScrollView>
                <Card
                    title= "Contact Information" 
                    wrapperStyle={{margin: 20}}>
                    <Text style={{marginBottom: 20}}> 
                    1 Nucamp Way {"\n"} 
                    Seattle, WA 98001 {"\n"} 
                    U.S.A. 
                    </Text>
                    <Text> 
                    Phone: 1-206-555-1234 {"\n"}
                    Email: campsites@nucamp.co 
                    </Text>
                </Card>
            </ScrollView>
        )
    }
}




export default Contact;