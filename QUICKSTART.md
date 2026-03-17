# Quickstart

## 1. Install

Frontend:
```powershell
npm install
```

Backend:
```powershell
cd backend
py -m pip install -r requirements.txt
```

## 2. Configure

Create `backend/.env`:
```dotenv
GEMINI_API_KEY=your_gemini_api_key_here
```

Create `frontend/.env.local`:
```dotenv
VITE_API_BASE_URL=http://localhost:8000
```

## 3. Run

Backend:
```powershell
cd backend
py main.py
```

Frontend (new terminal):
```powershell
npm run dev
```

## 4. Open
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Optional Windows Scripts
- Start backend: `start-backend.bat`
- Start frontend: `start-frontend.bat`

## Common Fixes
- If port 8000 is busy, stop existing process and restart backend.
- If frontend cannot reach backend, verify `VITE_API_BASE_URL`.
- If Gemini calls fail, verify `backend/.env` API key.
