export const mergesort = (array, startIndex, endIndex) => {
    var middle = Math.floor((endIndex - startIndex) / 2)
    console.log(startIndex, endIndex, middle, array)

    let l = array.length;
    if (l === 0 || l === 1) {
        return array
    }

    const startMiddleArray = array.slice(startIndex, middle)
    const endMiddleArray = array.slice(middle, endIndex + 1)

    const startMiddle = mergesort(startMiddleArray, 0, startMiddleArray.length)
    const endMiddle = mergesort(endMiddleArray, 0, endMiddleArray.length)

    debugger

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
