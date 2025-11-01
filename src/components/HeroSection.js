import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HeroSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heroContent}>
        <Text variant="displaySmall" style={styles.mainTitle}>
          The easiest way to search, compare and book a car hire in Australia
        </Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text variant="headlineMedium" style={styles.statNumber}>
              4.8
            </Text>
            <Text variant="bodyMedium" style={styles.statText}>
              From 104,015 total reviews
            </Text>
          </View>
          
          <View style={styles.statItem}>
            <Text variant="headlineMedium" style={styles.statNumber}>
              4,158,829
            </Text>
            <Text variant="bodyMedium" style={styles.statText}>
              Bookings & counting
            </Text>
          </View>
          
          <View style={styles.statItem}>
            <Text variant="headlineMedium" style={styles.statNumber}>
              2001
            </Text>
            <Text variant="bodyMedium" style={styles.statText}>
              Trusted since
            </Text>
          </View>
        </View>

        <Text variant="titleLarge" style={styles.subtitle}>
          Great value rental cars from Australia's most trusted car hire providers
        </Text>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Search')}
          style={styles.ctaButton}
          contentStyle={styles.ctaButtonContent}
        >
          Start Your Search
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 42,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#1976D2',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 24,
  },
  statText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    lineHeight: 28,
  },
  ctaButton: {
    borderRadius: 26,
    paddingHorizontal: 30,
  },
  ctaButtonContent: {
    paddingVertical: 8,
  },
});

export default HeroSection;
