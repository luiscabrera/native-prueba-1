import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from "react-native";

interface IAppBar {
    navigation: any
}

function AppBar(props: IAppBar) {

    const { navigation } = props;
    return (
        <Appbar.Header style={styles.appbar}>
            <Appbar.Action
                icon="menu"
                onPress={() => navigation.toggleDrawer()}
                style={{ alignItems: "flex-start" }}
            />
            <Appbar.Content title="Mapa de Camas" style={{ alignItems: "flex-start" }} />
            <Appbar.Action
                icon="hospital"
                onPress={() => navigation.navigate("Detalle")}
                style={{ alignItems: "flex-end" }}
            />
        </Appbar.Header>
    )
};

export default AppBar;

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: "white",
        elevation: 25,
        alignItems: "center"
    },
    textAppbar: {

    }
})