import ExpoModulesCore

internal class WindowNotFoundException: Exception {
  override var reason: String {
    "Window is not available"
  }
}
