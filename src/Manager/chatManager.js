export default class MemoryContainer{
    constructor(){
        this.data = []
    }
    getAll = () =>{
        return this.data
    }
    save = (dato) =>{
        this.data.push(dato)
    }
}