docker run -it \
    --name shelter-db \
    --mount type=bind,src="$(pwd)",dst="/code" \
    mongo