function parseCount(arg) {
    let result = Number.parseFloat(arg);
    if(isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(arg){
    try{
        return parseCount(arg);
    } catch(error){
        return error;
    }
        
}


class Triangle {
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        
        if(sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA ){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        
    }
    get perimetr(){
        return this.sideA + this.sideB + this.sideC;
    }
    
    get area(){
        let p = this.perimetr * 0.5;
        let s = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        let result = s.toFixed(3);
        result = Number(result);
        return result;
    }

}


function getTriangle(sideA, sideB, sideC){
   try{
    return new Triangle(sideA, sideB, sideC);
   } catch (error){
        return obj = {
        get perimetr() {
                return "Ошибка! Треугольник не существует";
            },
        get area(){
                return "Ошибка! Треугольник не существует";
            }
        }
    
   }
}