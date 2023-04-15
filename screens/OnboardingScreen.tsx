import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

type Props = {};

const OnboardingScreen = (props: Props) => {
  return (
    <Onboarding
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
