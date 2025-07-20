import { Tabs } from 'expo-router';
import IonIcons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {

  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "green)",
      tabBarStyle: {
        backgroundColor: '#1e293b',
        borderTopWidth: 1,
        borderTopColor: "yellow",
        height: 90,
        paddingBottom: 30,
        paddingTop: 10
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      headerShown: true, 
    }}>
      <Tabs.Screen
      name='index'
      options={{
        title: "Todos",
        tabBarIcon: ({color, size}) => (
          <IonIcons name='flash-outline' size={size} color={color}/>
        )
      }}
      />
      <Tabs.Screen
      name="about"
      options={{
        title: "Settings",
        tabBarIcon: ({color, size}) => (
          <IonIcons name='settings' size={size} color={color}/>
        )
      }}
      />

    </Tabs>
  
  )
    
}

export default TabsLayout;