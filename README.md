# Skip Hire Selector

A React application for a skip hire company's waste management service. This project provides a user-friendly interface for customers to select appropriate skip sizes and navigate through the booking process.

## 🚀 Features

- **Responsive Process Path** - Visual step-by-step journey for skip hire booking
- **Mobile-First Design** - Optimized for all screen sizes from mobile to desktop
- **Modern UI** - Built with Tailwind CSS for clean, professional styling
- **Interactive Progress Tracking** - Clear visual feedback on booking progress

## 📱 Components

### ProcessPath Component

The main navigation component that displays the 6-step booking process:

1. **Postcode** - Location verification
2. **Waste Type** - Category selection  
3. **Select Skip** - Size and capacity selection
4. **Permit Check** - Legal compliance verification
5. **Choose Date** - Delivery scheduling
6. **Payment** - Secure checkout

#### Responsive Features:
- **Desktop**: Full step names with connecting lines
- **Tablet**: Step names visible without connecting lines  
- **Mobile**: Icon-only view for optimal space usage

### SkipSelector Component

Main content area for the skip selection interface (currently placeholder).

## 🛠 Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Icon library for consistent iconography

## 🎨 Design

- **Dark Theme** - Professional appearance with `bg-neutral-900`
- **Brand Colors** - Primary blue `#0037C1` for active states
- **Typography** - Responsive text sizing and spacing

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Mojasagwe/skip-hire-selector.git

# Navigate to project directory
cd skip-hire-selector

# Install dependencies
npm install

# Start development server
npm start
```

## 🔧 Development

The project uses Create React App for development and build processes.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## 📐 Responsive Breakpoints

- **Mobile**: `< 640px` - Icon-only ProcessPath
- **Tablet**: `640px - 1279px` - Icons + text, no connecting lines
- **Desktop**: `≥ 1280px` - Full experience with connecting lines

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Netlify**
- **Vercel** 
- **GitHub Pages**
- **CodeSandbox**

## 🔮 Future Enhancements

- Add skip size selection interface
- Implement form validation
- Add booking confirmation flow
- Integrate payment processing
- Add location-based services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
