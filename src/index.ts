// Reexport the native module. On web, it will be resolved to ExpoScreenshotGuardModule.web.ts
// and on native platforms to ExpoScreenshotGuardModule.ts
export { default } from './ExpoScreenshotGuardModule';
export { default as ExpoScreenshotGuardView } from './ExpoScreenshotGuardView';
export * from './ExpoScreenshotGuard.types';
