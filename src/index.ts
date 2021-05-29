import { ImgproxyBuilder } from './builder';
import { ImgproxyConfig, ImgproxySecureConfig } from './types';
import { isSecureConfig } from './utils';

export default class Imgproxy {
  private readonly config: ImgproxyConfig | ImgproxySecureConfig;

  constructor(config: ImgproxyConfig | ImgproxySecureConfig) {
    if (isSecureConfig(config) && typeof config.signatureSize !== 'undefined') {
      if (config.signatureSize < 1 || config.signatureSize > 32) {
        throw new Error(
          '`signatureSize` must be greater than or equal to 1, and less than or equal to 32',
        );
      }
    }
    this.config = config;
  }

  public builder() {
    return new ImgproxyBuilder(this.config);
  }
}

export { Gravity, WatermarkPosition } from './types';
