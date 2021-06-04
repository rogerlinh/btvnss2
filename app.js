//Bai 1:
export class Meme {
    id;
    name;
    image;
    dateModified;
    constructor(id,name,image,dateModified){
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }

    show() {
        console.log(`
        ten cua meme la ${this.name}
        hinh anh cua meme la ${this.image}
        Ngay tao meme la ${this.dateModified}
        `);
    }

    update(data) {
        this.name = data.name;
        this.image = data.image
        console.log(`
        ten cua meme la ${this.name}
        hinh anh cua meme la ${this.image}
        Ngay tao meme la ${this.dateModified}
        `);
    }

}

let a = new Meme (1, 'halo', 'picture url', '20/2/1993')
a.update({name: 'abc', image: 'deff'})
