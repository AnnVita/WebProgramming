const CANVAS_ID = "canvas";

const MIN_X: number = -1.7433419053321 - 0.00000000374 / 2;
const MAX_X: number = -1.7433419053321 + 0.00000000374 / 2;
const MIN_Y: number = 0.0000907687489 - 0.00000000374 / 2;
const MAX_Y: number = 0.0000907687489 + 0.00000000374 / 2;
const WIDTH: number = 800;
const HEIGHT: number = 800;
const ITERATIONS: number = 1000;
const ESCAPE_RADIUS: number = 4; 

const CR_STEP: number = (MAX_X - MIN_X) / WIDTH;
const CI_STEP: number = (MAX_Y - MIN_Y) / HEIGHT;

export class application {
    private target: HTMLCanvasElement;
    private canvas: CanvasRenderingContext2D;

    constructor() {
        this.target = document.getElementById(CANVAS_ID) as HTMLCanvasElement; 
        this.target.width = WIDTH;
        this.target.height = HEIGHT;
        this.canvas = this.target.getContext("2d");
        this.canvas.lineJoin = "miter";
        this.canvas.lineCap = "square";
    }

    public startDraw(): void {
        for (let y = 0; y < HEIGHT; y++)
        {
            for (let x = 0; x < WIDTH; x++)
            {
                const Cr: number = MIN_X + CR_STEP * x;
                const Ci: number = MIN_Y + CI_STEP * y;

                let Zr: number = 0;
                let Zi: number = 0;
                let Tr: number = 0;
                let Ti: number = 0;
                let n: number = 0;

                for (; n < ITERATIONS && (Tr + Ti) <= ESCAPE_RADIUS; ++n)
                {
                    Zi = 2.0 * Zr * Zi + Ci;
                    Zr = Tr - Ti + Cr;
                    Tr = Zr * Zr;
                    Ti = Zi * Zi;
                }

                let color: number;
                let hexColor: string = "#0000";
                if (n == ITERATIONS)
                {
                    color = 0;
                }
                else
                {
                    color = Math.floor(255 * n / ITERATIONS)
                }
                if (color < 9) {
                    hexColor += "0" + color.toString(16);
                }
                else
                {
                    hexColor += color.toString(16)
                }
                this.canvas.fillStyle = hexColor;
                this.canvas.fillRect(x, y, 1, 1);
            }
        }
    }
}
