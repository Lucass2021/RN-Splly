import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import Topic from "@/components/topic/topic";
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

  return (
    <View className="flex-1 px-7.5 pt-10 bg-white">
      <BackButtonHeader title="Privacidade" />
      <Topic topicData={topicData} />
    </View>
  );
}
