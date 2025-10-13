import React, { useState } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Card, TextInput, Button, Text, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SearchCard = () => {
  const navigation = useNavigation();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropoffDate, setDropoffDate] = useState(new Date(Date.now() + 86400000));
  const [showPickupPicker, setShowPickupPicker] = useState(false);
  const [showDropoffPicker, setShowDropoffPicker] = useState(false);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handlePickupDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowPickupPicker(false);
    }
    if (event?.type !== 'dismissed' && selectedDate) {
      setPickupDate(selectedDate);
    }
  };

  const handleDropoffDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowDropoffPicker(false);
    }
    if (event?.type !== 'dismissed' && selectedDate) {
      setDropoffDate(selectedDate);
    }
  };

  const handleSearch = () => {
    navigation.navigate('Search', {
      pickupLocation,
      dropoffLocation,
      pickupDate: formatDate(pickupDate),
      dropoffDate: formatDate(dropoffDate),
    });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall" style={styles.title}>
          Find Your Perfect Car
        </Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            label="Pick-up Location"
            value={pickupLocation}
            onChangeText={setPickupLocation}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon="map-marker" />}
          />
          
          <TextInput
            label="Drop-off Location"
            value={dropoffLocation}
            onChangeText={setDropoffLocation}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon="map-marker" />}
          />
          
          <View style={styles.dateContainer}>
            <TouchableOpacity 
              style={styles.dateInputWrapper}
              onPress={() => setShowPickupPicker(true)}
            >
              <TextInput
                label="Pick-up Date"
                value={formatDate(pickupDate)}
                mode="outlined"
                style={styles.dateInput}
                left={<TextInput.Icon icon="calendar" />}
                editable={false}
                pointerEvents="none"
              />
            </TouchableOpacity>
            {showPickupPicker && (
              <DateTimePicker
                value={pickupDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handlePickupDateChange}
                minimumDate={new Date()}
              />
            )}
            
            <TouchableOpacity 
              style={styles.dateInputWrapper}
              onPress={() => setShowDropoffPicker(true)}
            >
              <TextInput
                label="Drop-off Date"
                value={formatDate(dropoffDate)}
                mode="outlined"
                style={styles.dateInput}
                left={<TextInput.Icon icon="calendar" />}
                editable={false}
                pointerEvents="none"
              />
            </TouchableOpacity>
            {showDropoffPicker && (
              <DateTimePicker
                value={dropoffDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleDropoffDateChange}
                minimumDate={pickupDate}
              />
            )}
          </View>
        </View>

        <Button
          mode="contained"
          onPress={handleSearch}
          style={styles.searchButton}
          contentStyle={styles.searchButtonContent}
        >
          Search Cars
        </Button>

        <View style={styles.popularCities}>
          <Text variant="bodyMedium" style={styles.popularText}>
            Popular Cities:
          </Text>
          <View style={styles.chipContainer}>
            {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'].map((city) => (
              <Chip
                key={city}
                mode="outlined"
                onPress={() => setPickupLocation(city)}
                style={styles.chip}
                textStyle={styles.chipText}
              >
                {city}
              </Chip>
            ))}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    elevation: 8,
    borderRadius: 12,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 14,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputWrapper: {
    flex: 0.48,
  },
  dateInput: {
    width: '100%',
  },
  searchButton: {
    marginTop: 16,
    borderRadius: 8,
  },
  searchButtonContent: {
    paddingVertical: 8,
  },
  popularCities: {
    marginTop: 20,
  },
  popularText: {
    marginBottom: 12,
    fontWeight: '500',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 12,
  },
});

export default SearchCard;
