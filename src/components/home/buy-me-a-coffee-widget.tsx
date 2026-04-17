import Script from "next/script"

/**
 * Loads the Buy Me a Coffee floating widget (home only).
 * Attributes match the official embed snippet.
 */
export function BuyMeACoffeeWidget() {
  return (
    <Script
      id="bmc-widget"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      strategy="lazyOnload"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="sabiqsabry"
      data-description="Support me on Buy me a coffee!"
      data-message="Thank you for supporting!"
      data-color="#171717"
      data-position="Right"
      data-x_margin="22"
      data-y_margin="28"
    />
  )
}
