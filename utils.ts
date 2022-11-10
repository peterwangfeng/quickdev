/**
 * 排序
 */
// 快速排序
export function quickSort(list) {
// 当 list.length <= 1 时，退出递归
    if (list.length <= 1) return list;
// 找到中间节点
    let mid = Math.floor(list.length / 2);
// 以中间节点为基准点，比该节点大的值放到 right 数组中，否则放到 left 数组中
    let base = list.splice(mid, 1)[0];
    let left = [];
    let right = [];
    list.forEach(item => {
        if (item > base) {
            right.push(item);
        } else {
            left.push(item);
        }
    });
// 重新组合数组
    return quickSort(left).concat(base, quickSort(right));
}

// 归并排序
export function MergeSort(array) {
    let len = array.length;
    if (len <= 1) {
        return array;
    }
// 将给定的列表分为两半
    let num = Math.floor(len / 2);
    let left = MergeSort(array.slice(0, num));
    let right = MergeSort(array.slice(num, array.length));
    return merge(left, right);

    function merge(left, right) {
        let [l, r] = [0, 0];
        let result = [];
        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }
        result = result.concat(left.slice(l, left.length));
        result = result.concat(right.slice(r, right.length));
        return result;
    }
}

// 插入排序
export function insertSort(array) {
// 外层控制循环的次数
    for (let i = 1; i < array.length; i++) {
        let target = i;
// 内层循环用于每一轮的数据比较
        for (let j = i - 1; j >= 0; j--) {
            if (array[target] < array[j]) {
                [array[target], array[j]] = [array[j], array[target]];
                target = j;
            } else {
                break;
            }
        }
    }
    return array;
}

// 选择排序
export function selectSort(arr) {
// 定义 index 存储最小值的下标
    let index;
// 外层循环用控制 排序进行多少轮
    for (let i = 0; i < arr.length - 1; i++) {
        index = i;
// 内层循环用于每一轮的数据比较
// 注意 j 的起始范围是 i + 1
        for (let j = i + 1; j < arr.length; j++) {
// 寻找最小值
            if (arr[j] < arr[index]) {
// 保存最小值的下标
                index = j;
            }
        }
// 如果 index 不是目前的头部元素，则交换两者
        if (index !== i) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    return arr;
}

//冒泡排序
export function bubbleSort(arr) {
    const length = arr.length;
// 外层循环用控制 排序进行多少轮
    for (let i = 0; i < length; i++) {
// 内层循环用于每一轮的数据比较
// 注意 j 的长度范围 length - i - 1
        for (let j = 0; j < length - i - 1; j++) {
// 相邻元素，大的放到后面
            if (arr[j] > arr[j + 1]) {
// 交换位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
