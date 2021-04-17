import React from 'react'

interface Props {
    algorithmType: string;
}

const AlgorithmSource: React.FC<Props> = ({algorithmType}) => {
    const mergesortString = String.raw`
const mergesort = (arr: number[]) => {
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
  }

  return sorted
}`
    return (
        <pre>
            {algorithmType === "mergesort" ? mergesortString : ""}
        </pre>
    )
}

export default AlgorithmSource 
