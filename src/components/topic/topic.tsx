import {FlatList, Text, View} from "react-native";
import BackButtonHeader from "../backButtonHeader/backButtonHeader";

type topicData = {
  title: string;
  description: string;
};

type TopicProps = {
  topicData: topicData[];
};

export default function Topic({topicData}: TopicProps) {
  const renderItem = ({item, index}: {item: topicData; index: number}) => (
    <View className="mb-6" key={index}>
      <Text className="font-TTInterphasesSemiBold text-lg color-secondaryVariantOne mb-2.5">
        {item.title}
      </Text>
      <Text className="font-TTInterphasesRegular text-base color-black">
        {item.description}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={topicData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<BackButtonHeader title="Privacidade" />}
    />
  );
}
