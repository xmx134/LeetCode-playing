// 2677. 分块数组

// 题目描述：
// 给定一个数组 arr 和一个块大小 size ，返回一个 分块 的数组。
// 分块 的数组包含了 arr 中的原始元素，但是每个子数组的长度都是 size 。
// 如果 arr.length 不能被 size 整除，那么最后一个子数组的长度可能小于 size 。
// 你可以假设该数组是 JSON.parse 的输出结果。换句话说，它是有效的JSON。
// 请你在不使用 lodash 的函数 _.chunk 的情况下解决这个问题。

// 题目解析：
// 题目不难，但是应用场景有许多。题目给了一个一维数组和一个size，
// 通过size将一维数组拆分成多组数组长度小于等于size的二维数组，核心处理点在拆分成多少组，
// 以及一维数组末尾元素的处理。
// 讲一下思路：
// 我们可以通过Array.from来创建新数组，通过一维数组的长度除以size来计算，
// Math.ceil来确定最终二维数组数量，Array.from 方法还接受一个映射函数，
// 该函数使用 slice 方法根据索引和块大小提取输入数组的相应部分来创建每个块。
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

function chunk(arr: any[], size: number): any[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, function (_: any, index: number) {
    return arr.slice(index * size, index * size + size)
  })
}

// 接下来我们讲一下应用场景：
// 1、数据分页
// 2、并行处理：
// 在并行计算或分布式系统中，数据通常被分割成块，同时由多个处理器或节点并行处理。
// 分块数据可以有效地分发和并行执行任务，提高整体性能。
// 3、图像处理：
// 在图像处理应用中，通常将大图像分割成较小的块或瓦片，以便以更细粒度进行处理和分析。
// 每个瓦片可以独立处理，实现并行处理，并有效利用计算资源。
// 4、数据分析与汇总：
// 在处理大型数据集时，将数据分成较小的块以进行分析和汇总往往是有益的。
// 这种方法允许进行并行或分布式处理，实现更快的数据处理和高效的资源利用。
// 5、文件上传和传输：
// 在上传或传输大型文件时，通常将数据分成较小的块以处理潜在的网络限制并确保可靠的传输。
// 接收端可以独立处理每个块，并将它们重新组合以重构原始文件。

// 分块数组的目的是什么？
// 分块数组的目的是将大型数组分割成较小、更易管理的子数组。
// 这在各种情况下非常有用，如分页、并行处理或将数据用于分布式系统。

// 如何处理数组长度不能被块大小整除的边缘情况？
// 在这种情况下，最后一个子数组的长度可能小于指定的块大小。
// 可以通过检查剩余元素并将它们包括在最后一个子数组中来处理这种情况。

// 能否解释分块数组和分割数组之间的区别？
// 分块数组涉及将数组分成大小相等或指定大小的子数组，
// 而分割数组通常涉及根据索引或基于条件将数组分为两个或更多个单独的数组。

// 当数组长度不能被块大小整除时，您将如何处理边缘情况？
// 在这种情况下，最后一个子数组的长度可能小于指定的块大小。
// 这可以通过检查剩余的元素并将它们包括在最后一个子数组中来处理。
