import { Navigation } from "react-native-navigation";
import FeedScreen from "./screens/feed-screen";
import HomeScreen from "./screens/home-screen";

Navigation.registerComponent(`navigation.screen.FeedScreen`, () => FeedScreen);
Navigation.registerComponent(`navigation.screen.HomeScreen`, () => HomeScreen);

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
                        name: 'navigation.screen.FeedScreen'
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
                        name: 'navigation.screen.HomeScreen'
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
