import Button from "@/components/button/button";
import Topic from "@/components/topic/topic";
import {useAuthActions, useUserTermsAndConditions} from "@/store/auth";
import {router} from "expo-router";
import {View} from "react-native";

export default function TermsAndConditions() {
  const topicData = [
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
    {
      title:
        "Lorem ipsum senectus ipsum tellus integer volutpat velit tristique, vestibulum justo netus aptent aliquet ligula at?",
      description:
        "Massa ultricies pulvinar aenean pulvinar viverra maecenas molestie sociosqu dictum, id consectetur libero senectus ullamcorper tempor interdum ligula, rhoncus aliquam turpis pellentesque nisi pretium tincidunt taciti. interdum consequat pellentesque aenean fermentum sem auctor.",
    },
  ];

  const {setUserTermsAndConditions} = useAuthActions();
  const userTermsAndConditions = useUserTermsAndConditions();

  const customShadow = {
    shadowColor: "#000000", // Android and IOS
    shadowOffset: {width: 0, height: -4}, // IOS Only
    shadowOpacity: 0.05, // IOS Only
    shadowRadius: 6.7, // IOS Only
    elevation: 5, // Android only
  };

  const handleAcceptTermsAndConditions = () => {
    setUserTermsAndConditions(true);
    router.push("/auth/sign-up");
  };

  return (
    <View className="flex-1 pt-13 bg-light">
      <Topic topicData={topicData} customClassName="px-7.5" />
      {!userTermsAndConditions && (
        <View
          className="pt-2.5 pb-5 px-7.5 bg-light rounded-t-2xl"
          style={customShadow}>
          <Button
            text="Aceitar"
            onPress={handleAcceptTermsAndConditions}
            disabled={userTermsAndConditions}
          />
        </View>
      )}
    </View>
  );
}
