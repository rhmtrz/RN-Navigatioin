import { Navigation } from "react-native-navigation";
import FeedScreen from "./src/screen/feed-screen";

Navigation.registerComponent(`navigation.src.screen.FeedScreen`, () => FeedScreen);

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
                    name: 'navigation.src.screen.FeedScreen'
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  //icon: require('../images/one.png')
                }
              }
            }
          }
        ],
        options: {}
      }
    }
  });
});
