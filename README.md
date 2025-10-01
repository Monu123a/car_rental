# Zoom Cars - Car Rental App

A React Native application that provides car rental services, inspired by VroomVroomVroom. Built with React Native Paper components and minimal CSS styling.

## Features

- 🚗 Car search and comparison
- 📍 Location-based search (cities and states)
- 🏢 Multiple car rental providers
- ⭐ Customer reviews and ratings
- 📱 Mobile-first responsive design
- 💳 Booking and payment integration
- 🛡️ Insurance and additional services

## Tech Stack

- **Frontend**: React Native with Paper components
- **Navigation**: React Navigation
- **Styling**: Minimal CSS with Paper theme
- **State Management**: React Hooks
- **Icons**: React Native Vector Icons

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS:
   ```bash
   cd ios && pod install && cd ..
   ```

4. Run the application:
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── SearchCard.js   # Main search form
│   ├── HeroSection.js  # Hero banner
│   ├── CarProviders.js # Provider showcase
│   ├── FeaturesSection.js # Features list
│   ├── ReviewsSection.js # Customer reviews
│   └── Footer.js       # Footer with links
├── screens/            # Main app screens
│   ├── HomeScreen.js   # Landing page
│   ├── SearchScreen.js # Car search results
│   └── BookingScreen.js # Booking form
└── theme/              # App theming
    └── theme.js        # Paper theme configuration
```

## Key Components

### SearchCard
- Location selection (pickup/dropoff)
- Date selection
- Popular cities quick selection
- Search functionality

### SearchScreen
- Filterable car listings
- Car details and pricing
- Provider information
- Booking flow initiation

### BookingScreen
- Personal information form
- Payment details
- Additional services selection
- Total calculation

## Customization

The app uses a custom theme based on Material Design 3 with the following color scheme:
- Primary: #1976D2 (Blue)
- Secondary: #FFC107 (Amber)
- Background: #FFFFFF (White)
- Surface: #F5F5F5 (Light Gray)

## Features Implemented

- ✅ Home screen with search functionality
- ✅ Car search and filtering
- ✅ Booking flow with form validation
- ✅ Provider showcase
- ✅ Customer reviews display
- ✅ Responsive design
- ✅ Navigation between screens

## Future Enhancements

- Real API integration
- User authentication
- Push notifications
- Offline support
- Advanced filtering options
- Payment gateway integration
- Real-time availability

## License

This project is for educational purposes and is a clone inspired by VroomVroomVroom.
