import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopNavigation from "../components/TopNavigation";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const B = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.b}>
      <View style={[styles.messages, styles.messagesPosition]}>
        <TopNavigation />
        <View style={styles.pinnedThreads}>
          <View style={styles.pinnedMessages}>
            <View style={styles.rowFlexBox}>
              <View style={styles.messagesPinnedmessage}>
                <Image
                  style={[styles.messagesAvatarIcon, styles.messagesLayout]}
                  resizeMode="cover"
                  source={require("../assets/-messagesavatar.png")}
                />
                <Text style={styles.name} numberOfLines={1}>
                  Kristen
                </Text>
              </View>
              <View style={styles.messagesPinnedmessage}>
                <Image
                  style={[styles.messagesAvatarIcon, styles.messagesLayout]}
                  resizeMode="cover"
                  source={require("../assets/-messagesavatar1.png")}
                />
                <Text style={styles.name} numberOfLines={1}>
                  Peter Herbert Barnaba
                </Text>
              </View>
              <View style={styles.messagesPinnedmessage}>
                <View style={[styles.messagesAvatar, styles.messagesLayout]}>
                  <LinearGradient
                    style={styles.messagesAvatar1}
                    locations={[0, 1]}
                    colors={["#ff8278", "#fd5548"]}
                    useAngle={true}
                    angle={180}
                  >
                    <Image
                      style={[styles.initialsIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-initials.png")}
                    />
                    <Text style={[styles.initials, styles.emojiFlexBox]}>
                      SJ
                    </Text>
                  </LinearGradient>
                  <View style={styles.messagesAvatar2}>
                    <Text style={[styles.emoji, styles.emojiPosition]}>🌻</Text>
                  </View>
                  <Image
                    style={[styles.messagesAvatarIcon2, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/-messagesavatar2.png")}
                  />
                </View>
                <Text style={styles.name} numberOfLines={1}>
                  Cooking!
                </Text>
              </View>
            </View>
            <View style={[styles.rowPinnedMessages1, styles.rowFlexBox]}>
              <View style={styles.messagesPinnedmessage}>
                <Image
                  style={[styles.messagesAvatarIcon, styles.messagesLayout]}
                  resizeMode="cover"
                  source={require("../assets/-messagesavatar.png")}
                />
                <Text style={styles.name} numberOfLines={1}>
                  Kristen
                </Text>
              </View>
              <View style={styles.messagesPinnedmessage}>
                <Image
                  style={[styles.messagesAvatarIcon, styles.messagesLayout]}
                  resizeMode="cover"
                  source={require("../assets/-messagesavatar3.png")}
                />
                <Text style={styles.name} numberOfLines={1}>
                  Kristen
                </Text>
              </View>
              <View style={styles.messagesPinnedmessage}>
                <Image
                  style={[styles.messagesAvatarIcon, styles.messagesLayout]}
                  resizeMode="cover"
                  source={require("../assets/-messagesavatar.png")}
                />
                <Text style={styles.name} numberOfLines={1}>
                  Kristen
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.messageThreads}>
            <View style={styles.messagesFlexBox}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.messagesFlexBox}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.messagesFlexBox}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagesThreadrow3, styles.messagesFlexBox]}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagesThreadrow3, styles.messagesFlexBox]}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagesThreadrow3, styles.messagesFlexBox]}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagesThreadrow3, styles.messagesFlexBox]}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagesThreadrow3, styles.messagesFlexBox]}>
              <Image
                style={styles.messagesAvatarIcon6}
                resizeMode="cover"
                source={require("../assets/-messagesavatar4.png")}
              />
              <View style={styles.content}>
                <View style={[styles.contactTime, styles.messageFlexBox]}>
                  <Text
                    style={[styles.contactName, styles.contactNameClr]}
                    numberOfLines={1}
                  >
                    Contact Name
                  </Text>
                  <View style={styles.timeChevron}>
                    <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
                    <Image
                      style={styles.sfSymbolChevronright}
                      resizeMode="cover"
                      source={require("../assets/sf-symbol--chevronright.png")}
                    />
                  </View>
                </View>
                <View style={[styles.message, styles.messageFlexBox]}>
                  <Text
                    style={[styles.messagePreview, styles.timeTypo]}
                    numberOfLines={2}
                  >
                    Message preview...
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.messagesPosition]} />
        </View>
      </View>
      <Text style={[styles.satisfyYourCravings, styles.contactNameClr]}>
        Satisfy your Cravings
      </Text>
      <Pressable style={styles.vector} onPress={() => navigation.navigate("A")}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.pepiconsPopbookmarkFilledC, styles.pepiconsLayout]}
          resizeMode="cover"
          source={require("../assets/pepiconspopbookmarkfilledcircle.png")}
        />
        <Image
          style={[styles.ictwotoneFavoriteIcon, styles.ictwotoneIconLayout1]}
          resizeMode="cover"
          source={require("../assets/ictwotonefavorite1.png")}
        />
        <Text style={[styles.chickenChettinadHober, styles.chickenTypo2]}>
          Chicken Chettinad Hober Field
        </Text>
        <Text style={[styles.nonVegetarian, styles.nonTypo1]}>
          Non Vegetarian | Indian | Meat
        </Text>
        <Image
          style={[styles.pepiconsPopbookmarkFilledC1, styles.pepiconsPosition]}
          resizeMode="cover"
          source={require("../assets/pepiconspopbookmarkfilledcircle.png")}
        />
        <Image
          style={[styles.ictwotoneFavoriteIcon1, styles.ictwotoneIconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonefavorite1.png")}
        />
        <Text style={[styles.chickenChettinadHober1, styles.chickenTypo1]}>
          Chicken Chettinad Hober Field
        </Text>
        <Text style={[styles.nonVegetarian1, styles.nonTypo1]}>
          Non Vegetarian | Indian | Meat
        </Text>
        <Image
          style={[styles.pepiconsPopbookmarkFilledC2, styles.pepiconsPosition]}
          resizeMode="cover"
          source={require("../assets/pepiconspopbookmarkfilledcircle.png")}
        />
        <Image
          style={[
            styles.ictwotoneFavoriteIcon2,
            styles.ictwotoneFavoriteIcon2Position,
          ]}
          resizeMode="cover"
          source={require("../assets/ictwotonefavorite1.png")}
        />
        <Text style={[styles.chickenChettinadHober2, styles.chickenTypo]}>
          Chicken Chettinad Hober Field
        </Text>
        <Text style={[styles.nonVegetarian2, styles.nonTypo1]}>
          Non Vegetarian | Indian | Meat
        </Text>
        <Image
          style={[styles.pepiconsPopbookmarkFilledC3, styles.pepiconsLayout]}
          resizeMode="cover"
          source={require("../assets/pepiconspopbookmarkfilledcircle.png")}
        />
        <Image
          style={[styles.ictwotoneFavoriteIcon3, styles.ictwotoneIconPosition]}
          resizeMode="cover"
          source={require("../assets/ictwotonefavorite1.png")}
        />
        <Text style={[styles.chickenSaagwalaHober, styles.chickenTypo2]}>
          Chicken Saagwala Hober Field
        </Text>
        <Text style={[styles.nonVegetarian3, styles.nonTypo]}>
          Non Vegetarian | Indian | Meat
        </Text>
        <Image
          style={[
            styles.pepiconsPopbookmarkFilledC4,
            styles.ictwotoneFavoriteIcon1Position,
          ]}
          resizeMode="cover"
          source={require("../assets/pepiconspopbookmarkfilledcircle.png")}
        />
        <Image
          style={[styles.ictwotoneFavoriteIcon4, styles.ictwotoneIconLayout1]}
          resizeMode="cover"
          source={require("../assets/ictwotonefavorite1.png")}
        />
        <Text style={[styles.chickenSaagwalaHober1, styles.chickenTypo1]}>
          Chicken Saagwala Hober Field
        </Text>
        <Text style={[styles.nonVegetarian4, styles.nonTypo]}>
          Non Vegetarian | Indian | Meat
        </Text>
        <Image
          style={[
            styles.pepiconsPopbookmarkFilledC5,
            styles.ictwotoneFavoriteIcon2Position,
          ]}
          resizeMode="cover"
          source={require("../assets/pepiconspopbookmarkfilledcircle.png")}
        />
        <Image
          style={[styles.ictwotoneFavoriteIcon5, styles.ictwotoneIconPosition]}
          resizeMode="cover"
          source={require("../assets/ictwotonefavorite1.png")}
        />
        <Text style={[styles.chickenSaagwalaHober2, styles.chickenTypo]}>
          Chicken Saagwala Hober Field
        </Text>
        <Text style={[styles.nonVegetarian5, styles.nonTypo]}>
          Non Vegetarian | Indian | Meat
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messagesPosition: {
    left: "50%",
    position: "absolute",
  },
  messagesLayout: {
    height: 88,
    width: 88,
    borderRadius: Border.br_81xl,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  emojiFlexBox: {
    justifyContent: "center",
    color: Color.systemBackgroundLightPrimary,
    fontFamily: FontFamily.sFProRounded,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    alignItems: "center",
  },
  emojiPosition: {
    top: 6,
    position: "absolute",
  },
  rowFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  messageFlexBox: {
    paddingRight: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  contactNameClr: {
    color: Color.systemBackgroundDarkBasePrimary,
    textAlign: "left",
  },
  timeTypo: {
    lineHeight: 20,
    fontSize: FontSize.subheadlineRegular_size,
    letterSpacing: 0,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subheadlineRegular,
  },
  messagesFlexBox: {
    paddingLeft: Padding.p_7xl,
    height: 76,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  frameLayout: {
    height: 235,
    width: 150,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  frameInnerLayout: {
    top: 265,
    height: 235,
    width: 150,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameChildLayout: {
    top: 530,
    height: 235,
    width: 150,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pepiconsLayout: {
    height: 26,
    width: 26,
  },
  ictwotoneIconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  chickenTypo2: {
    width: 140,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: 173,
    height: 34,
    textAlign: "left",
    color: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  nonTypo1: {
    fontSize: FontSize.size_5xs,
    width: 140,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 11,
    textAlign: "left",
    color: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  pepiconsPosition: {
    left: 8,
    height: 26,
    width: 26,
    position: "absolute",
    overflow: "hidden",
  },
  ictwotoneIconLayout: {
    left: 125,
    height: 24,
    width: 24,
  },
  chickenTypo1: {
    top: 438,
    width: 140,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    height: 34,
    textAlign: "left",
    color: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  ictwotoneFavoriteIcon2Position: {
    top: 535,
    position: "absolute",
    overflow: "hidden",
  },
  chickenTypo: {
    top: 703,
    width: 140,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    height: 34,
    textAlign: "left",
    color: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  ictwotoneIconPosition: {
    left: 309,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  nonTypo: {
    width: 124,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 11,
    textAlign: "left",
    color: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  ictwotoneFavoriteIcon1Position: {
    top: 270,
    position: "absolute",
    overflow: "hidden",
  },
  messagesAvatarIcon: {
    overflow: "hidden",
  },
  name: {
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    height: 16,
    marginTop: 5,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subheadlineRegular,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  messagesPinnedmessage: {
    alignItems: "center",
  },
  initialsIcon: {
    height: "32.34%",
    width: "44.26%",
    top: "34.89%",
    right: "28.51%",
    bottom: "32.77%",
    left: "27.23%",
    position: "absolute",
  },
  initials: {
    width: "64.26%",
    top: "24.26%",
    left: "17.87%",
    fontSize: FontSize.size_7xs_3,
    lineHeight: 6,
    display: "none",
    position: "absolute",
  },
  messagesAvatar1: {
    height: "26.7%",
    width: "26.7%",
    top: "64.43%",
    right: "51.02%",
    bottom: "8.86%",
    left: "22.27%",
    borderRadius: 27,
    backgroundColor: "transparent",
    position: "absolute",
    overflow: "hidden",
  },
  emoji: {
    fontSize: FontSize.size_8xl_2,
    lineHeight: 18,
    display: "flex",
    width: 33,
    height: 33,
    left: 6,
    justifyContent: "center",
    color: Color.systemBackgroundLightPrimary,
    fontFamily: FontFamily.sFProRounded,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    alignItems: "center",
  },
  messagesAvatar2: {
    height: "51.14%",
    width: "51.14%",
    top: "8.86%",
    right: "35.57%",
    bottom: "40%",
    left: "13.3%",
    borderRadius: 77,
    backgroundColor: Color.colorThistle,
    position: "absolute",
    overflow: "hidden",
  },
  messagesAvatarIcon2: {
    height: "35.57%",
    width: "35.57%",
    top: "48.86%",
    right: "11.14%",
    bottom: "15.57%",
    left: "53.3%",
    borderRadius: 53,
    position: "absolute",
  },
  messagesAvatar: {
    backgroundColor: Color.systemBackgroundLightSecondary,
  },
  rowPinnedMessages1: {
    marginTop: 15,
    display: "none",
  },
  pinnedMessages: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  messagesAvatarIcon6: {
    width: 45,
    height: 45,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  contactName: {
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 22,
    fontWeight: "600",
    height: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.subheadlineRegular,
    overflow: "hidden",
    flex: 1,
  },
  time: {
    textAlign: "right",
  },
  sfSymbolChevronright: {
    width: 6,
    marginLeft: 14,
    height: 11,
  },
  timeChevron: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  contactTime: {
    alignItems: "center",
  },
  messagePreview: {
    textAlign: "left",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  message: {
    flex: 1,
  },
  content: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderBottomWidth: 0.5,
    paddingTop: Padding.p_5xs,
    marginLeft: 12,
    alignSelf: "stretch",
    flex: 1,
  },
  messagesThreadrow3: {
    display: "none",
  },
  messageThreads: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  pinnedThreads: {
    top: 166,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
  },
  homeindicator: {
    bottom: 0,
    height: 34,
    display: "none",
    left: 0,
    right: 0,
    position: "absolute",
  },
  messages: {
    marginLeft: -215,
    width: 393,
    height: 69,
    top: 0,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  satisfyYourCravings: {
    top: 78,
    left: 83,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    width: 247,
    height: 42,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "8.6%",
    top: "8.8%",
    right: "83.72%",
    bottom: "89.16%",
    width: "7.67%",
    height: "2.04%",
    position: "absolute",
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 183,
  },
  frameInner: {
    left: 0,
  },
  rectangleIcon: {
    left: 183,
  },
  frameChild1: {
    left: 0,
  },
  frameChild2: {
    left: 183,
  },
  pepiconsPopbookmarkFilledC: {
    left: 7,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  ictwotoneFavoriteIcon: {
    left: 124,
    top: 5,
  },
  chickenChettinadHober: {
    left: 5,
  },
  nonVegetarian: {
    top: 213,
    left: 5,
  },
  pepiconsPopbookmarkFilledC1: {
    top: 271,
  },
  ictwotoneFavoriteIcon1: {
    top: 270,
    position: "absolute",
    overflow: "hidden",
  },
  chickenChettinadHober1: {
    left: 6,
  },
  nonVegetarian1: {
    top: 478,
    left: 6,
  },
  pepiconsPopbookmarkFilledC2: {
    top: 536,
  },
  ictwotoneFavoriteIcon2: {
    left: 125,
    height: 24,
    width: 24,
  },
  chickenChettinadHober2: {
    left: 6,
  },
  nonVegetarian2: {
    top: 743,
    left: 6,
  },
  pepiconsPopbookmarkFilledC3: {
    left: 189,
    top: 5,
    position: "absolute",
    overflow: "hidden",
  },
  ictwotoneFavoriteIcon3: {
    top: 7,
  },
  chickenSaagwalaHober: {
    left: 191,
  },
  nonVegetarian3: {
    left: 191,
    top: 213,
  },
  pepiconsPopbookmarkFilledC4: {
    left: 187,
    height: 26,
    width: 26,
  },
  ictwotoneFavoriteIcon4: {
    top: 272,
    left: 307,
  },
  chickenSaagwalaHober1: {
    left: 189,
  },
  nonVegetarian4: {
    left: 189,
    top: 478,
  },
  pepiconsPopbookmarkFilledC5: {
    left: 189,
    height: 26,
    width: 26,
  },
  ictwotoneFavoriteIcon5: {
    top: 537,
  },
  chickenSaagwalaHober2: {
    left: 191,
  },
  nonVegetarian5: {
    left: 191,
    top: 743,
  },
  rectangleParent: {
    top: 141,
    left: 42,
    width: 333,
    height: 765,
    position: "absolute",
  },
  b: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default B;
