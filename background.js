// Firefox/Chrome compatibility shim
const browserAPI = window.browser || window.chrome;

const GOOGLE_DOCS_URL = "https://docs.google.com/document/";

const APP_STATES = {
  OFF: { iconSet: "default" },
  LIGHT: { iconSet: "light", requiredCss: ["css/default.css"] },
};

const allCssFiles = Array.from(Object.values(APP_STATES).reduce((files, state) => {
  state.requiredCss && state.requiredCss.forEach((file) => files.add(file));
  return files;
}, new Set()));

const ORDERED_STATES = [APP_STATES.OFF, APP_STATES.LIGHT];

let currentState = APP_STATES.OFF;

const setIcon = async (state) => {
  await browserAPI.browserAction.setIcon({
    path: {
      16: `images/icons/${state.iconSet}/icon-16.png`,
      48: `images/icons/${state.iconSet}/icon-48.png`,
      128: `images/icons/${state.iconSet}/icon-128.png`,
    },
  });
};

// set the initial icon
browserAPI.runtime.onInstalled.addListener(() => {
  setIcon(currentState);
});

browserAPI.browserAction.onClicked.addListener(async (tab) => {
  // If the current tab is not a Google Docs tab, return
  if (!tab.url.startsWith(GOOGLE_DOCS_URL)) {
    return;
  }
  // cycle through the states to the next state
  const nextState =
    ORDERED_STATES[
      (ORDERED_STATES.indexOf(currentState) + 1) % ORDERED_STATES.length
    ];

  // update the current state
  currentState = nextState;

  // update the icon
  await setIcon(currentState);
  const target = { tabId: tab.id };

  // apply the corresponding CSS file
  await browserAPI.scripting.removeCSS({ target, files: allCssFiles });
  nextState.requiredCss &&
    (await browserAPI.scripting.insertCSS({ target, files: nextState.requiredCss }));
});
