/**
 * Copyright 2012- Takeshi Arabiki
 * License: MIT License (http://opensource.org/licenses/MIT)
 */

(function() {
    CanvasRenderingContext2D.prototype._transform = [1, 0, 0, 1, 0, 0];
    CanvasRenderingContext2D.prototype._transforms = [];

    CanvasRenderingContext2D.prototype.getTransform = function() {
        return this._transform;
    };

    var restore = CanvasRenderingContext2D.prototype.restore;
    CanvasRenderingContext2D.prototype.restore = function() {
        this._transform = this._transforms.pop() || [1, 0, 0, 1, 0, 0];
        restore.apply(this);
    };

    // |   |   |                            | |   |
    // | x'|   | cos(angle)  -sin(angle)  0 | | x |
    // |   |   |                            | |   |
    // | y'| = | sin(angle)   cos(angle)  0 | | y |
    // |   |   |                            | |   |
    // | 1 |   |     0             0      1 | | 1 |
    // |   |   |                            | |   |
    var rotate = CanvasRenderingContext2D.prototype.rotate;
    CanvasRenderingContext2D.prototype.rotate = function(angle) {
        var t = [Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0];
        this._transform = multiplyTransform(this._transform, t);
        rotate.apply(this, arguments);
    };

    var save = CanvasRenderingContext2D.prototype.save;
    CanvasRenderingContext2D.prototype.save = function() {
        this._transforms.push(this._transform.slice());
        save.apply(this);
    };

    // |   |   |         | |   |
    // | x'|   | sx 0  0 | | x |
    // |   |   |         | |   |
    // | y'| = | 0  sy 0 | | y |
    // |   |   |         | |   |
    // | 1 |   | 0  0  1 | | 1 |
    // |   |   |         | |   |
    var scale = CanvasRenderingContext2D.prototype.scale;
    CanvasRenderingContext2D.prototype.scale = function(sx, sy) {
        this._transform = multiplyTransform(this._transform, [sx, 0, 0, sy, 0, 0]);
        scale.apply(this, arguments);
    };

    var setTransform = CanvasRenderingContext2D.prototype.setTransform;
    CanvasRenderingContext2D.prototype.setTransform = function(a, b, c, d, e, f) {
        this._transform = Array.prototype.slice.apply(arguments);
        setTransform.apply(this, arguments);
    };

    // |   |   |          | |   |
    // | x'|   | 1  0  tx | | x |
    // |   |   |          | |   |
    // | y'| = | 0  1  ty | | y |
    // |   |   |          | |   |
    // | 1 |   | 0  0  1  | | 1 |
    // |   |   |          | |   |
    var translate = CanvasRenderingContext2D.prototype.translate;
    CanvasRenderingContext2D.prototype.translate = function(tx, ty) {
        this._transform = multiplyTransform(this._transform, [1, 0, 0, 1, tx, ty]);
        translate.apply(this, arguments);
    };

    // |   |   |         | |   |
    // | x'|   | a  c  e | | x |
    // |   |   |         | |   |
    // | y'| = | b  d  f | | y |
    // |   |   |         | |   |
    // | 1 |   | 0  0  1 | | 1 |
    // |   |   |         | |   |
    var transform = CanvasRenderingContext2D.prototype.transform;
    CanvasRenderingContext2D.prototype.transform = function(a, b, c, d, e, f) {
        this._transform = multiplyTransform.call(this, this._transform, arguments);
        transform.apply(this, arguments);
    };

    // ctx.transform.apply(ctx, t1)
    // ctx.transform.apply(ctx, t2)
    // => ctx.transform.apply(ctx, multiplyTransform(t1, t2))
    var multiplyTransform = function(t1, t2) {
        return [
            t1[0] * t2[0] + t1[2] * t2[1],
            t1[1] * t2[0] + t1[3] * t2[1],
            t1[0] * t2[2] + t1[2] * t2[3],
            t1[1] * t2[2] + t1[3] * t2[3],
            t1[0] * t2[4] + t1[2] * t2[5] + t1[4],
            t1[1] * t2[4] + t1[3] * t2[5] + t1[5]
        ];
    };
})();
