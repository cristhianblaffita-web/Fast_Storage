import sqlite3
from models_database import ProductDB

session = sqlite3.connect('Products_DB')
cu = session.cursor()

def use_db():
    yield session

def is_table_created():
    db_info = cu.execute("SELECT tbl_name FROM sqlite_master").fetchall()

    for idx in range(len(db_info)):
        if (str(db_info[idx][0]) == 'Products'):
            return True

    return False

def init_table():
    if (is_table_created()): return None

    table_columns = ProductDB().columns

    cu.execute(f"CREATE TABLE Products({','.join(table_columns)})")
    session.commit()

def drop_table():
    if (is_table_created()):
        cu.execute("DROP TABLE Products")
        session.commit()

def reset_table():
    try:
        drop_table()
        init_table()
    except:
        print("Something went wrong restarting the table")
