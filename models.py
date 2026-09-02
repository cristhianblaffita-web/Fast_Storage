from pydantic import BaseModel

class ProductInput(BaseModel):
    name: str
    description: str
    price: str
    quantity: str

class ProductOutput(ProductInput):
    id: int