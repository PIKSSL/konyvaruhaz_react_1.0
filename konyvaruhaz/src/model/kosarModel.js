class KosarModel{
    #kosar = []
    #osszar=0;
    constructor(kosar){
        this.#kosar = kosar;
        this.#osszar=0;
    }

    getKosar(){
        return this.#kosar;
    }
    getDb(){
        return this.#kosar.length;
    }
    getOssz(){
        for (const elem of this.#kosar) {
            if(elem.db > 1){
                this.#osszar+=elem.ar*elem.db;
            }else{
                this.#osszar+=elem.ar;
            }
            
        }
        return this.#osszar;
    }
    

    setKosar(adat){
        let azonos = this.#kosar.findIndex((elem)=>{
            return elem.id==adat.id;
        });
        if (azonos>=0) {
            this.#kosar[azonos].db++;

        }else{
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length-1].db=1;
        }
        console.log(this.#kosar);
        
    }
    inc(adat){
        let azonos = this.#kosar.findIndex((elem)=>{
            return elem.id==adat.id;
        });
        if(azonos >=0){
            this.#kosar[azonos].db++;
        }
    }
}

export default KosarModel;