import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import TopNavigation from "../components/TopNavigation";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const A = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.a, styles.aLayout]}>
      <Text style={styles.goodMorningMr}>{`Good Morning
Mr. Joe!`}</Text>
      <View style={styles.aChild} />
      <Image
        style={[styles.circumsearchIcon, styles.magefilterLayout]}
        resizeMode="cover"
        source={require("../assets/circumsearch.png")}
      />
      <Pressable
        style={[styles.magefilter, styles.magefilterLayout]}
        onPress={() => navigation.navigate("AFilterModel")}
      >
        <Image
          style={[styles.icon, styles.aLayout]}
          resizeMode="cover"
          source={require("../assets/magefilter.png")}
        />
      </Pressable>
      <Text style={styles.search}>Search</Text>
      <View style={[styles.aItem, styles.aItemLayout]} />
      <View style={[styles.aInner, styles.aItemLayout]} />
      <Text style={[styles.restaurants, styles.cookingTypo]}>Restaurants</Text>
      <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
      <View style={[styles.messages, styles.messagesLayout1]}>
        <TopNavigation />
        <View style={[styles.pinnedThreads, styles.pinnedThreadsPosition]}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
        <View style={styles.homeindicatorPosition}>
          <View style={[styles.homeIndicator, styles.messages2Position]} />
        </View>
      </View>
      <View style={[styles.messages1, styles.messagesLayout1]}>
        <TopNavigation />
        <View style={[styles.pinnedThreads, styles.pinnedThreadsPosition]}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
        <View style={styles.homeindicatorPosition}>
          <View style={[styles.homeIndicator, styles.messages2Position]} />
        </View>
      </View>
      <View style={[styles.messages2, styles.messages2Position]}>
        <TopNavigation />
        <View style={[styles.pinnedThreads, styles.pinnedThreadsPosition]}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
                  <Text style={styles.contactName} numberOfLines={1}>
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
        <View style={[styles.homeindicator2, styles.homeindicatorPosition]}>
          <View style={[styles.homeIndicator, styles.messages2Position]} />
        </View>
      </View>
      <Text
        style={[
          styles.satisfyYourCravingsContainer,
          styles.restaurantsThatSuitsTypo,
        ]}
      >
        <Text style={styles.satisfyYourCravings}>{`Satisfy your cravings
`}</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Text
        style={[styles.restaurantsThatSuits, styles.restaurantsThatSuitsTypo]}
      >
        Restaurants that suits to your palate
      </Text>
      <Pressable
        style={styles.viewAll}
        onPress={() => navigation.navigate("B")}
      >
        <Text style={styles.viewAll1}>View All</Text>
      </Pressable>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-6.png")}
        />
      </View>
      <Image
        style={styles.ictwotoneFavoriteIcon}
        resizeMode="cover"
        source={require("../assets/ictwotonefavorite.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.pepiconsPencilbookmarkCircl, styles.pepiconsLayout]}
        resizeMode="cover"
        source={require("../assets/pepiconspencilbookmarkcirclefilled.png")}
      />
      <Image
        style={[styles.pepiconsPencilbookmarkCircl1, styles.pepiconsLayout]}
        resizeMode="cover"
        source={require("../assets/pepiconspencilbookmarkcirclefilled.png")}
      />
      <Image
        style={[styles.pepiconsPencilbookmarkCircl2, styles.pepiconsLayout]}
        resizeMode="cover"
        source={require("../assets/pepiconspencilbookmarkcirclefilled.png")}
      />
      <Text style={[styles.nonVegetarian, styles.nonTypo]}>
        Non Vegetarian | Indian | Meat
      </Text>
      <Text style={[styles.nonVegetarian1, styles.nonTypo]}>
        Non Vegetarian | Indian | Meat
      </Text>
      <Text style={[styles.nonVegetarian2, styles.nonTypo]}>
        Non Vegetarian | Indian | Meat
      </Text>
      <Text style={[styles.chickenSaagwalaHober, styles.chickenTypo]}>
        Chicken Saagwala Hober Field
      </Text>
      <Text style={[styles.chickenBeedwalaHober, styles.chickenTypo]}>
        Chicken Beedwala Hober Field
      </Text>
      <Text style={[styles.chickenChettinadHober, styles.chickenTypo]}>
        Chicken Chettinad Hober Field
      </Text>
      <View style={[styles.rectangleView, styles.pinnedThreadsPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  aLayout: {
    width: "100%",
    overflow: "hidden",
  },
  magefilterLayout: {
    height: 28,
    width: 28,
    top: 178,
    position: "absolute",
  },
  aItemLayout: {
    height: 3,
    width: 203,
    borderTopWidth: 3,
    top: 292,
    borderStyle: "solid",
    position: "absolute",
  },
  cookingTypo: {
    height: 27,
    width: 197,
    textAlign: "center",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  messagesLayout1: {
    width: 393,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  pinnedThreadsPosition: {
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
    alignItems: "center",
    textAlign: "center",
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
  messages2Position: {
    left: "50%",
    position: "absolute",
  },
  homeindicatorPosition: {
    height: 34,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  restaurantsThatSuitsTypo: {
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameLayout: {
    height: 235,
    width: 150,
    borderRadius: Border.br_3xs,
  },
  vectorIconLayout: {
    bottom: "56.39%",
    top: "41.63%",
    width: "4.65%",
    height: "1.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pepiconsLayout: {
    height: 26,
    width: 26,
    position: "absolute",
    overflow: "hidden",
  },
  nonTypo: {
    width: 140,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    top: 591,
    height: 11,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  chickenTypo: {
    top: 549,
    width: 140,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    height: 34,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  goodMorningMr: {
    top: 86,
    width: 161,
    height: 42,
    textAlign: "left",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    left: 30,
    position: "absolute",
  },
  aChild: {
    top: 161,
    left: 15,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    width: 400,
    height: 62,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  circumsearchIcon: {
    left: 27,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  magefilter: {
    left: 374,
  },
  search: {
    top: 182,
    left: 67,
    color: Color.colorGray_100,
    width: 131,
    height: 20,
    fontSize: FontSize.calloutBold_size,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  aItem: {
    borderColor: Color.systemBackgroundDarkBasePrimary,
    left: 17,
  },
  aInner: {
    left: 217,
    borderColor: Color.colorGray_100,
  },
  restaurants: {
    top: 259,
    left: 17,
  },
  cooking: {
    top: 261,
    left: 218,
  },
  messagesAvatarIcon: {
    overflow: "hidden",
  },
  name: {
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    height: 16,
    marginTop: 5,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subheadlineRegular,
    alignSelf: "stretch",
    textAlign: "center",
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
    letterSpacing: 0,
    fontFamily: FontFamily.subheadlineRegular,
    textAlign: "left",
    color: Color.systemBackgroundDarkBasePrimary,
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
    alignSelf: "stretch",
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  message: {
    flex: 1,
  },
  content: {
    borderColor: Color.colorDarkslategray_200,
    borderBottomWidth: 0.5,
    paddingTop: Padding.p_5xs,
    marginLeft: 12,
    alignSelf: "stretch",
    borderStyle: "solid",
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
  messages: {
    top: 922,
    left: 1171,
    height: 852,
    position: "absolute",
  },
  messages1: {
    top: 912,
    left: 1194,
    height: 104,
    position: "absolute",
  },
  homeindicator2: {
    display: "none",
  },
  messages2: {
    marginLeft: -197,
    top: 0,
    height: 69,
    width: 393,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  satisfyYourCravings: {
    fontSize: FontSize.size_lg,
  },
  text: {
    fontSize: FontSize.calloutBold_size,
  },
  satisfyYourCravingsContainer: {
    top: 310,
    left: 10,
    width: 217,
    height: 20,
  },
  restaurantsThatSuits: {
    top: 329,
    left: 33,
    fontSize: 10,
    width: 162,
    height: 35,
  },
  viewAll1: {
    width: 73,
    height: 17,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.interRegular,
  },
  viewAll: {
    left: 330,
    top: 311,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 33,
  },
  rectangleParent: {
    top: 381,
    left: 25,
    flexDirection: "row",
    position: "absolute",
  },
  ictwotoneFavoriteIcon: {
    top: 388,
    left: 527,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    right: "17.91%",
    left: "77.44%",
  },
  vectorIcon1: {
    right: "60.47%",
    left: "34.88%",
  },
  pepiconsPencilbookmarkCircl: {
    top: 384,
    height: 26,
    width: 26,
    left: 30,
  },
  pepiconsPencilbookmarkCircl1: {
    left: 214,
    top: 384,
    height: 26,
    width: 26,
  },
  pepiconsPencilbookmarkCircl2: {
    top: 386,
    left: 398,
  },
  nonVegetarian: {
    left: 415,
  },
  nonVegetarian1: {
    left: 223,
  },
  nonVegetarian2: {
    left: 30,
  },
  chickenSaagwalaHober: {
    left: 223,
  },
  chickenBeedwalaHober: {
    left: 415,
  },
  chickenChettinadHober: {
    left: 30,
  },
  rectangleView: {
    top: 359,
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 485,
    height: 286,
  },
  a: {
    height: 932,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default A;
