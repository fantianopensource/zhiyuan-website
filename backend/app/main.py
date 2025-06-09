from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.api import router

app = FastAPI(title="Personal Website API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Personal Website API"}

# Include routers
app.include_router(router, prefix="/api")
