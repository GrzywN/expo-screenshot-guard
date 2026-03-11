import ExpoModulesCore

internal class WindowNotFoundException: Exception, @unchecked Sendable {
  override var reason: String {
    "Window is not available"
  }
}
