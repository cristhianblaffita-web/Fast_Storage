import sqlite3
import uvicorn
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import init_table, use_db, session, cu
from models import ProductOutput
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

@app.get("/products")
async def get_all_products(db: sqlite3.Connection = Depends(use_db)):
    cu.execute("SELECT * FROM Products")
    db_products = cu.fetchall()

    table_columns = cu.execute("PRAGMA table_info('Products')").fetchall()

    products = {
        "column_names": [col[1] for col in table_columns],
        "data": [ProductOutput(
            id=product[0],
            name=product[1],
            description=product[2],
            price=product[3],
            quantity=product[4]
        ) for product in db_products]
    }

    return products

if __name__=="__main__":
    init_table()
    uvicorn.run('main:app', reload=True)