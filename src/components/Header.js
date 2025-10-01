import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, showBack = false, showMenu = true }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      {showBack && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} titleStyle={styles.title} />
      {showMenu && (
        <IconButton
          icon="menu"
          size={24}
          onPress={() => {}}
        />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1976D2',
    elevation: 6,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 19,
  },
});

export default Header;
