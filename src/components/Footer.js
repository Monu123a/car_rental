import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Divider, IconButton } from 'react-native-paper';

const Footer = () => {
  const cities = [
    'Adelaide', 'Brisbane', 'Cairns', 'Canberra', 'Darwin', 
    'Gold Coast', 'Hobart', 'Melbourne', 'Perth', 'Sydney'
  ];

  const providers = [
    'Alamo', 'Avis', 'Budget', 'Enterprise', 'Europcar', 
    'Hertz', 'Sixt', 'Thrifty'
  ];

  return (
    <View style={styles.container}>
      <Card style={styles.footerCard}>
        <Card.Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Popular Destinations */}
            <View style={styles.section}>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Popular Destinations
              </Text>
              <View style={styles.cityContainer}>
                {cities.map((city, index) => (
                  <Text key={index} variant="bodySmall" style={styles.cityText}>
                    {city}
                  </Text>
                ))}
              </View>
            </View>

            <Divider style={styles.divider} />

            {/* Car Rental Providers */}
            <View style={styles.section}>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Car Rental Providers
              </Text>
              <View style={styles.providerContainer}>
                {providers.map((provider, index) => (
                  <Text key={index} variant="bodySmall" style={styles.providerText}>
                    {provider}
                  </Text>
                ))}
              </View>
            </View>

            <Divider style={styles.divider} />

            {/* Contact Information */}
            <View style={styles.section}>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Contact Us
              </Text>
              
              <View style={styles.contactItem}>
                <IconButton icon="phone" size={16} iconColor="#1976D2" />
                <View style={styles.contactText}>
                  <Text variant="bodySmall" style={styles.contactLabel}>
                    Car Rental
                  </Text>
                  <Text variant="bodySmall" style={styles.contactValue}>
                    1300 722 920
                  </Text>
                  <Text variant="bodySmall" style={styles.contactHours}>
                    9AM-5PM AEST (Mon-Fri)
                  </Text>
                </View>
              </View>

              <View style={styles.contactItem}>
                <IconButton icon="email" size={16} iconColor="#1976D2" />
                <View style={styles.contactText}>
                  <Text variant="bodySmall" style={styles.contactLabel}>
                    Email
                  </Text>
                  <Text variant="bodySmall" style={styles.contactValue}>
                    info@zoomcars.com.au
                  </Text>
                </View>
              </View>
            </View>

            <Divider style={styles.divider} />

            {/* Social Media */}
            <View style={styles.section}>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Follow Us
              </Text>
              <View style={styles.socialContainer}>
                <IconButton icon="facebook" size={24} iconColor="#1976D2" />
                <IconButton icon="instagram" size={24} iconColor="#1976D2" />
                <IconButton icon="twitter" size={24} iconColor="#1976D2" />
                <IconButton icon="youtube" size={24} iconColor="#1976D2" />
              </View>
            </View>

            <Divider style={styles.divider} />

            {/* Copyright */}
            <View style={styles.copyrightSection}>
              <Text variant="bodySmall" style={styles.copyrightText}>
                ©2025 Zoom Cars Pty Ltd. ABN 19 050 417 037
              </Text>
              <Text variant="bodySmall" style={styles.copyrightText}>
                Privacy Policy | Terms and Conditions
              </Text>
            </View>
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    paddingTop: 22,
  },
  footerCard: {
    elevation: 0,
    borderRadius: 0,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#1976D2',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cityText: {
    color: '#666',
    marginRight: 12,
    marginBottom: 8,
  },
  providerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  providerText: {
    color: '#666',
    marginRight: 12,
    marginBottom: 8,
  },
  divider: {
    marginVertical: 16,
    backgroundColor: '#E0E0E0',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    flex: 1,
  },
  contactLabel: {
    color: '#1976D2',
    fontWeight: '600',
  },
  contactValue: {
    color: '#333',
    marginTop: 2,
  },
  contactHours: {
    color: '#666',
    fontSize: 10,
    marginTop: 2,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  copyrightSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  copyrightText: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default Footer;
