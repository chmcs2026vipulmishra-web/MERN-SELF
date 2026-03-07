# Footwear Management App 👟

A full-stack MERN application to manage footwear inventory.  
Features include listing, viewing, editing, and deleting footwear items with a clean UI.

---

## 🚀 Features
- View all footwear items in a card layout
- Click **Edit** to navigate to detail page (`/footwear/:id`)
- Update footwear details (type, category, price, colour, size)
- Delete footwear with confirmation modal
- Consistent API calls using `/footwear/:id` for backend and frontend

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, DaisyUI, Lucide Icons
- **Backend:** Node.js, Express.js, MongoDB
- **HTTP Client:** Axios (configured with baseURL)
- **Notifications:** react-hot-toast

---

## 📂 Project Structure
src/ ├── components/ │    └── FootCard.jsx ├── pages/ │    └── FootDetailPage.jsx ├── lib/ │    └── axios.js └── App.jsx

---

## ⚙️ Setup Instructions

### 1. Clone the repository
bash
git clone https://github.com/your-username/footwear-app.git
cd footwear-app

2.npm install

3. Configure Axios baseURL
In src/lib/axios.js:
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/footwear", // backend root
});

export default api;

4. Run backend
cd backend
npm install
npm start

5. Run frontend
cd frontend
npm start


🔗 API Endpoints
- GET /footwear/:id → Fetch footwear by ID
- PUT /footwear/:id → Update footwear
- DELETE /footwear/:id → Delete footwear
- GET /footwear → List all footwear

🧩 Routing
- / → Home page with footwear cards
- /footwear/:id → Detail page for editing/deleting footwear

✅ Notes
- Ensure both frontend and backend run on the same baseURL (/footwear) for consistency.
- All API calls in React use /${id} because axios.js baseURL is set to /footwear.

📜 License
This project is for academic purposes. Free to use and modify.

---

This README makes it clear how to set up the project, why the baseURL matters, and how routes are structured.  

Do you want me to also add a **screenshots section** (with placeholders) so your README looks more professional when you upload UI images later?
