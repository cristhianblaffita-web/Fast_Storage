class ProductDB:
    def __init__(self):
        self.id = 'id integer primary key autoincrement'
        self.name = 'name varchar(24)'
        self.description = 'description varchar(80)'
        self.price = 'price double'
        self.quantity = 'quantity integer'

        self.columns = [
            self.id,
            self.name,
            self.description,
            self.price,
            self.quantity
        ]