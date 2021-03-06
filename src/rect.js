let c = require('./constraint');

// use a decorator with the descriptor
let desc = {
    x: 'var',
    y: 'var',
    w: 'fixed',
    h: 'fixed',
    left: 'getter',
    right: 'getter',
    top: 'getter',
    bottom: 'getter',
    center: 'getter'
};

// TODO: pass solver as param to the decorator too
@c.decorateClass(desc)
class Rect {
    constructor(x, y, w, h) {
        Object.assign(this, { x, y, w, h });
    }

    get left() {
        return this.x;
    }

    get right() {
        return this.x + this.w;
    }

    get top() {
        return this.y;
    }

    get bottom() {
        return this.y + this.h;
    }

    get center() {
        return this.x + this.w / 2;
    }

    toString() {
        return `{ x:${this.x}, y:${this.y}, w:${this.w}, h:${this.h} }`;
    }
}

module.exports = Rect;
