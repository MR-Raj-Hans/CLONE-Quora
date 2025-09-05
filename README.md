# Quora Clone - Modern Q&A Platform

A modern, feature-rich clone of Quora built with Node.js, Express, and EJS. This platform allows users to ask questions, share knowledge, and engage in meaningful discussions.

**Created by:** Raj Hans

## ✨ Features

### Core Functionality
- **Question & Answer System**: Post questions and provide detailed answers
- **User Interactions**: Upvote, downvote, bookmark, and share posts
- **Advanced Search**: Search through questions, answers, and user profiles
- **Category Filtering**: Organize content by categories (Technology, Education, Science, etc.)
- **Real-time Updates**: Live user activity indicators and dynamic content
- **Smart Reactions**: Express engagement with emojis (Insightful, Helpful, Interesting, Inspiring)

### User Experience
- **Modern Dark Theme**: Sleek, eye-friendly dark interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions and hover effects
- **Voice Search**: Speech-to-text search functionality
- **Theme Switching**: Multiple theme options (Dark, Ocean, Neon)
- **Keyboard Shortcuts**: Power user navigation shortcuts

### Advanced Features
- **Reading Progress**: Visual progress bar for long content
- **Interactive Background**: Dynamic particle animations
- **Smart Suggestions**: Intelligent search recommendations
- **Analytics Dashboard**: Track user engagement and post performance
- **Trending Content**: Discover popular and trending discussions
- **Live Collaboration**: See other users' activity in real-time

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js framework
- **Template Engine**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS3 with modern design patterns
- **Icons**: Font Awesome 6.0
- **Animations**: GSAP (GreenSock Animation Platform)
- **Database**: In-memory data storage (easily extensible to MongoDB/PostgreSQL)
- **Package Management**: npm

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Setup Instructions

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd quora-clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   # or
   node index.js
   ```

4. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
quora-clone/
│
├── public/               # Static assets
│   └── styles.css       # Main stylesheet
│
├── views/               # EJS templates
│   ├── index.ejs       # Homepage template
│   ├── new.ejs         # Create post template
│   ├── show.ejs        # Individual post view
│   └── edit.ejs        # Edit post template
│
├── index.js            # Main server file
├── package.json        # Project dependencies
├── package-lock.json   # Dependency lock file
└── README.md          # Project documentation
```

## 🚀 Usage

### Creating a New Question
1. Click the "Add question" button in the navigation bar
2. Fill in your username, question content, and select a category
3. Add relevant tags using #hashtag format
4. Submit to publish your question

### Interacting with Posts
- **Upvote**: Click the upvote button to show appreciation
- **React**: Use smart reactions (💡 Insightful, 🙌 Helpful, etc.)
- **Bookmark**: Save posts for later reading
- **Share**: Share posts via native browser sharing or copy links
- **Comment**: Click on a post to view and add answers

### Search and Discovery
- **Search Bar**: Type keywords to find relevant content
- **Voice Search**: Click the microphone icon for voice input
- **Category Filter**: Browse posts by specific categories
- **Trending Section**: Discover popular content in the sidebar

### Keyboard Shortcuts
- `Ctrl + K`: Focus search bar
- `Ctrl + N`: Create new post
- `Ctrl + /`: Toggle AI assistant (if enabled)

## 🎨 Customization

### Themes
The platform includes multiple theme options:
- **Dark Theme**: Default modern dark interface
- **Ocean Theme**: Blue-tinted color scheme
- **Neon Theme**: High-contrast neon aesthetics

### Adding New Categories
Edit the categories array in `index.js`:
```javascript
const categories = ['Technology', 'Education', 'Science', 'Your New Category'];
```

### Styling Modifications
All styles are contained in `public/styles.css`. The CSS uses:
- CSS Custom Properties (variables) for easy theme switching
- Flexbox and Grid for responsive layouts
- Modern design patterns like glassmorphism
- Smooth animations and transitions

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
PORT=3000
NODE_ENV=development
```

### Database Integration
To integrate with a real database, modify the data storage in `index.js`:
```javascript
// Replace in-memory array with database calls
let posts = []; // Current in-memory storage
// Add MongoDB/PostgreSQL integration here
```

## 📊 Performance Features

- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Lazy Loading**: Efficient content loading strategies
- **Responsive Images**: Adaptive image sizing
- **Minimal Dependencies**: Lightweight package footprint
- **Modern JavaScript**: ES6+ features for better performance

## 🤝 Contributing

This project is open for improvements and contributions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] Email notifications for interactions
- [ ] Advanced text editor with rich formatting
- [ ] File and image upload capabilities
- [ ] Direct messaging between users
- [ ] Reputation and badge system
- [ ] Content moderation tools
- [ ] API for mobile app integration
- [ ] SEO optimization and meta tags

## 🐛 Bug Reports

If you find any issues, please report them through:
- GitHub Issues (if repository available)
- Email: rajhans1501@gmail.com

## 📞 Contact

**Developer**: Raj Hans
- GitHub: [MR-Raj-Hans](https://github.com/MR-Raj-Hans)
- Email: rajhans1501@gmail.com
- LinkedIn: [Raj Hans](https://www.linkedin.com/in/raj-hans-476232243/)

## 🙏 Acknowledgments

- Inspired by Quora's clean and intuitive design
- Font Awesome for comprehensive icon library
- GSAP for smooth animation capabilities
- Open source community for inspiration and resources

---

**Note**: This is a clone project created for educational and demonstration purposes. All design inspiration comes from Quora's original platform.

*Last updated: September 2025*
