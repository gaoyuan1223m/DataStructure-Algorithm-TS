# 字符串

> 字符串实际上是一个 `unicode 字符`数组，但和直接的数组还是存在一些区别。

## 最长公共前缀

> 此部分代码在 LongestCommonPrefix.ts 中

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串。

```typescript
/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串。
 * @param {string[]} strs 
 * @return {string}
 */
function LongestCommonPerfix (strs: string[]):string  {
  if(strs.length <= 0) {
    return strs[0] || '';
  }
  // 排序
  strs.sort();
  if(strs[0] === ''){
    return '';
  }
  // 排序后只需比较第一位与最后一位即可
  let first:string = strs[0];
  let last:string = strs[strs.length - 1];
  if (first === last || last.match(eval(`/^${first}/`))){
    return first;
  }
  else {
    for(let i = 0; i< first.length; i++) {
      if (first[i] !== last[i]) {
        return first.substring(0,i);
      }
    }
  }
}
```

## 计数二进制子串

> 此部分代码在 CountBinarySubstrings.ts 中

给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

```typescript
/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 * @param {string} str 
 * @return {number}
 */
function CountBinarySubstrings (str: string): number {
    // 建立数据结构，堆栈，保存数据  
    let r:string[] = []
    // 给定任意子输入，返回符合条件的字符串
    let match = (str:string):string => {
        let j:string = str.match(/^(0+|1+)/)[0];
        let o = (parseInt(j[0]) ^ 1).toString().repeat(j.length);
        let reg = new RegExp(`^(${j}${o})`)
        if(reg.test(str)){
        return RegExp.$1
        } else {
        return ''
        }
    }
    // for 循环控制程序流程
    for(let i = 0, len = str.length - 1; i < len; i++) {
        let sub: string = match(str.slice(i));
        if(sub) {
        r.push(sub)
        }
    }
    return r.length
}
```

## 二进制求和

> 此部分代码在 SumBinary.ts 中

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为**非空**字符串且只包含数字 `1` 和 `0`。

```typescript
/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示。
 * 输入为非空字符串且只包含数字 1 和 0。
 * @param {string} a 
 * @param {string} b 
 * @return {string}
 */
function SumBinary (a: string, b: string):string {
    let arrA = a.split('')
    let arrB = b.split('')
    // 补齐两个数组的长度
    const len = Math.max(arrA.length, arrB.length) + 1
    // 用'0'填充两个数组
    while(arrA.length < len) {
        arrA.unshift('0')
    } 
    while(arrB.length < len) {
        arrB.unshift('0')
    }
    // 存储结果
    let result = []
    for(let i = len-1; i > 0; i--) {
        result[i] = result[i] ? result[i] + parseInt(arrA[i]) + parseInt(arrB[i]) : parseInt(arrA[i]) + parseInt(arrB[i])
        // 进位操作
        if (result[i] > 1) {
            result[i - 1] = result[i - 1] ? result[i - 1] + 1 : 1
            result[i] = result[i] % 2
        }
    }
    if (!result[0]) {
        result.shift()
    }
    return result.join('')
}
```
