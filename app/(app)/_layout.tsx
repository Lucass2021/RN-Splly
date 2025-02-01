import ExploreComponent from "@/assets/icons/explore";
import HomeComponent from "@/assets/icons/home";
import ProfileComponent from "@/assets/icons/profile";
import ScheduleComponent from "@/assets/icons/schedule";
import {Colors} from "@/theme/colors";
import {Tabs} from "expo-router";
import {Text} from "react-native";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          height: 80,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <HomeComponent
                  color={Colors.secondaryVariantOne}
                  width={20}
                  height={20}
                />
              );
            }
            return (
              <HomeComponent color={Colors.grayOne} width={20} height={20} />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={`font-TTInterphasesMedium text-base mt-1  ${focused ? "text-secondaryVariantOne" : "text-grayOne"}`}>
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <ExploreComponent
                  color={Colors.secondaryVariantOne}
                  width={20}
                  height={20}
                />
              );
            }
            return (
              <ExploreComponent color={Colors.grayOne} width={20} height={20} />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={`font-TTInterphasesMedium text-base mt-1  ${focused ? "text-secondaryVariantOne" : "text-grayOne"}`}>
              Explorar
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <ScheduleComponent
                  color={Colors.secondaryVariantOne}
                  width={20}
                  height={20}
                />
              );
            }
            return (
              <ScheduleComponent
                color={Colors.grayOne}
                width={20}
                height={20}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={`font-TTInterphasesMedium text-base mt-1 ${focused ? "text-secondaryVariantOne" : "text-grayOne"}`}>
              Agenda
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <ProfileComponent
                  color={Colors.secondaryVariantOne}
                  width={20}
                  height={20}
                />
              );
            }
            return (
              <ProfileComponent color={Colors.grayOne} width={20} height={20} />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={`font-TTInterphasesMedium text-base mt-1 ${focused ? "text-secondaryVariantOne" : "text-grayOne"}`}>
              Perfil
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
