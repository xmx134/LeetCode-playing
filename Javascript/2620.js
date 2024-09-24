/**
 * @param {number} n
 * @return {Function} counter
 */
// 题目描述
// 给定一个整型参数 n，请你编写并返回一个 counter 函数。
// 这个 counter 函数最初返回 n，每次调用它时会返回前一个值加 1 的值
// ( n ,  n + 1 ,  n + 2 ，等等)。

// 解答思路：
// 该题目是考察 JavaScript 中的闭包，闭包类似于 class 中的内置方法
// 通过限定作用域，达到将变量存储在内存中的目的

// 附上闭包的定义
// 闭包（Closure）是一种在编程语言中常见的概念，
// 它允许函数访问其外部作用域中的变量，即使在外部函数已经执行完毕后。
// 一、闭包的构成
// 闭包通常由以下几个部分组成：
// 外部函数：定义了一个局部变量和一个内部函数，并返回内部函数。
// 局部变量：在外部函数内部定义的变量，只有外部函数和内部函数可以访问。
// 内部函数：可以访问外部函数的局部变量，并在外部函数执行完毕后仍然可以保留对这些变量的引用。
// 二、闭包的作用
// 1、数据隐藏和封装：通过闭包，可以将一些数据隐藏在函数内部，只暴露必要的接口。
// 这样可以提高代码的安全性和可维护性。
// 2、记忆功能：闭包可以记住外部函数的变量值，即使外部函数已经执行完毕。
// 3、实现回调函数和事件处理：在异步编程和事件驱动编程中，
// 闭包可以方便地保存上下文信息，以便在回调函数中使用。
// 三、闭包的注意事项
// 1、内存管理：由于闭包会保留对外部函数变量的引用，可能会导致内存泄漏。
// 如果闭包引用的变量不再需要，应该及时释放它们的引用，以避免内存占用过高。
// 2、变量作用域：在使用闭包时，要注意变量的作用域。内部函数可以访问外部函数的变量，
// 但外部函数不能直接访问内部函数的变量。
// 3、可读性和可维护性：闭包可能会使代码变得复杂，降低可读性和可维护性。
// 在使用闭包时，应该尽量保持代码的简洁和清晰，避免过度使用闭包。
var createCounter = function (n) {
  return function () {
    return n++
  }
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */