from pydantic import BaseModel

class ProductInput(BaseModel):
    name: str
    description: str
    price: float
    quantity: int

class ProductOutput(ProductInput):
    id: int