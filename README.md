# Lang Spark Leap

A comprehensive language learning platform featuring AI-powered tutoring, interactive lessons, progress tracking, and gamification elements.

## Features

- **AI Tutor**: Get personalized language lessons and conversations with AI
- **Interactive Lessons**: Multiple question types including fill-in-the-blank, matching pairs, and quizzes
- **Progress Tracking**: Monitor your learning journey with detailed statistics
- **Multi-language Support**: Learn various languages with structured content
- **User Authentication**: Secure login and registration system
- **Leaderboards**: Compete with other learners
- **Speech Recognition**: Practice pronunciation with built-in speech recognition
- **Text-to-Speech**: Listen to pronunciations and lessons

## Tech Stack

### Backend
- Node.js
- Express.js
- Supabase (Database)
- Google Gemini AI
- JWT Authentication
- Multer (File uploads)

### Frontend
- React
- Vite
- Tailwind CSS
- Shadcn/ui Components
- React Router
- Axios

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account
- Google Gemini API key

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gums69/lang-spark-leap-main.git
   cd lang-spark-leap-main
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   JWT_SECRET=your_jwt_secret
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

   Set up Supabase:
   - Create a new project on Supabase
   - Run the migrations in `supabase/migrations/`
   - Update the database URL and keys in `.env`

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

## Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Lessons & Progress
- `GET /api/progress` - Get user progress
- `POST /api/progress` - Update user progress
- `GET /api/lessons` - Get available lessons

### AI Features
- `POST /api/ai/generate-lesson` - Generate AI-powered lesson
- `POST /api/ai/chat` - AI conversation

## Project Structure

```
lang-spark-leap-main/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── supabase/
│   └── uploads/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── data/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── pages/
│   └── ...
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini for AI capabilities
- Supabase for backend services
- Shadcn/ui for UI components
- Tailwind CSS for styling