import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Ensure this component exists and works
import { Colors } from '@/constants/Colors'; // Ensure this is properly defined
import { useColorScheme } from '@/hooks/useColorScheme'; // Ensure this is properly defined
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Active tab color set to blue
        headerShown: false, // Default: no header
      }}
    >

         {/* Post Screen with Home Icon */}
         <Tabs.Screen
        name="Post"
        options={{
          title: 'Home', // Updated Title for Home
          headerShown: false, // No header for Home
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
     <Tabs.Screen
        name="postcreate"
        options={{
          title: 'Post',
          headerShown: false, // No header for Post
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'create' : 'create-outline'} color={color} />
          ),
        }}
      />

      {/* Profile Screen - Header shown */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile', // Title for the Profile screen
          headerShown: false, // Show header for Profile screen
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />

<Tabs.Screen
  name="GridMenu"
  options={{
    title: 'Menu', // Title for the GridMenu screen
    headerShown: false, // No header for this screen
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon name={focused ? 'grid' : 'grid-outline'} color={color} />
    ), // Uses Ionicons grid icons for a grid menu feel
  }}
/>
<Tabs.Screen
  name="RiseGpt"
  options={{
    title: 'RiseGPT',
    headerShown: false,
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon name="logo-android" color={color} />
    ),
  }}
/>



      

      {/* Update Profile Screen */}
      <Tabs.Screen
        name="updateprofile"
        options={{
          title: 'Update Profile',
          headerShown: false, // No header for Update Profile
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'refresh' : 'refresh-outline'} color={color} />
          ),
        }}
      />


      {/* Chats List Screen */}
      <Tabs.Screen
        name="ChatsListScreen"
        options={{
          title: 'Chats',
          headerShown: false, // No header for Chats
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />
          ),
        }}
      />

      {/* Routine Manager Screen */}
      <Tabs.Screen
        name="RoutineManagerScreen"
        options={{
          title: 'Routine',
          headerShown: false, // No header for Routine
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ), // Using calendar icons for Routine
        }}
      />

            {/* Routine Manager Screen */}
            <Tabs.Screen
  name="HabitTracker"
  options={{
    title: 'Track',
    headerShown: false, // No header for Habit Tracker
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon
        name={focused ? 'analytics' : 'stats-chart-outline'} // Compatible Ionicons icons
        color={color}
      />
    ),
  }}
/>




<Tabs.Screen
        name="scheduleai"
        options={{
          title: 'Schedule',
          headerShown: false, // No header for Routine
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ), // Using calendar icons for Routine
        }}
      />

      {/* Message Screen - Hidden from Tab Bar */}
      <Tabs.Screen
        name="ChatMessagesScreen"
        options={{
          title: 'Messages',
          headerShown: false, // No header for Messages
          tabBarButton: () => null, // Hide from the Tab Bar
        }}
      />


    </Tabs>
  );
}