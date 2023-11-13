import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};
Header.defaultProps = {
  title: 'Votio',
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
});
export default Header;
