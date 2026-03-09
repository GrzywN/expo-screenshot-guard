import { NativeModule, registerWebModule } from 'expo';

import { ExpoScreenshotGuardModuleEvents } from './ExpoScreenshotGuard.types';

class ExpoScreenshotGuardModule extends NativeModule<ExpoScreenshotGuardModuleEvents> {
  async enableProtectionAsync(): Promise<void> {
    // Web: no-op — browser APIs do not support screenshot prevention
  }

  async disableProtectionAsync(): Promise<void> {
    // Web: no-op
  }

  isProtectionEnabled(): boolean {
    return false;
  }
}

export default registerWebModule(
  ExpoScreenshotGuardModule,
  'ExpoScreenshotGuard'
);
