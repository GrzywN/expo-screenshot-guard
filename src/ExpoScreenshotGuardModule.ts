import { NativeModule, requireNativeModule } from 'expo';

import { ExpoScreenshotGuardModuleEvents } from './ExpoScreenshotGuard.types';

declare class ExpoScreenshotGuardModule extends NativeModule<ExpoScreenshotGuardModuleEvents> {
  enableProtectionAsync(): Promise<void>;
  disableProtectionAsync(): Promise<void>;
  isProtectionEnabled(): boolean;
}

export default requireNativeModule<ExpoScreenshotGuardModule>(
  'ExpoScreenshotGuard'
);
