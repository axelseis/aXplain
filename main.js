import { init as initLogger,log } from "./src/lib/logger.js";
import App from "./src/components/App/App.js";

document.addEventListener('DOMContentLoaded', () => {
    initLogger();
    const app = new App(document.getElementById("App"));
    log(`inited ${app.name}`)
})
