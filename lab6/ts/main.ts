import { application } from "./Application";

window.onload = (): void => {
    const app: application = new application();
    const startTime: number = performance.now();
    app.startDraw();
    const timeTaken: number = performance.now() - startTime;
    alert(timeTaken);
};

