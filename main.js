import "./src/lib/logger.js";
import App from "./src/components/App/App.js";

document.addEventListener('DOMContentLoaded', () => {
    const app = new App(document.getElementById("App"));
})
