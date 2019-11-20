// Button consist two props: title and onPress

import React from 'react';
import { View, Alert, Button, StyleSheet, } from 'react-native';


export default class HandlingTouchesComponent extends React.Component {
  onPressF() {
    fetch('https://bot6.seattleacademy.software/drive?left=100&right=100');
  }

  _onPressB() {
    fetch('https://bot6.seattleacademy.software/drive?left=-100&right=-100');
  }

  _onPressL() {
    fetch('https://bot6.seattleacademy.software/drive?left=-100&right=100');
  }

  _onPressR() {
    fetch('https://bot6.seattleacademy.software/drive?left=100&right=-100');
  }

  onPressS() {
    fetch('https://bot6.seattleacademy.software/drive?left=0&right=0');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <Button title="↑" onPress={this.onPressF} />
          
        </View>

        <View style={styles.rowContainerButton}>
          <Button title="←" onPress={this.onPressL} />
          <Button title="❖" onPress={this.onPressS} color="purple" />
          <Button title="→" onPress={this._onPressR} />
        </View>

        <View style={styles.containerButton}>
          <Button title="↓" onPress={this._onPressB} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowContainerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
