import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeBlueArea, BlueLoading } from '../../BlueComponents';
import navigationStyle from '../../components/navigationStyle';
import loc from '../../loc';
import styles from './style';

const WalletsAddMultisigHelp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();

  const stylesHook = StyleSheet.create({
    root: {
      backgroundColor: colors.elevated,
    },
    intro: {
      backgroundColor: colors.newBlue,
      borderBottomColor: colors.inputBorderColor,
    },
    introTitle: {
      color: colors.inverseForegroundColor,
    },
    introText: {
      color: colors.inverseForegroundColor,
    },
    tipsTitle: {
      color: colors.foregroundColor,
    },
    tipsText: {
      color: colors.alternativeTextColor,
    },
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <BlueLoading />
  ) : (
    <SafeBlueArea style={stylesHook.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={[styles.intro, stylesHook.intro]}>
          <Text style={[styles.introTitle, stylesHook.introTitle]}>{loc.multisig.ms_help_title}</Text>
          <Text style={[styles.introText, stylesHook.introText]}>{loc.multisig.ms_help_text}</Text>
          <Image style={styles.introImage} source={require('../../img/mshelp/mshelp-intro.png')} />
        </View>
        <View style={[styles.tip, stylesHook.tip]}>
          <Text style={[styles.introTip, stylesHook.introTip]} />
        </View>
        <View style={[styles.tips, stylesHook.tips]}>
          <Text style={[styles.tipsTitle, stylesHook.tipsTitle]}>{loc.multisig.ms_help_title1}</Text>
          <Text style={[styles.tipsText, stylesHook.tipsText]}>{loc.multisig.ms_help_1}</Text>
        </View>
        <View style={[styles.tips, stylesHook.tips]}>
          <Image style={styles.imageTip} source={require('../../img/mshelp/tip2.png')} />
          <Text style={[styles.tipsTitle, stylesHook.tipsTitle]}>{loc.multisig.ms_help_title2}</Text>
          <Text style={[styles.tipsText, stylesHook.tipsText]}>{loc.multisig.ms_help_2}</Text>
        </View>
        <View style={[styles.tips, stylesHook.tips]}>
          <Image style={styles.imageTip} source={require('../../img/mshelp/tip3.png')} />
          <Text style={[styles.tipsTitle, stylesHook.tipsTitle]}>{loc.multisig.ms_help_title3}</Text>
          <Text style={[styles.tipsText, stylesHook.tipsText]}>{loc.multisig.ms_help_3}</Text>
        </View>
        <View style={[styles.tips, stylesHook.tips]}>
          <Image style={styles.imageTip} source={require('../../img/mshelp/tip4.png')} />
          <Text style={[styles.tipsTitle, stylesHook.tipsTitle]}>{loc.multisig.ms_help_title4}</Text>
          <Text style={[styles.tipsText, stylesHook.tipsText]}>{loc.multisig.ms_help_4}</Text>
        </View>
        <View style={[styles.tips, stylesHook.tips]}>
          <Image style={styles.imageTip} source={require('../../img/mshelp/tip5.png')} />
          <Text style={[styles.tipsTitle, stylesHook.tipsTitle]}>{loc.multisig.ms_help_title5}</Text>
          <Text style={[styles.tipsText, stylesHook.tipsText]}>{loc.multisig.ms_help_5}</Text>
        </View>
      </ScrollView>
    </SafeBlueArea>
  );
};



WalletsAddMultisigHelp.navigationOptions = navigationStyle({
  title: '',
  gestureEnabled: false,
  swipeEnabled: false,
  headerStyle: {
    backgroundColor: '#0070FF',
    borderBottomWidth: 0,
    borderBottomColor: '#0070FF',
    elevation: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerTintColor: '#FFFFFF',
  headerBackTitleVisible: false,
});

export default WalletsAddMultisigHelp;
