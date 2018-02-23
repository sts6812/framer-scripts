"splitImageArray" = [function (require, module, exports) {

    exports.splitImageArray = function (array) {
        var count, i, index, layer, len, splitAngle;
        index = 0;
        count = array.length;
        splitAngle = 360 / count;
        for (i = 0, len = array.length; i < len; i++) {
            layer = array[i];
            layer.originX = 0.5;
            layer.originY = 1.5;
            layer.rotationZ = splitAngle * index;
            index++;
        }
        return splitAngle;
    };


}, {}]
