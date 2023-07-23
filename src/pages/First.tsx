import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

export default function First({navigation}: any) {
  return (
    <SafeAreaView>
      <View>
        <Text>First</Text>
        <Button title="Second" onPress={() => navigation.navigate('Second')} />
      </View>
    </SafeAreaView>
  );
}
