import { registerWebModule, NativeModule } from 'expo';

import { ExpoScreenshotGuardModuleEvents } from './ExpoScreenshotGuard.types';

class ExpoScreenshotGuardModule extends NativeModule<ExpoScreenshotGuardModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoScreenshotGuardModule, 'ExpoScreenshotGuardModule');
