import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoScreenshotGuardViewProps } from './ExpoScreenshotGuard.types';

const NativeView: React.ComponentType<ExpoScreenshotGuardViewProps> =
  requireNativeView('ExpoScreenshotGuard');

export default function ExpoScreenshotGuardView(props: ExpoScreenshotGuardViewProps) {
  return <NativeView {...props} />;
}
