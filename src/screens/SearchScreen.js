import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip, TextInput, FAB } from 'react-native-paper';
import Header from '../components/Header';

const SearchScreen = ({ route, navigation }) => {
  const { pickupLocation, dropoffLocation, pickupDate, dropoffDate } = route.params || {};
  
  const [cars] = useState([
    {
      id: 1,
      name: 'Toyota Corolla',
      type: 'Economy',
      provider: 'Budget',
      price: 45,
      image: '🚗',
      features: ['5 Seats', 'Manual', 'Air Conditioning'],
      rating: 4.5,
      reviews: 234
    },
    {
      id: 2,
      name: 'Mazda CX-5',
      type: 'SUV',
      provider: 'Hertz',
      price: 89,
      image: '🚙',
      features: ['5 Seats', 'Automatic', 'GPS'],
      rating: 4.7,
      reviews: 156
    },
    {
      id: 3,
      name: 'BMW 3 Series',
      type: 'Luxury',
      provider: 'Avis',
      price: 125,
      image: '🚘',
      features: ['5 Seats', 'Automatic', 'Premium Sound'],
      rating: 4.8,
      reviews: 89
    },
    {
      id: 4,
      name: 'Ford Ranger',
      type: 'Pickup',
      provider: 'Enterprise',
      price: 95,
      image: '🛻',
      features: ['5 Seats', 'Manual', '4WD'],
      rating: 4.6,
      reviews: 67
    }
  ]);
  const [filter, setFilter] = useState('all');

  const filterCars = (type) => {
    setFilter(type);
  };

  const filteredCars = filter === 'all' 
    ? cars 
    : cars.filter(car => car.type.toLowerCase() === filter.toLowerCase());

  const CarCard = ({ car }) => (
    <Card style={styles.carCard}>
      <Card.Content>
        <View style={styles.carHeader}>
          <Text style={styles.carImage}>{car.image}</Text>
          <View style={styles.carInfo}>
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
        
        <View style={styles.featuresContainer}>
          {car.features.map((feature, index) => (
            <Chip key={index} mode="outlined" style={styles.featureChip} textStyle={styles.featureText}>
              {feature}
            </Chip>
          ))}
        </View>
        
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Booking', { car })}
          style={styles.bookButton}
        >
          Book Now
        </Button>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Header title="Search Results" showBack={true} />
      
      <View style={styles.searchParams}>
        <Card style={styles.paramsCard}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.paramsText}>
              📍 {pickupLocation || 'Pickup Location'} → {dropoffLocation || 'Drop-off Location'}
            </Text>
            <Text variant="bodyMedium" style={styles.paramsText}>
              📅 {pickupDate || 'Pickup Date'} to {dropoffDate || 'Drop-off Date'}
            </Text>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Economy', 'SUV', 'Luxury', 'Pickup'].map((type) => (
            <Chip
              key={type}
              mode={filter === type.toLowerCase() ? 'flat' : 'outlined'}
              onPress={() => filterCars(type.toLowerCase())}
              style={[
                styles.filterChip,
                filter === type.toLowerCase() && styles.activeFilterChip
              ]}
              textStyle={[
                styles.filterText,
                filter === type.toLowerCase() && styles.activeFilterText
              ]}
            >
              {type}
            </Chip>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.carsContainer} showsVerticalScrollIndicator={false}>
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ScrollView>

      <FAB
        icon="filter"
        style={styles.fab}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchParams: {
    padding: 16,
  },
  paramsCard: {
    elevation: 2,
    borderRadius: 8,
  },
  paramsText: {
    marginBottom: 4,
    color: '#666',
  },
  filtersContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterChip: {
    marginRight: 10,
  },
  activeFilterChip: {
    backgroundColor: '#1976D2',
  },
  filterText: {
    color: '#1976D2',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  carsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  carCard: {
    marginBottom: 16,
    elevation: 5,
    borderRadius: 12,
  },
  carHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  carImage: {
    fontSize: 32,
    marginRight: 12,
  },
  carInfo: {
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
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  featureChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
  },
  bookButton: {
    borderRadius: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#1976D2',
  },
});

export default SearchScreen;
