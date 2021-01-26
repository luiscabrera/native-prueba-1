import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import AppBar from '../components/AppBar.component';

interface IHome {
    navigation: any
}

function Home(props: IHome) {
    const { navigation } = props;
    return (
        <SafeAreaView>
            <View>
                <AppBar navigation={navigation} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Ir a Detalle"
                    onPress={() => navigation.navigate('Detalle')}
                />
                <Button
                    title="Drawer"
                    onPress={() => navigation.toggleDrawer()}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;