import {FlatList, Text, View} from "react-native";
import Button from "@/components/button/button";
import {useAuthActions, useUserTermsAndConditions} from "@/store/auth";
import {router} from "expo-router";

type topicData = {
  title: string;
  description: string;
};

type TopicProps = {
  topicData: topicData[];
};

export default function Topic({topicData}: TopicProps) {
  const {setUserTermsAndConditions} = useAuthActions();
  const userTermsAndConditions = useUserTermsAndConditions();

  const handleAcceptTermsAndConditions = () => {
    setUserTermsAndConditions(true);
    router.push("/auth/sign-up");
  };

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

  const listFooterComponent = () => {
    return (
      <View>
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
    );
  };

  return (
    <FlatList
      data={topicData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={listFooterComponent}
    />
  );
}
