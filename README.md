

### Explore demo db

- clone this repo & change directory to the file
- `docker run --name shelter-db --mount type=bind,source="$(pwd)",dst="/code" -d mongo`
- `docker exec -it shelter-db mongo` (to open the mongo shell)
- `load('code/db/celebrities.js')`

To try functions:

- `load('code/db/Funcs.js')`
- `getAllNames()` / `totalNumGroupedBp()`

To exit the mongo shell:

- `quit()`

