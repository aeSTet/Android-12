import React from 'react';
import { Text, View, Image } from 'react-native';

export default class Welcome extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    height: '100%',
                    padding: 40,
                    paddingTop: 50,
                    backgroundColor: 'white'
                }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 30,
                    }}>
                    <Image
                        source={require('../images/image.jpg')}
                        style={{
                            width: 150,
                            height: 150,
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    }}>
                    Добро пожаловать!
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'grey',
                        marginBottom: 50,
                    }}>
                    Вы вошли в систему как {'\n' + this.props.route.params.email}
                </Text>
            </View>
        );
    }
}
