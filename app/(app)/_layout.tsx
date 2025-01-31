import {FontAwesome} from "@expo/vector-icons";
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
                <FontAwesome name="list-ul" className="text-accent text-2xl" />
              );
            }
            return (
              <FontAwesome name="list-ul" className="text-body text-2xl" />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={focused ? "text-secondaryVariantOne" : "text-grayOne"}>
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
                <FontAwesome name="list-ul" className="text-accent text-2xl" />
              );
            }
            return (
              <FontAwesome name="list-ul" className="text-body text-2xl" />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={focused ? "text-secondaryVariantOne" : "text-grayOne"}>
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
                <FontAwesome name="list-ul" className="text-accent text-2xl" />
              );
            }
            return (
              <FontAwesome name="list-ul" className="text-body text-2xl" />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={focused ? "text-secondaryVariantOne" : "text-grayOne"}>
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
                <FontAwesome name="list-ul" className="text-accent text-2xl" />
              );
            }
            return (
              <FontAwesome name="list-ul" className="text-body text-2xl" />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              className={focused ? "text-secondaryVariantOne" : "text-grayOne"}>
              Perfil
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
