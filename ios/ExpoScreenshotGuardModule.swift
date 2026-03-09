import ExpoModulesCore

public class ExpoScreenshotGuardModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoScreenshotGuard")

    AsyncFunction("enableProtectionAsync") { () async in
      // iOS: TODO — implement using secure text field overlay technique
    }

    AsyncFunction("disableProtectionAsync") { () async in
      // iOS: TODO
    }

    Function("isProtectionEnabled") { () -> Bool in
      return false
    }
  }
}
