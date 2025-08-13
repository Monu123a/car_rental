# car_rental

1. Car Search, Compare & Booking
Enable users to search and compare cars by location, date, type, price, and fuel. Real-time pricing and availability are displayed with filters, sorting, and instant booking. Integrates secure payment gateways for a seamless reservation process.
Tech Stack:

Frontend: React Native, React Navigation, Axios
Backend: Node.js, Express, Joi (validation)
Database: MySQL
Maps & Location: Google Maps API
Payments: Stripe/Razorpay SDK
Hosting: AWS EC2 / Render
2. Peer-to-Peer (P2P) Car Renting
Allow car owners to list vehicles with images, pricing, and availability. Owners manage bookings via dashboard. System verifies documents (license, ID) and provides pre/post-ride inspection uploads for trust, transparency, and reduced disputes between owners and renters.
Tech Stack:

Frontend: React Native + NativeBase
Backend: Node.js, Express, Multer (uploads)
Database: MySQL
Storage: AWS S3 for images/videos
Auth: JWT + bcrypt
Verification: Twilio/SendGrid for OTP/email
3. Carpool & Ride Sharing
Drivers post upcoming trips with seat availability and price-per-seat. Passengers can search, join, and track rides in real time. Includes automatic cost splitting, in-app payment, and live GPS tracking for safety and route transparency.
Tech Stack:

Frontend: React Native, react-native-maps
Backend: Node.js, Express, Socket.IO
Database: MySQL (rides, bookings)
Location Services: Google Maps Distance Matrix API
Payments: Stripe Connect for split payments
