import { useEffect } from 'react';

import ExpoScreenshotGuardModule from './ExpoScreenshotGuardModule';

let activeGuardCount = 0;

export type ScreenshotGuardOptions = {
  onError?: (error: unknown) => void;
};

export function useScreenshotGuard(
  enabled: boolean = true,
  // eslint-disable-next-line no-console
  { onError = console.error }: ScreenshotGuardOptions = {}
): void {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    activeGuardCount++;

    if (activeGuardCount === 1) {
      ExpoScreenshotGuardModule.enableProtectionAsync().catch(onError);
    }

    return () => {
      activeGuardCount--;

      if (activeGuardCount === 0) {
        ExpoScreenshotGuardModule.disableProtectionAsync().catch(onError);
      }
    };
  }, [enabled, onError]);
}
