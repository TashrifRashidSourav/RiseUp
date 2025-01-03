import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Ensure this component exists and works
import { Colors } from '@/constants/Colors'; // Ensure this is properly defined
import { useColorScheme } from '@/hooks/useColorScheme'; // Ensure this is properly defined

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Change active tab color to blue
        headerShown: false, // Default for all screens is no header
      }}
    >
      {/* Profile Screen - Header shown */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile', // Correct title for the screen
          headerShown: true, // Show header for the Profile screen
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />

      {/* Update Profile Screen - Header hidden */}
      <Tabs.Screen
        name="updateprofile"
        options={{
          title: 'Update Profile',
          headerShown: false, // Header hidden
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'refresh' : 'refresh-outline'} color={color} />
          ),
        }}
      />

      {/* Post Screen - Header hidden */}
      <Tabs.Screen
        name="Post"
        options={{
          title: 'Post',
          headerShown: false, // Header hidden
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'create' : 'create-outline'} color={color} />
          ),
        }}
      />

      {/* Chat List Screen */}
      <Tabs.Screen
        name="ChatsListScreen" // Correct name matches your file structure
        options={{
          title: 'Chats', // Title for Chats List
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />
          ),
        }}
      />

      {/* Chat Messages Screen */}
      <Tabs.Screen
        name="ChatMessagesScreen" // Matches the name in your file structure
        options={{
          title: 'Messages',
          headerShown: false, // Header hidden
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'mail' : 'mail-outline'} color={color} />
          ),
        }}
      />

      {/* Wallet Screen - Header hidden */}
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          headerShown: false, // Header hidden
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
