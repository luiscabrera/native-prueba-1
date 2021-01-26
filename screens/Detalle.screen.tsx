import * as React from 'react';
import { Button, View, Text } from 'react-native';

interface IDetalle {
    navigation: any
}

function Detalle(props: IDetalle) {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detalle</Text>
            {/* <Button
                title="Ir a Detalle... de nuevo"
                onPress={() => navigation.push('Detalle')}
            /> */}
            <Button title="Ir a Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Volver" onPress={() => navigation.goBack()} />
            {/* <Button
                title="Ir al primer coso del stack (Home)"
                onPress={() => navigation.popToTop()}
            /> */}
        </View>
    );
}

export default Detalle;