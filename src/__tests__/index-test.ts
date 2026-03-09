import { ExpoScreenshotGuardModule, useScreenshotGuard } from '../index';

jest.mock('expo', () => ({
  requireNativeModule: jest.fn().mockReturnValue({
    enableProtectionAsync: jest.fn(),
    disableProtectionAsync: jest.fn(),
    isProtectionEnabled: jest.fn(),
  }),
  NativeModule: class {},
}));

describe('index exports', () => {
  it('exports useScreenshotGuard as a function', () => {
    expect(typeof useScreenshotGuard).toBe('function');
  });

  it('exports ExpoScreenshotGuardModule with expected methods', () => {
    expect(typeof ExpoScreenshotGuardModule.enableProtectionAsync).toBe(
      'function'
    );
    expect(typeof ExpoScreenshotGuardModule.disableProtectionAsync).toBe(
      'function'
    );
    expect(typeof ExpoScreenshotGuardModule.isProtectionEnabled).toBe(
      'function'
    );
  });
});
