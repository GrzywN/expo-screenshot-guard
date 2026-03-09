jest.mock('expo', () => {
  class NativeModule {
    addListener() {}
    removeListeners() {}
  }

  return {
    NativeModule,
    registerWebModule: (ModuleClass) => new ModuleClass(),
  };
});

import ExpoScreenshotGuardModuleWeb from '../ExpoScreenshotGuardModule.web';

describe('ExpoScreenshotGuardModule.web', () => {
  it('enableProtectionAsync resolves without error', async () => {
    await expect(
      ExpoScreenshotGuardModuleWeb.enableProtectionAsync()
    ).resolves.toBeUndefined();
  });

  it('disableProtectionAsync resolves without error', async () => {
    await expect(
      ExpoScreenshotGuardModuleWeb.disableProtectionAsync()
    ).resolves.toBeUndefined();
  });

  it('isProtectionEnabled returns false', () => {
    expect(ExpoScreenshotGuardModuleWeb.isProtectionEnabled()).toBe(false);
  });
});
