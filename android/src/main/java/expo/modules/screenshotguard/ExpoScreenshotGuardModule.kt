package expo.modules.screenshotguard

import android.view.WindowManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoScreenshotGuardModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoScreenshotGuard")

    AsyncFunction("enableProtectionAsync") {
      val activity = appContext.activityProvider?.currentActivity
        ?: throw ActivityNotFoundException()
      activity.runOnUiThread {
        activity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
    }

    AsyncFunction("disableProtectionAsync") {
      val activity = appContext.activityProvider?.currentActivity
        ?: throw ActivityNotFoundException()
      activity.runOnUiThread {
        activity.window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
    }

    Function("isProtectionEnabled") {
      val activity = appContext.activityProvider?.currentActivity
        ?: return@Function false
      (activity.window.attributes.flags and WindowManager.LayoutParams.FLAG_SECURE) != 0
    }
  }
}
