import { init as initLogger,log } from "./src/lib/logger.js";
import OLApp from "./src/ordered_list/App/App.js";
import IGApp from "./src/images_gallery/App/App.js";

const demos = {
    images_gallery: IGApp,
    ordered_list: OLApp
}

document.addEventListener('DOMContentLoaded', () => {
    initLogger();
    const app = new demos[window.PROJECT_ID || 'images_gallery'](document.getElementById("App"));
    log(`inited ${app.name}`)
})
