import {Meme} from "./app.js"

class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner,memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    };

    add (meme) {
        if (meme instanceof Meme) {
             this.memes.push(meme);
        }
    }
    update (id, data) {
        if (this.id === id) {
            this.name = data.name;
            this.owner = data.owner;
            console.log(`ten moi la: ${this.name} --- ten chu moi la: ${this.owner}`);
        }
    }
    delete (id) {
        if (this.id === id) {
          delete this.memes
            console.log(`meme moi la: ${this.memes}`);

        }
    }
    show() {
        console.log(`
        ten cua meme la ${this.name}
        hinh anh cua meme la ${this.owner}
        Ngay tao meme la ${this.memes}
        `);
    }
}
let bb = new MemeCollection (1, 'labc','linh')
let cc = new MemeCollection (2, 'deef', 'Nhung')
bb.memes = [1,3,45,6,7]
cc.memes = ['c','ds','dsa']
bb.update(1,{name: 'kingkong',owner:'mario'})
bb.delete(1)
cc.show()
