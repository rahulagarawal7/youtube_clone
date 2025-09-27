🎬 YouTube Clone - Frontend
This is the frontend of the YouTube Clone application, built with React.js and powered by Vite for fast builds. It provides a clean, responsive UI for browsing, searching, and watching videos with support for authentication, likes, comments, and Watch Later functionality.

🚀 Features
🔍 Search videos by title

📺 Watch videos with a custom player

📂 Categories & Trending section

💬 Comment system

🎥 Channel management – create, edit, and delete channels

⬆️ Video management – upload, edit, and delete videos

🔔 Subscribe to channels

📜 Channel listing – view all channels

👤 User authentication (integrated with backend API)

✨ Shimmer effects for skeleton loading states

🚫 Page Not Found (404) handling

🔔 Global Alert Popup – centralized alerts for success, error, and info messages

🎨 Responsive design with Tailwind CSS

⚡ Fast development with Vite & HMR

🗄 State persistence with Redux Toolkit + Redux Persist

🎞 Smooth animations using Framer Motion & Lottie

🛠 Tech Stack
React 19 – UI library

Vite 7 – Build tool & dev server

React Router v7 – Routing

Redux Toolkit – State management

Redux Persist – Persisted Redux store

Axios – API calls

TailwindCSS v4 – Styling

Framer Motion – Animations

Lottie React – Animations support

Lucide React – Icon library

React Shimmer Effects – Loading skeletons

📂 Folder Structure
text
youtube_clone/
├── public/                 # Static assets (images, icons, fonts)
├── src/
│   ├── assets/             # Images, icons, animations
│   ├── components/         # Reusable UI components
│   ├── features/           # Redux slices (auth, videos, etc.)
│   ├── pages/              # Page components (Home, Video, Channel, etc.)
│   ├── routes/             # Route definitions
│   ├── store/              # Redux store configuration
│   ├── utils/              # Helper functions
│   ├── services/           # API endpoint functions
│   ├── hook/               # Custom hooks
│   ├── App.jsx             # Root component
│   └── main.jsx            # App entry point
├── .eslintrc.js            # ESLint configuration
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project README
⚙️ Setup & Installation Guide
Follow these steps to get the YouTube Clone frontend running locally:

1️⃣ Clone the repository
bash
git clone https://github.com/rahulagarawal7/youtube_clone
cd youtube_clone
2️⃣ Install dependencies
Make sure you have Node.js >= 18 and npm installed. Then run:

bash
npm install
This will install all required dependencies listed in package.json.

3️⃣ Configure environment variables
Create a .env file in the project root with the following example configuration:

env
# Base URL of your backend API
VITE_API_URL=http://localhost:3000/api/

# Secret key 
VITE_JWT_SECRET=your_secret_key_here
4️⃣ Start the development server
🔹 Development

Runs with .env.development

npm run dev


Your app will be available at:
👉 http://localhost:5173 (default Vite port)

🔹 Production Build

Generates an optimized build using .env.production

npm run build

🔹 Preview Production Build

Serve the production build locally (uses .env.production)

npm run preview


Your app will be available at:
👉 http://localhost:4173 (default Vite preview port)
text
http://localhost:5173
The app will automatically reload when you make changes to the code.

5️⃣ Build for production
bash
npm run build
This generates a production-ready build in the dist/ folder.

6️⃣ Preview production build
bash
npm run preview
7️⃣ Lint code
bash
npm run lint
📱 Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run lint - Run ESLint

🎯 Additional Notes
TailwindCSS is used for styling; customize it in tailwind.config.js

Redux Toolkit + Redux Persist is used to manage and persist state

Shimmer effects are used for loading skeletons

Global Alert Popup provides centralized notifications (success, error, info)

Page Not Found (404) handling is included for unmatched routes