package expo.modules.screenshotguard

import android.view.WindowManager
import expo.modules.kotlin.functions.Queues
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoScreenshotGuardModule : Module() {
  private val currentActivity
    get() = appContext.currentActivity ?: throw ActivityNotFoundException()

  override fun definition() = ModuleDefinition {
    Name("ExpoScreenshotGuard")

    AsyncFunction("enableProtectionAsync") {
      currentActivity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
    }.runOnQueue(Queues.MAIN)

    AsyncFunction("disableProtectionAsync") {
      currentActivity.window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
    }.runOnQueue(Queues.MAIN)

    Function("isProtectionEnabled") {
      val activity = appContext.currentActivity ?: return@Function false
      (activity.window.attributes.flags and WindowManager.LayoutParams.FLAG_SECURE) != 0
    }
  }
}
