# API rest created with Deno.

### Install [Deno](https://deno.land/#installation)

## Gettint Started

```
deno run --allow-net src/index.ts
```

(Optional) You can use [Deno-cli](https://www.npmjs.com/package/deno-cli), my own npm package to initiate and run deno projects. 

```bash
dm run #Runs the 'deno run' command based on the configs at config.json
```

## Routes

### `/`

Returns a 'welcome' message with the actual date.

```json
{
  "message": "Welcome to my Deno API!",
  "time": "2021-01-02T15:39:26.939Z"
}
```

### `/persons`

Returns a list of persons registered (sample).

```json
[
  {
    "name": "Lucas",
    "age": 20,
    "url": "https://github.com/Lucasmaia435"
  }
]
```