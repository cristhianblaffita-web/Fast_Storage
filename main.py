import sqlite3
import uvicorn
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import init_table, use_db, session, cu, reset_table
from models import ProductOutput, ProductInput
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

@app.post("/products")
async def add_product(product: ProductInput, db: sqlite3.Connection = Depends(use_db)):
    cu.execute("INSERT INTO Products VALUES(NULL,?,?,?,?)", [product.name, product.description, product.price, product.quantity])
    session.commit()

    return product

@app.get("/products/{product_id}")
async def get_product_by_id(product_id: int, db: sqlite3.Connection = Depends(use_db)):
    cu.execute(f"SELECT * FROM Products WHERE id == {product_id}")
    product = cu.fetchone()

    if (product):
        return {"data": ProductOutput(
            id=product[0],
            name=product[1],
            description=product[2],
            price=product[3],
            quantity=product[4]
        )}

    return {"error": "Product not found"}

@app.put('/products/{product_id}')
async def update_product(product_id: int, product: ProductInput, db: sqlite3.Connection = Depends(use_db)):
    try:
        sql = f"""
            UPDATE Products 
                SET name=?, 
                    description=?,
                    price=?,
                    quantity=?
                WHERE id == {product_id}
        """
        cu.execute(sql, [product.name, product.description, product.price, product.quantity])
        session.commit()
        return product
    except:
        return {"error": "Product not found"}

@app.delete("/products")
async def delete_all_products(db: sqlite3.Connection = Depends(use_db)):
    try:
        cu.execute("DELETE FROM Products")
        session.commit()
        reset_table()
        return {"success": "All products were deleted"}
    except:
        return {"error": "Something went wrong deleting all products"}

@app.delete("/products/{product_id}")
async def delete_product(product_id: int, db: sqlite3.Connection = Depends(use_db)):
    try:
        cu.execute(f"DELETE FROM Products WHERE id == {product_id}")
        session.commit()
        return {"success": "Product deleted"}
    except:
        return {"error": "Product not found"}

if __name__=="__main__":
    init_table()
    uvicorn.run('main:app', reload=True)