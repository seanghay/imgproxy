# @seanghay/imgproxy

Suppprts for ESM, CommonJS and Browser. Deno?

A Node client library to generate urls for
[imgproxy](https://github.com/block65/imgproxy-node) services.

> This is a pure ESM/CommonJS fork of the original [imgproxy](https://www.npmjs.com/package/imgproxy). 


## Usage

```
npm i @seanghay/imgproxy
```

### ESM

```ts
import { Imgproxy, Gravity } from '@seanghay/imgproxy';

const imgproxy = new Imgproxy({
  baseUrl: 'https://imgproxy.example.com',
  key: process.env.IMGPROXY_KEY,
  salt: process.env.IMGPROXY_SALT,
  encode: true,
});

imgproxy
  .builder()
  .resize('fill', 300, 200, 0)
  .gravity(Gravity.north_east)
  .dpr(2)
  .generateUrl('https://example.com/path/to/image.jpg');
```

### CommonJS

```ts
const { Imgproxy, Gravity } = require('@seanghay/imgproxy');

const imgproxy = new Imgproxy({
  baseUrl: 'https://imgproxy.example.com',
  key: process.env.IMGPROXY_KEY,
  salt: process.env.IMGPROXY_SALT,
  encode: true,
});

imgproxy
  .builder()
  .resize('fill', 300, 200, 0)
  .gravity(Gravity.north_east)
  .dpr(2)
  .generateUrl('https://example.com/path/to/image.jpg');
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

This project is licensed under the [MIT License](LICENSE.md).
