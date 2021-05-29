import { createHmac } from 'crypto';
import { FocusPoint, ImgproxySecureConfig, RGBColor } from './types';

export const isRGBColor = (obj: RGBColor | unknown): obj is RGBColor => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'r' in obj &&
    'g' in obj &&
    'b' in obj
  );
};

export const isFocusPoint = (obj: FocusPoint | unknown): obj is FocusPoint => {
  return typeof obj === 'object' && obj !== null && 'x' in obj && 'y' in obj;
};

export const isSecureConfig = (
  config: ImgproxyConfig,
): config is ImgproxySecureConfig => {
  return 'key' in config && 'salt' in config;
};

const hexDecode = (hex: string) => Buffer.from(hex, 'hex');

export const sign = (
  key: string,
  salt: string,
  target: string,
  size: number = 32,
) => {
  const hmac = createHmac('sha256', hexDecode(key));
  hmac.update(hexDecode(salt));
  hmac.update(target);
  return hmac.digest().slice(0, size).toString('base64url');
};
