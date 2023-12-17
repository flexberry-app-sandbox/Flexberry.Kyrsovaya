docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrsovaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kyrsovaya-java/app ../../..
