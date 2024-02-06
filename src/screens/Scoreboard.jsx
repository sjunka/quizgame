import React from 'react';
import { SafeAreaView, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

const ScoreBoard = () => {
    const data = [
        { name: 'Player 1', points: 100 },
        { name: 'Player 2', points: 200 },
        { name: 'Player 3', points: 150 },
        // Add more data as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} points</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    points: {
        fontSize: 16,
    },
});

export default ScoreBoard;