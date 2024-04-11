import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopNavigation from "../components/TopNavigation";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const AFilterModel = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aFilterModel, styles.messagesBg]}>
      <View style={[styles.messages, styles.messagesPosition]}>
        <TopNavigation />
        <View style={[styles.pinnedThreads, styles.dietPosition]}>
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
                    <Text style={[styles.emoji, styles.emojiFlexBox]}>🌻</Text>
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
                    style={[styles.contactName, styles.contactNameFlexBox]}
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
        <View style={[styles.homeindicator, styles.dietPosition]}>
          <View style={[styles.homeIndicator, styles.messagesPosition]} />
        </View>
      </View>
      <Text style={styles.filters}>Filters</Text>
      <View style={styles.aFilterModelChild} />
      <Text style={[styles.diet, styles.dietTypo]}>Diet</Text>
      <Text style={[styles.cuisines, styles.dietTypo]}>Cuisines</Text>
      <Text style={[styles.proteins, styles.dietTypo]}>Proteins</Text>
      <Pressable
        style={[styles.cancel, styles.cancelPosition]}
        onPress={() => navigation.navigate("A")}
      >
        <Text style={styles.dietTypo}>Cancel</Text>
      </Pressable>
      <View style={[styles.aFilterModelItem, styles.filterLayout]} />
      <View style={[styles.aFilterModelInner, styles.filterLayout]} />
      <View style={[styles.rectangleView, styles.filterLayout]} />
      <View style={[styles.aFilterModelChild1, styles.filterChildLayout]} />
      <View style={[styles.aFilterModelChild2, styles.filterChildLayout]} />
      <View style={[styles.aFilterModelChild3, styles.filterChildLayout]} />
      <View style={[styles.aFilterModelChild4, styles.filterLayout]} />
      <Text style={[styles.vegetarian, styles.veganTypo]}>Vegetarian</Text>
      <Text style={[styles.indian, styles.veganTypo]}>Indian</Text>
      <Text style={[styles.chicken, styles.beefTypo]}>Chicken</Text>
      <Text style={[styles.beef, styles.beefTypo]}>Beef</Text>
      <Text style={[styles.mediterranean, styles.mediterraneanTypo]}>
        Mediterranean
      </Text>
      <Text style={[styles.nonVegetarian, styles.mediterraneanTypo]}>
        Non-Vegetarian
      </Text>
      <Text style={[styles.vegan, styles.veganTypo]}>Vegan</Text>
      <View style={styles.aFilterModelChild5} />
      <Pressable
        style={[styles.applyFilters, styles.cancelPosition]}
        onPress={() => navigation.navigate("A")}
      >
        <Text style={styles.applyFilters1}>Apply Filters</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  messagesBg: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    overflow: "hidden",
  },
  messagesPosition: {
    left: "50%",
    position: "absolute",
  },
  dietPosition: {
    left: 0,
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
    position: "absolute",
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
  contactNameFlexBox: {
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
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
  dietTypo: {
    height: 37,
    width: 96,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.systemBackgroundDarkBasePrimary,
    textAlign: "center",
  },
  cancelPosition: {
    top: 870,
    position: "absolute",
  },
  filterLayout: {
    width: 120,
    borderWidth: 1,
    borderColor: Color.colorDarkblue,
    borderRadius: Border.br_xl,
    height: 40,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  filterChildLayout: {
    left: 162,
    width: 120,
    borderWidth: 1,
    borderColor: Color.colorDarkblue,
    borderRadius: Border.br_xl,
    height: 40,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  veganTypo: {
    width: 93,
    fontFamily: FontFamily.interRegular,
    color: Color.systemBackgroundDarkBasePrimary,
    height: 16,
    textAlign: "center",
    fontSize: FontSize.caption1Regular_size,
    position: "absolute",
  },
  beefTypo: {
    top: 585,
    width: 93,
    fontFamily: FontFamily.interRegular,
    color: Color.systemBackgroundDarkBasePrimary,
    height: 16,
    textAlign: "center",
    fontSize: FontSize.caption1Regular_size,
    position: "absolute",
  },
  mediterraneanTypo: {
    left: 175,
    width: 93,
    fontFamily: FontFamily.interRegular,
    color: Color.systemBackgroundDarkBasePrimary,
    height: 16,
    textAlign: "center",
    fontSize: FontSize.caption1Regular_size,
    position: "absolute",
  },
  messagesAvatarIcon: {
    overflow: "hidden",
  },
  name: {
    lineHeight: 16,
    marginTop: 5,
    height: 16,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subheadlineRegular,
    fontSize: FontSize.caption1Regular_size,
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
  },
  initials: {
    width: "64.26%",
    top: "24.26%",
    left: "17.87%",
    fontSize: FontSize.size_7xs_3,
    lineHeight: 6,
    display: "none",
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
    top: 6,
    left: 6,
    fontSize: FontSize.size_8xl_2,
    lineHeight: 18,
    display: "flex",
    width: 33,
    height: 33,
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
    color: Color.systemBackgroundDarkBasePrimary,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.subheadlineRegular,
  },
  time: {
    textAlign: "right",
  },
  sfSymbolChevronright: {
    width: 6,
    height: 11,
    marginLeft: 14,
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
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  message: {
    flex: 1,
  },
  content: {
    borderColor: Color.colorDarkslategray_200,
    borderBottomWidth: 0.5,
    paddingTop: Padding.p_5xs,
    marginLeft: 12,
    borderStyle: "solid",
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
    right: 0,
    left: 0,
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
    right: 0,
    left: 0,
  },
  messages: {
    marginLeft: -197,
    top: 0,
    width: 393,
    height: 69,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  filters: {
    top: 156,
    left: -77,
    fontSize: 40,
    width: 316,
    height: 40,
    fontFamily: FontFamily.interRegular,
    color: Color.systemBackgroundDarkBasePrimary,
    textAlign: "center",
    position: "absolute",
  },
  aFilterModelChild: {
    top: 209,
    left: 19,
    borderColor: Color.colorGray_100,
    borderTopWidth: 4,
    width: 375,
    height: 4,
    borderStyle: "solid",
    position: "absolute",
  },
  diet: {
    top: 230,
    left: 0,
    position: "absolute",
  },
  cuisines: {
    top: 344,
    left: 12,
    position: "absolute",
  },
  proteins: {
    top: 529,
    left: 18,
    position: "absolute",
  },
  cancel: {
    left: 41,
  },
  aFilterModelItem: {
    left: 22,
    borderWidth: 1,
    borderColor: Color.colorDarkblue,
    borderRadius: Border.br_xl,
    top: 267,
  },
  aFilterModelInner: {
    top: 391,
    left: 22,
    borderWidth: 1,
    borderColor: Color.colorDarkblue,
    borderRadius: Border.br_xl,
  },
  rectangleView: {
    top: 573,
    left: 22,
    borderWidth: 1,
    borderColor: Color.colorDarkblue,
    borderRadius: Border.br_xl,
  },
  aFilterModelChild1: {
    top: 573,
  },
  aFilterModelChild2: {
    top: 391,
  },
  aFilterModelChild3: {
    top: 267,
  },
  aFilterModelChild4: {
    left: 302,
    top: 267,
  },
  vegetarian: {
    left: 36,
    top: 281,
  },
  indian: {
    top: 403,
    left: 36,
  },
  chicken: {
    left: 36,
  },
  beef: {
    left: 174,
  },
  mediterranean: {
    top: 403,
  },
  nonVegetarian: {
    top: 281,
  },
  vegan: {
    top: 278,
    left: 319,
  },
  aFilterModelChild5: {
    top: 850,
    left: 189,
    borderRadius: 30,
    backgroundColor: Color.colorDarkblue,
    width: 227,
    height: 63,
    position: "absolute",
  },
  applyFilters1: {
    width: 140,
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "center",
  },
  applyFilters: {
    left: 233,
  },
  aFilterModel: {
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default AFilterModel;
