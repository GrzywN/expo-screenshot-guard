import ExpoModulesCore
import UIKit

public class ExpoScreenshotGuardModule: Module {
  private var protectionTextField: UITextField?
  private var originalParent: CALayer?

  private var keyWindow: UIWindow? {
    return UIApplication.shared
      .connectedScenes
      .flatMap { ($0 as? UIWindowScene)?.windows ?? [] }
      .last { $0.isKeyWindow }
  }

  public func definition() -> ModuleDefinition {
    Name("ExpoScreenshotGuard")

    AsyncFunction("enableProtectionAsync") {
      self.preventScreenshots()
    }.runOnQueue(.main)

    AsyncFunction("disableProtectionAsync") {
      self.allowScreenshots()
    }.runOnQueue(.main)

    Function("isProtectionEnabled") { () -> Bool in
      return self.protectionTextField != nil
    }
  }

  private func preventScreenshots() {
    guard protectionTextField == nil,
      let keyWindow = keyWindow else {
      return
    }

    let textField = UITextField()
    textField.isSecureTextEntry = true
    textField.isUserInteractionEnabled = false
    textField.backgroundColor = .clear
    textField.frame = UIScreen.main.bounds

    originalParent = keyWindow.layer.superlayer

    keyWindow.layer.superlayer?.addSublayer(textField.layer)

    if let firstTextFieldSublayer = textField.layer.sublayers?.first {
      keyWindow.layer.removeFromSuperlayer()
      firstTextFieldSublayer.addSublayer(keyWindow.layer)
    }

    protectionTextField = textField
  }

  private func allowScreenshots() {
    guard let textField = protectionTextField,
      let window = keyWindow,
      let originalParentLayer = originalParent else {
      return
    }

    window.layer.removeFromSuperlayer()
    originalParentLayer.addSublayer(window.layer)
    textField.layer.removeFromSuperlayer()
    protectionTextField = nil
    originalParent = nil
  }
}
