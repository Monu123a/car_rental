import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Simple validation
    if (email && password) {
      navigation.navigate('Home');
    }
  };

  const handleSignUp = () => {
    // Navigate to sign up or show sign up modal
    alert('Sign up functionality coming soon!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Card style={styles.loginCard}>
          <Card.Content style={styles.cardContent}>
            {/* Logo/Title */}
            <View style={styles.logoContainer}>
              <Text style={styles.logoEmoji}>🚗</Text>
              <Text variant="displaySmall" style={styles.appTitle}>
                Zoom Cars
              </Text>
              <Text variant="bodyLarge" style={styles.tagline}>
                Your Journey Starts Here
              </Text>
            </View>

            {/* Login Form */}
            <View style={styles.formContainer}>
              <TextInput
                label="Email Address"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                left={<TextInput.Icon icon="email" />}
              />
              
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={!showPassword}
                style={styles.input}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />

              <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.loginButton}
                contentStyle={styles.buttonContent}
              >
                Sign In
              </Button>

              <Button
                mode="text"
                onPress={handleSignUp}
                style={styles.signUpButton}
                textColor="#1976D2"
              >
                Don't have an account? Sign Up
              </Button>

              <Button
                mode="text"
                onPress={() => alert('Forgot password functionality coming soon!')}
                style={styles.forgotButton}
                textColor="#666"
              >
                Forgot Password?
              </Button>
            </View>

            {/* Social Login */}
            <View style={styles.socialContainer}>
              <Text variant="bodyMedium" style={styles.socialText}>
                Or continue with
              </Text>
              
              <View style={styles.socialButtons}>
                <IconButton
                  icon="google"
                  size={24}
                  iconColor="#DB4437"
                  style={styles.socialButton}
                  onPress={() => alert('Google login coming soon!')}
                />
                <IconButton
                  icon="facebook"
                  size={24}
                  iconColor="#4267B2"
                  style={styles.socialButton}
                  onPress={() => alert('Facebook login coming soon!')}
                />
                <IconButton
                  icon="apple"
                  size={24}
                  iconColor="#000000"
                  style={styles.socialButton}
                  onPress={() => alert('Apple login coming soon!')}
                />
              </View>
            </View>

            {/* Skip Login */}
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('Home')}
              style={styles.skipButton}
              textColor="#1976D2"
            >
              Continue as Guest
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginCard: {
    elevation: 10,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
  },
  cardContent: {
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  appTitle: {
    color: '#1976D2',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    color: '#666',
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  loginButton: {
    marginTop: 8,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  signUpButton: {
    marginTop: 16,
  },
  forgotButton: {
    marginTop: 8,
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  socialText: {
    color: '#666',
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 8,
  },
  skipButton: {
    borderColor: '#1976D2',
    borderWidth: 1,
  },
});

export default LoginScreen;
