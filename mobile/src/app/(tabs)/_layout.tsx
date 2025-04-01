import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch(route.name){
                case("home"): 
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                case("login"): 
                    iconName = 'log-in-outline';
                    break;
                case("profile"):
                    iconName = 'person-outline';
                    break;
                default: 
                    iconName = 'help-circle-outline';
                    break;
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tabs.Screen name="home" options={{ title: 'Accueil' }} />
      <Tabs.Screen name="login" options={{ title: 'Connexion' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}

