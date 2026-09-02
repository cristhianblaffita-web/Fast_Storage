import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import init_table

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def health():
    return {"health_status": "OK"}


if __name__=="__main__":
    init_table()
    uvicorn.run('main:app', reload=True)