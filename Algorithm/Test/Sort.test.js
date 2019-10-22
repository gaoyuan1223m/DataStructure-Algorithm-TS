import InsertSort from '../Sort/InsertSort'
import BubbleSort from '../Sort/BubbleSort'


test('InsertSort', () => {
    let arr = [1,2,4,3,7,9,8,6,5]
    expect(InsertSort(arr)).toEqual([1,2,3,4,5,6,7,8,9])
})

test('BubbleSort', () => {
    let arr = [6,5,3,2,4,1]
    expect(BubbleSort(arr)).toEqual([1,2,3,4,5,6])
})