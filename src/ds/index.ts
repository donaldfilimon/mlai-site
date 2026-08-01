/* mlai-site — vendored design system.
 *
 * The prototype imported these from the `mlai-site` npm package; that package is not
 * published, so the components are ported here from the design-system bundle
 * (`_ds_bundle.js` under `_ds/mlai-design-system-…`, components/vendor/SiteRuntime)
 * with their markup and classes intact. `./mlai-site.css` carries the stylesheet it
 * injected at runtime, so the classes below resolve exactly as they did in the design.
 *
 * One deliberate change: Nav / Footer / NextUp link through react-router instead of
 * raw <a href>, and Nav reads the active route from the router rather than the
 * bundle's `() => "/"` stub — so navigation is SPA-local and the active tab underlines.
 */

export * from "./brand";
export * from "./ui";
export * from "./content";
export * from "./cards";
export { HeroBench } from "./HeroBench";
export { PublicationIndex } from "./PublicationIndex";
