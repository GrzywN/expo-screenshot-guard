package expo.modules.screenshotguard

import expo.modules.kotlin.exception.CodedException

internal class ActivityNotFoundException :
  CodedException("Activity is not available")
