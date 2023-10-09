function parseCount (num) {
    if(isNaN(num)) {
        throw new Error("Невалидное значение");
    }
        return Number.parseFloat(num);
    
}

function validateCount(num) {
    try {
        return parseCount(num);
    }
    catch(err) {
        return err;
    };
}

class Triangle {
    constructor(a, b, c) {
        if(((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        else {
            this.a = a;
            this.b = b;
            this.c = c;
    };
}   

get perimeter() {
    return this.a + this.b + this.c; 
}

get area () {
    const p = this.perimeter / 2   
    return  Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    };
}

function getTriangle (a, b, c) {
    try {
        let trg = new Triangle(a, b, c);
        return trg;
    }
    catch (error) {
        let err = {
            get perimeter() {
               return "Ошибка! Треугольник не существует";
            },
            get area() {
               return "Ошибка! Треугольник не существует";
            }
        }
        return err;
    }
}    