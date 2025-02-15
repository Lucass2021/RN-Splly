import {Image, ImageProps, Pressable, View} from "react-native";
import TextComponent from "../text/text";

export type NotificationItem = {
  image: ImageProps;
  title: string;
  description: string;
  date: Date | string;
  onPress: () => void;
};

export type NotificationProps = {
  notificationData: NotificationItem[];
};

export default function Notification({notificationData}: NotificationProps) {
  const formatNotificationDate = (date: Date | string) => {
    const parsedDate = typeof date === "string" ? new Date(date) : date;

    // Notification NOT from today
    const dayString = parsedDate.toISOString().split("T")[0]; // Get day of notification
    const formatedDay = dayString.split("-").reverse().join("/").slice(0, 5); // Format notification day

    // Notification is from today
    const hourString = parsedDate.toISOString().split("T")[1]; // Get notification hour span
    const time = hourString.split(":").slice(0, 2).join(":"); // Format notification hour span if notification is from today

    const dateString = parsedDate.toISOString().split("T")[0];
    if (dateString === new Date().toISOString().split("T")[0]) {
      return time;
    } else {
      return formatedDay;
    }
  };

  return (
    <View className="px-7.5">
      {notificationData.map((item, index) => {
        return (
          <Pressable
            className="flex-row items-start justify-between py-4 border-b border-graySeven"
            key={index}
            onPress={item.onPress}>
            <Image
              source={item.image}
              className="w-20 h-20 rounded-2xl"
              resizeMode="contain"
            />

            <View className="mx-5 w-64">
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Medium"
                color="dark"
                fontSize="subtitleOne">
                {item.title}
              </TextComponent>
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Medium"
                color="grayThree"
                fontSize="subtitleThree"
                customClassName="mt-1.5">
                {item.description}
              </TextComponent>
            </View>

            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Regular"
              color="grayThree"
              fontSize="overlay"
              numberOfLines={2}
              ellipsizeMode="tail">
              {formatNotificationDate(item.date)}
            </TextComponent>
          </Pressable>
        );
      })}
    </View>
  );
}
