# Create container

# Start lin
eslint --init

## win
```bash
docker run -d --name kong-database ^
               --network=kong-net ^
               -p 5432:5432 ^
               -e "POSTGRES_USER=kong" ^
               -e "POSTGRES_DB=kong" ^
               -e "POSTGRES_PASSWORD=kong" ^
               postgres:9.6
```

## linux
```bash
docker run -d --name kong-database \
               --network=kong-net \
               -p 5432:5432 \
               -e "POSTGRES_USER=kong" \
               -e "POSTGRES_DB=kong" \
               -e "POSTGRES_PASSWORD=kong" \
               postgres:9.6
```
