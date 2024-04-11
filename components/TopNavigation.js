import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const TopNavigation = () => {
  return (
    <View style={styles.topnavigation}>
      <View style={[styles.statusbar, styles.sideFlexBox1]}>
        <View style={[styles.leftSide, styles.sideFlexBox]}>
          <View style={styles.statusbarTime}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <View style={[styles.dynamicIsland, styles.sideFlexBox1]}>
          <View style={styles.statusbarDynamicisland}>
            <View style={[styles.truedepthCamera, styles.cameraPosition]} />
            <View style={[styles.facetimeCamera, styles.cameraPosition]} />
          </View>
        </View>
        <View style={[styles.rightSide, styles.sideFlexBox]}>
          <View style={styles.signalWifiBattery}>
            <Image
              style={styles.iconMobileSignal}
              resizeMode="cover"
              source={require("../assets/icon--mobile-signal.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.statusbarBatteryIcon}
              resizeMode="cover"
              source={require("../assets/-statusbarbattery.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.topnavigationContent, styles.extraSpaceBlock]}>
        <View style={[styles.leftAccessory, styles.accessoryPosition]}>
          <Image
            style={styles.backIcon}
            resizeMode="cover"
            source={require("../assets/back-icon.png")}
          />
          <Text style={[styles.leftTitle, styles.queryTypo]} numberOfLines={1}>
            Filters
          </Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.title1}>Messages</Text>
        </View>
        <View style={[styles.rightAccessory, styles.accessoryPosition]}>
          <View style={styles.iconsleft}>
            <Text style={[styles.sfSymbol, styles.symbolTypo]}>􀁍</Text>
            <Image
              style={[styles.sfSymbolEllipsiscircle, styles.symbolLayout]}
              resizeMode="cover"
              source={require("../assets/sf-symbol--ellipsiscircle.png")}
            />
            <Image
              style={[styles.sfSymbolEllipsiscircle, styles.symbolLayout]}
              resizeMode="cover"
              source={require("../assets/sf-symbol--squareandpencil.png")}
            />
            <Image
              style={styles.symbolLayout}
              resizeMode="cover"
              source={require("../assets/sf-symbol--plus.png")}
            />
          </View>
          <Text style={[styles.rightTitle, styles.symbolTypo]}>
            Right Title
          </Text>
          <View style={styles.iconsright}>
            <Text style={styles.symbolTypo}>􀍡</Text>
            <Image
              style={[styles.sfSymbolEllipsiscircle, styles.symbolLayout]}
              resizeMode="cover"
              source={require("../assets/sf-symbol--ellipsiscircle.png")}
            />
            <Image
              style={styles.symbolLayout}
              resizeMode="cover"
              source={require("../assets/sf-symbol--squareandpencil1.png")}
            />
            <Image
              style={[styles.sfSymbolEllipsiscircle, styles.symbolLayout]}
              resizeMode="cover"
              source={require("../assets/sf-symbol--plus1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.extra, styles.extraSpaceBlock]}>
        <View style={[styles.searchfield, styles.sideFlexBox1]}>
          <View style={[styles.searchfield1, styles.sideFlexBox]}>
            <Image
              style={styles.iconMagnifyingglass}
              resizeMode="cover"
              source={require("../assets/icon--magnifyingglass.png")}
            />
            <Text style={[styles.query, styles.queryTypo]}>Search</Text>
            <Image
              style={styles.sfSymbolMicrophone}
              resizeMode="cover"
              source={require("../assets/sf-symbol--microphone.png")}
            />
          </View>
          <Text style={[styles.cancel, styles.symbolTypo]}>Cancel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sideFlexBox1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  sideFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  cameraPosition: {
    overflow: "hidden",
    left: "50%",
    top: "50%",
    marginTop: -18.5,
    height: 37,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  extraSpaceBlock: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  accessoryPosition: {
    paddingBottom: Padding.p_4xs,
    paddingTop: Padding.p_4xs,
    width: 130,
    marginTop: -21,
    height: 42,
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  queryTypo: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.subheadlineRegular,
    letterSpacing: 0,
    flex: 1,
  },
  symbolTypo: {
    textAlign: "right",
    color: Color.defaultSystemBlueLight,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.subheadlineRegular,
    letterSpacing: 0,
  },
  symbolLayout: {
    marginLeft: 36,
    height: 17,
    width: 17,
  },
  time: {
    top: 1,
    fontSize: FontSize.calloutBold_size,
    lineHeight: 21,
    height: 20,
    textAlign: "center",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.subheadlineRegular,
    fontWeight: "600",
    letterSpacing: 0,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    borderRadius: Border.br_5xl,
    height: 21,
    width: 54,
  },
  leftSide: {
    paddingLeft: Padding.p_3xs,
    paddingBottom: Padding.p_10xs,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  truedepthCamera: {
    marginLeft: -62.5,
    width: 80,
  },
  facetimeCamera: {
    marginLeft: 25.5,
    width: 37,
  },
  statusbarDynamicisland: {
    width: 125,
    height: 37,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    borderRadius: Border.br_81xl,
  },
  dynamicIsland: {
    alignItems: "center",
  },
  iconMobileSignal: {
    height: 12,
    width: 18,
  },
  wifiIcon: {
    marginLeft: 8,
    width: 17,
    height: 12,
  },
  statusbarBatteryIcon: {
    width: 27,
    height: 13,
    marginLeft: 8,
  },
  signalWifiBattery: {
    flexDirection: "row",
  },
  rightSide: {
    paddingRight: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  statusbar: {
    height: 59,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  backIcon: {
    height: 24,
    width: 18,
  },
  leftTitle: {
    display: "flex",
    height: 22,
    marginLeft: 5,
    color: Color.defaultSystemBlueLight,
    textAlign: "left",
    overflow: "hidden",
    alignItems: "center",
  },
  leftAccessory: {
    paddingLeft: Padding.p_6xs,
    paddingRight: Padding.p_4xs,
    left: 0,
  },
  title1: {
    marginLeft: -39.5,
    top: 10,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    left: "50%",
    textAlign: "center",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.subheadlineRegular,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  title: {
    right: 130,
    left: 130,
    marginTop: -21,
    height: 42,
    top: "50%",
    position: "absolute",
  },
  sfSymbol: {
    display: "none",
  },
  sfSymbolEllipsiscircle: {
    display: "none",
  },
  iconsleft: {
    paddingRight: Padding.p_3xs,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  rightTitle: {
    marginLeft: 10,
    display: "none",
  },
  iconsright: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  rightAccessory: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_4xs,
    paddingRight: Padding.p_base,
    right: 0,
  },
  topnavigationContent: {
    height: 42,
    marginTop: 2,
  },
  iconMagnifyingglass: {
    width: 16,
    height: 16,
  },
  query: {
    color: Color.colorDarkslategray_100,
    marginLeft: 6,
  },
  sfSymbolMicrophone: {
    width: 12,
    height: 18,
    marginLeft: 6,
  },
  searchfield1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillColorLightTertiary,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    flexDirection: "row",
  },
  cancel: {
    marginLeft: 14,
    display: "none",
  },
  searchfield: {
    alignItems: "center",
    flexDirection: "row",
  },
  extra: {
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_mini,
  },
  topnavigation: {
    top: 0,
    backgroundColor: Color.systemBackgroundLightPrimary,
    left: 0,
    right: 0,
    position: "absolute",
  },
});

export default TopNavigation;
