import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';

const CarProviders = () => {
  const providers = [
    'Alamo', 'Avis', 'Bargain Car Rentals', 'Budget', 'Dollar', 'East Coast',
    'Enterprise', 'Europcar', 'Everything Fleet', 'Hertz', 'No Birds', 'Sixt', 'Thrifty'
  ];

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Trusted Car Rental Providers
      </Text>
      
      <Card style={styles.card}>
        <Card.Content>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.providersContainer}>
              {providers.map((provider, index) => (
                <Chip
                  key={index}
                  mode="outlined"
                  style={styles.providerChip}
                  textStyle={styles.providerText}
                >
                  {provider}
                </Chip>
              ))}
            </View>
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  card: {
    elevation: 4,
    borderRadius: 11,
  },
  providersContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  providerChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  providerText: {
    fontSize: 12,
  },
});

export default CarProviders;
