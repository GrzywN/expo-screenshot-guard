import { NativeModule, requireNativeModule } from 'expo';

import { ExpoScreenshotGuardModuleEvents } from './ExpoScreenshotGuard.types';

declare class ExpoScreenshotGuardModule extends NativeModule<ExpoScreenshotGuardModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoScreenshotGuardModule>(
  'ExpoScreenshotGuard'
);
