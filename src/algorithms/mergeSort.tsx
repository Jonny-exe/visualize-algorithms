export const mergeSort = (array: number[], startIndex: number, endIndex: number): number[] => {
    var middle = Math.floor((endIndex - startIndex) / 2)
    console.log(startIndex, endIndex, middle, array)

    let l: number = array.length;
    if (l === 0 || l === 1) {
        return array
    }

    const startMiddleArray = array.slice(startIndex, middle + 1)
    const endMiddleArray = array.slice(middle + 1, endIndex + 1)

    const startMiddle = mergeSort(startMiddleArray, startIndex, middle)
    const endMiddle = mergeSort(endMiddleArray, middle + 1, endIndex +1)

    let result = []
    
    let is = 0
    let ie = 0

    for (let i = 0; (is + ie)< startMiddle.length + endMiddle.length; i++) {
        if (is >= startMiddle.length) {
            result.push(endMiddle[ie])
            ie++
            continue
        }

        if (ie >= endMiddle.length) {
            result.push(startMiddle[is])
            is++
            continue
        }

        if (startMiddle[is] < endMiddle[ie]) {
            result.push(startMiddle[is])
            is++
        } else {
            result.push(endMiddle[ie])
            ie++
        }
    }
    return result
}

