import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {};

type DotComponentProps = {
  selected: boolean;
};

const OnboardingScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const DotComponent = ({ selected }: DotComponentProps) => {
    return (
      <View
        className={`mx-1 w-4 h-4 flex items-center justify-center rounded-full p-2 ${
          selected ? "border border-red-400" : ""
        }`}
      >
        <View
          className={`w-2 rounded-full h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          }`}
        ></View>
      </View>
    );
  };
  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/6861484.jpg")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Happy shopping",
          subtitle: "Done with react native onboading swiper",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/5124556.jpg")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Always here for you",
          subtitle: "Done with react native onboading swiper",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/4590393.jpg")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Happy services, happy customers",
          subtitle: "Done with react native onboading swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
