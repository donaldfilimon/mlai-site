/* @ds-bundle: {"namespace":"MlaiLab","components":[{"name":"Accordion","sourcePath":"components/general/Accordion/Accordion.jsx"},{"name":"Alert","sourcePath":"components/general/Alert/Alert.jsx"},{"name":"Badge","sourcePath":"components/general/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Card","sourcePath":"components/general/Card/Card.jsx"},{"name":"Dialog","sourcePath":"components/general/Dialog/Dialog.jsx"},{"name":"DropdownMenu","sourcePath":"components/general/DropdownMenu/DropdownMenu.jsx"},{"name":"Input","sourcePath":"components/general/Input/Input.jsx"},{"name":"Label","sourcePath":"components/general/Label/Label.jsx"},{"name":"Select","sourcePath":"components/general/Select/Select.jsx"},{"name":"Separator","sourcePath":"components/general/Separator/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/general/Skeleton/Skeleton.jsx"},{"name":"Tabs","sourcePath":"components/general/Tabs/Tabs.jsx"},{"name":"Textarea","sourcePath":"components/general/Textarea/Textarea.jsx"},{"name":"Toaster","sourcePath":"components/general/Toaster/Toaster.jsx"},{"name":"Tooltip","sourcePath":"components/general/Tooltip/Tooltip.jsx"}],"sourceHashes":{"components/general/Accordion/Accordion.jsx":"fe2eed4b4f39","components/general/Accordion/Accordion.d.ts":"93d5b4edca5c","components/general/Accordion/Accordion.prompt.md":"f70f46d206fc","components/general/Alert/Alert.jsx":"b8d22ec09799","components/general/Alert/Alert.d.ts":"895e37df441d","components/general/Alert/Alert.prompt.md":"bbfe03a9c618","components/general/Badge/Badge.jsx":"ac1ecbf2dd40","components/general/Badge/Badge.d.ts":"49bbda90e6bb","components/general/Badge/Badge.prompt.md":"405a95fd1715","components/general/Button/Button.jsx":"2bd583d1c9a4","components/general/Button/Button.d.ts":"c2226511e833","components/general/Button/Button.prompt.md":"e9e8b9bbc11e","components/general/Card/Card.jsx":"d6daa98ba691","components/general/Card/Card.d.ts":"3db295c12d32","components/general/Card/Card.prompt.md":"2ce587b529a2","components/general/Dialog/Dialog.jsx":"22c7234cc876","components/general/Dialog/Dialog.d.ts":"963b966926a0","components/general/Dialog/Dialog.prompt.md":"32e9df061004","components/general/DropdownMenu/DropdownMenu.jsx":"697f3b9dbe32","components/general/DropdownMenu/DropdownMenu.d.ts":"d1154b727ce3","components/general/DropdownMenu/DropdownMenu.prompt.md":"93d4d4067b9d","components/general/Input/Input.jsx":"a0d30ba70103","components/general/Input/Input.d.ts":"20a4975b5ca3","components/general/Input/Input.prompt.md":"764a3471a351","components/general/Label/Label.jsx":"88edd2f9d61b","components/general/Label/Label.d.ts":"d182294b2fee","components/general/Label/Label.prompt.md":"f6a198b6148f","components/general/Select/Select.jsx":"4d499792d2d1","components/general/Select/Select.d.ts":"c5f252a43394","components/general/Select/Select.prompt.md":"947918874149","components/general/Separator/Separator.jsx":"2884b76ff160","components/general/Separator/Separator.d.ts":"e883542fc114","components/general/Separator/Separator.prompt.md":"4f67ad390165","components/general/Skeleton/Skeleton.jsx":"cdbb4f7d5cb5","components/general/Skeleton/Skeleton.d.ts":"f2d20681f770","components/general/Skeleton/Skeleton.prompt.md":"e7b8eb801b21","components/general/Tabs/Tabs.jsx":"026fd54eac20","components/general/Tabs/Tabs.d.ts":"bf223ad1aa80","components/general/Tabs/Tabs.prompt.md":"8190889ae05e","components/general/Textarea/Textarea.jsx":"eb0a73e6171e","components/general/Textarea/Textarea.d.ts":"8d771ba06444","components/general/Textarea/Textarea.prompt.md":"0460f3542844","components/general/Toaster/Toaster.jsx":"3c48d99da045","components/general/Toaster/Toaster.d.ts":"f7068dff762e","components/general/Toaster/Toaster.prompt.md":"933dec8de713","components/general/Tooltip/Tooltip.jsx":"6d0f94240a63","components/general/Tooltip/Tooltip.d.ts":"d1154826e71a","components/general/Tooltip/Tooltip.prompt.md":"9a09dba209c8"},"inlinedExternals":["@base-ui/react","@base-ui/utils","@floating-ui/core","@floating-ui/dom","@floating-ui/react-dom","@floating-ui/utils","class-variance-authority","clsx","lucide-react","reselect","tailwind-merge","use-sync-external-store"],"builtBy":"cc-design-sync"} */
"use strict";
var MlaiLab = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsx;
      module.exports.jsxDEV = jsx;
      module.exports.Fragment = R.Fragment;
    }
  });

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n = function() {
      };
      module.exports = Object.assign({ preload: n, preinit: n, preconnect: n, prefetchDNS: n, preloadModule: n, preinitModule: n }, D);
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
  var require_use_sync_external_store_shim_development = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
      "use strict";
      init_define_import_meta_env();
      (function() {
        function is(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        function useSyncExternalStore$2(subscribe2, getSnapshot2) {
          didWarnOld18Alpha || void 0 === React209.startTransition || (didWarnOld18Alpha = true, console.error(
            "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
          ));
          var value = getSnapshot2();
          if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot2();
            objectIs(value, cachedValue) || (console.error(
              "The result of getSnapshot should be cached to avoid an infinite loop"
            ), didWarnUncachedGetSnapshot = true);
          }
          cachedValue = useState38({
            inst: { value, getSnapshot: getSnapshot2 }
          });
          var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
          useLayoutEffect3(
            function() {
              inst.value = value;
              inst.getSnapshot = getSnapshot2;
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            },
            [subscribe2, value, getSnapshot2]
          );
          useEffect30(
            function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
              return subscribe2(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({ inst });
              });
            },
            [subscribe2]
          );
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          inst = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe2, getSnapshot2) {
          return getSnapshot2();
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React209 = require_react_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useState38 = React209.useState, useEffect30 = React209.useEffect, useLayoutEffect3 = React209.useLayoutEffect, useDebugValue2 = React209.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
        exports.useSyncExternalStore = void 0 !== React209.useSyncExternalStore ? React209.useSyncExternalStore : shim;
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      init_define_import_meta_env();
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_shim_development();
      }
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
  var require_with_selector_development = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
      "use strict";
      init_define_import_meta_env();
      (function() {
        function is(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React209 = require_react_shim(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore3 = shim.useSyncExternalStore, useRef66 = React209.useRef, useEffect30 = React209.useEffect, useMemo55 = React209.useMemo, useDebugValue2 = React209.useDebugValue;
        exports.useSyncExternalStoreWithSelector = function(subscribe2, getSnapshot2, getServerSnapshot2, selector, isEqual) {
          var instRef = useRef66(null);
          if (null === instRef.current) {
            var inst = { hasValue: false, value: null };
            instRef.current = inst;
          } else inst = instRef.current;
          instRef = useMemo55(
            function() {
              function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                  hasMemo = true;
                  memoizedSnapshot = nextSnapshot;
                  nextSnapshot = selector(nextSnapshot);
                  if (void 0 !== isEqual && inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, nextSnapshot))
                      return memoizedSelection = currentSelection;
                  }
                  return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot))
                  return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                  return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
              }
              var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot2 ? null : getServerSnapshot2;
              return [
                function() {
                  return memoizedSelector(getSnapshot2());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                  return memoizedSelector(maybeGetServerSnapshot());
                }
              ];
            },
            [getSnapshot2, getServerSnapshot2, selector, isEqual]
          );
          var value = useSyncExternalStore3(subscribe2, instRef[0], instRef[1]);
          useEffect30(
            function() {
              inst.hasValue = true;
              inst.value = value;
            },
            [value]
          );
          useDebugValue2(value);
          return value;
        };
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/use-sync-external-store/shim/with-selector.js
  var require_with_selector = __commonJS({
    "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
      "use strict";
      init_define_import_meta_env();
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_with_selector_development();
      }
    }
  });

  // src/components/ui/index.ts
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    AccordionContent: () => AccordionContent,
    AccordionItem: () => AccordionItem3,
    AccordionTrigger: () => AccordionTrigger3,
    Alert: () => Alert,
    AlertDescription: () => AlertDescription,
    AlertTitle: () => AlertTitle,
    Badge: () => Badge,
    Button: () => Button3,
    Card: () => Card,
    CardAction: () => CardAction,
    CardContent: () => CardContent,
    CardDescription: () => CardDescription,
    CardFooter: () => CardFooter,
    CardHeader: () => CardHeader,
    CardTitle: () => CardTitle,
    Dialog: () => Dialog,
    DialogClose: () => DialogClose3,
    DialogContent: () => DialogContent,
    DialogDescription: () => DialogDescription3,
    DialogFooter: () => DialogFooter,
    DialogHeader: () => DialogHeader,
    DialogOverlay: () => DialogOverlay,
    DialogPortal: () => DialogPortal3,
    DialogTitle: () => DialogTitle3,
    DialogTrigger: () => DialogTrigger3,
    DropdownMenu: () => DropdownMenu,
    DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
    DropdownMenuContent: () => DropdownMenuContent,
    DropdownMenuGroup: () => DropdownMenuGroup,
    DropdownMenuItem: () => DropdownMenuItem,
    DropdownMenuLabel: () => DropdownMenuLabel,
    DropdownMenuPortal: () => DropdownMenuPortal,
    DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
    DropdownMenuRadioItem: () => DropdownMenuRadioItem,
    DropdownMenuSeparator: () => DropdownMenuSeparator,
    DropdownMenuShortcut: () => DropdownMenuShortcut,
    DropdownMenuSubContent: () => DropdownMenuSubContent,
    DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
    DropdownMenuTrigger: () => DropdownMenuTrigger,
    Input: () => Input3,
    Label: () => Label,
    Select: () => Select,
    SelectContent: () => SelectContent,
    SelectGroup: () => SelectGroup3,
    SelectItem: () => SelectItem3,
    SelectLabel: () => SelectLabel3,
    SelectScrollDownButton: () => SelectScrollDownButton,
    SelectScrollUpButton: () => SelectScrollUpButton,
    SelectSeparator: () => SelectSeparator,
    SelectTrigger: () => SelectTrigger3,
    SelectValue: () => SelectValue3,
    Separator: () => Separator2,
    Skeleton: () => Skeleton,
    Tabs: () => Tabs,
    TabsContent: () => TabsContent,
    TabsList: () => TabsList3,
    TabsTrigger: () => TabsTrigger,
    Textarea: () => Textarea,
    Toast: () => Toast,
    ToastAction: () => ToastAction3,
    ToastClose: () => ToastClose3,
    ToastDescription: () => ToastDescription3,
    ToastProvider: () => ToastProvider3,
    ToastTitle: () => ToastTitle3,
    ToastViewport: () => ToastViewport3,
    Toaster: () => Toaster,
    Tooltip: () => Tooltip,
    TooltipContent: () => TooltipContent,
    TooltipProvider: () => TooltipProvider3,
    TooltipTrigger: () => TooltipTrigger3,
    badgeVariants: () => badgeVariants,
    buttonVariants: () => buttonVariants,
    tabsListVariants: () => tabsListVariants
  });
  init_define_import_meta_env();

  // src/components/ui/accordion.tsx
  init_define_import_meta_env();

  // node_modules/@base-ui/react/accordion/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/accordion/index.parts.mjs
  var index_parts_exports = {};
  __export(index_parts_exports, {
    Header: () => AccordionHeader,
    Item: () => AccordionItem,
    Panel: () => AccordionPanel,
    Root: () => AccordionRoot,
    Trigger: () => AccordionTrigger
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/accordion/root/AccordionRoot.mjs
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useControlled.mjs
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/error.mjs
  init_define_import_meta_env();
  var set;
  if (true) {
    set = /* @__PURE__ */ new Set();
  }
  function error(...messages) {
    if (true) {
      const messageKey = messages.join(" ");
      if (!set.has(messageKey)) {
        set.add(messageKey);
        console.error(`Base UI: ${messageKey}`);
      }
    }
  }

  // node_modules/@base-ui/utils/useControlled.mjs
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = "value"
  }) {
    const {
      current: isControlled
    } = React2.useRef(controlled !== void 0);
    const [valueState, setValue] = React2.useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    if (true) {
      React2.useEffect(() => {
        if (isControlled !== (controlled !== void 0)) {
          error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
        }
      }, [state, name, controlled]);
      const {
        current: defaultValue
      } = React2.useRef(defaultProp);
      React2.useEffect(() => {
        if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
          error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
        }
      }, [defaultProp]);
    }
    const setValueIfUncontrolled = React2.useCallback((newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }
  function serializeToDevModeString(input) {
    let nextId = 0;
    const seen = /* @__PURE__ */ new WeakMap();
    try {
      const result = JSON.stringify(input, function replacer(key, value) {
        if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) {
          return void 0;
        }
        if (typeof value === "bigint") {
          return `__bigint__:${value}`;
        }
        if (value !== null && typeof value === "object") {
          const id = seen.get(value);
          if (id !== void 0) {
            return `__object__:${id}`;
          }
          seen.set(value, nextId);
          nextId += 1;
        }
        return value;
      });
      return result ?? `__top__:${typeof input}`;
    } catch {
      return "__unserializable__";
    }
  }

  // node_modules/@base-ui/utils/useStableCallback.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/safeReact.mjs
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim(), 1);
  var SafeReact = {
    ...React3
  };

  // node_modules/@base-ui/utils/useRefWithInit.mjs
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim(), 1);
  var UNINITIALIZED = {};
  function useRefWithInit(init, initArg) {
    const ref = React4.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }

  // node_modules/@base-ui/utils/useStableCallback.mjs
  var useInsertionEffect = SafeReact.useInsertionEffect;
  var useSafeInsertionEffect = (
    // React 17 doesn't have useInsertionEffect.
    useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
    useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
  );
  function useStableCallback(callback) {
    const stable = useRefWithInit(createStableCallback).current;
    stable.next = callback;
    useSafeInsertionEffect(stable.effect);
    return stable.trampoline;
  }
  function createStableCallback() {
    const stable = {
      next: void 0,
      callback: assertNotCalled,
      trampoline: (...args) => stable.callback?.(...args),
      effect: () => {
        stable.callback = stable.next;
      }
    };
    return stable;
  }
  function assertNotCalled() {
    if (true) {
      throw (
        /* minify-error-disabled */
        new Error("Base UI: Cannot call an event handler while rendering.")
      );
    }
  }

  // node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim(), 1);
  var noop = () => {
  };
  var useIsoLayoutEffect = typeof document !== "undefined" ? React5.useLayoutEffect : noop;

  // node_modules/@base-ui/utils/warn.mjs
  init_define_import_meta_env();
  var set2;
  if (true) {
    set2 = /* @__PURE__ */ new Set();
  }
  function warn(...messages) {
    if (true) {
      const messageKey = messages.join(" ");
      if (!set2.has(messageKey)) {
        set2.add(messageKey);
        console.warn(`Base UI: ${messageKey}`);
      }
    }
  }

  // node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim(), 1);
  var CompositeListContext = /* @__PURE__ */ React6.createContext({
    register: () => {
    },
    unregister: () => {
    },
    subscribeMapChange: () => {
      return () => {
      };
    },
    elementsRef: {
      current: []
    },
    nextIndexRef: {
      current: 0
    }
  });
  if (true) CompositeListContext.displayName = "CompositeListContext";
  function useCompositeListContext() {
    return React6.useContext(CompositeListContext);
  }

  // node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  function CompositeList(props) {
    const {
      children,
      elementsRef,
      labelsRef,
      onMapChange: onMapChangeProp
    } = props;
    const onMapChange = useStableCallback(onMapChangeProp);
    const nextIndexRef = React7.useRef(0);
    const listeners2 = useRefWithInit(createListeners).current;
    const map = useRefWithInit(createMap).current;
    const [mapTick, setMapTick] = React7.useState(0);
    const lastTickRef = React7.useRef(mapTick);
    const register2 = useStableCallback((node, metadata) => {
      map.set(node, metadata ?? null);
      lastTickRef.current += 1;
      setMapTick(lastTickRef.current);
    });
    const unregister = useStableCallback((node) => {
      map.delete(node);
      lastTickRef.current += 1;
      setMapTick(lastTickRef.current);
    });
    const sortedMap = React7.useMemo(() => {
      disableEslintWarning(mapTick);
      const newMap = /* @__PURE__ */ new Map();
      const sortedNodes = Array.from(map.keys()).filter((node) => node.isConnected).sort(sortByDocumentPosition);
      sortedNodes.forEach((node, index2) => {
        const metadata = map.get(node) ?? {};
        newMap.set(node, {
          ...metadata,
          index: index2
        });
      });
      return newMap;
    }, [map, mapTick]);
    useIsoLayoutEffect(() => {
      if (typeof MutationObserver !== "function" || sortedMap.size === 0) {
        return void 0;
      }
      const mutationObserver = new MutationObserver((entries) => {
        const diff = /* @__PURE__ */ new Set();
        const updateDiff = (node) => diff.has(node) ? diff.delete(node) : diff.add(node);
        entries.forEach((entry) => {
          entry.removedNodes.forEach(updateDiff);
          entry.addedNodes.forEach(updateDiff);
        });
        if (diff.size === 0) {
          lastTickRef.current += 1;
          setMapTick(lastTickRef.current);
        }
      });
      sortedMap.forEach((_, node) => {
        if (node.parentElement) {
          mutationObserver.observe(node.parentElement, {
            childList: true
          });
        }
      });
      return () => {
        mutationObserver.disconnect();
      };
    }, [sortedMap]);
    useIsoLayoutEffect(() => {
      const shouldUpdateLengths = lastTickRef.current === mapTick;
      if (shouldUpdateLengths) {
        if (elementsRef.current.length !== sortedMap.size) {
          elementsRef.current.length = sortedMap.size;
        }
        if (labelsRef && labelsRef.current.length !== sortedMap.size) {
          labelsRef.current.length = sortedMap.size;
        }
        nextIndexRef.current = sortedMap.size;
      }
      onMapChange(sortedMap);
    }, [onMapChange, sortedMap, elementsRef, labelsRef, mapTick]);
    useIsoLayoutEffect(() => {
      return () => {
        elementsRef.current = [];
      };
    }, [elementsRef]);
    useIsoLayoutEffect(() => {
      return () => {
        if (labelsRef) {
          labelsRef.current = [];
        }
      };
    }, [labelsRef]);
    const subscribeMapChange = useStableCallback((fn) => {
      listeners2.add(fn);
      return () => {
        listeners2.delete(fn);
      };
    });
    useIsoLayoutEffect(() => {
      listeners2.forEach((l) => l(sortedMap));
    }, [listeners2, sortedMap]);
    const contextValue = React7.useMemo(() => ({
      register: register2,
      unregister,
      subscribeMapChange,
      elementsRef,
      labelsRef,
      nextIndexRef
    }), [register2, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeListContext.Provider, {
      value: contextValue,
      children
    });
  }
  function createMap() {
    return /* @__PURE__ */ new Map();
  }
  function createListeners() {
    return /* @__PURE__ */ new Set();
  }
  function sortByDocumentPosition(a, b) {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    }
    return 0;
  }
  function disableEslintWarning(_) {
  }

  // node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
  init_define_import_meta_env();
  var React8 = __toESM(require_react_shim(), 1);
  var DirectionContext = /* @__PURE__ */ React8.createContext(void 0);
  if (true) DirectionContext.displayName = "DirectionContext";
  function useDirection() {
    const context = React8.useContext(DirectionContext);
    return context?.direction ?? "ltr";
  }

  // node_modules/@base-ui/react/accordion/root/AccordionRootContext.mjs
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim(), 1);
  var AccordionRootContext = /* @__PURE__ */ React9.createContext(void 0);
  if (true) AccordionRootContext.displayName = "AccordionRootContext";
  function useAccordionRootContext() {
    const context = React9.useContext(AccordionRootContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: AccordionRootContext is missing. Accordion parts must be placed within <Accordion.Root>." : formatErrorMessage_default(10));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/useRenderElement.mjs
  init_define_import_meta_env();
  var React12 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useMergedRefs.mjs
  init_define_import_meta_env();
  function useMergedRefs(a, b, c, d) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChange(forkRef, a, b, c, d)) {
      update(forkRef, [a, b, c, d]);
    }
    return forkRef.callback;
  }
  function useMergedRefsN(refs) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChangeN(forkRef, refs)) {
      update(forkRef, refs);
    }
    return forkRef.callback;
  }
  function createForkRef() {
    return {
      callback: null,
      cleanup: null,
      refs: []
    };
  }
  function didChange(forkRef, a, b, c, d) {
    return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
  }
  function didChangeN(forkRef, newRefs) {
    return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index2) => ref !== newRefs[index2]);
  }
  function update(forkRef, refs) {
    forkRef.refs = refs;
    if (refs.every((ref) => ref == null)) {
      forkRef.callback = null;
      return;
    }
    forkRef.callback = (instance) => {
      if (forkRef.cleanup) {
        forkRef.cleanup();
        forkRef.cleanup = null;
      }
      if (instance != null) {
        const cleanupCallbacks = Array(refs.length).fill(null);
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const refCleanup = ref(instance);
              if (typeof refCleanup === "function") {
                cleanupCallbacks[i] = refCleanup;
              }
              break;
            }
            case "object": {
              ref.current = instance;
              break;
            }
            default:
          }
        }
        forkRef.cleanup = () => {
          for (let i = 0; i < refs.length; i += 1) {
            const ref = refs[i];
            if (ref == null) {
              continue;
            }
            switch (typeof ref) {
              case "function": {
                const cleanupCallback = cleanupCallbacks[i];
                if (typeof cleanupCallback === "function") {
                  cleanupCallback();
                } else {
                  ref(null);
                }
                break;
              }
              case "object": {
                ref.current = null;
                break;
              }
              default:
            }
          }
        };
      }
    };
  }

  // node_modules/@base-ui/utils/getReactElementRef.mjs
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/reactVersion.mjs
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim(), 1);
  var majorVersion = parseInt(React10.version, 10);
  function isReactVersionAtLeast(reactVersionToCheck) {
    return majorVersion >= reactVersionToCheck;
  }

  // node_modules/@base-ui/utils/getReactElementRef.mjs
  function getReactElementRef(element) {
    if (!/* @__PURE__ */ React11.isValidElement(element)) {
      return null;
    }
    const reactElement = element;
    const propsWithRef = reactElement.props;
    return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
  }

  // node_modules/@base-ui/utils/mergeObjects.mjs
  init_define_import_meta_env();
  function mergeObjects(a, b) {
    if (a && !b) {
      return a;
    }
    if (!a && b) {
      return b;
    }
    if (a || b) {
      return {
        ...a,
        ...b
      };
    }
    return void 0;
  }

  // node_modules/@base-ui/utils/empty.mjs
  init_define_import_meta_env();
  function NOOP() {
  }
  var EMPTY_ARRAY = Object.freeze([]);
  var EMPTY_OBJECT = Object.freeze({});

  // node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
  init_define_import_meta_env();
  function getStateAttributesProps(state, customMapping) {
    const props = {};
    for (const key in state) {
      const value = state[key];
      if (customMapping?.hasOwnProperty(key)) {
        const customProps = customMapping[key](value);
        if (customProps != null) {
          Object.assign(props, customProps);
        }
        continue;
      }
      if (value === true) {
        props[`data-${key.toLowerCase()}`] = "";
      } else if (value) {
        props[`data-${key.toLowerCase()}`] = value.toString();
      }
    }
    return props;
  }

  // node_modules/@base-ui/react/utils/resolveClassName.mjs
  init_define_import_meta_env();
  function resolveClassName(className, state) {
    return typeof className === "function" ? className(state) : className;
  }

  // node_modules/@base-ui/react/utils/resolveStyle.mjs
  init_define_import_meta_env();
  function resolveStyle(style, state) {
    return typeof style === "function" ? style(state) : style;
  }

  // node_modules/@base-ui/react/merge-props/mergeProps.mjs
  init_define_import_meta_env();
  var EMPTY_PROPS = {};
  function mergeProps(a, b, c, d, e) {
    if (!c && !d && !e && !a) {
      return createInitialMergedProps(b);
    }
    let merged = createInitialMergedProps(a);
    if (b) {
      merged = mergeInto(merged, b);
    }
    if (c) {
      merged = mergeInto(merged, c);
    }
    if (d) {
      merged = mergeInto(merged, d);
    }
    if (e) {
      merged = mergeInto(merged, e);
    }
    return merged;
  }
  function mergePropsN(props) {
    if (props.length === 0) {
      return EMPTY_PROPS;
    }
    if (props.length === 1) {
      return createInitialMergedProps(props[0]);
    }
    let merged = createInitialMergedProps(props[0]);
    for (let i = 1; i < props.length; i += 1) {
      merged = mergeInto(merged, props[i]);
    }
    return merged;
  }
  function createInitialMergedProps(inputProps) {
    if (isPropsGetter(inputProps)) {
      return {
        ...resolvePropsGetter(inputProps, EMPTY_PROPS)
      };
    }
    return copyInitialProps(inputProps);
  }
  function mergeInto(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
      return resolvePropsGetter(inputProps, merged);
    }
    return mutablyMergeInto(merged, inputProps);
  }
  function copyInitialProps(inputProps) {
    const copiedProps = {
      ...inputProps
    };
    for (const propName in copiedProps) {
      const propValue = copiedProps[propName];
      if (isEventHandler(propName, propValue)) {
        copiedProps[propName] = wrapEventHandler(propValue);
      }
    }
    return copiedProps;
  }
  function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
      return mergedProps;
    }
    for (const propName in externalProps) {
      const externalPropValue = externalProps[propName];
      switch (propName) {
        case "style": {
          mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
          break;
        }
        case "className": {
          mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
          break;
        }
        default: {
          if (isEventHandler(propName, externalPropValue)) {
            mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
          } else {
            mergedProps[propName] = externalPropValue;
          }
        }
      }
    }
    return mergedProps;
  }
  function isEventHandler(key, value) {
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
  }
  function isPropsGetter(inputProps) {
    return typeof inputProps === "function";
  }
  function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
      return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
  }
  function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
      return ourHandler;
    }
    if (!ourHandler) {
      return wrapEventHandler(theirHandler);
    }
    return (...args) => {
      const event = args[0];
      if (isSyntheticEvent(event)) {
        const baseUIEvent = event;
        makeEventPreventable(baseUIEvent);
        const result2 = theirHandler(...args);
        if (!baseUIEvent.baseUIHandlerPrevented) {
          ourHandler?.(...args);
        }
        return result2;
      }
      const result = theirHandler(...args);
      ourHandler?.(...args);
      return result;
    };
  }
  function wrapEventHandler(handler) {
    if (!handler) {
      return handler;
    }
    return (...args) => {
      const event = args[0];
      if (isSyntheticEvent(event)) {
        makeEventPreventable(event);
      }
      return handler(...args);
    };
  }
  function makeEventPreventable(event) {
    event.preventBaseUIHandler = () => {
      event.baseUIHandlerPrevented = true;
    };
    return event;
  }
  function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
      if (ourClassName) {
        return theirClassName + " " + ourClassName;
      }
      return theirClassName;
    }
    return ourClassName;
  }
  function isSyntheticEvent(event) {
    return event != null && typeof event === "object" && "nativeEvent" in event;
  }

  // node_modules/@base-ui/react/internals/useRenderElement.mjs
  var import_react = __toESM(require_react_shim(), 1);
  function useRenderElement(element, componentProps, params = {}) {
    const renderProp = componentProps.render;
    const outProps = useRenderElementProps(componentProps, params);
    if (params.enabled === false) {
      return null;
    }
    const state = params.state ?? EMPTY_OBJECT;
    return evaluateRenderProp(element, renderProp, outProps, state);
  }
  function useRenderElementProps(componentProps, params = {}) {
    const {
      className: classNameProp,
      style: styleProp,
      render: renderProp
    } = componentProps;
    const {
      state = EMPTY_OBJECT,
      ref,
      props,
      stateAttributesMapping: stateAttributesMapping18,
      enabled = true
    } = params;
    const className = enabled ? resolveClassName(classNameProp, state) : void 0;
    const style = enabled ? resolveStyle(styleProp, state) : void 0;
    const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping18) : EMPTY_OBJECT;
    const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
    const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
    if (typeof document !== "undefined") {
      if (!enabled) {
        useMergedRefs(null, null);
      } else if (Array.isArray(ref)) {
        outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
      } else {
        outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
      }
    }
    if (!enabled) {
      return EMPTY_OBJECT;
    }
    if (className !== void 0) {
      outProps.className = mergeClassNames(outProps.className, className);
    }
    if (style !== void 0) {
      outProps.style = mergeObjects(outProps.style, style);
    }
    return outProps;
  }
  function resolveRenderFunctionProps(props) {
    if (Array.isArray(props)) {
      return mergePropsN(props);
    }
    return mergeProps(void 0, props);
  }
  var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
  var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
  var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
  function evaluateRenderProp(element, render, props, state) {
    if (render) {
      if (typeof render === "function") {
        if (true) {
          warnIfRenderPropLooksLikeComponent(render);
        }
        return render(props, state);
      }
      const mergedProps = mergeProps(props, render.props);
      mergedProps.ref = props.ref;
      let newElement = render;
      if (newElement?.$$typeof === REACT_LAZY_TYPE) {
        const children = React12.Children.toArray(render);
        newElement = children[0];
      }
      if (true) {
        if (!/* @__PURE__ */ React12.isValidElement(newElement)) {
          throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
        }
      }
      return /* @__PURE__ */ React12.cloneElement(newElement, mergedProps);
    }
    if (element) {
      if (typeof element === "string") {
        return renderTag(element, props);
      }
    }
    throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
  }
  function warnIfRenderPropLooksLikeComponent(renderFn) {
    const functionName = renderFn.name;
    if (functionName.length === 0) {
      return;
    }
    if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
      return;
    }
    if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
      return;
    }
    warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
  }
  function renderTag(Tag, props) {
    if (Tag === "button") {
      return /* @__PURE__ */ (0, import_react.createElement)("button", {
        type: "button",
        ...props,
        key: props.key
      });
    }
    if (Tag === "img") {
      return /* @__PURE__ */ (0, import_react.createElement)("img", {
        alt: "",
        ...props,
        key: props.key
      });
    }
    return /* @__PURE__ */ React12.createElement(Tag, props);
  }

  // node_modules/@base-ui/react/accordion/root/AccordionRoot.mjs
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var rootStateAttributesMapping = {
    value: () => null
  };
  var AccordionRoot = /* @__PURE__ */ React13.forwardRef(function AccordionRoot2(componentProps, forwardedRef) {
    const {
      render,
      className,
      disabled: disabled2 = false,
      hiddenUntilFound: hiddenUntilFoundProp,
      keepMounted: keepMountedProp,
      loopFocus,
      onValueChange,
      multiple = false,
      orientation = "vertical",
      value: valueProp,
      defaultValue: defaultValueProp,
      style,
      ...elementProps
    } = componentProps;
    const direction = useDirection();
    if (true) {
      useIsoLayoutEffect(() => {
        if (hiddenUntilFoundProp && keepMountedProp === false) {
          warn("The `keepMounted={false}` prop on `Accordion.Root` is ignored when `hiddenUntilFound` is enabled, since panels must remain mounted while closed.");
        }
      }, [hiddenUntilFoundProp, keepMountedProp]);
    }
    const defaultValue = React13.useMemo(() => {
      if (valueProp === void 0) {
        return defaultValueProp ?? [];
      }
      return void 0;
    }, [valueProp, defaultValueProp]);
    const accordionItemRefs = React13.useRef([]);
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: "Accordion",
      state: "value"
    });
    const handleValueChange = useStableCallback((newValue, nextOpen, details) => {
      if (!multiple) {
        const nextValue = value[0] === newValue ? [] : [newValue];
        onValueChange?.(nextValue, details);
        if (details.isCanceled) {
          return;
        }
        setValue(nextValue);
      } else if (nextOpen) {
        const nextOpenValues = value.slice();
        nextOpenValues.push(newValue);
        onValueChange?.(nextOpenValues, details);
        if (details.isCanceled) {
          return;
        }
        setValue(nextOpenValues);
      } else {
        const nextOpenValues = value.filter((v) => v !== newValue);
        onValueChange?.(nextOpenValues, details);
        if (details.isCanceled) {
          return;
        }
        setValue(nextOpenValues);
      }
    });
    const state = React13.useMemo(() => ({
      value,
      disabled: disabled2,
      orientation
    }), [value, disabled2, orientation]);
    const contextValue = React13.useMemo(() => ({
      disabled: disabled2,
      handleValueChange,
      hiddenUntilFound: hiddenUntilFoundProp ?? false,
      keepMounted: keepMountedProp ?? false,
      state,
      value
    }), [disabled2, handleValueChange, hiddenUntilFoundProp, keepMountedProp, state, value]);
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: [{
        dir: direction
      }, elementProps],
      stateAttributesMapping: rootStateAttributesMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionRootContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CompositeList, {
        elementsRef: accordionItemRefs,
        children: element
      })
    });
  });
  if (true) AccordionRoot.displayName = "AccordionRoot";

  // node_modules/@base-ui/react/accordion/item/AccordionItem.mjs
  init_define_import_meta_env();
  var React21 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useBaseUiId.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useId.mjs
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim(), 1);
  var globalId = 0;
  function useGlobalId(idOverride, prefix = "mui") {
    const [defaultId, setDefaultId] = React14.useState(idOverride);
    const id = idOverride || defaultId;
    React14.useEffect(() => {
      if (defaultId == null) {
        globalId += 1;
        setDefaultId(`${prefix}-${globalId}`);
      }
    }, [defaultId, prefix]);
    return id;
  }
  var maybeReactUseId = SafeReact.useId;
  function useId(idOverride, prefix) {
    if (maybeReactUseId !== void 0) {
      const reactId = maybeReactUseId();
      return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
    }
    return useGlobalId(idOverride, prefix);
  }

  // node_modules/@base-ui/react/internals/useBaseUiId.mjs
  function useBaseUiId(idOverride) {
    return useId(idOverride, "base-ui");
  }

  // node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
  init_define_import_meta_env();
  var React17 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/reasons.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/reason-parts.mjs
  var reason_parts_exports = {};
  __export(reason_parts_exports, {
    cancelOpen: () => cancelOpen,
    chipRemovePress: () => chipRemovePress,
    clearPress: () => clearPress,
    closePress: () => closePress,
    closeWatcher: () => closeWatcher,
    decrementPress: () => decrementPress,
    disabled: () => disabled,
    drag: () => drag,
    escapeKey: () => escapeKey,
    focusOut: () => focusOut,
    imperativeAction: () => imperativeAction,
    incrementPress: () => incrementPress,
    initial: () => initial,
    inputBlur: () => inputBlur,
    inputChange: () => inputChange,
    inputClear: () => inputClear,
    inputPaste: () => inputPaste,
    inputPress: () => inputPress,
    itemPress: () => itemPress,
    keyboard: () => keyboard,
    linkPress: () => linkPress,
    listNavigation: () => listNavigation,
    missing: () => missing,
    none: () => none,
    outsidePress: () => outsidePress,
    pointer: () => pointer,
    scrub: () => scrub,
    siblingOpen: () => siblingOpen,
    swipe: () => swipe,
    trackPress: () => trackPress,
    triggerFocus: () => triggerFocus,
    triggerHover: () => triggerHover,
    triggerPress: () => triggerPress,
    wheel: () => wheel,
    windowResize: () => windowResize
  });
  init_define_import_meta_env();
  var none = "none";
  var triggerPress = "trigger-press";
  var triggerHover = "trigger-hover";
  var triggerFocus = "trigger-focus";
  var outsidePress = "outside-press";
  var itemPress = "item-press";
  var closePress = "close-press";
  var linkPress = "link-press";
  var clearPress = "clear-press";
  var chipRemovePress = "chip-remove-press";
  var trackPress = "track-press";
  var incrementPress = "increment-press";
  var decrementPress = "decrement-press";
  var inputChange = "input-change";
  var inputClear = "input-clear";
  var inputBlur = "input-blur";
  var inputPaste = "input-paste";
  var inputPress = "input-press";
  var focusOut = "focus-out";
  var escapeKey = "escape-key";
  var closeWatcher = "close-watcher";
  var listNavigation = "list-navigation";
  var keyboard = "keyboard";
  var pointer = "pointer";
  var drag = "drag";
  var wheel = "wheel";
  var scrub = "scrub";
  var cancelOpen = "cancel-open";
  var siblingOpen = "sibling-open";
  var disabled = "disabled";
  var missing = "missing";
  var initial = "initial";
  var imperativeAction = "imperative-action";
  var swipe = "swipe";
  var windowResize = "window-resize";

  // node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
  function createChangeEventDetails(reason, event, trigger, customProperties) {
    let canceled = false;
    let allowPropagation = false;
    const custom = customProperties ?? EMPTY_OBJECT;
    const details = {
      reason,
      event: event ?? new Event("base-ui"),
      cancel() {
        canceled = true;
      },
      allowPropagation() {
        allowPropagation = true;
      },
      get isCanceled() {
        return canceled;
      },
      get isPropagationAllowed() {
        return allowPropagation;
      },
      trigger,
      ...custom
    };
    return details;
  }

  // node_modules/@base-ui/react/internals/useTransitionStatus.mjs
  init_define_import_meta_env();
  var React16 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useAnimationFrame.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useOnMount.mjs
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim(), 1);
  var EMPTY = [];
  function useOnMount(fn) {
    React15.useEffect(fn, EMPTY);
  }

  // node_modules/@base-ui/utils/useAnimationFrame.mjs
  var EMPTY2 = null;
  var LAST_RAF = globalThis.requestAnimationFrame;
  var Scheduler = class {
    constructor() {
      /* This implementation uses an array as a backing data-structure for frame callbacks.
       * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
       * never calls the native `cancelAnimationFrame` if there are no frames left. This can
       * be much more efficient if there is a call pattern that alterns as
       * "request-cancel-request-cancel-…".
       * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
       * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
      __publicField(this, "callbacks", []);
      __publicField(this, "callbacksCount", 0);
      __publicField(this, "nextId", 1);
      __publicField(this, "startId", 1);
      __publicField(this, "isScheduled", false);
      __publicField(this, "tick", (timestamp) => {
        this.isScheduled = false;
        const currentCallbacks = this.callbacks;
        const currentCallbacksCount = this.callbacksCount;
        this.callbacks = [];
        this.callbacksCount = 0;
        this.startId = this.nextId;
        if (currentCallbacksCount > 0) {
          for (let i = 0; i < currentCallbacks.length; i += 1) {
            currentCallbacks[i]?.(timestamp);
          }
        }
      });
    }
    request(fn) {
      const id = this.nextId;
      this.nextId += 1;
      this.callbacks.push(fn);
      this.callbacksCount += 1;
      const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
      if (!this.isScheduled || didRAFChange) {
        requestAnimationFrame(this.tick);
        this.isScheduled = true;
      }
      return id;
    }
    cancel(id) {
      const index2 = id - this.startId;
      if (index2 < 0 || index2 >= this.callbacks.length) {
        return;
      }
      this.callbacks[index2] = null;
      this.callbacksCount -= 1;
    }
  };
  var scheduler = new Scheduler();
  var AnimationFrame = class _AnimationFrame {
    constructor() {
      __publicField(this, "currentId", EMPTY2);
      __publicField(this, "cancel", () => {
        if (this.currentId !== EMPTY2) {
          scheduler.cancel(this.currentId);
          this.currentId = EMPTY2;
        }
      });
      __publicField(this, "disposeEffect", () => {
        return this.cancel;
      });
    }
    static create() {
      return new _AnimationFrame();
    }
    static request(fn) {
      return scheduler.request(fn);
    }
    static cancel(id) {
      return scheduler.cancel(id);
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    request(fn) {
      this.cancel();
      this.currentId = scheduler.request(() => {
        this.currentId = EMPTY2;
        fn();
      });
    }
  };
  function useAnimationFrame() {
    const timeout = useRefWithInit(AnimationFrame.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

  // node_modules/@base-ui/react/internals/useTransitionStatus.mjs
  function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
    const [transitionStatus, setTransitionStatus] = React16.useState(open && enableIdleState ? "idle" : void 0);
    const [mounted, setMounted] = React16.useState(open);
    if (open && !mounted) {
      setMounted(true);
      setTransitionStatus("starting");
    }
    if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
      setTransitionStatus("ending");
    }
    if (!open && !mounted && transitionStatus === "ending") {
      setTransitionStatus(void 0);
    }
    useIsoLayoutEffect(() => {
      if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
        const frame = AnimationFrame.request(() => {
          setTransitionStatus("ending");
        });
        return () => {
          AnimationFrame.cancel(frame);
        };
      }
      return void 0;
    }, [open, mounted, transitionStatus, deferEndingState]);
    useIsoLayoutEffect(() => {
      if (!open || enableIdleState) {
        return void 0;
      }
      const frame = AnimationFrame.request(() => {
        setTransitionStatus(void 0);
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }, [enableIdleState, open]);
    useIsoLayoutEffect(() => {
      if (!open || !enableIdleState) {
        return void 0;
      }
      if (open && mounted && transitionStatus !== "idle") {
        setTransitionStatus("starting");
      }
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("idle");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }, [enableIdleState, open, mounted, transitionStatus]);
    return {
      mounted,
      setMounted,
      transitionStatus
    };
  }

  // node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
  function useCollapsibleRoot(parameters) {
    const {
      open: openParam,
      defaultOpen,
      onOpenChange,
      disabled: disabled2
    } = parameters;
    const [open, setOpen] = useControlled({
      controlled: openParam,
      default: defaultOpen,
      name: "Collapsible",
      state: "open"
    });
    const {
      mounted,
      setMounted,
      transitionStatus
    } = useTransitionStatus(open, true, true);
    const defaultPanelId = useBaseUiId();
    const [panelIdState, setPanelIdState] = React17.useState();
    const panelId = panelIdState ?? defaultPanelId;
    const handleTrigger = useStableCallback((event) => {
      const nextOpen = !open;
      const eventDetails = createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent);
      onOpenChange(nextOpen, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setOpen(nextOpen);
    });
    return React17.useMemo(() => ({
      disabled: disabled2,
      handleTrigger,
      mounted,
      open,
      panelId,
      setMounted,
      setOpen,
      setPanelIdState,
      transitionStatus
    }), [disabled2, handleTrigger, mounted, open, panelId, setMounted, setOpen, setPanelIdState, transitionStatus]);
  }

  // node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim(), 1);
  var CollapsibleRootContext = /* @__PURE__ */ React18.createContext(void 0);
  if (true) CollapsibleRootContext.displayName = "CollapsibleRootContext";
  function useCollapsibleRootContext() {
    const context = React18.useContext(CollapsibleRootContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>." : formatErrorMessage_default(15));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
  init_define_import_meta_env();
  var React19 = __toESM(require_react_shim(), 1);
  var IndexGuessBehavior = /* @__PURE__ */ (function(IndexGuessBehavior2) {
    IndexGuessBehavior2[IndexGuessBehavior2["None"] = 0] = "None";
    IndexGuessBehavior2[IndexGuessBehavior2["GuessFromOrder"] = 1] = "GuessFromOrder";
    return IndexGuessBehavior2;
  })({});
  function useCompositeListItem(params = {}) {
    const {
      label,
      metadata,
      textRef,
      indexGuessBehavior,
      index: externalIndex
    } = params;
    const {
      register: register2,
      unregister,
      subscribeMapChange,
      elementsRef,
      labelsRef,
      nextIndexRef
    } = useCompositeListContext();
    const indexRef = React19.useRef(-1);
    const [index2, setIndex] = React19.useState(externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? () => {
      if (indexRef.current === -1) {
        const newIndex = nextIndexRef.current;
        nextIndexRef.current += 1;
        indexRef.current = newIndex;
      }
      return indexRef.current;
    } : -1));
    const componentRef = React19.useRef(null);
    const ref = React19.useCallback((node) => {
      componentRef.current = node;
      if (index2 !== -1 && node !== null) {
        elementsRef.current[index2] = node;
        if (labelsRef) {
          const isLabelDefined = label !== void 0;
          labelsRef.current[index2] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
        }
      }
    }, [index2, elementsRef, labelsRef, label, textRef]);
    useIsoLayoutEffect(() => {
      if (externalIndex != null) {
        return void 0;
      }
      const node = componentRef.current;
      if (node) {
        register2(node, metadata);
        return () => {
          unregister(node);
        };
      }
      return void 0;
    }, [externalIndex, register2, unregister, metadata]);
    useIsoLayoutEffect(() => {
      if (externalIndex != null) {
        return void 0;
      }
      return subscribeMapChange((map) => {
        const i = componentRef.current ? map.get(componentRef.current)?.index : null;
        if (i != null) {
          setIndex(i);
        }
      });
    }, [externalIndex, subscribeMapChange, setIndex]);
    return {
      ref,
      index: index2
    };
  }

  // node_modules/@base-ui/react/accordion/item/AccordionItemContext.mjs
  init_define_import_meta_env();
  var React20 = __toESM(require_react_shim(), 1);
  var AccordionItemContext = /* @__PURE__ */ React20.createContext(void 0);
  if (true) AccordionItemContext.displayName = "AccordionItemContext";
  function useAccordionItemContext() {
    const context = React20.useContext(AccordionItemContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: AccordionItemContext is missing. Accordion parts must be placed within <Accordion.Item>." : formatErrorMessage_default(9));
    }
    return context;
  }

  // node_modules/@base-ui/react/accordion/item/stateAttributesMapping.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
  init_define_import_meta_env();
  var TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
    TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
    TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
    return TransitionStatusDataAttributes2;
  })({});
  var STARTING_HOOK = {
    [TransitionStatusDataAttributes.startingStyle]: ""
  };
  var ENDING_HOOK = {
    [TransitionStatusDataAttributes.endingStyle]: ""
  };
  var transitionStatusMapping = {
    transitionStatus(value) {
      if (value === "starting") {
        return STARTING_HOOK;
      }
      if (value === "ending") {
        return ENDING_HOOK;
      }
      return null;
    }
  };

  // node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
  var CollapsiblePanelDataAttributes = (function(CollapsiblePanelDataAttributes2) {
    CollapsiblePanelDataAttributes2["open"] = "data-open";
    CollapsiblePanelDataAttributes2["closed"] = "data-closed";
    CollapsiblePanelDataAttributes2[CollapsiblePanelDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
    CollapsiblePanelDataAttributes2[CollapsiblePanelDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
    return CollapsiblePanelDataAttributes2;
  })({});

  // node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs
  init_define_import_meta_env();
  var CollapsibleTriggerDataAttributes = /* @__PURE__ */ (function(CollapsibleTriggerDataAttributes2) {
    CollapsibleTriggerDataAttributes2["panelOpen"] = "data-panel-open";
    return CollapsibleTriggerDataAttributes2;
  })({});

  // node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
  var PANEL_OPEN_HOOK = {
    [CollapsiblePanelDataAttributes.open]: ""
  };
  var PANEL_CLOSED_HOOK = {
    [CollapsiblePanelDataAttributes.closed]: ""
  };
  var triggerOpenStateMapping = {
    open(value) {
      if (value) {
        return {
          [CollapsibleTriggerDataAttributes.panelOpen]: ""
        };
      }
      return null;
    }
  };
  var collapsibleOpenStateMapping = {
    open(value) {
      if (value) {
        return PANEL_OPEN_HOOK;
      }
      return PANEL_CLOSED_HOOK;
    }
  };

  // node_modules/@base-ui/react/accordion/item/AccordionItemDataAttributes.mjs
  init_define_import_meta_env();
  var AccordionItemDataAttributes = /* @__PURE__ */ (function(AccordionItemDataAttributes2) {
    AccordionItemDataAttributes2["index"] = "data-index";
    AccordionItemDataAttributes2["disabled"] = "data-disabled";
    AccordionItemDataAttributes2["open"] = "data-open";
    return AccordionItemDataAttributes2;
  })({});

  // node_modules/@base-ui/react/accordion/item/stateAttributesMapping.mjs
  var accordionStateAttributesMapping = {
    ...collapsibleOpenStateMapping,
    index: (value) => {
      return Number.isInteger(value) ? {
        [AccordionItemDataAttributes.index]: String(value)
      } : null;
    },
    ...transitionStatusMapping,
    value: () => null
  };

  // node_modules/@base-ui/react/accordion/item/AccordionItem.mjs
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var AccordionItem = /* @__PURE__ */ React21.forwardRef(function AccordionItem2(componentProps, forwardedRef) {
    const {
      className,
      disabled: disabledProp = false,
      onOpenChange: onOpenChangeProp,
      render,
      value: valueProp,
      style,
      ...elementProps
    } = componentProps;
    const {
      ref: listItemRef,
      index: index2
    } = useCompositeListItem();
    const mergedRef = useMergedRefs(forwardedRef, listItemRef);
    const {
      disabled: contextDisabled,
      handleValueChange,
      state: rootState,
      value: openValues
    } = useAccordionRootContext();
    const fallbackValue = useBaseUiId();
    const value = valueProp ?? fallbackValue;
    const disabled2 = disabledProp || contextDisabled;
    const isOpen = React21.useMemo(() => {
      if (!openValues) {
        return false;
      }
      for (let i = 0; i < openValues.length; i += 1) {
        if (openValues[i] === value) {
          return true;
        }
      }
      return false;
    }, [openValues, value]);
    const onOpenChange = useStableCallback((nextOpen, eventDetails) => {
      onOpenChangeProp?.(nextOpen, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      handleValueChange(value, nextOpen, eventDetails);
    });
    const collapsible = useCollapsibleRoot({
      open: isOpen,
      onOpenChange,
      disabled: disabled2
    });
    const collapsibleState = React21.useMemo(() => ({
      open: collapsible.open,
      disabled: collapsible.disabled,
      transitionStatus: collapsible.transitionStatus
    }), [collapsible.open, collapsible.disabled, collapsible.transitionStatus]);
    const collapsibleContext = React21.useMemo(() => ({
      ...collapsible,
      onOpenChange,
      state: collapsibleState
    }), [collapsible, collapsibleState, onOpenChange]);
    const state = React21.useMemo(() => ({
      ...rootState,
      hidden: !isOpen && !collapsible.mounted,
      index: index2,
      disabled: disabled2,
      open: isOpen
    }), [collapsible.mounted, disabled2, index2, isOpen, rootState]);
    const defaultTriggerId = useBaseUiId();
    const [triggerId, setTriggerId] = React21.useState();
    const accordionItemContext = React21.useMemo(() => ({
      open: isOpen,
      state,
      setTriggerId,
      triggerId: triggerId ?? defaultTriggerId
    }), [defaultTriggerId, isOpen, state, setTriggerId, triggerId]);
    const element = useRenderElement("div", componentProps, {
      state,
      ref: mergedRef,
      props: elementProps,
      stateAttributesMapping: accordionStateAttributesMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CollapsibleRootContext.Provider, {
      value: collapsibleContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AccordionItemContext.Provider, {
        value: accordionItemContext,
        children: element
      })
    });
  });
  if (true) AccordionItem.displayName = "AccordionItem";

  // node_modules/@base-ui/react/accordion/header/AccordionHeader.mjs
  init_define_import_meta_env();
  var React22 = __toESM(require_react_shim(), 1);
  var AccordionHeader = /* @__PURE__ */ React22.forwardRef(function AccordionHeader2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      state
    } = useAccordionItemContext();
    const element = useRenderElement("h3", componentProps, {
      state,
      ref: forwardedRef,
      props: elementProps,
      stateAttributesMapping: accordionStateAttributesMapping
    });
    return element;
  });
  if (true) AccordionHeader.displayName = "AccordionHeader";

  // node_modules/@base-ui/react/accordion/trigger/AccordionTrigger.mjs
  init_define_import_meta_env();
  var React26 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/use-button/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/use-button/useButton.mjs
  init_define_import_meta_env();
  var React25 = __toESM(require_react_shim(), 1);

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  init_define_import_meta_env();
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
  }
  function isTableElement(element) {
    return /^(table|td|th)$/.test(getNodeName(element));
  }
  function isTopLayer(element) {
    try {
      if (element.matches(":popover-open")) {
        return true;
      }
    } catch (_e) {
    }
    try {
      return element.matches(":modal");
    } catch (_e) {
      return false;
    }
  }
  var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
  var containRe = /paint|layout|strict|content/;
  var isNotNone = (value) => !!value && value !== "none";
  var isWebKitValue;
  function isContainingBlock(elementOrCss) {
    const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (isWebKitValue == null) {
      isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
    }
    return isWebKitValue;
  }
  function isLastTraversableNode(node) {
    return /^(html|body|#document)$/.test(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    } else {
      return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
  init_define_import_meta_env();
  var React23 = __toESM(require_react_shim(), 1);
  var CompositeRootContext = /* @__PURE__ */ React23.createContext(void 0);
  if (true) CompositeRootContext.displayName = "CompositeRootContext";
  function useCompositeRootContext(optional = false) {
    const context = React23.useContext(CompositeRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
    }
    return context;
  }

  // node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
  init_define_import_meta_env();
  var React24 = __toESM(require_react_shim(), 1);
  function useFocusableWhenDisabled(parameters) {
    const {
      focusableWhenDisabled,
      disabled: disabled2,
      composite = false,
      tabIndex: tabIndexProp = 0,
      isNativeButton
    } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    const props = React24.useMemo(() => {
      const additionalProps = {
        // allow Tabbing away from focusableWhenDisabled elements
        onKeyDown(event) {
          if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
            event.preventDefault();
          }
        }
      };
      if (!composite) {
        additionalProps.tabIndex = tabIndexProp;
        if (!isNativeButton && disabled2) {
          additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
        }
      }
      if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
        additionalProps["aria-disabled"] = disabled2;
      }
      if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
        additionalProps.disabled = disabled2;
      }
      return additionalProps;
    }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
    return {
      props
    };
  }

  // node_modules/@base-ui/react/internals/use-button/useButton.mjs
  function useButton(parameters = {}) {
    const {
      disabled: disabled2 = false,
      focusableWhenDisabled,
      tabIndex = 0,
      native: isNativeButton = true,
      composite: compositeProp
    } = parameters;
    const elementRef = React25.useRef(null);
    const compositeRootContext = useCompositeRootContext(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
    const {
      props: focusableWhenDisabledProps
    } = useFocusableWhenDisabled({
      focusableWhenDisabled,
      disabled: disabled2,
      composite: isCompositeItem,
      tabIndex,
      isNativeButton
    });
    if (true) {
      React25.useEffect(() => {
        if (!elementRef.current) {
          return;
        }
        const isButtonTag = isButtonElement(elementRef.current);
        if (isNativeButton) {
          if (!isButtonTag) {
            const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
            const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
            error(`${message}${ownerStackMessage}`);
          }
        } else if (isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
          error(`${message}${ownerStackMessage}`);
        }
      }, [isNativeButton]);
    }
    const updateDisabled = React25.useCallback(() => {
      const element = elementRef.current;
      if (!isButtonElement(element)) {
        return;
      }
      if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
        element.disabled = false;
      }
    }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
    useIsoLayoutEffect(updateDisabled, [updateDisabled]);
    const getButtonProps = React25.useCallback((externalProps = {}) => {
      const {
        onClick: externalOnClick,
        onMouseDown: externalOnMouseDown,
        onKeyUp: externalOnKeyUp,
        onKeyDown: externalOnKeyDown,
        onPointerDown: externalOnPointerDown,
        ...otherExternalProps
      } = externalProps;
      return mergeProps({
        onClick(event) {
          if (disabled2) {
            event.preventDefault();
            return;
          }
          externalOnClick?.(event);
        },
        onMouseDown(event) {
          if (!disabled2) {
            externalOnMouseDown?.(event);
          }
        },
        onKeyDown(event) {
          if (disabled2) {
            return;
          }
          makeEventPreventable(event);
          externalOnKeyDown?.(event);
          if (event.baseUIHandlerPrevented) {
            return;
          }
          const isCurrentTarget = event.target === event.currentTarget;
          const currentTarget = event.currentTarget;
          const isButton = isButtonElement(currentTarget);
          const isLink = !isNativeButton && isValidLinkElement(currentTarget);
          const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
          const isEnterKey = event.key === "Enter";
          const isSpaceKey = event.key === " ";
          const role = currentTarget.getAttribute("role");
          const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
          if (isCurrentTarget && isCompositeItem && isSpaceKey) {
            if (event.defaultPrevented && isTextNavigationRole) {
              return;
            }
            event.preventDefault();
            if (isLink || isNativeButton && isButton) {
              currentTarget.click();
              event.preventBaseUIHandler();
            } else if (shouldClick) {
              externalOnClick?.(event);
              event.preventBaseUIHandler();
            }
            return;
          }
          if (shouldClick) {
            if (!isNativeButton && (isSpaceKey || isEnterKey)) {
              event.preventDefault();
            }
            if (!isNativeButton && isEnterKey) {
              externalOnClick?.(event);
            }
          }
        },
        onKeyUp(event) {
          if (disabled2) {
            return;
          }
          makeEventPreventable(event);
          externalOnKeyUp?.(event);
          if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
            event.preventDefault();
            return;
          }
          if (event.baseUIHandlerPrevented) {
            return;
          }
          if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
            externalOnClick?.(event);
          }
        },
        onPointerDown(event) {
          if (disabled2) {
            event.preventDefault();
            return;
          }
          externalOnPointerDown?.(event);
        }
      }, isNativeButton ? {
        type: "button"
      } : {
        role: "button"
      }, focusableWhenDisabledProps, otherExternalProps);
    }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
    const buttonRef = useStableCallback((element) => {
      elementRef.current = element;
      updateDisabled();
    });
    return {
      getButtonProps,
      buttonRef
    };
  }
  function isButtonElement(elem) {
    return isHTMLElement(elem) && elem.tagName === "BUTTON";
  }
  function isValidLinkElement(elem) {
    return Boolean(elem?.tagName === "A" && elem?.href);
  }

  // node_modules/@base-ui/react/accordion/trigger/AccordionTrigger.mjs
  var AccordionTrigger = /* @__PURE__ */ React26.forwardRef(function AccordionTrigger2(componentProps, forwardedRef) {
    const {
      disabled: disabledProp,
      className,
      id: idProp,
      render,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      panelId,
      open,
      handleTrigger,
      disabled: contextDisabled
    } = useCollapsibleRootContext();
    const disabled2 = disabledProp || contextDisabled;
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      focusableWhenDisabled: true,
      native: nativeButton
    });
    const {
      state,
      setTriggerId,
      triggerId: id
    } = useAccordionItemContext();
    useIsoLayoutEffect(() => {
      if (idProp) {
        setTriggerId(idProp);
      }
      return () => {
        setTriggerId(void 0);
      };
    }, [idProp, setTriggerId]);
    const props = {
      "aria-controls": open ? panelId : void 0,
      "aria-expanded": open,
      id,
      onClick: handleTrigger
    };
    const element = useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef],
      props: [props, elementProps, getButtonProps],
      stateAttributesMapping: triggerOpenStateMapping
    });
    return element;
  });
  if (true) AccordionTrigger.displayName = "AccordionTrigger";

  // node_modules/@base-ui/react/accordion/panel/AccordionPanel.mjs
  init_define_import_meta_env();
  var React29 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
  init_define_import_meta_env();
  var React28 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/addEventListener.mjs
  init_define_import_meta_env();
  function addEventListener(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    return () => {
      target.removeEventListener(type, listener, options);
    };
  }

  // node_modules/@base-ui/utils/useValueAsRef.mjs
  init_define_import_meta_env();
  function useValueAsRef(value) {
    const latest = useRefWithInit(createLatestRef, value).current;
    latest.next = value;
    useIsoLayoutEffect(latest.effect);
    return latest;
  }
  function createLatestRef(value) {
    const latest = {
      current: value,
      next: value,
      effect: () => {
        latest.current = latest.next;
      }
    };
    return latest;
  }

  // node_modules/@base-ui/utils/owner.mjs
  init_define_import_meta_env();
  function ownerDocument(node) {
    return node?.ownerDocument || document;
  }

  // node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
  init_define_import_meta_env();
  var React27 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
  init_define_import_meta_env();
  var ReactDOM = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/react/utils/resolveRef.mjs
  init_define_import_meta_env();
  function resolveRef(maybeRef) {
    if (maybeRef == null) {
      return maybeRef;
    }
    return "current" in maybeRef ? maybeRef.current : maybeRef;
  }

  // node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
  function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
    const frame = useAnimationFrame();
    return useStableCallback((fnToExecute, signal = null) => {
      frame.cancel();
      const element = resolveRef(elementOrRef);
      if (element == null) {
        return;
      }
      const resolvedElement = element;
      const done = () => {
        ReactDOM.flushSync(fnToExecute);
      };
      if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
        fnToExecute();
        return;
      }
      function exec() {
        Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
          if (!signal?.aborted) {
            done();
          }
        }).catch(() => {
          if (treatAbortedAsFinished) {
            if (!signal?.aborted) {
              done();
            }
            return;
          }
          const currentAnimations = resolvedElement.getAnimations();
          if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
            exec();
          }
        });
      }
      if (waitForStartingStyleRemoved) {
        const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          frame.request(exec);
          return;
        }
        const attributeObserver = new MutationObserver(() => {
          if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
            attributeObserver.disconnect();
            exec();
          }
        });
        attributeObserver.observe(resolvedElement, {
          attributes: true,
          attributeFilter: [startingStyleAttribute]
        });
        signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
          once: true
        });
        return;
      }
      frame.request(exec);
    });
  }

  // node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
  function useOpenChangeComplete(parameters) {
    const {
      enabled = true,
      open,
      ref,
      onComplete: onCompleteParam
    } = parameters;
    const onComplete = useStableCallback(onCompleteParam);
    const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
    React27.useEffect(() => {
      if (!enabled) {
        return void 0;
      }
      const abortController = new AbortController();
      runOnceAnimationsFinish(onComplete, abortController.signal);
      return () => {
        abortController.abort();
      };
    }, [enabled, open, onComplete, runOnceAnimationsFinish]);
  }

  // node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
  var EMPTY_DIMENSIONS = {
    height: void 0,
    width: void 0
  };
  function useCollapsiblePanel(parameters) {
    const {
      externalRef,
      hiddenUntilFound,
      id: idParam,
      keepMounted,
      mounted,
      onOpenChange,
      open,
      setMounted,
      setOpen,
      transitionStatus
    } = parameters;
    const panelRef = React28.useRef(null);
    const animationTypeRef = React28.useRef(null);
    const [dimensions, setDimensionsUnwrapped] = React28.useState(EMPTY_DIMENSIONS);
    const lastMeasuredDimensionsRef = React28.useRef(EMPTY_DIMENSIONS);
    const shouldSkipNextOpenRef = React28.useRef(false);
    const shouldPreventMountAnimationRef = React28.useRef(open);
    const shouldPreventActivityResumeAnimationRef = React28.useRef(false);
    const [forcePanelIdle, setForcePanelIdle] = React28.useState(false);
    const pendingTemporaryStyleRestoreRef = React28.useRef(null);
    const mergedPanelRef = useMergedRefs(externalRef, panelRef);
    const latestStateRef = useValueAsRef({
      mounted,
      open
    });
    const runOnceCloseAnimationsFinish = useAnimationsFinished(panelRef, false, false);
    const hidden = !open && !mounted;
    const panelTransitionStatus = forcePanelIdle ? "idle" : transitionStatus;
    const shouldPreventOpenAnimation = open && // These 2 refs are safe to read in render, they are only written from committed
    // layout/effect paths and gate one-shot motion suppression for the next open
    // lifecycle. They intentionally expose the last committed motion snapshot.
    (shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
    const renderedDimensions = !open && mounted && // These 2 refs are also safe to read in render, both hold the last committed
    // animation mode and measurement. This fallback only restores a previously
    // measured pixel size after the live dimensions state has been reset back to `auto`.
    animationTypeRef.current === "css-animation" && dimensions.height === void 0 && dimensions.width === void 0 ? lastMeasuredDimensionsRef.current : dimensions;
    const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== "css-animation";
    const setDimensions = useStableCallback((nextDimensions, shouldCacheMeasurement = true) => {
      if (shouldCacheMeasurement) {
        lastMeasuredDimensionsRef.current = nextDimensions;
      }
      setDimensionsUnwrapped(nextDimensions);
    });
    const restorePendingTemporaryStyle = useStableCallback(() => {
      pendingTemporaryStyleRestoreRef.current?.();
      pendingTemporaryStyleRestoreRef.current = null;
    });
    const setPendingTemporaryStyleRestore = useStableCallback((restore) => {
      restorePendingTemporaryStyle();
      pendingTemporaryStyleRestoreRef.current = () => {
        pendingTemporaryStyleRestoreRef.current = null;
        restore();
      };
    });
    const markActivityResumeAnimationSuppressed = useStableCallback(() => {
      if (open && mounted && animationTypeRef.current === "css-animation") {
        shouldPreventActivityResumeAnimationRef.current = true;
      }
    });
    useIsoLayoutEffect(() => {
      if (!forcePanelIdle || transitionStatus === "starting") {
        return;
      }
      setForcePanelIdle(false);
    }, [forcePanelIdle, transitionStatus]);
    React28.useEffect(() => {
      return () => {
        markActivityResumeAnimationSuppressed();
        restorePendingTemporaryStyle();
      };
    }, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
    useIsoLayoutEffect(() => {
      const panel = panelRef.current;
      if (!panel) {
        return void 0;
      }
      if (!open && pendingTemporaryStyleRestoreRef.current) {
        restorePendingTemporaryStyle();
      }
      const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
      animationTypeRef.current = animationType;
      if (open && transitionStatus === "idle" && shouldPreventMountAnimationRef.current && animationType === "css-animation") {
        lastMeasuredDimensionsRef.current = getDimensions(panel);
        return void 0;
      }
      if (open && transitionStatus === "starting") {
        const skipNextOpen = shouldSkipNextOpenRef.current;
        shouldSkipNextOpenRef.current = false;
        if (animationType === "none") {
          setDimensions(getDimensions(panel));
          setForcePanelIdle(true);
          return void 0;
        }
        if (animationType === "css-transition") {
          const restoreLayoutStyles = resetLayoutStyles(panel);
          setDimensions(getDimensions(panel));
          if (!skipNextOpen) {
            return restoreLayoutStyles;
          }
          const restoreTransitionDuration = setTemporaryStyle(panel, "transition-duration", "0s");
          setPendingTemporaryStyleRestore(restoreTransitionDuration);
          setForcePanelIdle(true);
          return restoreLayoutStyles;
        }
        if (animationType === "css-animation") {
          setDimensions(getDimensions(panel));
          if (!skipNextOpen) {
            const restoreAnimationName2 = setTemporaryStyle(panel, "animation-name", "none");
            restoreAnimationName2();
            return void 0;
          }
          const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
          const restoreAnimationDuration = setTemporaryStyle(panel, "animation-duration", "0s");
          restoreAnimationName();
          setPendingTemporaryStyleRestore(restoreAnimationDuration);
          setForcePanelIdle(true);
          return void 0;
        }
      }
      if (!open && mounted && (transitionStatus === "idle" || transitionStatus === "starting")) {
        shouldPreventMountAnimationRef.current = false;
        shouldPreventActivityResumeAnimationRef.current = false;
        if (animationType === "none") {
          setDimensions(EMPTY_DIMENSIONS, false);
          setMounted(false);
          return void 0;
        }
        setDimensions(getDimensions(panel));
        return void 0;
      }
      if (transitionStatus !== "ending") {
        return void 0;
      }
      if (animationType === "none") {
        setMounted(false);
        return void 0;
      }
      const nextDimensions = getDimensions(panel);
      const hasMeasuredSize = (nextDimensions.height ?? 0) > 0 || (nextDimensions.width ?? 0) > 0;
      if (!hasMeasuredSize) {
        setMounted(false);
        return void 0;
      }
      setDimensions(nextDimensions);
      if (animationType === "css-animation") {
        const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
        restoreAnimationName();
      }
      return void 0;
    }, [mounted, open, restorePendingTemporaryStyle, setDimensions, setMounted, setPendingTemporaryStyleRestore, shouldPreventOpenAnimation, transitionStatus]);
    useOpenChangeComplete({
      enabled: open && mounted && panelTransitionStatus === "idle",
      open: true,
      ref: panelRef,
      onComplete() {
        if (!open) {
          return;
        }
        setDimensions(EMPTY_DIMENSIONS, false);
      }
    });
    React28.useEffect(() => {
      if (open || !mounted || panelTransitionStatus !== "ending") {
        return void 0;
      }
      const panel = panelRef.current;
      if (!panel) {
        return void 0;
      }
      const abortController = new AbortController();
      let endingStyleFrame = -1;
      function handleComplete() {
        if (latestStateRef.current.open) {
          return;
        }
        setMounted(false);
        setDimensions(EMPTY_DIMENSIONS, false);
      }
      endingStyleFrame = AnimationFrame.request(() => {
        if (!abortController.signal.aborted) {
          runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
        }
      });
      return () => {
        AnimationFrame.cancel(endingStyleFrame);
        abortController.abort();
      };
    }, [latestStateRef, mounted, open, panelTransitionStatus, runOnceCloseAnimationsFinish, setDimensions, setMounted]);
    useIsoLayoutEffect(() => {
      const panel = panelRef.current;
      if (!panel || !hiddenUntilFound || !hidden) {
        return;
      }
      panel.setAttribute("hidden", "until-found");
    }, [hidden, hiddenUntilFound]);
    React28.useEffect(function registerBeforeMatchListener() {
      const panel = panelRef.current;
      if (!panel) {
        return void 0;
      }
      function handleBeforeMatch(event) {
        const eventDetails = createChangeEventDetails(reason_parts_exports.none, event);
        onOpenChange(true, eventDetails);
        if (eventDetails.isCanceled) {
          return;
        }
        shouldSkipNextOpenRef.current = true;
        setOpen(true);
      }
      return addEventListener(panel, "beforematch", handleBeforeMatch);
    }, [onOpenChange, setOpen]);
    const shouldRender = keepMounted || hiddenUntilFound || mounted || open;
    return {
      height: renderedDimensions.height,
      props: {
        ...shouldPersistHiddenTransitionStyles ? {
          [CollapsiblePanelDataAttributes.startingStyle]: ""
        } : void 0,
        hidden,
        id: idParam
      },
      ref: mergedPanelRef,
      shouldPreventOpenAnimation,
      shouldRender,
      transitionStatus: panelTransitionStatus,
      width: renderedDimensions.width
    };
  }
  function getDimensions(element) {
    return {
      height: element.scrollHeight,
      width: element.scrollWidth
    };
  }
  function getAnimationType(element, hasSuppressedMountAnimation = false) {
    const panelStyles = getWindow(element).getComputedStyle(element);
    const hasAnimation = (panelStyles.animationName.split(",").map((name) => name.trim()).some((name) => name !== "" && name !== "none") || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
    const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
    if (hasAnimation && hasTransition) {
      if (true) {
        warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
      }
      return "css-transition";
    }
    if (hasTransition) {
      return "css-transition";
    }
    if (hasAnimation) {
      return "css-animation";
    }
    return "none";
  }
  function hasNonZeroDuration(value) {
    return value.split(",").map((part) => part.trim()).some((part) => part !== "" && Number.parseFloat(part) > 0);
  }
  function setTemporaryStyle(element, property, value) {
    const previousValue = element.style.getPropertyValue(property);
    const previousPriority = element.style.getPropertyPriority(property);
    element.style.setProperty(property, value);
    return () => {
      if (previousValue === "") {
        element.style.removeProperty(property);
        return;
      }
      element.style.setProperty(property, previousValue, previousPriority);
    };
  }
  function resetLayoutStyles(element) {
    const originalLayoutStyles = {
      "justify-content": element.style.justifyContent,
      "align-items": element.style.alignItems,
      "align-content": element.style.alignContent,
      "justify-items": element.style.justifyItems
    };
    Object.keys(originalLayoutStyles).forEach((key) => {
      element.style.setProperty(key, "initial", "important");
    });
    function restoreLayoutStyles() {
      Object.entries(originalLayoutStyles).forEach(([key, value]) => {
        if (value === "") {
          element.style.removeProperty(key);
          return;
        }
        element.style.setProperty(key, value);
      });
    }
    const frame = AnimationFrame.request(restoreLayoutStyles);
    return () => {
      AnimationFrame.cancel(frame);
      restoreLayoutStyles();
    };
  }

  // node_modules/@base-ui/react/accordion/panel/AccordionPanelCssVars.mjs
  init_define_import_meta_env();
  var AccordionPanelCssVars = /* @__PURE__ */ (function(AccordionPanelCssVars2) {
    AccordionPanelCssVars2["accordionPanelHeight"] = "--accordion-panel-height";
    AccordionPanelCssVars2["accordionPanelWidth"] = "--accordion-panel-width";
    return AccordionPanelCssVars2;
  })({});

  // node_modules/@base-ui/react/accordion/panel/AccordionPanel.mjs
  var AccordionPanel = /* @__PURE__ */ React29.forwardRef(function AccordionPanel2(componentProps, forwardedRef) {
    const {
      className,
      hiddenUntilFound: hiddenUntilFoundProp,
      keepMounted: keepMountedProp,
      id: idProp,
      render,
      style,
      ...elementProps
    } = componentProps;
    const {
      hiddenUntilFound: contextHiddenUntilFound,
      keepMounted: contextKeepMounted
    } = useAccordionRootContext();
    const {
      mounted,
      onOpenChange,
      open,
      panelId,
      setMounted,
      setOpen,
      setPanelIdState,
      transitionStatus
    } = useCollapsibleRootContext();
    const hiddenUntilFound = hiddenUntilFoundProp ?? contextHiddenUntilFound;
    const keepMounted = keepMountedProp ?? contextKeepMounted;
    if (true) {
      useIsoLayoutEffect(() => {
        if (keepMountedProp === false && hiddenUntilFound) {
          warn("The `keepMounted={false}` prop on an `Accordion.Panel` is ignored when `hiddenUntilFound` is enabled on the panel or root, since the panel must remain mounted while closed.");
        }
      }, [hiddenUntilFound, keepMountedProp]);
    }
    useIsoLayoutEffect(() => {
      if (idProp) {
        setPanelIdState(idProp);
        return () => {
          setPanelIdState(void 0);
        };
      }
      return void 0;
    }, [idProp, setPanelIdState]);
    const {
      height,
      props,
      ref,
      shouldPreventOpenAnimation,
      shouldRender,
      transitionStatus: panelTransitionStatus,
      width
    } = useCollapsiblePanel({
      externalRef: forwardedRef,
      hiddenUntilFound,
      id: idProp ?? panelId,
      keepMounted,
      mounted,
      onOpenChange,
      open,
      setMounted,
      setOpen,
      transitionStatus
    });
    const {
      state,
      triggerId
    } = useAccordionItemContext();
    const panelState = {
      ...state,
      transitionStatus: panelTransitionStatus
    };
    const resolvedStyle = resolveStyle(style, panelState);
    const element = useRenderElement("div", {
      ...componentProps,
      style: void 0
    }, {
      state: panelState,
      ref,
      props: [
        props,
        {
          "aria-labelledby": triggerId,
          role: "region",
          style: {
            [AccordionPanelCssVars.accordionPanelHeight]: height === void 0 ? "auto" : `${height}px`,
            [AccordionPanelCssVars.accordionPanelWidth]: width === void 0 ? "auto" : `${width}px`
          }
        },
        elementProps,
        resolvedStyle ? {
          style: resolvedStyle
        } : void 0,
        // Resolve the public `style` prop so temporary `animationName: 'none'`
        // can still win after user's inline styles have been merged.
        shouldPreventOpenAnimation ? {
          style: {
            animationName: "none"
          }
        } : void 0
      ],
      stateAttributesMapping: accordionStateAttributesMapping
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) AccordionPanel.displayName = "AccordionPanel";

  // src/lib/utils.ts
  init_define_import_meta_env();

  // node_modules/clsx/dist/clsx.mjs
  init_define_import_meta_env();
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }

  // node_modules/tailwind-merge/dist/bundle-mjs.mjs
  init_define_import_meta_env();
  var concatArrays = (array1, array2) => {
    const combinedArray = new Array(array1.length + array2.length);
    for (let i = 0; i < array1.length; i++) {
      combinedArray[i] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
      combinedArray[array1.length + i] = array2[i];
    }
    return combinedArray;
  };
  var createClassValidatorObject = (classGroupId, validator) => ({
    classGroupId,
    validator
  });
  var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
    nextPart,
    validators,
    classGroupId
  });
  var CLASS_PART_SEPARATOR = "-";
  var EMPTY_CONFLICTS = [];
  var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
  var createClassGroupUtils = (config) => {
    const classMap = createClassMap(config);
    const {
      conflictingClassGroups,
      conflictingClassGroupModifiers
    } = config;
    const getClassGroupId = (className) => {
      if (className.startsWith("[") && className.endsWith("]")) {
        return getGroupIdForArbitraryProperty(className);
      }
      const classParts = className.split(CLASS_PART_SEPARATOR);
      const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
      return getGroupRecursive(classParts, startIndex, classMap);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
      if (hasPostfixModifier) {
        const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
        const baseConflicts = conflictingClassGroups[classGroupId];
        if (modifierConflicts) {
          if (baseConflicts) {
            return concatArrays(baseConflicts, modifierConflicts);
          }
          return modifierConflicts;
        }
        return baseConflicts || EMPTY_CONFLICTS;
      }
      return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
    };
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  };
  var getGroupRecursive = (classParts, startIndex, classPartObject) => {
    const classPathsLength = classParts.length - startIndex;
    if (classPathsLength === 0) {
      return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[startIndex];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    if (nextClassPartObject) {
      const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
      if (result) return result;
    }
    const validators = classPartObject.validators;
    if (validators === null) {
      return void 0;
    }
    const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
    const validatorsLength = validators.length;
    for (let i = 0; i < validatorsLength; i++) {
      const validatorObj = validators[i];
      if (validatorObj.validator(classRest)) {
        return validatorObj.classGroupId;
      }
    }
    return void 0;
  };
  var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const content = className.slice(1, -1);
    const colonIndex = content.indexOf(":");
    const property = content.slice(0, colonIndex);
    return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
  })();
  var createClassMap = (config) => {
    const {
      theme,
      classGroups
    } = config;
    return processClassGroups(classGroups, theme);
  };
  var processClassGroups = (classGroups, theme) => {
    const classMap = createClassPartObject();
    for (const classGroupId in classGroups) {
      const group = classGroups[classGroupId];
      processClassesRecursively(group, classMap, classGroupId, theme);
    }
    return classMap;
  };
  var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
    const len = classGroup.length;
    for (let i = 0; i < len; i++) {
      const classDefinition = classGroup[i];
      processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
    }
  };
  var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
    if (typeof classDefinition === "string") {
      processStringDefinition(classDefinition, classPartObject, classGroupId);
      return;
    }
    if (typeof classDefinition === "function") {
      processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
      return;
    }
    processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
  };
  var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
    const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
    classPartObjectToEdit.classGroupId = classGroupId;
  };
  var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
    if (isThemeGetter(classDefinition)) {
      processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
      return;
    }
    if (classPartObject.validators === null) {
      classPartObject.validators = [];
    }
    classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
  };
  var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
    const entries = Object.entries(classDefinition);
    const len = entries.length;
    for (let i = 0; i < len; i++) {
      const [key, value] = entries[i];
      processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
    }
  };
  var getPart = (classPartObject, path) => {
    let current = classPartObject;
    const parts = path.split(CLASS_PART_SEPARATOR);
    const len = parts.length;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      let next = current.nextPart.get(part);
      if (!next) {
        next = createClassPartObject();
        current.nextPart.set(part, next);
      }
      current = next;
    }
    return current;
  };
  var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
  var createLruCache = (maxCacheSize) => {
    if (maxCacheSize < 1) {
      return {
        get: () => void 0,
        set: () => {
        }
      };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ Object.create(null);
    let previousCache = /* @__PURE__ */ Object.create(null);
    const update2 = (key, value) => {
      cache[key] = value;
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ Object.create(null);
      }
    };
    return {
      get(key) {
        let value = cache[key];
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache[key]) !== void 0) {
          update2(key, value);
          return value;
        }
      },
      set(key, value) {
        if (key in cache) {
          cache[key] = value;
        } else {
          update2(key, value);
        }
      }
    };
  };
  var IMPORTANT_MODIFIER = "!";
  var MODIFIER_SEPARATOR = ":";
  var EMPTY_MODIFIERS = [];
  var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
    modifiers,
    hasImportantModifier,
    baseClassName,
    maybePostfixModifierPosition,
    isExternal
  });
  var createParseClassName = (config) => {
    const {
      prefix,
      experimentalParseClassName
    } = config;
    let parseClassName = (className) => {
      const modifiers = [];
      let bracketDepth = 0;
      let parenDepth = 0;
      let modifierStart = 0;
      let postfixModifierPosition;
      const len = className.length;
      for (let index2 = 0; index2 < len; index2++) {
        const currentCharacter = className[index2];
        if (bracketDepth === 0 && parenDepth === 0) {
          if (currentCharacter === MODIFIER_SEPARATOR) {
            modifiers.push(className.slice(modifierStart, index2));
            modifierStart = index2 + 1;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index2;
            continue;
          }
        }
        if (currentCharacter === "[") bracketDepth++;
        else if (currentCharacter === "]") bracketDepth--;
        else if (currentCharacter === "(") parenDepth++;
        else if (currentCharacter === ")") parenDepth--;
      }
      const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
      let baseClassName = baseClassNameWithImportantModifier;
      let hasImportantModifier = false;
      if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
        baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
        hasImportantModifier = true;
      } else if (
        /**
         * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
         * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
         */
        baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
      ) {
        baseClassName = baseClassNameWithImportantModifier.slice(1);
        hasImportantModifier = true;
      }
      const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
    };
    if (prefix) {
      const fullPrefix = prefix + MODIFIER_SEPARATOR;
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
    }
    if (experimentalParseClassName) {
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => experimentalParseClassName({
        className,
        parseClassName: parseClassNameOriginal
      });
    }
    return parseClassName;
  };
  var createSortModifiers = (config) => {
    const modifierWeights = /* @__PURE__ */ new Map();
    config.orderSensitiveModifiers.forEach((mod, index2) => {
      modifierWeights.set(mod, 1e6 + index2);
    });
    return (modifiers) => {
      const result = [];
      let currentSegment = [];
      for (let i = 0; i < modifiers.length; i++) {
        const modifier = modifiers[i];
        const isArbitrary = modifier[0] === "[";
        const isOrderSensitive = modifierWeights.has(modifier);
        if (isArbitrary || isOrderSensitive) {
          if (currentSegment.length > 0) {
            currentSegment.sort();
            result.push(...currentSegment);
            currentSegment = [];
          }
          result.push(modifier);
        } else {
          currentSegment.push(modifier);
        }
      }
      if (currentSegment.length > 0) {
        currentSegment.sort();
        result.push(...currentSegment);
      }
      return result;
    };
  };
  var createConfigUtils = (config) => ({
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    sortModifiers: createSortModifiers(config),
    postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
    ...createClassGroupUtils(config)
  });
  var createPostfixLookupClassGroupIds = (config) => {
    const lookup = /* @__PURE__ */ Object.create(null);
    const classGroupIds = config.postfixLookupClassGroups;
    if (classGroupIds) {
      for (let i = 0; i < classGroupIds.length; i++) {
        lookup[classGroupIds[i]] = true;
      }
    }
    return lookup;
  };
  var SPLIT_CLASSES_REGEX = /\s+/;
  var mergeClassList = (classList, configUtils) => {
    const {
      parseClassName,
      getClassGroupId,
      getConflictingClassGroupIds,
      sortModifiers,
      postfixLookupClassGroupIds
    } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
      const originalClassName = classNames[index2];
      const {
        isExternal,
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      } = parseClassName(originalClassName);
      if (isExternal) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      let hasPostfixModifier = !!maybePostfixModifierPosition;
      let classGroupId;
      if (hasPostfixModifier) {
        const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
        classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
        const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
        if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
          classGroupId = classGroupIdWithPostfix;
          hasPostfixModifier = false;
        }
      } else {
        classGroupId = getClassGroupId(baseClassName);
      }
      if (!classGroupId) {
        if (!hasPostfixModifier) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        hasPostfixModifier = false;
      }
      const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
      const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      const classId = modifierId + classGroupId;
      if (classGroupsInConflict.indexOf(classId) > -1) {
        continue;
      }
      classGroupsInConflict.push(classId);
      const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
      for (let i = 0; i < conflictGroups.length; ++i) {
        const group = conflictGroups[i];
        classGroupsInConflict.push(modifierId + group);
      }
      result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
  };
  var twJoin = (...classLists) => {
    let index2 = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index2 < classLists.length) {
      if (argument = classLists[index2++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  var toValue = (mix) => {
    if (typeof mix === "string") {
      return mix;
    }
    let resolvedValue;
    let string = "";
    for (let k = 0; k < mix.length; k++) {
      if (mix[k]) {
        if (resolvedValue = toValue(mix[k])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall;
    const initTailwindMerge = (classList) => {
      const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    };
    const tailwindMerge = (classList) => {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    };
    functionToCall = initTailwindMerge;
    return (...args) => functionToCall(twJoin(...args));
  };
  var fallbackThemeArr = [];
  var fromTheme = (key) => {
    const themeGetter = (theme) => theme[key] || fallbackThemeArr;
    themeGetter.isThemeGetter = true;
    return themeGetter;
  };
  var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
  var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
  var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var isFraction = (value) => fractionRegex.test(value);
  var isNumber = (value) => !!value && !Number.isNaN(Number(value));
  var isInteger = (value) => !!value && Number.isInteger(Number(value));
  var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
  var isTshirtSize = (value) => tshirtUnitRegex.test(value);
  var isAny = () => true;
  var isLengthOnly = (value) => (
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
  );
  var isNever = () => false;
  var isShadow = (value) => shadowRegex.test(value);
  var isImage = (value) => imageRegex.test(value);
  var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
  var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
  var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
  var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
  var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
  var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
  var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
  var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
  var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
  var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
  var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
  var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
  var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
  var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
  var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
  var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
  var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
  var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
  var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
  var getIsArbitraryValue = (value, testLabel, testValue) => {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return testValue(result[2]);
    }
    return false;
  };
  var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return shouldMatchNoLabel;
    }
    return false;
  };
  var isLabelPosition = (label) => label === "position" || label === "percentage";
  var isLabelImage = (label) => label === "image" || label === "url";
  var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
  var isLabelLength = (label) => label === "length";
  var isLabelNumber = (label) => label === "number";
  var isLabelFamilyName = (label) => label === "family-name";
  var isLabelWeight = (label) => label === "number" || label === "weight";
  var isLabelShadow = (label) => label === "shadow";
  var getDefaultConfig = () => {
    const themeColor = fromTheme("color");
    const themeFont = fromTheme("font");
    const themeText = fromTheme("text");
    const themeFontWeight = fromTheme("font-weight");
    const themeTracking = fromTheme("tracking");
    const themeLeading = fromTheme("leading");
    const themeBreakpoint = fromTheme("breakpoint");
    const themeContainer = fromTheme("container");
    const themeSpacing = fromTheme("spacing");
    const themeRadius = fromTheme("radius");
    const themeShadow = fromTheme("shadow");
    const themeInsetShadow = fromTheme("inset-shadow");
    const themeTextShadow = fromTheme("text-shadow");
    const themeDropShadow = fromTheme("drop-shadow");
    const themeBlur = fromTheme("blur");
    const themePerspective = fromTheme("perspective");
    const themeAspect = fromTheme("aspect");
    const themeEase = fromTheme("ease");
    const themeAnimate = fromTheme("animate");
    const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    const scalePosition = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-top",
      "top-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-top",
      "bottom-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-bottom",
      "bottom-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-bottom"
    ];
    const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
    const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
    const scaleOverscroll = () => ["auto", "contain", "none"];
    const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
    const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
    const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartAndEnd = () => ["auto", {
      span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
    }, isInteger, isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
    const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
    const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
    const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
    const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
    const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
    const scaleSizingInline = () => [isFraction, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...scaleUnambiguousSpacing()];
    const scaleSizingBlock = () => [isFraction, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
    const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
    const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
      position: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleBgRepeat = () => ["no-repeat", {
      repeat: ["", "x", "y", "space", "round"]
    }];
    const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
      size: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
    const scaleRadius = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      "full",
      themeRadius,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
    const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
    const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
    const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
    const scaleBlur = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      themeBlur,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [isTshirtSize],
        breakpoint: [isTshirtSize],
        color: [isAny],
        container: [isTshirtSize],
        "drop-shadow": [isTshirtSize],
        ease: ["in", "out", "in-out"],
        font: [isAnyNonArbitrary],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [isTshirtSize],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [isTshirtSize],
        shadow: [isTshirtSize],
        spacing: ["px", isNumber],
        text: [isTshirtSize],
        "text-shadow": [isTshirtSize],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        // --------------
        // --- Layout ---
        // --------------
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         * @deprecated since Tailwind CSS v4.0.0
         */
        container: ["container"],
        /**
         * Container Type
         * @see https://tailwindcss.com/docs/responsive-design#container-queries
         */
        "container-type": [{
          "@container": ["", "normal", "size", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Container Name
         * @see https://tailwindcss.com/docs/responsive-design#named-containers
         */
        "container-named": [isNamedContainerQuery],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": scaleBreak()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": scaleBreak()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Screen Reader Only
         * @see https://tailwindcss.com/docs/display#screen-reader-only
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: scalePositionWithArbitrary()
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: scaleOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": scaleOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": scaleOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: scaleOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": scaleOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": scaleOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Inset
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: scaleInset()
        }],
        /**
         * Inset Inline
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": scaleInset()
        }],
        /**
         * Inset Block
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": scaleInset()
        }],
        /**
         * Inset Inline Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         * @todo class group will be renamed to `inset-s` in next major release
         */
        start: [{
          "inset-s": scaleInset(),
          /**
           * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
           * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
           */
          start: scaleInset()
        }],
        /**
         * Inset Inline End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         * @todo class group will be renamed to `inset-e` in next major release
         */
        end: [{
          "inset-e": scaleInset(),
          /**
           * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
           * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
           */
          end: scaleInset()
        }],
        /**
         * Inset Block Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-bs": [{
          "inset-bs": scaleInset()
        }],
        /**
         * Inset Block End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-be": [{
          "inset-be": scaleInset()
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: scaleInset()
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: scaleInset()
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: scaleInset()
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: scaleInset()
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------------
        // --- Flexbox and Grid ---
        // ------------------------
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": scaleGridAutoColsRows()
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": scaleGridAutoColsRows()
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: scaleUnambiguousSpacing()
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": scaleUnambiguousSpacing()
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": scaleUnambiguousSpacing()
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: [...scaleAlignPrimaryAxis(), "normal"]
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal", ...scaleAlignPrimaryAxis()]
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: [...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", ...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": scaleAlignPrimaryAxis()
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Inline
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Block
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Inline Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Inline End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Block Start
         * @see https://tailwindcss.com/docs/padding
         */
        pbs: [{
          pbs: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Block End
         * @see https://tailwindcss.com/docs/padding
         */
        pbe: [{
          pbe: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: scaleUnambiguousSpacing()
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: scaleMargin()
        }],
        /**
         * Margin Inline
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: scaleMargin()
        }],
        /**
         * Margin Block
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: scaleMargin()
        }],
        /**
         * Margin Inline Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: scaleMargin()
        }],
        /**
         * Margin Inline End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: scaleMargin()
        }],
        /**
         * Margin Block Start
         * @see https://tailwindcss.com/docs/margin
         */
        mbs: [{
          mbs: scaleMargin()
        }],
        /**
         * Margin Block End
         * @see https://tailwindcss.com/docs/margin
         */
        mbe: [{
          mbe: scaleMargin()
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: scaleMargin()
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: scaleMargin()
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: scaleMargin()
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: scaleMargin()
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x": [{
          "space-x": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y": [{
          "space-y": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y-reverse": ["space-y-reverse"],
        // --------------
        // --- Sizing ---
        // --------------
        /**
         * Size
         * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
         */
        size: [{
          size: scaleSizing()
        }],
        /**
         * Inline Size
         * @see https://tailwindcss.com/docs/width
         */
        "inline-size": [{
          inline: ["auto", ...scaleSizingInline()]
        }],
        /**
         * Min-Inline Size
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-inline-size": [{
          "min-inline": ["auto", ...scaleSizingInline()]
        }],
        /**
         * Max-Inline Size
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-inline-size": [{
          "max-inline": ["none", ...scaleSizingInline()]
        }],
        /**
         * Block Size
         * @see https://tailwindcss.com/docs/height
         */
        "block-size": [{
          block: ["auto", ...scaleSizingBlock()]
        }],
        /**
         * Min-Block Size
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-block-size": [{
          "min-block": ["auto", ...scaleSizingBlock()]
        }],
        /**
         * Max-Block Size
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-block-size": [{
          "max-block": ["none", ...scaleSizingBlock()]
        }],
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: [themeContainer, "screen", ...scaleSizing()]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": [
            themeContainer,
            "screen",
            /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "none",
            ...scaleSizing()
          ]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": [
            themeContainer,
            "screen",
            "none",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "prose",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            {
              screen: [themeBreakpoint]
            },
            ...scaleSizing()
          ]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: ["screen", "lh", ...scaleSizing()]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...scaleSizing()]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": ["screen", "lh", ...scaleSizing()]
        }],
        // ------------------
        // --- Typography ---
        // ------------------
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
        }],
        /**
         * Font Stretch
         * @see https://tailwindcss.com/docs/font-stretch
         */
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
        }],
        /**
         * Font Feature Settings
         * @see https://tailwindcss.com/docs/font-feature-settings
         */
        "font-features": [{
          "font-features": [isArbitraryValue]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: [
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            themeLeading,
            ...scaleUnambiguousSpacing()
          ]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://v3.tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: scaleColor()
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: scaleColor()
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [...scaleLineStyle(), "wavy"]
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: scaleColor()
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: scaleUnambiguousSpacing()
        }],
        /**
         * Tab Size
         * @see https://tailwindcss.com/docs/tab-size
         */
        "tab-size": [{
          tab: [isInteger, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        /**
         * Overflow Wrap
         * @see https://tailwindcss.com/docs/overflow-wrap
         */
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // -------------------
        // --- Backgrounds ---
        // -------------------
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: scaleBgPosition()
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: scaleBgRepeat()
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: scaleBgSize()
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isInteger, isArbitraryVariable, isArbitraryValue],
            radial: ["", isArbitraryVariable, isArbitraryValue],
            conic: [isInteger, isArbitraryVariable, isArbitraryValue]
          }, isArbitraryVariableImage, isArbitraryImage]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: scaleColor()
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: scaleColor()
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: scaleColor()
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: scaleColor()
        }],
        // ---------------
        // --- Borders ---
        // ---------------
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: scaleRadius()
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": scaleRadius()
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": scaleRadius()
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": scaleRadius()
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": scaleRadius()
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": scaleRadius()
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": scaleRadius()
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": scaleRadius()
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": scaleRadius()
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": scaleRadius()
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": scaleRadius()
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": scaleRadius()
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": scaleRadius()
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": scaleRadius()
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": scaleRadius()
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: scaleBorderWidth()
        }],
        /**
         * Border Width Inline
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": scaleBorderWidth()
        }],
        /**
         * Border Width Block
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": scaleBorderWidth()
        }],
        /**
         * Border Width Inline Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": scaleBorderWidth()
        }],
        /**
         * Border Width Inline End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": scaleBorderWidth()
        }],
        /**
         * Border Width Block Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-bs": [{
          "border-bs": scaleBorderWidth()
        }],
        /**
         * Border Width Block End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-be": [{
          "border-be": scaleBorderWidth()
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": scaleBorderWidth()
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": scaleBorderWidth()
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": scaleBorderWidth()
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": scaleBorderWidth()
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x": [{
          "divide-x": scaleBorderWidth()
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y": [{
          "divide-y": scaleBorderWidth()
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
         */
        "divide-style": [{
          divide: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: scaleColor()
        }],
        /**
         * Border Color Inline
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": scaleColor()
        }],
        /**
         * Border Color Block
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": scaleColor()
        }],
        /**
         * Border Color Inline Start
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-s": [{
          "border-s": scaleColor()
        }],
        /**
         * Border Color Inline End
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-e": [{
          "border-e": scaleColor()
        }],
        /**
         * Border Color Block Start
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-bs": [{
          "border-bs": scaleColor()
        }],
        /**
         * Border Color Block End
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-be": [{
          "border-be": scaleColor()
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": scaleColor()
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": scaleColor()
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": scaleColor()
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": scaleColor()
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: scaleColor()
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: [...scaleLineStyle(), "none", "hidden"]
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: scaleColor()
        }],
        // ---------------
        // --- Effects ---
        // ---------------
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
         */
        "shadow-color": [{
          shadow: scaleColor()
        }],
        /**
         * Inset Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
         */
        "inset-shadow": [{
          "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Inset Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
         */
        "inset-shadow-color": [{
          "inset-shadow": scaleColor()
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
         */
        "ring-w": [{
          ring: scaleBorderWidth()
        }],
        /**
         * Ring Width Inset
         * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
         */
        "ring-color": [{
          ring: scaleColor()
        }],
        /**
         * Ring Offset Width
         * @see https://v3.tailwindcss.com/docs/ring-offset-width
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-w": [{
          "ring-offset": [isNumber, isArbitraryLength]
        }],
        /**
         * Ring Offset Color
         * @see https://v3.tailwindcss.com/docs/ring-offset-color
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-color": [{
          "ring-offset": scaleColor()
        }],
        /**
         * Inset Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
         */
        "inset-ring-w": [{
          "inset-ring": scaleBorderWidth()
        }],
        /**
         * Inset Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
         */
        "inset-ring-color": [{
          "inset-ring": scaleColor()
        }],
        /**
         * Text Shadow
         * @see https://tailwindcss.com/docs/text-shadow
         */
        "text-shadow": [{
          "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Text Shadow Color
         * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
         */
        "text-shadow-color": [{
          "text-shadow": scaleColor()
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": scaleBlendMode()
        }],
        /**
         * Mask Clip
         * @see https://tailwindcss.com/docs/mask-clip
         */
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        /**
         * Mask Composite
         * @see https://tailwindcss.com/docs/mask-composite
         */
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image-linear-pos": [{
          "mask-linear": [isNumber]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": scaleMaskImagePosition()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": scaleMaskImagePosition()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": scaleColor()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": scaleColor()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": scaleMaskImagePosition()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": scaleMaskImagePosition()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": scaleColor()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": scaleColor()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": scaleMaskImagePosition()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": scaleMaskImagePosition()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": scaleColor()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": scaleColor()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": scaleMaskImagePosition()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": scaleMaskImagePosition()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": scaleColor()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": scaleColor()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": scaleMaskImagePosition()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": scaleMaskImagePosition()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": scaleColor()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": scaleColor()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": scaleMaskImagePosition()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": scaleMaskImagePosition()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": scaleColor()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": scaleColor()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": scaleMaskImagePosition()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": scaleMaskImagePosition()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": scaleColor()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": scaleColor()
        }],
        "mask-image-radial": [{
          "mask-radial": [isArbitraryVariable, isArbitraryValue]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": scaleMaskImagePosition()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": scaleMaskImagePosition()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": scaleColor()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": scaleColor()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": scalePosition()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [isNumber]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": scaleMaskImagePosition()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": scaleMaskImagePosition()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": scaleColor()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": scaleColor()
        }],
        /**
         * Mask Mode
         * @see https://tailwindcss.com/docs/mask-mode
         */
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        /**
         * Mask Origin
         * @see https://tailwindcss.com/docs/mask-origin
         */
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        /**
         * Mask Position
         * @see https://tailwindcss.com/docs/mask-position
         */
        "mask-position": [{
          mask: scaleBgPosition()
        }],
        /**
         * Mask Repeat
         * @see https://tailwindcss.com/docs/mask-repeat
         */
        "mask-repeat": [{
          mask: scaleBgRepeat()
        }],
        /**
         * Mask Size
         * @see https://tailwindcss.com/docs/mask-size
         */
        "mask-size": [{
          mask: scaleBgSize()
        }],
        /**
         * Mask Type
         * @see https://tailwindcss.com/docs/mask-type
         */
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image": [{
          mask: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // ---------------
        // --- Filters ---
        // ---------------
        /**
         * Filter
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: scaleBlur()
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeDropShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Drop Shadow Color
         * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
         */
        "drop-shadow-color": [{
          "drop-shadow": scaleColor()
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Filter
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": scaleBlur()
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        // --------------
        // --- Tables ---
        // --------------
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": scaleUnambiguousSpacing()
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // ---------------------------------
        // --- Transitions and Animation ---
        // ---------------------------------
        /**
         * Transition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Behavior
         * @see https://tailwindcss.com/docs/transition-behavior
         */
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------
        // --- Transforms ---
        // ------------------
        /**
         * Backface Visibility
         * @see https://tailwindcss.com/docs/backface-visibility
         */
        backface: [{
          backface: ["hidden", "visible"]
        }],
        /**
         * Perspective
         * @see https://tailwindcss.com/docs/perspective
         */
        perspective: [{
          perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Perspective Origin
         * @see https://tailwindcss.com/docs/perspective-origin
         */
        "perspective-origin": [{
          "perspective-origin": scalePositionWithArbitrary()
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: scaleRotate()
        }],
        /**
         * Rotate X
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-x": [{
          "rotate-x": scaleRotate()
        }],
        /**
         * Rotate Y
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-y": [{
          "rotate-y": scaleRotate()
        }],
        /**
         * Rotate Z
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-z": [{
          "rotate-z": scaleRotate()
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: scaleScale()
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": scaleScale()
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": scaleScale()
        }],
        /**
         * Scale Z
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-z": [{
          "scale-z": scaleScale()
        }],
        /**
         * Scale 3D
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-3d": ["scale-3d"],
        /**
         * Skew
         * @see https://tailwindcss.com/docs/skew
         */
        skew: [{
          skew: scaleSkew()
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": scaleSkew()
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": scaleSkew()
        }],
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: scalePositionWithArbitrary()
        }],
        /**
         * Transform Style
         * @see https://tailwindcss.com/docs/transform-style
         */
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        /**
         * Translate
         * @see https://tailwindcss.com/docs/translate
         */
        translate: [{
          translate: scaleTranslate()
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": scaleTranslate()
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": scaleTranslate()
        }],
        /**
         * Translate Z
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-z": [{
          "translate-z": scaleTranslate()
        }],
        /**
         * Translate None
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-none": ["translate-none"],
        /**
         * Zoom
         * @see https://tailwindcss.com/docs/zoom
         */
        zoom: [{
          zoom: [isInteger, isArbitraryVariable, isArbitraryValue]
        }],
        // ---------------------
        // --- Interactivity ---
        // ---------------------
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: scaleColor()
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [{
          appearance: ["none", "auto"]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: scaleColor()
        }],
        /**
         * Color Scheme
         * @see https://tailwindcss.com/docs/color-scheme
         */
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Field Sizing
         * @see https://tailwindcss.com/docs/field-sizing
         */
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scrollbar Thumb Color
         * @see https://tailwindcss.com/docs/scrollbar-color
         */
        "scrollbar-thumb-color": [{
          "scrollbar-thumb": scaleColor()
        }],
        /**
         * Scrollbar Track Color
         * @see https://tailwindcss.com/docs/scrollbar-color
         */
        "scrollbar-track-color": [{
          "scrollbar-track": scaleColor()
        }],
        /**
         * Scrollbar Gutter
         * @see https://tailwindcss.com/docs/scrollbar-gutter
         */
        "scrollbar-gutter": [{
          "scrollbar-gutter": ["auto", "stable", "both"]
        }],
        /**
         * Scrollbar Width
         * @see https://tailwindcss.com/docs/scrollbar-width
         */
        "scrollbar-w": [{
          scrollbar: ["auto", "thin", "none"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Inline
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Block
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Inline Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Inline End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Block Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mbs": [{
          "scroll-mbs": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Block End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mbe": [{
          "scroll-mbe": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Inline
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Block
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Inline Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Inline End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Block Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pbs": [{
          "scroll-pbs": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Block End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pbe": [{
          "scroll-pbe": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
        }],
        // -----------
        // --- SVG ---
        // -----------
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: ["none", ...scaleColor()]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: ["none", ...scaleColor()]
        }],
        // ---------------------
        // --- Accessibility ---
        // ---------------------
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    };
  };
  var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

  // src/lib/utils.ts
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }

  // node_modules/lucide-react/dist/esm/lucide-react.mjs
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/createLucideIcon.mjs
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);

  // node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
  init_define_import_meta_env();
  var mergeClasses = (...classes) => classes.filter((className, index2, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index2;
  }).join(" ").trim();

  // node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
  init_define_import_meta_env();
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

  // node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
  init_define_import_meta_env();
  var toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

  // node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };

  // node_modules/lucide-react/dist/esm/Icon.mjs
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim(), 1);

  // node_modules/lucide-react/dist/esm/defaultAttributes.mjs
  init_define_import_meta_env();
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
  init_define_import_meta_env();
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
    return false;
  };

  // node_modules/lucide-react/dist/esm/context.mjs
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim(), 1);
  var LucideContext = (0, import_react2.createContext)({});
  var useLucideContext = () => (0, import_react2.useContext)(LucideContext);

  // node_modules/lucide-react/dist/esm/Icon.mjs
  var Icon = (0, import_react3.forwardRef)(
    ({ color, size: size4, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
      const {
        size: contextSize = 24,
        strokeWidth: contextStrokeWidth = 2,
        absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
        color: contextColor = "currentColor",
        className: contextClass = ""
      } = useLucideContext() ?? {};
      const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size4 ?? contextSize) : strokeWidth ?? contextStrokeWidth;
      return (0, import_react3.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size4 ?? contextSize ?? defaultAttributes.width,
          height: size4 ?? contextSize ?? defaultAttributes.height,
          stroke: color ?? contextColor,
          strokeWidth: calculatedStrokeWidth,
          className: mergeClasses("lucide", contextClass, className),
          ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react3.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.mjs
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react4.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react4.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component.displayName = toPascalCase(iconName);
    return Component;
  };

  // node_modules/lucide-react/dist/esm/icons/check.mjs
  init_define_import_meta_env();
  var __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("check", __iconNode);

  // node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
  init_define_import_meta_env();
  var __iconNode2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  var ChevronDown = createLucideIcon("chevron-down", __iconNode2);

  // node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
  init_define_import_meta_env();
  var __iconNode3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ChevronRight = createLucideIcon("chevron-right", __iconNode3);

  // node_modules/lucide-react/dist/esm/icons/chevron-up.mjs
  init_define_import_meta_env();
  var __iconNode4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
  var ChevronUp = createLucideIcon("chevron-up", __iconNode4);

  // node_modules/lucide-react/dist/esm/icons/circle.mjs
  init_define_import_meta_env();
  var __iconNode5 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
  var Circle = createLucideIcon("circle", __iconNode5);

  // node_modules/lucide-react/dist/esm/icons/x.mjs
  init_define_import_meta_env();
  var __iconNode6 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ];
  var X = createLucideIcon("x", __iconNode6);

  // src/components/ui/accordion.tsx
  function Accordion({ className, ...props }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports.Root,
      {
        "data-slot": "accordion",
        className: cn("flex w-full flex-col", className),
        ...props
      }
    );
  }
  function AccordionItem3({ className, ...props }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports.Item,
      {
        "data-slot": "accordion-item",
        className: cn("not-last:border-b", className),
        ...props
      }
    );
  }
  function AccordionTrigger3({
    className,
    children,
    ...props
  }) {
    return /* @__PURE__ */ React.createElement(index_parts_exports.Header, { className: "flex" }, /* @__PURE__ */ React.createElement(
      index_parts_exports.Trigger,
      {
        "data-slot": "accordion-trigger",
        className: cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        ),
        ...props
      },
      children,
      /* @__PURE__ */ React.createElement(ChevronDown, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
      /* @__PURE__ */ React.createElement(ChevronUp, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
    ));
  }
  function AccordionContent({
    className,
    children,
    ...props
  }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports.Panel,
      {
        "data-slot": "accordion-content",
        className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
        ...props
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: cn(
            "h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
            className
          )
        },
        children
      )
    );
  }

  // src/components/ui/alert.tsx
  init_define_import_meta_env();
  var React30 = __toESM(require_react_shim(), 1);

  // node_modules/class-variance-authority/dist/index.mjs
  init_define_import_meta_env();
  var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
  var cx = clsx;
  var cva = (base, config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
      return Object.entries(compoundVariantOptions).every((param2) => {
        let [key, value] = param2;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };

  // src/components/ui/alert.tsx
  var alertVariants = cva(
    "relative w-full rounded-xl border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/5",
          success: "border-cyan-500/50 text-cyan-500 dark:border-cyan-500 [&>svg]:text-cyan-500 bg-cyan-500/5",
          warning: "border-yellow-500/50 text-yellow-500 dark:border-yellow-500 [&>svg]:text-yellow-500 bg-yellow-500/5"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  function Alert({
    className,
    variant,
    ...props
  }) {
    return /* @__PURE__ */ React30.createElement(
      "div",
      {
        "data-slot": "alert",
        role: "alert",
        className: cn(alertVariants({ variant }), className),
        ...props
      }
    );
  }
  function AlertTitle({ className, ...props }) {
    return /* @__PURE__ */ React30.createElement(
      "div",
      {
        "data-slot": "alert-title",
        className: cn("mb-1 font-medium leading-none tracking-tight", className),
        ...props
      }
    );
  }
  function AlertDescription({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React30.createElement(
      "div",
      {
        "data-slot": "alert-description",
        className: cn("text-sm [&_p]:leading-relaxed", className),
        ...props
      }
    );
  }

  // src/components/ui/badge.tsx
  init_define_import_meta_env();
  var React31 = __toESM(require_react_shim(), 1);
  var badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
          success: "border-transparent bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  function Badge({ className, variant, ...props }) {
    return /* @__PURE__ */ React31.createElement("div", { className: cn(badgeVariants({ variant }), className), ...props });
  }

  // src/components/ui/button.tsx
  init_define_import_meta_env();
  var React33 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/button/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/button/Button.mjs
  init_define_import_meta_env();
  var React32 = __toESM(require_react_shim(), 1);
  var Button = /* @__PURE__ */ React32.forwardRef(function Button2(componentProps, forwardedRef) {
    const {
      render,
      className,
      disabled: disabled2 = false,
      focusableWhenDisabled = false,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      focusableWhenDisabled,
      native: nativeButton
    });
    const state = {
      disabled: disabled2
    };
    return useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef],
      props: [elementProps, getButtonProps]
    });
  });
  if (true) Button.displayName = "Button";

  // src/components/ui/button.tsx
  var buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
          outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
          ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
          destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
          xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
          sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
          lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
          icon: "size-8",
          "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
          "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
          "icon-lg": "size-9"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  function Button3({
    className,
    variant = "default",
    size: size4 = "default",
    asChild = false,
    ...props
  }) {
    const composedClassName = cn(buttonVariants({ variant, size: size4, className }));
    if (asChild && React33.isValidElement(props.children)) {
      const child = props.children;
      const { children, ...childProps } = props;
      return React33.cloneElement(child, {
        ...childProps,
        className: cn(composedClassName, child.props.className)
      });
    }
    return /* @__PURE__ */ React33.createElement(
      Button,
      {
        "data-slot": "button",
        className: composedClassName,
        ...props
      }
    );
  }

  // src/components/ui/card.tsx
  init_define_import_meta_env();
  var React34 = __toESM(require_react_shim(), 1);
  function Card({
    className,
    size: size4 = "default",
    variant = "default",
    ...props
  }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card",
        "data-size": size4,
        "data-variant": variant,
        className: cn(
          "group/card flex min-w-0 flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
          variant === "glass" && "bg-surface/30 ring-0 border border-white/6 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:bg-surface/40 hover:border-cyan-400/20 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.32),inset_0_1px_0_0_rgba(255,255,255,0.09)]",
          className
        ),
        ...props
      }
    );
  }
  function CardHeader({ className, ...props }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card-header",
        className: cn(
          "group/card-header @container/card-header grid min-w-0 auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[minmax(0,1fr)_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
          className
        ),
        ...props
      }
    );
  }
  function CardTitle({ className, ...props }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card-title",
        className: cn(
          "min-w-0 text-wrap break-words font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
          className
        ),
        ...props
      }
    );
  }
  function CardDescription({ className, ...props }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card-description",
        className: cn("min-w-0 text-wrap break-words text-sm text-muted-foreground", className),
        ...props
      }
    );
  }
  function CardAction({ className, ...props }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card-action",
        className: cn(
          "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
          className
        ),
        ...props
      }
    );
  }
  function CardContent({ className, ...props }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card-content",
        className: cn("min-w-0 px-4 group-data-[size=sm]/card:px-3", className),
        ...props
      }
    );
  }
  function CardFooter({ className, ...props }) {
    return /* @__PURE__ */ React34.createElement(
      "div",
      {
        "data-slot": "card-footer",
        className: cn(
          "flex min-w-0 flex-wrap items-center gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
          className
        ),
        ...props
      }
    );
  }

  // src/components/ui/dialog.tsx
  init_define_import_meta_env();
  var React75 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/dialog/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/dialog/index.parts.mjs
  var index_parts_exports2 = {};
  __export(index_parts_exports2, {
    Backdrop: () => DialogBackdrop,
    Close: () => DialogClose,
    Description: () => DialogDescription,
    Handle: () => DialogHandle,
    Popup: () => DialogPopup,
    Portal: () => DialogPortal,
    Root: () => DialogRoot,
    Title: () => DialogTitle,
    Trigger: () => DialogTrigger,
    Viewport: () => DialogViewport,
    createHandle: () => createDialogHandle
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
  init_define_import_meta_env();
  var React36 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/dialog/root/DialogRootContext.mjs
  init_define_import_meta_env();
  var React35 = __toESM(require_react_shim(), 1);
  var IsDrawerContext = /* @__PURE__ */ React35.createContext(false);
  if (true) IsDrawerContext.displayName = "IsDrawerContext";
  var DialogRootContext = /* @__PURE__ */ React35.createContext(void 0);
  if (true) DialogRootContext.displayName = "DialogRootContext";
  function useDialogRootContext(optional) {
    const dialogRootContext = React35.useContext(DialogRootContext);
    if (optional === false && dialogRootContext === void 0) {
      throw new Error(true ? "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>." : formatErrorMessage_default(27));
    }
    return dialogRootContext;
  }

  // node_modules/@base-ui/react/utils/popupStateMapping.mjs
  init_define_import_meta_env();
  var CommonPopupDataAttributes = (function(CommonPopupDataAttributes2) {
    CommonPopupDataAttributes2["open"] = "data-open";
    CommonPopupDataAttributes2["closed"] = "data-closed";
    CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
    CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
    CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
    CommonPopupDataAttributes2["side"] = "data-side";
    CommonPopupDataAttributes2["align"] = "data-align";
    return CommonPopupDataAttributes2;
  })({});
  var CommonTriggerDataAttributes = /* @__PURE__ */ (function(CommonTriggerDataAttributes2) {
    CommonTriggerDataAttributes2["popupOpen"] = "data-popup-open";
    CommonTriggerDataAttributes2["pressed"] = "data-pressed";
    return CommonTriggerDataAttributes2;
  })({});
  var TRIGGER_HOOK = {
    [CommonTriggerDataAttributes.popupOpen]: ""
  };
  var PRESSABLE_TRIGGER_HOOK = {
    [CommonTriggerDataAttributes.popupOpen]: "",
    [CommonTriggerDataAttributes.pressed]: ""
  };
  var POPUP_OPEN_HOOK = {
    [CommonPopupDataAttributes.open]: ""
  };
  var POPUP_CLOSED_HOOK = {
    [CommonPopupDataAttributes.closed]: ""
  };
  var ANCHOR_HIDDEN_HOOK = {
    [CommonPopupDataAttributes.anchorHidden]: ""
  };
  var triggerOpenStateMapping2 = {
    open(value) {
      if (value) {
        return TRIGGER_HOOK;
      }
      return null;
    }
  };
  var pressableTriggerOpenStateMapping = {
    open(value) {
      if (value) {
        return PRESSABLE_TRIGGER_HOOK;
      }
      return null;
    }
  };
  var popupStateMapping = {
    open(value) {
      if (value) {
        return POPUP_OPEN_HOOK;
      }
      return POPUP_CLOSED_HOOK;
    },
    anchorHidden(value) {
      if (value) {
        return ANCHOR_HIDDEN_HOOK;
      }
      return null;
    }
  };

  // node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
  var stateAttributesMapping = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var DialogBackdrop = /* @__PURE__ */ React36.forwardRef(function DialogBackdrop2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      forceRender = false,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useDialogRootContext();
    const open = store.useState("open");
    const nested = store.useState("nested");
    const mounted = store.useState("mounted");
    const transitionStatus = store.useState("transitionStatus");
    const state = {
      open,
      transitionStatus
    };
    return useRenderElement("div", componentProps, {
      state,
      ref: [store.context.backdropRef, forwardedRef],
      stateAttributesMapping,
      props: [{
        role: "presentation",
        hidden: !mounted,
        style: {
          userSelect: "none",
          WebkitUserSelect: "none"
        }
      }, elementProps],
      enabled: forceRender || !nested
    });
  });
  if (true) DialogBackdrop.displayName = "DialogBackdrop";

  // node_modules/@base-ui/react/dialog/close/DialogClose.mjs
  init_define_import_meta_env();
  var React37 = __toESM(require_react_shim(), 1);
  var DialogClose = /* @__PURE__ */ React37.forwardRef(function DialogClose2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabled2 = false,
      nativeButton = true,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useDialogRootContext();
    const open = store.useState("open");
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    const state = {
      disabled: disabled2
    };
    function handleClick(event) {
      if (open) {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.closePress, event.nativeEvent));
      }
    }
    return useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef],
      props: [{
        onClick: handleClick
      }, elementProps, getButtonProps]
    });
  });
  if (true) DialogClose.displayName = "DialogClose";

  // node_modules/@base-ui/react/dialog/description/DialogDescription.mjs
  init_define_import_meta_env();
  var React38 = __toESM(require_react_shim(), 1);
  var DialogDescription = /* @__PURE__ */ React38.forwardRef(function DialogDescription2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useDialogRootContext();
    const id = useBaseUiId(idProp);
    store.useSyncedValueWithCleanup("descriptionElementId", id);
    return useRenderElement("p", componentProps, {
      ref: forwardedRef,
      props: [{
        id
      }, elementProps]
    });
  });
  if (true) DialogDescription.displayName = "DialogDescription";

  // node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
  init_define_import_meta_env();
  var React62 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/floating-ui-react/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
  init_define_import_meta_env();
  var React39 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useTimeout.mjs
  init_define_import_meta_env();
  var EMPTY3 = 0;
  var Timeout = class _Timeout {
    constructor() {
      __publicField(this, "currentId", EMPTY3);
      __publicField(this, "clear", () => {
        if (this.currentId !== EMPTY3) {
          clearTimeout(this.currentId);
          this.currentId = EMPTY3;
        }
      });
      __publicField(this, "disposeEffect", () => {
        return this.clear;
      });
    }
    static create() {
      return new _Timeout();
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = EMPTY3;
        fn();
      }, delay);
    }
    isStarted() {
      return this.currentId !== EMPTY3;
    }
  };
  function useTimeout() {
    const timeout = useRefWithInit(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useHoverShared.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/platform/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/platform/parts.mjs
  var parts_exports = {};
  __export(parts_exports, {
    engine: () => engine_exports,
    env: () => env_exports,
    os: () => os_exports,
    screenReader: () => screen_reader_exports
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/platform/os.mjs
  var os_exports = {};
  __export(os_exports, {
    android: () => android,
    apple: () => apple,
    ios: () => ios,
    linux: () => linux,
    mac: () => mac,
    windows: () => windows
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/platform/shared.mjs
  init_define_import_meta_env();
  function readRawData() {
    if (typeof navigator === "undefined") {
      return {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
      };
    }
    if (true) {
      const uaData = navigator.userAgentData;
      if (uaData && Array.isArray(uaData.brands)) {
        return {
          userAgent: uaData.brands.map(({
            brand,
            version: version2
          }) => `${brand}/${version2}`).join(" "),
          platform: uaData.platform ?? navigator.platform ?? "",
          maxTouchPoints: navigator.maxTouchPoints ?? 0
        };
      }
    }
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform ?? "",
      maxTouchPoints: navigator.maxTouchPoints ?? 0
    };
  }
  var {
    userAgent,
    platform,
    maxTouchPoints
  } = readRawData();
  var lowerUserAgent = userAgent.toLowerCase();
  var lowerPlatform = platform.toLowerCase();

  // node_modules/@base-ui/utils/platform/os.mjs
  var ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
  var ANDROID_STRING = "android";
  var android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
  var mac = !ios && lowerPlatform.startsWith("mac");
  var windows = lowerPlatform.startsWith("win");
  var linux = !android && /^(linux|chrome os)/.test(lowerPlatform);
  var apple = mac || ios;

  // node_modules/@base-ui/utils/platform/engine.mjs
  var engine_exports = {};
  __export(engine_exports, {
    blink: () => blink,
    gecko: () => gecko,
    webkit: () => webkit
  });
  init_define_import_meta_env();
  var webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
  var gecko = !webkit && lowerUserAgent.includes("firefox");
  var blink = !webkit && lowerUserAgent.includes("chrom");

  // node_modules/@base-ui/utils/platform/screen-reader.mjs
  var screen_reader_exports = {};
  __export(screen_reader_exports, {
    voiceOver: () => voiceOver
  });
  init_define_import_meta_env();
  var voiceOver = apple;

  // node_modules/@base-ui/utils/platform/env.mjs
  var env_exports = {};
  __export(env_exports, {
    jsdom: () => jsdom
  });
  init_define_import_meta_env();
  var jsdom = /jsdom|happydom/.test(lowerUserAgent);

  // node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
  function stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  function isReactEvent(event) {
    return "nativeEvent" in event;
  }
  function isVirtualClick(event) {
    if (event.pointerType === "" && event.isTrusted) {
      return true;
    }
    if (parts_exports.os.android && event.pointerType) {
      return event.type === "click" && event.buttons === 1;
    }
    return event.detail === 0 && !event.pointerType;
  }
  function isVirtualPointerEvent(event) {
    if (parts_exports.env.jsdom) {
      return false;
    }
    return !parts_exports.os.android && event.width === 0 && event.height === 0 || parts_exports.os.android && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
    event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
  }
  function isMouseLikePointerType(pointerType, strict) {
    const values = ["mouse", "pen"];
    if (!strict) {
      values.push("", void 0);
    }
    return values.includes(pointerType);
  }
  function isClickLikeEvent(event) {
    const type = event.type;
    return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
  init_define_import_meta_env();
  var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
  var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
  var ARROW_LEFT = "ArrowLeft";
  var ARROW_RIGHT = "ArrowRight";
  var ARROW_UP = "ArrowUp";
  var ARROW_DOWN = "ArrowDown";

  // node_modules/@base-ui/react/internals/shadowDom.mjs
  init_define_import_meta_env();
  function activeElement(doc) {
    let element = doc.activeElement;
    while (element?.shadowRoot?.activeElement != null) {
      element = element.shadowRoot.activeElement;
    }
    return element;
  }
  function contains(parent, child) {
    if (!parent || !child) {
      return false;
    }
    const rootNode = child.getRootNode?.();
    if (parent.contains(child)) {
      return true;
    }
    if (rootNode && isShadowRoot(rootNode)) {
      let next = child;
      while (next) {
        if (parent === next) {
          return true;
        }
        next = next.parentNode || next.host;
      }
    }
    return false;
  }
  function getTarget(event) {
    if ("composedPath" in event) {
      return event.composedPath()[0];
    }
    return event.target;
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
  function isTargetInsideEnabledTrigger(target, triggerElements) {
    if (!isElement(target)) {
      return false;
    }
    const targetElement = target;
    if (triggerElements.hasElement(targetElement)) {
      return !targetElement.hasAttribute("data-trigger-disabled");
    }
    for (const [, trigger] of triggerElements.entries()) {
      if (contains(trigger, targetElement)) {
        return !trigger.hasAttribute("data-trigger-disabled");
      }
    }
    return false;
  }
  function isEventTargetWithin(event, node) {
    if (node == null) {
      return false;
    }
    if ("composedPath" in event) {
      return event.composedPath().includes(node);
    }
    const eventAgain = event;
    return eventAgain.target != null && node.contains(eventAgain.target);
  }
  function isRootElement(element) {
    return element.matches("html,body");
  }
  function isTypeableElement(element) {
    return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
  }
  function isInteractiveElement(element) {
    return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
  }
  function isTypeableCombobox(element) {
    if (!element) {
      return false;
    }
    return element.getAttribute("role") === "combobox" && isTypeableElement(element);
  }
  function matchesFocusVisible(element) {
    if (!element || parts_exports.env.jsdom) {
      return true;
    }
    try {
      return element.matches(":focus-visible");
    } catch (_e) {
      return true;
    }
  }
  function getFloatingFocusElement(floatingElement) {
    if (!floatingElement) {
      return null;
    }
    return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useHoverShared.mjs
  function resolveValue(value, pointerType) {
    if (pointerType != null && !isMouseLikePointerType(pointerType)) {
      return 0;
    }
    if (typeof value === "function") {
      return value();
    }
    return value;
  }
  function getDelay(value, prop, pointerType) {
    const result = resolveValue(value, pointerType);
    if (typeof result === "number") {
      return result;
    }
    return result?.[prop];
  }
  function getRestMs(value) {
    if (typeof value === "function") {
      return value();
    }
    return value;
  }
  function isClickLikeOpenEvent(openEventType, interactedInside) {
    return interactedInside || openEventType === "click" || openEventType === "mousedown";
  }
  function isHoverOpenEvent(openEventType) {
    return openEventType?.includes("mouse") && openEventType !== "mousedown";
  }

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var FloatingDelayGroupContext = /* @__PURE__ */ React39.createContext({
    hasProvider: false,
    timeoutMs: 0,
    delayRef: {
      current: 0
    },
    initialDelayRef: {
      current: 0
    },
    timeout: new Timeout(),
    currentIdRef: {
      current: null
    },
    currentContextRef: {
      current: null
    }
  });
  if (true) FloatingDelayGroupContext.displayName = "FloatingDelayGroupContext";
  function resetDelayRef(delayRef, initialDelayRef) {
    delayRef.current = initialDelayRef.current;
  }
  function FloatingDelayGroup(props) {
    const {
      children,
      delay,
      timeoutMs = 0
    } = props;
    const delayRef = React39.useRef(delay);
    const initialDelayRef = React39.useRef(delay);
    const currentIdRef = React39.useRef(null);
    const currentContextRef = React39.useRef(null);
    const timeout = useTimeout();
    useIsoLayoutEffect(() => {
      initialDelayRef.current = delay;
      if (!currentIdRef.current) {
        delayRef.current = delay;
        return;
      }
      delayRef.current = {
        open: getDelay(delayRef.current, "open"),
        close: getDelay(delay, "close")
      };
    }, [delay, currentIdRef, delayRef, initialDelayRef]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FloatingDelayGroupContext.Provider, {
      value: React39.useMemo(() => ({
        hasProvider: true,
        delayRef,
        initialDelayRef,
        currentIdRef,
        timeoutMs,
        currentContextRef,
        timeout
      }), [timeoutMs, timeout]),
      children
    });
  }
  function useDelayGroup(context, options = {
    open: false
  }) {
    const {
      open
    } = options;
    const store = "rootStore" in context ? context.rootStore : context;
    const floatingId = store.useState("floatingId");
    const groupContext = React39.useContext(FloatingDelayGroupContext);
    const {
      currentIdRef,
      delayRef,
      timeoutMs,
      initialDelayRef,
      currentContextRef,
      hasProvider,
      timeout
    } = groupContext;
    const [isInstantPhase, setIsInstantPhase] = React39.useState(false);
    const openRef = React39.useRef(open);
    const isUnmountedRef = React39.useRef(false);
    useIsoLayoutEffect(() => {
      openRef.current = open;
    }, [open]);
    useIsoLayoutEffect(() => {
      return () => {
        isUnmountedRef.current = true;
      };
    }, []);
    useIsoLayoutEffect(() => {
      function unset() {
        if (!isUnmountedRef.current) {
          setIsInstantPhase(false);
        }
        currentContextRef.current?.setIsInstantPhase(false);
        currentIdRef.current = null;
        currentContextRef.current = null;
        delayRef.current = initialDelayRef.current;
        timeout.clear();
      }
      if (!currentIdRef.current) {
        return void 0;
      }
      if (!open && currentIdRef.current === floatingId) {
        setIsInstantPhase(false);
        if (timeoutMs) {
          const closingId = floatingId;
          timeout.start(timeoutMs, () => {
            if (store.select("open") || currentIdRef.current && currentIdRef.current !== closingId) {
              return;
            }
            unset();
          });
          return () => {
            if (openRef.current || currentIdRef.current !== closingId) {
              timeout.clear();
            }
          };
        }
        unset();
      }
      return void 0;
    }, [open, floatingId, currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, timeout, store]);
    useIsoLayoutEffect(() => {
      if (!open) {
        return;
      }
      const prevContext = currentContextRef.current;
      const prevId = currentIdRef.current;
      timeout.clear();
      currentContextRef.current = {
        onOpenChange: store.setOpen,
        setIsInstantPhase
      };
      currentIdRef.current = floatingId;
      delayRef.current = {
        open: 0,
        close: getDelay(initialDelayRef.current, "close")
      };
      if (prevId !== null && prevId !== floatingId) {
        setIsInstantPhase(true);
        prevContext?.setIsInstantPhase(true);
        prevContext?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.none));
      } else {
        setIsInstantPhase(false);
        prevContext?.setIsInstantPhase(false);
      }
    }, [open, floatingId, store, currentIdRef, delayRef, initialDelayRef, currentContextRef, timeout]);
    useIsoLayoutEffect(() => {
      return () => {
        if (currentIdRef.current === floatingId) {
          currentContextRef.current = null;
          if (!openRef.current) {
            return;
          }
          currentIdRef.current = null;
          resetDelayRef(delayRef, initialDelayRef);
          timeout.clear();
        }
      };
    }, [currentContextRef, currentIdRef, delayRef, floatingId, initialDelayRef, timeout]);
    return React39.useMemo(() => ({
      hasProvider,
      delayRef,
      isInstantPhase
    }), [hasProvider, delayRef, isInstantPhase]);
  }

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
  init_define_import_meta_env();
  var React43 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/mergeCleanups.mjs
  init_define_import_meta_env();
  function mergeCleanups(...cleanups) {
    return () => {
      for (let i = 0; i < cleanups.length; i += 1) {
        const cleanup = cleanups[i];
        if (cleanup) {
          cleanup();
        }
      }
    };
  }

  // node_modules/@base-ui/react/utils/FocusGuard.mjs
  init_define_import_meta_env();
  var React40 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/visuallyHidden.mjs
  init_define_import_meta_env();
  var visuallyHiddenBase = {
    clipPath: "inset(50%)",
    overflow: "hidden",
    whiteSpace: "nowrap",
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1
  };
  var visuallyHidden = {
    ...visuallyHiddenBase,
    position: "fixed",
    top: 0,
    left: 0
  };
  var visuallyHiddenInput = {
    ...visuallyHiddenBase,
    position: "absolute"
  };

  // node_modules/@base-ui/react/utils/FocusGuard.mjs
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var FocusGuard = /* @__PURE__ */ React40.forwardRef(function FocusGuard2(props, ref) {
    const [role, setRole] = React40.useState();
    useIsoLayoutEffect(() => {
      if (parts_exports.screenReader.voiceOver && parts_exports.engine.webkit) {
        setRole("button");
      }
    }, []);
    const restProps = {
      tabIndex: 0,
      // Role is only for VoiceOver
      role
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
      ...props,
      ref,
      style: visuallyHidden,
      "aria-hidden": role ? void 0 : true,
      ...restProps,
      "data-base-ui-focus-guard": ""
    });
  });
  if (true) FocusGuard.displayName = "FocusGuard";

  // node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
  init_define_import_meta_env();

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  init_define_import_meta_env();
  var sides = ["top", "right", "bottom", "left"];
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v) => ({
    x: v,
    y: v
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    const firstChar = placement[0];
    return firstChar === "t" || firstChar === "b" ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
  }
  var lrPlacement = ["left", "right"];
  var rlPlacement = ["right", "left"];
  var tbPlacement = ["top", "bottom"];
  var btPlacement = ["bottom", "top"];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case "left":
      case "right":
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    const side = getSide(placement);
    return oppositeSideMap[side] + placement.slice(side.length);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y
    };
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
  function isIndexOutOfListBounds(list, index2) {
    return index2 < 0 || index2 >= list.length;
  }
  function getMinListIndex(listRef, disabledIndices) {
    return findNonDisabledListIndex(listRef.current, {
      disabledIndices
    });
  }
  function getMaxListIndex(listRef, disabledIndices) {
    return findNonDisabledListIndex(listRef.current, {
      decrement: true,
      startingIndex: listRef.current.length,
      disabledIndices
    });
  }
  function findNonDisabledListIndex(list, {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = {}) {
    let index2 = startingIndex;
    do {
      index2 += decrement ? -amount : amount;
    } while (index2 >= 0 && index2 <= list.length - 1 && isListIndexDisabled(list, index2, disabledIndices));
    return index2;
  }
  function isListIndexDisabled(list, index2, disabledIndices) {
    const isExplicitlyDisabled = typeof disabledIndices === "function" ? disabledIndices(index2) : disabledIndices?.includes(index2) ?? false;
    if (isExplicitlyDisabled) {
      return true;
    }
    const element = list[index2];
    if (!element) {
      return false;
    }
    if (!isElementVisible(element)) {
      return true;
    }
    return !disabledIndices && (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true");
  }
  function isHiddenByStyles(styles) {
    return styles.visibility === "hidden" || styles.visibility === "collapse";
  }
  function isElementVisible(element, styles = element ? getComputedStyle2(element) : null) {
    if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
      return false;
    }
    if (typeof element.checkVisibility === "function") {
      return element.checkVisibility();
    }
    return styles.display !== "none" && styles.display !== "contents";
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
  var CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
  function getParentElement(element) {
    const assignedSlot = element.assignedSlot;
    if (assignedSlot) {
      return assignedSlot;
    }
    if (element.parentElement) {
      return element.parentElement;
    }
    const rootNode = element.getRootNode();
    return isShadowRoot(rootNode) ? rootNode.host : null;
  }
  function getDetailsSummary(details) {
    for (const child of Array.from(details.children)) {
      if (getNodeName(child) === "summary") {
        return child;
      }
    }
    return null;
  }
  function isWithinOpenDetailsSummary(element, details) {
    const summary = getDetailsSummary(details);
    return !!summary && (element === summary || contains(summary, element));
  }
  function isFocusableCandidate(element) {
    const nodeName = element ? getNodeName(element) : "";
    return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
  }
  function isFocusableElement(element) {
    if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
      return false;
    }
    for (let current = element; current; current = getParentElement(current)) {
      const isAncestor = current !== element;
      const isSlot = getNodeName(current) === "slot";
      if (current.hasAttribute("inert")) {
        return false;
      }
      if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
        return false;
      }
    }
    return true;
  }
  function isVisibleInTabbableTree(element, isAncestor) {
    const styles = getComputedStyle2(element);
    if (!isAncestor) {
      return isElementVisible(element, styles);
    }
    return styles.display !== "none";
  }
  function getTabIndex(element) {
    const tabIndex = element.tabIndex;
    if (tabIndex < 0) {
      const nodeName = getNodeName(element);
      if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
        return 0;
      }
    }
    return tabIndex;
  }
  function getNamedRadioInput(element) {
    if (getNodeName(element) !== "input") {
      return null;
    }
    const input = element;
    return input.type === "radio" && input.name !== "" ? input : null;
  }
  function isTabbableRadio(element, candidates) {
    const input = getNamedRadioInput(element);
    if (!input) {
      return true;
    }
    const checkedRadio = candidates.find((candidate) => {
      const radio = getNamedRadioInput(candidate);
      return radio?.name === input.name && radio.form === input.form && radio.checked;
    });
    if (checkedRadio) {
      return checkedRadio === input;
    }
    return candidates.find((candidate) => {
      const radio = getNamedRadioInput(candidate);
      return radio?.name === input.name && radio.form === input.form;
    }) === input;
  }
  function getComposedChildren(container) {
    if (isHTMLElement(container) && getNodeName(container) === "slot") {
      const assignedElements = container.assignedElements({
        flatten: true
      });
      if (assignedElements.length > 0) {
        return assignedElements;
      }
    }
    if (isHTMLElement(container) && container.shadowRoot) {
      return Array.from(container.shadowRoot.children);
    }
    return Array.from(container.children);
  }
  function appendCandidates(container, list) {
    getComposedChildren(container).forEach((child) => {
      if (isFocusableCandidate(child)) {
        list.push(child);
      }
      appendCandidates(child, list);
    });
  }
  function appendMatchingElements(container, selector, list) {
    getComposedChildren(container).forEach((child) => {
      if (isHTMLElement(child) && child.matches(selector)) {
        list.push(child);
      }
      appendMatchingElements(child, selector, list);
    });
  }
  function isTabbable(element) {
    return isFocusableElement(element) && getTabIndex(element) >= 0;
  }
  function focusable(container) {
    const candidates = [];
    appendCandidates(container, candidates);
    return candidates.filter(isFocusableElement);
  }
  function tabbable(container) {
    const candidates = focusable(container);
    return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
  }
  function getTabbableIn(container, dir) {
    const list = tabbable(container);
    const len = list.length;
    if (len === 0) {
      return void 0;
    }
    const active = activeElement(ownerDocument(container));
    const index2 = list.indexOf(active);
    const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
    return list[nextIndex];
  }
  function getNextTabbable(referenceElement) {
    return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
  }
  function getPreviousTabbable(referenceElement) {
    return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
  }
  function getTabbableNearElement(referenceElement, dir) {
    if (!referenceElement) {
      return null;
    }
    const list = tabbable(ownerDocument(referenceElement).body);
    const elementCount = list.length;
    if (elementCount === 0) {
      return null;
    }
    const index2 = list.indexOf(referenceElement);
    if (index2 === -1) {
      return null;
    }
    const nextIndex = (index2 + dir + elementCount) % elementCount;
    return list[nextIndex];
  }
  function getTabbableAfterElement(referenceElement) {
    return getTabbableNearElement(referenceElement, 1);
  }
  function getTabbableBeforeElement(referenceElement) {
    return getTabbableNearElement(referenceElement, -1);
  }
  function isOutsideEvent(event, container) {
    const containerElement = container || event.currentTarget;
    const relatedTarget = event.relatedTarget;
    return !relatedTarget || !contains(containerElement, relatedTarget);
  }
  function disableFocusInside(container) {
    const tabbableElements = tabbable(container);
    tabbableElements.forEach((element) => {
      element.dataset.tabindex = element.getAttribute("tabindex") || "";
      element.setAttribute("tabindex", "-1");
    });
  }
  function enableFocusInside(container) {
    const elements = [];
    appendMatchingElements(container, "[data-tabindex]", elements);
    elements.forEach((element) => {
      const tabindex = element.dataset.tabindex;
      delete element.dataset.tabindex;
      if (tabindex) {
        element.setAttribute("tabindex", tabindex);
      } else {
        element.removeAttribute("tabindex");
      }
    });
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
  init_define_import_meta_env();
  function getNodeChildren(nodes, id, onlyOpenChildren = true) {
    const directChildren = nodes.filter((node) => node.parentId === id);
    return directChildren.flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
  }
  function getNodeAncestors(nodes, id) {
    let allAncestors = [];
    let currentParentId = nodes.find((node) => node.id === id)?.parentId;
    while (currentParentId) {
      const currentNode = nodes.find((node) => node.id === currentParentId);
      currentParentId = currentNode?.parentId;
      if (currentNode) {
        allAncestors = allAncestors.concat(currentNode);
      }
    }
    return allAncestors;
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
  init_define_import_meta_env();
  function createAttribute(name) {
    return `data-base-ui-${name}`;
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
  init_define_import_meta_env();
  var rafId = 0;
  function enqueueFocus(el, options = {}) {
    const {
      preventScroll = false,
      sync = false,
      shouldFocus
    } = options;
    cancelAnimationFrame(rafId);
    function exec() {
      if (shouldFocus && !shouldFocus()) {
        return;
      }
      el?.focus({
        preventScroll
      });
    }
    if (sync) {
      exec();
      return NOOP;
    }
    const currentRafId = requestAnimationFrame(exec);
    rafId = currentRafId;
    return () => {
      if (rafId === currentRafId) {
        cancelAnimationFrame(currentRafId);
        rafId = 0;
      }
    };
  }

  // node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
  init_define_import_meta_env();
  var counters = {
    inert: /* @__PURE__ */ new WeakMap(),
    "aria-hidden": /* @__PURE__ */ new WeakMap()
  };
  var markerName = "data-base-ui-inert";
  var uncontrolledElementsSets = {
    inert: /* @__PURE__ */ new WeakSet(),
    "aria-hidden": /* @__PURE__ */ new WeakSet()
  };
  var markerCounterMap = /* @__PURE__ */ new WeakMap();
  var lockCount = 0;
  function getUncontrolledElementsSet(controlAttribute) {
    return uncontrolledElementsSets[controlAttribute];
  }
  function unwrapHost(node) {
    if (!node) {
      return null;
    }
    return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
  }
  var correctElements = (parent, targets) => targets.map((target) => {
    if (parent.contains(target)) {
      return target;
    }
    const correctedTarget = unwrapHost(target);
    if (parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    return null;
  }).filter((x) => x != null);
  var buildKeepSet = (targets) => {
    const keep = /* @__PURE__ */ new Set();
    targets.forEach((target) => {
      let node = target;
      while (node && !keep.has(node)) {
        keep.add(node);
        node = node.parentNode;
      }
    });
    return keep;
  };
  var collectOutsideElements = (root, keepElements, stopElements) => {
    const outside = [];
    const walk = (parent) => {
      if (!parent || stopElements.has(parent)) {
        return;
      }
      Array.from(parent.children).forEach((node) => {
        if (getNodeName(node) === "script") {
          return;
        }
        if (keepElements.has(node)) {
          walk(node);
        } else {
          outside.push(node);
        }
      });
    };
    walk(root);
    return outside;
  };
  function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, {
    mark = true
  }) {
    let controlAttribute = null;
    if (inert) {
      controlAttribute = "inert";
    } else if (ariaHidden) {
      controlAttribute = "aria-hidden";
    }
    let counterMap = null;
    let uncontrolledElementsSet = null;
    const avoidElements = correctElements(body, uncorrectedAvoidElements);
    const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
    const hiddenElements = [];
    const markedElements = [];
    if (controlAttribute) {
      const map = counters[controlAttribute];
      const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
      uncontrolledElementsSet = currentUncontrolledElementsSet;
      counterMap = map;
      const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
      const controlElements = avoidElements.concat(ariaLiveElements);
      const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
      controlTargets.forEach((node) => {
        const attr2 = node.getAttribute(controlAttribute);
        const alreadyHidden = attr2 !== null && attr2 !== "false";
        const counterValue = (map.get(node) || 0) + 1;
        map.set(node, counterValue);
        hiddenElements.push(node);
        if (counterValue === 1 && alreadyHidden) {
          currentUncontrolledElementsSet.add(node);
        }
        if (!alreadyHidden) {
          node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
        }
      });
    }
    if (mark) {
      markerTargets.forEach((node) => {
        const markerValue = (markerCounterMap.get(node) || 0) + 1;
        markerCounterMap.set(node, markerValue);
        markedElements.push(node);
        if (markerValue === 1) {
          node.setAttribute(markerName, "");
        }
      });
    }
    lockCount += 1;
    return () => {
      if (counterMap) {
        hiddenElements.forEach((element) => {
          const currentCounterValue = counterMap.get(element) || 0;
          const counterValue = currentCounterValue - 1;
          counterMap.set(element, counterValue);
          if (!counterValue) {
            if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
              element.removeAttribute(controlAttribute);
            }
            uncontrolledElementsSet?.delete(element);
          }
        });
      }
      if (mark) {
        markedElements.forEach((element) => {
          const markerValue = (markerCounterMap.get(element) || 0) - 1;
          markerCounterMap.set(element, markerValue);
          if (!markerValue) {
            element.removeAttribute(markerName);
          }
        });
      }
      lockCount -= 1;
      if (!lockCount) {
        counters.inert = /* @__PURE__ */ new WeakMap();
        counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
        uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
        uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
        markerCounterMap = /* @__PURE__ */ new WeakMap();
      }
    };
  }
  function markOthers(avoidElements, options = {}) {
    const {
      ariaHidden = false,
      inert = false,
      mark = true
    } = options;
    const body = ownerDocument(avoidElements[0]).body;
    return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
      mark
    });
  }

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
  init_define_import_meta_env();
  var React41 = __toESM(require_react_shim(), 1);
  var ReactDOM2 = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/react/internals/constants.mjs
  init_define_import_meta_env();
  var TYPEAHEAD_RESET_MS = 500;
  var PATIENT_CLICK_THRESHOLD = 500;
  var DISABLED_TRANSITIONS_STYLE = {
    style: {
      transition: "none"
    }
  };
  var CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
  var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
  var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
  var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
  var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
  var DROPDOWN_COLLISION_AVOIDANCE = {
    fallbackAxisSide: "none"
  };
  var POPUP_COLLISION_AVOIDANCE = {
    fallbackAxisSide: "end"
  };
  var ownerVisuallyHidden = {
    clipPath: "inset(50%)",
    position: "fixed",
    top: 0,
    left: 0
  };

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var PortalContext = /* @__PURE__ */ React41.createContext(null);
  if (true) PortalContext.displayName = "PortalContext";
  var usePortalContext = () => React41.useContext(PortalContext);
  var attr = createAttribute("portal");
  function useFloatingPortalNode(props = {}) {
    const {
      ref,
      container: containerProp,
      componentProps = EMPTY_OBJECT,
      elementProps
    } = props;
    const uniqueId = useId();
    const portalContext = usePortalContext();
    const parentPortalNode = portalContext?.portalNode;
    const [containerElement, setContainerElement] = React41.useState(null);
    const [portalNode, setPortalNode] = React41.useState(null);
    const setPortalNodeRef = useStableCallback((node) => {
      if (node !== null) {
        setPortalNode(node);
      }
    });
    const containerRef = React41.useRef(null);
    useIsoLayoutEffect(() => {
      if (containerProp === null) {
        if (containerRef.current) {
          containerRef.current = null;
          setPortalNode(null);
          setContainerElement(null);
        }
        return;
      }
      if (uniqueId == null) {
        return;
      }
      const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
      if (resolvedContainer == null) {
        if (containerRef.current) {
          containerRef.current = null;
          setPortalNode(null);
          setContainerElement(null);
        }
        return;
      }
      if (containerRef.current !== resolvedContainer) {
        containerRef.current = resolvedContainer;
        setPortalNode(null);
        setContainerElement(resolvedContainer);
      }
    }, [containerProp, parentPortalNode, uniqueId]);
    const portalElement = useRenderElement("div", componentProps, {
      ref: [ref, setPortalNodeRef],
      props: [{
        id: uniqueId,
        [attr]: ""
      }, elementProps]
    });
    const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM2.createPortal(portalElement, containerElement) : null;
    return {
      portalNode,
      portalSubtree
    };
  }
  var FloatingPortal = /* @__PURE__ */ React41.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      children,
      container,
      renderGuards,
      ...elementProps
    } = componentProps;
    const {
      portalNode,
      portalSubtree
    } = useFloatingPortalNode({
      container,
      ref: forwardedRef,
      componentProps,
      elementProps
    });
    const beforeOutsideRef = React41.useRef(null);
    const afterOutsideRef = React41.useRef(null);
    const beforeInsideRef = React41.useRef(null);
    const afterInsideRef = React41.useRef(null);
    const [focusManagerState, setFocusManagerState] = React41.useState(null);
    const focusInsideDisabledRef = React41.useRef(false);
    const modal = focusManagerState?.modal;
    const open = focusManagerState?.open;
    const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
    React41.useEffect(() => {
      if (!portalNode || modal) {
        return void 0;
      }
      function onFocus(event) {
        if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
          if (event.type === "focusin") {
            if (focusInsideDisabledRef.current) {
              enableFocusInside(portalNode);
              focusInsideDisabledRef.current = false;
            }
          } else {
            disableFocusInside(portalNode);
            focusInsideDisabledRef.current = true;
          }
        }
      }
      return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
    }, [portalNode, modal]);
    useIsoLayoutEffect(() => {
      if (!portalNode || open !== true || !focusInsideDisabledRef.current) {
        return;
      }
      enableFocusInside(portalNode);
      focusInsideDisabledRef.current = false;
    }, [open, portalNode]);
    const portalContextValue = React41.useMemo(() => ({
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [portalNode]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(React41.Fragment, {
      children: [portalSubtree, /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(PortalContext.Provider, {
        value: portalContextValue,
        children: [shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FocusGuard, {
          "data-type": "outside",
          ref: beforeOutsideRef,
          onFocus: (event) => {
            if (isOutsideEvent(event, portalNode)) {
              beforeInsideRef.current?.focus();
            } else {
              const domReference = focusManagerState ? focusManagerState.domReference : null;
              const prevTabbable = getPreviousTabbable(domReference);
              prevTabbable?.focus();
            }
          }
        }), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
          "aria-owns": portalNode.id,
          style: ownerVisuallyHidden
        }), portalNode && /* @__PURE__ */ ReactDOM2.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FocusGuard, {
          "data-type": "outside",
          ref: afterOutsideRef,
          onFocus: (event) => {
            if (isOutsideEvent(event, portalNode)) {
              afterInsideRef.current?.focus();
            } else {
              const domReference = focusManagerState ? focusManagerState.domReference : null;
              const nextTabbable = getNextTabbable(domReference);
              nextTabbable?.focus();
              if (focusManagerState?.closeOnFocusOut) {
                focusManagerState?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
              }
            }
          }
        })]
      })]
    });
  });
  if (true) FloatingPortal.displayName = "FloatingPortal";

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
  init_define_import_meta_env();
  var React42 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingTreeStore.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
  init_define_import_meta_env();
  function createEventEmitter() {
    const map = /* @__PURE__ */ new Map();
    return {
      emit(event, data) {
        map.get(event)?.forEach((listener) => listener(data));
      },
      on(event, listener) {
        if (!map.has(event)) {
          map.set(event, /* @__PURE__ */ new Set());
        }
        map.get(event).add(listener);
      },
      off(event, listener) {
        map.get(event)?.delete(listener);
      }
    };
  }

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingTreeStore.mjs
  var FloatingTreeStore = class {
    constructor() {
      __publicField(this, "nodesRef", {
        current: []
      });
      __publicField(this, "events", createEventEmitter());
    }
    addNode(node) {
      this.nodesRef.current.push(node);
    }
    removeNode(node) {
      const index2 = this.nodesRef.current.findIndex((n) => n === node);
      if (index2 !== -1) {
        this.nodesRef.current.splice(index2, 1);
      }
    }
  };

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var FloatingNodeContext = /* @__PURE__ */ React42.createContext(null);
  if (true) FloatingNodeContext.displayName = "FloatingNodeContext";
  var FloatingTreeContext = /* @__PURE__ */ React42.createContext(null);
  if (true) FloatingTreeContext.displayName = "FloatingTreeContext";
  var useFloatingParentNodeId = () => React42.useContext(FloatingNodeContext)?.id || null;
  var useFloatingTree = (externalTree) => {
    const contextTree = React42.useContext(FloatingTreeContext);
    return externalTree ?? contextTree;
  };
  function useFloatingNodeId(externalTree) {
    const id = useId();
    const tree = useFloatingTree(externalTree);
    const parentId = useFloatingParentNodeId();
    useIsoLayoutEffect(() => {
      if (!id) {
        return void 0;
      }
      const node = {
        id,
        parentId
      };
      tree?.addNode(node);
      return () => {
        tree?.removeNode(node);
      };
    }, [tree, id, parentId]);
    return id;
  }
  function FloatingNode(props) {
    const {
      children,
      id
    } = props;
    const parentId = useFloatingParentNodeId();
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FloatingNodeContext.Provider, {
      value: React42.useMemo(() => ({
        id,
        parentId
      }), [id, parentId]),
      children
    });
  }
  function FloatingTree(props) {
    const {
      children,
      externalTree
    } = props;
    const tree = useRefWithInit(() => externalTree ?? new FloatingTreeStore()).current;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FloatingTreeContext.Provider, {
      value: tree,
      children
    });
  }

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  function getEventType(event, lastInteractionType) {
    const win = getWindow(getTarget(event));
    if (event instanceof win.KeyboardEvent) {
      return "keyboard";
    }
    if (event instanceof win.FocusEvent) {
      return lastInteractionType || "keyboard";
    }
    if ("pointerType" in event) {
      return event.pointerType || "keyboard";
    }
    if ("touches" in event) {
      return "touch";
    }
    if (event instanceof win.MouseEvent) {
      return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
    }
    return "";
  }
  var LIST_LIMIT = 20;
  var previouslyFocusedElements = [];
  function clearDisconnectedPreviouslyFocusedElements() {
    previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
      return entry.deref()?.isConnected;
    });
  }
  function addPreviouslyFocusedElement(element) {
    clearDisconnectedPreviouslyFocusedElements();
    if (element && getNodeName(element) !== "body") {
      previouslyFocusedElements.push(new WeakRef(element));
      if (previouslyFocusedElements.length > LIST_LIMIT) {
        previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
      }
    }
  }
  function getPreviouslyFocusedElement() {
    clearDisconnectedPreviouslyFocusedElements();
    return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
  }
  function getFirstTabbableElement(container) {
    if (!container) {
      return null;
    }
    if (isTabbable(container)) {
      return container;
    }
    return tabbable(container)[0] || container;
  }
  function handleTabIndex(floatingFocusElement) {
    if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) {
      return;
    }
    if (!floatingFocusElement.getAttribute("role")?.includes("dialog")) {
      return;
    }
    const focusableElements = focusable(floatingFocusElement);
    const tabbableContent = focusableElements.filter((element) => {
      const dataTabIndex = element.getAttribute("data-tabindex") || "";
      return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
    });
    const tabIndex = floatingFocusElement.getAttribute("tabindex");
    if (tabbableContent.length === 0) {
      if (tabIndex !== "0") {
        floatingFocusElement.setAttribute("tabindex", "0");
        floatingFocusElement.setAttribute("data-tabindex", "0");
      }
    } else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
      floatingFocusElement.setAttribute("tabindex", "-1");
      floatingFocusElement.setAttribute("data-tabindex", "-1");
    }
  }
  function FloatingFocusManager(props) {
    const {
      context,
      children,
      disabled: disabled2 = false,
      initialFocus = true,
      returnFocus = true,
      restoreFocus = false,
      modal = true,
      closeOnFocusOut = true,
      openInteractionType = "",
      nextFocusableElement,
      previousFocusableElement,
      beforeContentFocusGuardRef,
      externalTree,
      getInsideElements
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const open = store.useState("open");
    const domReference = store.useState("domReferenceElement");
    const floating = store.useState("floatingElement");
    const {
      events,
      dataRef
    } = store.context;
    const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
    const ignoreInitialFocus = initialFocus === false;
    const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
    const initialFocusRef = useValueAsRef(initialFocus);
    const returnFocusRef = useValueAsRef(returnFocus);
    const openInteractionTypeRef = useValueAsRef(openInteractionType);
    const openRef = useValueAsRef(open);
    const tree = useFloatingTree(externalTree);
    const portalContext = usePortalContext();
    const preventReturnFocusRef = React43.useRef(false);
    const isPointerDownRef = React43.useRef(false);
    const pointerDownOutsideRef = React43.useRef(false);
    const lastFocusedTabbableRef = React43.useRef(null);
    const closeTypeRef = React43.useRef("");
    const lastInteractionTypeRef = React43.useRef("");
    const beforeGuardRef = React43.useRef(null);
    const afterGuardRef = React43.useRef(null);
    const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
    const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
    const blurTimeout = useTimeout();
    const pointerDownTimeout = useTimeout();
    const restoreFocusFrame = useAnimationFrame();
    const isInsidePortal = portalContext != null;
    const floatingFocusElement = getFloatingFocusElement(floating);
    const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
      return container ? tabbable(container) : [];
    });
    const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
    React43.useEffect(() => {
      if (disabled2 || !modal) {
        return void 0;
      }
      function onKeyDown(event) {
        if (event.key === "Tab") {
          if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
            stopEvent(event);
          }
        }
      }
      const doc = ownerDocument(floatingFocusElement);
      return addEventListener(doc, "keydown", onKeyDown);
    }, [disabled2, floatingFocusElement, modal, isUntrappedTypeableCombobox, getTabbableContent]);
    React43.useEffect(() => {
      if (disabled2 || !open) {
        return void 0;
      }
      const doc = ownerDocument(floatingFocusElement);
      function clearPointerDownOutside() {
        pointerDownOutsideRef.current = false;
      }
      function onPointerDown(event) {
        const target = getTarget(event);
        const insideElements = getResolvedInsideElements();
        const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
        pointerDownOutsideRef.current = !pointerTargetInside;
        lastInteractionTypeRef.current = event.pointerType || "keyboard";
        if (target?.closest(`[${CLICK_TRIGGER_IDENTIFIER}]`)) {
          isPointerDownRef.current = true;
          pointerDownTimeout.start(0, () => {
            isPointerDownRef.current = false;
          });
        }
      }
      function onKeyDown() {
        lastInteractionTypeRef.current = "keyboard";
      }
      return mergeCleanups(
        addEventListener(doc, "pointerdown", onPointerDown, true),
        addEventListener(doc, "pointerup", clearPointerDownOutside, true),
        addEventListener(doc, "pointercancel", clearPointerDownOutside, true),
        addEventListener(doc, "keydown", onKeyDown, true),
        // Avoid a stale `true` leaking into the next open (e.g. keep-mounted popups)
        // if the popup dismissed between pointerdown and pointerup.
        clearPointerDownOutside
      );
    }, [disabled2, floating, domReference, floatingFocusElement, open, portalContext, pointerDownTimeout, getResolvedInsideElements]);
    React43.useEffect(() => {
      if (disabled2 || !closeOnFocusOut) {
        return void 0;
      }
      const doc = ownerDocument(floatingFocusElement);
      function handlePointerDown() {
        isPointerDownRef.current = true;
        pointerDownTimeout.start(0, () => {
          isPointerDownRef.current = false;
        });
      }
      function handleFocusIn(event) {
        const target = getTarget(event);
        if (isTabbable(target)) {
          lastFocusedTabbableRef.current = target;
        }
      }
      function handleFocusOutside(event) {
        const relatedTarget = event.relatedTarget;
        const currentTarget = event.currentTarget;
        const target = getTarget(event);
        if (modal && relatedTarget == null && target != null && contains(floating, target)) {
          addPreviouslyFocusedElement(target);
        }
        queueMicrotask(() => {
          const nodeId = getNodeId();
          const triggers = store.context.triggerElements;
          const insideElements = getResolvedInsideElements();
          const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeInsideRef.current, portalContext?.afterInsideRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement)].includes(relatedTarget);
          const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
          if (currentTarget === domReference && floatingFocusElement) {
            handleTabIndex(floatingFocusElement);
          }
          if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
            if (isHTMLElement(floatingFocusElement)) {
              floatingFocusElement.focus();
              if (restoreFocus === "popup") {
                restoreFocusFrame.request(() => {
                  floatingFocusElement.focus();
                });
                return;
              }
            }
            const tabbableContent = getTabbableContent();
            const prevTabbable = lastFocusedTabbableRef.current;
            const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
            if (isHTMLElement(nodeToFocus)) {
              nodeToFocus.focus();
            }
          }
          if (dataRef.current.insideReactTree) {
            dataRef.current.insideReactTree = false;
            return;
          }
          if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
          // For an "untrapped" typeable combobox (input role=combobox with
          // initialFocus=false), re-opening the popup and tabbing out should still close it even
          // when the previously focused element (e.g. the next tabbable outside the popup) is
          // focused again. Otherwise, the popup remains open on the second Tab sequence:
          // click input -> Tab (closes) -> click input -> Tab.
          // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
          (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
            preventReturnFocusRef.current = true;
            store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event));
          }
        });
      }
      function markInsideReactTree() {
        if (pointerDownOutsideRef.current) {
          return;
        }
        dataRef.current.insideReactTree = true;
        blurTimeout.start(0, () => {
          dataRef.current.insideReactTree = false;
        });
      }
      const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
      if (!floating && !domReferenceElement) {
        return void 0;
      }
      return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
    }, [disabled2, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
    React43.useEffect(() => {
      if (disabled2 || !floating || !open) {
        return void 0;
      }
      const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
      const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
      const rootAncestorComboboxDomReference = ancestors.find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
      const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, ...getResolvedInsideElements()];
      const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter((x) => x != null);
      const ariaHiddenCleanup = markOthers(insideElements, {
        ariaHidden: modal || isUntrappedTypeableCombobox,
        mark: false
      });
      const markerInsideElements = [floating, ...portalNodes].filter((x) => x != null);
      const markerCleanup = markOthers(markerInsideElements);
      return () => {
        markerCleanup();
        ariaHiddenCleanup();
      };
    }, [open, disabled2, domReference, floating, modal, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
    useIsoLayoutEffect(() => {
      if (!open || disabled2 || !isHTMLElement(floatingFocusElement)) {
        return;
      }
      const doc = ownerDocument(floatingFocusElement);
      const previouslyFocusedElement = activeElement(doc);
      queueMicrotask(() => {
        const initialFocusValueOrFn = initialFocusRef.current;
        const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
        if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) {
          return;
        }
        const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
        if (focusAlreadyInsideFloatingEl) {
          return;
        }
        let focusableElements = null;
        const getDefaultFocusElement = () => {
          if (focusableElements == null) {
            focusableElements = getTabbableContent(floatingFocusElement);
          }
          return focusableElements[0] || floatingFocusElement;
        };
        let elToFocus;
        if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
          elToFocus = getDefaultFocusElement();
        } else {
          elToFocus = resolveRef(resolvedInitialFocus);
        }
        elToFocus = elToFocus || getDefaultFocusElement();
        const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floatingFocusElement,
          shouldFocus() {
            if (!openRef.current) {
              return false;
            }
            if (hadFocusInside) {
              return true;
            }
            const currentActiveElement = activeElement(doc);
            const focusMovedInside = currentActiveElement !== elToFocus && contains(floatingFocusElement, currentActiveElement);
            return !focusMovedInside;
          }
        });
      });
    }, [disabled2, open, floatingFocusElement, getTabbableContent, initialFocusRef, openInteractionTypeRef, openRef]);
    useIsoLayoutEffect(() => {
      if (disabled2 || !floatingFocusElement) {
        return void 0;
      }
      const doc = ownerDocument(floatingFocusElement);
      const elementFocusedBeforeOpen = activeElement(doc);
      const preferPreviousFocus = openInteractionTypeRef.current == null;
      addPreviouslyFocusedElement(elementFocusedBeforeOpen);
      function onOpenChangeLocal(details) {
        if (!details.open) {
          closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
        }
        if (details.reason === reason_parts_exports.triggerHover && details.nativeEvent.type === "mouseleave") {
          preventReturnFocusRef.current = true;
        }
        if (details.reason !== reason_parts_exports.outsidePress) {
          return;
        }
        if (details.nested) {
          preventReturnFocusRef.current = false;
        } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
          preventReturnFocusRef.current = false;
        } else {
          let isPreventScrollSupported = false;
          ownerDocument(floatingFocusElement).createElement("div").focus({
            get preventScroll() {
              isPreventScrollSupported = true;
              return false;
            }
          });
          if (isPreventScrollSupported) {
            preventReturnFocusRef.current = false;
          } else {
            preventReturnFocusRef.current = true;
          }
        }
      }
      events.on("openchange", onOpenChangeLocal);
      function getReturnElement() {
        const returnFocusValueOrFn = returnFocusRef.current;
        let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
        if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) {
          return null;
        }
        if (resolvedReturnFocusValue === null) {
          resolvedReturnFocusValue = true;
        }
        const referenceReturnElement = domReference?.isConnected ? domReference : null;
        const previousReturnElement = elementFocusedBeforeOpen?.isConnected && getNodeName(elementFocusedBeforeOpen) !== "body" ? elementFocusedBeforeOpen : null;
        let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
        if (!defaultReturnElement) {
          defaultReturnElement = getPreviouslyFocusedElement() || null;
        }
        if (typeof resolvedReturnFocusValue === "boolean") {
          return defaultReturnElement;
        }
        return resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null;
      }
      return () => {
        events.off("openchange", onOpenChangeLocal);
        const activeEl = activeElement(doc);
        const insideElements = getResolvedInsideElements();
        const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
        const returnFocusValueOrFn = returnFocusRef.current;
        const returnElement = getReturnElement();
        queueMicrotask(() => {
          const tabbableReturnElement = getFirstTabbableElement(returnElement);
          const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
          if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && // If the focus moved somewhere else after mount, avoid returning focus
          // since it likely entered a different element which should be
          // respected: https://github.com/floating-ui/floating-ui/issues/2607
          (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
            tabbableReturnElement.focus({
              preventScroll: true
            });
          }
          preventReturnFocusRef.current = false;
        });
      };
    }, [disabled2, floating, floatingFocusElement, returnFocusRef, openInteractionTypeRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);
    useIsoLayoutEffect(() => {
      if (!parts_exports.engine.webkit || open || !floating) {
        return;
      }
      const activeEl = activeElement(ownerDocument(floating));
      if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
        return;
      }
      if (contains(floating, activeEl)) {
        activeEl.blur();
      }
    }, [open, floating]);
    useIsoLayoutEffect(() => {
      if (disabled2 || !portalContext) {
        return void 0;
      }
      portalContext.setFocusManagerState({
        modal,
        closeOnFocusOut,
        open,
        onOpenChange: store.setOpen,
        domReference
      });
      return () => {
        portalContext.setFocusManagerState(null);
      };
    }, [disabled2, portalContext, modal, open, store, closeOnFocusOut, domReference]);
    useIsoLayoutEffect(() => {
      if (disabled2 || !floatingFocusElement) {
        return void 0;
      }
      handleTabIndex(floatingFocusElement);
      return () => {
        queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
      };
    }, [disabled2, floatingFocusElement]);
    const shouldRenderGuards = !disabled2 && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(React43.Fragment, {
      children: [shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FocusGuard, {
        "data-type": "inside",
        ref: mergedBeforeGuardRef,
        onFocus: (event) => {
          if (modal) {
            const els = getTabbableContent();
            enqueueFocus(els[els.length - 1]);
          } else if (portalContext?.portalNode) {
            preventReturnFocusRef.current = false;
            if (isOutsideEvent(event, portalContext.portalNode)) {
              const nextTabbable = getNextTabbable(domReference);
              nextTabbable?.focus();
            } else {
              resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
            }
          }
        }
      }), children, shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FocusGuard, {
        "data-type": "inside",
        ref: mergedAfterGuardRef,
        onFocus: (event) => {
          if (modal) {
            enqueueFocus(getTabbableContent()[0]);
          } else if (portalContext?.portalNode) {
            if (closeOnFocusOut) {
              preventReturnFocusRef.current = true;
            }
            if (isOutsideEvent(event, portalContext.portalNode)) {
              const prevTabbable = getPreviousTabbable(domReference);
              prevTabbable?.focus();
            } else {
              resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
            }
          }
        }
      })]
    });
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
  init_define_import_meta_env();
  var React44 = __toESM(require_react_shim(), 1);
  function useClick(context, props = {}) {
    const {
      enabled = true,
      event: eventOption = "click",
      toggle = true,
      ignoreMouse = false,
      stickIfOpen = true,
      touchOpenDelay = 0,
      reason = reason_parts_exports.triggerPress
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const dataRef = store.context.dataRef;
    const pointerTypeRef = React44.useRef(void 0);
    const frame = useAnimationFrame();
    const touchOpenTimeout = useTimeout();
    const reference = React44.useMemo(() => {
      function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
        const details = createChangeEventDetails(reason, nativeEvent, target);
        if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
          touchOpenTimeout.start(touchOpenDelay, () => {
            store.setOpen(true, details);
          });
        } else {
          store.setOpen(nextOpen, details);
        }
      }
      function getNextOpen(open, currentTarget, isClickLikeOpenEvent2) {
        const openEvent = dataRef.current.openEvent;
        const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== currentTarget;
        if (open && hasClickedOnInactiveTrigger) {
          return true;
        }
        if (!open) {
          return true;
        }
        if (!toggle) {
          return true;
        }
        if (openEvent && stickIfOpen) {
          return !isClickLikeOpenEvent2(openEvent.type);
        }
        return false;
      }
      return {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          const pointerType = pointerTypeRef.current;
          const nativeEvent = event.nativeEvent;
          const open = store.select("open");
          if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType, true) && ignoreMouse) {
            return;
          }
          const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown");
          const target = getTarget(nativeEvent);
          if (isTypeableElement(target)) {
            setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType);
            return;
          }
          const eventCurrentTarget = event.currentTarget;
          frame.request(() => {
            setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
          });
        },
        onClick(event) {
          if (eventOption === "mousedown-only") {
            return;
          }
          const pointerType = pointerTypeRef.current;
          if (eventOption === "mousedown" && pointerType) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerType, true) && ignoreMouse) {
            return;
          }
          const open = store.select("open");
          const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown" || openEventType === "keydown" || openEventType === "keyup");
          setOpenWithTouchDelay(nextOpen, event.nativeEvent, event.currentTarget, pointerType);
        },
        onKeyDown() {
          pointerTypeRef.current = void 0;
        }
      };
    }, [dataRef, eventOption, ignoreMouse, reason, store, stickIfOpen, toggle, frame, touchOpenTimeout, touchOpenDelay]);
    return React44.useMemo(() => enabled ? {
      reference
    } : EMPTY_OBJECT, [enabled, reference]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useClientPoint.mjs
  init_define_import_meta_env();
  var React45 = __toESM(require_react_shim(), 1);
  function createVirtualElement(domElement, data) {
    let offsetX = null;
    let offsetY = null;
    let isAutoUpdateEvent = false;
    return {
      contextElement: domElement || void 0,
      getBoundingClientRect() {
        const domRect = domElement?.getBoundingClientRect() || {
          width: 0,
          height: 0,
          x: 0,
          y: 0
        };
        const isXAxis = data.axis === "x" || data.axis === "both";
        const isYAxis = data.axis === "y" || data.axis === "both";
        const canTrackCursorOnAutoUpdate = ["mouseenter", "mousemove"].includes(data.dataRef.current.openEvent?.type || "") && data.pointerType !== "touch";
        let width = domRect.width;
        let height = domRect.height;
        let x = domRect.x;
        let y = domRect.y;
        if (offsetX == null && data.x && isXAxis) {
          offsetX = domRect.x - data.x;
        }
        if (offsetY == null && data.y && isYAxis) {
          offsetY = domRect.y - data.y;
        }
        x -= offsetX || 0;
        y -= offsetY || 0;
        width = 0;
        height = 0;
        if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
          width = data.axis === "y" ? domRect.width : 0;
          height = data.axis === "x" ? domRect.height : 0;
          x = isXAxis && data.x != null ? data.x : x;
          y = isYAxis && data.y != null ? data.y : y;
        } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
          height = data.axis === "x" ? domRect.height : height;
          width = data.axis === "y" ? domRect.width : width;
        }
        isAutoUpdateEvent = true;
        return {
          width,
          height,
          x,
          y,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x
        };
      }
    };
  }
  function isMouseBasedEvent(event) {
    return event != null && event.clientX != null;
  }
  function useClientPoint(context, props = {}) {
    const {
      enabled = true,
      axis = "both"
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const open = store.useState("open");
    const floating = store.useState("floatingElement");
    const domReference = store.useState("domReferenceElement");
    const dataRef = store.context.dataRef;
    const initialRef = React45.useRef(false);
    const cleanupListenerRef = React45.useRef(null);
    const [pointerType, setPointerType] = React45.useState();
    const [reactive, setReactive] = React45.useState([]);
    const resetReference = useStableCallback((reference2) => {
      store.set("positionReference", reference2);
    });
    const setReference = useStableCallback((newX, newY, referenceElement) => {
      if (initialRef.current) {
        return;
      }
      if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
        return;
      }
      store.set("positionReference", createVirtualElement(referenceElement ?? domReference, {
        x: newX,
        y: newY,
        axis,
        dataRef,
        pointerType
      }));
    });
    const handleReferenceEnterOrMove = useStableCallback((event) => {
      if (!open) {
        setReference(event.clientX, event.clientY, event.currentTarget);
      } else if (!cleanupListenerRef.current) {
        setReference(event.clientX, event.clientY, event.currentTarget);
        setReactive([]);
      }
    });
    const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
    React45.useEffect(() => {
      if (!enabled) {
        resetReference(domReference);
        return void 0;
      }
      if (!openCheck) {
        return void 0;
      }
      function cleanupListener() {
        cleanupListenerRef.current?.();
        cleanupListenerRef.current = null;
      }
      const win = getWindow(floating);
      function handleMouseMove(event) {
        const target = getTarget(event);
        if (!contains(floating, target)) {
          setReference(event.clientX, event.clientY);
        } else {
          cleanupListener();
        }
      }
      if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
        cleanupListenerRef.current = addEventListener(win, "mousemove", handleMouseMove);
      } else {
        resetReference(domReference);
      }
      return cleanupListener;
    }, [openCheck, enabled, floating, dataRef, domReference, store, setReference, resetReference, reactive]);
    React45.useEffect(() => () => {
      store.set("positionReference", null);
    }, [store]);
    React45.useEffect(() => {
      if (enabled && !floating) {
        initialRef.current = false;
      }
    }, [enabled, floating]);
    React45.useEffect(() => {
      if (!enabled && open) {
        initialRef.current = true;
      }
    }, [enabled, open]);
    const reference = React45.useMemo(() => {
      function setPointerTypeRef(event) {
        setPointerType(event.pointerType);
      }
      return {
        onPointerDown: setPointerTypeRef,
        onPointerEnter: setPointerTypeRef,
        onMouseMove: handleReferenceEnterOrMove,
        onMouseEnter: handleReferenceEnterOrMove
      };
    }, [handleReferenceEnterOrMove]);
    return React45.useMemo(() => enabled ? {
      reference,
      trigger: reference
    } : {}, [enabled, reference]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
  init_define_import_meta_env();
  var React46 = __toESM(require_react_shim(), 1);
  function alwaysFalse() {
    return false;
  }
  function normalizeProp(normalizable) {
    return {
      escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
      outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
    };
  }
  function useDismiss(context, props = {}) {
    const {
      enabled = true,
      escapeKey: escapeKey2 = true,
      outsidePress: outsidePressProp = true,
      outsidePressEvent = "sloppy",
      referencePress = alwaysFalse,
      bubbles,
      externalTree
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const open = store.useState("open");
    const floatingElement = store.useState("floatingElement");
    const {
      dataRef
    } = store.context;
    const tree = useFloatingTree(externalTree);
    const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
    const outsidePress2 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
    const outsidePressEnabled = outsidePress2 !== false;
    const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
    const {
      escapeKey: escapeKeyBubbles,
      outsidePress: outsidePressBubbles
    } = normalizeProp(bubbles);
    const pressStartedInsideRef = React46.useRef(false);
    const pressStartPreventedRef = React46.useRef(false);
    const suppressNextOutsideClickRef = React46.useRef(false);
    const isComposingRef = React46.useRef(false);
    const currentPointerTypeRef = React46.useRef("");
    const touchStateRef = React46.useRef(null);
    const cancelDismissOnEndTimeout = useTimeout();
    const clearInsideReactTreeTimeout = useTimeout();
    const clearInsideReactTree = useStableCallback(() => {
      clearInsideReactTreeTimeout.clear();
      dataRef.current.insideReactTree = false;
    });
    const hasBlockingChild = useStableCallback((bubbleKey) => {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
      return children.some((child) => child.context?.open && !child.context.dataRef.current[bubbleKey]);
    });
    const isEventWithinOwnElements = useStableCallback((event) => {
      return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"));
    });
    const closeOnReferencePress = useStableCallback((event) => {
      if (!referencePress()) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
    });
    const closeOnEscapeKeyDown = useStableCallback((event) => {
      if (!open || !enabled || !escapeKey2 || event.key !== "Escape") {
        return;
      }
      if (isComposingRef.current) {
        return;
      }
      if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) {
        return;
      }
      const native = isReactEvent(event) ? event.nativeEvent : event;
      const eventDetails = createChangeEventDetails(reason_parts_exports.escapeKey, native);
      store.setOpen(false, eventDetails);
      if (!eventDetails.isCanceled) {
        event.preventDefault();
      }
      if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
        event.stopPropagation();
      }
    });
    const markInsideReactTree = useStableCallback(() => {
      dataRef.current.insideReactTree = true;
      clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
    });
    const markPressStartedInsideReactTree = useStableCallback((event) => {
      if (!open || !enabled || event.button !== 0) {
        return;
      }
      const target = getTarget(event.nativeEvent);
      if (!contains(store.select("floatingElement"), target)) {
        return;
      }
      if (!pressStartedInsideRef.current) {
        pressStartedInsideRef.current = true;
        pressStartPreventedRef.current = false;
      }
    });
    const markInsidePressStartPrevented = useStableCallback((event) => {
      if (!open || !enabled) {
        return;
      }
      if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
        return;
      }
      if (pressStartedInsideRef.current) {
        pressStartPreventedRef.current = true;
      }
    });
    React46.useEffect(() => {
      if (!open || !enabled) {
        return void 0;
      }
      dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
      dataRef.current.__outsidePressBubbles = outsidePressBubbles;
      const compositionTimeout = new Timeout();
      const preventedPressSuppressionTimeout = new Timeout();
      function handleCompositionStart() {
        compositionTimeout.clear();
        isComposingRef.current = true;
      }
      function handleCompositionEnd() {
        compositionTimeout.start(
          // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
          // Only apply to WebKit for the test to remain 0ms.
          parts_exports.engine.webkit ? 5 : 0,
          () => {
            isComposingRef.current = false;
          }
        );
      }
      function suppressImmediateOutsideClickAfterPreventedStart() {
        suppressNextOutsideClickRef.current = true;
        preventedPressSuppressionTimeout.start(0, () => {
          suppressNextOutsideClickRef.current = false;
        });
      }
      function resetPressStartState() {
        pressStartedInsideRef.current = false;
        pressStartPreventedRef.current = false;
      }
      function getOutsidePressEvent() {
        const type = currentPointerTypeRef.current;
        const computedType = type === "pen" || !type ? "mouse" : type;
        const outsidePressEventValue = getOutsidePressEventProp();
        const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
        if (typeof resolved === "string") {
          return resolved;
        }
        return resolved[computedType];
      }
      function shouldIgnoreEvent(event) {
        const computedOutsidePressEvent = getOutsidePressEvent();
        return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
      }
      function isEventWithinFloatingTree(event) {
        const nodeId = dataRef.current.floatingContext?.nodeId;
        const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
        return isEventWithinOwnElements(event) || targetIsInsideChildren;
      }
      function closeOnPressOutside(event) {
        if (shouldIgnoreEvent(event)) {
          if (event.type !== "click" && !isEventWithinOwnElements(event)) {
            preventedPressSuppressionTimeout.clear();
            suppressNextOutsideClickRef.current = false;
          }
          clearInsideReactTree();
          return;
        }
        if (dataRef.current.insideReactTree) {
          clearInsideReactTree();
          return;
        }
        const target = getTarget(event);
        const inertSelector = `[${createAttribute("inert")}]`;
        const targetRoot = isElement(target) ? target.getRootNode() : null;
        const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
        const triggers = store.context.triggerElements;
        if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) {
          return;
        }
        let targetRootAncestor = isElement(target) ? target : null;
        while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
          const nextParent = getParentNode(targetRootAncestor);
          if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
            break;
          }
          targetRootAncestor = nextParent;
        }
        if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
        !contains(target, store.select("floatingElement")) && // If the target root element contains none of the markers, then the
        // element was injected after the floating element rendered.
        markers.every((marker) => !contains(targetRootAncestor, marker))) {
          return;
        }
        if (isHTMLElement(target) && !("touches" in event)) {
          const lastTraversableNode = isLastTraversableNode(target);
          const style = getComputedStyle2(target);
          const scrollRe = /auto|scroll/;
          const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
          const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
          const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
          const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
          const isRTL2 = style.direction === "rtl";
          const pressedVerticalScrollbar = canScrollY && (isRTL2 ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
          const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
          if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
            return;
          }
        }
        if (isEventWithinFloatingTree(event)) {
          return;
        }
        if (getOutsidePressEvent() === "intentional" && suppressNextOutsideClickRef.current) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
          return;
        }
        if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
          return;
        }
        if (hasBlockingChild("__outsidePressBubbles")) {
          return;
        }
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.outsidePress, event));
        clearInsideReactTree();
      }
      function handlePointerDown(event) {
        if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
          return;
        }
        closeOnPressOutside(event);
      }
      function handleTouchStart(event) {
        if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
          return;
        }
        const touch = event.touches[0];
        if (touch) {
          touchStateRef.current = {
            startTime: Date.now(),
            startX: touch.clientX,
            startY: touch.clientY,
            dismissOnTouchEnd: false,
            dismissOnMouseDown: true
          };
          cancelDismissOnEndTimeout.start(1e3, () => {
            if (touchStateRef.current) {
              touchStateRef.current.dismissOnTouchEnd = false;
              touchStateRef.current.dismissOnMouseDown = false;
            }
          });
        }
      }
      function addTargetEventListenerOnce(event, listener) {
        const target = getTarget(event);
        if (!target) {
          return;
        }
        const unsubscribe2 = addEventListener(target, event.type, () => {
          listener(event);
          unsubscribe2();
        });
      }
      function handleTouchStartCapture(event) {
        currentPointerTypeRef.current = "touch";
        addTargetEventListenerOnce(event, handleTouchStart);
      }
      function closeOnPressOutsideCapture(event) {
        cancelDismissOnEndTimeout.clear();
        if (event.type === "pointerdown") {
          currentPointerTypeRef.current = event.pointerType;
        }
        if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
          return;
        }
        addTargetEventListenerOnce(event, (targetEvent) => {
          if (targetEvent.type === "pointerdown") {
            handlePointerDown(targetEvent);
          } else {
            closeOnPressOutside(targetEvent);
          }
        });
      }
      function handlePressEndCapture(event) {
        if (!pressStartedInsideRef.current) {
          return;
        }
        const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
        resetPressStartState();
        if (getOutsidePressEvent() !== "intentional") {
          return;
        }
        if (event.type === "pointercancel") {
          if (pressStartedInsideDefaultPrevented) {
            suppressImmediateOutsideClickAfterPreventedStart();
          }
          return;
        }
        if (isEventWithinFloatingTree(event)) {
          return;
        }
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
          return;
        }
        if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
          return;
        }
        preventedPressSuppressionTimeout.clear();
        suppressNextOutsideClickRef.current = true;
        clearInsideReactTree();
      }
      function handleTouchMove(event) {
        if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
          return;
        }
        const touch = event.touches[0];
        if (!touch) {
          return;
        }
        const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
        const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance > 5) {
          touchStateRef.current.dismissOnTouchEnd = true;
        }
        if (distance > 10) {
          closeOnPressOutside(event);
          cancelDismissOnEndTimeout.clear();
          touchStateRef.current = null;
        }
      }
      function handleTouchMoveCapture(event) {
        addTargetEventListenerOnce(event, handleTouchMove);
      }
      function handleTouchEnd(event) {
        if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
          return;
        }
        if (touchStateRef.current.dismissOnTouchEnd) {
          closeOnPressOutside(event);
        }
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
      function handleTouchEndCapture(event) {
        addTargetEventListenerOnce(event, handleTouchEnd);
      }
      const doc = ownerDocument(floatingElement);
      const unsubscribe = mergeCleanups(escapeKey2 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, true), addEventListener(doc, "touchmove", handleTouchMoveCapture, true), addEventListener(doc, "touchend", handleTouchEndCapture, true)));
      return () => {
        unsubscribe();
        compositionTimeout.clear();
        preventedPressSuppressionTimeout.clear();
        resetPressStartState();
        suppressNextOutsideClickRef.current = false;
      };
    }, [dataRef, floatingElement, escapeKey2, outsidePressEnabled, outsidePress2, open, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, hasBlockingChild, isEventWithinOwnElements, tree, store, cancelDismissOnEndTimeout]);
    React46.useEffect(clearInsideReactTree, [outsidePress2, clearInsideReactTree]);
    const reference = React46.useMemo(() => ({
      onKeyDown: closeOnEscapeKeyDown,
      onPointerDown: closeOnReferencePress,
      onClick: closeOnReferencePress
    }), [closeOnEscapeKeyDown, closeOnReferencePress]);
    const floating = React46.useMemo(() => ({
      onKeyDown: closeOnEscapeKeyDown,
      // `onMouseDown` may be blocked if `event.preventDefault()` is called in
      // `onPointerDown`, such as with <NumberField.ScrubArea>.
      // See https://github.com/mui/base-ui/pull/3379
      onPointerDown: markInsidePressStartPrevented,
      onMouseDown: markInsidePressStartPrevented,
      onClickCapture: markInsideReactTree,
      onMouseDownCapture(event) {
        markInsideReactTree();
        markPressStartedInsideReactTree(event);
      },
      onPointerDownCapture(event) {
        markInsideReactTree();
        markPressStartedInsideReactTree(event);
      },
      onMouseUpCapture: markInsideReactTree,
      onTouchEndCapture: markInsideReactTree,
      onTouchMoveCapture: markInsideReactTree
    }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
    return React46.useMemo(() => enabled ? {
      reference,
      floating,
      trigger: reference
    } : {}, [enabled, reference, floating]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
  init_define_import_meta_env();
  var React55 = __toESM(require_react_shim(), 1);

  // node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
  init_define_import_meta_env();

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  init_define_import_meta_env();

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  init_define_import_meta_env();
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform3,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform3.getClippingRect({
      element: ((_await$platform$isEle = await (platform3.isElement == null ? void 0 : platform3.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform3.getDocumentElement == null ? void 0 : platform3.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform3.getOffsetParent == null ? void 0 : platform3.getOffsetParent(elements.floating));
    const offsetScale = await (platform3.isElement == null ? void 0 : platform3.isElement(offsetParent)) ? await (platform3.getScale == null ? void 0 : platform3.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform3.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform3.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var MAX_RESET_COUNT = 50;
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform3
    } = config;
    const platformWithDetectOverflow = platform3.detectOverflow ? platform3 : {
      ...platform3,
      detectOverflow
    };
    const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(floating));
    let rects = await platform3.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let resetCount = 0;
    const middlewareData = {};
    for (let i = 0; i < middleware.length; i++) {
      const currentMiddleware = middleware[i];
      if (!currentMiddleware) {
        continue;
      }
      const {
        name,
        fn
      } = currentMiddleware;
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platformWithDetectOverflow,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData[name] = {
        ...middlewareData[name],
        ...data
      };
      if (reset && resetCount < MAX_RESET_COUNT) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform3.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform3,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  function getSideOffsets(overflow, rect) {
    return {
      top: overflow.top - rect.height,
      right: overflow.right - rect.width,
      bottom: overflow.bottom - rect.height,
      left: overflow.left - rect.width
    };
  }
  function isAnySideFullyClipped(overflow) {
    return sides.some((side) => overflow[side] >= 0);
  }
  var hide = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "hide",
      options,
      async fn(state) {
        const {
          rects,
          platform: platform3
        } = state;
        const {
          strategy = "referenceHidden",
          ...detectOverflowOptions
        } = evaluate(options, state);
        switch (strategy) {
          case "referenceHidden": {
            const overflow = await platform3.detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: "reference"
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case "escaped": {
            const overflow = await platform3.detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default: {
            return {};
          }
        }
      }
    };
  };
  var originSides = /* @__PURE__ */ new Set(["left", "top"]);
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform3,
      elements
    } = state;
    const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement,
          platform: platform3
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  var limitShift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      options,
      fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          middlewareData
        } = state;
        const {
          offset: offset4 = 0,
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const crossAxis = getSideAxis(placement);
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        const rawOffset = evaluate(offset4, state);
        const computedOffset = typeof rawOffset === "number" ? {
          mainAxis: rawOffset,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...rawOffset
        };
        if (checkMainAxis) {
          const len = mainAxis === "y" ? "height" : "width";
          const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
          const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
          if (mainAxisCoord < limitMin) {
            mainAxisCoord = limitMin;
          } else if (mainAxisCoord > limitMax) {
            mainAxisCoord = limitMax;
          }
        }
        if (checkCrossAxis) {
          var _middlewareData$offse, _middlewareData$offse2;
          const len = mainAxis === "y" ? "width" : "height";
          const isOriginSide = originSides.has(getSide(placement));
          const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
          const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
          if (crossAxisCoord < limitMin) {
            crossAxisCoord = limitMin;
          } else if (crossAxisCoord > limitMax) {
            crossAxisCoord = limitMax;
          }
        }
        return {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        };
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform3,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform3.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
      x,
      y
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  var SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
      const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
    let top = firstRect.top;
    let right = firstRect.right;
    let bottom = firstRect.bottom;
    let left = firstRect.left;
    for (let i = 1; i < clippingAncestors.length; i++) {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
      top = max(rect.top, top);
      right = min(rect.right, right);
      bottom = min(rect.bottom, bottom);
      left = max(rect.left, left);
    }
    return {
      width: right - left,
      height: bottom - top,
      x: left,
      y: top
    };
  }
  function getDimensions2(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x,
      y,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions: getDimensions2,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update2, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update2, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update2);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update2();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      if (floating) {
        resizeObserver.observe(floating);
      }
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update2();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update2();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update2);
        ancestorResize && ancestor.removeEventListener("resize", update2);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var hide2 = hide;
  var limitShift2 = limitShift;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform: platform2,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  // node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
  var React47 = __toESM(require_react_shim(), 1);
  var import_react5 = __toESM(require_react_shim(), 1);
  var ReactDOM3 = __toESM(require_react_dom_shim(), 1);
  var isClient = typeof document !== "undefined";
  var noop2 = function noop3() {
  };
  var index = isClient ? import_react5.useLayoutEffect : noop2;
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (typeof a !== typeof b) {
      return false;
    }
    if (typeof a === "function" && a.toString() === b.toString()) {
      return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === "object") {
      if (Array.isArray(a)) {
        length = a.length;
        if (length !== b.length) return false;
        for (i = length; i-- !== 0; ) {
          if (!deepEqual(a[i], b[i])) {
            return false;
          }
        }
        return true;
      }
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b, keys[i])) {
          return false;
        }
      }
      for (i = length; i-- !== 0; ) {
        const key = keys[i];
        if (key === "_owner" && a.$$typeof) {
          continue;
        }
        if (!deepEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    return a !== a && b !== b;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref = React47.useRef(value);
    index(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform3,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options;
    const [data, setData] = React47.useState({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = React47.useState(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = React47.useState(null);
    const [_floating, _setFloating] = React47.useState(null);
    const setReference = React47.useCallback((node) => {
      if (node !== referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, []);
    const setFloating = React47.useCallback((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = React47.useRef(null);
    const floatingRef = React47.useRef(null);
    const dataRef = React47.useRef(data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform3);
    const openRef = useLatestRef(open);
    const update2 = React47.useCallback(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = {
          ...data2,
          // The floating element's position may be recomputed while it's closed
          // but still mounted (such as when transitioning out). To ensure
          // `isPositioned` will be `false` initially on the next open, avoid
          // setting it to `true` when `open === false` (must be specified).
          isPositioned: openRef.current !== false
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          ReactDOM3.flushSync(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef, openRef]);
    index(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => ({
          ...data2,
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = React47.useRef(false);
    index(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index(() => {
      if (referenceEl) referenceRef.current = referenceEl;
      if (floatingEl) floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
        }
        update2();
      }
    }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
    const refs = React47.useMemo(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = React47.useMemo(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = React47.useMemo(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x = roundByDPR(elements.floating, data.x);
      const y = roundByDPR(elements.floating, data.y);
      if (transform) {
        return {
          ...initialStyles,
          transform: "translate(" + x + "px, " + y + "px)",
          ...getDPR(elements.floating) >= 1.5 && {
            willChange: "transform"
          }
        };
      }
      return {
        position: strategy,
        left: x,
        top: y
      };
    }, [strategy, transform, elements.floating, data.x, data.y]);
    return React47.useMemo(() => ({
      ...data,
      update: update2,
      refs,
      elements,
      floatingStyles
    }), [data, update2, refs, elements, floatingStyles]);
  }
  var offset3 = (options, deps) => {
    const result = offset2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var shift3 = (options, deps) => {
    const result = shift2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var limitShift3 = (options, deps) => {
    const result = limitShift2(options);
    return {
      fn: result.fn,
      options: [options, deps]
    };
  };
  var flip3 = (options, deps) => {
    const result = flip2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var size3 = (options, deps) => {
    const result = size2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var hide3 = (options, deps) => {
    const result = hide2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };

  // node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
  init_define_import_meta_env();
  var React54 = __toESM(require_react_shim(), 1);
  var ReactDOM4 = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/utils/useOnFirstRender.mjs
  init_define_import_meta_env();
  var React48 = __toESM(require_react_shim(), 1);
  function useOnFirstRender(fn) {
    const ref = React48.useRef(true);
    if (ref.current) {
      ref.current = false;
      fn();
    }
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
  init_define_import_meta_env();
  var React53 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/store/createSelector.mjs
  init_define_import_meta_env();
  var createSelector = (a, b, c, d, e, f, ...other) => {
    if (other.length > 0) {
      throw new Error(true ? "Unsupported number of selectors" : formatErrorMessage_default(1));
    }
    let selector;
    if (a && b && c && d && e && f) {
      selector = (state, a1, a2, a3) => {
        const va = a(state, a1, a2, a3);
        const vb = b(state, a1, a2, a3);
        const vc = c(state, a1, a2, a3);
        const vd = d(state, a1, a2, a3);
        const ve = e(state, a1, a2, a3);
        return f(va, vb, vc, vd, ve, a1, a2, a3);
      };
    } else if (a && b && c && d && e) {
      selector = (state, a1, a2, a3) => {
        const va = a(state, a1, a2, a3);
        const vb = b(state, a1, a2, a3);
        const vc = c(state, a1, a2, a3);
        const vd = d(state, a1, a2, a3);
        return e(va, vb, vc, vd, a1, a2, a3);
      };
    } else if (a && b && c && d) {
      selector = (state, a1, a2, a3) => {
        const va = a(state, a1, a2, a3);
        const vb = b(state, a1, a2, a3);
        const vc = c(state, a1, a2, a3);
        return d(va, vb, vc, a1, a2, a3);
      };
    } else if (a && b && c) {
      selector = (state, a1, a2, a3) => {
        const va = a(state, a1, a2, a3);
        const vb = b(state, a1, a2, a3);
        return c(va, vb, a1, a2, a3);
      };
    } else if (a && b) {
      selector = (state, a1, a2, a3) => {
        const va = a(state, a1, a2, a3);
        return b(va, a1, a2, a3);
      };
    } else if (a) {
      selector = a;
    } else {
      throw (
        /* minify-error-disabled */
        new Error("Missing arguments")
      );
    }
    return selector;
  };

  // node_modules/@base-ui/utils/store/useStore.mjs
  init_define_import_meta_env();
  var React50 = __toESM(require_react_shim(), 1);
  var import_shim = __toESM(require_shim(), 1);
  var import_with_selector = __toESM(require_with_selector(), 1);

  // node_modules/@base-ui/utils/fastHooks.mjs
  init_define_import_meta_env();
  var React49 = __toESM(require_react_shim(), 1);
  var hooks = [];
  var currentInstance = void 0;
  function getInstance() {
    return currentInstance;
  }
  function register(hook) {
    hooks.push(hook);
  }
  function fastComponent(fn) {
    const FastComponent = (props, forwardedRef) => {
      const instance = useRefWithInit(createInstance).current;
      let result;
      try {
        currentInstance = instance;
        for (const hook of hooks) {
          hook.before(instance);
        }
        result = fn(props, forwardedRef);
        for (const hook of hooks) {
          hook.after(instance);
        }
        instance.didInitialize = true;
      } finally {
        currentInstance = void 0;
      }
      return result;
    };
    FastComponent.displayName = fn.displayName || fn.name;
    return FastComponent;
  }
  function fastComponentRef(fn) {
    return /* @__PURE__ */ React49.forwardRef(fastComponent(fn));
  }
  function createInstance() {
    return {
      didInitialize: false
    };
  }

  // node_modules/@base-ui/utils/store/useStore.mjs
  var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
  var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
  function useStore(store, selector, a1, a2, a3) {
    return useStoreImplementation(store, selector, a1, a2, a3);
  }
  function useStoreR19(store, selector, a1, a2, a3) {
    const getSelection = React50.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
    return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
  }
  register({
    before(instance) {
      instance.syncIndex = 0;
      if (!instance.didInitialize) {
        instance.syncTick = 1;
        instance.syncHooks = [];
        instance.didChangeStore = true;
        instance.getSnapshot = () => {
          let didChange2 = false;
          for (let i = 0; i < instance.syncHooks.length; i += 1) {
            const hook = instance.syncHooks[i];
            const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
            if (!Object.is(hook.value, value)) {
              didChange2 = true;
              hook.value = value;
            }
          }
          if (didChange2) {
            instance.syncTick += 1;
          }
          return instance.syncTick;
        };
      }
    },
    after(instance) {
      if (instance.syncHooks.length > 0) {
        if (instance.didChangeStore) {
          instance.didChangeStore = false;
          instance.subscribe = (onStoreChange) => {
            const stores = /* @__PURE__ */ new Set();
            for (const hook of instance.syncHooks) {
              stores.add(hook.store);
            }
            const unsubscribes = [];
            for (const store of stores) {
              unsubscribes.push(store.subscribe(onStoreChange));
            }
            return () => {
              for (const unsubscribe of unsubscribes) {
                unsubscribe();
              }
            };
          };
        }
        (0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
      }
    }
  });
  function useStoreFast(store, selector, a1, a2, a3) {
    const instance = getInstance();
    if (!instance) {
      return useStoreR19(store, selector, a1, a2, a3);
    }
    const index2 = instance.syncIndex;
    instance.syncIndex += 1;
    let hook;
    if (!instance.didInitialize) {
      hook = {
        store,
        selector,
        a1,
        a2,
        a3,
        value: selector(store.getSnapshot(), a1, a2, a3)
      };
      instance.syncHooks.push(hook);
    } else {
      hook = instance.syncHooks[index2];
      if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
        if (hook.store !== store) {
          instance.didChangeStore = true;
        }
        hook.store = store;
        hook.selector = selector;
        hook.a1 = a1;
        hook.a2 = a2;
        hook.a3 = a3;
        hook.value = selector(store.getSnapshot(), a1, a2, a3);
      }
    }
    return hook.value;
  }
  function useStoreLegacy(store, selector, a1, a2, a3) {
    return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
  }

  // node_modules/@base-ui/utils/store/Store.mjs
  init_define_import_meta_env();
  var Store = class {
    /**
     * The current state of the store.
     * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
     * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
     * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
     *
     * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
     */
    // Internal state to handle recursive `setState()` calls
    constructor(state) {
      /**
       * Registers a listener that will be called whenever the store's state changes.
       *
       * @param fn The listener function to be called on state changes.
       * @returns A function to unsubscribe the listener.
       */
      __publicField(this, "subscribe", (fn) => {
        this.listeners.add(fn);
        return () => {
          this.listeners.delete(fn);
        };
      });
      /**
       * Returns the current state of the store.
       */
      __publicField(this, "getSnapshot", () => {
        return this.state;
      });
      this.state = state;
      this.listeners = /* @__PURE__ */ new Set();
      this.updateTick = 0;
    }
    /**
     * Updates the entire store's state and notifies all registered listeners.
     *
     * @param newState The new state to set for the store.
     */
    setState(newState) {
      if (this.state === newState) {
        return;
      }
      this.state = newState;
      this.updateTick += 1;
      const currentTick = this.updateTick;
      for (const listener of this.listeners) {
        if (currentTick !== this.updateTick) {
          return;
        }
        listener(newState);
      }
    }
    /**
     * Merges the provided changes into the current state and notifies listeners if there are changes.
     *
     * @param changes An object containing the changes to apply to the current state.
     */
    update(changes) {
      for (const key in changes) {
        if (!Object.is(this.state[key], changes[key])) {
          this.setState({
            ...this.state,
            ...changes
          });
          return;
        }
      }
    }
    /**
     * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
     *
     * @param key The key in the store's state to update.
     * @param value The new value to set for the specified key.
     */
    set(key, value) {
      if (!Object.is(this.state[key], value)) {
        this.setState({
          ...this.state,
          [key]: value
        });
      }
    }
    /**
     * Gives the state a new reference and updates all registered listeners.
     */
    notifyAll() {
      const newState = {
        ...this.state
      };
      this.setState(newState);
    }
    use(selector, a1, a2, a3) {
      return useStore(this, selector, a1, a2, a3);
    }
  };

  // node_modules/@base-ui/utils/store/ReactStore.mjs
  init_define_import_meta_env();
  var React51 = __toESM(require_react_shim(), 1);
  var ReactStore = class extends Store {
    /**
     * Creates a new ReactStore instance.
     *
     * @param state Initial state of the store.
     * @param context Non-reactive context values.
     * @param selectors Optional selectors for use with `useState`.
     */
    constructor(state, context = {}, selectors7) {
      super(state);
      this.context = context;
      this.selectors = selectors7;
    }
    /**
     * Non-reactive values such as refs, callbacks, etc.
     */
    /**
     * Synchronizes a single external value into the store.
     *
     * Note that the while the value in `state` is updated immediately, the value returned
     * by `useState` is updated before the next render (similarly to React's `useState`).
     */
    useSyncedValue(key, value) {
      React51.useDebugValue(key);
      const store = this;
      useIsoLayoutEffect(() => {
        if (store.state[key] !== value) {
          store.set(key, value);
        }
      }, [store, key, value]);
    }
    /**
     * Synchronizes a single external value into the store and
     * cleans it up (sets to `undefined`) on unmount.
     *
     * Note that the while the value in `state` is updated immediately, the value returned
     * by `useState` is updated before the next render (similarly to React's `useState`).
     */
    useSyncedValueWithCleanup(key, value) {
      const store = this;
      useIsoLayoutEffect(() => {
        if (store.state[key] !== value) {
          store.set(key, value);
        }
        return () => {
          store.set(key, void 0);
        };
      }, [store, key, value]);
    }
    /**
     * Synchronizes multiple external values into the store.
     *
     * Note that the while the values in `state` are updated immediately, the values returned
     * by `useState` are updated before the next render (similarly to React's `useState`).
     */
    useSyncedValues(statePart) {
      const store = this;
      if (true) {
        React51.useDebugValue(statePart, (p) => Object.keys(p));
        const keys = React51.useRef(Object.keys(statePart)).current;
        const nextKeys = Object.keys(statePart);
        if (keys.length !== nextKeys.length || keys.some((key, index2) => key !== nextKeys[index2])) {
          console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
        }
      }
      const dependencies = Object.values(statePart);
      useIsoLayoutEffect(() => {
        store.update(statePart);
      }, [store, ...dependencies]);
    }
    /**
     * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
     * is non-undefined, the store's state at `key` is updated to match `controlled`.
     */
    useControlledProp(key, controlled) {
      React51.useDebugValue(key);
      const store = this;
      const isControlled = controlled !== void 0;
      useIsoLayoutEffect(() => {
        if (isControlled && !Object.is(store.state[key], controlled)) {
          store.setState({
            ...store.state,
            [key]: controlled
          });
        }
      }, [store, key, controlled, isControlled]);
      if (true) {
        const cache = this.controlledValues ?? (this.controlledValues = /* @__PURE__ */ new Map());
        if (!cache.has(key)) {
          cache.set(key, isControlled);
        }
        const previouslyControlled = cache.get(key);
        if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) {
          console.error(`A component is changing the ${isControlled ? "" : "un"}controlled state of ${key.toString()} to be ${isControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
        }
      }
    }
    /** Gets the current value from the store using a selector with the provided key.
     *
     * @param key Key of the selector to use.
     */
    select(key, a1, a2, a3) {
      const selector = this.selectors[key];
      return selector(this.state, a1, a2, a3);
    }
    /**
     * Returns a value from the store's state using a selector function.
     * Used to subscribe to specific parts of the state.
     * This methods causes a rerender whenever the selected state changes.
     *
     * @param key Key of the selector to use.
     */
    useState(key, a1, a2, a3) {
      React51.useDebugValue(key);
      return useStore(this, this.selectors[key], a1, a2, a3);
    }
    /**
     * Wraps a function with `useStableCallback` to ensure it has a stable reference
     * and assigns it to the context.
     *
     * @param key Key of the event callback. Must be a function in the context.
     * @param fn Function to assign.
     */
    useContextCallback(key, fn) {
      React51.useDebugValue(key);
      const stableFunction = useStableCallback(fn ?? NOOP);
      this.context[key] = stableFunction;
    }
    /**
     * Returns a stable setter function for a specific key in the store's state.
     * It's commonly used to pass as a ref callback to React elements.
     *
     * @param key Key of the state to set.
     */
    useStateSetter(key) {
      const ref = React51.useRef(void 0);
      if (ref.current === void 0) {
        ref.current = (value) => {
          this.set(key, value);
        };
      }
      return ref.current;
    }
    /**
     * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
     *
     * @param key Key of the selector to observe.
     * @param listener Listener function called when the selector result changes.
     */
    observe(selector, listener) {
      let selectFn;
      if (typeof selector === "function") {
        selectFn = selector;
      } else {
        selectFn = this.selectors[selector];
      }
      let prevValue = selectFn(this.state);
      listener(prevValue, prevValue, this);
      return this.subscribe((nextState) => {
        const nextValue = selectFn(nextState);
        if (!Object.is(prevValue, nextValue)) {
          const oldValue = prevValue;
          prevValue = nextValue;
          listener(nextValue, oldValue, this);
        }
      });
    }
  };

  // node_modules/@base-ui/utils/useForcedRerendering.mjs
  init_define_import_meta_env();
  var React52 = __toESM(require_react_shim(), 1);
  function useForcedRerendering() {
    const [, setState] = React52.useState({});
    return React52.useCallback(() => {
      setState({});
    }, []);
  }

  // node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
  var selectors = {
    open: createSelector((state) => state.open),
    transitionStatus: createSelector((state) => state.transitionStatus),
    domReferenceElement: createSelector((state) => state.domReferenceElement),
    referenceElement: createSelector((state) => state.positionReference ?? state.referenceElement),
    floatingElement: createSelector((state) => state.floatingElement),
    floatingId: createSelector((state) => state.floatingId)
  };
  var FloatingRootStore = class extends ReactStore {
    constructor(options) {
      const {
        syncOnly,
        nested,
        onOpenChange,
        triggerElements,
        ...initialState
      } = options;
      super({
        ...initialState,
        positionReference: initialState.referenceElement,
        domReferenceElement: initialState.referenceElement
      }, {
        onOpenChange,
        dataRef: {
          current: {}
        },
        events: createEventEmitter(),
        nested,
        triggerElements
      }, selectors);
      /**
       * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
       */
      __publicField(this, "syncOpenEvent", (newOpen, event) => {
        if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
        // click events to upgrade a hover-open.
        event != null && isClickLikeEvent(event)) {
          this.context.dataRef.current.openEvent = newOpen ? event : void 0;
        }
      });
      /**
       * Runs the root-owned side effects for an open state change.
       */
      __publicField(this, "dispatchOpenChange", (newOpen, eventDetails) => {
        this.syncOpenEvent(newOpen, eventDetails.event);
        const details = {
          open: newOpen,
          reason: eventDetails.reason,
          nativeEvent: eventDetails.event,
          nested: this.context.nested,
          triggerElement: eventDetails.trigger
        };
        this.context.events.emit("openchange", details);
      });
      /**
       * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
       *
       * @param newOpen The new open state.
       * @param eventDetails Details about the event that triggered the open state change.
       */
      __publicField(this, "setOpen", (newOpen, eventDetails) => {
        if (this.syncOnly) {
          this.context.onOpenChange?.(newOpen, eventDetails);
          return;
        }
        this.dispatchOpenChange(newOpen, eventDetails);
        this.context.onOpenChange?.(newOpen, eventDetails);
      });
      this.syncOnly = syncOnly;
    }
  };

  // node_modules/@base-ui/react/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
  function useSyncedFloatingRootContext(options) {
    const {
      popupStore,
      treatPopupAsFloatingElement = false,
      floatingRootContext: floatingRootContextProp,
      floatingId,
      nested,
      onOpenChange
    } = options;
    const open = popupStore.useState("open");
    const referenceElement = popupStore.useState("activeTriggerElement");
    const floatingElement = popupStore.useState(treatPopupAsFloatingElement ? "popupElement" : "positionerElement");
    const triggerElements = popupStore.context.triggerElements;
    const handleOpenChange = onOpenChange;
    const internalStoreRef = React53.useRef(null);
    if (floatingRootContextProp === void 0 && internalStoreRef.current === null) {
      internalStoreRef.current = new FloatingRootStore({
        open,
        transitionStatus: void 0,
        referenceElement,
        floatingElement,
        triggerElements,
        onOpenChange: handleOpenChange,
        floatingId,
        syncOnly: true,
        nested
      });
    }
    const store = floatingRootContextProp ?? internalStoreRef.current;
    popupStore.useSyncedValue("floatingId", floatingId);
    useIsoLayoutEffect(() => {
      const valuesToSync = {
        open,
        floatingId,
        referenceElement,
        floatingElement
      };
      if (isElement(referenceElement)) {
        valuesToSync.domReferenceElement = referenceElement;
      }
      if (store.state.positionReference === store.state.referenceElement) {
        valuesToSync.positionReference = referenceElement;
      }
      store.update(valuesToSync);
    }, [open, floatingId, referenceElement, floatingElement, store]);
    store.context.onOpenChange = handleOpenChange;
    store.context.nested = nested;
    return store;
  }

  // node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
  var FOCUSABLE_POPUP_PROPS = {
    tabIndex: -1,
    [FOCUSABLE_ATTRIBUTE]: ""
  };
  function createDefaultInitialFocus(popupRef) {
    return (interactionType) => interactionType === "touch" ? popupRef.current : true;
  }
  function usePopupStore(externalStore, createStore, treatPopupAsFloatingElement = false) {
    const floatingId = useId();
    const nested = useFloatingParentNodeId() != null;
    const internalStoreRef = React54.useRef(null);
    if (externalStore === void 0 && internalStoreRef.current === null) {
      internalStoreRef.current = createStore(floatingId, nested);
    }
    const store = externalStore ?? internalStoreRef.current;
    useSyncedFloatingRootContext({
      popupStore: store,
      treatPopupAsFloatingElement,
      floatingRootContext: store.state.floatingRootContext,
      floatingId,
      nested,
      onOpenChange: store.setOpen
    });
    return {
      store,
      internalStore: internalStoreRef.current
    };
  }
  function useTriggerRegistration(id, store) {
    const registeredElementIdRef = React54.useRef(null);
    const registeredElementRef = React54.useRef(null);
    return React54.useCallback((element) => {
      if (id === void 0) {
        return;
      }
      let shouldSyncTriggerCount = false;
      if (registeredElementIdRef.current !== null) {
        const registeredId = registeredElementIdRef.current;
        const registeredElement = registeredElementRef.current;
        const currentElement = store.context.triggerElements.getById(registeredId);
        if (registeredElement && currentElement === registeredElement) {
          store.context.triggerElements.delete(registeredId);
          shouldSyncTriggerCount = true;
        }
        registeredElementIdRef.current = null;
        registeredElementRef.current = null;
      }
      if (element !== null) {
        registeredElementIdRef.current = id;
        registeredElementRef.current = element;
        store.context.triggerElements.add(id, element);
        shouldSyncTriggerCount = true;
      }
      if (shouldSyncTriggerCount) {
        const triggerCount = store.context.triggerElements.size;
        if (store.select("open") && store.state.triggerCount !== triggerCount) {
          store.set("triggerCount", triggerCount);
        }
      }
    }, [store, id]);
  }
  function setPopupOpenState(state, open, trigger, preventUnmountOnClose = false) {
    if (open) {
      state.preventUnmountingOnClose = false;
    } else if (preventUnmountOnClose) {
      state.preventUnmountingOnClose = true;
    }
    const triggerId = trigger?.id ?? null;
    if (triggerId || open) {
      state.activeTriggerId = triggerId;
      state.activeTriggerElement = trigger ?? null;
    }
  }
  function attachPreventUnmountOnClose(eventDetails) {
    let preventUnmountOnClose = false;
    eventDetails.preventUnmountOnClose = () => {
      preventUnmountOnClose = true;
    };
    return () => preventUnmountOnClose;
  }
  function applyPopupOpenChange(store, nextOpen, eventDetails, options = {}) {
    const reason = eventDetails.reason;
    const isHover = reason === reason_parts_exports.triggerHover;
    const isFocusOpen = nextOpen && reason === reason_parts_exports.triggerFocus;
    const isDismissClose = !nextOpen && (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.escapeKey);
    const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
    store.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    options.onBeforeDispatch?.();
    store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    const changeState = () => {
      const updatedState = {
        ...options.extraState,
        open: nextOpen
      };
      if (isFocusOpen) {
        updatedState.instantType = "focus";
      } else if (isDismissClose) {
        updatedState.instantType = "dismiss";
      } else if (isHover) {
        updatedState.instantType = void 0;
      }
      setPopupOpenState(updatedState, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
      store.update(updatedState);
    };
    if (isHover) {
      ReactDOM4.flushSync(changeState);
    } else {
      changeState();
    }
  }
  function useInitialOpenSync(store, openProp, defaultOpen, defaultTriggerId) {
    useOnFirstRender(() => {
      if (openProp === void 0 && store.state.open === false && defaultOpen) {
        store.state = {
          ...store.state,
          open: true,
          activeTriggerId: defaultTriggerId,
          preventUnmountingOnClose: false
        };
      }
    });
  }
  function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
    const isMountedByThisTrigger = store.useState("isMountedByTrigger", triggerId);
    const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
    const registerTrigger = useStableCallback((element) => {
      baseRegisterTrigger(element);
      if (!element) {
        return;
      }
      const open = store.select("open");
      const activeTriggerId = store.select("activeTriggerId");
      if (activeTriggerId === triggerId) {
        store.update({
          activeTriggerElement: element,
          ...open ? stateUpdates : null
        });
        return;
      }
      if (activeTriggerId == null && open) {
        store.update({
          activeTriggerId: triggerId,
          activeTriggerElement: element,
          ...stateUpdates
        });
      }
    });
    useIsoLayoutEffect(() => {
      if (isMountedByThisTrigger) {
        store.update({
          activeTriggerElement: triggerElementRef.current,
          ...stateUpdates
        });
      }
    }, [isMountedByThisTrigger, store, triggerElementRef, ...Object.values(stateUpdates)]);
    return {
      registerTrigger,
      isMountedByThisTrigger
    };
  }
  function useImplicitActiveTrigger(store, options = {}) {
    const {
      closeOnActiveTriggerUnmount = false
    } = options;
    const open = store.useState("open");
    const reactiveTriggerCount = store.useState("triggerCount");
    useIsoLayoutEffect(() => {
      if (!open) {
        if (store.state.triggerCount !== 0) {
          store.set("triggerCount", 0);
        }
        return;
      }
      const triggerCount = store.context.triggerElements.size;
      const stateUpdates = {};
      if (store.state.triggerCount !== triggerCount) {
        stateUpdates.triggerCount = triggerCount;
      }
      const activeTriggerId = store.select("activeTriggerId");
      let lostActiveTriggerId = null;
      if (activeTriggerId) {
        const activeTriggerElement = store.context.triggerElements.getById(activeTriggerId);
        if (!activeTriggerElement) {
          lostActiveTriggerId = activeTriggerId;
        } else if (activeTriggerElement !== store.state.activeTriggerElement) {
          stateUpdates.activeTriggerElement = activeTriggerElement;
        }
      }
      if (!lostActiveTriggerId && !activeTriggerId && triggerCount === 1) {
        const iteratorResult = store.context.triggerElements.entries().next();
        if (!iteratorResult.done) {
          const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
          stateUpdates.activeTriggerId = implicitTriggerId;
          stateUpdates.activeTriggerElement = implicitTriggerElement;
        }
      }
      if (stateUpdates.triggerCount !== void 0 || stateUpdates.activeTriggerId !== void 0 || stateUpdates.activeTriggerElement !== void 0) {
        store.update(stateUpdates);
      }
      if (lostActiveTriggerId) {
        if (closeOnActiveTriggerUnmount) {
          queueMicrotask(() => {
            if (store.select("open") && store.select("activeTriggerId") === lostActiveTriggerId && !store.context.triggerElements.getById(lostActiveTriggerId)) {
              const eventDetails = createChangeEventDetails(reason_parts_exports.none);
              store.setOpen(false, eventDetails);
              if (!eventDetails.isCanceled) {
                store.update({
                  activeTriggerId: null,
                  activeTriggerElement: null
                });
              }
            }
          });
        }
      }
    }, [open, store, reactiveTriggerCount, closeOnActiveTriggerUnmount]);
  }
  function useOpenStateTransitions(open, store, onUnmount) {
    const {
      mounted,
      setMounted,
      transitionStatus
    } = useTransitionStatus(open);
    const preventUnmountingOnClose = store.useState("preventUnmountingOnClose");
    const syncedPreventUnmountingOnClose = open ? false : preventUnmountingOnClose;
    store.useSyncedValues({
      mounted,
      transitionStatus,
      preventUnmountingOnClose: syncedPreventUnmountingOnClose
    });
    const forceUnmount = useStableCallback(() => {
      setMounted(false);
      store.update({
        activeTriggerId: null,
        activeTriggerElement: null,
        mounted: false,
        preventUnmountingOnClose: false
      });
      onUnmount?.();
      store.context.onOpenChangeComplete?.(false);
    });
    useOpenChangeComplete({
      enabled: mounted && !open && !syncedPreventUnmountingOnClose,
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (!open) {
          forceUnmount();
        }
      }
    });
    return {
      forceUnmount,
      transitionStatus
    };
  }
  function usePopupInteractionProps(store, statePart) {
    store.useSyncedValues(statePart);
    useIsoLayoutEffect(() => () => {
      store.update({
        activeTriggerProps: EMPTY_OBJECT,
        inactiveTriggerProps: EMPTY_OBJECT,
        popupProps: EMPTY_OBJECT
      });
    }, [store]);
  }
  function usePopupRootSync(store, open) {
    useIsoLayoutEffect(() => {
      if (!open && store.state.openMethod !== null) {
        store.set("openMethod", null);
      }
    }, [open, store]);
    useIsoLayoutEffect(() => () => {
      if (store.state.openMethod !== null) {
        store.set("openMethod", null);
      }
    }, [store]);
  }

  // node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
  init_define_import_meta_env();
  var PopupTriggerMap = class {
    constructor() {
      this.elementsSet = /* @__PURE__ */ new Set();
      this.idMap = /* @__PURE__ */ new Map();
    }
    /**
     * Adds a trigger element with the given ID.
     *
     * Note: The provided element is assumed to not be registered under multiple IDs.
     */
    add(id, element) {
      const existingElement = this.idMap.get(id);
      if (existingElement === element) {
        return;
      }
      if (existingElement !== void 0) {
        this.elementsSet.delete(existingElement);
      }
      this.elementsSet.add(element);
      this.idMap.set(id, element);
      if (true) {
        if (this.elementsSet.size !== this.idMap.size) {
          throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
        }
      }
    }
    /**
     * Removes the trigger element with the given ID.
     */
    delete(id) {
      const element = this.idMap.get(id);
      if (element) {
        this.elementsSet.delete(element);
        this.idMap.delete(id);
      }
    }
    /**
     * Whether the given element is registered as a trigger.
     */
    hasElement(element) {
      return this.elementsSet.has(element);
    }
    /**
     * Whether there is a registered trigger element matching the given predicate.
     */
    hasMatchingElement(predicate) {
      for (const element of this.elementsSet) {
        if (predicate(element)) {
          return true;
        }
      }
      return false;
    }
    /**
     * Returns the trigger element associated with the given ID, or undefined if no such element exists.
     */
    getById(id) {
      return this.idMap.get(id);
    }
    /**
     * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
     */
    entries() {
      return this.idMap.entries();
    }
    /**
     * Returns an iterable of all registered trigger elements.
     */
    elements() {
      return this.elementsSet.values();
    }
    /**
     * Returns the number of registered trigger elements.
     */
    get size() {
      return this.idMap.size;
    }
  };

  // node_modules/@base-ui/react/utils/popups/store.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/utils/getEmptyRootContext.mjs
  init_define_import_meta_env();
  function getEmptyRootContext() {
    return new FloatingRootStore({
      open: false,
      transitionStatus: void 0,
      floatingElement: null,
      referenceElement: null,
      triggerElements: new PopupTriggerMap(),
      floatingId: void 0,
      syncOnly: false,
      nested: false,
      onOpenChange: void 0
    });
  }

  // node_modules/@base-ui/react/utils/popups/store.mjs
  function createInitialPopupStoreState() {
    return {
      open: false,
      openProp: void 0,
      mounted: false,
      transitionStatus: void 0,
      floatingRootContext: getEmptyRootContext(),
      floatingId: void 0,
      triggerCount: 0,
      preventUnmountingOnClose: false,
      payload: void 0,
      activeTriggerId: null,
      activeTriggerElement: null,
      triggerIdProp: void 0,
      popupElement: null,
      positionerElement: null,
      activeTriggerProps: EMPTY_OBJECT,
      inactiveTriggerProps: EMPTY_OBJECT,
      popupProps: EMPTY_OBJECT
    };
  }
  function createPopupFloatingRootContext(triggerElements, floatingId, nested = false) {
    return new FloatingRootStore({
      open: false,
      transitionStatus: void 0,
      floatingElement: null,
      referenceElement: null,
      triggerElements,
      floatingId,
      syncOnly: true,
      nested,
      onOpenChange: void 0
    });
  }
  var activeTriggerIdSelector = createSelector((state) => state.triggerIdProp ?? state.activeTriggerId);
  var openSelector = createSelector((state) => state.openProp ?? state.open);
  var popupIdSelector = createSelector((state) => {
    const popupId = state.popupElement?.id ?? state.floatingId;
    return popupId || void 0;
  });
  function triggerOwnsOpenPopup(state, triggerId) {
    return triggerId !== void 0 && openSelector(state) && activeTriggerIdSelector(state) === triggerId;
  }
  function triggerOwnsOpenPopupOrIsOnlyTrigger(state, triggerId) {
    if (triggerOwnsOpenPopup(state, triggerId)) {
      return true;
    }
    return triggerId !== void 0 && openSelector(state) && activeTriggerIdSelector(state) == null && state.triggerCount === 1;
  }
  var popupStoreSelectors = {
    open: openSelector,
    mounted: createSelector((state) => state.mounted),
    transitionStatus: createSelector((state) => state.transitionStatus),
    floatingRootContext: createSelector((state) => state.floatingRootContext),
    triggerCount: createSelector((state) => state.triggerCount),
    preventUnmountingOnClose: createSelector((state) => state.preventUnmountingOnClose),
    payload: createSelector((state) => state.payload),
    activeTriggerId: activeTriggerIdSelector,
    activeTriggerElement: createSelector((state) => state.mounted ? state.activeTriggerElement : null),
    popupId: popupIdSelector,
    /**
     * Whether the trigger with the given ID was used to open the popup.
     */
    isTriggerActive: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId),
    /**
     * Whether the popup is open and was activated by a trigger with the given ID.
     */
    isOpenedByTrigger: createSelector((state, triggerId) => triggerOwnsOpenPopup(state, triggerId)),
    /**
     * Whether the popup is mounted and was activated by a trigger with the given ID.
     */
    isMountedByTrigger: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.mounted),
    triggerProps: createSelector((state, isActive) => isActive ? state.activeTriggerProps : state.inactiveTriggerProps),
    /**
     * Popup id for the trigger that currently owns the open popup.
     */
    triggerPopupId: createSelector((state, triggerId) => triggerOwnsOpenPopupOrIsOnlyTrigger(state, triggerId) ? popupIdSelector(state) : void 0),
    popupProps: createSelector((state) => state.popupProps),
    popupElement: createSelector((state) => state.popupElement),
    positionerElement: createSelector((state) => state.positionerElement)
  };

  // node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
  function useFloatingRootContext(options) {
    const {
      open = false,
      onOpenChange,
      elements = {}
    } = options;
    const floatingId = useId();
    const nested = useFloatingParentNodeId() != null;
    if (true) {
      const optionDomReference = elements.reference;
      if (optionDomReference && !isElement(optionDomReference)) {
        console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
      }
    }
    const store = useRefWithInit(() => new FloatingRootStore({
      open,
      transitionStatus: void 0,
      onOpenChange,
      referenceElement: elements.reference ?? null,
      floatingElement: elements.floating ?? null,
      triggerElements: new PopupTriggerMap(),
      floatingId,
      syncOnly: false,
      nested
    })).current;
    useIsoLayoutEffect(() => {
      const valuesToSync = {
        open,
        floatingId
      };
      if (elements.reference !== void 0) {
        valuesToSync.referenceElement = elements.reference;
        valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
      }
      if (elements.floating !== void 0) {
        valuesToSync.floatingElement = elements.floating;
      }
      store.update(valuesToSync);
    }, [open, floatingId, elements.reference, elements.floating, store]);
    store.context.onOpenChange = onOpenChange;
    store.context.nested = nested;
    return store;
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
  function useFloating2(options = {}) {
    const {
      nodeId,
      externalTree
    } = options;
    const internalStore = useFloatingRootContext(options);
    const store = options.rootContext || internalStore;
    const referenceElement = store.useState("referenceElement");
    const floatingElement = store.useState("floatingElement");
    const domReferenceElement = store.useState("domReferenceElement");
    const open = store.useState("open");
    const floatingId = store.useState("floatingId");
    const [positionReference, setPositionReferenceRaw] = React55.useState(null);
    const [localDomReference, setLocalDomReference] = React55.useState(void 0);
    const [localFloatingElement, setLocalFloatingElement] = React55.useState(void 0);
    const domReferenceRef = React55.useRef(null);
    const tree = useFloatingTree(externalTree);
    const storeElements = React55.useMemo(() => ({
      reference: referenceElement,
      floating: floatingElement,
      domReference: domReferenceElement
    }), [referenceElement, floatingElement, domReferenceElement]);
    const position = useFloating({
      ...options,
      elements: {
        ...storeElements,
        ...positionReference && {
          reference: positionReference
        }
      }
    });
    const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
    const syncedFloatingElement = localFloatingElement === void 0 ? store.state.floatingElement : localFloatingElement;
    store.useSyncedValue("referenceElement", localDomReference ?? null);
    store.useSyncedValue("domReferenceElement", localDomReference === void 0 ? domReferenceElement : localDomReferenceElement);
    store.useSyncedValue("floatingElement", syncedFloatingElement);
    const setPositionReference = React55.useCallback((node) => {
      const computedPositionReference = isElement(node) ? {
        getBoundingClientRect: () => node.getBoundingClientRect(),
        getClientRects: () => node.getClientRects(),
        contextElement: node
      } : node;
      setPositionReferenceRaw(computedPositionReference);
      position.refs.setReference(computedPositionReference);
    }, [position.refs]);
    const setReference = React55.useCallback((node) => {
      if (isElement(node) || node === null) {
        domReferenceRef.current = node;
        setLocalDomReference(node);
      }
      if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
      // `null` to support `positionReference` + an unstable `reference`
      // callback ref.
      node !== null && !isElement(node)) {
        position.refs.setReference(node);
      }
    }, [position.refs, setLocalDomReference]);
    const setFloating = React55.useCallback((node) => {
      setLocalFloatingElement(node);
      position.refs.setFloating(node);
    }, [position.refs]);
    const refs = React55.useMemo(() => ({
      ...position.refs,
      setReference,
      setFloating,
      setPositionReference,
      domReference: domReferenceRef
    }), [position.refs, setReference, setFloating, setPositionReference]);
    const elements = React55.useMemo(() => ({
      ...position.elements,
      domReference: domReferenceElement
    }), [position.elements, domReferenceElement]);
    const context = React55.useMemo(() => ({
      ...position,
      dataRef: store.context.dataRef,
      open,
      onOpenChange: store.setOpen,
      events: store.context.events,
      floatingId,
      refs,
      elements,
      nodeId,
      rootStore: store
    }), [position, refs, elements, nodeId, store, open, floatingId]);
    useIsoLayoutEffect(() => {
      if (domReferenceElement) {
        domReferenceRef.current = domReferenceElement;
      }
    }, [domReferenceElement]);
    useIsoLayoutEffect(() => {
      store.context.dataRef.current.floatingContext = context;
      const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
      if (node) {
        node.context = context;
      }
    });
    return React55.useMemo(() => ({
      ...position,
      context,
      refs,
      elements,
      rootStore: store
    }), [position, refs, elements, context, store]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useFocus.mjs
  init_define_import_meta_env();
  var React56 = __toESM(require_react_shim(), 1);
  var isMacSafari = parts_exports.os.mac && parts_exports.engine.webkit;
  function useFocus(context, props = {}) {
    const {
      enabled = true,
      delay
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const {
      events,
      dataRef
    } = store.context;
    const blockFocusRef = React56.useRef(false);
    const blockedReferenceRef = React56.useRef(null);
    const keyboardModalityRef = React56.useRef(true);
    const timeout = useTimeout();
    React56.useEffect(() => {
      const domReference = store.select("domReferenceElement");
      if (!enabled) {
        return void 0;
      }
      const win = getWindow(domReference);
      function onBlur() {
        const currentDomReference = store.select("domReferenceElement");
        if (!store.select("open") && isHTMLElement(currentDomReference) && currentDomReference === activeElement(ownerDocument(currentDomReference))) {
          blockFocusRef.current = true;
        }
      }
      function onKeyDown() {
        keyboardModalityRef.current = true;
      }
      function onPointerDown() {
        keyboardModalityRef.current = false;
      }
      return mergeCleanups(addEventListener(win, "blur", onBlur), isMacSafari && addEventListener(win, "keydown", onKeyDown, true), isMacSafari && addEventListener(win, "pointerdown", onPointerDown, true));
    }, [store, enabled]);
    React56.useEffect(() => {
      if (!enabled) {
        return void 0;
      }
      function onOpenChangeLocal(details) {
        if (details.reason === reason_parts_exports.triggerPress || details.reason === reason_parts_exports.escapeKey) {
          const referenceElement = store.select("domReferenceElement");
          if (isElement(referenceElement)) {
            blockedReferenceRef.current = referenceElement;
            blockFocusRef.current = true;
          }
        }
      }
      events.on("openchange", onOpenChangeLocal);
      return () => {
        events.off("openchange", onOpenChangeLocal);
      };
    }, [events, enabled, store]);
    const reference = React56.useMemo(() => {
      function resetBlockedFocus() {
        blockFocusRef.current = false;
        blockedReferenceRef.current = null;
      }
      return {
        onMouseLeave() {
          resetBlockedFocus();
        },
        onFocus(event) {
          const focusTarget = event.currentTarget;
          if (blockFocusRef.current) {
            if (blockedReferenceRef.current === focusTarget) {
              return;
            }
            resetBlockedFocus();
          }
          const target = getTarget(event.nativeEvent);
          if (isElement(target)) {
            if (isMacSafari && !event.relatedTarget) {
              if (!keyboardModalityRef.current && !isTypeableElement(target)) {
                return;
              }
            } else if (!matchesFocusVisible(target)) {
              return;
            }
          }
          const movedFromOtherEnabledTrigger = isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements);
          const {
            nativeEvent,
            currentTarget
          } = event;
          const delayValue = typeof delay === "function" ? delay() : delay;
          if (store.select("open") && movedFromOtherEnabledTrigger || delayValue === 0 || delayValue === void 0) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent, currentTarget));
            return;
          }
          timeout.start(delayValue, () => {
            if (blockFocusRef.current) {
              return;
            }
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent, currentTarget));
          });
        },
        onBlur(event) {
          resetBlockedFocus();
          const relatedTarget = event.relatedTarget;
          const nativeEvent = event.nativeEvent;
          const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
          timeout.start(0, () => {
            const domReference = store.select("domReferenceElement");
            const activeEl = activeElement(ownerDocument(domReference));
            if (!relatedTarget && activeEl === domReference) {
              return;
            }
            if (contains(dataRef.current.floatingContext?.refs.floating.current, activeEl) || contains(domReference, activeEl) || movedToFocusGuard) {
              return;
            }
            const nextFocusedElement = relatedTarget ?? activeEl;
            if (isTargetInsideEnabledTrigger(nextFocusedElement, store.context.triggerElements)) {
              return;
            }
            store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent));
          });
        }
      };
    }, [dataRef, delay, store, timeout]);
    return React56.useMemo(() => enabled ? {
      reference,
      trigger: reference
    } : {}, [enabled, reference]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useHoverFloatingInteraction.mjs
  init_define_import_meta_env();
  var React57 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/floating-ui-react/hooks/useHoverInteractionSharedState.mjs
  init_define_import_meta_env();
  var HoverInteraction = class _HoverInteraction {
    constructor() {
      __publicField(this, "dispose", () => {
        this.openChangeTimeout.clear();
        this.restTimeout.clear();
      });
      __publicField(this, "disposeEffect", () => {
        return this.dispose;
      });
      this.pointerType = void 0;
      this.interactedInside = false;
      this.handler = void 0;
      this.blockMouseMove = true;
      this.performedPointerEventsMutation = false;
      this.pointerEventsScopeElement = null;
      this.pointerEventsReferenceElement = null;
      this.pointerEventsFloatingElement = null;
      this.restTimeoutPending = false;
      this.openChangeTimeout = new Timeout();
      this.restTimeout = new Timeout();
      this.handleCloseOptions = void 0;
    }
    static create() {
      return new _HoverInteraction();
    }
  };
  var pointerEventsMutationOwnerByScopeElement = /* @__PURE__ */ new WeakMap();
  function clearSafePolygonPointerEventsMutation(instance) {
    if (!instance.performedPointerEventsMutation) {
      return;
    }
    const scopeElement = instance.pointerEventsScopeElement;
    if (scopeElement && pointerEventsMutationOwnerByScopeElement.get(scopeElement) === instance) {
      instance.pointerEventsScopeElement?.style.removeProperty("pointer-events");
      instance.pointerEventsReferenceElement?.style.removeProperty("pointer-events");
      instance.pointerEventsFloatingElement?.style.removeProperty("pointer-events");
      pointerEventsMutationOwnerByScopeElement.delete(scopeElement);
    }
    instance.performedPointerEventsMutation = false;
    instance.pointerEventsScopeElement = null;
    instance.pointerEventsReferenceElement = null;
    instance.pointerEventsFloatingElement = null;
  }
  function applySafePolygonPointerEventsMutation(instance, options) {
    const {
      scopeElement,
      referenceElement,
      floatingElement
    } = options;
    const existingOwner = pointerEventsMutationOwnerByScopeElement.get(scopeElement);
    if (existingOwner && existingOwner !== instance) {
      clearSafePolygonPointerEventsMutation(existingOwner);
    }
    clearSafePolygonPointerEventsMutation(instance);
    instance.performedPointerEventsMutation = true;
    instance.pointerEventsScopeElement = scopeElement;
    instance.pointerEventsReferenceElement = referenceElement;
    instance.pointerEventsFloatingElement = floatingElement;
    pointerEventsMutationOwnerByScopeElement.set(scopeElement, instance);
    scopeElement.style.pointerEvents = "none";
    referenceElement.style.pointerEvents = "auto";
    floatingElement.style.pointerEvents = "auto";
  }
  function useHoverInteractionSharedState(store) {
    const data = store.context.dataRef.current;
    const instance = useRefWithInit(() => data.hoverInteractionState ?? HoverInteraction.create()).current;
    if (!data.hoverInteractionState) {
      data.hoverInteractionState = instance;
    }
    useOnMount(data.hoverInteractionState.disposeEffect);
    return data.hoverInteractionState;
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useHoverFloatingInteraction.mjs
  function useHoverFloatingInteraction(context, parameters = {}) {
    const {
      enabled = true,
      closeDelay: closeDelayProp = 0,
      nodeId: nodeIdProp
    } = parameters;
    const store = "rootStore" in context ? context.rootStore : context;
    const open = store.useState("open");
    const floatingElement = store.useState("floatingElement");
    const domReferenceElement = store.useState("domReferenceElement");
    const {
      dataRef
    } = store.context;
    const tree = useFloatingTree();
    const parentId = useFloatingParentNodeId();
    const instance = useHoverInteractionSharedState(store);
    const childClosedTimeout = useTimeout();
    const isClickLikeOpenEvent2 = useStableCallback(() => {
      return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
    });
    const isHoverOpen = useStableCallback(() => {
      return isHoverOpenEvent(dataRef.current.openEvent?.type);
    });
    const clearPointerEvents = useStableCallback(() => {
      clearSafePolygonPointerEventsMutation(instance);
    });
    useIsoLayoutEffect(() => {
      if (!open) {
        instance.pointerType = void 0;
        instance.restTimeoutPending = false;
        instance.interactedInside = false;
        clearPointerEvents();
      }
    }, [open, instance, clearPointerEvents]);
    React57.useEffect(() => {
      return clearPointerEvents;
    }, [clearPointerEvents]);
    useIsoLayoutEffect(() => {
      if (!enabled) {
        return void 0;
      }
      if (open && instance.handleCloseOptions?.blockPointerEvents && isHoverOpen() && isElement(domReferenceElement) && floatingElement) {
        const ref = domReferenceElement;
        const floatingEl = floatingElement;
        const doc = ownerDocument(floatingElement);
        const parentFloating = tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        const cachedScopeElement = instance.pointerEventsScopeElement !== floatingEl ? instance.pointerEventsScopeElement : null;
        const parentScopeElement = parentFloating !== floatingEl ? parentFloating : null;
        const scopeElement = instance.handleCloseOptions?.getScope?.() ?? cachedScopeElement ?? parentScopeElement ?? ref.closest("[data-rootownerid]") ?? doc.body;
        applySafePolygonPointerEventsMutation(instance, {
          scopeElement,
          referenceElement: ref,
          floatingElement: floatingEl
        });
        return () => {
          clearPointerEvents();
        };
      }
      return void 0;
    }, [enabled, open, domReferenceElement, floatingElement, instance, isHoverOpen, tree, parentId, clearPointerEvents]);
    React57.useEffect(() => {
      if (!enabled) {
        return void 0;
      }
      function hasParentChildren() {
        return !!(tree && parentId && getNodeChildren(tree.nodesRef.current, parentId).length > 0);
      }
      function closeWithDelay(event) {
        const closeDelay = getDelay(closeDelayProp, "close", instance.pointerType);
        const close = () => {
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
          tree?.events.emit("floating.closed", event);
        };
        if (closeDelay) {
          instance.openChangeTimeout.start(closeDelay, close);
        } else {
          instance.openChangeTimeout.clear();
          close();
        }
      }
      function handleInteractInside(event) {
        const target = getTarget(event);
        if (!isInteractiveElement(target)) {
          instance.interactedInside = false;
          return;
        }
        instance.interactedInside = target?.closest("[aria-haspopup]") != null;
      }
      function onFloatingMouseEnter() {
        instance.openChangeTimeout.clear();
        childClosedTimeout.clear();
        tree?.events.off("floating.closed", onNodeClosed);
        clearPointerEvents();
      }
      function onFloatingMouseLeave(event) {
        if (hasParentChildren() && tree) {
          tree.events.on("floating.closed", onNodeClosed);
          return;
        }
        if (isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements)) {
          return;
        }
        const currentNodeId = dataRef.current.floatingContext?.nodeId ?? nodeIdProp;
        const relatedTarget = event.relatedTarget;
        const isMovingIntoDescendantFloating = tree && currentNodeId && isElement(relatedTarget) && getNodeChildren(tree.nodesRef.current, currentNodeId, false).some((node) => contains(node.context?.elements.floating, relatedTarget));
        if (isMovingIntoDescendantFloating) {
          return;
        }
        if (instance.handler) {
          instance.handler(event);
          return;
        }
        clearPointerEvents();
        if (isHoverOpen() && !isClickLikeOpenEvent2()) {
          closeWithDelay(event);
        }
      }
      function onNodeClosed(event) {
        if (!tree || !parentId || hasParentChildren()) {
          return;
        }
        childClosedTimeout.start(0, () => {
          tree.events.off("floating.closed", onNodeClosed);
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
          tree.events.emit("floating.closed", event);
        });
      }
      const floating = floatingElement;
      return mergeCleanups(floating && addEventListener(floating, "mouseenter", onFloatingMouseEnter), floating && addEventListener(floating, "mouseleave", onFloatingMouseLeave), floating && addEventListener(floating, "pointerdown", handleInteractInside, true), () => {
        tree?.events.off("floating.closed", onNodeClosed);
      });
    }, [enabled, floatingElement, store, dataRef, closeDelayProp, nodeIdProp, isHoverOpen, isClickLikeOpenEvent2, clearPointerEvents, instance, tree, parentId, childClosedTimeout]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useHoverReferenceInteraction.mjs
  init_define_import_meta_env();
  var React58 = __toESM(require_react_shim(), 1);
  var ReactDOM5 = __toESM(require_react_dom_shim(), 1);
  var EMPTY_REF = {
    current: null
  };
  function useHoverReferenceInteraction(context, props = {}) {
    const {
      enabled = true,
      delay = 0,
      handleClose = null,
      mouseOnly = false,
      restMs = 0,
      move = true,
      triggerElementRef = EMPTY_REF,
      externalTree,
      isActiveTrigger = true,
      getHandleCloseContext,
      isClosing,
      shouldOpen: shouldOpenProp
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const {
      dataRef,
      events
    } = store.context;
    const tree = useFloatingTree(externalTree);
    const instance = useHoverInteractionSharedState(store);
    const isHoverCloseActiveRef = React58.useRef(false);
    const handleCloseRef = useValueAsRef(handleClose);
    const delayRef = useValueAsRef(delay);
    const restMsRef = useValueAsRef(restMs);
    const enabledRef = useValueAsRef(enabled);
    const shouldOpenRef = useValueAsRef(shouldOpenProp);
    const isClosingRef = useValueAsRef(isClosing);
    const isClickLikeOpenEvent2 = useStableCallback(() => {
      return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
    });
    const checkShouldOpen = useStableCallback(() => {
      return shouldOpenRef.current?.() !== false;
    });
    const isOverInactiveTrigger = useStableCallback((currentDomReference, currentTarget, target) => {
      const allTriggers = store.context.triggerElements;
      if (allTriggers.hasElement(currentTarget)) {
        return !currentDomReference || !contains(currentDomReference, currentTarget);
      }
      if (!isElement(target)) {
        return false;
      }
      const targetElement = target;
      return allTriggers.hasMatchingElement((trigger) => contains(trigger, targetElement)) && (!currentDomReference || !contains(currentDomReference, targetElement));
    });
    const cleanupMouseMoveHandler = useStableCallback(() => {
      if (!instance.handler) {
        return;
      }
      const doc = ownerDocument(store.select("domReferenceElement"));
      doc.removeEventListener("mousemove", instance.handler);
      instance.handler = void 0;
    });
    const clearPointerEvents = useStableCallback(() => {
      clearSafePolygonPointerEventsMutation(instance);
    });
    if (isActiveTrigger) {
      instance.handleCloseOptions = handleCloseRef.current?.__options;
    }
    React58.useEffect(() => cleanupMouseMoveHandler, [cleanupMouseMoveHandler]);
    React58.useEffect(() => {
      if (!enabled) {
        return void 0;
      }
      function onOpenChangeLocal(details) {
        if (!details.open) {
          isHoverCloseActiveRef.current = details.reason === reason_parts_exports.triggerHover;
          cleanupMouseMoveHandler();
          instance.openChangeTimeout.clear();
          instance.restTimeout.clear();
          instance.blockMouseMove = true;
          instance.restTimeoutPending = false;
        } else {
          isHoverCloseActiveRef.current = false;
        }
      }
      events.on("openchange", onOpenChangeLocal);
      return () => {
        events.off("openchange", onOpenChangeLocal);
      };
    }, [enabled, events, instance, cleanupMouseMoveHandler]);
    React58.useEffect(() => {
      if (!enabled) {
        return void 0;
      }
      function closeWithDelay(event, runElseBranch = true) {
        const closeDelay = getDelay(delayRef.current, "close", instance.pointerType);
        if (closeDelay) {
          instance.openChangeTimeout.start(closeDelay, () => {
            store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
            tree?.events.emit("floating.closed", event);
          });
        } else if (runElseBranch) {
          instance.openChangeTimeout.clear();
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
          tree?.events.emit("floating.closed", event);
        }
      }
      const trigger = triggerElementRef.current ?? (isActiveTrigger ? store.select("domReferenceElement") : null);
      if (!isElement(trigger)) {
        return void 0;
      }
      function onMouseEnter(event) {
        instance.openChangeTimeout.clear();
        instance.blockMouseMove = false;
        if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
          return;
        }
        const restMsValue = getRestMs(restMsRef.current);
        const openDelay = getDelay(delayRef.current, "open", instance.pointerType);
        const eventTarget = getTarget(event);
        const currentTarget = event.currentTarget ?? null;
        const currentDomReference = store.select("domReferenceElement");
        let triggerNode = currentTarget;
        if (isElement(eventTarget) && !store.context.triggerElements.hasElement(eventTarget)) {
          for (const triggerElement of store.context.triggerElements.elements()) {
            if (contains(triggerElement, eventTarget)) {
              triggerNode = triggerElement;
              break;
            }
          }
        }
        if (isElement(currentTarget) && isElement(currentDomReference) && !store.context.triggerElements.hasElement(currentTarget) && contains(currentTarget, currentDomReference)) {
          triggerNode = currentDomReference;
        }
        const isOverInactive = triggerNode == null ? false : isOverInactiveTrigger(currentDomReference, triggerNode, eventTarget);
        const isOpen = store.select("open");
        const isInClosingTransition = isClosingRef.current?.() ?? store.select("transitionStatus") === "ending";
        const isHoverCloseTransition = !isOpen && isInClosingTransition && isHoverCloseActiveRef.current;
        const isReenteringSameTriggerDuringCloseTransition = !isOverInactive && isElement(triggerNode) && isElement(currentDomReference) && contains(currentDomReference, triggerNode) && isHoverCloseTransition;
        const isRestOnlyDelay = restMsValue > 0 && !openDelay;
        const shouldOpenImmediately = isOverInactive && (isOpen || isHoverCloseTransition) || isReenteringSameTriggerDuringCloseTransition;
        const shouldOpen = !isOpen || isOverInactive;
        if (shouldOpenImmediately) {
          if (checkShouldOpen()) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
          }
          return;
        }
        if (isRestOnlyDelay) {
          return;
        }
        if (openDelay) {
          instance.openChangeTimeout.start(openDelay, () => {
            if (shouldOpen && checkShouldOpen()) {
              store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
            }
          });
        } else if (shouldOpen) {
          if (checkShouldOpen()) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
          }
        }
      }
      function onMouseLeave(event) {
        if (isClickLikeOpenEvent2()) {
          clearPointerEvents();
          return;
        }
        cleanupMouseMoveHandler();
        const domReferenceElement = store.select("domReferenceElement");
        const doc = ownerDocument(domReferenceElement);
        instance.restTimeout.clear();
        instance.restTimeoutPending = false;
        const handleCloseContextBase = dataRef.current.floatingContext ?? getHandleCloseContext?.();
        if (isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements)) {
          return;
        }
        if (handleCloseRef.current && handleCloseContextBase) {
          if (!store.select("open")) {
            instance.openChangeTimeout.clear();
          }
          const currentTrigger = triggerElementRef.current;
          instance.handler = handleCloseRef.current({
            ...handleCloseContextBase,
            tree,
            x: event.clientX,
            y: event.clientY,
            onClose() {
              clearPointerEvents();
              cleanupMouseMoveHandler();
              if (enabledRef.current && !isClickLikeOpenEvent2() && currentTrigger === store.select("domReferenceElement")) {
                closeWithDelay(event, true);
              }
            }
          });
          doc.addEventListener("mousemove", instance.handler);
          instance.handler(event);
          return;
        }
        const shouldClose = instance.pointerType === "touch" ? !contains(store.select("floatingElement"), event.relatedTarget) : true;
        if (shouldClose) {
          closeWithDelay(event);
        }
      }
      if (move) {
        return mergeCleanups(addEventListener(trigger, "mousemove", onMouseEnter, {
          once: true
        }), addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
      }
      return mergeCleanups(addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
    }, [cleanupMouseMoveHandler, clearPointerEvents, dataRef, delayRef, store, enabled, handleCloseRef, instance, isActiveTrigger, isOverInactiveTrigger, isClickLikeOpenEvent2, mouseOnly, move, restMsRef, triggerElementRef, tree, enabledRef, getHandleCloseContext, isClosingRef, checkShouldOpen]);
    return React58.useMemo(() => {
      if (!enabled) {
        return void 0;
      }
      function setPointerRef(event) {
        instance.pointerType = event.pointerType;
      }
      return {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove(event) {
          const {
            nativeEvent
          } = event;
          const trigger = event.currentTarget;
          const currentDomReference = store.select("domReferenceElement");
          const currentOpen = store.select("open");
          const isOverInactive = isOverInactiveTrigger(currentDomReference, trigger, event.target);
          if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
            return;
          }
          if (currentOpen && isOverInactive && instance.handleCloseOptions?.blockPointerEvents) {
            const floatingElement = store.select("floatingElement");
            if (floatingElement) {
              const scopeElement = instance.handleCloseOptions?.getScope?.() ?? trigger.ownerDocument.body;
              applySafePolygonPointerEventsMutation(instance, {
                scopeElement,
                referenceElement: trigger,
                floatingElement
              });
            }
          }
          const restMsValue = getRestMs(restMsRef.current);
          if (currentOpen && !isOverInactive || restMsValue === 0) {
            return;
          }
          if (!isOverInactive && instance.restTimeoutPending && event.movementX ** 2 + event.movementY ** 2 < 2) {
            return;
          }
          instance.restTimeout.clear();
          function handleMouseMove() {
            instance.restTimeoutPending = false;
            if (isClickLikeOpenEvent2()) {
              return;
            }
            const latestOpen = store.select("open");
            if (!instance.blockMouseMove && (!latestOpen || isOverInactive) && checkShouldOpen()) {
              store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, nativeEvent, trigger));
            }
          }
          if (instance.pointerType === "touch") {
            ReactDOM5.flushSync(() => {
              handleMouseMove();
            });
          } else if (isOverInactive && currentOpen) {
            handleMouseMove();
          } else {
            instance.restTimeoutPending = true;
            instance.restTimeout.start(restMsValue, handleMouseMove);
          }
        }
      };
    }, [enabled, instance, isClickLikeOpenEvent2, isOverInactiveTrigger, mouseOnly, store, restMsRef, checkShouldOpen]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
  init_define_import_meta_env();
  var React59 = __toESM(require_react_shim(), 1);
  var ESCAPE = "Escape";
  function doSwitch(orientation, vertical, horizontal) {
    switch (orientation) {
      case "vertical":
        return vertical;
      case "horizontal":
        return horizontal;
      default:
        return vertical || horizontal;
    }
  }
  function isMainOrientationKey(key, orientation) {
    const vertical = key === ARROW_UP || key === ARROW_DOWN;
    const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
    return doSwitch(orientation, vertical, horizontal);
  }
  function isMainOrientationToEndKey(key, orientation, rtl) {
    const vertical = key === ARROW_DOWN;
    const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
    return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
  }
  function isCrossOrientationOpenKey(key, orientation, rtl) {
    const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
    const horizontal = key === ARROW_DOWN;
    return doSwitch(orientation, vertical, horizontal);
  }
  function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
    const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
    const horizontal = key === ARROW_UP;
    if (orientation === "both" || orientation === "horizontal" && grid) {
      return key === ESCAPE;
    }
    return doSwitch(orientation, vertical, horizontal);
  }
  function useListNavigation(context, props) {
    const {
      listRef,
      activeIndex,
      onNavigate: onNavigateProp = () => {
      },
      enabled = true,
      selectedIndex = null,
      allowEscape = false,
      loopFocus = false,
      nested = false,
      rtl = false,
      virtual = false,
      focusItemOnOpen = "auto",
      focusItemOnHover = true,
      openOnArrowKeyDown = true,
      disabledIndices = void 0,
      orientation = "vertical",
      parentOrientation,
      id,
      resetOnPointerLeave = true,
      externalTree,
      grid: navigateGrid
    } = props;
    const isGrid = navigateGrid != null;
    if (true) {
      if (allowEscape) {
        if (!loopFocus) {
          console.warn("`useListNavigation` looping must be enabled to allow escaping.");
        }
        if (!virtual) {
          console.warn("`useListNavigation` must be virtual to allow escaping.");
        }
      }
      if (orientation === "vertical" && isGrid) {
        console.warn("In grid list navigation mode, the `orientation` should", 'be either "horizontal" or "both".');
      }
    }
    const store = "rootStore" in context ? context.rootStore : context;
    const open = store.useState("open");
    const floatingElement = store.useState("floatingElement");
    const domReferenceElement = store.useState("domReferenceElement");
    const dataRef = store.context.dataRef;
    const floatingFocusElement = getFloatingFocusElement(floatingElement);
    const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
    const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
    const parentId = useFloatingParentNodeId();
    const tree = useFloatingTree(externalTree);
    const focusItemOnOpenRef = React59.useRef(focusItemOnOpen);
    const indexRef = React59.useRef(selectedIndex ?? -1);
    const keyRef = React59.useRef(null);
    const isPointerModalityRef = React59.useRef(true);
    const onNavigate = useStableCallback((event) => {
      onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
    });
    const previousMountedRef = React59.useRef(!!floatingElement);
    const previousOpenRef = React59.useRef(open);
    const forceSyncFocusRef = React59.useRef(false);
    const forceScrollIntoViewRef = React59.useRef(false);
    const cancelQueuedFocusRef = React59.useRef(null);
    const disabledIndicesRef = useValueAsRef(disabledIndices);
    const latestOpenRef = useValueAsRef(open);
    const selectedIndexRef = useValueAsRef(selectedIndex);
    const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
    const focusFrame = useAnimationFrame();
    const waitForListPopulatedFrame = useAnimationFrame();
    const focusItem = useStableCallback(() => {
      function runFocus(item2) {
        if (virtual) {
          tree?.events.emit("virtualfocus", item2);
        } else {
          cancelQueuedFocusRef.current = enqueueFocus(item2, {
            sync: forceSyncFocusRef.current,
            preventScroll: true
          });
        }
      }
      const initialItem = listRef.current[indexRef.current];
      const forceScrollIntoView = forceScrollIntoViewRef.current;
      if (initialItem) {
        runFocus(initialItem);
      }
      const scheduler2 = forceSyncFocusRef.current ? (callback) => callback() : (callback) => focusFrame.request(callback);
      scheduler2(() => {
        const waitedItem = listRef.current[indexRef.current] || initialItem;
        if (!waitedItem) {
          return;
        }
        if (!initialItem) {
          runFocus(waitedItem);
        }
        const shouldScrollIntoView = (
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          item && (forceScrollIntoView || !isPointerModalityRef.current)
        );
        if (shouldScrollIntoView) {
          waitedItem.scrollIntoView?.({
            block: "nearest",
            inline: "nearest"
          });
        }
      });
    });
    useIsoLayoutEffect(() => {
      dataRef.current.orientation = orientation;
    }, [dataRef, orientation]);
    useIsoLayoutEffect(() => {
      if (!enabled) {
        return;
      }
      if (open && floatingElement) {
        indexRef.current = selectedIndex ?? -1;
        if (focusItemOnOpenRef.current && selectedIndex != null) {
          forceScrollIntoViewRef.current = true;
          onNavigate();
        }
      } else if (previousMountedRef.current) {
        indexRef.current = -1;
        onNavigate();
      }
    }, [enabled, open, floatingElement, selectedIndex, onNavigate]);
    useIsoLayoutEffect(() => {
      if (!enabled) {
        return;
      }
      if (!open) {
        forceSyncFocusRef.current = false;
        return;
      }
      if (!floatingElement) {
        return;
      }
      if (activeIndex == null) {
        forceSyncFocusRef.current = false;
        if (selectedIndexRef.current != null) {
          return;
        }
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem();
        }
        if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              if (runs < 2) {
                const scheduler2 = runs ? (callback) => waitForListPopulatedFrame.request(callback) : queueMicrotask;
                scheduler2(waitForListPopulated);
              }
              runs += 1;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef) : getMaxListIndex(listRef);
              keyRef.current = null;
              onNavigate();
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem();
        forceScrollIntoViewRef.current = false;
      }
    }, [enabled, open, floatingElement, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, waitForListPopulatedFrame]);
    useIsoLayoutEffect(() => {
      if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
        return;
      }
      const nodes = tree.nodesRef.current;
      const parent = nodes.find((node) => node.id === parentId)?.context?.elements.floating;
      const activeEl = activeElement(ownerDocument(domReferenceElement ?? parent ?? null));
      const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
      if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
        parent.focus({
          preventScroll: true
        });
      }
    }, [enabled, floatingElement, domReferenceElement, tree, parentId, virtual]);
    useIsoLayoutEffect(() => {
      previousOpenRef.current = open;
      previousMountedRef.current = !!floatingElement;
    });
    useIsoLayoutEffect(() => {
      if (!open) {
        keyRef.current = null;
        focusItemOnOpenRef.current = focusItemOnOpen;
      }
    }, [open, focusItemOnOpen]);
    const hasActiveIndex = activeIndex != null;
    const syncCurrentTarget = useStableCallback((event) => {
      if (!latestOpenRef.current) {
        return;
      }
      const index2 = listRef.current.indexOf(event.currentTarget);
      if (index2 !== -1 && (indexRef.current !== index2 || activeIndex !== index2)) {
        indexRef.current = index2;
        onNavigate(event);
      }
    });
    const getParentOrientation = useStableCallback(() => {
      return parentOrientation ?? tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.dataRef?.current.orientation;
    });
    const getMinEnabledIndex = useStableCallback(() => {
      return getMinListIndex(listRef, disabledIndicesRef.current);
    });
    const commonOnKeyDown = useStableCallback((event) => {
      isPointerModalityRef.current = false;
      forceSyncFocusRef.current = true;
      if (event.which === 229) {
        return;
      }
      if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)) {
        if (!isMainOrientationKey(event.key, getParentOrientation())) {
          stopEvent(event);
        }
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
        if (isHTMLElement(domReferenceElement)) {
          if (virtual) {
            tree?.events.emit("virtualfocus", domReferenceElement);
          } else {
            domReferenceElement.focus();
          }
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinListIndex(listRef, disabledIndices);
      const maxIndex = getMaxListIndex(listRef, disabledIndices);
      if (!typeableComboboxReference) {
        if (event.key === "Home") {
          stopEvent(event);
          indexRef.current = minIndex;
          onNavigate(event);
        }
        if (event.key === "End") {
          stopEvent(event);
          indexRef.current = maxIndex;
          onNavigate(event);
        }
      }
      if (navigateGrid != null) {
        const index2 = navigateGrid(event, indexRef.current, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex);
        if (index2 != null) {
          indexRef.current = index2;
          onNavigate(event);
        }
        if (orientation === "both") {
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(event);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loopFocus) {
            if (currentIndex >= maxIndex) {
              if (allowEscape && currentIndex !== listRef.current.length) {
                indexRef.current = -1;
              } else {
                forceSyncFocusRef.current = false;
                indexRef.current = minIndex;
              }
            } else {
              indexRef.current = findNonDisabledListIndex(listRef.current, {
                startingIndex: currentIndex,
                disabledIndices
              });
            }
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef.current, {
              startingIndex: currentIndex,
              disabledIndices
            }));
          }
        } else if (loopFocus) {
          if (currentIndex <= minIndex) {
            if (allowEscape && currentIndex !== -1) {
              indexRef.current = listRef.current.length;
            } else {
              forceSyncFocusRef.current = false;
              indexRef.current = maxIndex;
            }
          } else {
            indexRef.current = findNonDisabledListIndex(listRef.current, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices
            });
          }
        } else {
          indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef.current, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          }));
        }
        if (isIndexOutOfListBounds(listRef.current, indexRef.current)) {
          indexRef.current = -1;
        }
        onNavigate(event);
      }
    });
    const item = React59.useMemo(() => {
      const itemProps = {
        onFocus(event) {
          forceSyncFocusRef.current = true;
          syncCurrentTarget(event);
        },
        onClick: ({
          currentTarget
        }) => currentTarget.focus({
          preventScroll: true
        }),
        // Safari
        onMouseMove(event) {
          forceSyncFocusRef.current = true;
          forceScrollIntoViewRef.current = false;
          if (focusItemOnHover) {
            syncCurrentTarget(event);
          }
        },
        onPointerLeave(event) {
          if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === "touch") {
            return;
          }
          forceSyncFocusRef.current = true;
          const relatedTarget = event.relatedTarget;
          if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
            return;
          }
          if (!resetOnPointerLeaveRef.current) {
            return;
          }
          cancelQueuedFocusRef.current?.();
          cancelQueuedFocusRef.current = null;
          indexRef.current = -1;
          onNavigate(event);
          if (!virtual) {
            const floatingFocusEl = floatingFocusElementRef.current;
            const activeEl = activeElement(ownerDocument(floatingFocusEl));
            if (floatingFocusEl && contains(floatingFocusEl, activeEl)) {
              floatingFocusEl.focus({
                preventScroll: true
              });
            }
          }
        }
      };
      return itemProps;
    }, [syncCurrentTarget, latestOpenRef, floatingFocusElementRef, focusItemOnHover, listRef, onNavigate, resetOnPointerLeaveRef, virtual]);
    const ariaActiveDescendantProp = React59.useMemo(() => {
      return virtual && open && hasActiveIndex && {
        "aria-activedescendant": `${id}-${activeIndex}`
      };
    }, [virtual, open, hasActiveIndex, id, activeIndex]);
    const floating = React59.useMemo(() => {
      return {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
        onKeyDown(event) {
          if (event.key === "Tab" && event.shiftKey && open && !virtual) {
            const target = getTarget(event.nativeEvent);
            if (target && !contains(floatingFocusElementRef.current, target)) {
              return;
            }
            stopEvent(event);
            store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            if (isHTMLElement(domReferenceElement)) {
              domReferenceElement.focus();
            }
            return;
          }
          commonOnKeyDown(event);
        },
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      };
    }, [ariaActiveDescendantProp, commonOnKeyDown, floatingFocusElementRef, orientation, typeableComboboxReference, store, open, virtual, domReferenceElement]);
    const trigger = React59.useMemo(() => {
      function openOnNavigationKeyDown(event) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent, event.currentTarget));
      }
      function checkVirtualMouse(event) {
        if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
          focusItemOnOpenRef.current = !virtual;
        }
      }
      function checkVirtualPointer(event) {
        focusItemOnOpenRef.current = focusItemOnOpen;
        if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
          focusItemOnOpenRef.current = true;
        }
      }
      return {
        onKeyDown(event) {
          const currentOpen = store.select("open");
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.startsWith("Arrow");
          const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
          const isMainKey = isMainOrientationKey(event.key, orientation);
          const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
          if (virtual && currentOpen) {
            return commonOnKeyDown(event);
          }
          if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
            return void 0;
          }
          if (isNavigationKey) {
            const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
            keyRef.current = nested && isParentMainKey ? null : event.key;
          }
          if (nested) {
            if (isParentCrossOpenKey) {
              stopEvent(event);
              if (currentOpen) {
                indexRef.current = getMinEnabledIndex();
                onNavigate(event);
              } else {
                openOnNavigationKeyDown(event);
              }
            }
            return void 0;
          }
          if (isMainKey) {
            if (selectedIndexRef.current != null) {
              indexRef.current = selectedIndexRef.current;
            }
            stopEvent(event);
            if (!currentOpen && openOnArrowKeyDown) {
              openOnNavigationKeyDown(event);
            } else {
              commonOnKeyDown(event);
            }
            if (currentOpen) {
              onNavigate(event);
            }
          }
          return void 0;
        },
        onFocus(event) {
          if (store.select("open") && !virtual) {
            indexRef.current = -1;
            onNavigate(event);
          }
        },
        onPointerDown: checkVirtualPointer,
        onPointerEnter: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      };
    }, [commonOnKeyDown, focusItemOnOpen, getMinEnabledIndex, nested, onNavigate, store, openOnArrowKeyDown, orientation, getParentOrientation, rtl, selectedIndexRef, virtual]);
    const reference = React59.useMemo(() => {
      return {
        ...ariaActiveDescendantProp,
        ...trigger
      };
    }, [ariaActiveDescendantProp, trigger]);
    return React59.useMemo(() => enabled ? {
      reference,
      floating,
      item,
      trigger
    } : {}, [enabled, reference, floating, trigger, item]);
  }

  // node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
  init_define_import_meta_env();
  var React60 = __toESM(require_react_shim(), 1);
  function useTypeahead(context, props) {
    const {
      listRef,
      elementsRef,
      activeIndex,
      onMatch: onMatchProp,
      disabledIndices,
      onTyping,
      enabled = true,
      resetMs = 750,
      selectedIndex = null
    } = props;
    const store = "rootStore" in context ? context.rootStore : context;
    const open = store.useState("open");
    const timeout = useTimeout();
    const stringRef = React60.useRef("");
    const prevIndexRef = React60.useRef(selectedIndex ?? activeIndex ?? -1);
    const matchIndexRef = React60.useRef(null);
    const onKeyDown = useStableCallback((event) => {
      function isVisible(index3) {
        const element = elementsRef?.current[index3];
        return !element || isElementVisible(element);
      }
      function isItemAvailable(index3) {
        if (!isVisible(index3)) {
          return false;
        }
        return disabledIndices == null || !isListIndexDisabled(EMPTY_ARRAY, index3, disabledIndices);
      }
      function getMatchingIndex(list, string, startIndex2 = 0) {
        if (list.length === 0) {
          return -1;
        }
        const normalizedStartIndex = (startIndex2 % list.length + list.length) % list.length;
        const lowerString = string.toLowerCase();
        for (let offset4 = 0; offset4 < list.length; offset4 += 1) {
          const index3 = (normalizedStartIndex + offset4) % list.length;
          const text = list[index3];
          if (!text?.toLowerCase().startsWith(lowerString) || !isItemAvailable(index3)) {
            continue;
          }
          return index3;
        }
        return -1;
      }
      const listContent = listRef.current;
      if (stringRef.current.length > 0 && event.key === " ") {
        stopEvent(event);
        onTyping?.(true);
      }
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== " ") {
          onTyping?.(false);
        }
      }
      if (listContent == null || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (open && event.key !== " ") {
        stopEvent(event);
        onTyping?.(true);
      }
      const isNewSession = stringRef.current === "";
      if (isNewSession) {
        prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text, index3) => text && isItemAvailable(index3) ? text[0]?.toLowerCase() !== text[1]?.toLowerCase() : true);
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      timeout.start(resetMs, () => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        onTyping?.(false);
      });
      const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
      const startIndex = (prevIndex ?? 0) + 1;
      const index2 = getMatchingIndex(listContent, stringRef.current, startIndex);
      if (index2 !== -1) {
        onMatchProp?.(index2);
        matchIndexRef.current = index2;
      } else if (event.key !== " ") {
        stringRef.current = "";
        onTyping?.(false);
      }
    });
    const onBlur = useStableCallback((event) => {
      const next = event.relatedTarget;
      const currentDomReferenceElement = store.select("domReferenceElement");
      const currentFloatingElement = store.select("floatingElement");
      const withinComposite = contains(currentDomReferenceElement, next) || contains(currentFloatingElement, next);
      if (withinComposite) {
        return;
      }
      timeout.clear();
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
      onTyping?.(false);
    });
    useIsoLayoutEffect(() => {
      if (!open && selectedIndex !== null) {
        return;
      }
      timeout.clear();
      matchIndexRef.current = null;
      if (stringRef.current !== "") {
        stringRef.current = "";
      }
    }, [open, selectedIndex, timeout]);
    useIsoLayoutEffect(() => {
      if (open && stringRef.current === "") {
        prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
      }
    }, [open, selectedIndex, activeIndex]);
    const sharedProps = React60.useMemo(() => ({
      onKeyDown,
      onBlur
    }), [onKeyDown, onBlur]);
    return React60.useMemo(() => enabled ? {
      reference: sharedProps,
      floating: sharedProps
    } : {}, [enabled, sharedProps]);
  }

  // node_modules/@base-ui/react/floating-ui-react/safePolygon.mjs
  init_define_import_meta_env();
  var CURSOR_SPEED_THRESHOLD = 0.1;
  var CURSOR_SPEED_THRESHOLD_SQUARED = CURSOR_SPEED_THRESHOLD * CURSOR_SPEED_THRESHOLD;
  var POLYGON_BUFFER = 0.5;
  function hasIntersectingEdge(pointX, pointY, xi, yi, xj, yj) {
    return yi >= pointY !== yj >= pointY && pointX <= (xj - xi) * (pointY - yi) / (yj - yi) + xi;
  }
  function isPointInQuadrilateral(pointX, pointY, x1, y1, x2, y2, x3, y3, x4, y4) {
    let isInsideValue = false;
    if (hasIntersectingEdge(pointX, pointY, x1, y1, x2, y2)) {
      isInsideValue = !isInsideValue;
    }
    if (hasIntersectingEdge(pointX, pointY, x2, y2, x3, y3)) {
      isInsideValue = !isInsideValue;
    }
    if (hasIntersectingEdge(pointX, pointY, x3, y3, x4, y4)) {
      isInsideValue = !isInsideValue;
    }
    if (hasIntersectingEdge(pointX, pointY, x4, y4, x1, y1)) {
      isInsideValue = !isInsideValue;
    }
    return isInsideValue;
  }
  function isInsideRect(pointX, pointY, rect) {
    return pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height;
  }
  function isInsideAxisAlignedRect(pointX, pointY, x1, y1, x2, y2) {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return pointX >= minX && pointX <= maxX && pointY >= minY && pointY <= maxY;
  }
  function safePolygon(options = {}) {
    const {
      blockPointerEvents = false
    } = options;
    const timeout = new Timeout();
    const fn = ({
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    }) => {
      const side = placement?.split("-")[0];
      let hasLanded = false;
      let lastX = null;
      let lastY = null;
      let lastCursorTime = typeof performance !== "undefined" ? performance.now() : 0;
      function isCursorMovingSlowly(nextX, nextY) {
        const currentTime = performance.now();
        const elapsedTime = currentTime - lastCursorTime;
        if (lastX === null || lastY === null || elapsedTime === 0) {
          lastX = nextX;
          lastY = nextY;
          lastCursorTime = currentTime;
          return false;
        }
        const deltaX = nextX - lastX;
        const deltaY = nextY - lastY;
        const distanceSquared = deltaX * deltaX + deltaY * deltaY;
        const thresholdSquared = elapsedTime * elapsedTime * CURSOR_SPEED_THRESHOLD_SQUARED;
        lastX = nextX;
        lastY = nextY;
        lastCursorTime = currentTime;
        return distanceSquared < thresholdSquared;
      }
      function close() {
        timeout.clear();
        onClose();
      }
      return function onMouseMove(event) {
        timeout.clear();
        const domReference = elements.domReference;
        const floating = elements.floating;
        if (!domReference || !floating || side == null || x == null || y == null) {
          return void 0;
        }
        const {
          clientX,
          clientY
        } = event;
        const target = getTarget(event);
        const isLeave = event.type === "mouseleave";
        const isOverFloatingEl = contains(floating, target);
        const isOverReferenceEl = contains(domReference, target);
        if (isOverFloatingEl) {
          hasLanded = true;
          if (!isLeave) {
            return void 0;
          }
        }
        if (isOverReferenceEl) {
          hasLanded = false;
          if (!isLeave) {
            hasLanded = true;
            return void 0;
          }
        }
        if (isLeave && isElement(event.relatedTarget) && contains(floating, event.relatedTarget)) {
          return void 0;
        }
        function hasOpenChildNode() {
          return Boolean(tree && getNodeChildren(tree.nodesRef.current, nodeId).length > 0);
        }
        function closeIfNoOpenChild() {
          if (!hasOpenChildNode()) {
            close();
          }
        }
        if (hasOpenChildNode()) {
          return void 0;
        }
        const refRect = domReference.getBoundingClientRect();
        const rect = floating.getBoundingClientRect();
        const cursorLeaveFromRight = x > rect.right - rect.width / 2;
        const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
        const isFloatingWider = rect.width > refRect.width;
        const isFloatingTaller = rect.height > refRect.height;
        const left = (isFloatingWider ? refRect : rect).left;
        const right = (isFloatingWider ? refRect : rect).right;
        const top = (isFloatingTaller ? refRect : rect).top;
        const bottom = (isFloatingTaller ? refRect : rect).bottom;
        if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
          closeIfNoOpenChild();
          return void 0;
        }
        let isInsideTroughRect = false;
        switch (side) {
          case "top":
            isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, refRect.top + 1, right, rect.bottom - 1);
            break;
          case "bottom":
            isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, rect.top + 1, right, refRect.bottom - 1);
            break;
          case "left":
            isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, rect.right - 1, bottom, refRect.left + 1, top);
            break;
          case "right":
            isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, refRect.right - 1, bottom, rect.left + 1, top);
            break;
          default:
        }
        if (isInsideTroughRect) {
          return void 0;
        }
        if (hasLanded && !isInsideRect(clientX, clientY, refRect)) {
          closeIfNoOpenChild();
          return void 0;
        }
        if (!isLeave && isCursorMovingSlowly(clientX, clientY)) {
          closeIfNoOpenChild();
          return void 0;
        }
        let isInsidePolygon = false;
        switch (side) {
          case "top": {
            const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
            const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
            const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
            const cursorPointY = y + POLYGON_BUFFER + 1;
            const commonYLeft = cursorLeaveFromRight ? rect.bottom - POLYGON_BUFFER : isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top;
            const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top : rect.bottom - POLYGON_BUFFER;
            isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
            break;
          }
          case "bottom": {
            const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
            const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
            const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
            const cursorPointY = y - POLYGON_BUFFER;
            const commonYLeft = cursorLeaveFromRight ? rect.top + POLYGON_BUFFER : isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom;
            const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom : rect.top + POLYGON_BUFFER;
            isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
            break;
          }
          case "left": {
            const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
            const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
            const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
            const cursorPointX = x + POLYGON_BUFFER + 1;
            const commonXTop = cursorLeaveFromBottom ? rect.right - POLYGON_BUFFER : isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left;
            const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left : rect.right - POLYGON_BUFFER;
            isInsidePolygon = isPointInQuadrilateral(clientX, clientY, commonXTop, rect.top, commonXBottom, rect.bottom, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY);
            break;
          }
          case "right": {
            const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
            const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
            const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
            const cursorPointX = x - POLYGON_BUFFER;
            const commonXTop = cursorLeaveFromBottom ? rect.left + POLYGON_BUFFER : isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right;
            const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right : rect.left + POLYGON_BUFFER;
            isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY, commonXTop, rect.top, commonXBottom, rect.bottom);
            break;
          }
          default:
        }
        if (!isInsidePolygon) {
          closeIfNoOpenChild();
        } else if (!hasLanded) {
          timeout.start(40, closeIfNoOpenChild);
        }
        return void 0;
      };
    };
    fn.__options = {
      ...options,
      blockPointerEvents
    };
    return fn;
  }

  // node_modules/@base-ui/react/dialog/popup/DialogPopupCssVars.mjs
  init_define_import_meta_env();
  var DialogPopupCssVars = /* @__PURE__ */ (function(DialogPopupCssVars2) {
    DialogPopupCssVars2["nestedDialogs"] = "--nested-dialogs";
    return DialogPopupCssVars2;
  })({});

  // node_modules/@base-ui/react/dialog/popup/DialogPopupDataAttributes.mjs
  init_define_import_meta_env();
  var DialogPopupDataAttributes = (function(DialogPopupDataAttributes2) {
    DialogPopupDataAttributes2[DialogPopupDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
    DialogPopupDataAttributes2[DialogPopupDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
    DialogPopupDataAttributes2[DialogPopupDataAttributes2["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
    DialogPopupDataAttributes2[DialogPopupDataAttributes2["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
    DialogPopupDataAttributes2["nested"] = "data-nested";
    DialogPopupDataAttributes2["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogPopupDataAttributes2;
  })({});

  // node_modules/@base-ui/react/dialog/portal/DialogPortalContext.mjs
  init_define_import_meta_env();
  var React61 = __toESM(require_react_shim(), 1);
  var DialogPortalContext = /* @__PURE__ */ React61.createContext(void 0);
  if (true) DialogPortalContext.displayName = "DialogPortalContext";
  function useDialogPortalContext() {
    const value = React61.useContext(DialogPortalContext);
    if (value === void 0) {
      throw new Error(true ? "Base UI: <Dialog.Portal> is missing." : formatErrorMessage_default(26));
    }
    return value;
  }

  // node_modules/@base-ui/react/internals/composite/composite.mjs
  init_define_import_meta_env();
  var ARROW_UP2 = "ArrowUp";
  var ARROW_DOWN2 = "ArrowDown";
  var ARROW_LEFT2 = "ArrowLeft";
  var ARROW_RIGHT2 = "ArrowRight";
  var HOME = "Home";
  var END = "End";
  var HORIZONTAL_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT2, ARROW_RIGHT2]);
  var HORIZONTAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT2, ARROW_RIGHT2, HOME, END]);
  var VERTICAL_KEYS = /* @__PURE__ */ new Set([ARROW_UP2, ARROW_DOWN2]);
  var VERTICAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([ARROW_UP2, ARROW_DOWN2, HOME, END]);
  var ARROW_KEYS = /* @__PURE__ */ new Set([...HORIZONTAL_KEYS, ...VERTICAL_KEYS]);
  var COMPOSITE_KEYS = /* @__PURE__ */ new Set([...ARROW_KEYS, HOME, END]);
  var SHIFT = "Shift";
  var CONTROL = "Control";
  var ALT = "Alt";
  var META = "Meta";
  var MODIFIER_KEYS = /* @__PURE__ */ new Set([SHIFT, CONTROL, ALT, META]);
  function isInputElement(element) {
    return isHTMLElement(element) && element.tagName === "INPUT";
  }
  function isNativeInput(element) {
    if (isInputElement(element) && element.selectionStart != null) {
      return true;
    }
    if (isHTMLElement(element) && element.tagName === "TEXTAREA") {
      return true;
    }
    return false;
  }
  function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
    if (!scrollContainer || !element || !element.scrollTo) {
      return;
    }
    let targetX = scrollContainer.scrollLeft;
    let targetY = scrollContainer.scrollTop;
    const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
    const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
    if (isOverflowingX && orientation !== "vertical") {
      const elementOffsetLeft = getOffset(scrollContainer, element, "left");
      const containerStyles = getStyles(scrollContainer);
      const elementStyles = getStyles(element);
      if (direction === "ltr") {
        if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
          targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
        } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
          targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
        }
      }
      if (direction === "rtl") {
        if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
          targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
        } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
          targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
        }
      }
    }
    if (isOverflowingY && orientation !== "horizontal") {
      const elementOffsetTop = getOffset(scrollContainer, element, "top");
      const containerStyles = getStyles(scrollContainer);
      const elementStyles = getStyles(element);
      if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
        targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
      } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
        targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
      }
    }
    scrollContainer.scrollTo({
      left: targetX,
      top: targetY,
      behavior: "auto"
    });
  }
  function getOffset(ancestor, element, side) {
    const propName = side === "left" ? "offsetLeft" : "offsetTop";
    let result = 0;
    while (element.offsetParent) {
      result += element[propName];
      if (element.offsetParent === ancestor) {
        break;
      }
      element = element.offsetParent;
    }
    return result;
  }
  function getStyles(element) {
    const styles = getComputedStyle(element);
    return {
      scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
      scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
      scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
      scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
      scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
      scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
      scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
      scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
    };
  }

  // node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping2 = {
    ...popupStateMapping,
    ...transitionStatusMapping,
    nestedDialogOpen(value) {
      return value ? {
        [DialogPopupDataAttributes.nestedDialogOpen]: ""
      } : null;
    }
  };
  var DialogPopup = /* @__PURE__ */ React62.forwardRef(function DialogPopup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      finalFocus,
      initialFocus,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useDialogRootContext();
    const descriptionElementId = store.useState("descriptionElementId");
    const disablePointerDismissal = store.useState("disablePointerDismissal");
    const floatingRootContext = store.useState("floatingRootContext");
    const rootPopupProps = store.useState("popupProps");
    const modal = store.useState("modal");
    const mounted = store.useState("mounted");
    const nested = store.useState("nested");
    const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
    const open = store.useState("open");
    const openMethod = store.useState("openMethod");
    const titleElementId = store.useState("titleElementId");
    const transitionStatus = store.useState("transitionStatus");
    const role = store.useState("role");
    const floatingId = floatingRootContext.useState("floatingId");
    const popupId = elementProps.id ?? floatingId;
    useDialogPortalContext();
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      }
    });
    const resolvedInitialFocus = initialFocus === void 0 ? createDefaultInitialFocus(store.context.popupRef) : initialFocus;
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const setPopupElement = store.useStateSetter("popupElement");
    const state = {
      open,
      nested,
      transitionStatus,
      nestedDialogOpen
    };
    const element = useRenderElement("div", componentProps, {
      state,
      props: [rootPopupProps, {
        id: popupId,
        "aria-labelledby": titleElementId ?? void 0,
        "aria-describedby": descriptionElementId ?? void 0,
        role,
        ...FOCUSABLE_POPUP_PROPS,
        hidden: !mounted,
        onKeyDown(event) {
          if (COMPOSITE_KEYS.has(event.key)) {
            event.stopPropagation();
          }
        },
        style: {
          [DialogPopupCssVars.nestedDialogs]: nestedOpenDialogCount
        }
      }, elementProps],
      ref: [forwardedRef, store.context.popupRef, setPopupElement],
      stateAttributesMapping: stateAttributesMapping2
    });
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FloatingFocusManager, {
      context: floatingRootContext,
      openInteractionType: openMethod,
      disabled: !mounted,
      closeOnFocusOut: !disablePointerDismissal,
      initialFocus: resolvedInitialFocus,
      returnFocus: finalFocus,
      modal: modal !== false,
      restoreFocus: "popup",
      children: element
    });
  });
  if (true) DialogPopup.displayName = "DialogPopup";

  // node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
  init_define_import_meta_env();
  var React64 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/inertValue.mjs
  init_define_import_meta_env();
  function inertValue(value) {
    if (isReactVersionAtLeast(19)) {
      return value;
    }
    return value ? "true" : void 0;
  }

  // node_modules/@base-ui/react/utils/InternalBackdrop.mjs
  init_define_import_meta_env();
  var React63 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var InternalBackdrop = /* @__PURE__ */ React63.forwardRef(function InternalBackdrop2(props, ref) {
    const {
      cutout,
      ...otherProps
    } = props;
    let clipPath;
    if (cutout) {
      const rect = cutout.getBoundingClientRect();
      clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
      ref,
      role: "presentation",
      "data-base-ui-inert": "",
      ...otherProps,
      style: {
        position: "fixed",
        inset: 0,
        userSelect: "none",
        WebkitUserSelect: "none",
        clipPath
      }
    });
  });
  if (true) InternalBackdrop.displayName = "InternalBackdrop";

  // node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  var DialogPortal = /* @__PURE__ */ React64.forwardRef(function DialogPortal2(props, forwardedRef) {
    const {
      keepMounted = false,
      ...portalProps
    } = props;
    const {
      store
    } = useDialogRootContext();
    const mounted = store.useState("mounted");
    const modal = store.useState("modal");
    const open = store.useState("open");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(FloatingPortal, {
        ref: forwardedRef,
        ...portalProps,
        children: [mounted && modal === true && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(InternalBackdrop, {
          ref: store.context.internalBackdropRef,
          inert: inertValue(!open)
        }), props.children]
      })
    });
  });
  if (true) DialogPortal.displayName = "DialogPortal";

  // node_modules/@base-ui/react/dialog/root/DialogRoot.mjs
  init_define_import_meta_env();
  var React68 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
  init_define_import_meta_env();
  var React67 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
  init_define_import_meta_env();
  var React65 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useScrollLock.mjs
  init_define_import_meta_env();
  var originalHtmlStyles = {};
  var originalBodyStyles = {};
  var originalHtmlScrollBehavior = "";
  function hasInsetScrollbars(referenceElement) {
    if (typeof document === "undefined") {
      return false;
    }
    const doc = ownerDocument(referenceElement);
    const win = getWindow(doc);
    return win.innerWidth - doc.documentElement.clientWidth > 0;
  }
  function supportsStableScrollbarGutter(referenceElement) {
    const supported = typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable");
    if (!supported || typeof document === "undefined") {
      return false;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const scrollContainer = isOverflowElement(html) ? html : body;
    const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
    const originalHtmlStyleGutter = html.style.scrollbarGutter;
    html.style.scrollbarGutter = "stable";
    scrollContainer.style.overflowY = "scroll";
    const before = scrollContainer.offsetWidth;
    scrollContainer.style.overflowY = "hidden";
    const after = scrollContainer.offsetWidth;
    scrollContainer.style.overflowY = originalScrollContainerOverflowY;
    html.style.scrollbarGutter = originalHtmlStyleGutter;
    return before === after;
  }
  function preventScrollOverlayScrollbars(referenceElement) {
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const elementToLock = isOverflowElement(html) ? html : body;
    const originalElementToLockStyles = {
      overflowY: elementToLock.style.overflowY,
      overflowX: elementToLock.style.overflowX
    };
    Object.assign(elementToLock.style, {
      overflowY: "hidden",
      overflowX: "hidden"
    });
    return () => {
      Object.assign(elementToLock.style, originalElementToLockStyles);
    };
  }
  function preventScrollInsetScrollbars(referenceElement) {
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = getWindow(html);
    let scrollTop = 0;
    let scrollLeft = 0;
    let updateGutterOnly = false;
    const resizeFrame = AnimationFrame.create();
    if (parts_exports.engine.webkit && (win.visualViewport?.scale ?? 1) !== 1) {
      return () => {
      };
    }
    function lockScroll() {
      const htmlStyles = win.getComputedStyle(html);
      const bodyStyles = win.getComputedStyle(body);
      const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || "";
      const hasBothEdges = htmlScrollbarGutterValue.includes("both-edges");
      const scrollbarGutterValue = hasBothEdges ? "stable both-edges" : "stable";
      scrollTop = html.scrollTop;
      scrollLeft = html.scrollLeft;
      originalHtmlStyles = {
        scrollbarGutter: html.style.scrollbarGutter,
        overflowY: html.style.overflowY,
        overflowX: html.style.overflowX
      };
      originalHtmlScrollBehavior = html.style.scrollBehavior;
      originalBodyStyles = {
        position: body.style.position,
        height: body.style.height,
        width: body.style.width,
        boxSizing: body.style.boxSizing,
        overflowY: body.style.overflowY,
        overflowX: body.style.overflowX,
        scrollBehavior: body.style.scrollBehavior
      };
      const isScrollableY = html.scrollHeight > html.clientHeight;
      const isScrollableX = html.scrollWidth > html.clientWidth;
      const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
      const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
      const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
      const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
      const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
      const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
      const elementToLock = isOverflowElement(html) ? html : body;
      updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
      if (updateGutterOnly) {
        html.style.scrollbarGutter = scrollbarGutterValue;
        elementToLock.style.overflowY = "hidden";
        elementToLock.style.overflowX = "hidden";
        return;
      }
      Object.assign(html.style, {
        scrollbarGutter: scrollbarGutterValue,
        overflowY: "hidden",
        overflowX: "hidden"
      });
      if (isScrollableY || hasConstantOverflowY) {
        html.style.overflowY = "scroll";
      }
      if (isScrollableX || hasConstantOverflowX) {
        html.style.overflowX = "scroll";
      }
      Object.assign(body.style, {
        position: "relative",
        height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
        width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
        boxSizing: "border-box",
        overflow: "hidden",
        scrollBehavior: "unset"
      });
      body.scrollTop = scrollTop;
      body.scrollLeft = scrollLeft;
      html.setAttribute("data-base-ui-scroll-locked", "");
      html.style.scrollBehavior = "unset";
    }
    function cleanup() {
      Object.assign(html.style, originalHtmlStyles);
      Object.assign(body.style, originalBodyStyles);
      if (!updateGutterOnly) {
        html.scrollTop = scrollTop;
        html.scrollLeft = scrollLeft;
        html.removeAttribute("data-base-ui-scroll-locked");
        html.style.scrollBehavior = originalHtmlScrollBehavior;
      }
    }
    function handleResize() {
      cleanup();
      resizeFrame.request(lockScroll);
    }
    lockScroll();
    const unsubscribeResize = addEventListener(win, "resize", handleResize);
    return () => {
      resizeFrame.cancel();
      cleanup();
      if (typeof win.removeEventListener === "function") {
        unsubscribeResize();
      }
    };
  }
  var ScrollLocker = class {
    constructor() {
      __publicField(this, "lockCount", 0);
      __publicField(this, "restore", null);
      __publicField(this, "timeoutLock", Timeout.create());
      __publicField(this, "timeoutUnlock", Timeout.create());
      __publicField(this, "release", () => {
        this.lockCount -= 1;
        if (this.lockCount === 0 && this.restore) {
          this.timeoutUnlock.start(0, this.unlock);
        }
      });
      __publicField(this, "unlock", () => {
        if (this.lockCount === 0 && this.restore) {
          this.restore?.();
          this.restore = null;
        }
      });
    }
    acquire(referenceElement) {
      this.lockCount += 1;
      if (this.lockCount === 1 && this.restore === null) {
        this.timeoutLock.start(0, () => this.lock(referenceElement));
      }
      return this.release;
    }
    lock(referenceElement) {
      if (this.lockCount === 0 || this.restore !== null) {
        return;
      }
      const doc = ownerDocument(referenceElement);
      const html = doc.documentElement;
      const htmlOverflowY = getWindow(html).getComputedStyle(html).overflowY;
      if (htmlOverflowY === "hidden" || htmlOverflowY === "clip") {
        this.restore = NOOP;
        return;
      }
      const hasOverlayScrollbars = parts_exports.os.ios || !hasInsetScrollbars(referenceElement);
      this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
    }
  };
  var SCROLL_LOCKER = new ScrollLocker();
  function useScrollLock(enabled = true, referenceElement = null) {
    useIsoLayoutEffect(() => {
      if (!enabled) {
        return void 0;
      }
      return SCROLL_LOCKER.acquire(referenceElement);
    }, [enabled, referenceElement]);
  }

  // node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
  function useDialogRoot(params) {
    const {
      store,
      actionsRef
    } = params;
    const open = store.useState("open");
    usePopupRootSync(store, open);
    useImplicitActiveTrigger(store);
    const {
      forceUnmount
    } = useOpenStateTransitions(open, store);
    const handleImperativeClose = React65.useCallback(() => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
    }, [store]);
    React65.useImperativeHandle(actionsRef, () => ({
      unmount: forceUnmount,
      close: handleImperativeClose
    }), [forceUnmount, handleImperativeClose]);
  }
  function DialogInteractions({
    store,
    parentContext,
    isDrawer
  }) {
    const open = store.useState("open");
    const disablePointerDismissal = store.useState("disablePointerDismissal");
    const modal = store.useState("modal");
    const popupElement = store.useState("popupElement");
    const floatingRootContext = store.useState("floatingRootContext");
    const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = React65.useState(0);
    const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = React65.useState(0);
    const isTopmost = ownNestedOpenDialogs === 0;
    const dismiss = useDismiss(floatingRootContext, {
      outsidePressEvent() {
        if (store.context.internalBackdropRef.current || store.context.backdropRef.current) {
          return "intentional";
        }
        return {
          mouse: modal === "trap-focus" ? "sloppy" : "intentional",
          touch: "sloppy"
        };
      },
      outsidePress(event) {
        if (!store.context.outsidePressEnabledRef.current) {
          return false;
        }
        if ("button" in event && event.button !== 0) {
          return false;
        }
        if ("touches" in event && event.touches.length !== 1) {
          return false;
        }
        const target = getTarget(event);
        if (isTopmost && !disablePointerDismissal) {
          if (modal) {
            return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === target || store.context.backdropRef.current === target || contains(target, popupElement) && !target?.hasAttribute("data-base-ui-portal") : true;
          }
          return true;
        }
        return false;
      },
      escapeKey: isTopmost
    });
    useScrollLock(open && modal === true, popupElement);
    store.useContextCallback("onNestedDialogOpen", (dialogCount, drawerCount) => {
      setOwnNestedOpenDialogs(dialogCount);
      setOwnNestedOpenDrawers(drawerCount);
    });
    store.useContextCallback("onNestedDialogClose", () => {
      setOwnNestedOpenDialogs(0);
      setOwnNestedOpenDrawers(0);
    });
    React65.useEffect(() => {
      if (parentContext?.onNestedDialogOpen && open) {
        parentContext.onNestedDialogOpen(ownNestedOpenDialogs + 1, ownNestedOpenDrawers + (isDrawer ? 1 : 0));
      }
      if (parentContext?.onNestedDialogClose && !open) {
        parentContext.onNestedDialogClose();
      }
      return () => {
        if (parentContext?.onNestedDialogClose && open) {
          parentContext.onNestedDialogClose();
        }
      };
    }, [isDrawer, open, ownNestedOpenDialogs, ownNestedOpenDrawers, parentContext]);
    const activeTriggerProps = dismiss.reference ?? EMPTY_OBJECT;
    const inactiveTriggerProps = dismiss.trigger ?? EMPTY_OBJECT;
    const popupProps = dismiss.floating ?? EMPTY_OBJECT;
    usePopupInteractionProps(store, {
      activeTriggerProps,
      inactiveTriggerProps,
      popupProps,
      nestedOpenDialogCount: ownNestedOpenDialogs,
      nestedOpenDrawerCount: ownNestedOpenDrawers
    });
    return null;
  }

  // node_modules/@base-ui/react/dialog/store/DialogStore.mjs
  init_define_import_meta_env();
  var React66 = __toESM(require_react_shim(), 1);
  var selectors2 = {
    ...popupStoreSelectors,
    modal: createSelector((state) => state.modal),
    nested: createSelector((state) => state.nested),
    nestedOpenDialogCount: createSelector((state) => state.nestedOpenDialogCount),
    nestedOpenDrawerCount: createSelector((state) => state.nestedOpenDrawerCount),
    disablePointerDismissal: createSelector((state) => state.disablePointerDismissal),
    openMethod: createSelector((state) => state.openMethod),
    descriptionElementId: createSelector((state) => state.descriptionElementId),
    titleElementId: createSelector((state) => state.titleElementId),
    viewportElement: createSelector((state) => state.viewportElement),
    role: createSelector((state) => state.role)
  };
  var DialogStore = class _DialogStore extends ReactStore {
    constructor(initialState, floatingId, nested = false) {
      const triggerElements = new PopupTriggerMap();
      const state = createInitialState(initialState);
      state.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
      super(state, {
        popupRef: /* @__PURE__ */ React66.createRef(),
        backdropRef: /* @__PURE__ */ React66.createRef(),
        internalBackdropRef: /* @__PURE__ */ React66.createRef(),
        outsidePressEnabledRef: {
          current: true
        },
        triggerElements,
        onOpenChange: void 0,
        onOpenChangeComplete: void 0
      }, selectors2);
      __publicField(this, "setOpen", (nextOpen, eventDetails) => {
        eventDetails.preventUnmountOnClose = () => {
          this.set("preventUnmountingOnClose", true);
        };
        if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) {
          eventDetails.trigger = this.state.activeTriggerElement ?? void 0;
        }
        this.context.onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
          return;
        }
        this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
        const updatedState = {
          open: nextOpen
        };
        setPopupOpenState(updatedState, nextOpen, eventDetails.trigger);
        this.update(updatedState);
      });
    }
    static useStore(externalStore, initialState) {
      const store = usePopupStore(externalStore, (floatingId, nested) => new _DialogStore(initialState, floatingId, nested), true).store;
      return store;
    }
  };
  function createInitialState(initialState = {}) {
    return {
      ...createInitialPopupStoreState(),
      modal: true,
      disablePointerDismissal: false,
      popupElement: null,
      viewportElement: null,
      descriptionElementId: void 0,
      titleElementId: void 0,
      openMethod: null,
      nested: false,
      nestedOpenDialogCount: 0,
      nestedOpenDrawerCount: 0,
      role: "dialog",
      ...initialState
    };
  }

  // node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
  var import_jsx_runtime12 = __toESM(require_react_shim(), 1);
  function useRenderDialogRoot(props, mode = "dialog") {
    const {
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      onOpenChangeComplete,
      disablePointerDismissal: disablePointerDismissalProp = false,
      modal: modalProp = true,
      actionsRef,
      handle,
      triggerId: triggerIdProp,
      defaultTriggerId: defaultTriggerIdProp = null
    } = props;
    const isDrawer = mode === "drawer";
    const isAlertDialog = mode === "alert-dialog";
    const modal = isAlertDialog ? true : modalProp;
    const disablePointerDismissal = isAlertDialog || disablePointerDismissalProp;
    const role = isAlertDialog ? "alertdialog" : "dialog";
    const parentDialogRootContext = useDialogRootContext(true);
    const nested = Boolean(parentDialogRootContext);
    const rootState = {
      modal,
      disablePointerDismissal,
      nested,
      role
    };
    const store = DialogStore.useStore(handle?.store, {
      open: defaultOpen,
      openProp,
      activeTriggerId: defaultTriggerIdProp,
      triggerIdProp,
      ...rootState
    });
    useOnFirstRender(() => {
      const nextState = openProp === void 0 && store.state.open === false && defaultOpen === true ? {
        open: true,
        activeTriggerId: defaultTriggerIdProp
      } : null;
      if (isAlertDialog) {
        store.update(nextState ? {
          ...rootState,
          ...nextState
        } : rootState);
      } else if (nextState) {
        store.update(nextState);
      }
    });
    store.useControlledProp("openProp", openProp);
    store.useControlledProp("triggerIdProp", triggerIdProp);
    store.useSyncedValues(rootState);
    store.useContextCallback("onOpenChange", onOpenChange);
    store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const payload = store.useState("payload");
    useDialogRoot({
      store,
      actionsRef
    });
    const shouldRenderInteractions = open || mounted;
    const contextValue = React67.useMemo(() => ({
      store
    }), [store]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(IsDrawerContext.Provider, {
      value: false,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogRootContext.Provider, {
        value: contextValue,
        children: [shouldRenderInteractions && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogInteractions, {
          store,
          parentContext: parentDialogRootContext?.store.context,
          isDrawer
        }), typeof children === "function" ? children({
          payload
        }) : children]
      })
    });
  }

  // node_modules/@base-ui/react/dialog/root/DialogRoot.mjs
  function DialogRoot(props) {
    const mode = React68.useContext(IsDrawerContext) ? "drawer" : "dialog";
    return useRenderDialogRoot(props, mode);
  }

  // node_modules/@base-ui/react/dialog/viewport/DialogViewport.mjs
  init_define_import_meta_env();
  var React69 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/dialog/viewport/DialogViewportDataAttributes.mjs
  init_define_import_meta_env();
  var DialogViewportDataAttributes = (function(DialogViewportDataAttributes2) {
    DialogViewportDataAttributes2[DialogViewportDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
    DialogViewportDataAttributes2[DialogViewportDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
    DialogViewportDataAttributes2[DialogViewportDataAttributes2["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
    DialogViewportDataAttributes2[DialogViewportDataAttributes2["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
    DialogViewportDataAttributes2["nested"] = "data-nested";
    DialogViewportDataAttributes2["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogViewportDataAttributes2;
  })({});

  // node_modules/@base-ui/react/dialog/viewport/DialogViewport.mjs
  var stateAttributesMapping3 = {
    ...popupStateMapping,
    ...transitionStatusMapping,
    nested(value) {
      return value ? {
        [DialogViewportDataAttributes.nested]: ""
      } : null;
    },
    nestedDialogOpen(value) {
      return value ? {
        [DialogViewportDataAttributes.nestedDialogOpen]: ""
      } : null;
    }
  };
  var DialogViewport = /* @__PURE__ */ React69.forwardRef(function DialogViewport2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      children,
      ...elementProps
    } = componentProps;
    const keepMounted = useDialogPortalContext();
    const {
      store
    } = useDialogRootContext();
    const open = store.useState("open");
    const nested = store.useState("nested");
    const transitionStatus = store.useState("transitionStatus");
    const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
    const mounted = store.useState("mounted");
    const setViewportElement = store.useStateSetter("viewportElement");
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const state = {
      open,
      nested,
      transitionStatus,
      nestedDialogOpen
    };
    const shouldRender = keepMounted || mounted;
    return useRenderElement("div", componentProps, {
      enabled: shouldRender,
      state,
      ref: [forwardedRef, setViewportElement],
      stateAttributesMapping: stateAttributesMapping3,
      props: [{
        role: "presentation",
        hidden: !mounted,
        style: {
          pointerEvents: !open ? "none" : void 0
        },
        children
      }, elementProps]
    });
  });
  if (true) DialogViewport.displayName = "DialogViewport";

  // node_modules/@base-ui/react/dialog/title/DialogTitle.mjs
  init_define_import_meta_env();
  var React70 = __toESM(require_react_shim(), 1);
  var DialogTitle = /* @__PURE__ */ React70.forwardRef(function DialogTitle2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useDialogRootContext();
    const id = useBaseUiId(idProp);
    store.useSyncedValueWithCleanup("titleElementId", id);
    return useRenderElement("h2", componentProps, {
      ref: forwardedRef,
      props: [{
        id
      }, elementProps]
    });
  });
  if (true) DialogTitle.displayName = "DialogTitle";

  // node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
  init_define_import_meta_env();
  var React74 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
  init_define_import_meta_env();
  var React73 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
  init_define_import_meta_env();
  var React71 = __toESM(require_react_shim(), 1);
  function useEnhancedClickHandler(handler) {
    const lastClickInteractionTypeRef = React71.useRef("");
    const handlePointerDown = React71.useCallback((event) => {
      if (event.defaultPrevented) {
        return;
      }
      lastClickInteractionTypeRef.current = event.pointerType;
      handler(event, event.pointerType);
    }, [handler]);
    const handleClick = React71.useCallback((event) => {
      if (event.detail === 0) {
        handler(event, "keyboard");
        return;
      }
      if ("pointerType" in event) {
        handler(event, event.pointerType);
      } else {
        handler(event, lastClickInteractionTypeRef.current);
      }
      lastClickInteractionTypeRef.current = "";
    }, [handler]);
    return {
      onClick: handleClick,
      onPointerDown: handlePointerDown
    };
  }

  // node_modules/@base-ui/react/internals/useValueChanged.mjs
  init_define_import_meta_env();
  var React72 = __toESM(require_react_shim(), 1);
  function useValueChanged(value, onChange) {
    const valueRef = React72.useRef(value);
    const onChangeCallback = useStableCallback(onChange);
    useIsoLayoutEffect(() => {
      if (valueRef.current === value) {
        return;
      }
      onChangeCallback(valueRef.current);
    }, [value, onChangeCallback]);
    useIsoLayoutEffect(() => {
      valueRef.current = value;
    }, [value]);
  }

  // node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
  function useOpenMethodTriggerProps(open, setOpenMethod) {
    const handleTriggerClick = useStableCallback((_, interactionType) => {
      const isOpen = typeof open === "function" ? open() : open;
      if (!isOpen) {
        setOpenMethod(interactionType || // On iOS Safari, the hitslop around touch targets means tapping outside an element's
        // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
        // will be "" in that case.
        (parts_exports.os.ios ? "touch" : ""));
      }
    });
    const {
      onClick,
      onPointerDown
    } = useEnhancedClickHandler(handleTriggerClick);
    return React73.useMemo(() => ({
      onClick,
      onPointerDown
    }), [onClick, onPointerDown]);
  }
  function useOpenInteractionType(open) {
    const [openMethod, setOpenMethod] = React73.useState(null);
    const triggerProps = useOpenMethodTriggerProps(open, setOpenMethod);
    useValueChanged(open, (previousOpen) => {
      if (previousOpen && !open) {
        setOpenMethod(null);
      }
    });
    return React73.useMemo(() => ({
      openMethod,
      triggerProps
    }), [openMethod, triggerProps]);
  }

  // node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
  var DialogTrigger = /* @__PURE__ */ React74.forwardRef(function DialogTrigger2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabled2 = false,
      nativeButton = true,
      id: idProp,
      payload,
      handle,
      ...elementProps
    } = componentProps;
    const dialogRootContext = useDialogRootContext(true);
    const store = handle?.store ?? dialogRootContext?.store;
    if (!store) {
      throw new Error(true ? "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle." : formatErrorMessage_default(79));
    }
    const thisTriggerId = useBaseUiId(idProp);
    const floatingContext = store.useState("floatingRootContext");
    const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
    const popupId = store.useState("triggerPopupId", thisTriggerId);
    const triggerElementRef = React74.useRef(null);
    const {
      registerTrigger,
      isMountedByThisTrigger
    } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
      payload
    });
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    const click = useClick(floatingContext, {
      enabled: floatingContext != null
    });
    const interactionTypeProps = useOpenMethodTriggerProps(() => store.select("open"), (interactionType) => {
      store.set("openMethod", interactionType);
    });
    const state = {
      disabled: disabled2,
      open: isOpenedByThisTrigger
    };
    const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
    return useRenderElement("button", componentProps, {
      state,
      ref: [buttonRef, forwardedRef, registerTrigger, triggerElementRef],
      props: [click.reference, rootTriggerProps, interactionTypeProps, {
        [CLICK_TRIGGER_IDENTIFIER]: "",
        id: thisTriggerId,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpenedByThisTrigger,
        "aria-controls": popupId
      }, elementProps, getButtonProps],
      stateAttributesMapping: triggerOpenStateMapping2
    });
  });
  if (true) DialogTrigger.displayName = "DialogTrigger";

  // node_modules/@base-ui/react/dialog/store/DialogHandle.mjs
  init_define_import_meta_env();
  var DialogHandle = class {
    /**
     * Internal store holding the dialog state.
     * @internal
     */
    constructor(store) {
      this.store = store ?? new DialogStore();
    }
    /**
     * Opens the dialog and associates it with the trigger with the given id.
     * The trigger, if provided, must be a matching Trigger component with this handle passed as a prop.
     *
     * This method should only be called in an event handler or an effect (not during rendering).
     *
     * @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
     */
    open(triggerId) {
      const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
      if (true) {
        if (triggerId && !triggerElement) {
          console.warn(`Base UI: DialogHandle.open: No trigger found with id "${triggerId}". The dialog will open, but the trigger will not be associated with the dialog.`);
        }
      }
      this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
    }
    /**
     * Opens the dialog and sets the payload.
     * Does not associate the dialog with any trigger.
     *
     * @param payload Payload to set when opening the dialog.
     */
    openWithPayload(payload) {
      this.store.set("payload", payload);
      this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
    }
    /**
     * Closes the dialog.
     */
    close() {
      this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
    }
    /**
     * Indicates whether the dialog is currently open.
     */
    get isOpen() {
      return this.store.select("open");
    }
  };
  function createDialogHandle() {
    return new DialogHandle();
  }

  // src/components/ui/dialog.tsx
  function Dialog({ ...props }) {
    return /* @__PURE__ */ React75.createElement(index_parts_exports2.Root, { "data-slot": "dialog", ...props });
  }
  function DialogTrigger3({ ...props }) {
    return /* @__PURE__ */ React75.createElement(index_parts_exports2.Trigger, { "data-slot": "dialog-trigger", ...props });
  }
  function DialogPortal3({ ...props }) {
    return /* @__PURE__ */ React75.createElement(index_parts_exports2.Portal, { "data-slot": "dialog-portal", ...props });
  }
  function DialogClose3({ ...props }) {
    return /* @__PURE__ */ React75.createElement(index_parts_exports2.Close, { "data-slot": "dialog-close", ...props });
  }
  function DialogOverlay({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React75.createElement(
      index_parts_exports2.Backdrop,
      {
        "data-slot": "dialog-overlay",
        className: cn(
          "fixed inset-0 isolate z-50 bg-black/60 duration-100 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
          className
        ),
        ...props
      }
    );
  }
  function DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
  }) {
    return /* @__PURE__ */ React75.createElement(DialogPortal3, null, /* @__PURE__ */ React75.createElement(DialogOverlay, null), /* @__PURE__ */ React75.createElement(
      index_parts_exports2.Popup,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100svh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-2xl bg-popover p-5 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-lg data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props
      },
      children,
      showCloseButton && /* @__PURE__ */ React75.createElement(
        index_parts_exports2.Close,
        {
          "data-slot": "dialog-close",
          render: /* @__PURE__ */ React75.createElement(
            Button3,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
              size: "icon-sm"
            }
          )
        },
        /* @__PURE__ */ React75.createElement(
          X,
          null
        ),
        /* @__PURE__ */ React75.createElement("span", { className: "sr-only" }, "Close")
      )
    ));
  }
  function DialogHeader({ className, ...props }) {
    return /* @__PURE__ */ React75.createElement(
      "div",
      {
        "data-slot": "dialog-header",
        className: cn("flex flex-col gap-2", className),
        ...props
      }
    );
  }
  function DialogFooter({
    className,
    showCloseButton = false,
    children,
    ...props
  }) {
    return /* @__PURE__ */ React75.createElement(
      "div",
      {
        "data-slot": "dialog-footer",
        className: cn(
          "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
          className
        ),
        ...props
      },
      children,
      showCloseButton && /* @__PURE__ */ React75.createElement(index_parts_exports2.Close, { render: /* @__PURE__ */ React75.createElement(Button3, { variant: "outline" }) }, "Close")
    );
  }
  function DialogTitle3({ className, ...props }) {
    return /* @__PURE__ */ React75.createElement(
      index_parts_exports2.Title,
      {
        "data-slot": "dialog-title",
        className: cn(
          "font-heading text-base leading-none font-medium",
          className
        ),
        ...props
      }
    );
  }
  function DialogDescription3({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React75.createElement(
      index_parts_exports2.Description,
      {
        "data-slot": "dialog-description",
        className: cn(
          "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
          className
        ),
        ...props
      }
    );
  }

  // src/components/ui/dropdown-menu.tsx
  init_define_import_meta_env();
  var React118 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/menu/index.parts.mjs
  var index_parts_exports3 = {};
  __export(index_parts_exports3, {
    Arrow: () => MenuArrow,
    Backdrop: () => MenuBackdrop,
    CheckboxItem: () => MenuCheckboxItem,
    CheckboxItemIndicator: () => MenuCheckboxItemIndicator,
    Group: () => MenuGroup,
    GroupLabel: () => MenuGroupLabel,
    Handle: () => MenuHandle,
    Item: () => MenuItem,
    LinkItem: () => MenuLinkItem,
    Popup: () => MenuPopup,
    Portal: () => MenuPortal,
    Positioner: () => MenuPositioner,
    RadioGroup: () => MenuRadioGroup,
    RadioItem: () => MenuRadioItem,
    RadioItemIndicator: () => MenuRadioItemIndicator,
    Root: () => MenuRoot,
    Separator: () => Separator,
    SubmenuRoot: () => MenuSubmenuRoot,
    SubmenuTrigger: () => MenuSubmenuTrigger,
    Trigger: () => MenuTrigger,
    Viewport: () => MenuViewport,
    createHandle: () => createMenuHandle
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/menu/arrow/MenuArrow.mjs
  init_define_import_meta_env();
  var React78 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/positioner/MenuPositionerContext.mjs
  init_define_import_meta_env();
  var React76 = __toESM(require_react_shim(), 1);
  var MenuPositionerContext = /* @__PURE__ */ React76.createContext(void 0);
  if (true) MenuPositionerContext.displayName = "MenuPositionerContext";
  function useMenuPositionerContext(optional) {
    const context = React76.useContext(MenuPositionerContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: MenuPositionerContext is missing. MenuPositioner parts must be placed within <Menu.Positioner>." : formatErrorMessage_default(33));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/root/MenuRootContext.mjs
  init_define_import_meta_env();
  var React77 = __toESM(require_react_shim(), 1);
  var MenuRootContext = /* @__PURE__ */ React77.createContext(void 0);
  if (true) MenuRootContext.displayName = "MenuRootContext";
  function useMenuRootContext(optional) {
    const context = React77.useContext(MenuRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: MenuRootContext is missing. Menu parts must be placed within <Menu.Root>." : formatErrorMessage_default(36));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/arrow/MenuArrow.mjs
  var MenuArrow = /* @__PURE__ */ React78.forwardRef(function MenuArrow2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useMenuRootContext();
    const {
      arrowRef,
      side,
      align,
      arrowUncentered,
      arrowStyles
    } = useMenuPositionerContext();
    const open = store.useState("open");
    const state = {
      open,
      side,
      align,
      uncentered: arrowUncentered
    };
    return useRenderElement("div", componentProps, {
      ref: [arrowRef, forwardedRef],
      stateAttributesMapping: popupStateMapping,
      state,
      props: {
        style: arrowStyles,
        "aria-hidden": true,
        ...elementProps
      }
    });
  });
  if (true) MenuArrow.displayName = "MenuArrow";

  // node_modules/@base-ui/react/menu/backdrop/MenuBackdrop.mjs
  init_define_import_meta_env();
  var React80 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs
  init_define_import_meta_env();
  var React79 = __toESM(require_react_shim(), 1);
  var ContextMenuRootContext = /* @__PURE__ */ React79.createContext(void 0);
  if (true) ContextMenuRootContext.displayName = "ContextMenuRootContext";
  function useContextMenuRootContext(optional = true) {
    const context = React79.useContext(ContextMenuRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>." : formatErrorMessage_default(25));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/backdrop/MenuBackdrop.mjs
  var stateAttributesMapping4 = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var MenuBackdrop = /* @__PURE__ */ React80.forwardRef(function MenuBackdrop2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useMenuRootContext();
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const transitionStatus = store.useState("transitionStatus");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const contextMenuContext = useContextMenuRootContext();
    const state = {
      open,
      transitionStatus
    };
    return useRenderElement("div", componentProps, {
      ref: contextMenuContext?.backdropRef ? [forwardedRef, contextMenuContext.backdropRef] : forwardedRef,
      state,
      stateAttributesMapping: stateAttributesMapping4,
      props: [{
        role: "presentation",
        hidden: !mounted,
        style: {
          pointerEvents: lastOpenChangeReason === reason_parts_exports.triggerHover ? "none" : void 0,
          userSelect: "none",
          WebkitUserSelect: "none"
        }
      }, elementProps]
    });
  });
  if (true) MenuBackdrop.displayName = "MenuBackdrop";

  // node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.mjs
  init_define_import_meta_env();
  var React84 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemContext.mjs
  init_define_import_meta_env();
  var React81 = __toESM(require_react_shim(), 1);
  var MenuCheckboxItemContext = /* @__PURE__ */ React81.createContext(void 0);
  if (true) MenuCheckboxItemContext.displayName = "MenuCheckboxItemContext";
  function useMenuCheckboxItemContext() {
    const context = React81.useContext(MenuCheckboxItemContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: MenuCheckboxItemContext is missing. MenuCheckboxItem parts must be placed within <Menu.CheckboxItem>." : formatErrorMessage_default(30));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/item/useMenuItem.mjs
  init_define_import_meta_env();
  var React83 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.mjs
  init_define_import_meta_env();
  var React82 = __toESM(require_react_shim(), 1);
  function useMenuItemCommonProps(params) {
    const {
      closeOnClick,
      highlighted,
      id,
      nodeId,
      store,
      typingRef,
      itemRef,
      itemMetadata
    } = params;
    const {
      events: menuEvents
    } = store.useState("floatingTreeRoot");
    const open = store.useState("open");
    const contextMenuContext = useContextMenuRootContext(true);
    const isContextMenu = contextMenuContext !== void 0;
    return React82.useMemo(() => ({
      id,
      role: "menuitem",
      tabIndex: open && highlighted ? 0 : -1,
      onKeyDown(event) {
        if (event.key === " " && typingRef?.current) {
          event.preventDefault();
        }
      },
      onMouseMove(event) {
        if (!nodeId) {
          return;
        }
        menuEvents.emit("itemhover", {
          nodeId,
          target: event.currentTarget
        });
      },
      onClick(event) {
        if (closeOnClick) {
          menuEvents.emit("close", {
            domEvent: event,
            reason: reason_parts_exports.itemPress
          });
        }
      },
      onMouseUp(event) {
        if (contextMenuContext) {
          const initialCursorPoint = contextMenuContext.initialCursorPointRef.current;
          contextMenuContext.initialCursorPointRef.current = null;
          if (isContextMenu && initialCursorPoint && Math.abs(event.clientX - initialCursorPoint.x) <= 1 && Math.abs(event.clientY - initialCursorPoint.y) <= 1) {
            return;
          }
          if (isContextMenu && !parts_exports.os.mac && event.button === 2) {
            return;
          }
        }
        if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
          if (!itemMetadata || itemMetadata.type === "regular-item") {
            itemRef.current.click();
          }
        }
      }
    }), [closeOnClick, highlighted, id, menuEvents, nodeId, open, store, typingRef, itemRef, contextMenuContext, isContextMenu, itemMetadata]);
  }

  // node_modules/@base-ui/react/menu/item/useMenuItem.mjs
  var REGULAR_ITEM = {
    type: "regular-item"
  };
  function useMenuItem(params) {
    const {
      closeOnClick,
      disabled: disabledProp = false,
      highlighted,
      id,
      store,
      typingRef = store.context.typingRef,
      nativeButton,
      itemMetadata,
      nodeId
    } = params;
    const rootDisabled = store.useState("disabled");
    const disabled2 = disabledProp || rootDisabled;
    const itemRef = React83.useRef(null);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      focusableWhenDisabled: true,
      native: nativeButton,
      composite: true
    });
    const commonProps = useMenuItemCommonProps({
      closeOnClick,
      highlighted,
      id,
      nodeId,
      store,
      typingRef,
      itemRef,
      itemMetadata
    });
    const getItemProps = React83.useCallback((externalProps) => {
      return mergeProps(commonProps, {
        onMouseEnter() {
          if (itemMetadata.type !== "submenu-trigger") {
            return;
          }
          itemMetadata.setActive();
        }
      }, externalProps, getButtonProps);
    }, [commonProps, getButtonProps, itemMetadata]);
    const mergedRef = useMergedRefs(itemRef, buttonRef);
    return React83.useMemo(() => ({
      getItemProps,
      itemRef: mergedRef
    }), [getItemProps, mergedRef]);
  }

  // node_modules/@base-ui/react/menu/utils/stateAttributesMapping.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemDataAttributes.mjs
  init_define_import_meta_env();
  var MenuCheckboxItemDataAttributes = /* @__PURE__ */ (function(MenuCheckboxItemDataAttributes2) {
    MenuCheckboxItemDataAttributes2["checked"] = "data-checked";
    MenuCheckboxItemDataAttributes2["unchecked"] = "data-unchecked";
    MenuCheckboxItemDataAttributes2["disabled"] = "data-disabled";
    MenuCheckboxItemDataAttributes2["highlighted"] = "data-highlighted";
    return MenuCheckboxItemDataAttributes2;
  })({});

  // node_modules/@base-ui/react/menu/utils/stateAttributesMapping.mjs
  var itemMapping = {
    checked(value) {
      if (value) {
        return {
          [MenuCheckboxItemDataAttributes.checked]: ""
        };
      }
      return {
        [MenuCheckboxItemDataAttributes.unchecked]: ""
      };
    },
    ...transitionStatusMapping
  };

  // node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.mjs
  var import_jsx_runtime13 = __toESM(require_react_shim(), 1);
  var MenuCheckboxItem = /* @__PURE__ */ React84.forwardRef(function MenuCheckboxItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      label,
      nativeButton = false,
      disabled: disabled2 = false,
      closeOnClick = false,
      checked: checkedProp,
      defaultChecked,
      onCheckedChange,
      style,
      ...elementProps
    } = componentProps;
    const listItem = useCompositeListItem({
      label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const id = useBaseUiId(idProp);
    const {
      store
    } = useMenuRootContext();
    const highlighted = store.useState("isActive", listItem.index);
    const itemProps = store.useState("itemProps");
    const [checked, setChecked] = useControlled({
      controlled: checkedProp,
      default: defaultChecked ?? false,
      name: "MenuCheckboxItem",
      state: "checked"
    });
    const {
      getItemProps,
      itemRef
    } = useMenuItem({
      closeOnClick,
      disabled: disabled2,
      highlighted,
      id,
      store,
      nativeButton,
      nodeId: menuPositionerContext?.context.nodeId,
      itemMetadata: REGULAR_ITEM
    });
    const state = React84.useMemo(() => ({
      disabled: disabled2,
      highlighted,
      checked
    }), [disabled2, highlighted, checked]);
    function handleClick(event) {
      const details = createChangeEventDetails(reason_parts_exports.itemPress, event.nativeEvent, void 0, {
        preventUnmountOnClose() {
        }
      });
      onCheckedChange?.(!checked, details);
      if (details.isCanceled) {
        return;
      }
      setChecked((currentlyChecked) => !currentlyChecked);
    }
    const element = useRenderElement("div", componentProps, {
      state,
      stateAttributesMapping: itemMapping,
      props: [itemProps, {
        role: "menuitemcheckbox",
        "aria-checked": checked,
        onClick: handleClick
      }, elementProps, getItemProps],
      ref: [itemRef, forwardedRef, listItem.ref]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(MenuCheckboxItemContext.Provider, {
      value: state,
      children: element
    });
  });
  if (true) MenuCheckboxItem.displayName = "MenuCheckboxItem";

  // node_modules/@base-ui/react/menu/checkbox-item-indicator/MenuCheckboxItemIndicator.mjs
  init_define_import_meta_env();
  var React85 = __toESM(require_react_shim(), 1);
  var MenuCheckboxItemIndicator = /* @__PURE__ */ React85.forwardRef(function MenuCheckboxItemIndicator2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      keepMounted = false,
      ...elementProps
    } = componentProps;
    const item = useMenuCheckboxItemContext();
    const indicatorRef = React85.useRef(null);
    const {
      transitionStatus,
      setMounted
    } = useTransitionStatus(item.checked);
    useOpenChangeComplete({
      open: item.checked,
      ref: indicatorRef,
      onComplete() {
        if (!item.checked) {
          setMounted(false);
        }
      }
    });
    const state = {
      checked: item.checked,
      disabled: item.disabled,
      highlighted: item.highlighted,
      transitionStatus
    };
    const element = useRenderElement("span", componentProps, {
      state,
      ref: [forwardedRef, indicatorRef],
      stateAttributesMapping: itemMapping,
      props: {
        "aria-hidden": true,
        ...elementProps
      },
      enabled: keepMounted || item.checked
    });
    return element;
  });
  if (true) MenuCheckboxItemIndicator.displayName = "MenuCheckboxItemIndicator";

  // node_modules/@base-ui/react/menu/group/MenuGroup.mjs
  init_define_import_meta_env();
  var React87 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/group/MenuGroupContext.mjs
  init_define_import_meta_env();
  var React86 = __toESM(require_react_shim(), 1);
  var MenuGroupContext = /* @__PURE__ */ React86.createContext(void 0);
  if (true) MenuGroupContext.displayName = "MenuGroupContext";
  function useMenuGroupRootContext() {
    const context = React86.useContext(MenuGroupContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: MenuGroupContext is missing. Menu group parts must be used within <Menu.Group> or <Menu.RadioGroup>." : formatErrorMessage_default(31));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/group/MenuGroup.mjs
  var import_jsx_runtime14 = __toESM(require_react_shim(), 1);
  var MenuGroup = /* @__PURE__ */ React87.forwardRef(function MenuGroup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const [labelId, setLabelId] = React87.useState(void 0);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      props: {
        role: "group",
        "aria-labelledby": labelId,
        ...elementProps
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MenuGroupContext.Provider, {
      value: setLabelId,
      children: element
    });
  });
  if (true) MenuGroup.displayName = "MenuGroup";

  // node_modules/@base-ui/react/menu/group-label/MenuGroupLabel.mjs
  init_define_import_meta_env();
  var React88 = __toESM(require_react_shim(), 1);
  var MenuGroupLabel = /* @__PURE__ */ React88.forwardRef(function MenuGroupLabel2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const id = useBaseUiId(idProp);
    const setLabelId = useMenuGroupRootContext();
    useIsoLayoutEffect(() => {
      setLabelId(id);
      return () => {
        setLabelId(void 0);
      };
    }, [setLabelId, id]);
    return useRenderElement("div", componentProps, {
      ref: forwardedRef,
      props: {
        id,
        role: "presentation",
        ...elementProps
      }
    });
  });
  if (true) MenuGroupLabel.displayName = "MenuGroupLabel";

  // node_modules/@base-ui/react/menu/item/MenuItem.mjs
  init_define_import_meta_env();
  var React89 = __toESM(require_react_shim(), 1);
  var MenuItem = /* @__PURE__ */ React89.forwardRef(function MenuItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      label,
      nativeButton = false,
      disabled: disabled2 = false,
      closeOnClick = true,
      style,
      ...elementProps
    } = componentProps;
    const listItem = useCompositeListItem({
      label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const id = useBaseUiId(idProp);
    const {
      store
    } = useMenuRootContext();
    const highlighted = store.useState("isActive", listItem.index);
    const itemProps = store.useState("itemProps");
    const {
      getItemProps,
      itemRef
    } = useMenuItem({
      closeOnClick,
      disabled: disabled2,
      highlighted,
      id,
      store,
      nativeButton,
      nodeId: menuPositionerContext?.context.nodeId,
      itemMetadata: REGULAR_ITEM
    });
    const state = {
      disabled: disabled2,
      highlighted
    };
    return useRenderElement("div", componentProps, {
      state,
      props: [itemProps, elementProps, getItemProps],
      ref: [itemRef, forwardedRef, listItem.ref]
    });
  });
  if (true) MenuItem.displayName = "MenuItem";

  // node_modules/@base-ui/react/menu/link-item/MenuLinkItem.mjs
  init_define_import_meta_env();
  var React90 = __toESM(require_react_shim(), 1);
  var MenuLinkItem = /* @__PURE__ */ React90.forwardRef(function MenuLinkItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      label,
      closeOnClick = false,
      style,
      ...elementProps
    } = componentProps;
    const linkRef = React90.useRef(null);
    const listItem = useCompositeListItem({
      label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const nodeId = menuPositionerContext?.context.nodeId;
    const id = useBaseUiId(idProp);
    const {
      store
    } = useMenuRootContext();
    const highlighted = store.useState("isActive", listItem.index);
    const itemProps = store.useState("itemProps");
    const typingRef = store.context.typingRef;
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      native: false,
      composite: true
    });
    const commonProps = useMenuItemCommonProps({
      closeOnClick,
      highlighted,
      id,
      nodeId,
      store,
      typingRef,
      itemRef: linkRef
    });
    function getItemProps(externalProps) {
      return mergeProps(commonProps, externalProps, getButtonProps);
    }
    const state = {
      highlighted
    };
    return useRenderElement("a", componentProps, {
      state,
      props: [itemProps, elementProps, getItemProps],
      ref: [linkRef, buttonRef, forwardedRef, listItem.ref]
    });
  });
  if (true) MenuLinkItem.displayName = "MenuLinkItem";

  // node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
  init_define_import_meta_env();
  var React92 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs
  init_define_import_meta_env();
  var React91 = __toESM(require_react_shim(), 1);
  var ToolbarRootContext = /* @__PURE__ */ React91.createContext(void 0);
  if (true) ToolbarRootContext.displayName = "ToolbarRootContext";
  function useToolbarRootContext(optional) {
    const context = React91.useContext(ToolbarRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>." : formatErrorMessage_default(69));
    }
    return context;
  }

  // node_modules/@base-ui/react/utils/getDisabledMountTransitionStyles.mjs
  init_define_import_meta_env();
  function getDisabledMountTransitionStyles(transitionStatus) {
    return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
  }

  // node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
  var import_jsx_runtime15 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping5 = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var MenuPopup = /* @__PURE__ */ React92.forwardRef(function MenuPopup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      finalFocus,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useMenuRootContext();
    const {
      side,
      align
    } = useMenuPositionerContext();
    const insideToolbar = useToolbarRootContext(true) != null;
    const open = store.useState("open");
    const transitionStatus = store.useState("transitionStatus");
    const popupProps = store.useState("popupProps");
    const mounted = store.useState("mounted");
    const instantType = store.useState("instantType");
    const triggerElement = store.useState("activeTriggerElement");
    const parent = store.useState("parent");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const rootId = store.useState("rootId");
    const floatingContext = store.useState("floatingRootContext");
    const floatingTreeRoot = store.useState("floatingTreeRoot");
    const closeDelay = store.useState("closeDelay");
    const activeTriggerElement = store.useState("activeTriggerElement");
    const hoverEnabled = store.useState("hoverEnabled");
    const disabled2 = store.useState("disabled");
    const openMethod = store.useState("openMethod");
    const isContextMenu = parent.type === "context-menu";
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      }
    });
    React92.useEffect(() => {
      function handleClose(event) {
        store.setOpen(false, createChangeEventDetails(event.reason, event.domEvent));
      }
      floatingTreeRoot.events.on("close", handleClose);
      return () => {
        floatingTreeRoot.events.off("close", handleClose);
      };
    }, [floatingTreeRoot.events, store]);
    useHoverFloatingInteraction(floatingContext, {
      enabled: hoverEnabled && !disabled2 && !isContextMenu && parent.type !== "menubar",
      closeDelay
    });
    const setPopupElement = React92.useCallback((element2) => {
      store.set("popupElement", element2);
    }, [store]);
    const state = {
      transitionStatus,
      side,
      align,
      open,
      nested: parent.type === "menu",
      instant: instantType
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, store.context.popupRef, setPopupElement],
      stateAttributesMapping: stateAttributesMapping5,
      props: [popupProps, {
        onKeyDown(event) {
          if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
            event.stopPropagation();
          }
        }
      }, getDisabledMountTransitionStyles(transitionStatus), elementProps, {
        "data-rootownerid": rootId
      }]
    });
    let returnFocus = parent.type === void 0 || isContextMenu;
    if (triggerElement || parent.type === "menubar" && lastOpenChangeReason !== reason_parts_exports.outsidePress) {
      returnFocus = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FloatingFocusManager, {
      context: floatingContext,
      openInteractionType: openMethod,
      modal: isContextMenu,
      disabled: !mounted,
      returnFocus: finalFocus === void 0 ? returnFocus : finalFocus,
      initialFocus: parent.type !== "menu",
      restoreFocus: true,
      externalTree: parent.type !== "menubar" ? floatingTreeRoot : void 0,
      previousFocusableElement: activeTriggerElement,
      nextFocusableElement: parent.type === void 0 ? store.context.triggerFocusTargetRef : void 0,
      beforeContentFocusGuardRef: parent.type === void 0 ? store.context.beforeContentFocusGuardRef : void 0,
      children: element
    });
  });
  if (true) MenuPopup.displayName = "MenuPopup";

  // node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
  init_define_import_meta_env();
  var React94 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/portal/MenuPortalContext.mjs
  init_define_import_meta_env();
  var React93 = __toESM(require_react_shim(), 1);
  var MenuPortalContext = /* @__PURE__ */ React93.createContext(void 0);
  if (true) MenuPortalContext.displayName = "MenuPortalContext";
  function useMenuPortalContext() {
    const value = React93.useContext(MenuPortalContext);
    if (value === void 0) {
      throw new Error(true ? "Base UI: <Menu.Portal> is missing." : formatErrorMessage_default(32));
    }
    return value;
  }

  // node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
  var import_jsx_runtime16 = __toESM(require_react_shim(), 1);
  var MenuPortal = /* @__PURE__ */ React94.forwardRef(function MenuPortal2(props, forwardedRef) {
    const {
      keepMounted = false,
      ...portalProps
    } = props;
    const {
      store
    } = useMenuRootContext();
    const mounted = store.useState("mounted");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(MenuPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(FloatingPortal, {
        ref: forwardedRef,
        ...portalProps
      })
    });
  });
  if (true) MenuPortal.displayName = "MenuPortal";

  // node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
  init_define_import_meta_env();
  var React97 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/useAnchorPositioning.mjs
  init_define_import_meta_env();
  var React95 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
  init_define_import_meta_env();
  var baseArrow = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform3,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0,
        offsetParent = "real"
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform3.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = offsetParent === "real" ? await platform3.getOffsetParent?.(element) : elements.floating;
      let clientSize = elements.floating[clientProp] || rects.floating[length];
      if (!clientSize || !await platform3.isElement?.(arrowOffsetParent)) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
      const min2 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset4 = clamp(min2, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min2 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min2 ? center - min2 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset4,
          centerOffset: center - offset4 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  var arrow4 = (options, deps) => ({
    ...baseArrow(options),
    options: [options, deps]
  });

  // node_modules/@base-ui/react/utils/hideMiddleware.mjs
  init_define_import_meta_env();
  var nativeHideFn = hide3().fn;
  var hide4 = {
    name: "hide",
    async fn(state) {
      const {
        width,
        height,
        x,
        y
      } = state.rects.reference;
      const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
      const nativeHideResult = await nativeHideFn(state);
      return {
        data: {
          referenceHidden: nativeHideResult.data?.referenceHidden || anchorHidden
        }
      };
    }
  };

  // node_modules/@base-ui/react/utils/adaptiveOriginMiddleware.mjs
  init_define_import_meta_env();
  var DEFAULT_SIDES = {
    sideX: "left",
    sideY: "top"
  };
  var adaptiveOrigin = {
    name: "adaptiveOrigin",
    async fn(state) {
      const {
        x: rawX,
        y: rawY,
        rects: {
          floating: floatRect
        },
        elements: {
          floating
        },
        platform: platform3,
        strategy,
        placement
      } = state;
      const win = getWindow(floating);
      const styles = win.getComputedStyle(floating);
      const hasTransition = styles.transitionDuration !== "0s" && styles.transitionDuration !== "";
      if (!hasTransition) {
        return {
          x: rawX,
          y: rawY,
          data: DEFAULT_SIDES
        };
      }
      const offsetParent = await platform3.getOffsetParent?.(floating);
      let offsetDimensions = {
        width: 0,
        height: 0
      };
      if (strategy === "fixed" && win?.visualViewport) {
        offsetDimensions = {
          width: win.visualViewport.width,
          height: win.visualViewport.height
        };
      } else if (offsetParent === win) {
        const doc = ownerDocument(floating);
        offsetDimensions = {
          width: doc.documentElement.clientWidth,
          height: doc.documentElement.clientHeight
        };
      } else if (await platform3.isElement?.(offsetParent)) {
        offsetDimensions = await platform3.getDimensions(offsetParent);
      }
      const currentSide = getSide(placement);
      let x = rawX;
      let y = rawY;
      if (currentSide === "left") {
        x = offsetDimensions.width - (rawX + floatRect.width);
      }
      if (currentSide === "top") {
        y = offsetDimensions.height - (rawY + floatRect.height);
      }
      const sideX = currentSide === "left" ? "right" : DEFAULT_SIDES.sideX;
      const sideY = currentSide === "top" ? "bottom" : DEFAULT_SIDES.sideY;
      return {
        x,
        y,
        data: {
          sideX,
          sideY
        }
      };
    }
  };

  // node_modules/@base-ui/react/utils/useAnchorPositioning.mjs
  function getLogicalSide(sideParam, renderedSide, isRtl) {
    const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
    const logicalRight = isRtl ? "inline-start" : "inline-end";
    const logicalLeft = isRtl ? "inline-end" : "inline-start";
    return {
      top: "top",
      right: isLogicalSideParam ? logicalRight : "right",
      bottom: "bottom",
      left: isLogicalSideParam ? logicalLeft : "left"
    }[renderedSide];
  }
  function getOffsetData(state, sideParam, isRtl) {
    const {
      rects,
      placement
    } = state;
    const data = {
      side: getLogicalSide(sideParam, getSide(placement), isRtl),
      align: getAlignment(placement) || "center",
      anchor: {
        width: rects.reference.width,
        height: rects.reference.height
      },
      positioner: {
        width: rects.floating.width,
        height: rects.floating.height
      }
    };
    return data;
  }
  function useAnchorPositioning(params) {
    const {
      // Public parameters
      anchor,
      positionMethod = "absolute",
      side: sideParam = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      collisionBoundary,
      collisionPadding: collisionPaddingParam = 5,
      sticky = false,
      arrowPadding = 5,
      disableAnchorTracking = false,
      inline: inlineMiddleware,
      // Private parameters
      keepMounted = false,
      floatingRootContext,
      mounted,
      collisionAvoidance,
      shiftCrossAxis = false,
      nodeId,
      adaptiveOrigin: adaptiveOrigin2,
      lazyFlip = false,
      externalTree
    } = params;
    const [mountSide, setMountSide] = React95.useState(null);
    if (!mounted && mountSide !== null) {
      setMountSide(null);
    }
    const collisionAvoidanceSide = collisionAvoidance.side || "flip";
    const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
    const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
    const anchorFn = typeof anchor === "function" ? anchor : void 0;
    const anchorFnCallback = useStableCallback(anchorFn);
    const anchorDep = anchorFn ? anchorFnCallback : anchor;
    const anchorValueRef = useValueAsRef(anchor);
    const mountedRef = useValueAsRef(mounted);
    const direction = useDirection();
    const isRtl = direction === "rtl";
    const side = mountSide || {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
      "inline-end": isRtl ? "left" : "right",
      "inline-start": isRtl ? "right" : "left"
    }[sideParam];
    const placement = align === "center" ? side : `${side}-${align}`;
    let collisionPadding = collisionPaddingParam;
    const bias = 1;
    const biasTop = sideParam === "bottom" ? bias : 0;
    const biasBottom = sideParam === "top" ? bias : 0;
    const biasLeft = sideParam === "right" ? bias : 0;
    const biasRight = sideParam === "left" ? bias : 0;
    if (typeof collisionPadding === "number") {
      collisionPadding = {
        top: collisionPadding + biasTop,
        right: collisionPadding + biasRight,
        bottom: collisionPadding + biasBottom,
        left: collisionPadding + biasLeft
      };
    } else if (collisionPadding) {
      collisionPadding = {
        top: (collisionPadding.top || 0) + biasTop,
        right: (collisionPadding.right || 0) + biasRight,
        bottom: (collisionPadding.bottom || 0) + biasBottom,
        left: (collisionPadding.left || 0) + biasLeft
      };
    }
    const commonCollisionProps = {
      boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
      padding: collisionPadding
    };
    const arrowRef = React95.useRef(null);
    const sideOffsetRef = useValueAsRef(sideOffset);
    const alignOffsetRef = useValueAsRef(alignOffset);
    const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
    const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
    const middleware = [];
    if (inlineMiddleware) {
      middleware.push(inlineMiddleware);
    }
    middleware.push(offset3((state) => {
      const data = getOffsetData(state, sideParam, isRtl);
      const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
      const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
      return {
        mainAxis: sideAxis,
        crossAxis: alignAxis,
        alignmentAxis: alignAxis
      };
    }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam]));
    const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
    const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
    const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip3({
      ...commonCollisionProps,
      // Ensure the popup flips if it's been limited by its --available-height and it resizes.
      // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
      padding: {
        top: collisionPadding.top + bias,
        right: collisionPadding.right + bias,
        bottom: collisionPadding.bottom + bias,
        left: collisionPadding.left + bias
      },
      mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
      crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
      fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
    });
    const shiftMiddleware = shiftDisabled ? null : shift3((data) => {
      const html = ownerDocument(data.elements.floating).documentElement;
      return {
        ...commonCollisionProps,
        // Use the Layout Viewport to avoid shifting around when pinch-zooming
        // for context menus.
        rootBoundary: shiftCrossAxis ? {
          x: 0,
          y: 0,
          width: html.clientWidth,
          height: html.clientHeight
        } : void 0,
        mainAxis: collisionAvoidanceAlign !== "none",
        crossAxis: crossAxisShiftEnabled,
        limiter: sticky || shiftCrossAxis ? void 0 : limitShift3((limitData) => {
          if (!arrowRef.current) {
            return {};
          }
          const {
            width,
            height
          } = arrowRef.current.getBoundingClientRect();
          const sideAxis = getSideAxis(getSide(limitData.placement));
          const arrowSize = sideAxis === "y" ? width : height;
          const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
          return {
            offset: arrowSize / 2 + offsetAmount / 2
          };
        })
      };
    }, [commonCollisionProps, sticky, shiftCrossAxis, collisionPadding, collisionAvoidanceAlign]);
    if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") {
      middleware.push(shiftMiddleware, flipMiddleware);
    } else {
      middleware.push(flipMiddleware, shiftMiddleware);
    }
    middleware.push(size3({
      ...commonCollisionProps,
      apply({
        elements: {
          floating
        },
        availableWidth,
        availableHeight,
        rects
      }) {
        if (!mountedRef.current) {
          return;
        }
        const floatingStyle = floating.style;
        floatingStyle.setProperty("--available-width", `${availableWidth}px`);
        floatingStyle.setProperty("--available-height", `${availableHeight}px`);
        const dpr = getWindow(floating).devicePixelRatio || 1;
        const {
          x: x2,
          y: y2,
          width,
          height
        } = rects.reference;
        const anchorWidth = (Math.round((x2 + width) * dpr) - Math.round(x2 * dpr)) / dpr;
        const anchorHeight = (Math.round((y2 + height) * dpr) - Math.round(y2 * dpr)) / dpr;
        floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
        floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
      }
    }), arrow4((state) => ({
      // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
      // we'll create a fake element.
      element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
      padding: arrowPadding,
      offsetParent: "floating"
    }), [arrowPadding]), {
      name: "transformOrigin",
      fn(state) {
        const {
          elements: elements2,
          middlewareData: middlewareData2,
          placement: renderedPlacement2,
          rects,
          y: y2
        } = state;
        const currentRenderedSide = getSide(renderedPlacement2);
        const currentRenderedAxis = getSideAxis(currentRenderedSide);
        const arrowEl = arrowRef.current;
        const arrowX = middlewareData2.arrow?.x || 0;
        const arrowY = middlewareData2.arrow?.y || 0;
        const arrowWidth = arrowEl?.clientWidth || 0;
        const arrowHeight = arrowEl?.clientHeight || 0;
        const transformX = arrowX + arrowWidth / 2;
        const transformY = arrowY + arrowHeight / 2;
        const shiftY = Math.abs(middlewareData2.shift?.y || 0);
        const halfAnchorHeight = rects.reference.height / 2;
        const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
        const isOverlappingAnchor = shiftY > sideOffsetValue;
        const adjacentTransformOrigin = {
          top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
          bottom: `${transformX}px ${-sideOffsetValue}px`,
          left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
          right: `${-sideOffsetValue}px ${transformY}px`
        }[currentRenderedSide];
        const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y2}px`;
        elements2.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
        return {};
      }
    }, hide4, adaptiveOrigin2);
    useIsoLayoutEffect(() => {
      if (!mounted && floatingRootContext) {
        floatingRootContext.update({
          referenceElement: null,
          floatingElement: null,
          domReferenceElement: null,
          positionReference: null
        });
      }
    }, [mounted, floatingRootContext]);
    const autoUpdateOptions = React95.useMemo(() => ({
      elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
      layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
    }), [disableAnchorTracking]);
    const {
      refs,
      elements,
      x,
      y,
      middlewareData,
      update: update2,
      placement: renderedPlacement,
      context,
      isPositioned,
      floatingStyles: originalFloatingStyles
    } = useFloating2({
      rootContext: floatingRootContext,
      open: keepMounted ? mounted : void 0,
      placement,
      middleware,
      strategy: positionMethod,
      whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
      nodeId,
      externalTree
    });
    const {
      sideX,
      sideY
    } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
    const resolvedPosition = isPositioned ? positionMethod : "fixed";
    const floatingStyles = React95.useMemo(() => {
      const base = adaptiveOrigin2 ? {
        position: resolvedPosition,
        [sideX]: x,
        [sideY]: y
      } : {
        position: resolvedPosition,
        ...originalFloatingStyles
      };
      if (!isPositioned) {
        base.opacity = 0;
      }
      return base;
    }, [adaptiveOrigin2, resolvedPosition, sideX, x, sideY, y, originalFloatingStyles, isPositioned]);
    const registeredPositionReferenceRef = React95.useRef(null);
    useIsoLayoutEffect(() => {
      if (!mounted) {
        return;
      }
      const anchorValue = anchorValueRef.current;
      const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
      const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
      const finalAnchor = unwrappedElement || null;
      if (finalAnchor !== registeredPositionReferenceRef.current) {
        refs.setPositionReference(finalAnchor);
        registeredPositionReferenceRef.current = finalAnchor;
      }
    }, [mounted, refs, anchorDep, anchorValueRef]);
    React95.useEffect(() => {
      if (!mounted) {
        return;
      }
      const anchorValue = anchorValueRef.current;
      if (typeof anchorValue === "function") {
        return;
      }
      if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
        refs.setPositionReference(anchorValue.current);
        registeredPositionReferenceRef.current = anchorValue.current;
      }
    }, [mounted, refs, anchorDep, anchorValueRef]);
    React95.useEffect(() => {
      if (keepMounted && mounted && elements.reference && elements.floating) {
        return autoUpdate(elements.reference, elements.floating, update2, autoUpdateOptions);
      }
      return void 0;
    }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
    const renderedSide = getSide(renderedPlacement);
    const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
    const renderedAlign = getAlignment(renderedPlacement) || "center";
    const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
    useIsoLayoutEffect(() => {
      if (lazyFlip && mounted && isPositioned) {
        setMountSide(renderedSide);
      }
    }, [lazyFlip, mounted, isPositioned, renderedSide]);
    const arrowStyles = React95.useMemo(() => ({
      position: "absolute",
      top: middlewareData.arrow?.y,
      left: middlewareData.arrow?.x
    }), [middlewareData.arrow]);
    const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
    return React95.useMemo(() => ({
      positionerStyles: floatingStyles,
      arrowStyles,
      arrowRef,
      arrowUncentered,
      side: logicalRenderedSide,
      align: renderedAlign,
      physicalSide: renderedSide,
      anchorHidden,
      refs,
      context,
      isPositioned,
      update: update2
    }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update2]);
  }
  function isRef(param) {
    return param != null && "current" in param;
  }

  // node_modules/@base-ui/react/utils/usePositioner.mjs
  init_define_import_meta_env();
  function usePositioner(componentProps, state, {
    styles,
    transitionStatus,
    props,
    refs,
    hidden,
    inert = false
  }) {
    const style = {
      ...styles
    };
    if (inert) {
      style.pointerEvents = "none";
    }
    return useRenderElement("div", componentProps, {
      state,
      ref: refs,
      props: [{
        role: "presentation",
        hidden,
        style
      }, getDisabledMountTransitionStyles(transitionStatus), props],
      stateAttributesMapping: popupStateMapping
    });
  }

  // node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
  init_define_import_meta_env();
  var React96 = __toESM(require_react_shim(), 1);
  var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
  function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
    const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = React96.useState(false);
    useIsoLayoutEffect(() => {
      if (!enabled || !touchOpen || positionerElement == null) {
        setTouchOpenShouldLockScroll(false);
        return;
      }
      const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
      const popupWidth = positionerElement.offsetWidth;
      setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
    }, [enabled, touchOpen, positionerElement]);
    useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
  }

  // node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
  var import_jsx_runtime17 = __toESM(require_react_shim(), 1);
  var MenuPositioner = /* @__PURE__ */ React97.forwardRef(function MenuPositioner2(componentProps, forwardedRef) {
    const {
      anchor: anchorProp,
      positionMethod: positionMethodProp = "absolute",
      className,
      render,
      side,
      align: alignProp,
      sideOffset: sideOffsetProp = 0,
      alignOffset: alignOffsetProp = 0,
      collisionBoundary = "clipping-ancestors",
      collisionPadding = 5,
      arrowPadding = 5,
      sticky = false,
      disableAnchorTracking = false,
      collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useMenuRootContext();
    const keepMounted = useMenuPortalContext();
    const contextMenuContext = useContextMenuRootContext(true);
    const parent = store.useState("parent");
    const floatingRootContext = store.useState("floatingRootContext");
    const floatingTreeRoot = store.useState("floatingTreeRoot");
    const mounted = store.useState("mounted");
    const open = store.useState("open");
    const modal = store.useState("modal");
    const openMethod = store.useState("openMethod");
    const triggerElement = store.useState("activeTriggerElement");
    const transitionStatus = store.useState("transitionStatus");
    const positionerElement = store.useState("positionerElement");
    const instantType = store.useState("instantType");
    const hasViewport = store.useState("hasViewport");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const floatingNodeId = store.useState("floatingNodeId");
    const floatingParentNodeId = store.useState("floatingParentNodeId");
    const domReference = floatingRootContext.useState("domReferenceElement");
    const previousTriggerRef = React97.useRef(null);
    const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
    let anchor = anchorProp;
    let sideOffset = sideOffsetProp;
    let alignOffset = alignOffsetProp;
    let align = alignProp;
    let collisionAvoidance = collisionAvoidanceProp;
    if (parent.type === "context-menu") {
      anchor = anchorProp ?? parent.context?.anchor;
      align = align ?? "start";
      if (!side && align !== "center") {
        alignOffset = componentProps.alignOffset ?? 2;
        sideOffset = componentProps.sideOffset ?? -5;
      }
    }
    let computedSide = side;
    let computedAlign = align;
    if (parent.type === "menu") {
      computedSide = computedSide ?? "inline-end";
      computedAlign = computedAlign ?? "start";
      collisionAvoidance = componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
    } else if (parent.type === "menubar") {
      computedSide = computedSide ?? (parent.context.orientation === "vertical" ? "inline-end" : "bottom");
      computedAlign = computedAlign ?? "start";
    }
    const contextMenu = parent.type === "context-menu";
    const positioner = useAnchorPositioning({
      anchor,
      floatingRootContext,
      positionMethod: contextMenuContext ? "fixed" : positionMethodProp,
      mounted,
      side: computedSide,
      sideOffset,
      align: computedAlign,
      alignOffset,
      arrowPadding: contextMenu ? 0 : arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      nodeId: floatingNodeId,
      keepMounted,
      disableAnchorTracking,
      collisionAvoidance,
      shiftCrossAxis: contextMenu && !("side" in collisionAvoidance && collisionAvoidance.side === "flip"),
      externalTree: floatingTreeRoot,
      adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
    });
    React97.useEffect(() => {
      function onMenuOpenChange(details) {
        if (details.open) {
          if (details.parentNodeId === floatingNodeId) {
            store.set("hoverEnabled", false);
          }
          if (details.nodeId !== floatingNodeId && details.parentNodeId === store.select("floatingParentNodeId")) {
            store.setOpen(false, createChangeEventDetails(reason_parts_exports.siblingOpen));
          }
        }
      }
      floatingTreeRoot.events.on("menuopenchange", onMenuOpenChange);
      return () => {
        floatingTreeRoot.events.off("menuopenchange", onMenuOpenChange);
      };
    }, [store, floatingTreeRoot.events, floatingNodeId]);
    React97.useEffect(() => {
      if (store.select("floatingParentNodeId") == null) {
        return void 0;
      }
      function onParentClose(details) {
        if (details.open || details.nodeId !== store.select("floatingParentNodeId")) {
          return;
        }
        const reason = details.reason ?? reason_parts_exports.siblingOpen;
        store.setOpen(false, createChangeEventDetails(reason));
      }
      floatingTreeRoot.events.on("menuopenchange", onParentClose);
      return () => {
        floatingTreeRoot.events.off("menuopenchange", onParentClose);
      };
    }, [floatingTreeRoot.events, store]);
    const closeTimeout = useTimeout();
    React97.useEffect(() => {
      if (!open) {
        closeTimeout.clear();
      }
    }, [open, closeTimeout]);
    React97.useEffect(() => {
      function onItemHover(event) {
        if (!open || event.nodeId !== store.select("floatingParentNodeId")) {
          return;
        }
        if (event.target && triggerElement && triggerElement !== event.target) {
          const delay = store.select("closeDelay");
          if (delay > 0) {
            if (!closeTimeout.isStarted()) {
              closeTimeout.start(delay, () => {
                store.setOpen(false, createChangeEventDetails(reason_parts_exports.siblingOpen));
              });
            }
          } else {
            store.setOpen(false, createChangeEventDetails(reason_parts_exports.siblingOpen));
          }
        } else {
          closeTimeout.clear();
        }
      }
      floatingTreeRoot.events.on("itemhover", onItemHover);
      return () => {
        floatingTreeRoot.events.off("itemhover", onItemHover);
      };
    }, [floatingTreeRoot.events, open, triggerElement, store, closeTimeout]);
    React97.useEffect(() => {
      const eventDetails = {
        open,
        nodeId: floatingNodeId,
        parentNodeId: floatingParentNodeId,
        reason: store.select("lastOpenChangeReason")
      };
      floatingTreeRoot.events.emit("menuopenchange", eventDetails);
    }, [floatingTreeRoot.events, open, store, floatingNodeId, floatingParentNodeId]);
    useIsoLayoutEffect(() => {
      const currentTrigger = domReference;
      const previousTrigger = previousTriggerRef.current;
      if (currentTrigger) {
        previousTriggerRef.current = currentTrigger;
      }
      if (previousTrigger && currentTrigger && currentTrigger !== previousTrigger) {
        store.set("instantType", void 0);
        const abortController = new AbortController();
        runOnceAnimationsFinish(() => {
          store.set("instantType", "trigger-change");
        }, abortController.signal);
        return () => {
          abortController.abort();
        };
      }
      return void 0;
    }, [domReference, runOnceAnimationsFinish, store]);
    const state = {
      open,
      side: positioner.side,
      align: positioner.align,
      anchorHidden: positioner.anchorHidden,
      nested: parent.type === "menu",
      instant: instantType
    };
    const menubarModal = parent.type === "menubar" && parent.context.modal;
    const popupModal = modal && lastOpenChangeReason !== reason_parts_exports.triggerHover;
    useAnchoredPopupScrollLock(open && (menubarModal || popupModal), openMethod === "touch", positionerElement, triggerElement);
    const element = usePositioner(componentProps, state, {
      styles: positioner.positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, store.useStateSetter("positionerElement")],
      hidden: !mounted,
      inert: !open
    });
    const shouldRenderBackdrop = mounted && parent.type !== "menu" && (parent.type !== "menubar" && modal && lastOpenChangeReason !== reason_parts_exports.triggerHover || parent.type === "menubar" && parent.context.modal);
    let backdropCutout = null;
    if (parent.type === "menubar") {
      backdropCutout = parent.context.contentElement;
    } else if (parent.type === void 0) {
      backdropCutout = triggerElement;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(MenuPositionerContext.Provider, {
      value: positioner,
      children: [shouldRenderBackdrop && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(InternalBackdrop, {
        ref: parent.type === "context-menu" || parent.type === "nested-context-menu" ? parent.context.internalBackdropRef : null,
        inert: inertValue(!open),
        cutout: backdropCutout
      }), /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(FloatingNode, {
        id: floatingNodeId,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CompositeList, {
          elementsRef: store.context.itemDomElements,
          labelsRef: store.context.itemLabels,
          children: element
        })
      })]
    });
  });
  if (true) MenuPositioner.displayName = "MenuPositioner";

  // node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.mjs
  init_define_import_meta_env();
  var React99 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/radio-group/MenuRadioGroupContext.mjs
  init_define_import_meta_env();
  var React98 = __toESM(require_react_shim(), 1);
  var MenuRadioGroupContext = /* @__PURE__ */ React98.createContext(void 0);
  if (true) MenuRadioGroupContext.displayName = "MenuRadioGroupContext";
  function useMenuRadioGroupContext() {
    const context = React98.useContext(MenuRadioGroupContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: MenuRadioGroupContext is missing. MenuRadioGroup parts must be placed within <Menu.RadioGroup>." : formatErrorMessage_default(34));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.mjs
  var import_jsx_runtime18 = __toESM(require_react_shim(), 1);
  var MenuRadioGroup = /* @__PURE__ */ React99.memo(/* @__PURE__ */ React99.forwardRef(function MenuRadioGroup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      value: valueProp,
      defaultValue,
      onValueChange: onValueChangeProp,
      disabled: disabled2 = false,
      style,
      "aria-labelledby": ariaLabelledByProp,
      ...elementProps
    } = componentProps;
    const [labelId, setLabelId] = React99.useState(void 0);
    const [value, setValueUnwrapped] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: "MenuRadioGroup"
    });
    const setValue = useStableCallback((newValue, eventDetails) => {
      onValueChangeProp?.(newValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setValueUnwrapped(newValue);
    });
    const state = {
      disabled: disabled2
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: {
        role: "group",
        "aria-labelledby": ariaLabelledByProp ?? labelId,
        "aria-disabled": disabled2 || void 0,
        ...elementProps
      }
    });
    const context = React99.useMemo(() => ({
      value,
      setValue,
      disabled: disabled2
    }), [value, setValue, disabled2]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MenuGroupContext.Provider, {
      value: setLabelId,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MenuRadioGroupContext.Provider, {
        value: context,
        children: element
      })
    });
  }));
  if (true) MenuRadioGroup.displayName = "MenuRadioGroup";

  // node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.mjs
  init_define_import_meta_env();
  var React101 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menu/radio-item/MenuRadioItemContext.mjs
  init_define_import_meta_env();
  var React100 = __toESM(require_react_shim(), 1);
  var MenuRadioItemContext = /* @__PURE__ */ React100.createContext(void 0);
  if (true) MenuRadioItemContext.displayName = "MenuRadioItemContext";
  function useMenuRadioItemContext() {
    const context = React100.useContext(MenuRadioItemContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: MenuRadioItemContext is missing. MenuRadioItem parts must be placed within <Menu.RadioItem>." : formatErrorMessage_default(35));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.mjs
  var import_jsx_runtime19 = __toESM(require_react_shim(), 1);
  var MenuRadioItem = /* @__PURE__ */ React101.forwardRef(function MenuRadioItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      label,
      nativeButton = false,
      disabled: disabledProp = false,
      closeOnClick = false,
      value,
      style,
      ...elementProps
    } = componentProps;
    const listItem = useCompositeListItem({
      label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const id = useBaseUiId(idProp);
    const {
      store
    } = useMenuRootContext();
    const highlighted = store.useState("isActive", listItem.index);
    const itemProps = store.useState("itemProps");
    const {
      value: selectedValue,
      setValue: setSelectedValue,
      disabled: groupDisabled
    } = useMenuRadioGroupContext();
    const disabled2 = groupDisabled || disabledProp;
    const checked = selectedValue === value;
    const {
      getItemProps,
      itemRef
    } = useMenuItem({
      closeOnClick,
      disabled: disabled2,
      highlighted,
      id,
      store,
      nativeButton,
      nodeId: menuPositionerContext?.context.nodeId,
      itemMetadata: REGULAR_ITEM
    });
    const state = React101.useMemo(() => ({
      disabled: disabled2,
      highlighted,
      checked
    }), [disabled2, highlighted, checked]);
    function handleClick(event) {
      const details = createChangeEventDetails(reason_parts_exports.itemPress, event.nativeEvent, void 0, {
        preventUnmountOnClose() {
        }
      });
      setSelectedValue(value, details);
    }
    const element = useRenderElement("div", componentProps, {
      state,
      stateAttributesMapping: itemMapping,
      props: [itemProps, {
        role: "menuitemradio",
        "aria-checked": checked,
        onClick: handleClick
      }, elementProps, getItemProps],
      ref: [itemRef, forwardedRef, listItem.ref]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MenuRadioItemContext.Provider, {
      value: state,
      children: element
    });
  });
  if (true) MenuRadioItem.displayName = "MenuRadioItem";

  // node_modules/@base-ui/react/menu/radio-item-indicator/MenuRadioItemIndicator.mjs
  init_define_import_meta_env();
  var React102 = __toESM(require_react_shim(), 1);
  var MenuRadioItemIndicator = /* @__PURE__ */ React102.forwardRef(function MenuRadioItemIndicator2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      keepMounted = false,
      ...elementProps
    } = componentProps;
    const item = useMenuRadioItemContext();
    const indicatorRef = React102.useRef(null);
    const {
      transitionStatus,
      setMounted
    } = useTransitionStatus(item.checked);
    useOpenChangeComplete({
      open: item.checked,
      ref: indicatorRef,
      onComplete() {
        if (!item.checked) {
          setMounted(false);
        }
      }
    });
    const state = {
      checked: item.checked,
      disabled: item.disabled,
      highlighted: item.highlighted,
      transitionStatus
    };
    const element = useRenderElement("span", componentProps, {
      state,
      stateAttributesMapping: itemMapping,
      ref: [forwardedRef, indicatorRef],
      props: {
        "aria-hidden": true,
        ...elementProps
      },
      enabled: keepMounted || item.checked
    });
    return element;
  });
  if (true) MenuRadioItemIndicator.displayName = "MenuRadioItemIndicator";

  // node_modules/@base-ui/react/menu/root/MenuRoot.mjs
  init_define_import_meta_env();
  var React106 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/menubar/MenubarContext.mjs
  init_define_import_meta_env();
  var React103 = __toESM(require_react_shim(), 1);
  var MenubarContext = /* @__PURE__ */ React103.createContext(null);
  if (true) MenubarContext.displayName = "MenubarContext";
  function useMenubarContext(optional) {
    const context = React103.useContext(MenubarContext);
    if (context === null && !optional) {
      throw new Error(true ? "Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>." : formatErrorMessage_default(5));
    }
    return context;
  }

  // node_modules/@base-ui/react/menu/store/MenuStore.mjs
  init_define_import_meta_env();
  var React104 = __toESM(require_react_shim(), 1);
  var selectors3 = {
    ...popupStoreSelectors,
    disabled: createSelector((state) => state.parent.type === "menubar" ? state.parent.context.disabled || state.disabled : state.disabled),
    modal: createSelector((state) => (state.parent.type === void 0 || state.parent.type === "context-menu") && (state.modal ?? true)),
    openMethod: createSelector((state) => state.openMethod),
    allowMouseEnter: createSelector((state) => state.allowMouseEnter),
    highlightItemOnHover: createSelector((state) => state.highlightItemOnHover),
    stickIfOpen: createSelector((state) => state.stickIfOpen),
    parent: createSelector((state) => state.parent),
    rootId: createSelector((state) => {
      if (state.parent.type === "menu") {
        return state.parent.store.select("rootId");
      }
      return state.parent.type !== void 0 ? state.parent.context.rootId : state.rootId;
    }),
    activeIndex: createSelector((state) => state.activeIndex),
    isActive: createSelector((state, itemIndex) => state.activeIndex === itemIndex),
    hoverEnabled: createSelector((state) => state.hoverEnabled),
    instantType: createSelector((state) => state.instantType),
    lastOpenChangeReason: createSelector((state) => state.openChangeReason),
    floatingTreeRoot: createSelector((state) => {
      if (state.parent.type === "menu") {
        return state.parent.store.select("floatingTreeRoot");
      }
      return state.floatingTreeRoot;
    }),
    floatingNodeId: createSelector((state) => state.floatingNodeId),
    floatingParentNodeId: createSelector((state) => state.floatingParentNodeId),
    itemProps: createSelector((state) => state.itemProps),
    closeDelay: createSelector((state) => state.closeDelay),
    hasViewport: createSelector((state) => state.hasViewport),
    keyboardEventRelay: createSelector((state) => {
      if (state.keyboardEventRelay) {
        return state.keyboardEventRelay;
      }
      if (state.parent.type === "menu") {
        return state.parent.store.select("keyboardEventRelay");
      }
      return void 0;
    })
  };
  var MenuStore = class _MenuStore extends ReactStore {
    constructor(initialState) {
      super({
        ...createInitialState2(),
        ...initialState
      }, {
        positionerRef: /* @__PURE__ */ React104.createRef(),
        popupRef: /* @__PURE__ */ React104.createRef(),
        typingRef: {
          current: false
        },
        itemDomElements: {
          current: []
        },
        itemLabels: {
          current: []
        },
        allowMouseUpTriggerRef: {
          current: false
        },
        triggerFocusTargetRef: /* @__PURE__ */ React104.createRef(),
        beforeContentFocusGuardRef: /* @__PURE__ */ React104.createRef(),
        onOpenChangeComplete: void 0,
        triggerElements: new PopupTriggerMap()
      }, selectors3);
      __publicField(this, "unsubscribeParentListener", null);
      this.unsubscribeParentListener = this.observe("parent", (parent) => {
        this.unsubscribeParentListener?.();
        if (parent.type === "menu") {
          let rootId = parent.store.select("rootId");
          let floatingTreeRoot = parent.store.select("floatingTreeRoot");
          let keyboardEventRelay = parent.store.select("keyboardEventRelay");
          this.unsubscribeParentListener = parent.store.subscribe(() => {
            const nextRootId = parent.store.select("rootId");
            const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
            const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
            if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) {
              return;
            }
            rootId = nextRootId;
            floatingTreeRoot = nextFloatingTreeRoot;
            keyboardEventRelay = nextKeyboardEventRelay;
            this.notifyAll();
          });
          this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
          return;
        }
        if (parent.type !== void 0) {
          this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
        }
        this.unsubscribeParentListener = null;
      });
    }
    setOpen(open, eventDetails) {
      this.state.floatingRootContext.context.events.emit("setOpen", {
        open,
        eventDetails
      });
    }
    static useStore(externalStore, initialState) {
      const internalStore = useRefWithInit(() => {
        return new _MenuStore(initialState);
      }).current;
      return externalStore ?? internalStore;
    }
  };
  function createInitialState2() {
    return {
      ...createInitialPopupStoreState(),
      disabled: false,
      modal: true,
      openMethod: null,
      allowMouseEnter: false,
      highlightItemOnHover: true,
      stickIfOpen: true,
      parent: {
        type: void 0
      },
      rootId: void 0,
      activeIndex: null,
      hoverEnabled: true,
      instantType: void 0,
      openChangeReason: null,
      floatingTreeRoot: new FloatingTreeStore(),
      floatingNodeId: void 0,
      floatingParentNodeId: null,
      itemProps: EMPTY_OBJECT,
      keyboardEventRelay: void 0,
      closeDelay: 0,
      hasViewport: false
    };
  }

  // node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRootContext.mjs
  init_define_import_meta_env();
  var React105 = __toESM(require_react_shim(), 1);
  var MenuSubmenuRootContext = /* @__PURE__ */ React105.createContext(void 0);
  if (true) MenuSubmenuRootContext.displayName = "MenuSubmenuRootContext";
  function useMenuSubmenuRootContext() {
    return React105.useContext(MenuSubmenuRootContext);
  }

  // node_modules/@base-ui/react/menu/root/MenuRoot.mjs
  var import_jsx_runtime20 = __toESM(require_react_shim(), 1);
  var MenuRoot = fastComponent(function MenuRoot2(props) {
    const {
      children,
      open: openProp,
      onOpenChange,
      onOpenChangeComplete,
      defaultOpen = false,
      disabled: disabledProp = false,
      modal: modalProp,
      loopFocus = true,
      orientation = "vertical",
      actionsRef,
      closeParentOnEsc = false,
      handle,
      triggerId: triggerIdProp,
      defaultTriggerId: defaultTriggerIdProp = null,
      highlightItemOnHover = true
    } = props;
    const contextMenuContext = useContextMenuRootContext(true);
    const parentMenuRootContext = useMenuRootContext(true);
    const menubarContext = useMenubarContext(true);
    const isSubmenu = useMenuSubmenuRootContext();
    const parentFromContext = React106.useMemo(() => {
      if (isSubmenu && parentMenuRootContext) {
        return {
          type: "menu",
          store: parentMenuRootContext.store
        };
      }
      if (menubarContext) {
        return {
          type: "menubar",
          context: menubarContext
        };
      }
      if (contextMenuContext && !parentMenuRootContext) {
        return {
          type: "context-menu",
          context: contextMenuContext
        };
      }
      return {
        type: void 0
      };
    }, [contextMenuContext, parentMenuRootContext, menubarContext, isSubmenu]);
    const store = MenuStore.useStore(handle?.store, {
      open: defaultOpen,
      openProp,
      activeTriggerId: defaultTriggerIdProp,
      triggerIdProp,
      parent: parentFromContext
    });
    useInitialOpenSync(store, openProp, defaultOpen, defaultTriggerIdProp);
    store.useControlledProp("openProp", openProp);
    store.useControlledProp("triggerIdProp", triggerIdProp);
    store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
    const rootId = useId();
    const floatingId = useId();
    const floatingTreeRoot = store.useState("floatingTreeRoot");
    const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
    const floatingParentNodeIdFromContext = useFloatingParentNodeId();
    const open = store.useState("open");
    const activeTriggerElement = store.useState("activeTriggerElement");
    const positionerElement = store.useState("positionerElement");
    const hoverEnabled = store.useState("hoverEnabled");
    const disabled2 = store.useState("disabled");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const parent = store.useState("parent");
    const activeIndex = store.useState("activeIndex");
    const payload = store.useState("payload");
    const floatingParentNodeId = store.useState("floatingParentNodeId");
    const openEventRef = React106.useRef(null);
    const allowOutsidePressDismissalRef = React106.useRef(parent.type !== "context-menu");
    const allowOutsidePressDismissalTimeout = useTimeout();
    const allowTouchToCloseRef = React106.useRef(true);
    const allowTouchToCloseTimeout = useTimeout();
    const nested = floatingParentNodeId != null;
    if (true) {
      if (parent.type !== void 0 && modalProp !== void 0) {
        console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
      }
    }
    const {
      openMethod,
      triggerProps: interactionTypeProps
    } = useOpenInteractionType(open);
    store.useSyncedValues({
      disabled: disabledProp,
      highlightItemOnHover,
      modal: parent.type === void 0 ? modalProp : void 0,
      openMethod,
      rootId
    });
    useImplicitActiveTrigger(store);
    const {
      forceUnmount
    } = useOpenStateTransitions(open, store, () => {
      store.update({
        allowMouseEnter: false,
        stickIfOpen: true
      });
    });
    useIsoLayoutEffect(() => {
      if (contextMenuContext && !parentMenuRootContext) {
        store.update({
          parent: {
            type: "context-menu",
            context: contextMenuContext
          },
          floatingNodeId: floatingNodeIdFromContext,
          floatingParentNodeId: floatingParentNodeIdFromContext
        });
      } else if (parentMenuRootContext) {
        store.update({
          floatingNodeId: floatingNodeIdFromContext,
          floatingParentNodeId: floatingParentNodeIdFromContext
        });
      }
    }, [contextMenuContext, parentMenuRootContext, floatingNodeIdFromContext, floatingParentNodeIdFromContext, store]);
    React106.useEffect(() => {
      if (!open) {
        openEventRef.current = null;
      }
      if (parent.type !== "context-menu") {
        return;
      }
      if (!open) {
        allowOutsidePressDismissalTimeout.clear();
        allowOutsidePressDismissalRef.current = false;
        return;
      }
      allowOutsidePressDismissalTimeout.start(500, () => {
        allowOutsidePressDismissalRef.current = true;
      });
    }, [allowOutsidePressDismissalTimeout, open, parent.type]);
    useIsoLayoutEffect(() => {
      if (!open && !hoverEnabled) {
        store.set("hoverEnabled", true);
      }
    }, [open, hoverEnabled, store]);
    const setOpen = useStableCallback((nextOpen, eventDetails) => {
      const reason = eventDetails.reason;
      if (open === nextOpen && eventDetails.trigger === activeTriggerElement && lastOpenChangeReason === reason) {
        return;
      }
      const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
      if (!nextOpen && eventDetails.trigger == null) {
        eventDetails.trigger = activeTriggerElement ?? void 0;
      }
      onOpenChange?.(nextOpen, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
      const nativeEvent = eventDetails.event;
      if (nextOpen === false && nativeEvent?.type === "click" && nativeEvent.pointerType === "touch" && !allowTouchToCloseRef.current) {
        return;
      }
      if (nextOpen && reason === reason_parts_exports.triggerFocus) {
        allowTouchToCloseRef.current = false;
        allowTouchToCloseTimeout.start(300, () => {
          allowTouchToCloseRef.current = true;
        });
      } else {
        allowTouchToCloseRef.current = true;
        allowTouchToCloseTimeout.clear();
      }
      const isKeyboardClick = (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.itemPress) && nativeEvent.detail === 0 && nativeEvent?.isTrusted;
      const isDismissClose = !nextOpen && (reason === reason_parts_exports.escapeKey || reason == null);
      const updatedState = {
        open: nextOpen,
        openChangeReason: reason
      };
      openEventRef.current = eventDetails.event ?? null;
      setPopupOpenState(updatedState, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
      store.update(updatedState);
      if (parent.type === "menubar" && (reason === reason_parts_exports.triggerFocus || reason === reason_parts_exports.focusOut || reason === reason_parts_exports.triggerHover || reason === reason_parts_exports.listNavigation || reason === reason_parts_exports.siblingOpen)) {
        store.set("instantType", "group");
      } else if (isKeyboardClick || isDismissClose) {
        store.set("instantType", isKeyboardClick ? "click" : "dismiss");
      } else {
        store.set("instantType", void 0);
      }
    });
    const floatingRootContext = useSyncedFloatingRootContext({
      popupStore: store,
      floatingId,
      nested: floatingParentNodeIdFromContext != null,
      onOpenChange: setOpen
    });
    const floatingEvents = floatingRootContext.context.events;
    React106.useEffect(() => {
      const handleSetOpenEvent = ({
        open: nextOpen,
        eventDetails
      }) => setOpen(nextOpen, eventDetails);
      floatingEvents.on("setOpen", handleSetOpenEvent);
      return () => {
        floatingEvents?.off("setOpen", handleSetOpenEvent);
      };
    }, [floatingEvents, setOpen]);
    const handleImperativeClose = React106.useCallback(() => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
    }, [store]);
    React106.useImperativeHandle(actionsRef, () => ({
      unmount: forceUnmount,
      close: handleImperativeClose
    }), [forceUnmount, handleImperativeClose]);
    let ctx;
    if (parent.type === "context-menu") {
      ctx = parent.context;
    }
    React106.useImperativeHandle(ctx?.positionerRef, () => positionerElement, [positionerElement]);
    React106.useImperativeHandle(ctx?.actionsRef, () => ({
      setOpen
    }), [setOpen]);
    const dismiss = useDismiss(floatingRootContext, {
      enabled: !disabled2,
      bubbles: {
        escapeKey: closeParentOnEsc && parent.type === "menu"
      },
      outsidePress() {
        if (parent.type !== "context-menu" || openEventRef.current?.type === "contextmenu") {
          return true;
        }
        return allowOutsidePressDismissalRef.current;
      },
      externalTree: nested ? floatingTreeRoot : void 0
    });
    const direction = useDirection();
    const setActiveIndex = React106.useCallback((index2) => {
      if (store.select("activeIndex") === index2) {
        return;
      }
      store.set("activeIndex", index2);
    }, [store]);
    const listNavigation2 = useListNavigation(floatingRootContext, {
      enabled: !disabled2,
      listRef: store.context.itemDomElements,
      activeIndex,
      nested: parent.type !== void 0,
      loopFocus,
      orientation,
      parentOrientation: parent.type === "menubar" ? parent.context.orientation : void 0,
      rtl: direction === "rtl",
      disabledIndices: EMPTY_ARRAY,
      onNavigate: setActiveIndex,
      openOnArrowKeyDown: parent.type !== "context-menu",
      externalTree: nested ? floatingTreeRoot : void 0,
      focusItemOnHover: highlightItemOnHover
    });
    const onTyping = React106.useCallback((nextTyping) => {
      store.context.typingRef.current = nextTyping;
    }, [store]);
    const typeahead = useTypeahead(floatingRootContext, {
      enabled: !disabled2,
      listRef: store.context.itemLabels,
      elementsRef: store.context.itemDomElements,
      activeIndex,
      resetMs: TYPEAHEAD_RESET_MS,
      onMatch: (index2) => {
        if (open && index2 !== activeIndex) {
          store.set("activeIndex", index2);
        }
      },
      onTyping
    });
    const activeTriggerProps = React106.useMemo(() => {
      const mergedProps = mergeProps(typeahead.reference, listNavigation2.reference, dismiss.reference, {
        onMouseMove() {
          store.set("allowMouseEnter", true);
        }
      }, interactionTypeProps);
      mergedProps["aria-haspopup"] = "menu";
      mergedProps["aria-expanded"] = open;
      return mergedProps;
    }, [store, typeahead.reference, listNavigation2.reference, dismiss.reference, interactionTypeProps, open]);
    const inactiveTriggerProps = React106.useMemo(() => {
      const mergedProps = mergeProps(listNavigation2.trigger, dismiss.trigger, interactionTypeProps);
      mergedProps["aria-haspopup"] = "menu";
      mergedProps["aria-expanded"] = false;
      return mergedProps;
    }, [listNavigation2.trigger, dismiss.trigger, interactionTypeProps]);
    const popupProps = React106.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, {
      id: floatingId,
      role: "menu",
      "aria-labelledby": activeTriggerElement?.id,
      onMouseMove() {
        store.set("allowMouseEnter", true);
        if (parent.type === "menu") {
          store.set("hoverEnabled", false);
        }
      },
      onClick() {
        if (store.select("hoverEnabled")) {
          store.set("hoverEnabled", false);
        }
      },
      onKeyDown(event) {
        const relay = store.select("keyboardEventRelay");
        if (relay && !event.isPropagationStopped()) {
          relay(event);
        }
      }
    }, typeahead.floating, listNavigation2.floating, dismiss.floating), [activeTriggerElement, floatingId, parent.type, store, typeahead.floating, listNavigation2.floating, dismiss.floating]);
    const itemProps = listNavigation2.item ?? EMPTY_OBJECT;
    usePopupInteractionProps(store, {
      floatingRootContext,
      activeTriggerProps,
      inactiveTriggerProps,
      popupProps,
      itemProps
    });
    const context = React106.useMemo(() => ({
      store,
      parent: parentFromContext
    }), [store, parentFromContext]);
    const content = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MenuRootContext.Provider, {
      value: context,
      children: typeof children === "function" ? children({
        payload
      }) : children
    });
    if (parent.type === void 0 || parent.type === "context-menu") {
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FloatingTree, {
        externalTree: floatingTreeRoot,
        children: content
      });
    }
    return content;
  });
  if (true) MenuRoot.displayName = "MenuRoot";

  // node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.mjs
  init_define_import_meta_env();
  var React107 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime21 = __toESM(require_react_shim(), 1);
  function MenuSubmenuRoot(props) {
    const parentMenu = useMenuRootContext().store;
    const contextValue = React107.useMemo(() => ({
      parentMenu
    }), [parentMenu]);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MenuSubmenuRootContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MenuRoot, {
        ...props
      })
    });
  }

  // node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
  init_define_import_meta_env();
  var React111 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs
  init_define_import_meta_env();
  function getPseudoElementBounds(element) {
    const elementRect = element.getBoundingClientRect();
    const win = getWindow(element);
    if (parts_exports.env.jsdom) {
      return elementRect;
    }
    const beforeStyles = win.getComputedStyle(element, "::before");
    const afterStyles = win.getComputedStyle(element, "::after");
    const hasPseudoElements = beforeStyles.content !== "none" || afterStyles.content !== "none";
    if (!hasPseudoElements) {
      return elementRect;
    }
    const beforeWidth = parseFloat(beforeStyles.width) || 0;
    const beforeHeight = parseFloat(beforeStyles.height) || 0;
    const afterWidth = parseFloat(afterStyles.width) || 0;
    const afterHeight = parseFloat(afterStyles.height) || 0;
    const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
    const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
    const widthDiff = totalWidth - elementRect.width;
    const heightDiff = totalHeight - elementRect.height;
    return {
      left: elementRect.left - widthDiff / 2,
      right: elementRect.right + widthDiff / 2,
      top: elementRect.top - heightDiff / 2,
      bottom: elementRect.bottom + heightDiff / 2
    };
  }

  // node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
  init_define_import_meta_env();
  var React108 = __toESM(require_react_shim(), 1);
  function useCompositeItem(params = {}) {
    const {
      highlightItemOnHover,
      highlightedIndex,
      onHighlightedIndexChange
    } = useCompositeRootContext();
    const {
      ref,
      index: index2
    } = useCompositeListItem(params);
    const isHighlighted = highlightedIndex === index2;
    const itemRef = React108.useRef(null);
    const mergedRef = useMergedRefs(ref, itemRef);
    const compositeProps = {
      tabIndex: isHighlighted ? 0 : -1,
      onFocus() {
        onHighlightedIndexChange(index2);
      },
      onMouseMove() {
        const item = itemRef.current;
        if (!highlightItemOnHover || !item) {
          return;
        }
        const disabled2 = item.hasAttribute("disabled") || item.ariaDisabled === "true";
        if (!isHighlighted && !disabled2) {
          item.focus();
        }
      }
    };
    return {
      compositeProps,
      compositeRef: mergedRef,
      index: index2
    };
  }

  // node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
  function CompositeItem(componentProps) {
    const {
      render,
      className,
      style,
      state = EMPTY_OBJECT,
      props = EMPTY_ARRAY,
      refs = EMPTY_ARRAY,
      metadata,
      stateAttributesMapping: stateAttributesMapping18,
      tag = "div",
      ...elementProps
    } = componentProps;
    const {
      compositeProps,
      compositeRef
    } = useCompositeItem({
      metadata
    });
    return useRenderElement(tag, componentProps, {
      state,
      ref: [...refs, compositeRef],
      props: [compositeProps, ...props, elementProps],
      stateAttributesMapping: stateAttributesMapping18
    });
  }

  // node_modules/@base-ui/react/menu/utils/findRootOwnerId.mjs
  init_define_import_meta_env();
  function findRootOwnerId(node) {
    if (isHTMLElement(node) && node.hasAttribute("data-rootownerid")) {
      return node.getAttribute("data-rootownerid") ?? void 0;
    }
    if (isLastTraversableNode(node)) {
      return void 0;
    }
    return findRootOwnerId(getParentNode(node));
  }

  // node_modules/@base-ui/react/utils/popups/useTriggerFocusGuards.mjs
  init_define_import_meta_env();
  var React109 = __toESM(require_react_shim(), 1);
  var ReactDOM6 = __toESM(require_react_dom_shim(), 1);
  function useTriggerFocusGuards(store, triggerElementRef) {
    const preFocusGuardRef = React109.useRef(null);
    function handlePreFocusGuardFocus(event) {
      ReactDOM6.flushSync(() => {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
      });
      const previousTabbable = getTabbableBeforeElement(preFocusGuardRef.current);
      previousTabbable?.focus();
    }
    function handleFocusTargetFocus(event) {
      const positionerElement = store.select("positionerElement");
      if (positionerElement && isOutsideEvent(event, positionerElement)) {
        store.context.beforeContentFocusGuardRef.current?.focus();
      } else {
        ReactDOM6.flushSync(() => {
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
        });
        let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
        while (nextTabbable !== null && contains(positionerElement, nextTabbable)) {
          const prevTabbable = nextTabbable;
          nextTabbable = getNextTabbable(nextTabbable);
          if (nextTabbable === prevTabbable) {
            break;
          }
        }
        nextTabbable?.focus();
      }
    }
    return {
      preFocusGuardRef,
      handlePreFocusGuardFocus,
      handleFocusTargetFocus
    };
  }

  // node_modules/@base-ui/react/utils/useMixedToggleClickHandler.mjs
  init_define_import_meta_env();
  var React110 = __toESM(require_react_shim(), 1);
  function useMixedToggleClickHandler(params) {
    const {
      enabled = true,
      mouseDownAction,
      open
    } = params;
    const ignoreClickRef = React110.useRef(false);
    return React110.useMemo(() => {
      if (!enabled) {
        return EMPTY_OBJECT;
      }
      return {
        onMouseDown: (event) => {
          if (mouseDownAction === "open" && !open || mouseDownAction === "close" && open) {
            ignoreClickRef.current = true;
            ownerDocument(event.currentTarget).addEventListener("click", () => {
              ignoreClickRef.current = false;
            }, {
              once: true
            });
          }
        },
        onClick: (event) => {
          if (ignoreClickRef.current) {
            ignoreClickRef.current = false;
            event.preventBaseUIHandler();
          }
        }
      };
    }, [enabled, mouseDownAction, open]);
  }

  // node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
  var import_jsx_runtime22 = __toESM(require_react_shim(), 1);
  var BOUNDARY_OFFSET = 2;
  var MenuTrigger = fastComponentRef(function MenuTrigger2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabledProp = false,
      nativeButton = true,
      id: idProp,
      openOnHover: openOnHoverProp,
      delay = 100,
      closeDelay = 0,
      handle,
      payload,
      ...elementProps
    } = componentProps;
    const rootContext = useMenuRootContext(true);
    const store = handle?.store ?? rootContext?.store;
    if (!store) {
      throw new Error(true ? "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle." : formatErrorMessage_default(85));
    }
    const thisTriggerId = useBaseUiId(idProp);
    const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
    const floatingRootContext = store.useState("floatingRootContext");
    const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
    const popupId = store.useState("triggerPopupId", thisTriggerId);
    const triggerElementRef = React111.useRef(null);
    const parent = useMenuParent();
    const compositeRootContext = useCompositeRootContext(true);
    const floatingTreeRootFromContext = useFloatingTree();
    const floatingTreeRoot = React111.useMemo(() => {
      return floatingTreeRootFromContext ?? new FloatingTreeStore();
    }, [floatingTreeRootFromContext]);
    const floatingNodeId = useFloatingNodeId(floatingTreeRoot);
    const floatingParentNodeId = useFloatingParentNodeId();
    const {
      registerTrigger,
      isMountedByThisTrigger
    } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
      payload,
      closeDelay,
      parent,
      floatingTreeRoot,
      floatingNodeId,
      floatingParentNodeId,
      keyboardEventRelay: compositeRootContext?.relayKeyboardEvent
    });
    const isInMenubar = parent.type === "menubar";
    const rootDisabled = store.useState("disabled");
    const disabled2 = disabledProp || rootDisabled || isInMenubar && parent.context.disabled;
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    React111.useEffect(() => {
      if (!isOpenedByThisTrigger && parent.type === void 0) {
        store.context.allowMouseUpTriggerRef.current = false;
      }
    }, [store, isOpenedByThisTrigger, parent.type]);
    const triggerRef = React111.useRef(null);
    const allowMouseUpTriggerTimeout = useTimeout();
    const handleDocumentMouseUp = useStableCallback((mouseEvent) => {
      if (!triggerRef.current) {
        return;
      }
      allowMouseUpTriggerTimeout.clear();
      store.context.allowMouseUpTriggerRef.current = false;
      const mouseUpTarget = mouseEvent.target;
      if (contains(triggerRef.current, mouseUpTarget) || contains(store.select("positionerElement"), mouseUpTarget) || mouseUpTarget === triggerRef.current) {
        return;
      }
      if (mouseUpTarget != null && findRootOwnerId(mouseUpTarget) === store.select("rootId")) {
        return;
      }
      const bounds = getPseudoElementBounds(triggerRef.current);
      if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET) {
        return;
      }
      floatingTreeRoot.events.emit("close", {
        domEvent: mouseEvent,
        reason: reason_parts_exports.cancelOpen
      });
    });
    React111.useEffect(() => {
      if (isOpenedByThisTrigger && store.select("lastOpenChangeReason") === reason_parts_exports.triggerHover) {
        const doc = ownerDocument(triggerRef.current);
        doc.addEventListener("mouseup", handleDocumentMouseUp, {
          once: true
        });
      }
    }, [isOpenedByThisTrigger, handleDocumentMouseUp, store]);
    const parentMenubarHasSubmenuOpen = isInMenubar && parent.context.hasSubmenuOpen;
    const openOnHover = openOnHoverProp ?? parentMenubarHasSubmenuOpen;
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
      enabled: openOnHover && !disabled2 && parent.type !== "context-menu" && (!isInMenubar || parentMenubarHasSubmenuOpen && !isMountedByThisTrigger),
      handleClose: safePolygon({
        blockPointerEvents: !isInMenubar
      }),
      mouseOnly: true,
      move: false,
      restMs: parent.type === void 0 ? delay : void 0,
      delay: {
        close: closeDelay
      },
      triggerElementRef,
      externalTree: floatingTreeRoot,
      isActiveTrigger: isTriggerActive,
      isClosing: () => store.select("transitionStatus") === "ending"
    });
    const stickIfOpen = useStickIfOpen(isOpenedByThisTrigger, store.select("lastOpenChangeReason"));
    const click = useClick(floatingRootContext, {
      enabled: !disabled2 && parent.type !== "context-menu",
      event: isOpenedByThisTrigger && isInMenubar ? "click" : "mousedown",
      toggle: true,
      ignoreMouse: false,
      stickIfOpen: parent.type === void 0 ? stickIfOpen : false
    });
    const focus = useFocus(floatingRootContext, {
      enabled: !disabled2 && parentMenubarHasSubmenuOpen
    });
    const mixedToggleHandlers = useMixedToggleClickHandler({
      open: isOpenedByThisTrigger,
      enabled: isInMenubar,
      mouseDownAction: "open"
    });
    const localInteractionProps = React111.useMemo(() => mergeProps(focus.reference, click.reference), [focus.reference, click.reference]);
    const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
    const {
      preFocusGuardRef,
      handlePreFocusGuardFocus,
      handleFocusTargetFocus
    } = useTriggerFocusGuards(store, triggerElementRef);
    const state = {
      disabled: disabled2,
      open: isOpenedByThisTrigger
    };
    const ref = [triggerRef, forwardedRef, buttonRef, registerTrigger, triggerElementRef];
    const props = [localInteractionProps, hoverProps ?? EMPTY_OBJECT, rootTriggerProps, {
      "aria-haspopup": "menu",
      "aria-controls": popupId,
      id: thisTriggerId,
      onMouseDown: (event) => {
        if (store.select("open")) {
          return;
        }
        allowMouseUpTriggerTimeout.start(200, () => {
          store.context.allowMouseUpTriggerRef.current = true;
        });
        const doc = ownerDocument(event.currentTarget);
        doc.addEventListener("mouseup", handleDocumentMouseUp, {
          once: true
        });
      }
    }, isInMenubar ? {
      role: "menuitem"
    } : {}, mixedToggleHandlers, elementProps, getButtonProps];
    const element = useRenderElement("button", componentProps, {
      enabled: !isInMenubar,
      stateAttributesMapping: pressableTriggerOpenStateMapping,
      state,
      ref,
      props
    });
    if (isInMenubar) {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CompositeItem, {
        tag: "button",
        render,
        className,
        style,
        state,
        refs: ref,
        props,
        stateAttributesMapping: pressableTriggerOpenStateMapping
      });
    }
    if (isOpenedByThisTrigger) {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(React111.Fragment, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FocusGuard, {
          ref: preFocusGuardRef,
          onFocus: handlePreFocusGuardFocus
        }, `${thisTriggerId}-pre-focus-guard`), /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(React111.Fragment, {
          children: element
        }, thisTriggerId), /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FocusGuard, {
          ref: store.context.triggerFocusTargetRef,
          onFocus: handleFocusTargetFocus
        }, `${thisTriggerId}-post-focus-guard`)]
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(React111.Fragment, {
      children: element
    }, thisTriggerId);
  });
  if (true) MenuTrigger.displayName = "MenuTrigger";
  function useStickIfOpen(open, openReason) {
    const stickIfOpenTimeout = useTimeout();
    const [stickIfOpen, setStickIfOpen] = React111.useState(false);
    useIsoLayoutEffect(() => {
      if (open && openReason === "trigger-hover") {
        setStickIfOpen(true);
        stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
          setStickIfOpen(false);
        });
      } else if (!open) {
        stickIfOpenTimeout.clear();
        setStickIfOpen(false);
      }
    }, [open, openReason, stickIfOpenTimeout]);
    return stickIfOpen;
  }
  function useMenuParent() {
    const contextMenuContext = useContextMenuRootContext(true);
    const parentContext = useMenuRootContext(true);
    const menubarContext = useMenubarContext(true);
    const parent = React111.useMemo(() => {
      if (menubarContext) {
        return {
          type: "menubar",
          context: menubarContext
        };
      }
      if (contextMenuContext && !parentContext) {
        return {
          type: "context-menu",
          context: contextMenuContext
        };
      }
      return {
        type: void 0
      };
    }, [contextMenuContext, parentContext, menubarContext]);
    return parent;
  }

  // node_modules/@base-ui/react/menu/viewport/MenuViewport.mjs
  init_define_import_meta_env();
  var React115 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/usePopupViewport.mjs
  init_define_import_meta_env();
  var React114 = __toESM(require_react_shim(), 1);
  var ReactDOM7 = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/utils/usePreviousValue.mjs
  init_define_import_meta_env();
  var React112 = __toESM(require_react_shim(), 1);
  function usePreviousValue(value) {
    const [state, setState] = React112.useState({
      current: value,
      previous: null
    });
    if (value !== state.current) {
      setState({
        current: value,
        previous: state.current
      });
    }
    return state.previous;
  }

  // node_modules/@base-ui/react/utils/usePopupAutoResize.mjs
  init_define_import_meta_env();
  var React113 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/getCssDimensions.mjs
  init_define_import_meta_env();
  function getCssDimensions2(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height
    };
  }

  // node_modules/@base-ui/react/utils/usePopupAutoResize.mjs
  function usePopupAutoResize(parameters) {
    const {
      popupElement,
      positionerElement,
      content,
      mounted,
      onMeasureLayout: onMeasureLayoutParam,
      onMeasureLayoutComplete: onMeasureLayoutCompleteParam,
      side,
      direction
    } = parameters;
    const runOnceAnimationsFinish = useAnimationsFinished(popupElement, true, false);
    const animationFrame = useAnimationFrame();
    const committedDimensionsRef = React113.useRef(null);
    const isInitialRenderRef = React113.useRef(true);
    const restoreAnchoringStylesRef = React113.useRef(NOOP);
    const onMeasureLayout = useStableCallback(onMeasureLayoutParam);
    const onMeasureLayoutComplete = useStableCallback(onMeasureLayoutCompleteParam);
    const anchoringStyles = React113.useMemo(() => {
      let isOriginSide = side === "top";
      let isPhysicalLeft = side === "left";
      if (direction === "rtl") {
        isOriginSide = isOriginSide || side === "inline-end";
        isPhysicalLeft = isPhysicalLeft || side === "inline-end";
      } else {
        isOriginSide = isOriginSide || side === "inline-start";
        isPhysicalLeft = isPhysicalLeft || side === "inline-start";
      }
      return isOriginSide ? {
        position: "absolute",
        [side === "top" ? "bottom" : "top"]: "0",
        [isPhysicalLeft ? "right" : "left"]: "0"
      } : EMPTY_OBJECT;
    }, [side, direction]);
    useIsoLayoutEffect(() => {
      if (!mounted) {
        restoreAnchoringStylesRef.current = NOOP;
        isInitialRenderRef.current = true;
        committedDimensionsRef.current = null;
        return void 0;
      }
      if (!popupElement || !positionerElement) {
        return void 0;
      }
      restoreAnchoringStylesRef.current = applyElementStyles(popupElement, anchoringStyles);
      setPopupCssSize(popupElement, "auto");
      const restorePopupPosition = overrideElementStyle(popupElement, "position", "static");
      const restorePopupTransform = overrideElementStyle(popupElement, "transform", "none");
      const restorePopupScale = overrideElementStyle(popupElement, "scale", "1");
      const restorePositionerAvailableSize = applyElementStyles(positionerElement, {
        "--available-width": "max-content",
        "--available-height": "max-content"
      });
      function restoreMeasurementOverrides() {
        restorePopupPosition();
        restorePopupTransform();
        restorePositionerAvailableSize();
      }
      function restoreMeasurementOverridesIncludingScale() {
        restoreMeasurementOverrides();
        restorePopupScale();
      }
      onMeasureLayout?.();
      if (isInitialRenderRef.current || committedDimensionsRef.current === null) {
        setPositionerCssSize(positionerElement, "max-content");
        const dimensions = getCssDimensions2(popupElement);
        committedDimensionsRef.current = dimensions;
        setPositionerCssSize(positionerElement, dimensions);
        restoreMeasurementOverridesIncludingScale();
        onMeasureLayoutComplete?.(null, dimensions);
        isInitialRenderRef.current = false;
        return () => {
          restoreAnchoringStylesRef.current();
          restoreAnchoringStylesRef.current = NOOP;
        };
      }
      setPositionerCssSize(positionerElement, "max-content");
      const previousDimensions = committedDimensionsRef.current;
      const newDimensions = getCssDimensions2(popupElement);
      committedDimensionsRef.current = newDimensions;
      setPopupCssSize(popupElement, previousDimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(previousDimensions, newDimensions);
      setPositionerCssSize(positionerElement, newDimensions);
      const abortController = new AbortController();
      animationFrame.request(() => {
        setPopupCssSize(popupElement, newDimensions);
        runOnceAnimationsFinish(() => {
          popupElement.style.setProperty("--popup-width", "auto");
          popupElement.style.setProperty("--popup-height", "auto");
        }, abortController.signal);
      });
      return () => {
        abortController.abort();
        animationFrame.cancel();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }, [content, popupElement, positionerElement, runOnceAnimationsFinish, animationFrame, mounted, onMeasureLayout, onMeasureLayoutComplete, anchoringStyles]);
  }
  function overrideElementStyle(element, property, value) {
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, value);
    return () => {
      element.style.setProperty(property, originalValue);
    };
  }
  function applyElementStyles(element, styles) {
    const restorers = [];
    for (const [key, value] of Object.entries(styles)) {
      restorers.push(overrideElementStyle(element, key, value));
    }
    return restorers.length ? () => {
      restorers.forEach((restore) => restore());
    } : NOOP;
  }
  function setPopupCssSize(popupElement, size4) {
    const width = size4 === "auto" ? "auto" : `${size4.width}px`;
    const height = size4 === "auto" ? "auto" : `${size4.height}px`;
    popupElement.style.setProperty("--popup-width", width);
    popupElement.style.setProperty("--popup-height", height);
  }
  function setPositionerCssSize(positionerElement, size4) {
    const width = size4 === "max-content" ? "max-content" : `${size4.width}px`;
    const height = size4 === "max-content" ? "max-content" : `${size4.height}px`;
    positionerElement.style.setProperty("--positioner-width", width);
    positionerElement.style.setProperty("--positioner-height", height);
  }

  // node_modules/@base-ui/react/direction-provider/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/direction-provider/index.parts.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/utils/usePopupViewport.mjs
  var import_jsx_runtime23 = __toESM(require_react_shim(), 1);
  function usePopupViewport(parameters) {
    const {
      store,
      side,
      cssVars,
      children
    } = parameters;
    const direction = useDirection();
    const activeTrigger = store.useState("activeTriggerElement");
    const activeTriggerId = store.useState("activeTriggerId");
    const open = store.useState("open");
    const payload = store.useState("payload");
    const mounted = store.useState("mounted");
    const popupElement = store.useState("popupElement");
    const positionerElement = store.useState("positionerElement");
    const previousActiveTrigger = usePreviousValue(open ? activeTrigger : null);
    const currentContentKey = usePopupContentKey(activeTriggerId, payload);
    const capturedNodeRef = React114.useRef(null);
    const [previousContentNode, setPreviousContentNode] = React114.useState(null);
    const [newTriggerOffset, setNewTriggerOffset] = React114.useState(null);
    const currentContainerRef = React114.useRef(null);
    const previousContainerRef = React114.useRef(null);
    const onAnimationsFinished = useAnimationsFinished(currentContainerRef, true, false);
    const cleanupFrame = useAnimationFrame();
    const [previousContentDimensions, setPreviousContentDimensions] = React114.useState(null);
    const [showStartingStyleAttribute, setShowStartingStyleAttribute] = React114.useState(false);
    useIsoLayoutEffect(() => {
      store.set("hasViewport", true);
      return () => {
        store.set("hasViewport", false);
      };
    }, [store]);
    const handleMeasureLayout = useStableCallback(() => {
      currentContainerRef.current?.style.setProperty("animation", "none");
      currentContainerRef.current?.style.setProperty("transition", "none");
      previousContainerRef.current?.style.setProperty("display", "none");
    });
    const handleMeasureLayoutComplete = useStableCallback((previousDimensions) => {
      currentContainerRef.current?.style.removeProperty("animation");
      currentContainerRef.current?.style.removeProperty("transition");
      previousContainerRef.current?.style.removeProperty("display");
      if (previousDimensions) {
        setPreviousContentDimensions(previousDimensions);
      }
    });
    const lastHandledTriggerRef = React114.useRef(null);
    useIsoLayoutEffect(() => {
      if (!open || !mounted) {
        lastHandledTriggerRef.current = null;
      }
    }, [open, mounted]);
    useIsoLayoutEffect(() => {
      if (activeTrigger && previousActiveTrigger && activeTrigger !== previousActiveTrigger && lastHandledTriggerRef.current !== activeTrigger && capturedNodeRef.current) {
        setPreviousContentNode(capturedNodeRef.current);
        setShowStartingStyleAttribute(true);
        const offset4 = calculateRelativePosition(previousActiveTrigger, activeTrigger);
        setNewTriggerOffset(offset4);
        cleanupFrame.request(() => {
          ReactDOM7.flushSync(() => {
            setShowStartingStyleAttribute(false);
          });
          onAnimationsFinished(() => {
            setPreviousContentNode(null);
            setPreviousContentDimensions(null);
            capturedNodeRef.current = null;
          });
        });
        lastHandledTriggerRef.current = activeTrigger;
      }
    }, [activeTrigger, previousActiveTrigger, previousContentNode, onAnimationsFinished, cleanupFrame]);
    useIsoLayoutEffect(() => {
      const source = currentContainerRef.current;
      if (!source) {
        return;
      }
      const wrapper = ownerDocument(source).createElement("div");
      for (const child of Array.from(source.childNodes)) {
        wrapper.appendChild(child.cloneNode(true));
      }
      capturedNodeRef.current = wrapper;
    });
    const isTransitioning = previousContentNode != null;
    let childrenToRender;
    if (!isTransitioning) {
      childrenToRender = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", {
        "data-current": true,
        ref: currentContainerRef,
        children
      }, currentContentKey);
    } else {
      childrenToRender = /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(React114.Fragment, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", {
          "data-previous": true,
          inert: inertValue(true),
          ref: previousContainerRef,
          style: {
            ...previousContentDimensions ? {
              [cssVars.popupWidth]: `${previousContentDimensions.width}px`,
              [cssVars.popupHeight]: `${previousContentDimensions.height}px`
            } : null,
            position: "absolute"
          },
          "data-ending-style": showStartingStyleAttribute ? void 0 : ""
        }, "previous"), /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", {
          "data-current": true,
          ref: currentContainerRef,
          "data-starting-style": showStartingStyleAttribute ? "" : void 0,
          children
        }, currentContentKey)]
      });
    }
    useIsoLayoutEffect(() => {
      const container = previousContainerRef.current;
      if (!container || !previousContentNode) {
        return;
      }
      container.replaceChildren(...Array.from(previousContentNode.childNodes));
    }, [previousContentNode]);
    usePopupAutoResize({
      popupElement,
      positionerElement,
      mounted,
      content: payload,
      onMeasureLayout: handleMeasureLayout,
      onMeasureLayoutComplete: handleMeasureLayoutComplete,
      side,
      direction
    });
    const state = {
      activationDirection: getActivationDirection(newTriggerOffset),
      transitioning: isTransitioning
    };
    return {
      children: childrenToRender,
      state
    };
  }
  function getActivationDirection(offset4) {
    if (!offset4) {
      return void 0;
    }
    return `${getValueWithTolerance(offset4.horizontal, 5, "right", "left")} ${getValueWithTolerance(offset4.vertical, 5, "down", "up")}`;
  }
  function getValueWithTolerance(value, tolerance, positiveLabel, negativeLabel) {
    if (value > tolerance) {
      return positiveLabel;
    }
    if (value < -tolerance) {
      return negativeLabel;
    }
    return "";
  }
  function calculateRelativePosition(from, to) {
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const fromCenter = {
      x: fromRect.left + fromRect.width / 2,
      y: fromRect.top + fromRect.height / 2
    };
    const toCenter = {
      x: toRect.left + toRect.width / 2,
      y: toRect.top + toRect.height / 2
    };
    return {
      horizontal: toCenter.x - fromCenter.x,
      vertical: toCenter.y - fromCenter.y
    };
  }
  function usePopupContentKey(activeTriggerId, payload) {
    const [contentKey, setContentKey] = React114.useState(0);
    const previousActiveTriggerIdRef = React114.useRef(activeTriggerId);
    const previousPayloadRef = React114.useRef(payload);
    const pendingPayloadUpdateRef = React114.useRef(false);
    useIsoLayoutEffect(() => {
      const previousActiveTriggerId = previousActiveTriggerIdRef.current;
      const previousPayload = previousPayloadRef.current;
      const triggerIdChanged = activeTriggerId !== previousActiveTriggerId;
      const payloadChanged = payload !== previousPayload;
      if (triggerIdChanged) {
        setContentKey((value) => value + 1);
        pendingPayloadUpdateRef.current = !payloadChanged;
      } else if (pendingPayloadUpdateRef.current && payloadChanged) {
        setContentKey((value) => value + 1);
        pendingPayloadUpdateRef.current = false;
      }
      previousActiveTriggerIdRef.current = activeTriggerId;
      previousPayloadRef.current = payload;
    }, [activeTriggerId, payload]);
    return `${activeTriggerId ?? "current"}-${contentKey}`;
  }

  // node_modules/@base-ui/react/menu/viewport/MenuViewportCssVars.mjs
  init_define_import_meta_env();
  var MenuViewportCssVars = /* @__PURE__ */ (function(MenuViewportCssVars2) {
    MenuViewportCssVars2["popupWidth"] = "--popup-width";
    MenuViewportCssVars2["popupHeight"] = "--popup-height";
    return MenuViewportCssVars2;
  })({});

  // node_modules/@base-ui/react/menu/viewport/MenuViewport.mjs
  var stateAttributesMapping6 = {
    activationDirection: (value) => value ? {
      "data-activation-direction": value
    } : null
  };
  var MenuViewport = /* @__PURE__ */ React115.forwardRef(function MenuViewport2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      children,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useMenuRootContext();
    const {
      side
    } = useMenuPositionerContext();
    const instantType = store.useState("instantType");
    const {
      children: childrenToRender,
      state: viewportState
    } = usePopupViewport({
      store,
      side,
      cssVars: MenuViewportCssVars,
      children
    });
    const state = {
      activationDirection: viewportState.activationDirection,
      transitioning: viewportState.transitioning,
      instant: instantType
    };
    return useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: [elementProps, {
        children: childrenToRender
      }],
      stateAttributesMapping: stateAttributesMapping6
    });
  });
  if (true) MenuViewport.displayName = "MenuViewport";

  // node_modules/@base-ui/react/separator/Separator.mjs
  init_define_import_meta_env();
  var React116 = __toESM(require_react_shim(), 1);
  var Separator = /* @__PURE__ */ React116.forwardRef(function SeparatorComponent(componentProps, forwardedRef) {
    const {
      className,
      render,
      orientation = "horizontal",
      style,
      ...elementProps
    } = componentProps;
    const state = {
      orientation
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: [{
        role: "separator",
        "aria-orientation": orientation
      }, elementProps]
    });
    return element;
  });
  if (true) Separator.displayName = "Separator";

  // node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.mjs
  init_define_import_meta_env();
  var React117 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/isElementDisabled.mjs
  init_define_import_meta_env();
  function isElementDisabled(element) {
    return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
  }

  // node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.mjs
  var MenuSubmenuTrigger = /* @__PURE__ */ React117.forwardRef(function MenuSubmenuTrigger2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      label,
      id: idProp,
      nativeButton = false,
      openOnHover = true,
      delay = 100,
      closeDelay = 0,
      disabled: disabledProp = false,
      ...elementProps
    } = componentProps;
    const listItem = useCompositeListItem({
      label
    });
    const menuPositionerContext = useMenuPositionerContext();
    const {
      store
    } = useMenuRootContext();
    const thisTriggerId = useBaseUiId(idProp);
    const open = store.useState("open");
    const floatingRootContext = store.useState("floatingRootContext");
    const floatingTreeRoot = store.useState("floatingTreeRoot");
    const popupId = store.useState("triggerPopupId", thisTriggerId);
    const baseRegisterTrigger = useTriggerRegistration(thisTriggerId, store);
    const registerTrigger = React117.useCallback((element2) => {
      const cleanup = baseRegisterTrigger(element2);
      if (element2 !== null && store.select("open") && store.select("activeTriggerId") == null) {
        store.update({
          activeTriggerId: thisTriggerId,
          activeTriggerElement: element2,
          closeDelay
        });
      }
      return cleanup;
    }, [baseRegisterTrigger, closeDelay, store, thisTriggerId]);
    const triggerElementRef = React117.useRef(null);
    const handleTriggerElementRef = React117.useCallback((el) => {
      triggerElementRef.current = el;
      store.set("activeTriggerElement", el);
    }, [store]);
    const submenuRootContext = useMenuSubmenuRootContext();
    if (!submenuRootContext?.parentMenu) {
      throw new Error(true ? "Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>." : formatErrorMessage_default(37));
    }
    store.useSyncedValue("closeDelay", closeDelay);
    const parentMenuStore = submenuRootContext.parentMenu;
    const rootDisabled = store.useState("disabled");
    const parentDisabled = parentMenuStore.useState("disabled");
    const disabled2 = disabledProp || rootDisabled || parentDisabled;
    if (true) {
      useIsoLayoutEffect(() => {
        const element2 = triggerElementRef.current;
        if (element2 && isElementDisabled(element2) && !disabled2) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          warn(`A disabled element was detected on <Menu.SubmenuTrigger>. To properly disable the trigger, use the \`disabled\` prop on the component instead of setting it on the rendered element.${ownerStackMessage}`);
        }
      });
    }
    const itemProps = parentMenuStore.useState("itemProps");
    const highlighted = parentMenuStore.useState("isActive", listItem.index);
    const itemMetadata = React117.useMemo(() => ({
      type: "submenu-trigger",
      setActive() {
        if (parentMenuStore.select("highlightItemOnHover")) {
          parentMenuStore.set("activeIndex", listItem.index);
        }
      }
    }), [parentMenuStore, listItem.index]);
    const {
      getItemProps,
      itemRef
    } = useMenuItem({
      closeOnClick: false,
      disabled: disabled2,
      highlighted,
      id: thisTriggerId,
      store,
      typingRef: parentMenuStore.context.typingRef,
      nativeButton,
      itemMetadata,
      nodeId: menuPositionerContext?.context.nodeId
    });
    const hoverEnabled = store.useState("hoverEnabled");
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
      enabled: hoverEnabled && openOnHover && !disabled2,
      handleClose: safePolygon({
        blockPointerEvents: true
      }),
      mouseOnly: true,
      move: true,
      restMs: delay,
      delay: {
        open: delay,
        close: closeDelay
      },
      shouldOpen: delay > 0 ? () => parentMenuStore.select("allowMouseEnter") : void 0,
      triggerElementRef,
      externalTree: floatingTreeRoot,
      isClosing: () => store.select("transitionStatus") === "ending"
    });
    const click = useClick(floatingRootContext, {
      enabled: !disabled2,
      event: "mousedown",
      toggle: !openOnHover,
      ignoreMouse: openOnHover,
      stickIfOpen: false
    });
    const localInteractionProps = click.reference ?? EMPTY_OBJECT;
    const rootTriggerProps = store.useState("triggerProps", true);
    delete rootTriggerProps.id;
    const state = {
      disabled: disabled2,
      highlighted,
      open
    };
    const element = useRenderElement("div", componentProps, {
      state,
      stateAttributesMapping: triggerOpenStateMapping2,
      props: [localInteractionProps, hoverProps, rootTriggerProps, itemProps, {
        "aria-controls": popupId,
        tabIndex: open || highlighted ? 0 : -1,
        onBlur() {
          if (highlighted) {
            parentMenuStore.set("activeIndex", null);
          }
        }
      }, elementProps, getItemProps],
      ref: [forwardedRef, listItem.ref, itemRef, registerTrigger, handleTriggerElementRef]
    });
    return element;
  });
  if (true) MenuSubmenuTrigger.displayName = "MenuSubmenuTrigger";

  // node_modules/@base-ui/react/menu/store/MenuHandle.mjs
  init_define_import_meta_env();
  var MenuHandle = class {
    /**
     * Internal store holding the menu's state.
     * @internal
     */
    constructor() {
      this.store = new MenuStore();
    }
    /**
     * Opens the menu and associates it with the trigger with the given id.
     * The trigger must be a Menu.Trigger component with this handle passed as a prop.
     *
     * @param triggerId ID of the trigger to associate with the menu.
     */
    open(triggerId) {
      const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
      if (triggerId && !triggerElement) {
        throw new Error(true ? `Base UI: MenuHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(83, triggerId));
      }
      this.store.setOpen(true, createChangeEventDetails("imperative-action", void 0, triggerElement));
    }
    /**
     * Closes the menu.
     */
    close() {
      this.store.setOpen(false, createChangeEventDetails("imperative-action", void 0, void 0));
    }
    /**
     * Indicates whether the menu is currently open.
     */
    get isOpen() {
      return this.store.select("open");
    }
  };
  function createMenuHandle() {
    return new MenuHandle();
  }

  // src/components/ui/dropdown-menu.tsx
  var DropdownMenu = index_parts_exports3.Root;
  function DropdownMenuTrigger({
    asChild = false,
    className,
    children,
    ...props
  }) {
    if (asChild && React118.isValidElement(children)) {
      return React118.cloneElement(children, {
        ...props,
        className: cn(children.props.className, className)
      });
    }
    return /* @__PURE__ */ React118.createElement(index_parts_exports3.Trigger, { className, ...props }, children);
  }
  var DropdownMenuGroup = index_parts_exports3.Group;
  var DropdownMenuPortal = index_parts_exports3.Portal;
  var DropdownMenuRadioGroup = index_parts_exports3.RadioGroup;
  function DropdownMenuSubTrigger({
    className,
    inset,
    children,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      index_parts_exports3.SubmenuTrigger,
      {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: cn(
          "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        ...props
      },
      children,
      /* @__PURE__ */ React118.createElement(ChevronRight, { className: "ml-auto" })
    );
  }
  function DropdownMenuSubContent({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(index_parts_exports3.Portal, null, /* @__PURE__ */ React118.createElement(index_parts_exports3.Positioner, { sideOffset: 4, alignOffset: -5 }, /* @__PURE__ */ React118.createElement(
      index_parts_exports3.Popup,
      {
        "data-slot": "dropdown-menu-sub-content",
        className: cn(
          "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props
      }
    )));
  }
  function DropdownMenuContent({
    className,
    sideOffset = 4,
    align = "center",
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(index_parts_exports3.Portal, null, /* @__PURE__ */ React118.createElement(index_parts_exports3.Positioner, { sideOffset, align }, /* @__PURE__ */ React118.createElement(
      index_parts_exports3.Popup,
      {
        "data-slot": "dropdown-menu-content",
        className: cn(
          "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props
      }
    )));
  }
  function DropdownMenuItem({
    className,
    inset,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      index_parts_exports3.Item,
      {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        className: cn(
          "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        ...props
      }
    );
  }
  function DropdownMenuCheckboxItem({
    className,
    children,
    checked,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      index_parts_exports3.CheckboxItem,
      {
        "data-slot": "dropdown-menu-checkbox-item",
        className: cn(
          "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        checked,
        ...props
      },
      /* @__PURE__ */ React118.createElement("span", { className: "absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React118.createElement(index_parts_exports3.CheckboxItemIndicator, null, /* @__PURE__ */ React118.createElement(Check, { className: "size-4" }))),
      children
    );
  }
  function DropdownMenuRadioItem({
    className,
    children,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      index_parts_exports3.RadioItem,
      {
        "data-slot": "dropdown-menu-radio-item",
        className: cn(
          "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React118.createElement("span", { className: "absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React118.createElement(index_parts_exports3.RadioItemIndicator, null, /* @__PURE__ */ React118.createElement(Circle, { className: "size-2 fill-current" }))),
      children
    );
  }
  function DropdownMenuLabel({
    className,
    inset,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      "div",
      {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: cn("px-2 py-1.5 text-sm font-semibold", className),
        ...props
      }
    );
  }
  function DropdownMenuSeparator({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      index_parts_exports3.Separator,
      {
        "data-slot": "dropdown-menu-separator",
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
      }
    );
  }
  function DropdownMenuShortcut({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React118.createElement(
      "span",
      {
        "data-slot": "dropdown-menu-shortcut",
        className: cn("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
      }
    );
  }

  // src/components/ui/input.tsx
  init_define_import_meta_env();
  var React138 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/input/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/input/Input.mjs
  init_define_import_meta_env();
  var React137 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/field/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/index.parts.mjs
  var index_parts_exports4 = {};
  __export(index_parts_exports4, {
    Control: () => FieldControl,
    Description: () => FieldDescription,
    Error: () => FieldError,
    Item: () => FieldItem,
    Label: () => FieldLabel,
    Root: () => FieldRoot,
    Validity: () => FieldValidity
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/root/FieldRoot.mjs
  init_define_import_meta_env();
  var React127 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
  init_define_import_meta_env();
  var React119 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/noop.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/field-constants/constants.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
  init_define_import_meta_env();
  var FieldControlDataAttributes = /* @__PURE__ */ (function(FieldControlDataAttributes2) {
    FieldControlDataAttributes2["disabled"] = "data-disabled";
    FieldControlDataAttributes2["valid"] = "data-valid";
    FieldControlDataAttributes2["invalid"] = "data-invalid";
    FieldControlDataAttributes2["touched"] = "data-touched";
    FieldControlDataAttributes2["dirty"] = "data-dirty";
    FieldControlDataAttributes2["filled"] = "data-filled";
    FieldControlDataAttributes2["focused"] = "data-focused";
    return FieldControlDataAttributes2;
  })({});

  // node_modules/@base-ui/react/internals/field-constants/constants.mjs
  var DEFAULT_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: null,
    valueMissing: false
  };
  var DEFAULT_FIELD_STATE_ATTRIBUTES = {
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
  };
  var DEFAULT_FIELD_ROOT_STATE = {
    disabled: false,
    ...DEFAULT_FIELD_STATE_ATTRIBUTES
  };
  var fieldValidityMapping = {
    valid(value) {
      if (value === null) {
        return null;
      }
      if (value) {
        return {
          [FieldControlDataAttributes.valid]: ""
        };
      }
      return {
        [FieldControlDataAttributes.invalid]: ""
      };
    }
  };

  // node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
  var DEFAULT_FIELD_ROOT_CONTEXT = {
    invalid: void 0,
    name: void 0,
    validityData: {
      state: DEFAULT_VALIDITY_STATE,
      errors: [],
      error: "",
      value: "",
      initialValue: null
    },
    setValidityData: NOOP,
    disabled: void 0,
    touched: DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
    setTouched: NOOP,
    dirty: DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
    setDirty: NOOP,
    filled: DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
    setFilled: NOOP,
    focused: DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
    setFocused: NOOP,
    validate: () => null,
    validationMode: "onSubmit",
    validationDebounceTime: 0,
    shouldValidateOnChange: () => false,
    state: DEFAULT_FIELD_ROOT_STATE,
    markedDirtyRef: {
      current: false
    },
    registerFieldControl: NOOP,
    validation: {
      getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
      inputRef: {
        current: null
      },
      registerInput: NOOP,
      commit: async () => {
      },
      change: NOOP
    }
  };
  var FieldRootContext = /* @__PURE__ */ React119.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
  if (true) FieldRootContext.displayName = "FieldRootContext";
  function useFieldRootContext(optional = true) {
    const context = React119.useContext(FieldRootContext);
    if (context.setValidityData === NOOP && !optional) {
      throw new Error(true ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : formatErrorMessage_default(28));
    }
    return context;
  }

  // node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
  init_define_import_meta_env();
  var React120 = __toESM(require_react_shim(), 1);
  var FieldsetRootContext = /* @__PURE__ */ React120.createContext(void 0);
  if (true) FieldsetRootContext.displayName = "FieldsetRootContext";
  function useFieldsetRootContext(optional = false) {
    const context = React120.useContext(FieldsetRootContext);
    if (!context && !optional) {
      throw new Error(true ? "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>." : formatErrorMessage_default(86));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/form-context/FormContext.mjs
  init_define_import_meta_env();
  var React121 = __toESM(require_react_shim(), 1);
  var FormContext = /* @__PURE__ */ React121.createContext({
    formRef: {
      current: {
        fields: /* @__PURE__ */ new Map()
      }
    },
    errors: {},
    clearErrors: NOOP,
    validationMode: "onSubmit",
    submitAttemptedRef: {
      current: false
    }
  });
  if (true) FormContext.displayName = "FormContext";
  function useFormContext() {
    return React121.useContext(FormContext);
  }

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
  init_define_import_meta_env();
  var React123 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
  init_define_import_meta_env();
  var React122 = __toESM(require_react_shim(), 1);
  var LabelableContext = /* @__PURE__ */ React122.createContext({
    controlId: void 0,
    registerControlId: NOOP,
    labelId: void 0,
    setLabelId: NOOP,
    messageIds: [],
    setMessageIds: NOOP,
    getDescriptionProps: (externalProps) => externalProps
  });
  if (true) LabelableContext.displayName = "LabelableContext";
  function useLabelableContext() {
    return React122.useContext(LabelableContext);
  }

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
  var import_jsx_runtime24 = __toESM(require_react_shim(), 1);
  var LabelableProvider = function LabelableProvider2(props) {
    const defaultId = useBaseUiId();
    const initialControlId = props.controlId === void 0 ? defaultId : props.controlId;
    const [controlId, setControlIdState] = React123.useState(initialControlId);
    const [labelId, setLabelId] = React123.useState(props.labelId);
    const [messageIds, setMessageIds] = React123.useState([]);
    const registrationsRef = useRefWithInit(() => /* @__PURE__ */ new Map());
    const {
      messageIds: parentMessageIds
    } = useLabelableContext();
    const registerControlId = useStableCallback((source, nextId) => {
      const registrations = registrationsRef.current;
      if (nextId === void 0) {
        registrations.delete(source);
        return;
      }
      registrations.set(source, nextId);
      setControlIdState((prev) => {
        if (registrations.size === 0) {
          return void 0;
        }
        let nextControlId;
        for (const id of registrations.values()) {
          if (prev !== void 0 && id === prev) {
            return prev;
          }
          if (nextControlId === void 0) {
            nextControlId = id;
          }
        }
        return nextControlId;
      });
    });
    const getDescriptionProps = React123.useCallback((externalProps) => {
      const ids = externalProps["aria-describedby"] ? externalProps["aria-describedby"].split(" ") : [];
      ids.push(...parentMessageIds, ...messageIds);
      return {
        ...externalProps,
        "aria-describedby": Array.from(new Set(ids)).join(" ") || void 0
      };
    }, [parentMessageIds, messageIds]);
    const contextValue = React123.useMemo(() => ({
      controlId,
      registerControlId,
      labelId,
      setLabelId,
      messageIds,
      setMessageIds,
      getDescriptionProps
    }), [controlId, registerControlId, labelId, setLabelId, messageIds, setMessageIds, getDescriptionProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(LabelableContext.Provider, {
      value: contextValue,
      children: props.children
    });
  };
  if (true) LabelableProvider.displayName = "LabelableProvider";

  // node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
  init_define_import_meta_env();
  var React124 = __toESM(require_react_shim(), 1);
  function useLabelableId(params = {}) {
    const {
      id,
      implicit = false,
      controlRef
    } = params;
    const {
      controlId,
      registerControlId
    } = useLabelableContext();
    const defaultId = useBaseUiId(id);
    const controlIdForEffect = implicit ? controlId : void 0;
    const controlSourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol("labelable-control"));
    const hasRegisteredRef = React124.useRef(false);
    const hadExplicitIdRef = React124.useRef(id != null);
    const unregisterControlId = useStableCallback(() => {
      if (!hasRegisteredRef.current || registerControlId === NOOP) {
        return;
      }
      hasRegisteredRef.current = false;
      registerControlId(controlSourceRef.current, void 0);
    });
    useIsoLayoutEffect(() => {
      if (registerControlId === NOOP) {
        return void 0;
      }
      let nextId;
      if (implicit) {
        const elem = controlRef?.current;
        if (isElement(elem) && elem.closest("label") != null) {
          nextId = id ?? null;
        } else {
          nextId = controlIdForEffect ?? defaultId;
        }
      } else if (id != null) {
        hadExplicitIdRef.current = true;
        nextId = id;
      } else if (hadExplicitIdRef.current) {
        nextId = defaultId;
      } else {
        unregisterControlId();
        return void 0;
      }
      if (nextId === void 0) {
        unregisterControlId();
        return void 0;
      }
      hasRegisteredRef.current = true;
      registerControlId(controlSourceRef.current, nextId);
      return void 0;
    }, [id, controlRef, controlIdForEffect, registerControlId, implicit, defaultId, controlSourceRef, unregisterControlId]);
    React124.useEffect(() => {
      return unregisterControlId;
    }, [unregisterControlId]);
    return controlId ?? defaultId;
  }

  // node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
  init_define_import_meta_env();
  function useRegisteredLabelId(idProp, setLabelId) {
    const id = useBaseUiId(idProp);
    useIsoLayoutEffect(() => {
      setLabelId(id);
      return () => {
        setLabelId(void 0);
      };
    }, [id, setLabelId]);
    return id;
  }

  // node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
  function useLabel(params = {}) {
    const {
      id: idProp,
      fallbackControlId,
      native = false,
      setLabelId: setLabelIdProp,
      focusControl: focusControlProp
    } = params;
    const {
      controlId: contextControlId,
      setLabelId: setContextLabelId
    } = useLabelableContext();
    const syncLabelId = useStableCallback((nextLabelId) => {
      setContextLabelId(nextLabelId);
      setLabelIdProp?.(nextLabelId);
    });
    const id = useRegisteredLabelId(idProp, syncLabelId);
    const resolvedControlId = contextControlId ?? fallbackControlId;
    function focusControl(event) {
      if (focusControlProp) {
        focusControlProp(event, resolvedControlId);
        return;
      }
      if (!resolvedControlId) {
        return;
      }
      const controlElement = ownerDocument(event.currentTarget).getElementById(resolvedControlId);
      if (isHTMLElement(controlElement)) {
        focusElementWithVisible(controlElement);
      }
    }
    function handleInteraction(event) {
      const target = getTarget(event.nativeEvent);
      if (target?.closest("button,input,select,textarea")) {
        return;
      }
      if (!event.defaultPrevented && event.detail > 1) {
        event.preventDefault();
      }
      if (native) {
        return;
      }
      focusControl(event);
    }
    return native ? {
      id,
      htmlFor: resolvedControlId ?? void 0,
      onMouseDown: handleInteraction
    } : {
      id,
      onClick: handleInteraction,
      onPointerDown(event) {
        event.preventDefault();
      }
    };
  }
  function focusElementWithVisible(element) {
    element.focus({
      // Available from Chrome 144+ (January 2026).
      // Safari and Firefox already support it.
      focusVisible: true
    });
  }

  // node_modules/@base-ui/react/field/root/useFieldValidation.mjs
  init_define_import_meta_env();
  var React125 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/field/utils/getCombinedFieldValidityData.mjs
  init_define_import_meta_env();
  function getCombinedFieldValidityData(validityData, invalid) {
    return {
      ...validityData,
      state: {
        ...validityData.state,
        valid: !invalid && validityData.state.valid
      }
    };
  }

  // node_modules/@base-ui/react/field/root/useFieldValidation.mjs
  var validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
  function isOnlyValueMissing(state) {
    if (!state || state.valid || !state.valueMissing) {
      return false;
    }
    let onlyValueMissing = false;
    for (const key of validityKeys) {
      if (key === "valid") {
        continue;
      }
      if (key === "valueMissing") {
        onlyValueMissing = state[key];
      } else if (state[key]) {
        onlyValueMissing = false;
      }
    }
    return onlyValueMissing;
  }
  function findRepresentativeInput(inputs) {
    let fallback = null;
    for (const input of inputs) {
      if (input.disabled) {
        continue;
      }
      if (!input.validity.valid) {
        return input;
      }
      fallback ?? (fallback = input);
    }
    return fallback;
  }
  function clearCustomValidity(element, inputs) {
    let didClearElement = false;
    for (const input of inputs) {
      input.setCustomValidity("");
      didClearElement || (didClearElement = input === element);
    }
    if (!didClearElement) {
      element.setCustomValidity("");
    }
  }
  function useFieldValidation(params) {
    const {
      formRef
    } = useFormContext();
    const {
      setValidityData,
      validate,
      validityData,
      validationDebounceTime,
      invalid,
      markedDirtyRef,
      state,
      shouldValidateOnChange,
      getRegisteredFieldId
    } = params;
    const {
      controlId,
      getDescriptionProps
    } = useLabelableContext();
    const timeout = useTimeout();
    const inputRef = React125.useRef(null);
    const registeredInputs = useRefWithInit(() => /* @__PURE__ */ new Set()).current;
    const validationCommitIdRef = React125.useRef(0);
    const registerInput = React125.useCallback((element) => {
      if (!element) {
        return void 0;
      }
      registeredInputs.add(element);
      return () => {
        registeredInputs.delete(element);
      };
    }, [registeredInputs]);
    const commit = useStableCallback(async (value, revalidate = false) => {
      const element = findRepresentativeInput(registeredInputs) ?? inputRef.current;
      if (!element) {
        return;
      }
      validationCommitIdRef.current += 1;
      const validationCommitId = validationCommitIdRef.current;
      function updateRegisteredFieldValidity(nextValidityData2, externalInvalid = invalid) {
        const fieldId = getRegisteredFieldId() ?? controlId;
        if (fieldId == null) {
          return;
        }
        const currentFieldData = formRef.current.fields.get(fieldId);
        if (!currentFieldData) {
          return;
        }
        const validityDataWithFormErrors = getCombinedFieldValidityData(nextValidityData2, externalInvalid);
        formRef.current.fields.set(fieldId, {
          ...currentFieldData,
          validityData: validityDataWithFormErrors
        });
      }
      if (revalidate) {
        if (state.valid !== false) {
          return;
        }
        const currentNativeValidity = element.validity;
        if (!currentNativeValidity.valueMissing) {
          const nextValidityData2 = {
            value,
            state: {
              ...DEFAULT_VALIDITY_STATE,
              valid: true
            },
            error: "",
            errors: [],
            initialValue: validityData.initialValue
          };
          clearCustomValidity(element, registeredInputs);
          updateRegisteredFieldValidity(nextValidityData2, false);
          setValidityData(nextValidityData2);
          return;
        }
        const currentNativeValidityObject = validityKeys.reduce((acc, key) => {
          acc[key] = currentNativeValidity[key];
          return acc;
        }, {});
        if (!currentNativeValidityObject.valid && !isOnlyValueMissing(currentNativeValidityObject)) {
          return;
        }
      }
      function getState(el) {
        const computedState = validityKeys.reduce((acc, key) => {
          acc[key] = el.validity[key];
          return acc;
        }, {});
        let hasOnlyValueMissingError = false;
        for (const key of validityKeys) {
          if (key === "valid") {
            continue;
          }
          if (key === "valueMissing" && computedState[key]) {
            hasOnlyValueMissingError = true;
          } else if (computedState[key]) {
            return computedState;
          }
        }
        if (hasOnlyValueMissingError && !markedDirtyRef.current) {
          computedState.valid = true;
          computedState.valueMissing = false;
        }
        return computedState;
      }
      timeout.clear();
      let result = null;
      let validationErrors = [];
      const nextState = getState(element);
      let defaultValidationMessage;
      const isValidatingOnChange = shouldValidateOnChange();
      if (element.validationMessage && !isValidatingOnChange) {
        defaultValidationMessage = element.validationMessage;
        validationErrors = [element.validationMessage];
      } else {
        const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field) => {
          if (field.name) {
            acc[field.name] = field.getValue();
          }
          return acc;
        }, {});
        const resultOrPromise = validate(value, formValues);
        if (typeof resultOrPromise === "object" && resultOrPromise !== null && "then" in resultOrPromise) {
          result = await resultOrPromise;
          if (validationCommitId !== validationCommitIdRef.current) {
            return;
          }
        } else {
          result = resultOrPromise;
        }
        if (result !== null) {
          nextState.valid = false;
          nextState.customError = true;
          if (Array.isArray(result)) {
            validationErrors = result;
            element.setCustomValidity(result.join("\n"));
          } else if (result) {
            validationErrors = [result];
            element.setCustomValidity(result);
          }
        } else if (isValidatingOnChange) {
          clearCustomValidity(element, registeredInputs);
          nextState.customError = false;
          if (element.validationMessage) {
            defaultValidationMessage = element.validationMessage;
            validationErrors = [element.validationMessage];
          } else if (element.validity.valid && !nextState.valid) {
            nextState.valid = true;
          }
        }
      }
      const nextValidityData = {
        value,
        state: nextState,
        error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ""),
        errors: validationErrors,
        initialValue: validityData.initialValue
      };
      updateRegisteredFieldValidity(nextValidityData);
      setValidityData(nextValidityData);
    });
    const change = useStableCallback((value) => {
      timeout.clear();
      const validateOnChange = shouldValidateOnChange();
      if (validateOnChange && value !== "" && validationDebounceTime) {
        validationCommitIdRef.current += 1;
        timeout.start(validationDebounceTime, () => {
          commit(value);
        });
      } else {
        commit(value, !validateOnChange);
      }
    });
    const getValidationProps = React125.useCallback((disabled2, externalProps = {}) => mergeProps(getDescriptionProps(externalProps), state.valid === false && !state.disabled && !disabled2 ? {
      "aria-invalid": true
    } : EMPTY_OBJECT), [getDescriptionProps, state.disabled, state.valid]);
    return React125.useMemo(() => ({
      getValidationProps,
      inputRef,
      registerInput,
      commit,
      change
    }), [getValidationProps, registerInput, commit, change]);
  }

  // node_modules/@base-ui/react/internals/field-register-control/useFieldControlRegistration.mjs
  init_define_import_meta_env();
  var React126 = __toESM(require_react_shim(), 1);
  function useFieldControlRegistration(params) {
    const {
      commit,
      invalid,
      markedDirtyRef,
      name,
      setRegisteredFieldName,
      setRegisteredFieldId,
      setValidityData,
      validityData
    } = params;
    const {
      formRef
    } = useFormContext();
    const activeFieldControlSourceRef = React126.useRef(null);
    const registrationRef = React126.useRef(null);
    const fallbackControlRef = React126.useRef(null);
    const getValueForForm = useStableCallback(() => {
      const registration = registrationRef.current;
      if (!registration) {
        return void 0;
      }
      if (registration.getValue) {
        return registration.getValue();
      }
      return registration.value;
    });
    function getRegistrationValue(registration) {
      return registration.value === void 0 ? getValueForForm() : registration.value;
    }
    const validate = useStableCallback(() => {
      const registration = registrationRef.current;
      markedDirtyRef.current = true;
      if (!registration) {
        commit(validityData.value);
        return;
      }
      commit(getRegistrationValue(registration));
    });
    function refreshRegistration() {
      const registration = registrationRef.current;
      if (!registration || !registration.id) {
        return;
      }
      formRef.current.fields.set(registration.id, {
        getValue: getValueForForm,
        name: name ?? registration.name,
        controlRef: registration.controlRef ?? fallbackControlRef,
        validityData: getCombinedFieldValidityData(validityData, invalid),
        validate
      });
    }
    function deleteRegistration(id = registrationRef.current?.id) {
      if (id) {
        formRef.current.fields.delete(id);
      }
    }
    function syncInitialValue() {
      const registration = registrationRef.current;
      if (!registration) {
        return;
      }
      const initialValue = getRegistrationValue(registration);
      if (validityData.initialValue === null && initialValue !== null) {
        setValidityData((prev) => ({
          ...prev,
          initialValue
        }));
      }
    }
    useIsoLayoutEffect(() => {
      const registration = registrationRef.current;
      if (!registration || !registration.id) {
        return;
      }
      setRegisteredFieldName(name ? void 0 : registration.name);
      formRef.current.fields.set(registration.id, {
        getValue: getValueForForm,
        name: name ?? registration.name,
        controlRef: registration.controlRef ?? fallbackControlRef,
        validityData: getCombinedFieldValidityData(validityData, invalid),
        validate
      });
    }, [formRef, getValueForForm, invalid, name, setRegisteredFieldName, validate, validityData]);
    useIsoLayoutEffect(() => {
      const fields = formRef.current.fields;
      return () => {
        const id = registrationRef.current?.id;
        if (id) {
          fields.delete(id);
        }
      };
    }, [formRef]);
    const register2 = useStableCallback((source, registration) => {
      if (!registration) {
        if (activeFieldControlSourceRef.current === source) {
          activeFieldControlSourceRef.current = null;
          deleteRegistration();
          registrationRef.current = null;
          setRegisteredFieldName(void 0);
          setRegisteredFieldId(void 0);
        }
        return;
      }
      const previousId = registrationRef.current?.id;
      activeFieldControlSourceRef.current = source;
      registrationRef.current = registration;
      if (!name) {
        setRegisteredFieldName(registration.name);
      }
      setRegisteredFieldId(registration.id);
      if (previousId && previousId !== registration.id) {
        deleteRegistration(previousId);
      }
      syncInitialValue();
      refreshRegistration();
    });
    return [validate, register2];
  }

  // node_modules/@base-ui/react/field/root/FieldRoot.mjs
  var import_jsx_runtime25 = __toESM(require_react_shim(), 1);
  var FieldRootInner = /* @__PURE__ */ React127.forwardRef(function FieldRootInner2(componentProps, forwardedRef) {
    const {
      errors,
      validationMode: formValidationMode,
      submitAttemptedRef
    } = useFormContext();
    const {
      render,
      className,
      validate: validateProp,
      validationDebounceTime = 0,
      validationMode = formValidationMode,
      name,
      disabled: disabledProp = false,
      invalid: invalidProp,
      dirty: dirtyProp,
      touched: touchedProp,
      actionsRef,
      style,
      ...elementProps
    } = componentProps;
    const disabledFieldset = useFieldsetRootContext(true)?.disabled;
    const validate = useStableCallback(validateProp || (() => null));
    const disabled2 = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = React127.useState(false);
    const [dirtyState, setDirtyUnwrapped] = React127.useState(false);
    const [filled, setFilled] = React127.useState(false);
    const [focused, setFocused] = React127.useState(false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = React127.useRef(dirty);
    const registeredFieldIdRef = React127.useRef(void 0);
    const [registeredFieldName, setRegisteredFieldName] = React127.useState();
    const effectiveName = name ?? registeredFieldName;
    useIsoLayoutEffect(() => {
      if (dirtyProp !== void 0) {
        markedDirtyRef.current = dirtyProp;
      }
    }, [dirtyProp]);
    const getRegisteredFieldId = React127.useCallback(() => registeredFieldIdRef.current, []);
    const setRegisteredFieldId = React127.useCallback((id) => {
      registeredFieldIdRef.current = id;
    }, []);
    const setDirty = useStableCallback((value) => {
      if (dirtyProp !== void 0) {
        return;
      }
      if (value) {
        markedDirtyRef.current = true;
      }
      setDirtyUnwrapped(value);
    });
    const setTouched = useStableCallback((value) => {
      if (touchedProp !== void 0) {
        return;
      }
      setTouchedUnwrapped(value);
    });
    const shouldValidateOnChange = useStableCallback(() => validationMode === "onChange" || validationMode === "onSubmit" && submitAttemptedRef.current);
    const formError = effectiveName && Object.hasOwn(errors, effectiveName) ? errors[effectiveName] : null;
    const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
    const invalid = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = React127.useState({
      state: DEFAULT_VALIDITY_STATE,
      error: "",
      errors: [],
      value: null,
      initialValue: null
    });
    const valid = disabled2 ? null : !invalid && validityData.state.valid;
    const state = React127.useMemo(() => ({
      disabled: disabled2,
      touched,
      dirty,
      valid,
      filled,
      focused
    }), [disabled2, touched, dirty, valid, filled, focused]);
    const validation = useFieldValidation({
      setValidityData,
      validate,
      validityData,
      validationDebounceTime,
      invalid,
      markedDirtyRef,
      state,
      shouldValidateOnChange,
      getRegisteredFieldId
    });
    const [validateFieldControl, registerFieldControl] = useFieldControlRegistration({
      commit: validation.commit,
      invalid,
      markedDirtyRef,
      name,
      setRegisteredFieldName,
      setRegisteredFieldId,
      setValidityData,
      validityData
    });
    React127.useImperativeHandle(actionsRef, () => ({
      validate: validateFieldControl
    }), [validateFieldControl]);
    const contextValue = React127.useMemo(() => ({
      invalid,
      name: effectiveName,
      validityData,
      setValidityData,
      disabled: disabled2,
      touched,
      setTouched,
      dirty,
      setDirty,
      filled,
      setFilled,
      focused,
      setFocused,
      validate,
      validationMode,
      validationDebounceTime,
      shouldValidateOnChange,
      state,
      markedDirtyRef,
      registerFieldControl,
      validation
    }), [invalid, effectiveName, validityData, disabled2, touched, setTouched, dirty, setDirty, filled, setFilled, focused, setFocused, validate, validationMode, validationDebounceTime, shouldValidateOnChange, state, registerFieldControl, validation]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state,
      props: elementProps,
      stateAttributesMapping: fieldValidityMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FieldRootContext.Provider, {
      value: contextValue,
      children: element
    });
  });
  if (true) FieldRootInner.displayName = "FieldRootInner";
  var FieldRoot = /* @__PURE__ */ React127.forwardRef(function FieldRoot2(componentProps, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(LabelableProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FieldRootInner, {
        ...componentProps,
        ref: forwardedRef
      })
    });
  });
  if (true) FieldRoot.displayName = "FieldRoot";

  // node_modules/@base-ui/react/field/label/FieldLabel.mjs
  init_define_import_meta_env();
  var React129 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/field/item/FieldItemContext.mjs
  init_define_import_meta_env();
  var React128 = __toESM(require_react_shim(), 1);
  var FieldItemContext = /* @__PURE__ */ React128.createContext({
    disabled: false
  });
  if (true) FieldItemContext.displayName = "FieldItemContext";
  function useFieldItemContext() {
    const context = React128.useContext(FieldItemContext);
    return context;
  }

  // node_modules/@base-ui/react/field/label/FieldLabel.mjs
  var FieldLabel = /* @__PURE__ */ React129.forwardRef(function FieldLabel2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      nativeLabel = true,
      ...elementProps
    } = componentProps;
    const fieldRootContext = useFieldRootContext(false);
    const fieldItemContext = useFieldItemContext();
    const {
      labelId
    } = useLabelableContext();
    const state = {
      ...fieldRootContext.state,
      disabled: fieldRootContext.disabled || fieldItemContext.disabled
    };
    const labelRef = React129.useRef(null);
    const labelProps = useLabel({
      id: labelId ?? idProp,
      native: nativeLabel
    });
    if (true) {
      React129.useEffect(() => {
        if (!labelRef.current) {
          return;
        }
        const isLabelTag = labelRef.current.tagName === "LABEL";
        if (nativeLabel) {
          if (!isLabelTag) {
            const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
            const message = "<Field.Label> expected a <label> element because the `nativeLabel` prop is true. Rendering a non-<label> disables native label association, so `htmlFor` will not work. Use a real <label> in the `render` prop, or set `nativeLabel` to `false`.";
            error(`${message}${ownerStackMessage}`);
          }
        } else if (isLabelTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "<Field.Label> expected a non-<label> element because the `nativeLabel` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the `render` prop, or set `nativeLabel` to `true`.";
          error(`${message}${ownerStackMessage}`);
        }
      }, [nativeLabel]);
    }
    const element = useRenderElement("label", componentProps, {
      ref: [forwardedRef, labelRef],
      state,
      props: [labelProps, elementProps],
      stateAttributesMapping: fieldValidityMapping
    });
    return element;
  });
  if (true) FieldLabel.displayName = "FieldLabel";

  // node_modules/@base-ui/react/field/error/FieldError.mjs
  init_define_import_meta_env();
  var React130 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime26 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping7 = {
    ...fieldValidityMapping,
    ...transitionStatusMapping
  };
  var FieldError = /* @__PURE__ */ React130.forwardRef(function FieldError2(componentProps, forwardedRef) {
    const {
      render,
      id: idProp,
      className,
      match,
      style,
      ...elementProps
    } = componentProps;
    const id = useBaseUiId(idProp);
    const {
      validityData,
      state: fieldState,
      name
    } = useFieldRootContext(false);
    const {
      setMessageIds
    } = useLabelableContext();
    const {
      errors
    } = useFormContext();
    const formError = name && Object.hasOwn(errors, name) ? errors[name] : null;
    const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
    const hasSpecificMatch = typeof match === "string";
    let rendered = false;
    if (match === true) {
      rendered = true;
    } else if (fieldState.disabled) {
      rendered = false;
    } else if (hasSpecificMatch) {
      rendered = Boolean(validityData.state[match]);
    } else {
      rendered = hasFormError || validityData.state.valid === false;
    }
    const {
      mounted,
      transitionStatus,
      setMounted
    } = useTransitionStatus(rendered);
    useIsoLayoutEffect(() => {
      if (!rendered || !id) {
        return void 0;
      }
      setMessageIds((v) => v.concat(id));
      return () => {
        setMessageIds((v) => v.filter((item) => item !== id));
      };
    }, [rendered, id, setMessageIds]);
    const errorRef = React130.useRef(null);
    const [lastRenderedMessage, setLastRenderedMessage] = React130.useState(null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = React130.useState(null);
    let error2 = validityData.error;
    if (!hasSpecificMatch && hasFormError) {
      error2 = formError;
    } else if (validityData.errors.length > 1) {
      error2 = validityData.errors;
    }
    let errorMessage = error2 ?? "";
    if (Array.isArray(error2)) {
      errorMessage = error2.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("ul", {
        children: error2.map((message) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", {
          children: message
        }, message))
      }) : error2[0] ?? "";
    }
    const errorKey = Array.isArray(error2) ? JSON.stringify(error2) : error2;
    if (rendered && errorKey !== lastRenderedMessageKey) {
      setLastRenderedMessageKey(errorKey);
      setLastRenderedMessage(errorMessage);
    }
    useOpenChangeComplete({
      open: rendered,
      ref: errorRef,
      onComplete() {
        if (!rendered) {
          setMounted(false);
        }
      }
    });
    const state = {
      ...fieldState,
      transitionStatus
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, errorRef],
      state,
      props: [{
        id,
        children: rendered ? errorMessage : lastRenderedMessage
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping7,
      enabled: mounted
    });
    if (!mounted) {
      return null;
    }
    return element;
  });
  if (true) FieldError.displayName = "FieldError";

  // node_modules/@base-ui/react/field/description/FieldDescription.mjs
  init_define_import_meta_env();
  var React131 = __toESM(require_react_shim(), 1);
  var FieldDescription = /* @__PURE__ */ React131.forwardRef(function FieldDescription2(componentProps, forwardedRef) {
    const {
      render,
      id: idProp,
      className,
      style,
      ...elementProps
    } = componentProps;
    const id = useBaseUiId(idProp);
    const fieldRootContext = useFieldRootContext(false);
    const fieldItemContext = useFieldItemContext();
    const {
      setMessageIds
    } = useLabelableContext();
    const state = {
      ...fieldRootContext.state,
      disabled: fieldRootContext.disabled || fieldItemContext.disabled
    };
    useIsoLayoutEffect(() => {
      if (!id) {
        return void 0;
      }
      setMessageIds((v) => v.concat(id));
      return () => {
        setMessageIds((v) => v.filter((item) => item !== id));
      };
    }, [id, setMessageIds]);
    const element = useRenderElement("p", componentProps, {
      ref: forwardedRef,
      state,
      props: [{
        id
      }, elementProps],
      stateAttributesMapping: fieldValidityMapping
    });
    return element;
  });
  if (true) FieldDescription.displayName = "FieldDescription";

  // node_modules/@base-ui/react/field/control/FieldControl.mjs
  init_define_import_meta_env();
  var React133 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
  init_define_import_meta_env();
  var React132 = __toESM(require_react_shim(), 1);
  function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
    const {
      registerFieldControl
    } = useFieldRootContext();
    const sourceRef = React132.useRef(null);
    if (!sourceRef.current) {
      sourceRef.current = /* @__PURE__ */ Symbol();
    }
    useIsoLayoutEffect(() => {
      const source = sourceRef.current;
      if (!source || !enabled) {
        return void 0;
      }
      const registration = {
        controlRef,
        getValue: getFormValueOverride,
        id,
        name,
        value
      };
      registerFieldControl(source, registration);
      return () => {
        registerFieldControl(source, void 0);
      };
    }, [controlRef, enabled, getFormValueOverride, id, name, registerFieldControl, value]);
  }

  // node_modules/@base-ui/react/field/control/FieldControl.mjs
  var FieldControl = /* @__PURE__ */ React133.forwardRef(function FieldControl2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      name: nameProp,
      value: valueProp,
      disabled: disabledProp = false,
      onValueChange,
      defaultValue,
      autoFocus = false,
      style,
      ...elementProps
    } = componentProps;
    const {
      state: fieldState,
      name: fieldName,
      disabled: fieldDisabled,
      setTouched,
      setDirty,
      validityData,
      setFocused,
      setFilled,
      validationMode,
      validation
    } = useFieldRootContext();
    const {
      clearErrors
    } = useFormContext();
    const disabled2 = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
      ...fieldState,
      disabled: disabled2
    };
    const {
      labelId
    } = useLabelableContext();
    const id = useLabelableId({
      id: idProp
    });
    useIsoLayoutEffect(() => {
      const hasExternalValue = valueProp != null;
      if (validation.inputRef.current?.value || hasExternalValue && valueProp !== "") {
        setFilled(true);
      } else if (hasExternalValue && valueProp === "") {
        setFilled(false);
      }
    }, [validation.inputRef, setFilled, valueProp]);
    const inputRef = React133.useRef(null);
    useIsoLayoutEffect(() => {
      if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) {
        setFocused(true);
      }
    }, [autoFocus, setFocused]);
    const [valueUnwrapped] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: "FieldControl",
      state: "value"
    });
    const isControlled = valueProp !== void 0;
    const value = isControlled ? valueUnwrapped : void 0;
    const getValueFromInput = useStableCallback(() => validation.inputRef.current?.value);
    useRegisterFieldControl(validation.inputRef, id, value, getValueFromInput, !disabled2, nameProp);
    const element = useRenderElement("input", componentProps, {
      ref: [forwardedRef, inputRef],
      state,
      props: [{
        id,
        disabled: disabled2,
        name,
        ref: validation.inputRef,
        "aria-labelledby": labelId,
        autoFocus,
        ...isControlled ? {
          value
        } : {
          defaultValue
        },
        onChange(event) {
          const inputValue = event.currentTarget.value;
          onValueChange?.(inputValue, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
          setDirty(inputValue !== validityData.initialValue);
          setFilled(inputValue !== "");
          if (!event.nativeEvent.defaultPrevented) {
            clearErrors(name);
            validation.change(inputValue);
          }
        },
        onFocus() {
          setFocused(true);
        },
        onBlur(event) {
          setTouched(true);
          setFocused(false);
          if (validationMode === "onBlur") {
            validation.commit(event.currentTarget.value);
          }
        },
        onKeyDown(event) {
          if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
            setTouched(true);
            validation.commit(event.currentTarget.value);
          }
        }
      }, elementProps, (props) => validation.getValidationProps(disabled2, props)],
      stateAttributesMapping: fieldValidityMapping
    });
    return element;
  });
  if (true) FieldControl.displayName = "FieldControl";

  // node_modules/@base-ui/react/field/validity/FieldValidity.mjs
  init_define_import_meta_env();
  var React134 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime27 = __toESM(require_react_shim(), 1);
  var FieldValidity = function FieldValidity2(props) {
    const {
      children
    } = props;
    const {
      validityData,
      invalid
    } = useFieldRootContext(false);
    const combinedFieldValidityData = React134.useMemo(() => getCombinedFieldValidityData(validityData, invalid), [validityData, invalid]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const {
      transitionStatus
    } = useTransitionStatus(isInvalid);
    const fieldValidityState = React134.useMemo(() => {
      return {
        ...combinedFieldValidityData,
        validity: combinedFieldValidityData.state,
        transitionStatus
      };
    }, [combinedFieldValidityData, transitionStatus]);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(React134.Fragment, {
      children: children(fieldValidityState)
    });
  };
  if (true) FieldValidity.displayName = "FieldValidity";

  // node_modules/@base-ui/react/field/item/FieldItem.mjs
  init_define_import_meta_env();
  var React136 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
  init_define_import_meta_env();
  var React135 = __toESM(require_react_shim(), 1);
  var CheckboxGroupContext = /* @__PURE__ */ React135.createContext(void 0);
  if (true) CheckboxGroupContext.displayName = "CheckboxGroupContext";
  function useCheckboxGroupContext(optional = true) {
    const context = React135.useContext(CheckboxGroupContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>." : formatErrorMessage_default(3));
    }
    return context;
  }

  // node_modules/@base-ui/react/field/item/FieldItem.mjs
  var import_jsx_runtime28 = __toESM(require_react_shim(), 1);
  var FieldItem = /* @__PURE__ */ React136.forwardRef(function FieldItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabledProp = false,
      ...elementProps
    } = componentProps;
    const {
      state: fieldState,
      disabled: rootDisabled
    } = useFieldRootContext(false);
    const disabled2 = rootDisabled || disabledProp;
    const state = {
      ...fieldState,
      disabled: disabled2
    };
    const checkboxGroupContext = useCheckboxGroupContext();
    const hasParentCheckbox = checkboxGroupContext?.allValues !== void 0;
    const controlId = hasParentCheckbox ? checkboxGroupContext?.parent.id : void 0;
    const fieldItemContext = React136.useMemo(() => ({
      disabled: disabled2
    }), [disabled2]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state,
      props: elementProps,
      stateAttributesMapping: fieldValidityMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(LabelableProvider, {
      controlId,
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FieldItemContext.Provider, {
        value: fieldItemContext,
        children: element
      })
    });
  });
  if (true) FieldItem.displayName = "FieldItem";

  // node_modules/@base-ui/react/input/Input.mjs
  var import_jsx_runtime29 = __toESM(require_react_shim(), 1);
  var Input = /* @__PURE__ */ React137.forwardRef(function Input2(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(index_parts_exports4.Control, {
      ref: forwardedRef,
      ...props
    });
  });
  if (true) Input.displayName = "Input";

  // src/components/ui/input.tsx
  function Input3({ className, type, ...props }) {
    return /* @__PURE__ */ React138.createElement(
      Input,
      {
        type,
        "data-slot": "input",
        className: cn(
          "min-h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-2 text-base leading-5 transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        ),
        ...props
      }
    );
  }

  // src/components/ui/label.tsx
  init_define_import_meta_env();
  var React139 = __toESM(require_react_shim(), 1);
  function Label({ className, ...props }) {
    return /* @__PURE__ */ React139.createElement(
      "label",
      {
        "data-slot": "label",
        className: cn(
          "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        ),
        ...props
      }
    );
  }

  // src/components/ui/select.tsx
  init_define_import_meta_env();
  var React166 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/select/index.parts.mjs
  var index_parts_exports5 = {};
  __export(index_parts_exports5, {
    Arrow: () => SelectArrow,
    Backdrop: () => SelectBackdrop,
    Group: () => SelectGroup,
    GroupLabel: () => SelectGroupLabel,
    Icon: () => SelectIcon,
    Item: () => SelectItem,
    ItemIndicator: () => SelectItemIndicator,
    ItemText: () => SelectItemText,
    Label: () => SelectLabel,
    List: () => SelectList,
    Popup: () => SelectPopup,
    Portal: () => SelectPortal,
    Positioner: () => SelectPositioner,
    Root: () => SelectRoot,
    ScrollDownArrow: () => SelectScrollDownArrow,
    ScrollUpArrow: () => SelectScrollUpArrow,
    Separator: () => Separator,
    Trigger: () => SelectTrigger,
    Value: () => SelectValue
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/select/root/SelectRoot.mjs
  init_define_import_meta_env();
  var React142 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/root/SelectRootContext.mjs
  init_define_import_meta_env();
  var React140 = __toESM(require_react_shim(), 1);
  var SelectRootContext = /* @__PURE__ */ React140.createContext(null);
  if (true) SelectRootContext.displayName = "SelectRootContext";
  var SelectFloatingContext = /* @__PURE__ */ React140.createContext(null);
  if (true) SelectFloatingContext.displayName = "SelectFloatingContext";
  function useSelectRootContext() {
    const context = React140.useContext(SelectRootContext);
    if (context === null) {
      throw new Error(true ? "Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>." : formatErrorMessage_default(60));
    }
    return context;
  }
  function useSelectFloatingContext() {
    const context = React140.useContext(SelectFloatingContext);
    if (context === null) {
      throw new Error(true ? "Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>." : formatErrorMessage_default(61));
    }
    return context;
  }

  // node_modules/@base-ui/react/select/store.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/itemEquality.mjs
  init_define_import_meta_env();
  var defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
  function compareItemEquality(itemValue, selectedValue, comparer) {
    if (itemValue == null || selectedValue == null) {
      return Object.is(itemValue, selectedValue);
    }
    return comparer(itemValue, selectedValue);
  }
  function selectedValueIncludes(selectedValues, itemValue, comparer) {
    if (!selectedValues || selectedValues.length === 0) {
      return false;
    }
    return selectedValues.some((selectedValue) => {
      if (selectedValue === void 0) {
        return false;
      }
      return compareItemEquality(itemValue, selectedValue, comparer);
    });
  }
  function findItemIndex(itemValues, selectedValue, comparer) {
    if (!itemValues || itemValues.length === 0) {
      return -1;
    }
    return itemValues.findIndex((itemValue) => {
      if (itemValue === void 0) {
        return false;
      }
      return compareItemEquality(itemValue, selectedValue, comparer);
    });
  }
  function removeItem(selectedValues, itemValue, comparer) {
    return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
  }

  // node_modules/@base-ui/react/internals/resolveValueLabel.mjs
  init_define_import_meta_env();
  var React141 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/serializeValue.mjs
  init_define_import_meta_env();
  function serializeValue(value) {
    if (value == null) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }

  // node_modules/@base-ui/react/internals/resolveValueLabel.mjs
  var import_jsx_runtime30 = __toESM(require_react_shim(), 1);
  function isGroupedItems(items) {
    return items != null && items.length > 0 && typeof items[0] === "object" && items[0] != null && "items" in items[0];
  }
  function hasNullItemLabel(items) {
    if (!Array.isArray(items)) {
      return items != null && "null" in items;
    }
    const arrayItems = items;
    if (isGroupedItems(arrayItems)) {
      for (const group of arrayItems) {
        for (const item of group.items) {
          if (item && item.value == null && item.label != null) {
            return true;
          }
        }
      }
      return false;
    }
    for (const item of arrayItems) {
      if (item && item.value == null && item.label != null) {
        return true;
      }
    }
    return false;
  }
  function stringifyAsLabel(item, itemToStringLabel) {
    if (itemToStringLabel && item != null) {
      return itemToStringLabel(item) ?? "";
    }
    if (item && typeof item === "object") {
      if ("label" in item && item.label != null) {
        return String(item.label);
      }
      if ("value" in item) {
        return String(item.value);
      }
    }
    return serializeValue(item);
  }
  function stringifyAsValue(item, itemToStringValue) {
    if (itemToStringValue && item != null) {
      return itemToStringValue(item) ?? "";
    }
    if (item && typeof item === "object" && "value" in item && "label" in item) {
      return serializeValue(item.value);
    }
    return serializeValue(item);
  }
  function resolveSelectedLabel(value, items, itemToStringLabel) {
    function fallback() {
      return stringifyAsLabel(value, itemToStringLabel);
    }
    if (itemToStringLabel && value != null) {
      return itemToStringLabel(value);
    }
    if (value && typeof value === "object" && "label" in value && value.label != null) {
      return value.label;
    }
    if (items && !Array.isArray(items)) {
      return items[value] ?? fallback();
    }
    if (Array.isArray(items)) {
      const arrayItems = items;
      const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group) => group.items) : arrayItems;
      if (value == null || typeof value !== "object") {
        const match = flatItems.find((item) => item.value === value);
        if (match && match.label != null) {
          return match.label;
        }
        return fallback();
      }
      if ("value" in value) {
        const match = flatItems.find((item) => item && item.value === value.value);
        if (match && match.label != null) {
          return match.label;
        }
      }
    }
    return fallback();
  }
  function resolveMultipleLabels(values, items, itemToStringLabel) {
    return values.reduce((acc, value, index2) => {
      if (index2 > 0) {
        acc.push(", ");
      }
      acc.push(/* @__PURE__ */ (0, import_jsx_runtime30.jsx)(React141.Fragment, {
        children: resolveSelectedLabel(value, items, itemToStringLabel)
      }, index2));
      return acc;
    }, []);
  }

  // node_modules/@base-ui/react/select/store.mjs
  var selectors4 = {
    id: createSelector((state) => state.id),
    labelId: createSelector((state) => state.labelId),
    modal: createSelector((state) => state.modal),
    multiple: createSelector((state) => state.multiple),
    items: createSelector((state) => state.items),
    itemToStringLabel: createSelector((state) => state.itemToStringLabel),
    itemToStringValue: createSelector((state) => state.itemToStringValue),
    isItemEqualToValue: createSelector((state) => state.isItemEqualToValue),
    value: createSelector((state) => state.value),
    hasSelectedValue: createSelector((state) => {
      const {
        value,
        multiple,
        itemToStringValue
      } = state;
      if (value == null) {
        return false;
      }
      if (multiple && Array.isArray(value)) {
        return value.length > 0;
      }
      return stringifyAsValue(value, itemToStringValue) !== "";
    }),
    hasNullItemLabel: createSelector((state, enabled) => {
      return enabled ? hasNullItemLabel(state.items) : false;
    }),
    open: createSelector((state) => state.open),
    mounted: createSelector((state) => state.mounted),
    forceMount: createSelector((state) => state.forceMount),
    transitionStatus: createSelector((state) => state.transitionStatus),
    openMethod: createSelector((state) => state.openMethod),
    activeIndex: createSelector((state) => state.activeIndex),
    selectedIndex: createSelector((state) => state.selectedIndex),
    isActive: createSelector((state, index2) => state.activeIndex === index2),
    isSelected: createSelector((state, itemValue) => {
      const comparer = state.isItemEqualToValue;
      const storeValue = state.value;
      if (state.multiple) {
        return Array.isArray(storeValue) && storeValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
      }
      return compareItemEquality(itemValue, storeValue, comparer);
    }),
    isSelectedByFocus: createSelector((state, index2) => {
      return state.selectedIndex === index2;
    }),
    popupProps: createSelector((state) => state.popupProps),
    triggerProps: createSelector((state) => state.triggerProps),
    triggerElement: createSelector((state) => state.triggerElement),
    positionerElement: createSelector((state) => state.positionerElement),
    listElement: createSelector((state) => state.listElement),
    popupSide: createSelector((state) => state.popupSide),
    scrollUpArrowVisible: createSelector((state) => state.scrollUpArrowVisible),
    scrollDownArrowVisible: createSelector((state) => state.scrollDownArrowVisible),
    hasScrollArrows: createSelector((state) => state.hasScrollArrows)
  };

  // node_modules/@base-ui/react/internals/areArraysEqual.mjs
  init_define_import_meta_env();
  function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
    return array1.length === array2.length && array1.every((value, index2) => itemComparer(value, array2[index2]));
  }

  // node_modules/@base-ui/react/utils/scrollEdges.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/clamp.mjs
  init_define_import_meta_env();
  function clamp2(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER) {
    return Math.max(min2, Math.min(val, max2));
  }

  // node_modules/@base-ui/react/utils/scrollEdges.mjs
  var SCROLL_EDGE_TOLERANCE_PX = 1;
  function getMaxScrollOffset(scrollSize, clientSize) {
    return Math.max(0, scrollSize - clientSize);
  }
  function normalizeScrollOffset(value, max2) {
    if (max2 <= 0) {
      return 0;
    }
    const clamped = clamp2(value, 0, max2);
    const startDistance = clamped;
    const endDistance = max2 - clamped;
    const withinStartTolerance = startDistance <= SCROLL_EDGE_TOLERANCE_PX;
    const withinEndTolerance = endDistance <= SCROLL_EDGE_TOLERANCE_PX;
    if (withinStartTolerance && withinEndTolerance) {
      return startDistance <= endDistance ? 0 : max2;
    }
    if (withinStartTolerance) {
      return 0;
    }
    if (withinEndTolerance) {
      return max2;
    }
    return clamped;
  }

  // node_modules/@base-ui/react/select/root/SelectRoot.mjs
  var import_jsx_runtime31 = __toESM(require_react_shim(), 1);
  function SelectRoot(props) {
    const {
      id,
      value: valueProp,
      defaultValue = null,
      onValueChange,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      name: nameProp,
      form,
      autoComplete,
      disabled: disabledProp = false,
      readOnly = false,
      required = false,
      modal = true,
      actionsRef,
      inputRef,
      onOpenChangeComplete,
      items,
      multiple = false,
      itemToStringLabel,
      itemToStringValue,
      isItemEqualToValue = defaultItemEquality,
      highlightItemOnHover = true,
      children
    } = props;
    const {
      clearErrors
    } = useFormContext();
    const {
      setDirty,
      setTouched,
      setFocused,
      validityData,
      setFilled,
      name: fieldName,
      disabled: fieldDisabled,
      validation,
      validationMode
    } = useFieldRootContext();
    const generatedId = useLabelableId({
      id
    });
    const disabled2 = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const [value, setValueUnwrapped] = useControlled({
      controlled: valueProp,
      default: multiple ? defaultValue ?? EMPTY_ARRAY : defaultValue,
      name: "Select",
      state: "value"
    });
    const [open, setOpenUnwrapped] = useControlled({
      controlled: openProp,
      default: defaultOpen,
      name: "Select",
      state: "open"
    });
    const listRef = React142.useRef([]);
    const labelsRef = React142.useRef([]);
    const popupRef = React142.useRef(null);
    const scrollHandlerRef = React142.useRef(null);
    const scrollArrowsMountedCountRef = React142.useRef(0);
    const valueRef = React142.useRef(null);
    const valuesRef = React142.useRef([]);
    const typingRef = React142.useRef(false);
    const firstItemTextRef = React142.useRef(null);
    const selectedItemTextRef = React142.useRef(null);
    const selectionRef = React142.useRef({
      allowSelectedMouseUp: false,
      allowUnselectedMouseUp: false,
      dragY: 0
    });
    const alignItemWithTriggerActiveRef = React142.useRef(false);
    const {
      mounted,
      setMounted,
      transitionStatus
    } = useTransitionStatus(open);
    const {
      openMethod,
      triggerProps: interactionTypeProps
    } = useOpenInteractionType(open);
    const store = useRefWithInit(() => new Store({
      id: generatedId,
      labelId: void 0,
      modal,
      multiple,
      itemToStringLabel,
      itemToStringValue,
      isItemEqualToValue,
      value,
      open,
      mounted,
      transitionStatus,
      items,
      forceMount: false,
      openMethod: null,
      activeIndex: null,
      selectedIndex: null,
      popupProps: {},
      triggerProps: {},
      triggerElement: null,
      positionerElement: null,
      listElement: null,
      popupSide: null,
      scrollUpArrowVisible: false,
      scrollDownArrowVisible: false,
      hasScrollArrows: false
    })).current;
    const activeIndex = useStore(store, selectors4.activeIndex);
    const selectedIndex = useStore(store, selectors4.selectedIndex);
    const triggerElement = useStore(store, selectors4.triggerElement);
    const positionerElement = useStore(store, selectors4.positionerElement);
    const previousOpenMethod = usePreviousValue(openMethod);
    const renderedOpenMethod = openMethod ?? previousOpenMethod ?? null;
    const serializedValue = React142.useMemo(() => {
      if (multiple) {
        return "";
      }
      return stringifyAsValue(value, itemToStringValue);
    }, [multiple, value, itemToStringValue]);
    const fieldStringValue = React142.useMemo(() => {
      if (multiple && Array.isArray(value)) {
        return value.map((currentValue) => stringifyAsValue(currentValue, itemToStringValue));
      }
      return stringifyAsValue(value, itemToStringValue);
    }, [multiple, value, itemToStringValue]);
    const controlRef = useValueAsRef(store.state.triggerElement);
    const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
    useRegisterFieldControl(controlRef, generatedId, value, getStringifiedValueForForm, !disabled2, nameProp);
    const initialValueRef = React142.useRef(value);
    const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value != null && stringifyAsValue(value, itemToStringValue) !== "";
    useIsoLayoutEffect(() => {
      if (value !== initialValueRef.current) {
        store.set("forceMount", true);
      }
    }, [store, value]);
    useIsoLayoutEffect(() => {
      setFilled(hasSelectedValue);
    }, [hasSelectedValue, setFilled]);
    useIsoLayoutEffect(function syncSelectedIndex() {
      const registry = valuesRef.current;
      let nextIndex;
      if (multiple) {
        const currentValue = Array.isArray(value) ? value : [];
        if (currentValue.length === 0) {
          nextIndex = null;
        } else {
          const lastValue = currentValue[currentValue.length - 1];
          const lastIndex = findItemIndex(registry, lastValue, isItemEqualToValue);
          nextIndex = lastIndex === -1 ? null : lastIndex;
        }
      } else {
        const index2 = findItemIndex(registry, value, isItemEqualToValue);
        nextIndex = index2 === -1 ? null : index2;
      }
      if (nextIndex === null) {
        selectedItemTextRef.current = null;
      }
      if (open) {
        return;
      }
      store.set("selectedIndex", nextIndex);
    }, [hasSelectedValue, multiple, open, value, valuesRef, isItemEqualToValue, store, selectedItemTextRef]);
    function isSelectedValueDirty(currentValue) {
      const initialValue = validityData.initialValue;
      if (Array.isArray(currentValue) && Array.isArray(initialValue)) {
        return !areArraysEqual(currentValue, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, isItemEqualToValue));
      }
      return currentValue !== initialValue;
    }
    useValueChanged(value, () => {
      clearErrors(name);
      setDirty(isSelectedValueDirty(value));
      validation.change(value);
    });
    const setOpen = useStableCallback((nextOpen, eventDetails) => {
      onOpenChange?.(nextOpen, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setOpenUnwrapped(nextOpen);
      if (!nextOpen && (eventDetails.reason === reason_parts_exports.focusOut || eventDetails.reason === reason_parts_exports.outsidePress)) {
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(value);
        }
      }
    });
    const handleUnmount = useStableCallback(() => {
      setMounted(false);
      store.update({
        activeIndex: null,
        openMethod: null
      });
      onOpenChangeComplete?.(false);
    });
    useOpenChangeComplete({
      enabled: !actionsRef,
      open,
      ref: popupRef,
      onComplete() {
        if (!open) {
          handleUnmount();
        }
      }
    });
    React142.useImperativeHandle(actionsRef, () => ({
      unmount: handleUnmount
    }), [handleUnmount]);
    const setValue = useStableCallback((nextValue, eventDetails) => {
      onValueChange?.(nextValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setValueUnwrapped(nextValue);
    });
    const handleScrollArrowVisibility = useStableCallback(() => {
      const scroller = store.state.listElement || popupRef.current;
      if (!scroller) {
        return;
      }
      const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
      const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
      const shouldShowUp = scrollTop > 0;
      const shouldShowDown = scrollTop < maxScrollTop;
      if (store.state.scrollUpArrowVisible !== shouldShowUp) {
        store.set("scrollUpArrowVisible", shouldShowUp);
      }
      if (store.state.scrollDownArrowVisible !== shouldShowDown) {
        store.set("scrollDownArrowVisible", shouldShowDown);
      }
    });
    const floatingContext = useFloatingRootContext({
      open,
      onOpenChange: setOpen,
      elements: {
        reference: triggerElement,
        floating: positionerElement
      }
    });
    const click = useClick(floatingContext, {
      enabled: !readOnly && !disabled2,
      event: "mousedown"
    });
    const dismiss = useDismiss(floatingContext);
    const listNavigation2 = useListNavigation(floatingContext, {
      enabled: !readOnly && !disabled2,
      listRef,
      activeIndex,
      selectedIndex,
      disabledIndices: EMPTY_ARRAY,
      onNavigate(nextActiveIndex) {
        if (nextActiveIndex === null && !open) {
          return;
        }
        store.set("activeIndex", nextActiveIndex);
      },
      focusItemOnHover: highlightItemOnHover
    });
    const typeahead = useTypeahead(floatingContext, {
      enabled: !readOnly && !disabled2 && (open || !multiple),
      listRef: labelsRef,
      activeIndex,
      selectedIndex,
      // Skip disabled items while matching so typeahead advances to the next selectable item
      // (a click can never select a disabled item and native `<select>` skips them too). Resolve
      // the disabled state from the element via the attribute-only `isElementDisabled` so the
      // hidden, force-mounted items used for closed-trigger typeahead aren't dropped by the
      // `elementsRef`/visibility filter that `disabledIndices` deliberately sidesteps.
      disabledIndices: (index2) => isElementDisabled(listRef.current[index2]),
      onMatch(index2) {
        if (open) {
          store.set("activeIndex", index2);
        } else {
          setValue(valuesRef.current[index2], createChangeEventDetails("none"));
        }
      },
      onTyping(typing) {
        typingRef.current = typing;
      }
    });
    const mergedTriggerProps = React142.useMemo(() => {
      const triggerInteractionProps = mergeProps(typeahead.reference, listNavigation2.reference, dismiss.reference, click.reference, interactionTypeProps);
      if (generatedId) {
        triggerInteractionProps.id = generatedId;
      }
      return triggerInteractionProps;
    }, [click.reference, typeahead.reference, listNavigation2.reference, dismiss.reference, interactionTypeProps, generatedId]);
    const popupProps = React142.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, typeahead.floating, listNavigation2.floating, dismiss.floating), [typeahead.floating, listNavigation2.floating, dismiss.floating]);
    const itemProps = listNavigation2.item ?? EMPTY_OBJECT;
    useOnFirstRender(() => {
      store.update({
        popupProps,
        triggerProps: mergedTriggerProps
      });
    });
    useIsoLayoutEffect(() => {
      store.update({
        id: generatedId,
        modal,
        multiple,
        value,
        open,
        mounted,
        transitionStatus,
        popupProps,
        triggerProps: mergedTriggerProps,
        items,
        itemToStringLabel,
        itemToStringValue,
        isItemEqualToValue,
        openMethod: renderedOpenMethod
      });
    }, [store, generatedId, modal, multiple, value, open, mounted, transitionStatus, popupProps, mergedTriggerProps, items, itemToStringLabel, itemToStringValue, isItemEqualToValue, renderedOpenMethod]);
    const contextValue = React142.useMemo(() => ({
      store,
      name,
      required,
      disabled: disabled2,
      readOnly,
      multiple,
      highlightItemOnHover,
      setValue,
      setOpen,
      listRef,
      popupRef,
      scrollHandlerRef,
      handleScrollArrowVisibility,
      scrollArrowsMountedCountRef,
      itemProps,
      valueRef,
      valuesRef,
      labelsRef,
      typingRef,
      selectionRef,
      firstItemTextRef,
      selectedItemTextRef,
      validation,
      onOpenChangeComplete,
      alignItemWithTriggerActiveRef,
      initialValueRef
    }), [store, name, required, disabled2, readOnly, multiple, highlightItemOnHover, setValue, setOpen, itemProps, validation, onOpenChangeComplete, handleScrollArrowVisibility]);
    const ref = useMergedRefs(inputRef, validation.inputRef);
    const hasMultipleSelection = multiple && Array.isArray(value) && value.length > 0;
    const hiddenInputName = multiple ? void 0 : name;
    const hiddenInputs = React142.useMemo(() => {
      if (!multiple || !Array.isArray(value) || !name) {
        return null;
      }
      return value.map((v) => {
        const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
        return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", {
          type: "hidden",
          form,
          name,
          value: currentSerializedValue,
          disabled: disabled2
        }, currentSerializedValue);
      });
    }, [multiple, value, form, name, itemToStringValue, disabled2]);
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(SelectRootContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(SelectFloatingContext.Provider, {
        value: floatingContext,
        children: [children, /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", {
          ...validation.getValidationProps(disabled2, {
            onFocus() {
              store.state.triggerElement?.focus({
                // Supported in Chrome from 144 (January 2026)
                focusVisible: true
              });
            },
            // Handle browser autofill.
            onChange(event) {
              if (event.nativeEvent.defaultPrevented || disabled2 || readOnly) {
                return;
              }
              const nextValue = event.currentTarget.value;
              const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
              function handleChange() {
                if (multiple) {
                  return;
                }
                const nextValueLower = nextValue.toLowerCase();
                let matchingIndex = valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
                if (matchingIndex === -1) {
                  matchingIndex = valuesRef.current.findIndex((_, index2) => {
                    const renderedLabel = labelsRef.current[index2];
                    return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
                  });
                }
                const matchingValue = matchingIndex === -1 ? void 0 : valuesRef.current[matchingIndex];
                if (matchingValue != null) {
                  setValue(matchingValue, details);
                }
              }
              store.set("forceMount", true);
              queueMicrotask(handleChange);
            }
          }),
          id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : void 0,
          form,
          name: hiddenInputName,
          autoComplete,
          value: serializedValue,
          disabled: disabled2,
          required: required && !hasMultipleSelection,
          readOnly,
          ref,
          style: name ? visuallyHiddenInput : visuallyHidden,
          tabIndex: -1,
          "aria-hidden": true,
          suppressHydrationWarning: true
        }), hiddenInputs]
      })
    });
  }

  // node_modules/@base-ui/react/select/label/SelectLabel.mjs
  init_define_import_meta_env();
  var React143 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
  init_define_import_meta_env();
  function getDefaultLabelId(id) {
    return id == null ? void 0 : `${id}-label`;
  }
  function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
    return fieldLabelId ?? localLabelId;
  }

  // node_modules/@base-ui/react/select/label/SelectLabel.mjs
  var SelectLabel = /* @__PURE__ */ React143.forwardRef(function SelectLabel2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const elementPropsWithoutId = elementProps;
    delete elementPropsWithoutId.id;
    const fieldRootContext = useFieldRootContext();
    const {
      store
    } = useSelectRootContext();
    const triggerElement = useStore(store, selectors4.triggerElement);
    const rootId = useStore(store, selectors4.id);
    const defaultLabelId = getDefaultLabelId(rootId);
    const labelProps = useLabel({
      id: defaultLabelId,
      fallbackControlId: triggerElement?.id ?? rootId,
      setLabelId(nextLabelId) {
        store.set("labelId", nextLabelId);
      }
    });
    return useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state: fieldRootContext.state,
      props: [labelProps, elementProps],
      stateAttributesMapping: fieldValidityMapping
    });
  });
  if (true) SelectLabel.displayName = "SelectLabel";

  // node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
  init_define_import_meta_env();
  var React144 = __toESM(require_react_shim(), 1);
  var BOUNDARY_OFFSET2 = 2;
  var SELECTED_DELAY = 400;
  var stateAttributesMapping8 = {
    ...pressableTriggerOpenStateMapping,
    ...fieldValidityMapping,
    popupSide: (side) => side ? {
      "data-popup-side": side
    } : null,
    value: () => null
  };
  var SelectTrigger = /* @__PURE__ */ React144.forwardRef(function SelectTrigger2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      disabled: disabledProp = false,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      setTouched,
      setFocused,
      validationMode,
      state: fieldState,
      disabled: fieldDisabled
    } = useFieldRootContext();
    const {
      labelId: fieldLabelId
    } = useLabelableContext();
    const {
      store,
      setOpen,
      selectionRef,
      validation,
      readOnly,
      required,
      alignItemWithTriggerActiveRef,
      disabled: selectDisabled
    } = useSelectRootContext();
    const disabled2 = fieldDisabled || selectDisabled || disabledProp;
    const open = useStore(store, selectors4.open);
    const mounted = useStore(store, selectors4.mounted);
    const value = useStore(store, selectors4.value);
    const triggerProps = useStore(store, selectors4.triggerProps);
    const positionerElement = useStore(store, selectors4.positionerElement);
    const listElement = useStore(store, selectors4.listElement);
    const popupSideValue = useStore(store, selectors4.popupSide);
    const rootId = useStore(store, selectors4.id);
    const selectLabelId = useStore(store, selectors4.labelId);
    const hasSelectedValue = useStore(store, selectors4.hasSelectedValue);
    const popupSide = mounted && positionerElement ? popupSideValue : null;
    const id = idProp ?? rootId;
    const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
    useLabelableId({
      id
    });
    const positionerRef = useValueAsRef(positionerElement);
    const triggerRef = React144.useRef(null);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    const setTriggerElement = useStableCallback((element) => {
      store.set("triggerElement", element);
    });
    const timeoutFocus = useTimeout();
    const timeoutMouseDown = useTimeout();
    const selectedDelayTimeout = useTimeout();
    React144.useEffect(() => {
      if (open) {
        selectedDelayTimeout.start(SELECTED_DELAY, () => {
          selectionRef.current.allowUnselectedMouseUp = true;
          selectionRef.current.allowSelectedMouseUp = true;
        });
        return () => {
          selectedDelayTimeout.clear();
        };
      }
      selectionRef.current = {
        allowSelectedMouseUp: false,
        allowUnselectedMouseUp: false,
        dragY: 0
      };
      timeoutMouseDown.clear();
      return void 0;
    }, [open, selectionRef, timeoutMouseDown, selectedDelayTimeout]);
    const mergedProps = mergeProps(triggerProps, {
      id,
      role: "combobox",
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-controls": open ? listElement?.id ?? getFloatingFocusElement(positionerElement)?.id : void 0,
      "aria-labelledby": ariaLabelledBy,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      tabIndex: disabled2 ? -1 : 0,
      onFocus(event) {
        setFocused(true);
        if (open && alignItemWithTriggerActiveRef.current) {
          setOpen(false, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
        }
        timeoutFocus.start(0, () => {
          store.set("forceMount", true);
        });
      },
      onBlur(event) {
        if (contains(positionerElement, event.relatedTarget)) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(value);
        }
      },
      onMouseDown(event) {
        if (open) {
          return;
        }
        const doc = ownerDocument(event.currentTarget);
        function handleMouseUp(mouseEvent) {
          if (!triggerRef.current) {
            return;
          }
          const mouseUpTarget = mouseEvent.target;
          if (contains(triggerRef.current, mouseUpTarget) || contains(positionerRef.current, mouseUpTarget)) {
            return;
          }
          const bounds = getPseudoElementBounds(triggerRef.current);
          if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET2 && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET2 && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET2 && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET2) {
            return;
          }
          setOpen(false, createChangeEventDetails(reason_parts_exports.cancelOpen, mouseEvent));
        }
        timeoutMouseDown.start(0, () => {
          doc.addEventListener("mouseup", handleMouseUp, {
            once: true
          });
        });
      }
    }, elementProps, getButtonProps);
    const props = validation.getValidationProps(disabled2, mergedProps);
    props.role = "combobox";
    const state = {
      ...fieldState,
      open,
      disabled: disabled2,
      value,
      readOnly,
      popupSide,
      placeholder: !hasSelectedValue
    };
    return useRenderElement("button", componentProps, {
      ref: [forwardedRef, triggerRef, buttonRef, setTriggerElement],
      state,
      stateAttributesMapping: stateAttributesMapping8,
      props
    });
  });
  if (true) SelectTrigger.displayName = "SelectTrigger";

  // node_modules/@base-ui/react/select/value/SelectValue.mjs
  init_define_import_meta_env();
  var React145 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping9 = {
    value: () => null
  };
  var SelectValue = /* @__PURE__ */ React145.forwardRef(function SelectValue2(componentProps, forwardedRef) {
    const {
      className,
      render,
      children: childrenProp,
      placeholder,
      style,
      ...elementProps
    } = componentProps;
    const {
      store,
      valueRef
    } = useSelectRootContext();
    const value = useStore(store, selectors4.value);
    const items = useStore(store, selectors4.items);
    const itemToStringLabel = useStore(store, selectors4.itemToStringLabel);
    const hasSelectedValue = useStore(store, selectors4.hasSelectedValue);
    const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
    const hasNullLabel = useStore(store, selectors4.hasNullItemLabel, shouldCheckNullItemLabel);
    const state = {
      value,
      placeholder: !hasSelectedValue
    };
    let children = null;
    if (typeof childrenProp === "function") {
      children = childrenProp(value);
    } else if (childrenProp != null) {
      children = childrenProp;
    } else if (!hasSelectedValue && placeholder != null && !hasNullLabel) {
      children = placeholder;
    } else if (Array.isArray(value)) {
      children = resolveMultipleLabels(value, items, itemToStringLabel);
    } else {
      children = resolveSelectedLabel(value, items, itemToStringLabel);
    }
    const element = useRenderElement("span", componentProps, {
      state,
      ref: [forwardedRef, valueRef],
      props: [{
        children
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping9
    });
    return element;
  });
  if (true) SelectValue.displayName = "SelectValue";

  // node_modules/@base-ui/react/select/icon/SelectIcon.mjs
  init_define_import_meta_env();
  var React146 = __toESM(require_react_shim(), 1);
  var SelectIcon = /* @__PURE__ */ React146.forwardRef(function SelectIcon2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useSelectRootContext();
    const open = useStore(store, selectors4.open);
    const state = {
      open
    };
    const element = useRenderElement("span", componentProps, {
      state,
      ref: forwardedRef,
      props: [{
        "aria-hidden": true,
        children: "\u25BC"
      }, elementProps],
      stateAttributesMapping: triggerOpenStateMapping2
    });
    return element;
  });
  if (true) SelectIcon.displayName = "SelectIcon";

  // node_modules/@base-ui/react/select/portal/SelectPortal.mjs
  init_define_import_meta_env();
  var React148 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/portal/SelectPortalContext.mjs
  init_define_import_meta_env();
  var React147 = __toESM(require_react_shim(), 1);
  var SelectPortalContext = /* @__PURE__ */ React147.createContext(void 0);
  if (true) SelectPortalContext.displayName = "SelectPortalContext";

  // node_modules/@base-ui/react/select/portal/SelectPortal.mjs
  var import_jsx_runtime32 = __toESM(require_react_shim(), 1);
  var SelectPortal = /* @__PURE__ */ React148.forwardRef(function SelectPortal2(portalProps, forwardedRef) {
    const {
      store
    } = useSelectRootContext();
    const mounted = useStore(store, selectors4.mounted);
    const forceMount = useStore(store, selectors4.forceMount);
    const shouldRender = mounted || forceMount;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(SelectPortalContext.Provider, {
      value: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(FloatingPortal, {
        ref: forwardedRef,
        ...portalProps
      })
    });
  });
  if (true) SelectPortal.displayName = "SelectPortal";

  // node_modules/@base-ui/react/select/backdrop/SelectBackdrop.mjs
  init_define_import_meta_env();
  var React149 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping10 = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var SelectBackdrop = /* @__PURE__ */ React149.forwardRef(function SelectBackdrop2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useSelectRootContext();
    const open = useStore(store, selectors4.open);
    const mounted = useStore(store, selectors4.mounted);
    const transitionStatus = useStore(store, selectors4.transitionStatus);
    const state = {
      open,
      transitionStatus
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: [{
        role: "presentation",
        hidden: !mounted,
        style: {
          userSelect: "none",
          WebkitUserSelect: "none"
        }
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping10
    });
    return element;
  });
  if (true) SelectBackdrop.displayName = "SelectBackdrop";

  // node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
  init_define_import_meta_env();
  var React151 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
  init_define_import_meta_env();
  var React150 = __toESM(require_react_shim(), 1);
  var SelectPositionerContext = /* @__PURE__ */ React150.createContext(void 0);
  if (true) SelectPositionerContext.displayName = "SelectPositionerContext";
  function useSelectPositionerContext() {
    const context = React150.useContext(SelectPositionerContext);
    if (!context) {
      throw new Error(true ? "Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>." : formatErrorMessage_default(59));
    }
    return context;
  }

  // node_modules/@base-ui/react/select/popup/utils.mjs
  init_define_import_meta_env();
  function clearStyles(element, originalStyles) {
    if (element) {
      Object.assign(element.style, originalStyles);
    }
  }
  var LIST_FUNCTIONAL_STYLES = {
    position: "relative",
    maxHeight: "100%",
    overflowX: "hidden",
    overflowY: "auto"
  };

  // node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
  var import_jsx_runtime33 = __toESM(require_react_shim(), 1);
  var FIXED = {
    position: "fixed"
  };
  var SelectPositioner = /* @__PURE__ */ React151.forwardRef(function SelectPositioner2(componentProps, forwardedRef) {
    const {
      anchor,
      positionMethod = "absolute",
      className,
      render,
      side = "bottom",
      align = "center",
      sideOffset = 0,
      alignOffset = 0,
      collisionBoundary = "clipping-ancestors",
      collisionPadding,
      arrowPadding = 5,
      sticky = false,
      disableAnchorTracking,
      alignItemWithTrigger = true,
      collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = componentProps;
    const {
      store,
      listRef,
      labelsRef,
      alignItemWithTriggerActiveRef,
      selectedItemTextRef,
      valuesRef,
      initialValueRef,
      popupRef,
      setValue
    } = useSelectRootContext();
    const floatingRootContext = useSelectFloatingContext();
    const open = useStore(store, selectors4.open);
    const mounted = useStore(store, selectors4.mounted);
    const modal = useStore(store, selectors4.modal);
    const value = useStore(store, selectors4.value);
    const openMethod = useStore(store, selectors4.openMethod);
    const positionerElement = useStore(store, selectors4.positionerElement);
    const triggerElement = useStore(store, selectors4.triggerElement);
    const isItemEqualToValue = useStore(store, selectors4.isItemEqualToValue);
    const transitionStatus = useStore(store, selectors4.transitionStatus);
    const scrollUpArrowRef = React151.useRef(null);
    const scrollDownArrowRef = React151.useRef(null);
    const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = React151.useState(alignItemWithTrigger);
    const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
    if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) {
      setControlledAlignItemWithTrigger(alignItemWithTrigger);
    }
    useIsoLayoutEffect(() => {
      if (!mounted) {
        if (selectors4.scrollUpArrowVisible(store.state)) {
          store.set("scrollUpArrowVisible", false);
        }
        if (selectors4.scrollDownArrowVisible(store.state)) {
          store.set("scrollDownArrowVisible", false);
        }
      }
    }, [store, mounted]);
    React151.useImperativeHandle(alignItemWithTriggerActiveRef, () => alignItemWithTriggerActive);
    useAnchoredPopupScrollLock((alignItemWithTriggerActive || modal) && open, openMethod === "touch", positionerElement, triggerElement);
    const positioning = useAnchorPositioning({
      anchor,
      floatingRootContext,
      positionMethod,
      mounted,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
      collisionAvoidance,
      keepMounted: true
    });
    const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
    const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
    const state = {
      open,
      side: renderedSide,
      align: positioning.align,
      anchorHidden: positioning.anchorHidden
    };
    useIsoLayoutEffect(() => {
      store.set("popupSide", positioning.side);
    }, [store, positioning.side]);
    const setPositionerElement = useStableCallback((element2) => {
      store.set("positionerElement", element2);
    });
    const element = usePositioner(componentProps, state, {
      styles: positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, setPositionerElement],
      hidden: !mounted,
      inert: !open
    });
    const prevMapSizeRef = React151.useRef(0);
    const onMapChange = useStableCallback((map) => {
      if (map.size === 0 && prevMapSizeRef.current === 0) {
        return;
      }
      if (valuesRef.current.length === 0) {
        return;
      }
      const prevSize = prevMapSizeRef.current;
      prevMapSizeRef.current = map.size;
      if (map.size === prevSize) {
        return;
      }
      const eventDetails = createChangeEventDetails(reason_parts_exports.none);
      if (prevSize !== 0 && !store.state.multiple && value !== null) {
        const selectedValueIndex = findItemIndex(valuesRef.current, value, isItemEqualToValue);
        if (selectedValueIndex === -1) {
          const initialSelectedValue = initialValueRef.current;
          const hasInitial = initialSelectedValue != null && findItemIndex(valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1;
          const nextValue = hasInitial ? initialSelectedValue : null;
          setValue(nextValue, eventDetails);
          if (nextValue === null) {
            store.set("selectedIndex", null);
            selectedItemTextRef.current = null;
          }
        }
      }
      if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
        const hasVisibleItem = (selectedItemValue) => findItemIndex(valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1;
        const nextValue = value.filter((selectedItemValue) => hasVisibleItem(selectedItemValue));
        if (nextValue.length !== value.length || nextValue.some((selectedItemValue) => !selectedValueIncludes(value, selectedItemValue, isItemEqualToValue))) {
          setValue(nextValue, eventDetails);
          if (nextValue.length === 0) {
            store.set("selectedIndex", null);
            selectedItemTextRef.current = null;
          }
        }
      }
      if (open && alignItemWithTriggerActive) {
        store.update({
          scrollUpArrowVisible: false,
          scrollDownArrowVisible: false
        });
        const stylesToClear = {
          height: ""
        };
        clearStyles(positionerElement, stylesToClear);
        clearStyles(popupRef.current, stylesToClear);
      }
    });
    const contextValue = React151.useMemo(() => ({
      ...positioning,
      side: renderedSide,
      alignItemWithTriggerActive,
      setControlledAlignItemWithTrigger,
      scrollUpArrowRef,
      scrollDownArrowRef
    }), [positioning, renderedSide, alignItemWithTriggerActive, setControlledAlignItemWithTrigger]);
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(CompositeList, {
      elementsRef: listRef,
      labelsRef,
      onMapChange,
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(SelectPositionerContext.Provider, {
        value: contextValue,
        children: [mounted && modal && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(InternalBackdrop, {
          inert: inertValue(!open),
          cutout: triggerElement
        }), element]
      })
    });
  });
  if (true) SelectPositioner.displayName = "SelectPositioner";

  // node_modules/@base-ui/react/select/popup/SelectPopup.mjs
  init_define_import_meta_env();
  var React153 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/styles.mjs
  init_define_import_meta_env();
  var import_jsx_runtime34 = __toESM(require_react_shim(), 1);
  var DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
  var styleDisableScrollbar = {
    className: DISABLE_SCROLLBAR_CLASS_NAME,
    getElement(nonce) {
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("style", {
        nonce,
        href: DISABLE_SCROLLBAR_CLASS_NAME,
        precedence: "base-ui:low",
        children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
      });
    }
  };
  if (true) styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";

  // node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
  init_define_import_meta_env();
  var React152 = __toESM(require_react_shim(), 1);
  var CSPContext = /* @__PURE__ */ React152.createContext(void 0);
  if (true) CSPContext.displayName = "CSPContext";
  var DEFAULT_CSP_CONTEXT_VALUE = {
    disableStyleElements: false
  };
  function useCSPContext() {
    return React152.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
  }

  // node_modules/@base-ui/react/select/popup/SelectPopup.mjs
  var import_jsx_runtime35 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping11 = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var SelectPopup = /* @__PURE__ */ React153.forwardRef(function SelectPopup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      finalFocus,
      ...elementProps
    } = componentProps;
    const {
      store,
      popupRef,
      onOpenChangeComplete,
      setOpen,
      valueRef,
      firstItemTextRef,
      selectedItemTextRef,
      multiple,
      handleScrollArrowVisibility,
      scrollHandlerRef,
      listRef,
      highlightItemOnHover
    } = useSelectRootContext();
    const {
      side,
      align,
      alignItemWithTriggerActive,
      isPositioned,
      setControlledAlignItemWithTrigger
    } = useSelectPositionerContext();
    const insideToolbar = useToolbarRootContext(true) != null;
    const floatingRootContext = useSelectFloatingContext();
    const direction = useDirection();
    const {
      nonce,
      disableStyleElements
    } = useCSPContext();
    const id = useStore(store, selectors4.id);
    const open = useStore(store, selectors4.open);
    const openMethod = useStore(store, selectors4.openMethod);
    const mounted = useStore(store, selectors4.mounted);
    const popupProps = useStore(store, selectors4.popupProps);
    const transitionStatus = useStore(store, selectors4.transitionStatus);
    const triggerElement = useStore(store, selectors4.triggerElement);
    const positionerElement = useStore(store, selectors4.positionerElement);
    const listElement = useStore(store, selectors4.listElement);
    const reachedMaxHeightRef = React153.useRef(false);
    const initialPlacedRef = React153.useRef(false);
    const originalPositionerStylesRef = React153.useRef({});
    const scrollArrowFrame = useAnimationFrame();
    const handleScroll = useStableCallback((scroller) => {
      if (!positionerElement || !popupRef.current || !initialPlacedRef.current) {
        return;
      }
      if (reachedMaxHeightRef.current || !alignItemWithTriggerActive) {
        handleScrollArrowVisibility();
        return;
      }
      const isTopPositioned = positionerElement.style.top === "0px";
      const isBottomPositioned = positionerElement.style.bottom === "0px";
      if (!isTopPositioned && !isBottomPositioned) {
        handleScrollArrowVisibility();
        return;
      }
      const scale = getScale2(positionerElement);
      const currentHeight = normalizeSize(positionerElement.getBoundingClientRect().height, "y", scale);
      const doc = ownerDocument(positionerElement);
      const win = getWindow(positionerElement);
      const positionerStyles = win.getComputedStyle(positionerElement);
      const marginTop = parseFloat(positionerStyles.marginTop);
      const marginBottom = parseFloat(positionerStyles.marginBottom);
      const maxPopupHeight = getMaxPopupHeight(win.getComputedStyle(popupRef.current));
      const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
      const scrollTop = scroller.scrollTop;
      const maxScrollTop = getMaxScrollTop(scroller);
      let nextPositionerHeight = 0;
      let nextScrollTop = null;
      let setReachedMax = false;
      let scrollToMax = false;
      const setHeight = (height) => {
        positionerElement.style.height = `${height}px`;
      };
      const handleSmallDiff = (diff2, targetScrollTop) => {
        const heightDelta = clamp2(diff2, 0, maxAvailableHeight - currentHeight);
        if (heightDelta > 0) {
          setHeight(currentHeight + heightDelta);
        }
        scroller.scrollTop = targetScrollTop;
        if (maxAvailableHeight - (currentHeight + heightDelta) <= SCROLL_EDGE_TOLERANCE_PX) {
          reachedMaxHeightRef.current = true;
        }
        handleScrollArrowVisibility();
      };
      const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
      const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
      nextPositionerHeight = nextHeight;
      if (diff <= SCROLL_EDGE_TOLERANCE_PX) {
        handleSmallDiff(diff, isTopPositioned ? maxScrollTop : 0);
        return;
      }
      if (maxAvailableHeight - nextHeight > SCROLL_EDGE_TOLERANCE_PX) {
        if (isTopPositioned) {
          scrollToMax = true;
        } else {
          nextScrollTop = 0;
        }
      } else {
        setReachedMax = true;
        if (isBottomPositioned && scrollTop < maxScrollTop) {
          const overshoot = currentHeight + diff - maxAvailableHeight;
          nextScrollTop = scrollTop - (diff - overshoot);
        }
      }
      nextPositionerHeight = Math.ceil(nextPositionerHeight);
      if (nextPositionerHeight !== 0) {
        setHeight(nextPositionerHeight);
      }
      if (scrollToMax || nextScrollTop != null) {
        const nextMaxScrollTop = getMaxScrollTop(scroller);
        const target = scrollToMax ? nextMaxScrollTop : clamp2(nextScrollTop, 0, nextMaxScrollTop);
        if (Math.abs(scroller.scrollTop - target) > SCROLL_EDGE_TOLERANCE_PX) {
          scroller.scrollTop = target;
        }
      }
      if (setReachedMax || nextPositionerHeight >= maxAvailableHeight - SCROLL_EDGE_TOLERANCE_PX) {
        reachedMaxHeightRef.current = true;
      }
      handleScrollArrowVisibility();
    });
    React153.useImperativeHandle(scrollHandlerRef, () => handleScroll, [handleScroll]);
    useOpenChangeComplete({
      open,
      ref: popupRef,
      onComplete() {
        if (open) {
          onOpenChangeComplete?.(true);
        }
      }
    });
    const state = {
      open,
      transitionStatus,
      side,
      align
    };
    useIsoLayoutEffect(() => {
      if (!positionerElement || !popupRef.current || Object.keys(originalPositionerStylesRef.current).length) {
        return;
      }
      originalPositionerStylesRef.current = {
        top: positionerElement.style.top || "0",
        left: positionerElement.style.left || "0",
        right: positionerElement.style.right,
        height: positionerElement.style.height,
        bottom: positionerElement.style.bottom,
        minHeight: positionerElement.style.minHeight,
        maxHeight: positionerElement.style.maxHeight,
        marginTop: positionerElement.style.marginTop,
        marginBottom: positionerElement.style.marginBottom
      };
    }, [popupRef, positionerElement]);
    useIsoLayoutEffect(() => {
      if (open || alignItemWithTriggerActive) {
        return;
      }
      initialPlacedRef.current = false;
      reachedMaxHeightRef.current = false;
      clearStyles(positionerElement, originalPositionerStylesRef.current);
    }, [open, alignItemWithTriggerActive, positionerElement, popupRef]);
    useIsoLayoutEffect(() => {
      const popupElement = popupRef.current;
      if (!open || !triggerElement || !positionerElement || !popupElement || alignItemWithTriggerActive && !isPositioned || store.state.transitionStatus === "ending") {
        return;
      }
      if (!alignItemWithTriggerActive) {
        initialPlacedRef.current = true;
        scrollArrowFrame.request(handleScrollArrowVisibility);
        popupElement.style.removeProperty("--transform-origin");
        return;
      }
      const restoreTransformStyles = unsetTransformStyles(popupElement);
      popupElement.style.removeProperty("--transform-origin");
      try {
        let textElement = selectedItemTextRef.current;
        if (!textElement?.isConnected) {
          const hasSelectedValue = selectors4.hasSelectedValue(store.state);
          textElement = !hasSelectedValue && firstItemTextRef.current?.isConnected ? firstItemTextRef.current : null;
        }
        const valueElement = valueRef.current;
        const win = getWindow(positionerElement);
        const positionerStyles = win.getComputedStyle(positionerElement);
        const popupStyles = win.getComputedStyle(popupElement);
        const doc = ownerDocument(triggerElement);
        const scale = getScale2(triggerElement);
        const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
        const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
        const triggerHeight = triggerRect.height;
        const scroller = listElement || popupElement;
        const scrollHeight = scroller.scrollHeight;
        const borderBottom = parseFloat(popupStyles.borderBottomWidth);
        const marginTop = parseFloat(positionerStyles.marginTop) || 10;
        const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
        const minHeight = parseFloat(positionerStyles.minHeight) || 100;
        const maxPopupHeight = getMaxPopupHeight(popupStyles);
        const paddingLeft = 5;
        const paddingRight = 5;
        const triggerCollisionThreshold = 20;
        const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
        const viewportWidth = doc.documentElement.clientWidth;
        const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
        let textRect;
        let alignedLeft = direction === "rtl" ? triggerRect.right - positionerRect.width : triggerRect.left;
        let offsetY = 0;
        if (textElement && valueElement) {
          const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
          textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
          alignedLeft = positionerRect.left + (direction === "rtl" ? valueRect.right - textRect.right : valueRect.left - textRect.left);
          const valueCenterFromTriggerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
          const textCenterFromPositionerTop = textRect.top - positionerRect.top + textRect.height / 2;
          offsetY = textCenterFromPositionerTop - valueCenterFromTriggerTop;
        }
        const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
        let height = Math.min(viewportHeight, idealHeight);
        const maxHeight = viewportHeight - marginTop - marginBottom;
        const scrollTop = idealHeight - height;
        const maxRight = viewportWidth - paddingRight;
        positionerElement.style.left = `${clamp2(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
        positionerElement.style.height = `${height}px`;
        positionerElement.style.maxHeight = "none";
        positionerElement.style.marginTop = `${marginTop}px`;
        positionerElement.style.marginBottom = `${marginBottom}px`;
        popupElement.style.height = "100%";
        const maxScrollTop = getMaxScrollTop(scroller);
        const isTopPositioned = scrollTop >= maxScrollTop - SCROLL_EDGE_TOLERANCE_PX;
        if (isTopPositioned) {
          height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
        }
        const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + SCROLL_EDGE_TOLERANCE_PX < Math.min(scrollHeight, minHeight);
        const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && parts_exports.engine.webkit;
        if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
          initialPlacedRef.current = true;
          clearStyles(positionerElement, originalPositionerStylesRef.current);
          setControlledAlignItemWithTrigger(false);
          return;
        }
        const initialHeight = Math.max(minHeight, height);
        if (isTopPositioned) {
          const topOffset = Math.max(0, viewportHeight - idealHeight);
          positionerElement.style.top = positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
          positionerElement.style.height = `${height}px`;
          scroller.scrollTop = getMaxScrollTop(scroller);
        } else {
          positionerElement.style.bottom = "0";
          scroller.scrollTop = scrollTop;
        }
        if (textRect) {
          const popupTop = positionerRect.top;
          const popupHeight = positionerRect.height;
          const textCenterY = textRect.top + textRect.height / 2;
          const transformOriginY = popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50;
          const clampedY = clamp2(transformOriginY, 0, 100);
          popupElement.style.setProperty("--transform-origin", `50% ${clampedY}%`);
        }
        if (initialHeight === viewportHeight || height >= maxPopupHeight) {
          reachedMaxHeightRef.current = true;
        }
        handleScrollArrowVisibility();
        if (highlightItemOnHover && store.state.selectedIndex === null && store.state.activeIndex === null && listRef.current[0] != null) {
          store.set("activeIndex", 0);
        }
        initialPlacedRef.current = true;
      } finally {
        restoreTransformStyles();
      }
    }, [store, open, positionerElement, triggerElement, valueRef, firstItemTextRef, selectedItemTextRef, popupRef, handleScrollArrowVisibility, alignItemWithTriggerActive, setControlledAlignItemWithTrigger, scrollArrowFrame, listElement, listRef, highlightItemOnHover, direction, isPositioned]);
    React153.useEffect(() => {
      if (!alignItemWithTriggerActive || !positionerElement || !open) {
        return void 0;
      }
      const win = getWindow(positionerElement);
      function handleResize(event) {
        setOpen(false, createChangeEventDetails(reason_parts_exports.windowResize, event));
      }
      return addEventListener(win, "resize", handleResize);
    }, [setOpen, alignItemWithTriggerActive, positionerElement, open]);
    const defaultProps = {
      ...listElement ? {
        role: "presentation",
        "aria-orientation": void 0
      } : {
        role: "listbox",
        "aria-multiselectable": multiple || void 0,
        id: `${id}-list`
      },
      onKeyDown(event) {
        if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      },
      onScroll(event) {
        if (listElement) {
          return;
        }
        handleScroll(event.currentTarget);
      },
      ...alignItemWithTriggerActive && {
        style: listElement ? {
          height: "100%"
        } : LIST_FUNCTIONAL_STYLES
      }
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, popupRef],
      state,
      stateAttributesMapping: stateAttributesMapping11,
      props: [popupProps, defaultProps, getDisabledMountTransitionStyles(transitionStatus), {
        className: !listElement && alignItemWithTriggerActive ? styleDisableScrollbar.className : void 0
      }, elementProps]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(React153.Fragment, {
      children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(FloatingFocusManager, {
        context: floatingRootContext,
        modal: false,
        disabled: !mounted,
        openInteractionType: openMethod,
        returnFocus: finalFocus,
        restoreFocus: true,
        children: element
      })]
    });
  });
  if (true) SelectPopup.displayName = "SelectPopup";
  function getMaxPopupHeight(popupStyles) {
    const maxHeightStyle = popupStyles.maxHeight || "";
    return maxHeightStyle.endsWith("px") ? parseFloat(maxHeightStyle) || Infinity : Infinity;
  }
  function getMaxScrollTop(scroller) {
    return getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
  }
  function getScale2(element) {
    return platform2.getScale(element);
  }
  function normalizeSize(size4, axis, scale) {
    return size4 / scale[axis];
  }
  function normalizeRect(rect, scale) {
    return rectToClientRect({
      x: normalizeSize(rect.x, "x", scale),
      y: normalizeSize(rect.y, "y", scale),
      width: normalizeSize(rect.width, "x", scale),
      height: normalizeSize(rect.height, "y", scale)
    });
  }
  var TRANSFORM_STYLE_RESETS = [["transform", "none"], ["scale", "1"], ["translate", "0 0"]];
  function unsetTransformStyles(popupElement) {
    const {
      style
    } = popupElement;
    const originalStyles = {};
    for (const [property, value] of TRANSFORM_STYLE_RESETS) {
      originalStyles[property] = style.getPropertyValue(property);
      style.setProperty(property, value, "important");
    }
    return () => {
      for (const [property] of TRANSFORM_STYLE_RESETS) {
        const originalValue = originalStyles[property];
        if (originalValue) {
          style.setProperty(property, originalValue);
        } else {
          style.removeProperty(property);
        }
      }
    };
  }

  // node_modules/@base-ui/react/select/list/SelectList.mjs
  init_define_import_meta_env();
  var React154 = __toESM(require_react_shim(), 1);
  var SelectList = /* @__PURE__ */ React154.forwardRef(function SelectList2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      store,
      scrollHandlerRef
    } = useSelectRootContext();
    const {
      alignItemWithTriggerActive
    } = useSelectPositionerContext();
    const hasScrollArrows = useStore(store, selectors4.hasScrollArrows);
    const openMethod = useStore(store, selectors4.openMethod);
    const multiple = useStore(store, selectors4.multiple);
    const id = useStore(store, selectors4.id);
    const defaultProps = {
      id: `${id}-list`,
      role: "listbox",
      "aria-multiselectable": multiple || void 0,
      onScroll(event) {
        scrollHandlerRef.current?.(event.currentTarget);
      },
      ...alignItemWithTriggerActive && {
        style: LIST_FUNCTIONAL_STYLES
      },
      className: hasScrollArrows && openMethod !== "touch" ? styleDisableScrollbar.className : void 0
    };
    const setListElement = useStableCallback((element) => {
      store.set("listElement", element);
    });
    return useRenderElement("div", componentProps, {
      ref: [forwardedRef, setListElement],
      props: [defaultProps, elementProps]
    });
  });
  if (true) SelectList.displayName = "SelectList";

  // node_modules/@base-ui/react/select/item/SelectItem.mjs
  init_define_import_meta_env();
  var React156 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/item/SelectItemContext.mjs
  init_define_import_meta_env();
  var React155 = __toESM(require_react_shim(), 1);
  var SelectItemContext = /* @__PURE__ */ React155.createContext(void 0);
  if (true) SelectItemContext.displayName = "SelectItemContext";
  function useSelectItemContext() {
    const context = React155.useContext(SelectItemContext);
    if (!context) {
      throw new Error(true ? "Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>." : formatErrorMessage_default(57));
    }
    return context;
  }

  // node_modules/@base-ui/react/select/item/SelectItem.mjs
  var import_jsx_runtime36 = __toESM(require_react_shim(), 1);
  var SelectItem = /* @__PURE__ */ React156.memo(/* @__PURE__ */ React156.forwardRef(function SelectItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      value: itemValue = null,
      label,
      disabled: disabled2 = false,
      nativeButton = false,
      ...elementProps
    } = componentProps;
    const textRef = React156.useRef(null);
    const listItem = useCompositeListItem({
      label,
      textRef,
      indexGuessBehavior: IndexGuessBehavior.GuessFromOrder
    });
    const {
      store,
      itemProps,
      setOpen,
      setValue,
      selectionRef,
      typingRef,
      valuesRef,
      multiple,
      selectedItemTextRef,
      disabled: selectDisabled,
      readOnly
    } = useSelectRootContext();
    const highlighted = useStore(store, selectors4.isActive, listItem.index);
    const open = useStore(store, selectors4.open);
    const selected = useStore(store, selectors4.isSelected, itemValue);
    const selectedByFocus = useStore(store, selectors4.isSelectedByFocus, listItem.index);
    const isItemEqualToValue = useStore(store, selectors4.isItemEqualToValue);
    const index2 = listItem.index;
    const hasRegistered = index2 !== -1;
    const itemRef = React156.useRef(null);
    useIsoLayoutEffect(() => {
      if (!hasRegistered) {
        return void 0;
      }
      const values = valuesRef.current;
      values[index2] = itemValue;
      return () => {
        delete values[index2];
      };
    }, [hasRegistered, index2, itemValue, valuesRef]);
    useIsoLayoutEffect(() => {
      if (!hasRegistered) {
        return;
      }
      const selectedValue = store.state.value;
      let selectedCandidate = selectedValue;
      if (multiple && Array.isArray(selectedValue)) {
        selectedCandidate = selectedValue.length > 0 ? selectedValue[selectedValue.length - 1] : void 0;
      }
      if (selectedCandidate !== void 0 && compareItemEquality(itemValue, selectedCandidate, isItemEqualToValue)) {
        store.set("selectedIndex", index2);
        if (textRef.current) {
          selectedItemTextRef.current = textRef.current;
        }
      }
    }, [hasRegistered, index2, multiple, isItemEqualToValue, store, itemValue, selectedItemTextRef]);
    const lastKeyRef = React156.useRef(null);
    const pointerTypeRef = React156.useRef("mouse");
    const allowMouseSelectionRef = React156.useRef(false);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      focusableWhenDisabled: true,
      native: nativeButton,
      composite: true
    });
    const state = {
      disabled: disabled2,
      selected,
      highlighted
    };
    function commitSelection(event) {
      if (selectDisabled || readOnly) {
        return;
      }
      const selectedValue = store.state.value;
      if (multiple) {
        const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
        const nextValue = selected ? removeItem(currentValue, itemValue, isItemEqualToValue) : [...currentValue, itemValue];
        setValue(nextValue, createChangeEventDetails(reason_parts_exports.itemPress, event));
      } else {
        setValue(itemValue, createChangeEventDetails(reason_parts_exports.itemPress, event));
        setOpen(false, createChangeEventDetails(reason_parts_exports.itemPress, event));
      }
    }
    function resetDragMovement() {
      selectionRef.current.dragY = 0;
    }
    const defaultProps = {
      role: "option",
      "aria-selected": selected,
      tabIndex: open && highlighted ? 0 : -1,
      onKeyDown(event) {
        lastKeyRef.current = event.key;
        store.set("activeIndex", index2);
        if (event.key === " " && typingRef.current) {
          event.preventDefault();
        }
      },
      onClick(event) {
        const isMouseClick = event.type === "click" && pointerTypeRef.current !== "touch";
        const clickPointerType = event.nativeEvent.pointerType;
        const isVirtualMouseClick = isMouseClick && isVirtualClick(event.nativeEvent) && // Generic no-pointer `detail === 0` clicks stay tied to highlight state. Virtual
        // clicks that carry browser pointer data, including an empty string from assistive
        // technology, can activate unhighlighted items.
        (clickPointerType !== void 0 || highlighted);
        const isInvalidMouseClick = isMouseClick && !isVirtualMouseClick && !allowMouseSelectionRef.current;
        allowMouseSelectionRef.current = false;
        if (event.type === "keydown" && lastKeyRef.current === null) {
          return;
        }
        if (disabled2 || event.type === "keydown" && lastKeyRef.current === " " && typingRef.current || isInvalidMouseClick) {
          return;
        }
        lastKeyRef.current = null;
        commitSelection(event.nativeEvent);
      },
      onPointerEnter(event) {
        pointerTypeRef.current = event.pointerType;
      },
      onPointerMove(event) {
        if (event.pointerType === "mouse" && event.buttons === 1) {
          const selection = selectionRef.current;
          selection.dragY += event.movementY;
          if (selection.dragY ** 2 >= 64) {
            selection.allowUnselectedMouseUp = true;
          }
        }
      },
      onPointerDown(event) {
        pointerTypeRef.current = event.pointerType;
        allowMouseSelectionRef.current = true;
        resetDragMovement();
      },
      onMouseUp() {
        resetDragMovement();
        if (disabled2 || pointerTypeRef.current === "touch") {
          return;
        }
        if (allowMouseSelectionRef.current) {
          return;
        }
        const disallowSelectedMouseUp = !selectionRef.current.allowSelectedMouseUp && selected;
        const disallowUnselectedMouseUp = !selectionRef.current.allowUnselectedMouseUp && !selected;
        if (disallowSelectedMouseUp || disallowUnselectedMouseUp) {
          return;
        }
        allowMouseSelectionRef.current = true;
        itemRef.current?.click();
        allowMouseSelectionRef.current = false;
      }
    };
    const element = useRenderElement("div", componentProps, {
      ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
      state,
      props: [itemProps, defaultProps, elementProps, getButtonProps]
    });
    const contextValue = React156.useMemo(() => ({
      selected,
      index: index2,
      textRef,
      selectedByFocus,
      hasRegistered
    }), [selected, index2, textRef, selectedByFocus, hasRegistered]);
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(SelectItemContext.Provider, {
      value: contextValue,
      children: element
    });
  }));
  if (true) SelectItem.displayName = "SelectItem";

  // node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
  init_define_import_meta_env();
  var React157 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime37 = __toESM(require_react_shim(), 1);
  var SelectItemIndicator = /* @__PURE__ */ React157.forwardRef(function SelectItemIndicator2(componentProps, forwardedRef) {
    const keepMounted = componentProps.keepMounted ?? false;
    const {
      selected
    } = useSelectItemContext();
    const shouldRender = keepMounted || selected;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Inner, {
      ...componentProps,
      ref: forwardedRef
    });
  });
  if (true) SelectItemIndicator.displayName = "SelectItemIndicator";
  var Inner = /* @__PURE__ */ React157.memo(/* @__PURE__ */ React157.forwardRef((componentProps, forwardedRef) => {
    const {
      render,
      className,
      style,
      keepMounted,
      ...elementProps
    } = componentProps;
    const {
      selected
    } = useSelectItemContext();
    const indicatorRef = React157.useRef(null);
    const {
      transitionStatus,
      setMounted
    } = useTransitionStatus(selected);
    const state = {
      selected,
      transitionStatus
    };
    const element = useRenderElement("span", componentProps, {
      ref: [forwardedRef, indicatorRef],
      state,
      props: [{
        "aria-hidden": true,
        children: "\u2714\uFE0F"
      }, elementProps],
      stateAttributesMapping: transitionStatusMapping
    });
    useOpenChangeComplete({
      open: selected,
      ref: indicatorRef,
      onComplete() {
        if (!selected) {
          setMounted(false);
        }
      }
    });
    return element;
  }));
  if (true) Inner.displayName = "Inner";

  // node_modules/@base-ui/react/select/item-text/SelectItemText.mjs
  init_define_import_meta_env();
  var React158 = __toESM(require_react_shim(), 1);
  var SelectItemText = /* @__PURE__ */ React158.memo(/* @__PURE__ */ React158.forwardRef(function SelectItemText2(componentProps, forwardedRef) {
    const {
      index: index2,
      textRef,
      selectedByFocus,
      hasRegistered
    } = useSelectItemContext();
    const {
      firstItemTextRef,
      selectedItemTextRef
    } = useSelectRootContext();
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const localRef = React158.useCallback((node) => {
      if (!node) {
        return;
      }
      if (hasRegistered && index2 === 0) {
        firstItemTextRef.current = node;
      }
      if (hasRegistered && selectedByFocus) {
        selectedItemTextRef.current = node;
      }
    }, [firstItemTextRef, selectedItemTextRef, index2, selectedByFocus, hasRegistered]);
    const element = useRenderElement("div", componentProps, {
      ref: [localRef, forwardedRef, textRef],
      props: elementProps
    });
    return element;
  }));
  if (true) SelectItemText.displayName = "SelectItemText";

  // node_modules/@base-ui/react/select/arrow/SelectArrow.mjs
  init_define_import_meta_env();
  var React159 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping12 = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var SelectArrow = /* @__PURE__ */ React159.forwardRef(function SelectArrow2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      store
    } = useSelectRootContext();
    const {
      side,
      align,
      arrowRef,
      arrowStyles,
      arrowUncentered,
      alignItemWithTriggerActive
    } = useSelectPositionerContext();
    const open = useStore(store, selectors4.open);
    const state = {
      open,
      side,
      align,
      uncentered: arrowUncentered
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [arrowRef, forwardedRef],
      props: [{
        style: arrowStyles,
        "aria-hidden": true
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping12
    });
    if (alignItemWithTriggerActive) {
      return null;
    }
    return element;
  });
  if (true) SelectArrow.displayName = "SelectArrow";

  // node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
  init_define_import_meta_env();
  var React161 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/scroll-arrow/SelectScrollArrow.mjs
  init_define_import_meta_env();
  var React160 = __toESM(require_react_shim(), 1);
  var SelectScrollArrow = /* @__PURE__ */ React160.forwardRef(function SelectScrollArrow2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      direction,
      keepMounted = false,
      ...elementProps
    } = componentProps;
    const isUp = direction === "up";
    const {
      store,
      popupRef,
      listRef,
      handleScrollArrowVisibility,
      scrollArrowsMountedCountRef
    } = useSelectRootContext();
    const {
      side,
      scrollDownArrowRef,
      scrollUpArrowRef
    } = useSelectPositionerContext();
    const visibleSelector = isUp ? selectors4.scrollUpArrowVisible : selectors4.scrollDownArrowVisible;
    const stateVisible = useStore(store, visibleSelector);
    const openMethod = useStore(store, selectors4.openMethod);
    const visible = stateVisible && openMethod !== "touch";
    const timeout = useTimeout();
    const scrollArrowRef = isUp ? scrollUpArrowRef : scrollDownArrowRef;
    const {
      mounted,
      transitionStatus,
      setMounted
    } = useTransitionStatus(visible);
    useIsoLayoutEffect(() => {
      scrollArrowsMountedCountRef.current += 1;
      if (!store.state.hasScrollArrows) {
        store.set("hasScrollArrows", true);
      }
      return () => {
        scrollArrowsMountedCountRef.current = Math.max(0, scrollArrowsMountedCountRef.current - 1);
        if (scrollArrowsMountedCountRef.current === 0 && store.state.hasScrollArrows) {
          store.set("hasScrollArrows", false);
        }
      };
    }, [store, scrollArrowsMountedCountRef]);
    useOpenChangeComplete({
      open: visible,
      ref: scrollArrowRef,
      onComplete() {
        if (!visible) {
          setMounted(false);
        }
      }
    });
    const state = {
      direction,
      visible,
      side,
      transitionStatus
    };
    const defaultProps = {
      "aria-hidden": true,
      children: isUp ? "\u25B2" : "\u25BC",
      style: {
        position: "absolute"
      },
      onMouseMove(event) {
        if (event.movementX === 0 && event.movementY === 0 || timeout.isStarted()) {
          return;
        }
        store.set("activeIndex", null);
        function scrollNextItem() {
          const scroller = store.state.listElement ?? popupRef.current;
          if (!scroller) {
            return;
          }
          store.set("activeIndex", null);
          handleScrollArrowVisibility();
          const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
          const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
          const isScrolledToEdge = scrollTop === (isUp ? 0 : maxScrollTop);
          const items = listRef.current;
          if (scrollTop !== scroller.scrollTop) {
            scroller.scrollTop = scrollTop;
          }
          if (items.length === 0) {
            store.set(isUp ? "scrollUpArrowVisible" : "scrollDownArrowVisible", !isScrolledToEdge);
          }
          if (isScrolledToEdge) {
            timeout.clear();
            return;
          }
          if (items.length > 0) {
            const scrollArrowHeight = scrollArrowRef.current?.offsetHeight || 0;
            scroller.scrollTop = getTargetScrollTop(items, isUp, scrollTop, scroller.clientHeight, scrollArrowHeight, maxScrollTop);
          }
          timeout.start(40, scrollNextItem);
        }
        timeout.start(40, scrollNextItem);
      },
      onMouseLeave() {
        timeout.clear();
      }
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, scrollArrowRef],
      state,
      props: [defaultProps, elementProps],
      stateAttributesMapping: transitionStatusMapping
    });
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) SelectScrollArrow.displayName = "SelectScrollArrow";
  function getTargetScrollTop(items, isUp, scrollTop, clientHeight, scrollArrowHeight, maxScrollTop) {
    if (isUp) {
      let firstVisibleIndex = 0;
      const visibleTop = scrollTop + scrollArrowHeight - SCROLL_EDGE_TOLERANCE_PX;
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        if (item && item.offsetTop >= visibleTop) {
          firstVisibleIndex = i;
          break;
        }
      }
      const targetIndex2 = Math.max(0, firstVisibleIndex - 1);
      const targetItem2 = items[targetIndex2];
      return targetIndex2 < firstVisibleIndex && targetItem2 ? normalizeScrollOffset(targetItem2.offsetTop - scrollArrowHeight, maxScrollTop) : 0;
    }
    let lastVisibleIndex = items.length - 1;
    const visibleBottom = scrollTop + clientHeight - scrollArrowHeight + SCROLL_EDGE_TOLERANCE_PX;
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      if (item && item.offsetTop + item.offsetHeight > visibleBottom) {
        lastVisibleIndex = Math.max(0, i - 1);
        break;
      }
    }
    const targetIndex = Math.min(items.length - 1, lastVisibleIndex + 1);
    const targetItem = items[targetIndex];
    return targetIndex > lastVisibleIndex && targetItem ? normalizeScrollOffset(targetItem.offsetTop + targetItem.offsetHeight - clientHeight + scrollArrowHeight, maxScrollTop) : maxScrollTop;
  }

  // node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
  var import_jsx_runtime38 = __toESM(require_react_shim(), 1);
  var SelectScrollDownArrow = /* @__PURE__ */ React161.forwardRef(function SelectScrollDownArrow2(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SelectScrollArrow, {
      ...props,
      ref: forwardedRef,
      direction: "down"
    });
  });
  if (true) SelectScrollDownArrow.displayName = "SelectScrollDownArrow";

  // node_modules/@base-ui/react/select/scroll-up-arrow/SelectScrollUpArrow.mjs
  init_define_import_meta_env();
  var React162 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime39 = __toESM(require_react_shim(), 1);
  var SelectScrollUpArrow = /* @__PURE__ */ React162.forwardRef(function SelectScrollUpArrow2(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SelectScrollArrow, {
      ...props,
      ref: forwardedRef,
      direction: "up"
    });
  });
  if (true) SelectScrollUpArrow.displayName = "SelectScrollUpArrow";

  // node_modules/@base-ui/react/select/group/SelectGroup.mjs
  init_define_import_meta_env();
  var React164 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/select/group/SelectGroupContext.mjs
  init_define_import_meta_env();
  var React163 = __toESM(require_react_shim(), 1);
  var SelectGroupContext = /* @__PURE__ */ React163.createContext(void 0);
  if (true) SelectGroupContext.displayName = "SelectGroupContext";
  function useSelectGroupContext() {
    const context = React163.useContext(SelectGroupContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>." : formatErrorMessage_default(56));
    }
    return context;
  }

  // node_modules/@base-ui/react/select/group/SelectGroup.mjs
  var import_jsx_runtime40 = __toESM(require_react_shim(), 1);
  var SelectGroup = /* @__PURE__ */ React164.forwardRef(function SelectGroup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const [labelId, setLabelId] = React164.useState();
    const contextValue = React164.useMemo(() => ({
      labelId,
      setLabelId
    }), [labelId, setLabelId]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      props: [{
        role: "group",
        "aria-labelledby": labelId
      }, elementProps]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(SelectGroupContext.Provider, {
      value: contextValue,
      children: element
    });
  });
  if (true) SelectGroup.displayName = "SelectGroup";

  // node_modules/@base-ui/react/select/group-label/SelectGroupLabel.mjs
  init_define_import_meta_env();
  var React165 = __toESM(require_react_shim(), 1);
  var SelectGroupLabel = /* @__PURE__ */ React165.forwardRef(function SelectGroupLabel2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const {
      setLabelId
    } = useSelectGroupContext();
    const id = useBaseUiId(idProp);
    useIsoLayoutEffect(() => {
      setLabelId(id);
    }, [id, setLabelId]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      props: [{
        id
      }, elementProps]
    });
    return element;
  });
  if (true) SelectGroupLabel.displayName = "SelectGroupLabel";

  // src/components/ui/select.tsx
  var Select = index_parts_exports5.Root;
  function SelectGroup3({ className, ...props }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.Group,
      {
        "data-slot": "select-group",
        className: cn("scroll-my-1 p-1", className),
        ...props
      }
    );
  }
  function SelectValue3({ className, ...props }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.Value,
      {
        "data-slot": "select-value",
        className: cn("flex flex-1 text-left", className),
        ...props
      }
    );
  }
  function SelectTrigger3({
    className,
    size: size4 = "default",
    children,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.Trigger,
      {
        "data-slot": "select-trigger",
        "data-size": size4,
        className: cn(
          "flex min-h-10 w-full min-w-0 items-center justify-between gap-2 rounded-lg border border-input bg-transparent py-2 pr-3 pl-3 text-sm transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=sm]:min-h-8 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        ...props
      },
      children,
      /* @__PURE__ */ React166.createElement(
        index_parts_exports5.Icon,
        {
          render: /* @__PURE__ */ React166.createElement(ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground" })
        }
      )
    );
  }
  function SelectContent({
    className,
    children,
    side = "bottom",
    sideOffset = 4,
    align = "center",
    alignOffset = 0,
    alignItemWithTrigger = true,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(index_parts_exports5.Portal, null, /* @__PURE__ */ React166.createElement(
      index_parts_exports5.Positioner,
      {
        side,
        sideOffset,
        align,
        alignOffset,
        alignItemWithTrigger,
        className: "isolate z-50"
      },
      /* @__PURE__ */ React166.createElement(
        index_parts_exports5.Popup,
        {
          "data-slot": "select-content",
          "data-align-trigger": alignItemWithTrigger,
          className: cn("relative isolate z-50 max-h-[min(var(--available-height),22rem)] w-(--anchor-width) min-w-40 max-w-[calc(100vw-1rem)] origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
          ...props
        },
        /* @__PURE__ */ React166.createElement(SelectScrollUpButton, null),
        /* @__PURE__ */ React166.createElement(index_parts_exports5.List, null, children),
        /* @__PURE__ */ React166.createElement(SelectScrollDownButton, null)
      )
    ));
  }
  function SelectLabel3({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.GroupLabel,
      {
        "data-slot": "select-label",
        className: cn("px-1.5 py-1 text-xs text-muted-foreground", className),
        ...props
      }
    );
  }
  function SelectItem3({
    className,
    children,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.Item,
      {
        "data-slot": "select-item",
        className: cn(
          "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React166.createElement(index_parts_exports5.ItemText, { className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap" }, children),
      /* @__PURE__ */ React166.createElement(
        index_parts_exports5.ItemIndicator,
        {
          render: /* @__PURE__ */ React166.createElement("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" })
        },
        /* @__PURE__ */ React166.createElement(Check, { className: "pointer-events-none" })
      )
    );
  }
  function SelectSeparator({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.Separator,
      {
        "data-slot": "select-separator",
        className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", className),
        ...props
      }
    );
  }
  function SelectScrollUpButton({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.ScrollUpArrow,
      {
        "data-slot": "select-scroll-up-button",
        className: cn(
          "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React166.createElement(
        ChevronUp,
        null
      )
    );
  }
  function SelectScrollDownButton({
    className,
    ...props
  }) {
    return /* @__PURE__ */ React166.createElement(
      index_parts_exports5.ScrollDownArrow,
      {
        "data-slot": "select-scroll-down-button",
        className: cn(
          "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React166.createElement(
        ChevronDown,
        null
      )
    );
  }

  // src/components/ui/separator.tsx
  init_define_import_meta_env();

  // node_modules/@base-ui/react/separator/index.mjs
  init_define_import_meta_env();

  // src/components/ui/separator.tsx
  function Separator2({
    className,
    orientation = "horizontal",
    ...props
  }) {
    return /* @__PURE__ */ React.createElement(
      Separator,
      {
        "data-slot": "separator",
        orientation,
        className: cn(
          "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
          className
        ),
        ...props
      }
    );
  }

  // src/components/ui/skeleton.tsx
  init_define_import_meta_env();
  function Skeleton({ className, ...props }) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        "data-slot": "skeleton",
        className: cn("bg-primary/10 animate-pulse rounded-md", className),
        ...props
      }
    );
  }

  // src/components/ui/tabs.tsx
  init_define_import_meta_env();

  // node_modules/@base-ui/react/tabs/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/tabs/index.parts.mjs
  var index_parts_exports6 = {};
  __export(index_parts_exports6, {
    Indicator: () => TabsIndicator,
    List: () => TabsList,
    Panel: () => TabsPanel,
    Root: () => TabsRoot,
    Tab: () => TabsTab
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
  init_define_import_meta_env();
  var React168 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tabs/root/TabsRootContext.mjs
  init_define_import_meta_env();
  var React167 = __toESM(require_react_shim(), 1);
  var TabsRootContext = /* @__PURE__ */ React167.createContext(void 0);
  if (true) TabsRootContext.displayName = "TabsRootContext";
  function useTabsRootContext() {
    const context = React167.useContext(TabsRootContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>." : formatErrorMessage_default(64));
    }
    return context;
  }

  // node_modules/@base-ui/react/tabs/root/stateAttributesMapping.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/tabs/root/TabsRootDataAttributes.mjs
  init_define_import_meta_env();
  var TabsRootDataAttributes = /* @__PURE__ */ (function(TabsRootDataAttributes2) {
    TabsRootDataAttributes2["activationDirection"] = "data-activation-direction";
    TabsRootDataAttributes2["orientation"] = "data-orientation";
    return TabsRootDataAttributes2;
  })({});

  // node_modules/@base-ui/react/tabs/root/stateAttributesMapping.mjs
  var tabsStateAttributesMapping = {
    tabActivationDirection: (dir) => ({
      [TabsRootDataAttributes.activationDirection]: dir
    })
  };

  // node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
  var import_jsx_runtime41 = __toESM(require_react_shim(), 1);
  var TabsRoot = /* @__PURE__ */ React168.forwardRef(function TabsRoot2(componentProps, forwardedRef) {
    const {
      className,
      defaultValue: defaultValueProp = 0,
      onValueChange: onValueChangeProp,
      orientation = "horizontal",
      render,
      value: valueProp,
      style,
      ...elementProps
    } = componentProps;
    const hasExplicitDefaultValueProp = componentProps.defaultValue !== void 0;
    const tabPanelRefs = React168.useRef([]);
    const [mountedTabPanels, setMountedTabPanels] = React168.useState(() => /* @__PURE__ */ new Map());
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValueProp,
      name: "Tabs",
      state: "value"
    });
    const isControlled = valueProp !== void 0;
    const [tabMap, setTabMap] = React168.useState(() => /* @__PURE__ */ new Map());
    const lastKnownTabElementRef = React168.useRef(void 0);
    const getTabElementBySelectedValue = React168.useCallback((selectedValue) => {
      if (selectedValue === void 0) {
        return null;
      }
      for (const [tabElement, tabMetadata] of tabMap.entries()) {
        if (tabMetadata != null && selectedValue === (tabMetadata.value ?? tabMetadata.index)) {
          return tabElement;
        }
      }
      return null;
    }, [tabMap]);
    const [activationDirectionState, setActivationDirectionState] = React168.useState(() => ({
      previousValue: value,
      tabActivationDirection: "none"
    }));
    const {
      previousValue,
      tabActivationDirection: committedTabActivationDirection
    } = activationDirectionState;
    let tabActivationDirection = committedTabActivationDirection;
    let directionComputationIncomplete = false;
    if (previousValue !== value) {
      tabActivationDirection = computeActivationDirection(previousValue, value, orientation, tabMap);
      directionComputationIncomplete = previousValue != null && value != null && getTabElementBySelectedValue(value) == null;
    }
    const nextPreviousValue = directionComputationIncomplete ? previousValue : value;
    const shouldSyncActivationDirectionState = previousValue !== nextPreviousValue || committedTabActivationDirection !== tabActivationDirection;
    useIsoLayoutEffect(() => {
      if (!shouldSyncActivationDirectionState) {
        return;
      }
      setActivationDirectionState({
        previousValue: nextPreviousValue,
        tabActivationDirection
      });
    }, [nextPreviousValue, shouldSyncActivationDirectionState, tabActivationDirection]);
    const onValueChange = useStableCallback((newValue, eventDetails) => {
      const activationDirection = computeActivationDirection(value, newValue, orientation, tabMap);
      eventDetails.activationDirection = activationDirection;
      onValueChangeProp?.(newValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setValue(newValue);
    });
    const notifyAutomaticValueChange = useStableCallback((nextValue, reason) => {
      onValueChangeProp?.(nextValue, createChangeEventDetails(reason, void 0, void 0, {
        activationDirection: "none"
      }));
    });
    const registerMountedTabPanel = useStableCallback((panelValue, panelId) => {
      setMountedTabPanels((prev) => {
        if (prev.get(panelValue) === panelId) {
          return prev;
        }
        const next = new Map(prev);
        next.set(panelValue, panelId);
        return next;
      });
    });
    const unregisterMountedTabPanel = useStableCallback((panelValue, panelId) => {
      setMountedTabPanels((prev) => {
        if (!prev.has(panelValue) || prev.get(panelValue) !== panelId) {
          return prev;
        }
        const next = new Map(prev);
        next.delete(panelValue);
        return next;
      });
    });
    const getTabPanelIdByValue = React168.useCallback((tabValue) => {
      return mountedTabPanels.get(tabValue);
    }, [mountedTabPanels]);
    const getTabIdByPanelValue = React168.useCallback((tabPanelValue) => {
      for (const tabMetadata of tabMap.values()) {
        if (tabPanelValue === tabMetadata?.value) {
          return tabMetadata?.id;
        }
      }
      return void 0;
    }, [tabMap]);
    const tabsContextValue = React168.useMemo(() => ({
      getTabElementBySelectedValue,
      getTabIdByPanelValue,
      getTabPanelIdByValue,
      onValueChange,
      orientation,
      registerMountedTabPanel,
      setTabMap,
      unregisterMountedTabPanel,
      tabActivationDirection,
      value
    }), [getTabElementBySelectedValue, getTabIdByPanelValue, getTabPanelIdByValue, onValueChange, orientation, registerMountedTabPanel, setTabMap, unregisterMountedTabPanel, tabActivationDirection, value]);
    const selectedTabMetadata = React168.useMemo(() => {
      for (const tabMetadata of tabMap.values()) {
        if (tabMetadata != null && tabMetadata.value === value) {
          return tabMetadata;
        }
      }
      return void 0;
    }, [tabMap, value]);
    const firstEnabledTabValue = React168.useMemo(() => {
      for (const tabMetadata of tabMap.values()) {
        if (tabMetadata != null && !tabMetadata.disabled) {
          return tabMetadata.value;
        }
      }
      return void 0;
    }, [tabMap]);
    const shouldNotifyInitialValueChangeRef = React168.useRef(!hasExplicitDefaultValueProp);
    const initialDefaultValueRef = React168.useRef(defaultValueProp);
    const shouldHonorDisabledDefaultValueRef = React168.useRef(hasExplicitDefaultValueProp);
    const didRegisterTabsRef = React168.useRef(false);
    useIsoLayoutEffect(() => {
      if (isControlled) {
        return;
      }
      function commitAutomaticValueChange(fallbackValue, fallbackReason) {
        setValue(fallbackValue);
        setActivationDirectionState((prev) => {
          if (prev.previousValue === fallbackValue && prev.tabActivationDirection === "none") {
            return prev;
          }
          return {
            previousValue: fallbackValue,
            tabActivationDirection: "none"
          };
        });
        notifyAutomaticValueChange(fallbackValue, fallbackReason);
        shouldNotifyInitialValueChangeRef.current = false;
      }
      if (tabMap.size === 0) {
        if (didRegisterTabsRef.current && value !== null && !lastKnownTabElementRef.current?.isConnected) {
          commitAutomaticValueChange(null, reason_parts_exports.missing);
        }
        return;
      }
      didRegisterTabsRef.current = true;
      lastKnownTabElementRef.current = tabMap.keys().next().value;
      const selectionIsDisabled = selectedTabMetadata?.disabled;
      const selectionIsMissing = selectedTabMetadata == null && value !== null;
      if (!selectionIsDisabled && value === initialDefaultValueRef.current) {
        shouldHonorDisabledDefaultValueRef.current = false;
      }
      if (shouldHonorDisabledDefaultValueRef.current && selectionIsDisabled && value === initialDefaultValueRef.current) {
        return;
      }
      const shouldNotifyInitialValueChange = shouldNotifyInitialValueChangeRef.current;
      if (selectionIsDisabled || selectionIsMissing) {
        const fallbackValue = firstEnabledTabValue ?? null;
        if (value === fallbackValue) {
          shouldNotifyInitialValueChangeRef.current = false;
          return;
        }
        let fallbackReason = reason_parts_exports.missing;
        if (shouldNotifyInitialValueChange) {
          fallbackReason = reason_parts_exports.initial;
        } else if (selectionIsDisabled) {
          fallbackReason = reason_parts_exports.disabled;
        }
        commitAutomaticValueChange(fallbackValue, fallbackReason);
        return;
      }
      if (shouldNotifyInitialValueChange && selectedTabMetadata != null) {
        notifyAutomaticValueChange(value, reason_parts_exports.initial);
        shouldNotifyInitialValueChangeRef.current = false;
      }
    }, [firstEnabledTabValue, isControlled, notifyAutomaticValueChange, selectedTabMetadata, setValue, tabMap, value]);
    const state = {
      orientation,
      tabActivationDirection
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: elementProps,
      stateAttributesMapping: tabsStateAttributesMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TabsRootContext.Provider, {
      value: tabsContextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CompositeList, {
        elementsRef: tabPanelRefs,
        children: element
      })
    });
  });
  if (true) TabsRoot.displayName = "TabsRoot";
  function computeActivationDirection(oldValue, newValue, orientation, tabMap) {
    if (oldValue == null || newValue == null) {
      return "none";
    }
    let oldTab = null;
    let newTab = null;
    for (const [tabElement, tabMetadata] of tabMap.entries()) {
      if (tabMetadata == null) {
        continue;
      }
      const tabValue = tabMetadata.value ?? tabMetadata.index;
      if (oldValue === tabValue) {
        oldTab = tabElement;
      }
      if (newValue === tabValue) {
        newTab = tabElement;
      }
      if (oldTab != null && newTab != null) {
        break;
      }
    }
    if (oldTab == null || newTab == null) {
      if (oldTab !== newTab && (typeof oldValue === "number" || typeof oldValue === "string") && typeof oldValue === typeof newValue) {
        if (orientation === "horizontal") {
          return newValue > oldValue ? "right" : "left";
        }
        return newValue > oldValue ? "down" : "up";
      }
      return "none";
    }
    const oldRect = oldTab.getBoundingClientRect();
    const newRect = newTab.getBoundingClientRect();
    if (orientation === "horizontal") {
      if (newRect.left < oldRect.left) {
        return "left";
      }
      if (newRect.left > oldRect.left) {
        return "right";
      }
    } else {
      if (newRect.top < oldRect.top) {
        return "up";
      }
      if (newRect.top > oldRect.top) {
        return "down";
      }
    }
    return "none";
  }

  // node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
  init_define_import_meta_env();
  var React170 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/composite/constants.mjs
  init_define_import_meta_env();
  var ACTIVE_COMPOSITE_ITEM = "data-composite-item-active";

  // node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
  init_define_import_meta_env();
  var React169 = __toESM(require_react_shim(), 1);
  var TabsListContext = /* @__PURE__ */ React169.createContext(void 0);
  if (true) TabsListContext.displayName = "TabsListContext";
  function useTabsListContext() {
    const context = React169.useContext(TabsListContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>." : formatErrorMessage_default(65));
    }
    return context;
  }

  // node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
  var TabsTab = /* @__PURE__ */ React170.forwardRef(function TabsTab2(componentProps, forwardedRef) {
    const {
      className,
      disabled: disabled2 = false,
      render,
      value,
      id: idProp,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      value: activeTabValue,
      getTabPanelIdByValue,
      orientation,
      tabActivationDirection
    } = useTabsRootContext();
    const {
      activateOnFocus,
      highlightedTabIndex,
      onTabActivation,
      registerTabResizeObserverElement,
      setHighlightedTabIndex,
      tabsListElement
    } = useTabsListContext();
    const id = useBaseUiId(idProp);
    const tabMetadata = React170.useMemo(() => ({
      disabled: disabled2,
      id,
      value
    }), [disabled2, id, value]);
    const {
      compositeProps,
      compositeRef,
      index: index2
      // hook is used instead of the CompositeItem component
      // because the index is needed for Tab internals
    } = useCompositeItem({
      metadata: tabMetadata
    });
    const active = value === activeTabValue;
    const isNavigatingRef = React170.useRef(false);
    const tabElementRef = React170.useRef(null);
    useIsoLayoutEffect(() => {
      const tabElement = tabElementRef.current;
      if (!tabElement) {
        return void 0;
      }
      return registerTabResizeObserverElement(tabElement);
    }, [registerTabResizeObserverElement]);
    useIsoLayoutEffect(() => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        return;
      }
      if (!(active && index2 > -1 && highlightedTabIndex !== index2)) {
        return;
      }
      const listElement = tabsListElement;
      if (listElement != null) {
        const activeEl = activeElement(ownerDocument(listElement));
        if (activeEl && contains(listElement, activeEl)) {
          return;
        }
      }
      if (!disabled2) {
        setHighlightedTabIndex(index2);
      }
    }, [active, index2, highlightedTabIndex, setHighlightedTabIndex, disabled2, tabsListElement]);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton,
      focusableWhenDisabled: true
    });
    const tabPanelId = getTabPanelIdByValue(value);
    const isPressingRef = React170.useRef(false);
    const isMainButtonRef = React170.useRef(false);
    function onClick(event) {
      if (active || disabled2) {
        return;
      }
      onTabActivation(value, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent, void 0, {
        activationDirection: "none"
      }));
    }
    function onFocus(event) {
      if (active) {
        return;
      }
      if (index2 > -1 && !disabled2) {
        setHighlightedTabIndex(index2);
      }
      if (disabled2) {
        return;
      }
      if (activateOnFocus && (!isPressingRef.current || // keyboard or touch focus
      isPressingRef.current && isMainButtonRef.current)) {
        onTabActivation(value, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent, void 0, {
          activationDirection: "none"
        }));
      }
    }
    function onPointerDown(event) {
      if (active || disabled2) {
        return;
      }
      isPressingRef.current = true;
      function handlePointerUp() {
        isPressingRef.current = false;
        isMainButtonRef.current = false;
      }
      if (!event.button || event.button === 0) {
        isMainButtonRef.current = true;
        const doc = ownerDocument(event.currentTarget);
        doc.addEventListener("pointerup", handlePointerUp, {
          once: true
        });
      }
    }
    const state = {
      disabled: disabled2,
      active,
      orientation,
      tabActivationDirection
    };
    const element = useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef, compositeRef, tabElementRef],
      props: [compositeProps, {
        role: "tab",
        "aria-controls": tabPanelId,
        "aria-selected": active,
        id,
        onClick,
        onFocus,
        onPointerDown,
        [ACTIVE_COMPOSITE_ITEM]: active ? "" : void 0,
        onKeyDownCapture() {
          isNavigatingRef.current = true;
        }
      }, elementProps, getButtonProps],
      stateAttributesMapping: tabsStateAttributesMapping
    });
    return element;
  });
  if (true) TabsTab.displayName = "TabsTab";

  // node_modules/@base-ui/react/tabs/indicator/TabsIndicator.mjs
  init_define_import_meta_env();
  var React171 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/utils/useIsHydrating.mjs
  init_define_import_meta_env();
  var import_shim2 = __toESM(require_shim(), 1);
  function subscribe() {
    return NOOP;
  }
  function getSnapshot() {
    return false;
  }
  function getServerSnapshot() {
    return true;
  }
  function useIsHydrating() {
    return (0, import_shim2.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
  }

  // node_modules/@base-ui/react/tabs/indicator/prehydrationScript.min.mjs
  init_define_import_meta_env();
  var script = '!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';

  // node_modules/@base-ui/react/tabs/indicator/TabsIndicatorCssVars.mjs
  init_define_import_meta_env();
  var TabsIndicatorCssVars = /* @__PURE__ */ (function(TabsIndicatorCssVars2) {
    TabsIndicatorCssVars2["activeTabLeft"] = "--active-tab-left";
    TabsIndicatorCssVars2["activeTabRight"] = "--active-tab-right";
    TabsIndicatorCssVars2["activeTabTop"] = "--active-tab-top";
    TabsIndicatorCssVars2["activeTabBottom"] = "--active-tab-bottom";
    TabsIndicatorCssVars2["activeTabWidth"] = "--active-tab-width";
    TabsIndicatorCssVars2["activeTabHeight"] = "--active-tab-height";
    return TabsIndicatorCssVars2;
  })({});

  // node_modules/@base-ui/react/tabs/indicator/TabsIndicator.mjs
  var import_jsx_runtime42 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping13 = {
    ...tabsStateAttributesMapping,
    activeTabPosition: () => null,
    activeTabSize: () => null
  };
  var TabsIndicator = /* @__PURE__ */ React171.forwardRef(function TabsIndicator2(componentProps, forwardedRef) {
    const {
      className,
      render,
      renderBeforeHydration = false,
      style: styleProp,
      ...elementProps
    } = componentProps;
    const {
      nonce
    } = useCSPContext();
    const {
      getTabElementBySelectedValue,
      orientation,
      tabActivationDirection,
      value
    } = useTabsRootContext();
    const {
      tabsListElement,
      registerIndicatorUpdateListener
    } = useTabsListContext();
    const isHydrating = useIsHydrating();
    const rerender = useForcedRerendering();
    React171.useEffect(() => {
      return registerIndicatorUpdateListener(rerender);
    }, [registerIndicatorUpdateListener, rerender]);
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;
    let width = 0;
    let height = 0;
    let isTabSelected = false;
    if (value != null && tabsListElement != null) {
      const activeTab = getTabElementBySelectedValue(value);
      if (activeTab != null) {
        isTabSelected = true;
        const {
          width: computedWidth,
          height: computedHeight
        } = getCssDimensions2(activeTab);
        const {
          width: tabListWidth,
          height: tabListHeight
        } = getCssDimensions2(tabsListElement);
        const tabRect = activeTab.getBoundingClientRect();
        const tabsListRect = tabsListElement.getBoundingClientRect();
        const scaleX = tabListWidth > 0 ? tabsListRect.width / tabListWidth : 1;
        const scaleY = tabListHeight > 0 ? tabsListRect.height / tabListHeight : 1;
        const hasNonZeroScale = Math.abs(scaleX) > Number.EPSILON && Math.abs(scaleY) > Number.EPSILON;
        if (hasNonZeroScale) {
          const tabLeftDelta = tabRect.left - tabsListRect.left;
          const tabTopDelta = tabRect.top - tabsListRect.top;
          left = tabLeftDelta / scaleX + tabsListElement.scrollLeft - tabsListElement.clientLeft;
          top = tabTopDelta / scaleY + tabsListElement.scrollTop - tabsListElement.clientTop;
        } else {
          left = activeTab.offsetLeft;
          top = activeTab.offsetTop;
        }
        width = computedWidth;
        height = computedHeight;
        right = tabsListElement.scrollWidth - left - width;
        bottom = tabsListElement.scrollHeight - top - height;
      }
    }
    const activeTabPosition = isTabSelected ? {
      left,
      right,
      top,
      bottom
    } : null;
    const activeTabSize = isTabSelected ? {
      width,
      height
    } : null;
    const style = isTabSelected ? {
      [TabsIndicatorCssVars.activeTabLeft]: `${left}px`,
      [TabsIndicatorCssVars.activeTabRight]: `${right}px`,
      [TabsIndicatorCssVars.activeTabTop]: `${top}px`,
      [TabsIndicatorCssVars.activeTabBottom]: `${bottom}px`,
      [TabsIndicatorCssVars.activeTabWidth]: `${width}px`,
      [TabsIndicatorCssVars.activeTabHeight]: `${height}px`
    } : void 0;
    const displayIndicator = isTabSelected && width > 0 && height > 0;
    const state = {
      orientation,
      activeTabPosition,
      activeTabSize,
      tabActivationDirection
    };
    const element = useRenderElement("span", componentProps, {
      state,
      ref: forwardedRef,
      props: [{
        role: "presentation",
        style,
        hidden: !displayIndicator
        // do not display the indicator before the layout is settled
      }, elementProps, {
        suppressHydrationWarning: true
      }],
      stateAttributesMapping: stateAttributesMapping13
    });
    if (value == null) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(React171.Fragment, {
      children: [element, isHydrating && renderBeforeHydration && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("script", {
        nonce,
        dangerouslySetInnerHTML: {
          __html: script
        },
        suppressHydrationWarning: true
      })]
    });
  });
  if (true) TabsIndicator.displayName = "TabsIndicator";

  // node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
  init_define_import_meta_env();
  var React172 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tabs/panel/TabsPanelDataAttributes.mjs
  init_define_import_meta_env();
  var TabsPanelDataAttributes = (function(TabsPanelDataAttributes2) {
    TabsPanelDataAttributes2["index"] = "data-index";
    TabsPanelDataAttributes2["activationDirection"] = "data-activation-direction";
    TabsPanelDataAttributes2["orientation"] = "data-orientation";
    TabsPanelDataAttributes2["hidden"] = "data-hidden";
    TabsPanelDataAttributes2[TabsPanelDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
    TabsPanelDataAttributes2[TabsPanelDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
    return TabsPanelDataAttributes2;
  })({});

  // node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
  var stateAttributesMapping14 = {
    ...tabsStateAttributesMapping,
    ...transitionStatusMapping
  };
  var TabsPanel = /* @__PURE__ */ React172.forwardRef(function TabsPanel2(componentProps, forwardedRef) {
    const {
      className,
      value,
      render,
      keepMounted = false,
      style,
      ...elementProps
    } = componentProps;
    const {
      value: selectedValue,
      getTabIdByPanelValue,
      orientation,
      tabActivationDirection,
      registerMountedTabPanel,
      unregisterMountedTabPanel
    } = useTabsRootContext();
    const id = useBaseUiId();
    const metadata = React172.useMemo(() => ({
      id,
      value
    }), [id, value]);
    const {
      ref: listItemRef,
      index: index2
    } = useCompositeListItem({
      metadata
    });
    const open = value === selectedValue;
    const {
      mounted,
      transitionStatus,
      setMounted
    } = useTransitionStatus(open);
    const hidden = !mounted;
    const correspondingTabId = getTabIdByPanelValue(value);
    const state = {
      hidden,
      orientation,
      tabActivationDirection,
      transitionStatus
    };
    const panelRef = React172.useRef(null);
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, listItemRef, panelRef],
      props: [{
        "aria-labelledby": correspondingTabId,
        hidden,
        id,
        role: "tabpanel",
        tabIndex: open ? 0 : -1,
        inert: inertValue(!open),
        [TabsPanelDataAttributes.index]: index2
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping14
    });
    useOpenChangeComplete({
      open,
      ref: panelRef,
      onComplete() {
        if (!open) {
          setMounted(false);
        }
      }
    });
    useIsoLayoutEffect(() => {
      if (hidden && !keepMounted) {
        return void 0;
      }
      if (id == null) {
        return void 0;
      }
      registerMountedTabPanel(value, id);
      return () => {
        unregisterMountedTabPanel(value, id);
      };
    }, [hidden, keepMounted, value, id, registerMountedTabPanel, unregisterMountedTabPanel]);
    const shouldRender = keepMounted || mounted;
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) TabsPanel.displayName = "TabsPanel";

  // node_modules/@base-ui/react/tabs/list/TabsList.mjs
  init_define_import_meta_env();
  var React175 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
  init_define_import_meta_env();
  var React174 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/composite/root/useCompositeRoot.mjs
  init_define_import_meta_env();
  var React173 = __toESM(require_react_shim(), 1);
  var EMPTY_ARRAY2 = [];
  function useCompositeRoot(params) {
    const {
      loopFocus = true,
      orientation = "both",
      grid,
      onLoop,
      direction,
      highlightedIndex: externalHighlightedIndex,
      onHighlightedIndexChange: externalSetHighlightedIndex,
      rootRef: externalRef,
      enableHomeAndEndKeys = false,
      stopEventPropagation = false,
      disabledIndices,
      modifierKeys = EMPTY_ARRAY2
    } = params;
    const [internalHighlightedIndex, internalSetHighlightedIndex] = React173.useState(0);
    const isGrid = grid != null;
    const rootRef = React173.useRef(null);
    const mergedRef = useMergedRefs(rootRef, externalRef);
    const elementsRef = React173.useRef([]);
    const hasSetDefaultIndexRef = React173.useRef(false);
    const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
    const onHighlightedIndexChange = useStableCallback((index2, shouldScrollIntoView = false) => {
      (externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index2);
      if (shouldScrollIntoView) {
        const newActiveItem = elementsRef.current[index2];
        scrollIntoViewIfNeeded(rootRef.current, newActiveItem, direction, orientation);
      }
    });
    const onMapChange = useStableCallback((map) => {
      if (map.size === 0 || hasSetDefaultIndexRef.current) {
        return;
      }
      hasSetDefaultIndexRef.current = true;
      const sortedElements = Array.from(map.keys());
      const activeItem = sortedElements.find((compositeElement) => compositeElement?.hasAttribute(ACTIVE_COMPOSITE_ITEM)) ?? null;
      const activeIndex = activeItem ? sortedElements.indexOf(activeItem) : -1;
      if (activeIndex !== -1) {
        onHighlightedIndexChange(activeIndex);
      } else if (isListIndexDisabled(sortedElements, highlightedIndex, disabledIndices)) {
        const firstEnabledIndex = findNonDisabledListIndex(sortedElements, {
          disabledIndices
        });
        if (!isIndexOutOfListBounds(sortedElements, firstEnabledIndex)) {
          onHighlightedIndexChange(firstEnabledIndex);
        }
      }
      scrollIntoViewIfNeeded(rootRef.current, activeItem, direction, orientation);
    });
    useIsoLayoutEffect(() => {
      if (disabledIndices == null || externalHighlightedIndex != null || !hasSetDefaultIndexRef.current) {
        return;
      }
      const elements = elementsRef.current;
      if (isListIndexDisabled(elements, highlightedIndex, disabledIndices)) {
        const firstEnabledIndex = findNonDisabledListIndex(elements, {
          disabledIndices
        });
        if (!isIndexOutOfListBounds(elements, firstEnabledIndex)) {
          onHighlightedIndexChange(firstEnabledIndex);
        }
      }
    }, [disabledIndices, externalHighlightedIndex, highlightedIndex, elementsRef, onHighlightedIndexChange]);
    const wrappedOnLoop = useStableCallback((event, prevIndex, nextIndex) => {
      if (!onLoop) {
        return nextIndex;
      }
      return onLoop(event, prevIndex, nextIndex, elementsRef);
    });
    const onKeyDown = useStableCallback((event) => {
      const RELEVANT_KEYS = enableHomeAndEndKeys ? COMPOSITE_KEYS : ARROW_KEYS;
      if (!RELEVANT_KEYS.has(event.key)) {
        return;
      }
      if (isModifierKeySet(event, modifierKeys)) {
        return;
      }
      const element = rootRef.current;
      if (!element) {
        return;
      }
      const isRtl = direction === "rtl";
      const horizontalForwardKey = isRtl ? ARROW_LEFT2 : ARROW_RIGHT2;
      const forwardKey = {
        horizontal: horizontalForwardKey,
        vertical: ARROW_DOWN2,
        both: horizontalForwardKey
      }[orientation];
      const horizontalBackwardKey = isRtl ? ARROW_RIGHT2 : ARROW_LEFT2;
      const backwardKey = {
        horizontal: horizontalBackwardKey,
        vertical: ARROW_UP2,
        both: horizontalBackwardKey
      }[orientation];
      const target = getTarget(event.nativeEvent);
      if (target != null && isNativeInput(target) && !isElementDisabled(target)) {
        const selectionStart = target.selectionStart;
        const selectionEnd = target.selectionEnd;
        const textContent = target.value ?? "";
        if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) {
          return;
        }
        if (event.key !== backwardKey && selectionStart < textContent.length) {
          return;
        }
        if (event.key !== forwardKey && selectionStart > 0) {
          return;
        }
      }
      let nextIndex = highlightedIndex;
      const minIndex = getMinListIndex(elementsRef, disabledIndices);
      const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
      if (grid != null) {
        nextIndex = grid({
          disabledIndices,
          elementsRef,
          event,
          highlightedIndex,
          loopFocus,
          maxIndex,
          minIndex,
          onLoop: wrappedOnLoop,
          orientation,
          rtl: isRtl
        });
      }
      const forwardKeys = {
        horizontal: [horizontalForwardKey],
        vertical: [ARROW_DOWN2],
        both: [horizontalForwardKey, ARROW_DOWN2]
      }[orientation];
      const backwardKeys = {
        horizontal: [horizontalBackwardKey],
        vertical: [ARROW_UP2],
        both: [horizontalBackwardKey, ARROW_UP2]
      }[orientation];
      const preventedKeys = isGrid ? RELEVANT_KEYS : {
        horizontal: enableHomeAndEndKeys ? HORIZONTAL_KEYS_WITH_EXTRA_KEYS : HORIZONTAL_KEYS,
        vertical: enableHomeAndEndKeys ? VERTICAL_KEYS_WITH_EXTRA_KEYS : VERTICAL_KEYS,
        both: RELEVANT_KEYS
      }[orientation];
      if (enableHomeAndEndKeys) {
        if (event.key === HOME) {
          nextIndex = minIndex;
        } else if (event.key === END) {
          nextIndex = maxIndex;
        }
      }
      if (nextIndex === highlightedIndex && (forwardKeys.includes(event.key) || backwardKeys.includes(event.key))) {
        if (loopFocus && nextIndex === maxIndex && forwardKeys.includes(event.key)) {
          nextIndex = minIndex;
          if (onLoop) {
            nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
          }
        } else if (loopFocus && nextIndex === minIndex && backwardKeys.includes(event.key)) {
          nextIndex = maxIndex;
          if (onLoop) {
            nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
          }
        } else {
          nextIndex = findNonDisabledListIndex(elementsRef.current, {
            startingIndex: nextIndex,
            decrement: backwardKeys.includes(event.key),
            disabledIndices
          });
        }
      }
      if (nextIndex !== highlightedIndex && !isIndexOutOfListBounds(elementsRef.current, nextIndex)) {
        if (stopEventPropagation) {
          event.stopPropagation();
        }
        if (preventedKeys.has(event.key)) {
          event.preventDefault();
        }
        onHighlightedIndexChange(nextIndex, true);
        queueMicrotask(() => {
          elementsRef.current[nextIndex]?.focus();
        });
      }
    });
    const props = {
      ref: mergedRef,
      onFocus(event) {
        const element = rootRef.current;
        const target = getTarget(event.nativeEvent);
        if (!element || target == null || !isNativeInput(target)) {
          return;
        }
        target.setSelectionRange(0, target.value.length ?? 0);
      },
      onKeyDown
    };
    return {
      props,
      highlightedIndex,
      onHighlightedIndexChange,
      elementsRef,
      disabledIndices,
      onMapChange,
      relayKeyboardEvent: onKeyDown
    };
  }
  function isModifierKeySet(event, ignoredModifierKeys) {
    for (const key of MODIFIER_KEYS.values()) {
      if (ignoredModifierKeys.includes(key)) {
        continue;
      }
      if (event.getModifierState(key)) {
        return true;
      }
    }
    return false;
  }

  // node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
  var import_jsx_runtime43 = __toESM(require_react_shim(), 1);
  function CompositeRoot(componentProps) {
    const {
      render,
      className,
      style,
      refs = EMPTY_ARRAY,
      props = EMPTY_ARRAY,
      state = EMPTY_OBJECT,
      stateAttributesMapping: stateAttributesMapping18,
      highlightedIndex: highlightedIndexProp,
      onHighlightedIndexChange: onHighlightedIndexChangeProp,
      orientation,
      grid,
      loopFocus,
      onLoop,
      enableHomeAndEndKeys,
      onMapChange: onMapChangeProp,
      stopEventPropagation = true,
      rootRef,
      disabledIndices,
      modifierKeys,
      highlightItemOnHover = false,
      tag = "div",
      ...elementProps
    } = componentProps;
    const direction = useDirection();
    const {
      props: defaultProps,
      highlightedIndex,
      onHighlightedIndexChange,
      elementsRef,
      onMapChange: onMapChangeUnwrapped,
      relayKeyboardEvent
    } = useCompositeRoot({
      grid,
      loopFocus,
      onLoop,
      orientation,
      highlightedIndex: highlightedIndexProp,
      onHighlightedIndexChange: onHighlightedIndexChangeProp,
      rootRef,
      stopEventPropagation,
      enableHomeAndEndKeys,
      direction,
      disabledIndices,
      modifierKeys
    });
    const element = useRenderElement(tag, componentProps, {
      state,
      ref: refs,
      props: [defaultProps, ...props, elementProps],
      stateAttributesMapping: stateAttributesMapping18
    });
    const contextValue = React174.useMemo(() => ({
      highlightedIndex,
      onHighlightedIndexChange,
      highlightItemOnHover,
      relayKeyboardEvent
    }), [highlightedIndex, onHighlightedIndexChange, highlightItemOnHover, relayKeyboardEvent]);
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CompositeRootContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CompositeList, {
        elementsRef,
        onMapChange: (newMap) => {
          onMapChangeProp?.(newMap);
          onMapChangeUnwrapped(newMap);
        },
        children: element
      })
    });
  }

  // node_modules/@base-ui/react/tabs/list/TabsList.mjs
  var import_jsx_runtime44 = __toESM(require_react_shim(), 1);
  var TabsList = /* @__PURE__ */ React175.forwardRef(function TabsList2(componentProps, forwardedRef) {
    const {
      activateOnFocus = false,
      className,
      loopFocus = true,
      render,
      style,
      ...elementProps
    } = componentProps;
    const {
      onValueChange,
      orientation,
      value,
      setTabMap,
      tabActivationDirection
    } = useTabsRootContext();
    const [highlightedTabIndex, setHighlightedTabIndex] = React175.useState(0);
    const [tabsListElement, setTabsListElement] = React175.useState(null);
    const indicatorUpdateListenersRef = React175.useRef(/* @__PURE__ */ new Set());
    const tabResizeObserverElementsRef = React175.useRef(/* @__PURE__ */ new Set());
    const resizeObserverRef = React175.useRef(null);
    useIsoLayoutEffect(() => {
      if (typeof ResizeObserver === "undefined") {
        return void 0;
      }
      const resizeObserver = new ResizeObserver(() => {
        indicatorUpdateListenersRef.current.forEach((listener) => {
          listener();
        });
      });
      resizeObserverRef.current = resizeObserver;
      if (tabsListElement) {
        resizeObserver.observe(tabsListElement);
      }
      tabResizeObserverElementsRef.current.forEach((element) => {
        resizeObserver.observe(element);
      });
      return () => {
        resizeObserver.disconnect();
        resizeObserverRef.current = null;
      };
    }, [tabsListElement]);
    const registerIndicatorUpdateListener = useStableCallback((listener) => {
      indicatorUpdateListenersRef.current.add(listener);
      return () => {
        indicatorUpdateListenersRef.current.delete(listener);
      };
    });
    const registerTabResizeObserverElement = useStableCallback((element) => {
      tabResizeObserverElementsRef.current.add(element);
      resizeObserverRef.current?.observe(element);
      return () => {
        tabResizeObserverElementsRef.current.delete(element);
        resizeObserverRef.current?.unobserve(element);
      };
    });
    const onTabActivation = useStableCallback((newValue, eventDetails) => {
      if (newValue !== value) {
        onValueChange(newValue, eventDetails);
      }
    });
    const state = {
      orientation,
      tabActivationDirection
    };
    const defaultProps = {
      "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
      role: "tablist"
    };
    const tabsListContextValue = React175.useMemo(() => ({
      activateOnFocus,
      highlightedTabIndex,
      registerIndicatorUpdateListener,
      registerTabResizeObserverElement,
      onTabActivation,
      setHighlightedTabIndex,
      tabsListElement
    }), [activateOnFocus, highlightedTabIndex, registerIndicatorUpdateListener, registerTabResizeObserverElement, onTabActivation, setHighlightedTabIndex, tabsListElement]);
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(TabsListContext.Provider, {
      value: tabsListContextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CompositeRoot, {
        render,
        className,
        style,
        state,
        refs: [forwardedRef, setTabsListElement],
        props: [defaultProps, elementProps],
        stateAttributesMapping: tabsStateAttributesMapping,
        highlightedIndex: highlightedTabIndex,
        enableHomeAndEndKeys: true,
        loopFocus,
        orientation,
        onHighlightedIndexChange: setHighlightedTabIndex,
        onMapChange: setTabMap,
        disabledIndices: EMPTY_ARRAY
      })
    });
  });
  if (true) TabsList.displayName = "TabsList";

  // src/components/ui/tabs.tsx
  function Tabs({
    className,
    orientation = "horizontal",
    ...props
  }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports6.Root,
      {
        "data-slot": "tabs",
        "data-orientation": orientation,
        className: cn(
          "group/tabs flex gap-2 data-horizontal:flex-col",
          className
        ),
        ...props
      }
    );
  }
  var tabsListVariants = cva(
    "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
    {
      variants: {
        variant: {
          default: "bg-muted",
          line: "gap-1 bg-transparent"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  function TabsList3({
    className,
    variant = "default",
    ...props
  }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports6.List,
      {
        "data-slot": "tabs-list",
        "data-variant": variant,
        className: cn(tabsListVariants({ variant }), className),
        ...props
      }
    );
  }
  function TabsTrigger({ className, ...props }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports6.Tab,
      {
        "data-slot": "tabs-trigger",
        className: cn(
          "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
          "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
          "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
          className
        ),
        ...props
      }
    );
  }
  function TabsContent({ className, ...props }) {
    return /* @__PURE__ */ React.createElement(
      index_parts_exports6.Panel,
      {
        "data-slot": "tabs-content",
        className: cn("flex-1 text-sm outline-none", className),
        ...props
      }
    );
  }

  // src/components/ui/textarea.tsx
  init_define_import_meta_env();
  var React176 = __toESM(require_react_shim(), 1);
  function Textarea({ className, ...props }) {
    return /* @__PURE__ */ React176.createElement(
      "textarea",
      {
        "data-slot": "textarea",
        className: cn(
          "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        ),
        ...props
      }
    );
  }

  // src/components/ui/toast.tsx
  init_define_import_meta_env();
  var React193 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/toast/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/toast/index.parts.mjs
  var index_parts_exports7 = {};
  __export(index_parts_exports7, {
    Action: () => ToastAction,
    Arrow: () => ToastArrow,
    Close: () => ToastClose,
    Content: () => ToastContent,
    Description: () => ToastDescription,
    Portal: () => ToastPortal,
    Positioner: () => ToastPositioner,
    Provider: () => ToastProvider,
    Root: () => ToastRoot,
    Title: () => ToastTitle,
    Viewport: () => ToastViewport,
    createToastManager: () => createToastManager,
    useToastManager: () => useToastManager
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/toast/provider/ToastProvider.mjs
  init_define_import_meta_env();
  var React178 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/toast/provider/ToastProviderContext.mjs
  init_define_import_meta_env();
  var React177 = __toESM(require_react_shim(), 1);
  var ToastContext = /* @__PURE__ */ React177.createContext(void 0);
  if (true) ToastContext.displayName = "ToastContext";
  function useToastProviderContext() {
    const context = React177.useContext(ToastContext);
    if (!context) {
      throw new Error(true ? "Base UI: useToastManager must be used within <Toast.Provider>." : formatErrorMessage_default(73));
    }
    return context;
  }

  // node_modules/@base-ui/react/toast/store.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/generateId.mjs
  init_define_import_meta_env();
  var counter = 0;
  function generateId(prefix) {
    counter += 1;
    return `${prefix}-${Math.random().toString(36).slice(2, 6)}-${counter}`;
  }

  // node_modules/@base-ui/react/toast/utils/resolvePromiseOptions.mjs
  init_define_import_meta_env();
  function resolvePromiseOptions(options, result) {
    if (typeof options === "string") {
      return {
        description: options
      };
    }
    if (typeof options === "function") {
      const resolvedOptions = options(result);
      return typeof resolvedOptions === "string" ? {
        description: resolvedOptions
      } : resolvedOptions;
    }
    return options;
  }

  // node_modules/@base-ui/react/toast/utils/focusVisible.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/toast/store.mjs
  function createToastMetadata(toasts) {
    const metadata = /* @__PURE__ */ new Map();
    let visibleIndex = 0;
    let offsetY = 0;
    toasts.forEach((toast2, toastIndex) => {
      const isEnding = toast2.transitionStatus === "ending";
      metadata.set(toast2.id, {
        value: toast2,
        domIndex: toastIndex,
        visibleIndex: isEnding ? -1 : visibleIndex,
        offsetY
      });
      offsetY += toast2.height || 0;
      if (!isEnding) {
        visibleIndex += 1;
      }
    });
    return metadata;
  }
  function applyLimited(toasts, limit) {
    let activeIndex = 0;
    return toasts.map((toast2) => {
      if (toast2.transitionStatus === "ending") {
        return toast2;
      }
      const limited = activeIndex >= limit;
      activeIndex += 1;
      return toast2.limited === limited ? toast2 : {
        ...toast2,
        limited
      };
    });
  }
  var toastMetadataSelector = (state) => state.toastMetadata;
  var selectors5 = {
    toasts: createSelector((state) => state.toasts),
    isEmpty: createSelector((state) => state.toasts.length === 0),
    toast: createSelector(toastMetadataSelector, (toastMetadata, id) => toastMetadata.get(id)?.value),
    toastIndex: createSelector(toastMetadataSelector, (toastMetadata, id) => toastMetadata.get(id)?.domIndex ?? -1),
    toastOffsetY: createSelector(toastMetadataSelector, (toastMetadata, id) => toastMetadata.get(id)?.offsetY ?? 0),
    toastVisibleIndex: createSelector(toastMetadataSelector, (toastMetadata, id) => toastMetadata.get(id)?.visibleIndex ?? -1),
    hovering: createSelector((state) => state.hovering),
    focused: createSelector((state) => state.focused),
    expanded: createSelector((state) => state.hovering || state.focused),
    expandedOrOutOfFocus: createSelector((state) => state.hovering || state.focused || !state.isWindowFocused),
    prevFocusElement: createSelector((state) => state.prevFocusElement)
  };
  var ToastStore = class extends ReactStore {
    constructor(initialState) {
      super({
        ...initialState,
        toastMetadata: createToastMetadata(initialState.toasts)
      }, {}, selectors5);
      __publicField(this, "timers", /* @__PURE__ */ new Map());
      __publicField(this, "areTimersPaused", false);
      __publicField(this, "setViewport", (viewport) => {
        this.set("viewport", viewport);
      });
      __publicField(this, "disposeEffect", () => {
        return () => {
          this.timers.forEach((timer) => {
            timer.timeout?.clear();
          });
          this.timers.clear();
        };
      });
      __publicField(this, "addToast", (toast2) => {
        const {
          timeout,
          limit
        } = this.state;
        const id = toast2.id || generateId("toast");
        if (toast2.id) {
          const existingToast = selectors5.toast(this.state, toast2.id);
          if (existingToast) {
            if (existingToast.transitionStatus === "ending") {
              this.removeToast(toast2.id, {
                skipOnRemove: true
              });
            } else {
              const {
                id: ignoredId,
                transitionStatus: ignoredTransitionStatus,
                ...updates
              } = toast2;
              this.updateToastInternal(toast2.id, updates, {
                resetTimer: true,
                markUpdated: true
              });
              return toast2.id;
            }
          }
        }
        const toastToAdd = {
          ...toast2,
          id,
          updateKey: 0,
          transitionStatus: "starting"
        };
        const updatedToasts = [toastToAdd, ...this.state.toasts];
        this.setToasts(applyLimited(updatedToasts, limit));
        const duration = toastToAdd.timeout ?? timeout;
        if (toastToAdd.type !== "loading" && duration > 0) {
          this.scheduleTimer(id, duration, () => this.closeToast(id));
        }
        if (selectors5.expandedOrOutOfFocus(this.state)) {
          this.pauseTimers();
        }
        return id;
      });
      __publicField(this, "updateToast", (id, updates) => {
        this.updateToastInternal(id, updates, {
          markUpdated: true
        });
      });
      __publicField(this, "updateToastInternal", (id, updates, behavior = {}) => {
        const {
          timeout,
          toasts
        } = this.state;
        const prevToast = selectors5.toast(this.state, id) ?? null;
        if (!prevToast) {
          return;
        }
        if (prevToast.transitionStatus === "ending") {
          return;
        }
        const nextToast = {
          ...prevToast,
          ...updates,
          ...behavior.markUpdated && {
            updateKey: (prevToast.updateKey ?? 0) + 1
          }
        };
        this.setToasts(toasts.map((toast2) => toast2.id === id ? nextToast : toast2));
        const nextTimeout = nextToast.timeout ?? timeout;
        const prevTimeout = prevToast?.timeout ?? timeout;
        const timeoutUpdated = Object.hasOwn(updates, "timeout");
        const shouldHaveTimer = nextToast.transitionStatus !== "ending" && nextToast.type !== "loading" && nextTimeout > 0;
        const hasTimer = this.timers.has(id);
        const timeoutChanged = prevTimeout !== nextTimeout;
        const wasLoading = prevToast?.type === "loading";
        if (!shouldHaveTimer && hasTimer) {
          this.clearTimer(id);
          return;
        }
        if (shouldHaveTimer && (!hasTimer || timeoutChanged || timeoutUpdated || wasLoading || behavior.resetTimer)) {
          this.clearTimer(id);
          this.scheduleTimer(id, nextTimeout, () => this.closeToast(id));
          if (selectors5.expandedOrOutOfFocus(this.state)) {
            this.pauseTimers();
          }
        }
      });
      __publicField(this, "closeToast", (toastId) => {
        const closeAll = toastId === void 0;
        const {
          limit,
          toasts
        } = this.state;
        let toastsToClose;
        if (closeAll) {
          toastsToClose = toasts;
          this.clearTimers();
        } else {
          const toast2 = selectors5.toast(this.state, toastId);
          if (!toast2) {
            return;
          }
          toastsToClose = [toast2];
          this.clearTimer(toastId);
        }
        const endingToasts = toasts.map((item) => closeAll || item.id === toastId ? {
          ...item,
          transitionStatus: "ending",
          height: 0
        } : item);
        const newToasts = applyLimited(endingToasts, limit);
        const updates = {
          toasts: newToasts,
          toastMetadata: createToastMetadata(newToasts)
        };
        const hasActiveToasts = newToasts.some((toast2) => toast2.transitionStatus !== "ending");
        if (!hasActiveToasts) {
          updates.hovering = false;
          updates.focused = false;
        }
        this.update(updates);
        toastsToClose.forEach((toast2) => {
          if (toast2.transitionStatus !== "ending") {
            toast2.onClose?.();
          }
        });
        this.handleFocusManagement(toastId);
      });
      __publicField(this, "promiseToast", (promiseValue, options) => {
        const loadingOptions = resolvePromiseOptions(options.loading);
        const id = this.addToast({
          ...loadingOptions,
          type: "loading"
        });
        const handledPromise = promiseValue.then((result) => {
          const successOptions = resolvePromiseOptions(options.success, result);
          this.updateToast(id, {
            ...successOptions,
            type: "success",
            timeout: successOptions.timeout
          });
          return result;
        }).catch((error2) => {
          const errorOptions = resolvePromiseOptions(options.error, error2);
          this.updateToast(id, {
            ...errorOptions,
            type: "error",
            timeout: errorOptions.timeout
          });
          return Promise.reject(error2);
        });
        if ({}.hasOwnProperty.call(options, "setPromise")) {
          options.setPromise(handledPromise);
        }
        return handledPromise;
      });
      __publicField(this, "handleDocumentPointerDown", (event) => {
        if (event.pointerType !== "touch") {
          return;
        }
        const target = getTarget(event);
        if (contains(this.state.viewport, target)) {
          return;
        }
        this.resumeTimers();
        this.update({
          hovering: false,
          focused: false
        });
      });
    }
    setFocused(focused) {
      this.set("focused", focused);
    }
    setHovering(hovering) {
      this.set("hovering", hovering);
    }
    setIsWindowFocused(isWindowFocused) {
      this.set("isWindowFocused", isWindowFocused);
    }
    setPrevFocusElement(prevFocusElement) {
      this.set("prevFocusElement", prevFocusElement);
    }
    syncProviderProps(props) {
      const limitChanged = this.state.limit !== props.limit;
      if (this.state.timeout === props.timeout && !limitChanged) {
        return;
      }
      const updates = {
        timeout: props.timeout,
        limit: props.limit
      };
      if (limitChanged) {
        const newToasts = applyLimited(this.state.toasts, props.limit);
        updates.toasts = newToasts;
        updates.toastMetadata = createToastMetadata(newToasts);
      }
      this.update(updates);
    }
    removeToast(toastId, behavior = {}) {
      const index2 = selectors5.toastIndex(this.state, toastId);
      if (index2 === -1) {
        return;
      }
      const toast2 = this.state.toasts[index2];
      if (!behavior.skipOnRemove) {
        toast2?.onRemove?.();
      }
      const newToasts = [...this.state.toasts];
      newToasts.splice(index2, 1);
      this.setToasts(newToasts);
    }
    pauseTimers() {
      if (this.areTimersPaused) {
        return;
      }
      this.areTimersPaused = true;
      this.timers.forEach((timer) => {
        if (timer.timeout) {
          timer.timeout.clear();
          const elapsed = Date.now() - timer.start;
          const remaining = timer.delay - elapsed;
          timer.remaining = remaining > 0 ? remaining : 0;
        }
      });
    }
    resumeTimers() {
      if (!this.areTimersPaused) {
        return;
      }
      this.areTimersPaused = false;
      this.timers.forEach((timer, id) => {
        timer.remaining = timer.remaining > 0 ? timer.remaining : timer.delay;
        timer.timeout ?? (timer.timeout = Timeout.create());
        timer.timeout.start(timer.remaining, () => {
          this.handleTimerFired(id);
          timer.callback();
        });
        timer.start = Date.now();
      });
    }
    restoreFocusToPrevElement() {
      this.state.prevFocusElement?.focus({
        preventScroll: true
      });
    }
    scheduleTimer(id, delay, callback) {
      const start = Date.now();
      const shouldStartActive = !selectors5.expandedOrOutOfFocus(this.state);
      const currentTimeout = shouldStartActive ? Timeout.create() : void 0;
      currentTimeout?.start(delay, () => {
        this.handleTimerFired(id);
        callback();
      });
      this.timers.set(id, {
        timeout: currentTimeout,
        start: shouldStartActive ? start : 0,
        delay,
        remaining: delay,
        callback
      });
    }
    clearTimers() {
      this.timers.forEach((timer) => {
        timer.timeout?.clear();
      });
      this.timers.clear();
      this.areTimersPaused = false;
    }
    clearTimer(id) {
      const timer = this.timers.get(id);
      timer?.timeout?.clear();
      this.timers.delete(id);
      this.resetPausedStateIfNoTimersRemain();
    }
    handleTimerFired(id) {
      this.timers.delete(id);
      this.resetPausedStateIfNoTimersRemain();
    }
    resetPausedStateIfNoTimersRemain() {
      if (this.timers.size === 0) {
        this.areTimersPaused = false;
      }
    }
    setToasts(newToasts) {
      const updates = {
        toasts: newToasts,
        toastMetadata: createToastMetadata(newToasts)
      };
      if (newToasts.length === 0) {
        updates.hovering = false;
        updates.focused = false;
      }
      this.update(updates);
    }
    handleFocusManagement(toastId) {
      const activeEl = activeElement(ownerDocument(this.state.viewport));
      if (!this.state.viewport || !contains(this.state.viewport, activeEl) || !matchesFocusVisible(activeEl)) {
        return;
      }
      if (toastId === void 0) {
        this.restoreFocusToPrevElement();
        return;
      }
      const toasts = selectors5.toasts(this.state);
      const currentIndex = selectors5.toastIndex(this.state, toastId);
      let nextToast = null;
      let index2 = currentIndex + 1;
      while (index2 < toasts.length) {
        if (toasts[index2].transitionStatus !== "ending") {
          nextToast = toasts[index2];
          break;
        }
        index2 += 1;
      }
      if (!nextToast) {
        index2 = currentIndex - 1;
        while (index2 >= 0) {
          if (toasts[index2].transitionStatus !== "ending") {
            nextToast = toasts[index2];
            break;
          }
          index2 -= 1;
        }
      }
      if (nextToast) {
        nextToast.ref?.current?.focus();
      } else {
        this.restoreFocusToPrevElement();
      }
    }
  };

  // node_modules/@base-ui/react/toast/provider/ToastProvider.mjs
  var import_jsx_runtime45 = __toESM(require_react_shim(), 1);
  var ToastProvider = function ToastProvider2(props) {
    const {
      children,
      timeout = 5e3,
      limit = 3,
      toastManager
    } = props;
    const store = useRefWithInit(() => new ToastStore({
      timeout,
      limit,
      viewport: null,
      toasts: [],
      hovering: false,
      focused: false,
      isWindowFocused: true,
      prevFocusElement: null
    })).current;
    useOnMount(store.disposeEffect);
    React178.useEffect(function subscribeToToastManager() {
      if (!toastManager) {
        return void 0;
      }
      const unsubscribe = toastManager[" subscribe"](({
        action,
        options
      }) => {
        const id = options.id;
        if (action === "promise" && options.promise) {
          store.promiseToast(options.promise, options);
        } else if (action === "update" && id) {
          store.updateToast(id, options);
        } else if (action === "close") {
          store.closeToast(id);
        } else {
          store.addToast(options);
        }
      });
      return unsubscribe;
    }, [store, toastManager]);
    useIsoLayoutEffect(() => {
      store.syncProviderProps({
        timeout,
        limit
      });
    }, [store, timeout, limit]);
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ToastContext.Provider, {
      value: store,
      children
    });
  };
  if (true) ToastProvider.displayName = "ToastProvider";

  // node_modules/@base-ui/react/toast/viewport/ToastViewport.mjs
  init_define_import_meta_env();
  var React179 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/toast/viewport/ToastViewportCssVars.mjs
  init_define_import_meta_env();
  var ToastViewportCssVars = /* @__PURE__ */ (function(ToastViewportCssVars2) {
    ToastViewportCssVars2["frontmostHeight"] = "--toast-frontmost-height";
    return ToastViewportCssVars2;
  })({});

  // node_modules/@base-ui/react/toast/viewport/ToastViewport.mjs
  var import_jsx_runtime46 = __toESM(require_react_shim(), 1);
  var ToastViewport = /* @__PURE__ */ React179.forwardRef(function ToastViewport2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      children,
      ...elementProps
    } = componentProps;
    const store = useToastProviderContext();
    const windowFocusTimeout = useTimeout();
    const handlingFocusGuardRef = React179.useRef(false);
    const markedReadyForMouseLeaveRef = React179.useRef(false);
    const touchActiveRef = React179.useRef(false);
    const isEmpty = store.useState("isEmpty");
    const toasts = store.useState("toasts");
    const focused = store.useState("focused");
    const expanded = store.useState("expanded");
    const prevFocusElement = store.useState("prevFocusElement");
    const frontmostHeight = toasts[0]?.height ?? 0;
    const hasTransitioningToasts = React179.useMemo(() => toasts.some((toast2) => toast2.transitionStatus === "ending"), [toasts]);
    const highPriorityToasts = React179.useMemo(() => toasts.filter((toast2) => toast2.priority === "high"), [toasts]);
    React179.useEffect(() => {
      const viewport = store.state.viewport;
      if (!viewport) {
        return void 0;
      }
      function handleGlobalKeyDown(event) {
        if (isEmpty) {
          return;
        }
        if (event.key === "F6" && getTarget(event) !== viewport) {
          event.preventDefault();
          store.setPrevFocusElement(activeElement(ownerDocument(viewport)));
          viewport?.focus({
            preventScroll: true
          });
          store.pauseTimers();
          store.setFocused(true);
        }
      }
      const win = getWindow(viewport);
      return addEventListener(win, "keydown", handleGlobalKeyDown);
    }, [store, isEmpty]);
    React179.useEffect(() => {
      const viewport = store.state.viewport;
      if (!viewport || isEmpty) {
        return void 0;
      }
      const win = getWindow(viewport);
      function handleWindowBlur(event) {
        if (getTarget(event) !== win) {
          return;
        }
        store.setIsWindowFocused(false);
        store.pauseTimers();
      }
      function handleWindowFocus(event) {
        if (event.relatedTarget) {
          return;
        }
        const target = getTarget(event);
        const activeEl = activeElement(ownerDocument(viewport));
        if (target === win || !contains(viewport, target) || !matchesFocusVisible(activeEl)) {
          store.resumeTimers();
        }
        windowFocusTimeout.start(0, () => store.setIsWindowFocused(true));
      }
      return mergeCleanups(addEventListener(win, "blur", handleWindowBlur, true), addEventListener(win, "focus", handleWindowFocus, true));
    }, [
      store,
      windowFocusTimeout,
      // `store.state.viewport` isn't available on the first render,
      // since the portal node hasn't yet been created.
      // By adding this dependency, we ensure the window listeners
      // are added when toasts have been created, once the ref is available.
      isEmpty
    ]);
    React179.useEffect(() => {
      const viewport = store.state.viewport;
      if (!viewport || isEmpty) {
        return void 0;
      }
      const doc = ownerDocument(viewport);
      return addEventListener(doc, "pointerdown", store.handleDocumentPointerDown, true);
    }, [isEmpty, store]);
    function handleFocusGuard(event) {
      const viewport = store.state.viewport;
      if (!viewport) {
        return;
      }
      handlingFocusGuardRef.current = true;
      if (event.relatedTarget === viewport) {
        const firstFocusableToast = toasts.find((toast2) => toast2.transitionStatus !== "ending" && !toast2.limited);
        if (firstFocusableToast) {
          firstFocusableToast.ref?.current?.focus();
        } else {
          store.restoreFocusToPrevElement();
        }
      } else {
        store.restoreFocusToPrevElement();
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Tab" && event.shiftKey && getTarget(event.nativeEvent) === store.state.viewport) {
        event.preventDefault();
        store.restoreFocusToPrevElement();
        store.resumeTimers();
      }
    }
    function flushMouseLeave() {
      const hasEndingToasts = store.state.toasts.some((toast2) => toast2.transitionStatus === "ending");
      if (hasEndingToasts || touchActiveRef.current || !markedReadyForMouseLeaveRef.current) {
        return;
      }
      if (store.state.isWindowFocused) {
        store.resumeTimers();
      }
      store.setHovering(false);
      markedReadyForMouseLeaveRef.current = false;
    }
    React179.useEffect(flushMouseLeave, [hasTransitioningToasts, store]);
    function handleMouseEnter() {
      store.pauseTimers();
      store.setHovering(true);
      markedReadyForMouseLeaveRef.current = false;
    }
    function resumeTimersIfWindowFocused() {
      if (store.state.isWindowFocused) {
        store.resumeTimers();
      }
    }
    function handleMouseLeave() {
      const hasEndingToasts = store.state.toasts.some((toast2) => toast2.transitionStatus === "ending");
      if (hasEndingToasts || touchActiveRef.current) {
        markedReadyForMouseLeaveRef.current = true;
      } else {
        resumeTimersIfWindowFocused();
        store.setHovering(false);
      }
    }
    function handlePointerDown(event) {
      if (event.pointerType === "touch") {
        touchActiveRef.current = true;
      }
    }
    function handlePointerEnd(event) {
      if (event.pointerType !== "touch") {
        return;
      }
      touchActiveRef.current = false;
      flushMouseLeave();
    }
    function handleFocus() {
      if (handlingFocusGuardRef.current) {
        handlingFocusGuardRef.current = false;
        return;
      }
      if (focused) {
        return;
      }
      if (matchesFocusVisible(activeElement(ownerDocument(store.state.viewport)))) {
        store.setFocused(true);
        store.pauseTimers();
      }
    }
    function handleBlur(event) {
      if (!focused || contains(store.state.viewport, event.relatedTarget)) {
        return;
      }
      store.setFocused(false);
      resumeTimersIfWindowFocused();
    }
    const defaultProps = {
      tabIndex: -1,
      role: "region",
      "aria-live": "polite",
      "aria-atomic": false,
      "aria-relevant": "additions text",
      "aria-label": "Notifications",
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onClick: handleFocus,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerEnd,
      onPointerCancel: handlePointerEnd
    };
    const state = {
      expanded
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, store.setViewport],
      state,
      props: [defaultProps, {
        style: {
          [ToastViewportCssVars.frontmostHeight]: frontmostHeight ? `${frontmostHeight}px` : void 0
        }
      }, elementProps, {
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(React179.Fragment, {
          children: [!isEmpty && prevFocusElement && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FocusGuard, {
            onFocus: handleFocusGuard
          }), children, !isEmpty && prevFocusElement && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FocusGuard, {
            onFocus: handleFocusGuard
          })]
        })
      }]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(React179.Fragment, {
      children: [!isEmpty && prevFocusElement && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FocusGuard, {
        onFocus: handleFocusGuard
      }), element, !focused && highPriorityToasts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
        style: visuallyHidden,
        children: highPriorityToasts.map((toast2) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", {
          role: "alert",
          "aria-atomic": true,
          children: [/* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
            children: toast2.title
          }), /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
            children: toast2.description
          })]
        }, toast2.id))
      })]
    });
  });
  if (true) ToastViewport.displayName = "ToastViewport";

  // node_modules/@base-ui/react/toast/root/ToastRoot.mjs
  init_define_import_meta_env();
  var React182 = __toESM(require_react_shim(), 1);
  var ReactDOM8 = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/react/toast/root/ToastRootContext.mjs
  init_define_import_meta_env();
  var React180 = __toESM(require_react_shim(), 1);
  var ToastRootContext = /* @__PURE__ */ React180.createContext(void 0);
  if (true) ToastRootContext.displayName = "ToastRootContext";
  function useToastRootContext() {
    const context = React180.useContext(ToastRootContext);
    if (!context) {
      throw new Error(true ? "Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>." : formatErrorMessage_default(66));
    }
    return context;
  }

  // node_modules/@base-ui/react/toast/root/ToastRootCssVars.mjs
  init_define_import_meta_env();
  var ToastRootCssVars = /* @__PURE__ */ (function(ToastRootCssVars2) {
    ToastRootCssVars2["index"] = "--toast-index";
    ToastRootCssVars2["offsetY"] = "--toast-offset-y";
    ToastRootCssVars2["height"] = "--toast-height";
    ToastRootCssVars2["swipeMovementX"] = "--toast-swipe-movement-x";
    ToastRootCssVars2["swipeMovementY"] = "--toast-swipe-movement-y";
    return ToastRootCssVars2;
  })({});

  // node_modules/@base-ui/react/utils/useSwipeDismiss.mjs
  init_define_import_meta_env();
  var React181 = __toESM(require_react_shim(), 1);
  function getDisplacement(direction, deltaX, deltaY) {
    switch (direction) {
      case "up":
        return -deltaY;
      case "down":
        return deltaY;
      case "left":
        return -deltaX;
      case "right":
        return deltaX;
      default:
        return 0;
    }
  }
  function getElementTransform(element) {
    const computedStyle = getWindow(element).getComputedStyle(element);
    const transform = computedStyle.transform;
    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    if (transform && transform !== "none") {
      const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/);
      if (matrix) {
        const values = matrix[1].split(", ").map(parseFloat);
        if (values.length === 6) {
          translateX = values[4];
          translateY = values[5];
          scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
        } else if (values.length === 16) {
          translateX = values[12];
          translateY = values[13];
          scale = values[0];
        }
      }
    }
    return {
      x: translateX,
      y: translateY,
      scale
    };
  }

  // node_modules/@base-ui/react/toast/root/ToastRoot.mjs
  var import_jsx_runtime47 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping15 = {
    ...transitionStatusMapping,
    swipeDirection(value) {
      return value ? {
        "data-swipe-direction": value
      } : null;
    }
  };
  var SWIPE_THRESHOLD = 40;
  var REVERSE_CANCEL_THRESHOLD = 10;
  var OPPOSITE_DIRECTION_DAMPING_FACTOR = 0.5;
  var MIN_DRAG_THRESHOLD = 1;
  var TOAST_SWIPE_IGNORE_SELECTOR = `${BASE_UI_SWIPE_IGNORE_SELECTOR},${LEGACY_SWIPE_IGNORE_SELECTOR}`;
  var ToastRoot = /* @__PURE__ */ React182.forwardRef(function ToastRoot2(componentProps, forwardedRef) {
    const {
      toast: toast2,
      render,
      className,
      swipeDirection = ["down", "right"],
      style,
      ...elementProps
    } = componentProps;
    const isAnchored = toast2.positionerProps?.anchor !== void 0;
    let swipeDirections = [];
    if (!isAnchored) {
      swipeDirections = Array.isArray(swipeDirection) ? swipeDirection : [swipeDirection];
    }
    const swipeEnabled = swipeDirections.length > 0;
    const store = useToastProviderContext();
    const [currentSwipeDirection, setCurrentSwipeDirection] = React182.useState(void 0);
    const [isSwiping, setIsSwiping] = React182.useState(false);
    const [isRealSwipe, setIsRealSwipe] = React182.useState(false);
    const [dragDismissed, setDragDismissed] = React182.useState(false);
    const [dragOffset, setDragOffset] = React182.useState({
      x: 0,
      y: 0
    });
    const [initialTransform, setInitialTransform] = React182.useState({
      x: 0,
      y: 0,
      scale: 1
    });
    const [titleId, setTitleId] = React182.useState();
    const [descriptionId, setDescriptionId] = React182.useState();
    const [lockedDirection, setLockedDirection] = React182.useState(null);
    const rootRef = React182.useRef(null);
    const dragStartPosRef = React182.useRef({
      x: 0,
      y: 0
    });
    const initialTransformRef = React182.useRef({
      x: 0,
      y: 0,
      scale: 1
    });
    const intendedSwipeDirectionRef = React182.useRef(void 0);
    const maxSwipeDisplacementRef = React182.useRef(0);
    const cancelledSwipeRef = React182.useRef(false);
    const swipeCancelBaselineRef = React182.useRef({
      x: 0,
      y: 0
    });
    const isFirstPointerMoveRef = React182.useRef(false);
    const dragOffsetRef = React182.useRef({
      x: 0,
      y: 0
    });
    const activePointerIdRef = React182.useRef(null);
    const dragAbortControllerRef = React182.useRef(null);
    const domIndex = store.useState("toastIndex", toast2.id);
    const visibleIndex = store.useState("toastVisibleIndex", toast2.id);
    const offsetY = store.useState("toastOffsetY", toast2.id);
    const focused = store.useState("focused");
    const expanded = store.useState("expanded");
    useOpenChangeComplete({
      open: toast2.transitionStatus !== "ending",
      ref: rootRef,
      onComplete() {
        if (toast2.transitionStatus === "ending") {
          store.removeToast(toast2.id);
        }
      }
    });
    const recalculateHeight = useStableCallback((flushSync8 = false) => {
      const element2 = rootRef.current;
      if (!element2) {
        return;
      }
      const previousHeight = element2.style.height;
      element2.style.height = "auto";
      const height = element2.offsetHeight;
      element2.style.height = previousHeight;
      function update2() {
        store.updateToastInternal(toast2.id, {
          ref: rootRef,
          height,
          ...toast2.transitionStatus === "starting" ? {
            transitionStatus: void 0
          } : {}
        });
      }
      if (flushSync8) {
        ReactDOM8.flushSync(update2);
      } else {
        update2();
      }
    });
    useIsoLayoutEffect(recalculateHeight, [recalculateHeight]);
    function setResolvedDragOffset(nextDragOffset) {
      dragOffsetRef.current = nextDragOffset;
      setDragOffset(nextDragOffset);
    }
    useIsoLayoutEffect(() => {
      return () => {
        dragAbortControllerRef.current?.abort();
      };
    }, []);
    function applyDirectionalDamping(deltaX, deltaY) {
      let newDeltaX = deltaX;
      let newDeltaY = deltaY;
      if (!swipeDirections.includes("left") && !swipeDirections.includes("right")) {
        newDeltaX = deltaX > 0 ? deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
      } else {
        if (!swipeDirections.includes("right") && deltaX > 0) {
          newDeltaX = deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR;
        }
        if (!swipeDirections.includes("left") && deltaX < 0) {
          newDeltaX = -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
        }
      }
      if (!swipeDirections.includes("up") && !swipeDirections.includes("down")) {
        newDeltaY = deltaY > 0 ? deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
      } else {
        if (!swipeDirections.includes("down") && deltaY > 0) {
          newDeltaY = deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR;
        }
        if (!swipeDirections.includes("up") && deltaY < 0) {
          newDeltaY = -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
        }
      }
      return {
        x: newDeltaX,
        y: newDeltaY
      };
    }
    const handleSwipeEnd = useStableCallback((event) => {
      if (event.pointerId !== activePointerIdRef.current) {
        return;
      }
      activePointerIdRef.current = null;
      dragAbortControllerRef.current?.abort();
      dragAbortControllerRef.current = null;
      setIsSwiping(false);
      setIsRealSwipe(false);
      setLockedDirection(null);
      const resolvedInitialTransform = initialTransformRef.current;
      if (event.type === "pointercancel" || cancelledSwipeRef.current) {
        setResolvedDragOffset({
          x: resolvedInitialTransform.x,
          y: resolvedInitialTransform.y
        });
        setCurrentSwipeDirection(void 0);
        return;
      }
      let shouldClose = false;
      const resolvedDragOffset = dragOffsetRef.current;
      const deltaX = resolvedDragOffset.x - resolvedInitialTransform.x;
      const deltaY = resolvedDragOffset.y - resolvedInitialTransform.y;
      let dismissDirection;
      for (const direction of swipeDirections) {
        switch (direction) {
          case "right":
            if (deltaX > SWIPE_THRESHOLD) {
              shouldClose = true;
              dismissDirection = "right";
            }
            break;
          case "left":
            if (deltaX < -SWIPE_THRESHOLD) {
              shouldClose = true;
              dismissDirection = "left";
            }
            break;
          case "down":
            if (deltaY > SWIPE_THRESHOLD) {
              shouldClose = true;
              dismissDirection = "down";
            }
            break;
          case "up":
            if (deltaY < -SWIPE_THRESHOLD) {
              shouldClose = true;
              dismissDirection = "up";
            }
            break;
          default:
            break;
        }
        if (shouldClose) {
          break;
        }
      }
      if (shouldClose) {
        setCurrentSwipeDirection(dismissDirection);
        setDragDismissed(true);
        store.closeToast(toast2.id);
      } else {
        setResolvedDragOffset({
          x: resolvedInitialTransform.x,
          y: resolvedInitialTransform.y
        });
        setCurrentSwipeDirection(void 0);
      }
    });
    function handlePointerDown(event) {
      if (event.button !== 0) {
        return;
      }
      if (event.pointerType === "touch") {
        store.pauseTimers();
      }
      const target = getTarget(event.nativeEvent);
      const isInteractiveElement2 = target ? target.closest(`button,a,input,textarea,[role="button"],${TOAST_SWIPE_IGNORE_SELECTOR}`) : false;
      if (isInteractiveElement2) {
        return;
      }
      cancelledSwipeRef.current = false;
      intendedSwipeDirectionRef.current = void 0;
      maxSwipeDisplacementRef.current = 0;
      activePointerIdRef.current = event.pointerId;
      dragStartPosRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      swipeCancelBaselineRef.current = dragStartPosRef.current;
      if (rootRef.current) {
        const transform = getElementTransform(rootRef.current);
        initialTransformRef.current = transform;
        setInitialTransform(transform);
        setResolvedDragOffset({
          x: transform.x,
          y: transform.y
        });
      }
      store.setHovering(true);
      setIsSwiping(true);
      setIsRealSwipe(false);
      setLockedDirection(null);
      isFirstPointerMoveRef.current = true;
      const element2 = rootRef.current;
      if (element2) {
        dragAbortControllerRef.current?.abort();
        const dragAbortController = new AbortController();
        dragAbortControllerRef.current = dragAbortController;
        const doc = ownerDocument(element2);
        doc.addEventListener("pointerup", handleSwipeEnd, {
          signal: dragAbortController.signal
        });
        doc.addEventListener("pointercancel", handleSwipeEnd, {
          signal: dragAbortController.signal
        });
        element2.setPointerCapture?.(event.pointerId);
      }
    }
    function handlePointerMove(event) {
      if (event.pointerId !== activePointerIdRef.current) {
        return;
      }
      event.preventDefault();
      if (isFirstPointerMoveRef.current) {
        dragStartPosRef.current = {
          x: event.clientX,
          y: event.clientY
        };
        isFirstPointerMoveRef.current = false;
      }
      const {
        clientY,
        clientX,
        movementX,
        movementY
      } = event;
      if (movementY < 0 && clientY > swipeCancelBaselineRef.current.y || movementY > 0 && clientY < swipeCancelBaselineRef.current.y) {
        swipeCancelBaselineRef.current = {
          x: swipeCancelBaselineRef.current.x,
          y: clientY
        };
      }
      if (movementX < 0 && clientX > swipeCancelBaselineRef.current.x || movementX > 0 && clientX < swipeCancelBaselineRef.current.x) {
        swipeCancelBaselineRef.current = {
          x: clientX,
          y: swipeCancelBaselineRef.current.y
        };
      }
      const deltaX = clientX - dragStartPosRef.current.x;
      const deltaY = clientY - dragStartPosRef.current.y;
      const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
      const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
      if (!isRealSwipe) {
        const movementDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (movementDistance >= MIN_DRAG_THRESHOLD) {
          setIsRealSwipe(true);
          if (lockedDirection === null) {
            const hasHorizontal = swipeDirections.includes("left") || swipeDirections.includes("right");
            const hasVertical = swipeDirections.includes("up") || swipeDirections.includes("down");
            if (hasHorizontal && hasVertical) {
              const absX = Math.abs(deltaX);
              const absY = Math.abs(deltaY);
              setLockedDirection(absX > absY ? "horizontal" : "vertical");
            }
          }
        }
      }
      let candidate;
      if (!intendedSwipeDirectionRef.current) {
        if (lockedDirection === "vertical") {
          if (deltaY > 0) {
            candidate = "down";
          } else if (deltaY < 0) {
            candidate = "up";
          }
        } else if (lockedDirection === "horizontal") {
          if (deltaX > 0) {
            candidate = "right";
          } else if (deltaX < 0) {
            candidate = "left";
          }
        } else if (Math.abs(deltaX) >= Math.abs(deltaY)) {
          candidate = deltaX > 0 ? "right" : "left";
        } else {
          candidate = deltaY > 0 ? "down" : "up";
        }
        if (candidate && swipeDirections.includes(candidate)) {
          intendedSwipeDirectionRef.current = candidate;
          maxSwipeDisplacementRef.current = getDisplacement(candidate, deltaX, deltaY);
          setCurrentSwipeDirection(candidate);
        }
      } else {
        const direction = intendedSwipeDirectionRef.current;
        const currentDisplacement = getDisplacement(direction, cancelDeltaX, cancelDeltaY);
        if (currentDisplacement > SWIPE_THRESHOLD) {
          cancelledSwipeRef.current = false;
          setCurrentSwipeDirection(direction);
        } else if (!(swipeDirections.includes("left") && swipeDirections.includes("right")) && !(swipeDirections.includes("up") && swipeDirections.includes("down")) && maxSwipeDisplacementRef.current - currentDisplacement >= REVERSE_CANCEL_THRESHOLD) {
          cancelledSwipeRef.current = true;
        }
      }
      const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
      let newOffsetX = initialTransformRef.current.x;
      let newOffsetY = initialTransformRef.current.y;
      if (lockedDirection === "horizontal") {
        if (swipeDirections.includes("left") || swipeDirections.includes("right")) {
          newOffsetX += dampedDelta.x;
        }
      } else if (lockedDirection === "vertical") {
        if (swipeDirections.includes("up") || swipeDirections.includes("down")) {
          newOffsetY += dampedDelta.y;
        }
      } else {
        if (swipeDirections.includes("left") || swipeDirections.includes("right")) {
          newOffsetX += dampedDelta.x;
        }
        if (swipeDirections.includes("up") || swipeDirections.includes("down")) {
          newOffsetY += dampedDelta.y;
        }
      }
      setResolvedDragOffset({
        x: newOffsetX,
        y: newOffsetY
      });
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (!rootRef.current || !contains(rootRef.current, activeElement(ownerDocument(rootRef.current)))) {
          return;
        }
        store.closeToast(toast2.id);
      }
    }
    React182.useEffect(() => {
      if (!swipeEnabled) {
        return void 0;
      }
      const element2 = rootRef.current;
      if (!element2) {
        return void 0;
      }
      function preventDefaultTouchStart(event) {
        if (activePointerIdRef.current === null || !contains(element2, getTarget(event))) {
          return;
        }
        event.preventDefault();
      }
      return addEventListener(element2, "touchmove", preventDefaultTouchStart, {
        passive: false
      });
    }, [swipeEnabled]);
    function getDragStyles() {
      if (!isSwiping && dragOffset.x === initialTransform.x && dragOffset.y === initialTransform.y && !dragDismissed) {
        return {
          [ToastRootCssVars.swipeMovementX]: "0px",
          [ToastRootCssVars.swipeMovementY]: "0px"
        };
      }
      const deltaX = dragOffset.x - initialTransform.x;
      const deltaY = dragOffset.y - initialTransform.y;
      return {
        transition: isSwiping ? "none" : void 0,
        // While swiping, freeze the element at its current visual transform so it doesn't snap to the
        // end position.
        transform: isSwiping ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) scale(${initialTransform.scale})` : void 0,
        [ToastRootCssVars.swipeMovementX]: `${deltaX}px`,
        [ToastRootCssVars.swipeMovementY]: `${deltaY}px`
      };
    }
    const isHighPriority = toast2.priority === "high";
    const defaultProps = {
      role: isHighPriority ? "alertdialog" : "dialog",
      tabIndex: 0,
      "aria-modal": false,
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      "aria-hidden": isHighPriority && !focused ? true : void 0,
      onPointerDown: swipeEnabled ? handlePointerDown : void 0,
      onPointerMove: swipeEnabled ? handlePointerMove : void 0,
      onPointerUp: swipeEnabled ? handleSwipeEnd : void 0,
      onPointerCancel: swipeEnabled ? handleSwipeEnd : void 0,
      onKeyDown: handleKeyDown,
      inert: inertValue(toast2.limited),
      style: {
        ...getDragStyles(),
        [ToastRootCssVars.index]: toast2.transitionStatus === "ending" ? domIndex : visibleIndex,
        [ToastRootCssVars.offsetY]: `${offsetY}px`,
        [ToastRootCssVars.height]: toast2.height ? `${toast2.height}px` : void 0
      }
    };
    const toastRoot = React182.useMemo(() => ({
      rootRef,
      toast: toast2,
      titleId,
      setTitleId,
      descriptionId,
      setDescriptionId,
      swiping: isSwiping,
      swipeDirection: currentSwipeDirection,
      recalculateHeight,
      index: domIndex,
      visibleIndex,
      expanded
    }), [toast2, titleId, descriptionId, isSwiping, currentSwipeDirection, recalculateHeight, domIndex, visibleIndex, expanded]);
    const state = {
      transitionStatus: toast2.transitionStatus,
      expanded,
      limited: toast2.limited || false,
      type: toast2.type,
      swiping: toastRoot.swiping,
      swipeDirection: toastRoot.swipeDirection
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, toastRoot.rootRef],
      state,
      stateAttributesMapping: stateAttributesMapping15,
      props: [defaultProps, elementProps]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ToastRootContext.Provider, {
      value: toastRoot,
      children: element
    });
  });
  if (true) ToastRoot.displayName = "ToastRoot";

  // node_modules/@base-ui/react/toast/content/ToastContent.mjs
  init_define_import_meta_env();
  var React183 = __toESM(require_react_shim(), 1);
  var ToastContent = /* @__PURE__ */ React183.forwardRef(function ToastContent2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const {
      visibleIndex,
      expanded,
      recalculateHeight
    } = useToastRootContext();
    const contentRef = React183.useRef(null);
    useIsoLayoutEffect(() => {
      const node = contentRef.current;
      if (!node) {
        return void 0;
      }
      recalculateHeight();
      if (typeof ResizeObserver !== "function" || typeof MutationObserver !== "function") {
        return void 0;
      }
      const resizeObserver = new ResizeObserver(() => recalculateHeight(true));
      const mutationObserver = new MutationObserver(() => recalculateHeight(true));
      resizeObserver.observe(node);
      mutationObserver.observe(node, {
        childList: true,
        subtree: true,
        characterData: true
      });
      return () => {
        resizeObserver.disconnect();
        mutationObserver.disconnect();
      };
    }, [recalculateHeight]);
    const behind = visibleIndex > 0;
    const state = {
      expanded,
      behind
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, contentRef],
      state,
      props: elementProps
    });
    return element;
  });
  if (true) ToastContent.displayName = "ToastContent";

  // node_modules/@base-ui/react/toast/description/ToastDescription.mjs
  init_define_import_meta_env();
  var React184 = __toESM(require_react_shim(), 1);
  var ToastDescription = /* @__PURE__ */ React184.forwardRef(function ToastDescription2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      children: childrenProp,
      ...elementProps
    } = componentProps;
    const {
      toast: toast2,
      setDescriptionId
    } = useToastRootContext();
    const children = childrenProp ?? toast2.description;
    const shouldRender = Boolean(children);
    const id = useId(idProp);
    useIsoLayoutEffect(() => {
      if (!shouldRender) {
        return void 0;
      }
      setDescriptionId(id);
      return () => {
        setDescriptionId(void 0);
      };
    }, [shouldRender, id, setDescriptionId]);
    const state = {
      type: toast2.type
    };
    const element = useRenderElement("p", componentProps, {
      ref: forwardedRef,
      state,
      props: {
        ...elementProps,
        id,
        children
      }
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) ToastDescription.displayName = "ToastDescription";

  // node_modules/@base-ui/react/toast/title/ToastTitle.mjs
  init_define_import_meta_env();
  var React185 = __toESM(require_react_shim(), 1);
  var ToastTitle = /* @__PURE__ */ React185.forwardRef(function ToastTitle2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      children: childrenProp,
      ...elementProps
    } = componentProps;
    const {
      toast: toast2,
      setTitleId
    } = useToastRootContext();
    const children = childrenProp ?? toast2.title;
    const shouldRender = Boolean(children);
    const id = useId(idProp);
    useIsoLayoutEffect(() => {
      if (!shouldRender) {
        return void 0;
      }
      setTitleId(id);
      return () => {
        setTitleId(void 0);
      };
    }, [shouldRender, id, setTitleId]);
    const state = {
      type: toast2.type
    };
    const element = useRenderElement("h2", componentProps, {
      ref: forwardedRef,
      state,
      props: {
        ...elementProps,
        id,
        children
      }
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) ToastTitle.displayName = "ToastTitle";

  // node_modules/@base-ui/react/toast/close/ToastClose.mjs
  init_define_import_meta_env();
  var React186 = __toESM(require_react_shim(), 1);
  var ToastClose = /* @__PURE__ */ React186.forwardRef(function ToastClose2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabled2,
      nativeButton = true,
      ...elementProps
    } = componentProps;
    const store = useToastProviderContext();
    const {
      toast: toast2
    } = useToastRootContext();
    const expanded = store.useState("expanded");
    const [hasFocus, setHasFocus] = React186.useState(false);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    const state = {
      type: toast2.type
    };
    const element = useRenderElement("button", componentProps, {
      ref: [forwardedRef, buttonRef],
      state,
      props: [{
        "aria-hidden": !expanded && !hasFocus,
        onClick() {
          store.closeToast(toast2.id);
        },
        onFocus() {
          setHasFocus(true);
        },
        onBlur() {
          setHasFocus(false);
        }
      }, elementProps, getButtonProps]
    });
    return element;
  });
  if (true) ToastClose.displayName = "ToastClose";

  // node_modules/@base-ui/react/toast/action/ToastAction.mjs
  init_define_import_meta_env();
  var React187 = __toESM(require_react_shim(), 1);
  var ToastAction = /* @__PURE__ */ React187.forwardRef(function ToastAction2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabled2,
      nativeButton = true,
      ...elementProps
    } = componentProps;
    const {
      toast: toast2
    } = useToastRootContext();
    const computedChildren = toast2.actionProps?.children ?? elementProps.children;
    const shouldRender = Boolean(computedChildren);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    const state = {
      type: toast2.type
    };
    const element = useRenderElement("button", componentProps, {
      ref: [forwardedRef, buttonRef],
      state,
      props: [elementProps, toast2.actionProps, getButtonProps, {
        children: computedChildren
      }]
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) ToastAction.displayName = "ToastAction";

  // node_modules/@base-ui/react/toast/portal/ToastPortal.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/utils/FloatingPortalLite.mjs
  init_define_import_meta_env();
  var React188 = __toESM(require_react_shim(), 1);
  var ReactDOM9 = __toESM(require_react_dom_shim(), 1);
  var import_jsx_runtime48 = __toESM(require_react_shim(), 1);
  var FloatingPortalLite = /* @__PURE__ */ React188.forwardRef(function FloatingPortalLite2(componentProps, forwardedRef) {
    const {
      children,
      container,
      className,
      render,
      style,
      ...elementProps
    } = componentProps;
    const {
      portalNode,
      portalSubtree
    } = useFloatingPortalNode({
      container,
      ref: forwardedRef,
      componentProps,
      elementProps
    });
    if (!portalSubtree && !portalNode) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(React188.Fragment, {
      children: [portalSubtree, portalNode && /* @__PURE__ */ ReactDOM9.createPortal(children, portalNode)]
    });
  });
  if (true) FloatingPortalLite.displayName = "FloatingPortalLite";

  // node_modules/@base-ui/react/toast/portal/ToastPortal.mjs
  var ToastPortal = FloatingPortalLite;

  // node_modules/@base-ui/react/toast/positioner/ToastPositioner.mjs
  init_define_import_meta_env();
  var React190 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/toast/positioner/ToastPositionerContext.mjs
  init_define_import_meta_env();
  var React189 = __toESM(require_react_shim(), 1);
  var ToastPositionerContext = /* @__PURE__ */ React189.createContext(void 0);
  if (true) ToastPositionerContext.displayName = "ToastPositionerContext";
  function useToastPositionerContext() {
    const context = React189.useContext(ToastPositionerContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: ToastPositionerContext is missing. ToastPositioner parts must be placed within <Toast.Positioner>." : formatErrorMessage_default(84));
    }
    return context;
  }

  // node_modules/@base-ui/react/toast/positioner/ToastPositioner.mjs
  var import_jsx_runtime49 = __toESM(require_react_shim(), 1);
  var ToastPositioner = /* @__PURE__ */ React190.forwardRef(function ToastPositioner2(componentProps, forwardedRef) {
    const {
      toast: toast2,
      ...props
    } = componentProps;
    const store = useToastProviderContext();
    const positionerProps = toast2.positionerProps ?? EMPTY_OBJECT;
    const {
      render,
      className,
      anchor: anchorProp = positionerProps.anchor,
      positionMethod = positionerProps.positionMethod ?? "absolute",
      side = positionerProps.side ?? "top",
      align = positionerProps.align ?? "center",
      sideOffset = positionerProps.sideOffset ?? 0,
      alignOffset = positionerProps.alignOffset ?? 0,
      collisionBoundary = positionerProps.collisionBoundary ?? "clipping-ancestors",
      collisionPadding = positionerProps.collisionPadding ?? 5,
      arrowPadding = positionerProps.arrowPadding ?? 5,
      sticky = positionerProps.sticky ?? false,
      disableAnchorTracking = positionerProps.disableAnchorTracking ?? false,
      collisionAvoidance = positionerProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = props;
    const [positionerElement, setPositionerElement] = React190.useState(null);
    const domIndex = store.useState("toastIndex", toast2.id);
    const visibleIndex = store.useState("toastVisibleIndex", toast2.id);
    const anchor = isElement(anchorProp) ? anchorProp : null;
    const floatingRootContext = useFloatingRootContext({
      open: true,
      onOpenChange: NOOP,
      elements: {
        floating: positionerElement,
        reference: anchor
      }
    });
    const positioning = useAnchorPositioning({
      anchor,
      positionMethod,
      floatingRootContext,
      mounted: true,
      side,
      sideOffset,
      align,
      alignOffset,
      collisionBoundary,
      collisionPadding,
      sticky,
      arrowPadding,
      disableAnchorTracking,
      keepMounted: true,
      collisionAvoidance
    });
    const state = React190.useMemo(() => ({
      side: positioning.side,
      align: positioning.align,
      anchorHidden: positioning.anchorHidden
    }), [positioning.side, positioning.align, positioning.anchorHidden]);
    const element = usePositioner(componentProps, state, {
      styles: {
        ...positioning.positionerStyles,
        [ToastRootCssVars.index]: toast2.transitionStatus === "ending" ? domIndex : visibleIndex
      },
      transitionStatus: toast2.transitionStatus,
      props: elementProps,
      refs: [forwardedRef, setPositionerElement]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ToastPositionerContext.Provider, {
      value: positioning,
      children: element
    });
  });
  if (true) ToastPositioner.displayName = "ToastPositioner";

  // node_modules/@base-ui/react/toast/arrow/ToastArrow.mjs
  init_define_import_meta_env();
  var React191 = __toESM(require_react_shim(), 1);
  var ToastArrow = /* @__PURE__ */ React191.forwardRef(function ToastArrow2(componentProps, forwardedRef) {
    const {
      className,
      render,
      style,
      ...elementProps
    } = componentProps;
    const {
      arrowRef,
      side,
      align,
      arrowUncentered,
      arrowStyles
    } = useToastPositionerContext();
    const state = {
      side,
      align,
      uncentered: arrowUncentered
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, arrowRef],
      props: [{
        style: arrowStyles,
        "aria-hidden": true
      }, elementProps]
    });
    return element;
  });
  if (true) ToastArrow.displayName = "ToastArrow";

  // node_modules/@base-ui/react/toast/useToastManager.mjs
  init_define_import_meta_env();
  var React192 = __toESM(require_react_shim(), 1);
  function useToastManager() {
    const store = React192.useContext(ToastContext);
    if (!store) {
      throw new Error(true ? "Base UI: useToastManager must be used within <Toast.Provider>." : formatErrorMessage_default(73));
    }
    const toasts = store.useState("toasts");
    return React192.useMemo(() => ({
      toasts,
      add: store.addToast,
      close: store.closeToast,
      update: store.updateToast,
      promise: store.promiseToast
    }), [toasts, store]);
  }

  // node_modules/@base-ui/react/toast/createToastManager.mjs
  init_define_import_meta_env();
  function createToastManager() {
    const listeners2 = /* @__PURE__ */ new Set();
    function emit(data) {
      listeners2.forEach((listener) => listener(data));
    }
    return {
      // This should be private aside from ToastProvider needing to access it.
      // https://x.com/drosenwasser/status/1816947740032872664
      " subscribe": function subscribe2(listener) {
        listeners2.add(listener);
        return () => {
          listeners2.delete(listener);
        };
      },
      add(options) {
        const id = options.id || generateId("toast");
        const toastToAdd = {
          ...options,
          id,
          transitionStatus: "starting"
        };
        emit({
          action: "add",
          options: toastToAdd
        });
        return id;
      },
      close(id) {
        emit({
          action: "close",
          options: {
            id
          }
        });
      },
      update(id, updates) {
        emit({
          action: "update",
          options: {
            ...updates,
            id
          }
        });
      },
      promise(promiseValue, options) {
        let handledPromise = promiseValue;
        emit({
          action: "promise",
          options: {
            ...options,
            promise: promiseValue,
            setPromise(promise) {
              handledPromise = promise;
            }
          }
        });
        return handledPromise;
      }
    };
  }

  // src/components/ui/toast.tsx
  var ToastProvider3 = index_parts_exports7.Provider;
  var ToastViewport3 = (props) => /* @__PURE__ */ React193.createElement(
    index_parts_exports7.Viewport,
    {
      className: "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-105",
      ...props
    }
  );
  var toastVariants = cva(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-xl border p-4 pr-6 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
          success: "border-cyan-500/50 bg-cyan-500/10 text-cyan-500"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  var FALLBACK_TOAST = { id: "standalone-toast" };
  var Toast = React193.forwardRef(
    ({ className, variant, toast: toast2, ...props }, ref) => {
      return /* @__PURE__ */ React193.createElement(
        index_parts_exports7.Root,
        {
          ref,
          toast: toast2 ?? FALLBACK_TOAST,
          className: cn(toastVariants({ variant }), className),
          ...props
        }
      );
    }
  );
  Toast.displayName = "Toast";
  var ToastAction3 = React193.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React193.createElement(
    "button",
    {
      ref,
      className: cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      ),
      ...props
    }
  ));
  ToastAction3.displayName = "ToastAction";
  var ToastClose3 = React193.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React193.createElement(
    "button",
    {
      ref,
      className: cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      ),
      "toast-close": "",
      ...props
    },
    /* @__PURE__ */ React193.createElement(X, { className: "h-4 w-4" })
  ));
  ToastClose3.displayName = "ToastClose";
  var ToastTitle3 = React193.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React193.createElement(
    "div",
    {
      ref,
      className: cn("text-sm font-semibold [&+div]:text-xs", className),
      ...props
    }
  ));
  ToastTitle3.displayName = "ToastTitle";
  var ToastDescription3 = React193.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React193.createElement("div", { ref, className: cn("text-sm opacity-90", className), ...props }));
  ToastDescription3.displayName = "ToastDescription";

  // src/components/ui/toaster.tsx
  init_define_import_meta_env();

  // src/hooks/use-toast.ts
  init_define_import_meta_env();
  var React194 = __toESM(require_react_shim(), 1);
  var TOAST_LIMIT = 1;
  var TOAST_REMOVE_DELAY = 1e6;
  var count = 0;
  function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
  }
  var toastTimeouts = /* @__PURE__ */ new Map();
  var addToRemoveQueue = (toastId) => {
    if (toastTimeouts.has(toastId)) {
      return;
    }
    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId);
      dispatch({
        type: "REMOVE_TOAST",
        toastId
      });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
  };
  var reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TOAST":
        return {
          ...state,
          toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
        };
      case "UPDATE_TOAST":
        return {
          ...state,
          toasts: state.toasts.map(
            (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
          )
        };
      case "DISMISS_TOAST": {
        const { toastId } = action;
        if (toastId) {
          addToRemoveQueue(toastId);
        } else {
          state.toasts.forEach((toast2) => {
            addToRemoveQueue(toast2.id);
          });
        }
        return {
          ...state,
          toasts: state.toasts.map(
            (t) => t.id === toastId || toastId === void 0 ? {
              ...t,
              open: false
            } : t
          )
        };
      }
      case "REMOVE_TOAST":
        if (action.toastId === void 0) {
          return {
            ...state,
            toasts: []
          };
        }
        return {
          ...state,
          toasts: state.toasts.filter((t) => t.id !== action.toastId)
        };
    }
  };
  var listeners = [];
  var memoryState = { toasts: [] };
  function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => {
      listener(memoryState);
    });
  }
  function toast({ ...props }) {
    const id = genId();
    const update2 = (props2) => dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props2, id }
    });
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open) => {
          if (!open) dismiss();
        }
      }
    });
    return {
      id,
      dismiss,
      update: update2
    };
  }
  function useToast() {
    const [state, setState] = React194.useState(memoryState);
    React194.useEffect(() => {
      listeners.push(setState);
      return () => {
        const index2 = listeners.indexOf(setState);
        if (index2 > -1) {
          listeners.splice(index2, 1);
        }
      };
    }, []);
    return {
      ...state,
      toast,
      dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
    };
  }

  // src/components/ui/toaster.tsx
  function Toaster() {
    const { toasts } = useToast();
    return /* @__PURE__ */ React.createElement(ToastProvider3, null, toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ React.createElement(Toast, { key: id, ...props }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-1" }, title && /* @__PURE__ */ React.createElement(ToastTitle3, null, title), description && /* @__PURE__ */ React.createElement(ToastDescription3, null, description)), action, /* @__PURE__ */ React.createElement(ToastClose3, null));
    }), /* @__PURE__ */ React.createElement(ToastViewport3, null));
  }

  // src/components/ui/tooltip.tsx
  init_define_import_meta_env();
  var React208 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tooltip/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/tooltip/index.parts.mjs
  var index_parts_exports8 = {};
  __export(index_parts_exports8, {
    Arrow: () => TooltipArrow,
    Handle: () => TooltipHandle,
    Popup: () => TooltipPopup,
    Portal: () => TooltipPortal,
    Positioner: () => TooltipPositioner,
    Provider: () => TooltipProvider,
    Root: () => TooltipRoot,
    Trigger: () => TooltipTrigger,
    Viewport: () => TooltipViewport,
    createHandle: () => createTooltipHandle
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
  init_define_import_meta_env();
  var React197 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tooltip/root/TooltipRootContext.mjs
  init_define_import_meta_env();
  var React195 = __toESM(require_react_shim(), 1);
  var TooltipRootContext = /* @__PURE__ */ React195.createContext(void 0);
  if (true) TooltipRootContext.displayName = "TooltipRootContext";
  function useTooltipRootContext(optional) {
    const context = React195.useContext(TooltipRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>." : formatErrorMessage_default(72));
    }
    return context;
  }

  // node_modules/@base-ui/react/tooltip/store/TooltipStore.mjs
  init_define_import_meta_env();
  var React196 = __toESM(require_react_shim(), 1);
  var selectors6 = {
    ...popupStoreSelectors,
    disabled: createSelector((state) => state.disabled),
    instantType: createSelector((state) => state.instantType),
    isInstantPhase: createSelector((state) => state.isInstantPhase),
    trackCursorAxis: createSelector((state) => state.trackCursorAxis),
    disableHoverablePopup: createSelector((state) => state.disableHoverablePopup),
    lastOpenChangeReason: createSelector((state) => state.openChangeReason),
    closeOnClick: createSelector((state) => state.closeOnClick),
    closeDelay: createSelector((state) => state.closeDelay),
    hasViewport: createSelector((state) => state.hasViewport)
  };
  var TooltipStore = class _TooltipStore extends ReactStore {
    constructor(initialState, floatingId, nested = false) {
      const triggerElements = new PopupTriggerMap();
      const state = {
        ...createInitialState3(),
        ...initialState
      };
      state.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
      super(state, {
        popupRef: /* @__PURE__ */ React196.createRef(),
        onOpenChange: void 0,
        onOpenChangeComplete: void 0,
        triggerElements
      }, selectors6);
      __publicField(this, "setOpen", (nextOpen, eventDetails) => {
        applyPopupOpenChange(this, nextOpen, eventDetails, {
          extraState: {
            openChangeReason: eventDetails.reason
          }
        });
      });
    }
    // Used by trigger clicks to clear a delayed hover open without reporting a public open-state change.
    cancelPendingOpen(event) {
      this.state.floatingRootContext.dispatchOpenChange(false, createChangeEventDetails(reason_parts_exports.triggerPress, event));
    }
    static useStore(externalStore, initialState) {
      const store = usePopupStore(externalStore, (floatingId, nested) => new _TooltipStore(initialState, floatingId, nested)).store;
      return store;
    }
  };
  function createInitialState3() {
    return {
      ...createInitialPopupStoreState(),
      disabled: false,
      instantType: void 0,
      isInstantPhase: false,
      trackCursorAxis: "none",
      disableHoverablePopup: false,
      openChangeReason: null,
      closeOnClick: true,
      closeDelay: 0,
      hasViewport: false
    };
  }

  // node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
  var import_jsx_runtime50 = __toESM(require_react_shim(), 1);
  var TooltipRoot = fastComponent(function TooltipRoot2(props) {
    const {
      disabled: disabled2 = false,
      defaultOpen = false,
      open: openProp,
      disableHoverablePopup = false,
      trackCursorAxis = "none",
      actionsRef,
      onOpenChange,
      onOpenChangeComplete,
      handle,
      triggerId: triggerIdProp,
      defaultTriggerId: defaultTriggerIdProp = null,
      children
    } = props;
    const store = TooltipStore.useStore(handle?.store, {
      open: defaultOpen,
      openProp,
      activeTriggerId: defaultTriggerIdProp,
      triggerIdProp
    });
    useInitialOpenSync(store, openProp, defaultOpen, defaultTriggerIdProp);
    store.useControlledProp("openProp", openProp);
    store.useControlledProp("triggerIdProp", triggerIdProp);
    store.useContextCallback("onOpenChange", onOpenChange);
    store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
    const openState = store.useState("open");
    const open = !disabled2 && openState;
    const activeTriggerId = store.useState("activeTriggerId");
    const mounted = store.useState("mounted");
    const payload = store.useState("payload");
    store.useSyncedValues({
      trackCursorAxis,
      disableHoverablePopup
    });
    store.useSyncedValue("disabled", disabled2);
    useImplicitActiveTrigger(store, {
      closeOnActiveTriggerUnmount: true
    });
    const {
      forceUnmount,
      transitionStatus
    } = useOpenStateTransitions(open, store);
    const isInstantPhase = store.useState("isInstantPhase");
    const instantType = store.useState("instantType");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const previousInstantTypeRef = React197.useRef(null);
    useIsoLayoutEffect(() => {
      if (openState && disabled2) {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.disabled));
      }
    }, [openState, disabled2, store]);
    useIsoLayoutEffect(() => {
      if (transitionStatus === "ending" && lastOpenChangeReason === reason_parts_exports.none || transitionStatus !== "ending" && isInstantPhase) {
        if (instantType !== "delay") {
          previousInstantTypeRef.current = instantType;
        }
        store.set("instantType", "delay");
      } else if (previousInstantTypeRef.current !== null) {
        store.set("instantType", previousInstantTypeRef.current);
        previousInstantTypeRef.current = null;
      }
    }, [transitionStatus, isInstantPhase, lastOpenChangeReason, instantType, store]);
    useIsoLayoutEffect(() => {
      if (open) {
        if (activeTriggerId == null) {
          store.set("payload", void 0);
        }
      }
    }, [store, activeTriggerId, open]);
    const handleImperativeClose = React197.useCallback(() => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
    }, [store]);
    React197.useImperativeHandle(actionsRef, () => ({
      unmount: forceUnmount,
      close: handleImperativeClose
    }), [forceUnmount, handleImperativeClose]);
    const shouldRenderInteractions = open || mounted || !disabled2 && trackCursorAxis !== "none";
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(TooltipRootContext.Provider, {
      value: store,
      children: [shouldRenderInteractions && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(TooltipInteractions, {
        store,
        disabled: disabled2,
        trackCursorAxis
      }), typeof children === "function" ? children({
        payload
      }) : children]
    });
  });
  if (true) TooltipRoot.displayName = "TooltipRoot";
  function TooltipInteractions({
    store,
    disabled: disabled2,
    trackCursorAxis
  }) {
    const floatingRootContext = store.useState("floatingRootContext");
    const dismiss = useDismiss(floatingRootContext, {
      enabled: !disabled2,
      referencePress: () => store.select("closeOnClick")
    });
    const clientPoint = useClientPoint(floatingRootContext, {
      enabled: !disabled2 && trackCursorAxis !== "none",
      axis: trackCursorAxis === "none" ? void 0 : trackCursorAxis
    });
    const activeTriggerProps = React197.useMemo(() => mergeProps(clientPoint.reference, dismiss.reference), [clientPoint.reference, dismiss.reference]);
    const inactiveTriggerProps = React197.useMemo(() => mergeProps(clientPoint.trigger, dismiss.trigger), [clientPoint.trigger, dismiss.trigger]);
    const popupProps = React197.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, clientPoint.floating, dismiss.floating), [clientPoint.floating, dismiss.floating]);
    usePopupInteractionProps(store, {
      activeTriggerProps,
      inactiveTriggerProps,
      popupProps
    });
    return null;
  }

  // node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.mjs
  init_define_import_meta_env();
  var React199 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tooltip/provider/TooltipProviderContext.mjs
  init_define_import_meta_env();
  var React198 = __toESM(require_react_shim(), 1);
  var TooltipProviderContext = /* @__PURE__ */ React198.createContext(void 0);
  if (true) TooltipProviderContext.displayName = "TooltipProviderContext";
  function useTooltipProviderContext() {
    return React198.useContext(TooltipProviderContext);
  }

  // node_modules/@base-ui/react/tooltip/trigger/TooltipTriggerDataAttributes.mjs
  init_define_import_meta_env();
  var TooltipTriggerDataAttributes = (function(TooltipTriggerDataAttributes2) {
    TooltipTriggerDataAttributes2[TooltipTriggerDataAttributes2["popupOpen"] = CommonTriggerDataAttributes.popupOpen] = "popupOpen";
    TooltipTriggerDataAttributes2["triggerDisabled"] = "data-trigger-disabled";
    return TooltipTriggerDataAttributes2;
  })({});

  // node_modules/@base-ui/react/tooltip/utils/constants.mjs
  init_define_import_meta_env();
  var OPEN_DELAY = 600;

  // node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.mjs
  var TOOLTIP_TRIGGER_IDENTIFIER = "data-base-ui-tooltip-trigger";
  function getTargetElement(event) {
    if ("composedPath" in event) {
      const path = event.composedPath();
      for (let i = 0; i < path.length; i += 1) {
        const element = path[i];
        if (isElement(element)) {
          return element;
        }
      }
    }
    const target = event.target;
    if (isElement(target)) {
      return target;
    }
    return null;
  }
  function closestEnabledTooltipTrigger(element) {
    let current = element;
    while (current) {
      if (current.hasAttribute(TOOLTIP_TRIGGER_IDENTIFIER)) {
        return current;
      }
      const parentElement = current.parentElement;
      if (parentElement) {
        current = parentElement;
        continue;
      }
      const root = current.getRootNode();
      current = "host" in root && isElement(root.host) ? root.host : null;
    }
    return null;
  }
  var TooltipTrigger = fastComponentRef(function TooltipTrigger2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      handle,
      payload,
      disabled: disabledProp,
      delay,
      closeOnClick = true,
      closeDelay,
      id: idProp,
      ...elementProps
    } = componentProps;
    const rootContext = useTooltipRootContext(true);
    const store = handle?.store ?? rootContext;
    if (!store) {
      throw new Error(true ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : formatErrorMessage_default(82));
    }
    const thisTriggerId = useBaseUiId(idProp);
    const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
    const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
    const floatingRootContext = store.useState("floatingRootContext");
    const triggerElementRef = React199.useRef(null);
    const delayWithDefault = delay ?? OPEN_DELAY;
    const closeDelayWithDefault = closeDelay ?? 0;
    const {
      registerTrigger,
      isMountedByThisTrigger
    } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
      payload,
      closeOnClick,
      closeDelay: closeDelayWithDefault
    });
    const providerContext = useTooltipProviderContext();
    const {
      delayRef,
      isInstantPhase,
      hasProvider
    } = useDelayGroup(floatingRootContext, {
      open: isOpenedByThisTrigger
    });
    const hoverInteraction = useHoverInteractionSharedState(floatingRootContext);
    store.useSyncedValue("isInstantPhase", isInstantPhase);
    const rootDisabled = store.useState("disabled");
    const disabled2 = disabledProp ?? rootDisabled;
    const disabledRef = useValueAsRef(disabled2);
    const trackCursorAxis = store.useState("trackCursorAxis");
    const disableHoverablePopup = store.useState("disableHoverablePopup");
    const isNestedTriggerHoveredRef = React199.useRef(false);
    const nestedTriggerOpenTimeout = useTimeout();
    const pointerTypeRef = React199.useRef(void 0);
    function getOpenDelay() {
      const providerDelay = providerContext?.delay;
      const groupOpenValue = typeof delayRef.current === "object" ? delayRef.current.open : void 0;
      let computedOpenDelay = delayWithDefault;
      if (hasProvider) {
        if (groupOpenValue !== 0) {
          computedOpenDelay = delay ?? providerDelay ?? delayWithDefault;
        } else {
          computedOpenDelay = 0;
        }
      }
      return computedOpenDelay;
    }
    function isEnabledNestedTriggerTarget(target) {
      const triggerEl = triggerElementRef.current;
      if (!triggerEl || !target) {
        return false;
      }
      const nearestTrigger = closestEnabledTooltipTrigger(target);
      return nearestTrigger !== null && nearestTrigger !== triggerEl && contains(triggerEl, nearestTrigger);
    }
    function detectNestedTriggerHover(target) {
      const nestedTriggerHovered = isEnabledNestedTriggerTarget(target);
      isNestedTriggerHoveredRef.current = nestedTriggerHovered;
      if (nestedTriggerHovered) {
        hoverInteraction.openChangeTimeout.clear();
        hoverInteraction.restTimeout.clear();
        hoverInteraction.restTimeoutPending = false;
        nestedTriggerOpenTimeout.clear();
      }
      return nestedTriggerHovered;
    }
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
      enabled: !disabled2,
      mouseOnly: true,
      move: false,
      handleClose: !disableHoverablePopup && trackCursorAxis !== "both" ? safePolygon() : null,
      restMs: getOpenDelay,
      delay() {
        const closeValue = typeof delayRef.current === "object" ? delayRef.current.close : void 0;
        let computedCloseDelay = closeDelayWithDefault;
        if (closeDelay == null && hasProvider) {
          computedCloseDelay = closeValue;
        }
        return {
          close: computedCloseDelay
        };
      },
      triggerElementRef,
      isActiveTrigger: isTriggerActive,
      isClosing: () => store.select("transitionStatus") === "ending",
      shouldOpen() {
        return !isNestedTriggerHoveredRef.current;
      }
    });
    const focusProps = useFocus(floatingRootContext, {
      enabled: !disabled2
    }).reference;
    const handleNestedTriggerHover = (event) => {
      const wasNestedTriggerHovered = isNestedTriggerHoveredRef.current;
      const target = getTargetElement(event);
      const nestedTriggerHovered = detectNestedTriggerHover(target);
      const triggerEl = triggerElementRef.current;
      const targetInsideTrigger = triggerEl && target && contains(triggerEl, target);
      if (nestedTriggerHovered && store.select("open") && store.select("lastOpenChangeReason") === reason_parts_exports.triggerHover) {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
        return;
      }
      if (wasNestedTriggerHovered && !nestedTriggerHovered && targetInsideTrigger && !disabledRef.current && !store.select("open") && triggerEl && // Match the hover hook's non-strict mouse fallback for mouse-only event sequences.
      isMouseLikePointerType(pointerTypeRef.current)) {
        const open = () => {
          if (!isNestedTriggerHoveredRef.current && !disabledRef.current && !store.select("open")) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerEl));
          }
        };
        const openDelay = getOpenDelay();
        if (openDelay === 0) {
          nestedTriggerOpenTimeout.clear();
          open();
        } else {
          nestedTriggerOpenTimeout.start(openDelay, open);
        }
      }
    };
    const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
    const shouldApplyRootTriggerProps = isMountedByThisTrigger || trackCursorAxis !== "none";
    const state = {
      open: isOpenedByThisTrigger
    };
    const element = useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, registerTrigger, triggerElementRef],
      props: [hoverProps, focusProps, shouldApplyRootTriggerProps ? rootTriggerProps : void 0, {
        onMouseOver(event) {
          handleNestedTriggerHover(event.nativeEvent);
        },
        onFocus(event) {
          if (isEnabledNestedTriggerTarget(getTargetElement(event.nativeEvent))) {
            event.preventBaseUIHandler();
          }
        },
        onMouseLeave() {
          isNestedTriggerHoveredRef.current = false;
          nestedTriggerOpenTimeout.clear();
          pointerTypeRef.current = void 0;
        },
        onPointerEnter(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
          store.set("closeOnClick", closeOnClick);
          if (closeOnClick && !store.select("open")) {
            store.cancelPendingOpen(event.nativeEvent);
          }
        },
        onClick(event) {
          if (closeOnClick && !store.select("open")) {
            store.cancelPendingOpen(event.nativeEvent);
          }
        },
        id: thisTriggerId,
        [TooltipTriggerDataAttributes.triggerDisabled]: disabled2 ? "" : void 0,
        [TOOLTIP_TRIGGER_IDENTIFIER]: disabled2 ? void 0 : ""
      }, elementProps],
      stateAttributesMapping: triggerOpenStateMapping2
    });
    return element;
  });
  if (true) TooltipTrigger.displayName = "TooltipTrigger";

  // node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
  init_define_import_meta_env();
  var React201 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tooltip/portal/TooltipPortalContext.mjs
  init_define_import_meta_env();
  var React200 = __toESM(require_react_shim(), 1);
  var TooltipPortalContext = /* @__PURE__ */ React200.createContext(void 0);
  if (true) TooltipPortalContext.displayName = "TooltipPortalContext";
  function useTooltipPortalContext() {
    const value = React200.useContext(TooltipPortalContext);
    if (value === void 0) {
      throw new Error(true ? "Base UI: <Tooltip.Portal> is missing." : formatErrorMessage_default(70));
    }
    return value;
  }

  // node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
  var import_jsx_runtime51 = __toESM(require_react_shim(), 1);
  var TooltipPortal = /* @__PURE__ */ React201.forwardRef(function TooltipPortal2(props, forwardedRef) {
    const {
      keepMounted = false,
      ...portalProps
    } = props;
    const store = useTooltipRootContext();
    const mounted = store.useState("mounted");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(TooltipPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(FloatingPortalLite, {
        ref: forwardedRef,
        ...portalProps
      })
    });
  });
  if (true) TooltipPortal.displayName = "TooltipPortal";

  // node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
  init_define_import_meta_env();
  var React203 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tooltip/positioner/TooltipPositionerContext.mjs
  init_define_import_meta_env();
  var React202 = __toESM(require_react_shim(), 1);
  var TooltipPositionerContext = /* @__PURE__ */ React202.createContext(void 0);
  if (true) TooltipPositionerContext.displayName = "TooltipPositionerContext";
  function useTooltipPositionerContext() {
    const context = React202.useContext(TooltipPositionerContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>." : formatErrorMessage_default(71));
    }
    return context;
  }

  // node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
  var import_jsx_runtime52 = __toESM(require_react_shim(), 1);
  var TooltipPositioner = /* @__PURE__ */ React203.forwardRef(function TooltipPositioner2(componentProps, forwardedRef) {
    const {
      render,
      className,
      anchor,
      positionMethod = "absolute",
      side = "top",
      align = "center",
      sideOffset = 0,
      alignOffset = 0,
      collisionBoundary = "clipping-ancestors",
      collisionPadding = 5,
      arrowPadding = 5,
      sticky = false,
      disableAnchorTracking = false,
      collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = componentProps;
    const store = useTooltipRootContext();
    const keepMounted = useTooltipPortalContext();
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const trackCursorAxis = store.useState("trackCursorAxis");
    const disableHoverablePopup = store.useState("disableHoverablePopup");
    const floatingRootContext = store.useState("floatingRootContext");
    const instantType = store.useState("instantType");
    const transitionStatus = store.useState("transitionStatus");
    const hasViewport = store.useState("hasViewport");
    const positioning = useAnchorPositioning({
      anchor,
      positionMethod,
      floatingRootContext,
      mounted,
      side,
      sideOffset,
      align,
      alignOffset,
      collisionBoundary,
      collisionPadding,
      sticky,
      arrowPadding,
      disableAnchorTracking,
      keepMounted,
      collisionAvoidance,
      adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
    });
    const state = React203.useMemo(() => ({
      open,
      side: positioning.side,
      align: positioning.align,
      anchorHidden: positioning.anchorHidden,
      instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType
    }), [open, positioning.side, positioning.align, positioning.anchorHidden, trackCursorAxis, instantType]);
    const element = usePositioner(componentProps, state, {
      styles: positioning.positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, store.useStateSetter("positionerElement")],
      hidden: !mounted,
      inert: !open || trackCursorAxis === "both" || disableHoverablePopup
    });
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TooltipPositionerContext.Provider, {
      value: positioning,
      children: element
    });
  });
  if (true) TooltipPositioner.displayName = "TooltipPositioner";

  // node_modules/@base-ui/react/tooltip/popup/TooltipPopup.mjs
  init_define_import_meta_env();
  var React204 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping16 = {
    ...popupStateMapping,
    ...transitionStatusMapping
  };
  var TooltipPopup = /* @__PURE__ */ React204.forwardRef(function TooltipPopup2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const store = useTooltipRootContext();
    const {
      side,
      align
    } = useTooltipPositionerContext();
    const open = store.useState("open");
    const instantType = store.useState("instantType");
    const transitionStatus = store.useState("transitionStatus");
    const popupProps = store.useState("popupProps");
    const floatingContext = store.useState("floatingRootContext");
    const disabled2 = store.useState("disabled");
    const closeDelay = store.useState("closeDelay");
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      }
    });
    useHoverFloatingInteraction(floatingContext, {
      enabled: !disabled2,
      closeDelay
    });
    const setPopupElement = store.useStateSetter("popupElement");
    const state = {
      open,
      side,
      align,
      instant: instantType,
      transitionStatus
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, store.context.popupRef, setPopupElement],
      props: [popupProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
      stateAttributesMapping: stateAttributesMapping16
    });
    return element;
  });
  if (true) TooltipPopup.displayName = "TooltipPopup";

  // node_modules/@base-ui/react/tooltip/arrow/TooltipArrow.mjs
  init_define_import_meta_env();
  var React205 = __toESM(require_react_shim(), 1);
  var TooltipArrow = /* @__PURE__ */ React205.forwardRef(function TooltipArrow2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      ...elementProps
    } = componentProps;
    const store = useTooltipRootContext();
    const {
      arrowRef,
      side,
      align,
      arrowUncentered,
      arrowStyles
    } = useTooltipPositionerContext();
    const open = store.useState("open");
    const instantType = store.useState("instantType");
    const state = {
      open,
      side,
      align,
      uncentered: arrowUncentered,
      instant: instantType
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, arrowRef],
      props: [{
        style: arrowStyles,
        "aria-hidden": true
      }, elementProps],
      stateAttributesMapping: popupStateMapping
    });
    return element;
  });
  if (true) TooltipArrow.displayName = "TooltipArrow";

  // node_modules/@base-ui/react/tooltip/provider/TooltipProvider.mjs
  init_define_import_meta_env();
  var React206 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime53 = __toESM(require_react_shim(), 1);
  var TooltipProvider = function TooltipProvider2(props) {
    const {
      delay,
      closeDelay,
      timeout = 400
    } = props;
    const contextValue = React206.useMemo(() => ({
      delay,
      closeDelay
    }), [delay, closeDelay]);
    const delayValue = React206.useMemo(() => ({
      open: delay,
      close: closeDelay
    }), [delay, closeDelay]);
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(TooltipProviderContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(FloatingDelayGroup, {
        delay: delayValue,
        timeoutMs: timeout,
        children: props.children
      })
    });
  };
  if (true) TooltipProvider.displayName = "TooltipProvider";

  // node_modules/@base-ui/react/tooltip/viewport/TooltipViewport.mjs
  init_define_import_meta_env();
  var React207 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/tooltip/viewport/TooltipViewportCssVars.mjs
  init_define_import_meta_env();
  var TooltipViewportCssVars = /* @__PURE__ */ (function(TooltipViewportCssVars2) {
    TooltipViewportCssVars2["popupWidth"] = "--popup-width";
    TooltipViewportCssVars2["popupHeight"] = "--popup-height";
    return TooltipViewportCssVars2;
  })({});

  // node_modules/@base-ui/react/tooltip/viewport/TooltipViewport.mjs
  var stateAttributesMapping17 = {
    activationDirection: (value) => value ? {
      "data-activation-direction": value
    } : null
  };
  var TooltipViewport = /* @__PURE__ */ React207.forwardRef(function TooltipViewport2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      children,
      ...elementProps
    } = componentProps;
    const store = useTooltipRootContext();
    const positioner = useTooltipPositionerContext();
    const instantType = store.useState("instantType");
    const {
      children: childrenToRender,
      state: viewportState
    } = usePopupViewport({
      store,
      side: positioner.side,
      cssVars: TooltipViewportCssVars,
      children
    });
    const state = {
      activationDirection: viewportState.activationDirection,
      transitioning: viewportState.transitioning,
      instant: instantType
    };
    return useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: [elementProps, {
        children: childrenToRender
      }],
      stateAttributesMapping: stateAttributesMapping17
    });
  });
  if (true) TooltipViewport.displayName = "TooltipViewport";

  // node_modules/@base-ui/react/tooltip/store/TooltipHandle.mjs
  init_define_import_meta_env();
  var TooltipHandle = class {
    /**
     * Internal store holding the tooltip state.
     * @internal
     */
    constructor() {
      this.store = new TooltipStore();
    }
    /**
     * Opens the tooltip and associates it with the trigger with the given ID.
     * The trigger must be a Tooltip.Trigger component with this handle passed as a prop.
     *
     * This method should only be called in an event handler or an effect (not during rendering).
     *
     * @param triggerId ID of the trigger to associate with the tooltip.
     */
    open(triggerId) {
      const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
      if (triggerId && !triggerElement) {
        throw new Error(true ? `Base UI: TooltipHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(81, triggerId));
      }
      this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
    }
    /**
     * Closes the tooltip.
     */
    close() {
      this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
    }
    /**
     * Indicates whether the tooltip is currently open.
     */
    get isOpen() {
      return this.store.select("open");
    }
  };
  function createTooltipHandle() {
    return new TooltipHandle();
  }

  // src/components/ui/tooltip.tsx
  var TooltipProvider3 = index_parts_exports8.Provider;
  var Tooltip = index_parts_exports8.Root;
  function TooltipTrigger3({
    asChild = false,
    className,
    children,
    ...props
  }) {
    if (asChild && React208.isValidElement(children)) {
      return React208.cloneElement(children, {
        ...props,
        className: cn(children.props.className, className)
      });
    }
    return /* @__PURE__ */ React208.createElement(index_parts_exports8.Trigger, { className, ...props }, children);
  }
  function TooltipContent({
    className,
    sideOffset = 4,
    side = "top",
    ...props
  }) {
    return /* @__PURE__ */ React208.createElement(index_parts_exports8.Portal, null, /* @__PURE__ */ React208.createElement(index_parts_exports8.Positioner, { sideOffset, side }, /* @__PURE__ */ React208.createElement(
      index_parts_exports8.Popup,
      {
        "data-slot": "tooltip-content",
        className: cn(
          "z-50 overflow-hidden rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        ...props
      }
    )));
  }
  return __toCommonJS(index_exports);
})();
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/chevron-right.mjs:
lucide-react/dist/esm/icons/chevron-up.mjs:
lucide-react/dist/esm/icons/circle.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.21.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
window.MlaiLab=MlaiLab.__dsMainNs?Object.assign({},MlaiLab,MlaiLab.__dsMainNs,{__dsMainNs:undefined}):MlaiLab;
