import { Navigation } from "react-native-navigation";

import registerScreens from './screens/screens';

registerScreens();

export default class Nav {
  constructor() {
    this._initApp();
  }
  _initApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.FeedScreen'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'Home',
                      //icon: require('../images/one.png')
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.HomeScreen'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'Tab 2',
                      //icon: require('../images/one.png')
                    }
                  }
                }
              },
            ],
            options: {}
          }
        }
      });
    });
  }

}
