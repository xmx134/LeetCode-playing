// 2724、排序方式

// 题目描述：
// 给定一个数组 arr 和一个函数 fn，返回一个排序后的数组 sortedArr。
// 你可以假设 fn 只返回数字，并且这些数字决定了 sortedArr 的排序顺序。
// sortedArr 必须按照 fn 的输出值 升序 排序。
// 你可以假设对于给定的数组，fn 不会返回重复的数字。

// 题目解析：
// 题目考察的是Array.sort()与自定义排序方法的结合，直接看解题：
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  arr.sort((a, b) => fn(a) - fn(b))
  return arr
}

// Array.prototype.sort() 是 JavaScript 中的内置方法，用于对数组的元素进行原地排序。
// 默认情况下，它将元素作为字符串进行排序，这可能导致在对数字进行排序时出现意外的结果。
// 然而，你也可以提供自定义比较函数来确定数组应该如何排序。

// 在 Array.prototype.sort() 中，比较函数是一个接受两个参数（通常称为 a 和 b）的函数，
// 并返回一个值，指示 a 和 b 应该相对于彼此如何排序。如果函数返回小于 0 的值，a 将在 b 之前排序。
// 如果返回大于 0 的值，a 将在 b 之后排序。如果返回 0，a 和 b 的相对顺序保持不变。

// 要基于特定属性对对象数组进行排序，你可以使用 Array.prototype.sort() 并提供自定义比较函数。
// 比较函数可以访问两个对象上的所需属性，并根据该属性的值确定它们的排序顺序。

// String.prototype.localeCompare() 是一个方法，
// 它根据它们的区域设置（即语言和地区）比较两个字符串。
// 它考虑了特定区域设置的字符串排序规则，因此是进行国际化字符串比较的理想工具。
// 在比较函数中使用它可以确保字符串按照与用户所使用的语言和文化相关的方式进行排序。

// 使用自定义比较函数允许你在排序过程中应用复杂的逻辑，而不仅仅是默认的字符串或数字排序。
// 这对于基于多个条件排序、国际化排序或特定数据需求的排序非常有用。
// 自定义比较函数使你能够完全控制元素的排序顺序。

// JavaScript 引擎的实现可以选择不同的排序算法。一些 JavaScript 引擎使用快速排序（例如 V8 引擎），
// 而其他引擎可能使用归并排序。对于小型数组，有时还可以使用插入排序。
// 对于稳定性排序，一些引擎可能使用 TimSort。具体的算法取决于引擎的实现。
// 不过，这不会影响使用 Array.prototype.sort() 时的代码，因为接口是相同的，
// 只是具体实现可能会有所不同。

// 稳定性在排序算法中重要，因为它确保相等的元素在排序后保持它们在原始数组中的相对顺序。
// 这对于需要保留某些元素相对于其他元素的原始顺序的情况非常有用。
// 例如，如果你正在对学生成绩的数组进行排序，并且有多名学生具有相同的分数，
// 稳定排序算法将确保它们在排序后的数组中保持与原始数组中的相对顺序一致。
// TimSort 是一个示例，它是一个稳定排序算法，通常用于某些 Java 和 Python 的排序实现。
