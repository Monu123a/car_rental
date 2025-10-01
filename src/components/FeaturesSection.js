import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, IconButton } from 'react-native-paper';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'car',
      title: 'A full range of vehicles',
      description: 'Compare a huge range of vehicles, sourced from Australia\'s leading car rental providers.'
    },
    {
      icon: 'school',
      title: 'New to renting a car?',
      description: 'Learn about your licence requirements, how Australian tolls work with a hire car, and other rental information.'
    },
    {
      icon: 'home-variant',
      title: 'Campervan hire',
      description: 'Like cars only bigger, and with even more benefits. We can help you find the perfect campervan or motorhome rental.'
    },
    {
      icon: 'map-marker-path',
      title: 'Road trips',
      description: 'Plan your rental car road trips across Australia.'
    },
    {
      icon: 'tag',
      title: 'Promos',
      description: 'Save money on your next hire car with car rental deals and discounts.'
    },
    {
      icon: 'help-circle',
      title: 'Support',
      description: 'If you have more questions, we\'re here to help. Get in touch with us.'
    }
  ];

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        The Zoom Cars Advantage
      </Text>
      
      <Text variant="bodyLarge" style={styles.subtitle}>
        Everything you need to hire a car
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {features.map((feature, index) => (
          <Card key={index} style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <IconButton
                icon={feature.icon}
                size={34}
                iconColor="#1976D2"
                style={styles.featureIcon}
              />
              <View style={styles.featureText}>
                <Text variant="titleMedium" style={styles.featureTitle}>
                  {feature.title}
                </Text>
                <Text variant="bodyMedium" style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  featureCard: {
    marginBottom: 12,
    elevation: 2,
    borderRadius: 8,
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
  featureIcon: {
    marginRight: 12,
    marginTop: 4,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    marginBottom: 8,
    color: '#1976D2',
    fontWeight: '600',
  },
  featureDescription: {
    color: '#666',
    lineHeight: 20,
  },
});

export default FeaturesSection;
