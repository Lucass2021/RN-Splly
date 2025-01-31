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

  const handleAcceptTermsAndConditions = () => {
    setUserTermsAndConditions(true);
    router.push("/auth/sign-up");
  };

  return (
    <View className="flex-1 px-7.5 pt-13 bg-light">
      <Topic topicData={topicData} />
      <View className="position-absolute bottom-0">
        {!userTermsAndConditions && (
          <View className="pb-10">
            <Button
              text="Aceitar"
              onPress={handleAcceptTermsAndConditions}
              disabled={userTermsAndConditions}
            />
          </View>
        )}
      </View>
    </View>
  );
}
