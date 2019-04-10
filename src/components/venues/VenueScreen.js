import React from 'react';
import { SafeAreaView } from 'react-native';
import VenueList from './VenuesList';

const VenueScreen = () => {
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <VenueList />
    </SafeAreaView>
    );
};

export default VenueScreen;