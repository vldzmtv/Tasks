// #### 1. Сумма элементов на чётных позициях
// Напишите функцию, которая принимает массив чисел и возвращает сумму элементов, стоящих на чётных индексах (0, 2, 4, ...).
// Пример:  sumEvenIndices([1, 2, 3, 4, 5]) // 1 + 3 + 5 = 9

// function sumEvenIndices(arr) {
// 	let sum = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i % 2 === 0) {
// 			sum += arr[i]
// 		}
// 	}
// 	console.log(sum)
// }
// sumEvenIndices([1, 2, 3, 4, 5, 24, 48, 50, 60])

// #### 2. Поиск наиболее часто встречающегося элемента
// Напишите функцию, которая находит элемент, встречающийся в массиве наибольшее количество раз. Если таких несколько, вернуть первый.
// Пример:  mostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1]) // 1 (встречается 4 раза)

// function mostFrequent(arr) {
// 	let maxCount = 0
// 	let maxElement = arr[0]
// 	for (let i = 0; i < arr.length; i++) {
// 		let count = 0
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[i] === arr[j]) {
// 				count += 1
// 			}
// 		}
// 		if (count > maxCount) {
// 			maxCount = count
// 			maxElement = arr[i]
// 		}
// 	}
// 	console.log(maxElement)
// }
// mostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 3, 3, 3, 7, 7, 7, 7])

// #### 3. Разница между максимальным и минимальным элементом
// Напишите функцию, которая возвращает разницу между самым большим и самым маленьким числом в массиве.
// Пример:  differenceMaxMin([10, 4, 1, 7, 9]) // 10 - 1 = 9

// function differenceMaxMin(arr) {
// 	let minElement = arr[0]
// 	let maxElement = arr[0]
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > maxElement) {
// 			maxElement = arr[i]
// 		}
// 		if (arr[i] < minElement) {
// 			minElement = arr[i]
// 		}
// 	}
// 	console.log(maxElement - minElement)
// }
// differenceMaxMin([10, 4, 1, 7, 9, 22, -5])

// #### 4. Слияние массивов с удалением дубликатов
// Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий все уникальные элементы из обоих массивов.
// Пример:  mergeUnique([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]

// function mergeUnique(arr1, arr2) {
// 	let mergeArr = []
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (!mergeArr.includes(arr1[i])) {
// 			mergeArr.push(arr1[i])
// 		}
// 	}
// 	for (let j = 0; j < arr2.length; j++) {
// 		if (!mergeArr.includes(arr2[j])) {
// 			mergeArr.push(arr2[j])
// 		}
// 	}
// 	console.log(mergeArr)
// }
// mergeUnique([1, 2, 3], [2, 3, 4])

// #### 5. Разделение массива на подмассивы заданной длины
// Напишите функцию, которая разбивает массив на подмассивы указанной длины.
// Пример:  chunkArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]

// function chunkArray(arr, num) {
// 	let result = []
// 	while (arr.length > 0) {
// 		let subArr = arr.splice(0, num)
// 		result.push(subArr)
// 	}
// 	console.log(result)
// }
// chunkArray([1, 2, 3, 4, 5], 2)

// ---

// ### Объекты (средний уровень)

// #### 6. Подсчёт количества каждого элемента в массиве
// Напишите функцию, которая принимает массив и возвращает объект, где ключи — элементы массива, а значения — их количество.

// Пример:  countItems(['a', 'b', 'a', 'c', 'b']) // { a: 2, b: 2, c: 1 }
// function countItems(arr) {
// 	const result = arr.reduce((obj, value) => {
// 		obj[value] = (obj[value] || 0) + 1
// 		return obj
// 	}, {})
// 	console.log(result)
// 	return result
// }
// countItems(['a', 'b', 'a', 'c', 'b'])

// #### 7. Инверсия ключей и значений объекта
// Напишите функцию, которая меняет местами ключи и значения в объекте. Если значения повторяются, перезаписать последним ключом.

// Пример:  invertObject({ a: 1, b: 2, c: 1 }) // { '1': 'c', '2': 'b' }

// function invertObject(obj) {
// 	let result = {}
// 	for (let key in obj) {
// 		let value = obj[key]
// 		result[value] = key
// 	}
// 	console.log(result)
// }
// invertObject({ a: 1, b: 2, c: 1 })

// #### 8. Фильтрация объекта по значению
// Напишите функцию, которая принимает объект и значение, затем возвращает новый объект только с теми свойствами, у которых значение совпадает с переданным.

// Пример:  filterByValue({ a: 1, b: 2, c: 1 }, 1) // { a: 1, c: 1 }

// function filterByValue(obj, value) {
// 	let result = {}
// 	for (let key in obj) {
// 		if (obj[key] === value) {
// 			result[key] = obj[key]
// 		}
// 	}
// 	console.log(result)
// }
// filterByValue({ a: 1, b: 2, c: 1 }, 1)

// #### 9. Объединение объектов с суммированием значений
// Напишите функцию, которая принимает два объекта с числовыми значениями и возвращает новый объект, объединяющий их. Если ключи совпадают — значения складываются.
// Пример:  mergeAndSum({ a: 1, b: 2 }, { b: 3, c: 4 }) // { a: 1, b: 5, c: 4 }

// function mergeAndSum(obj1, obj2) {
// 	let clone = Object.assign({}, obj1)
// 	for (let key in obj2) {
// 		clone[key] = (clone[key] || 0) + obj2[key]
// 	}
// 	console.log(clone)
// }
// mergeAndSum({ a: 1, b: 2 }, { b: 3, c: 4 })

// #### 10. Глубокое сравнение объектов
// Напишите функцию, которая сравнивает два объекта (включая вложенные) и возвращает true, если они идентичны.

// Пример:  deepEqual(
//   { a: 1, b: { c: 2 } },
//   { a: 1, b: { c: 2 } }
// ) // true
