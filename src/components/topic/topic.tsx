import {Text, View} from "react-native";

type TopicProps = {
  topicData: {
    title: string;
    description: string;
  }[];
};

export default function Topic({topicData}: TopicProps) {
  console.log("topicData", topicData);
  return (
    <View>
      <Text>Topic</Text>
    </View>
  );
}
