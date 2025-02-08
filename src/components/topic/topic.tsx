import {FlatList, View} from "react-native";
import BackButtonHeader from "../backButtonHeader/backButtonHeader";
import TextComponent from "../text/text";

type topicData = {
  title: string;
  description: string;
};

type TopicProps = {
  topicData: topicData[];
  customClassName?: string;
};

export default function Topic({topicData, customClassName}: TopicProps) {
  const renderItem = ({item, index}: {item: topicData; index: number}) => (
    <View className={`mb-6 ${customClassName}`} key={index}>
      <TextComponent
        fontFamily="TTInterphases"
        fontWeight="SemiBold"
        color="secondaryVariantOne"
        fontSize="subtitleOne"
        customClassName="mb-2.5">
        {item.title}
      </TextComponent>
      <TextComponent
        fontFamily="TTInterphases"
        fontWeight="Regular"
        color="dark"
        fontSize="paragraphTwo">
        {item.description}
      </TextComponent>
    </View>
  );

  return (
    <FlatList
      data={topicData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className="px-7.5">
          <BackButtonHeader title="Privacidade" />
        </View>
      }
    />
  );
}
