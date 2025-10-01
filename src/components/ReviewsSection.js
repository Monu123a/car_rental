import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';

const ReviewsSection = () => {
  const reviews = [
    {
      rating: 5,
      comment: "Better than other sites. More affordable insurance options.",
      author: "ruth a.",
      car: "Mazda CX3 or similar",
      location: "Bankstown"
    },
    {
      rating: 5,
      comment: "Easy and simple.",
      author: "alexandra m.",
      car: "Toyota Landcruiser Prado or similar",
      location: "Canberra Airport"
    },
    {
      rating: 5,
      comment: "Quick & easy!",
      author: "susan j w.",
      car: "Toyota Corolla Cross Hybrid or similar",
      location: "Melbourne Airport"
    },
    {
      rating: 5,
      comment: "Always easy to book through Zoom Cars. Good platform",
      author: "lynne c.",
      car: "Toyota Corolla Hatch or similar",
      location: "Brisbane Airport"
    },
    {
      rating: 5,
      comment: "All good",
      author: "tracey h.",
      car: "Volkswagen Polo or similar",
      location: "Sunshine Coast Airport"
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        What Our Customers Say
      </Text>
      
      <View style={styles.ratingContainer}>
        <Text variant="displaySmall" style={styles.rating}>
          4.8
        </Text>
        <View style={styles.ratingDetails}>
          <Text variant="titleMedium" style={styles.ratingText}>
            Our overall rating
          </Text>
          <Text variant="bodyMedium" style={styles.ratingSubtext}>
            (4.8/5 from 104,015 reviews)
          </Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {reviews.map((review, index) => (
          <Card key={index} style={styles.reviewCard}>
            <Card.Content>
              <View style={styles.starsContainer}>
                <Text style={styles.stars}>
                  {renderStars(review.rating)}
                </Text>
              </View>
              
              <Text variant="bodyMedium" style={styles.reviewComment}>
                "{review.comment}"
              </Text>
              
              <Text variant="bodySmall" style={styles.reviewAuthor}>
                - {review.author}
              </Text>
              
              <View style={styles.reviewDetails}>
                <Chip mode="outlined" style={styles.detailChip} textStyle={styles.chipText}>
                  {review.car}
                </Chip>
                <Chip mode="outlined" style={styles.detailChip} textStyle={styles.chipText}>
                  {review.location}
                </Chip>
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
    marginBottom: 20,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  rating: {
    color: '#1976D2',
    fontWeight: 'bold',
    marginRight: 16,
  },
  ratingDetails: {
    flex: 1,
  },
  ratingText: {
    color: '#333',
    fontWeight: '600',
  },
  ratingSubtext: {
    color: '#666',
    fontSize: 12,
  },
  reviewCard: {
    width: 290,
    marginRight: 16,
    elevation: 4,
    borderRadius: 8,
  },
  starsContainer: {
    marginBottom: 12,
  },
  stars: {
    color: '#FFC107',
    fontSize: 16,
  },
  reviewComment: {
    marginBottom: 12,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  reviewAuthor: {
    marginBottom: 12,
    color: '#666',
    fontWeight: '500',
  },
  reviewDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailChip: {
    marginRight: 8,
    marginBottom: 4,
  },
  chipText: {
    fontSize: 10,
  },
});

export default ReviewsSection;
