import notificationImage from "@/assets/images/notification-demo.png";
import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import Notification, {
  NotificationItem,
} from "@/components/notification/notification";
import {ImageProps, Platform, ScrollView, View} from "react-native";

export default function NotificationScreen() {
  const notificationData: NotificationItem[] = [
    {
      image: notificationImage as ImageProps,
      title: "Você ganhou R$ 50 de bônus para gastar aonde quiser!",
      description:
        "Lembrando que esse cupom é valido somente nessa semana, não perca e aproveite.",
      date: new Date(),
      onPress: () => console.log("Notificação 1"),
    },
    {
      image: notificationImage as ImageProps,
      title: "Hoje é o dia do barbeiro, mas quem ganha é você!",
      description:
        "Cupons aleatórios são sorteados ao fazer um agendamento, de até R$ 20, só hoje.",
      date: "2025-02-01T13:18:19.002Z",
      onPress: () => console.log("Notificação 2"),
    },
  ];

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 50 : 100}}
      showsVerticalScrollIndicator={false}>
      <View className="px-7.5">
        <BackButtonHeader title="Notificações" customClassName="mb-7" />
      </View>

      <View className="bg-lightTwo">
        <Notification notificationData={notificationData} />
      </View>
    </ScrollView>
  );
}
