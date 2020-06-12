import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class About extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.horizontal}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.horizontal}>
        <Text>Test content</Text>
      </View>
    );
  }
}

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#4d3e3e',
      alignItems: 'stretch',
      padding: 10,
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
export default About;
