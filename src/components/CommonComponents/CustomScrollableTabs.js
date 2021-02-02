import React from 'react';
import { ScrollView, View } from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import fonts from '../../helpers/Fonts';
import colors from '../../helpers/Colors';

const CustomScrollableTabs = ({
  onChangeTab, currentTab, renderTabContain = () => {}, tabItem, customStyle,
}) => (
  <ScrollView style={customStyle} nestedScrollEnabled={true}>
    <ScrollableTabView
                locked={true}
                onChangeTab={onChangeTab}
                style={{ marginTop: 5 }}
                tabBarTextStyle={{
                  fontFamily: fonts.RBold,
                  fontSize: 12,
                }}
                tabBarPosition={'top'}
                tabBarActiveTextColor={colors.gray}
                tabBarInactiveTextColor={colors.lightGray}
                tabBarUnderlineStyle={{ backgroundColor: colors.primary }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}>
      {tabItem.map((item, key) => (<View key={key} tabLabel={item}/>))}
    </ScrollableTabView>
    <ScrollView style={{ flex: 1 }}>
      {renderTabContain(currentTab)}
    </ScrollView>
  </ScrollView>
)

export default CustomScrollableTabs;
