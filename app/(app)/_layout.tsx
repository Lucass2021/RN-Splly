import ExploreComponent from "@/assets/icons/explore";
import HomeComponent from "@/assets/icons/home";
import ProfileComponent from "@/assets/icons/profile";
import ScheduleComponent from "@/assets/icons/schedule";
import TextComponent from "@/components/text/text";
import {Colors} from "@/theme/colors";
import {Tabs} from "expo-router";

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
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Medium"
              color={`${focused ? "secondaryVariantOne" : "grayOne"}`}
              fontSize="subtitleTwo"
              customClassName="mt-1">
              Home
            </TextComponent>
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
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Medium"
              color={`${focused ? "secondaryVariantOne" : "grayOne"}`}
              fontSize="subtitleTwo"
              customClassName="mt-1">
              Explorar
            </TextComponent>
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
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Medium"
              color={`${focused ? "secondaryVariantOne" : "grayOne"}`}
              fontSize="subtitleTwo"
              customClassName="mt-1">
              Agenda
            </TextComponent>
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
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Medium"
              color={`${focused ? "secondaryVariantOne" : "grayOne"}`}
              fontSize="subtitleTwo"
              customClassName="mt-1">
              Perfil
            </TextComponent>
          ),
        }}
      />

      <Tabs.Screen
        name="filter"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="barber-list"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="edit-profile"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="delete-account"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
