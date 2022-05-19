The demo for node-fetch [issue](https://github.com/node-fetch/node-fetch/pull/1557).

# bootstrap

```sh
lerna bootstrap
lerna run start --stream
```

# reproduce

```
curl http://127.0.0.1:3001
```

The number of active handles will increase every time we execute  the above curl command.