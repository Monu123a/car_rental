import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, TextInput, Checkbox, Divider } from 'react-native-paper';
import Header from '../components/Header';

const BookingScreen = ({ route, navigation }) => {
  const { car } = route.params || {};
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    driverLicense: '',
    creditCard: '',
    expiryDate: '',
    cvv: '',
    insurance: false,
    gps: false,
    childSeat: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    // Simulate booking process
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    navigation.navigate('Home');
  };

  if (!car) {
    return (
      <View style={styles.container}>
        <Header title="Booking" showBack={true} />
        <View style={styles.errorContainer}>
          <Text variant="bodyLarge">No car selected for booking</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Complete Your Booking" showBack={true} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Car Summary */}
        <Card style={styles.carSummaryCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Selected Vehicle
            </Text>
            <View style={styles.carSummary}>
              <Text style={styles.carImage}>{car.image}</Text>
              <View style={styles.carDetails}>
                <Text variant="titleMedium" style={styles.carName}>
                  {car.name}
                </Text>
                <Text variant="bodyMedium" style={styles.carProvider}>
                  {car.provider}
                </Text>
                <Text variant="bodySmall" style={styles.carRating}>
                  ⭐ {car.rating} ({car.reviews} reviews)
                </Text>
              </View>
              <View style={styles.priceContainer}>
                <Text variant="headlineSmall" style={styles.price}>
                  ${car.price}
                </Text>
                <Text variant="bodySmall" style={styles.priceUnit}>
                  per day
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Personal Information */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Personal Information
            </Text>
            
            <View style={styles.nameRow}>
              <TextInput
                label="First Name"
                value={formData.firstName}
                onChangeText={(value) => handleInputChange('firstName', value)}
                mode="outlined"
                style={styles.nameInput}
              />
              <TextInput
                label="Last Name"
                value={formData.lastName}
                onChangeText={(value) => handleInputChange('lastName', value)}
                mode="outlined"
                style={styles.nameInput}
              />
            </View>
            
            <TextInput
              label="Email Address"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              mode="outlined"
              keyboardType="email-address"
              style={styles.input}
            />
            
            <TextInput
              label="Phone Number"
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              mode="outlined"
              keyboardType="phone-pad"
              style={styles.input}
            />
            
            <TextInput
              label="Driver's License Number"
              value={formData.driverLicense}
              onChangeText={(value) => handleInputChange('driverLicense', value)}
              mode="outlined"
              style={styles.input}
            />
          </Card.Content>
        </Card>

        {/* Payment Information */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Payment Information
            </Text>
            
            <TextInput
              label="Credit Card Number"
              value={formData.creditCard}
              onChangeText={(value) => handleInputChange('creditCard', value)}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
            />
            
            <View style={styles.paymentRow}>
              <TextInput
                label="Expiry Date (MM/YY)"
                value={formData.expiryDate}
                onChangeText={(value) => handleInputChange('expiryDate', value)}
                mode="outlined"
                style={styles.expiryInput}
              />
              <TextInput
                label="CVV"
                value={formData.cvv}
                onChangeText={(value) => handleInputChange('cvv', value)}
                mode="outlined"
                keyboardType="numeric"
                style={styles.cvvInput}
                secureTextEntry
              />
            </View>
          </Card.Content>
        </Card>

        {/* Additional Services */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Additional Services
            </Text>
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceInfo}>
                <Text variant="bodyLarge" style={styles.serviceName}>
                  Full Insurance Coverage
                </Text>
                <Text variant="bodyMedium" style={styles.servicePrice}>
                  $15/day
                </Text>
              </View>
              <Checkbox
                status={formData.insurance ? 'checked' : 'unchecked'}
                onPress={() => handleInputChange('insurance', !formData.insurance)}
              />
            </View>
            
            <Divider style={styles.divider} />
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceInfo}>
                <Text variant="bodyLarge" style={styles.serviceName}>
                  GPS Navigation
                </Text>
                <Text variant="bodyMedium" style={styles.servicePrice}>
                  $8/day
                </Text>
              </View>
              <Checkbox
                status={formData.gps ? 'checked' : 'unchecked'}
                onPress={() => handleInputChange('gps', !formData.gps)}
              />
            </View>
            
            <Divider style={styles.divider} />
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceInfo}>
                <Text variant="bodyLarge" style={styles.serviceName}>
                  Child Safety Seat
                </Text>
                <Text variant="bodyMedium" style={styles.servicePrice}>
                  $12/day
                </Text>
              </View>
              <Checkbox
                status={formData.childSeat ? 'checked' : 'unchecked'}
                onPress={() => handleInputChange('childSeat', !formData.childSeat)}
              />
            </View>
          </Card.Content>
        </Card>

        {/* Total */}
        <Card style={styles.totalCard}>
          <Card.Content>
            <View style={styles.totalRow}>
              <Text variant="bodyLarge">Base Rate (3 days)</Text>
              <Text variant="bodyLarge">${car.price * 3}</Text>
            </View>
            {formData.insurance && (
              <View style={styles.totalRow}>
                <Text variant="bodyMedium">Insurance (3 days)</Text>
                <Text variant="bodyMedium">$45</Text>
              </View>
            )}
            {formData.gps && (
              <View style={styles.totalRow}>
                <Text variant="bodyMedium">GPS (3 days)</Text>
                <Text variant="bodyMedium">$24</Text>
              </View>
            )}
            {formData.childSeat && (
              <View style={styles.totalRow}>
                <Text variant="bodyMedium">Child Seat (3 days)</Text>
                <Text variant="bodyMedium">$36</Text>
              </View>
            )}
            <Divider style={styles.totalDivider} />
            <View style={styles.totalRow}>
              <Text variant="titleLarge" style={styles.totalLabel}>Total</Text>
              <Text variant="titleLarge" style={styles.totalAmount}>
                ${car.price * 3 + (formData.insurance ? 45 : 0) + (formData.gps ? 24 : 0) + (formData.childSeat ? 36 : 0)}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={handleBooking}
          style={styles.bookButton}
          contentStyle={styles.bookButtonContent}
        >
          Confirm Booking
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carSummaryCard: {
    margin: 16,
    elevation: 4,
    borderRadius: 12,
  },
  carSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  carImage: {
    fontSize: 32,
    marginRight: 12,
  },
  carDetails: {
    flex: 1,
  },
  carName: {
    fontWeight: 'bold',
    color: '#333',
  },
  carProvider: {
    color: '#666',
    marginTop: 2,
  },
  carRating: {
    color: '#FFC107',
    marginTop: 4,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
  priceUnit: {
    color: '#666',
  },
  formCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 5,
    borderRadius: 12,
  },
  sectionTitle: {
    color: '#1976D2',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    flex: 0.48,
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 0.65,
  },
  cvvInput: {
    flex: 0.3,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontWeight: '500',
  },
  servicePrice: {
    color: '#1976D2',
    marginTop: 2,
  },
  divider: {
    marginVertical: 8,
    backgroundColor: '#E0E0E0',
  },
  totalCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 4,
    borderRadius: 12,
    backgroundColor: '#E3F2FD',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalDivider: {
    marginVertical: 12,
    backgroundColor: '#1976D2',
  },
  totalLabel: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
  totalAmount: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
  bookButton: {
    margin: 16,
    marginBottom: 32,
    borderRadius: 12,
  },
  bookButtonContent: {
    paddingVertical: 8,
  },
});

export default BookingScreen;
