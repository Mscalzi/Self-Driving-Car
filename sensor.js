class Sensor {
    constructor(car) {
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI / 4;

        this.rays = [
            [{
                "x": 100,
                "y": 100
            }, {
                "x": 61.731656763491024,
                "y": 7.612046748871322
            }],
            [{
                "x": 100,
                "y": 100
            }, {
                "x": 100,
                "y": 0
            }],
            [{
                "x": 100,
                "y": 100
            }, {
                "x": 138.26834323650897,
                "y": 7.612046748871322
            }],
        ];
        console.log(this.rays, 'rays in constructor()')
    }

    update() {

        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                i / (this.rayCount - 1)
            )+this.car.angle;

            const start = { x: this.car.x, y: this.car.y };
            // console.log(start, 'start from update() in sensor.js')
            const end = {
                x: this.car.x -
                    Math.sin(rayAngle) * this.rayLength,
                y: this.car.y -
                    Math.cos(rayAngle) * this.rayLength
            };
            // console.log([start, end])
            this.rays.push([start, end]);




        }
        console.log(this.rays, 'this.rays in update')

    }

    draw(ctx) {
        console.log(this.rays, 'this.rays in draw()')
        for (let i = 0; i < this.rayCount; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            );

            ctx.stroke();
        }
    }

}
