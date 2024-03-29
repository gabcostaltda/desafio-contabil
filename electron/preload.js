const { contextBridge, ipcRenderer } = require("electron");
const eventEmitters = require("./src/infra/electron/event");

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", async () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  contextBridge.exposeInMainWorld("versions", process.versions);
  console.log("Bem vindo ao Contabilize! 📈");
  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

contextBridge.exposeInMainWorld("contabilizeApi", {
  eventEmitters,
  event_channels: import("./src/electron-event-channels"),
});

// Async listeners
ipcRenderer.once("contasObtidas", (event, contas) => contas);
