import * as React from 'react';

import { ExpoScreenshotGuardViewProps } from './ExpoScreenshotGuard.types';

export default function ExpoScreenshotGuardView(
  props: ExpoScreenshotGuardViewProps
) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }} // eslint-disable-line react-native/no-inline-styles
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
