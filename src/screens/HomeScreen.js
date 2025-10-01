import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';
import Header from '../components/Header';
import SearchCard from '../components/SearchCard';
import HeroSection from '../components/HeroSection';
import CarProviders from '../components/CarProviders';
import FeaturesSection from '../components/FeaturesSection';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Zoom Cars" />
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SearchCard />
        <HeroSection />
        <CarProviders />
        <FeaturesSection />
        <ReviewsSection />
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;
