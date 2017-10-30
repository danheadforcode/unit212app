/**
 * App.js is the starting point for this app
 */

 /**
  * The following import section is responsible for importing libraries, components and other assets that this file requires
  */
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {

  // This is a simple state object which we use to determine whether assets are still being loaded
  state = {
    assetsAreLoaded: false,
  };

  // Function that handles the initial creation of this component, it calls another function, see below
  componentWillMount() {
    this._loadAssetsAsync();
  }

  // App.js is in itself a component that loads others to generate the app, every React component must have a render function
  // the render function handles the output of the UI
  // Initially this will show a splash screen for HomeBrew and then will seemlessly switch to the actual application when ready
  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  // When the component is mounting, in other words being created, we call this function which loads icons, fonts and splash screen
  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync([
          // This is the font that we are using for our tab bar
          Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ]),
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}

// Every React component has it's own style sheet which defines the look of the app
// Note that this is expressed as an Object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: '#fbfbfb',
  },
});
