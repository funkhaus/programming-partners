import _takeRight from "lodash/takeRight"
import _dropRight from "lodash/dropRight"

function _shapeListData(array, offset) {
    let count = array.length
    let trimLastCount = Math.floor(count / offset)
    let rightArray = _takeRight(array, trimLastCount)
    let leftArray = _dropRight(array, trimLastCount)

    return {
        left: leftArray,
        right: rightArray
    }
}

export default _shapeListData