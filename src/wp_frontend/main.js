import { init as initLogger,log } from "../lib/logger.js";
import App from "./App/App.js";

document.addEventListener('DOMContentLoaded', () => {
    initLogger();
    const app = new App(document.getElementById("App"));
    log(`inited ${app.name}`)
})
