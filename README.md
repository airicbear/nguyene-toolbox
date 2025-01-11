# Eric's Toolbox

Eric's Toolbox is a website that serves as a general-purpose set of utilities.

## Development

```
docker build -t nguyene-toolbox-dev --target development .
```

```
docker run -p 5173:5173 nguyene-toolbox-dev
```

```
curl http://localhost:5173
```

## Production

```
docker build -t nguyene-toolbox .
```

```
docker run -p 80:80 nguyene-toolbox-dev
```

```
curl http://localhost:80
```
