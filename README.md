# Skip Hire Selector

A React application for a skip hire company's waste management service. This project provides a user-friendly interface for customers to select appropriate skip sizes and navigate through the booking process.

## 🚀 Features

- **Responsive Process Path** - Visual step-by-step journey for skip hire booking
- **Interactive Skip Cards** - Visual skip selection with enhanced image display and quantity controls
- **Advanced Filtering** - Filter skips by road placement and heavy waste allowance
- **Multi-Selection Support** - Select multiple skip types with quantity controls
- **Warning System** - Visual indicators for placement and waste restrictions
- **Mobile-First Design** - Optimized for all screen sizes from mobile to desktop
- **Modern UI** - Built with Tailwind CSS for clean, professional styling
- **Sticky Navigation** - ProcessPath remains visible on desktop/tablet during scroll

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
- **Desktop**: Full step names with connecting lines, sticky navigation
- **Tablet**: Step names visible without connecting lines, sticky navigation
- **Mobile**: Icon-only view for optimal space usage, scrolls away naturally

### SkipSelector Component

Comprehensive skip selection interface with advanced features:

#### Card Layout:
- **60/40 Split** - Enhanced image area (60%) with skip details (40%)
- **Visual Skip Display** - Large skip icons with clear size identification
- **Inline Controls** - Price and quantity selector on the same line
- **Selection Feedback** - Visual indicators for selected skips

#### Filtering System:
- **Road Placement Filter** - Show only skips allowed on public roads
- **Heavy Waste Filter** - Filter by waste type compatibility
- **Dynamic Results** - Real-time filtering with result counts
- **Clear Filters** - Easy reset functionality

#### Warning Indicators:
- **Yellow Triangle** - Private land only (road placement not allowed)
- **Red Triangle** - Light waste only (heavy waste not allowed)
- **Hover Tooltips** - Detailed restriction explanations

#### Interactive Features:
- **Multi-Selection** - Choose multiple skip types simultaneously
- **Quantity Controls** - Adjust quantities with +/- buttons
- **Visual Selection** - Blue border and checkmark for selected items
- **Price Calculation** - Automatic VAT inclusion in displayed prices

### MobileCartButton Component

A mobile-optimized cart button that provides quick access to selected items:

#### Features:
- **Fixed Position** - Stays visible at bottom of screen on mobile devices
- **Dynamic Badge** - Shows total number of selected skip items
- **Responsive Design** - Only displays on mobile devices (< 640px)
- **Smooth Animation** - Pulse effect on badge for visual feedback
- **Total Quantity Display** - Shows cumulative quantity of all selected skips
- **Cart Icon** - Intuitive shopping cart icon with item count

#### Mobile UX Benefits:
- **Persistent Access** - Cart always visible without scrolling
- **Space Efficient** - Compact design doesn't interfere with main content
- **Quick Navigation** - Easy access to cart/checkout on mobile devices
- **Visual Feedback** - Badge updates immediately when items are added/removed

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

- **Mobile**: `< 640px` - Icon-only ProcessPath, 1-column skip grid
- **Tablet**: `640px - 1279px` - Icons + text, 2-column skip grid, sticky ProcessPath
- **Desktop**: `≥ 1280px` - Full experience with connecting lines, 4-column skip grid, sticky ProcessPath

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Netlify**
- **Vercel** 
- **GitHub Pages**
- **CodeSandbox**

## 🔮 Future Enhancements

- Implement postcode validation and area checking
- Add real skip images to replace placeholder icons
- Implement form validation for booking flow
- Add booking confirmation and order summary
- Integrate payment processing
- Add location-based pricing and availability
- Implement delivery date selection
- Add user accounts and order history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
