import * as React from 'react';
import { Drawer } from 'react-native-paper';

interface IDrawer {
    navigation: any;
}

const MyDrawer = (props: IDrawer) => {
    const { navigation } = props;
    const [active, setActive] = React.useState('');

    return (
        <Drawer.Section title="Mapa de Camas">
            <Drawer.Item
                label="Home"
                active={active === 'first'}
                onPress={() => navigation.navigate('Home')}
            />
            <Drawer.Item
                label="Detalle"
                active={active === 'second'}
                onPress={() => navigation.navigate('Detalle')}
            />
        </Drawer.Section>
    );
};

export default MyDrawer;