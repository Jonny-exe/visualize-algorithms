export const mergeSort = (array: number[], startIndex: number, endIndex: number): number[] => {
    var middle = Math.floor((endIndex - startIndex) / 2)
    console.log(startIndex, endIndex, middle, array)

    let l = array.length;
    if (l === 0 || l === 1) {
        return array
    }

    const startMiddleArray = array.slice(startIndex, middle)
    const endMiddleArray = array.slice(middle, endIndex + 1)

    const startMiddle = mergeSort(startMiddleArray, 0, startMiddleArray.length)
    const endMiddle = mergeSort(endMiddleArray, 0, endMiddleArray.length)

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

export const iterativeMergeSort = (arr: number[], setState: (state: number[]) => void, setFinished: (state: boolean) => void) => {
  var sorted = arr.slice(),
  n = sorted.length,
  buffer = new Array(n);
  let count = 0

  for (var size = 1; size < n; size *= 2) {
    for (var leftStart = 0; leftStart < n; leftStart += 2*size) {
      var left = leftStart,
      right = Math.min(left + size, n),
      leftLimit = right,
      rightLimit = Math.min(right + size, n),
      i = left;

      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
      }
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }
    }
    var temp: number[] = sorted
    var sorted: number[] = buffer
    var buffer: any[] = temp
    let sortedCopy = [...sorted]
    let countCopy = count
    
    console.log(sortedCopy)
    setTimeout(() => setState(sortedCopy), count++ * 1000)
  }
  
  setTimeout(() => setFinished(true), count++ * 1000)
  return sorted
}
