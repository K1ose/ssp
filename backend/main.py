from fastapi import FastAPI
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from apps.api.v1 import api_router

import redis

app = FastAPI()

app.include_router(api_router, prefix="/api/v1")


# 测试 Redis 服务
@app.get("/redis-test")
def redis_test():
    try:
        r = redis.Redis(host="ssp-redis-1", port=6379, decode_responses=True)
        r.set("test", "Hello, Redis!")
        return {"redis msg": r.get("test")}
    except Exception as e:
        return {"error": str(e)}
    

# 测试 postgres 服务 
@app.get("/db-test")
def db_test():
    try:
        DATABASE_URL = "postgresql://postgres:postgres@db:5432/dbase"
        engine = create_engine(DATABASE_URL)
        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

        with engine.connect() as connection:
            result = connection.execute(text("SELECT * FROM users"))
            rows = [dict(row._mapping) for row in result]

        return {
            "db message": f"Database is working: {result}",
            "data": f"{rows}"
        }
    except Exception as e:

        return {"error": str(e)}