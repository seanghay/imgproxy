import { expect, test, describe, beforeAll } from '@jest/globals';
import Imgproxy, { Gravity } from '../src/index';

describe('readme', () => {
  beforeAll(() => {
    process.env.IMGPROXY_KEY = 'ffffff';
    process.env.IMGPROXY_SALT = 'ffffff';
  });

  test('the only test"', () => {
    const imgproxy = new Imgproxy({
      baseUrl: 'https://imgproxy.example.com',
      key: process.env.IMGPROXY_KEY,
      salt: process.env.IMGPROXY_SALT,
      encode: true,
    });

    expect(
      imgproxy
        .builder()
        .resize('fill', 300, 200)
        .gravity(Gravity.north_east)
        .dpr(2)
        .generateUrl('https://example.com/path/to/image.jpg'),
    ).toMatchInlineSnapshot(
      `"https://imgproxy.example.com/AWGgTMLWu75Z1eqL3dQpWMUwZtpD4C-C0XDV_PK2B-U/rs:fill:300:200:0/g:noea/dpr:2/aHR0cHM6Ly9leGFtcGxlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZw"`,
    );
  });
});
