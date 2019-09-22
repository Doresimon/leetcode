package main

import (
	"fmt"
	"math"
	"runtime"
)

func main() {
	var newline string
	if runtime.GOOS == "windows" {
		newline = "\r"
	} else {
		newline = ""
	}

	var T int // T
	fmt.Scanf("%d", &T)
	fmt.Scanf(newline)

	var store = make(map[int]([]int))
	store[1] = append(store[1], 1)

	var diff = 0

	for t := 1; t <= T; t++ {
		var L, R int
		fmt.Scanf("%d %d", &L, &R)
		fmt.Scanf(newline)

		var cnt = 0
		for i := L; i <= R; i++ {
			resultArr := cal(&store, i)
			alice := 0
			bob := 0
			tmpMap := make(map[int]bool)
			for _, x := range resultArr {
				if !tmpMap[x] {
					tmpMap[x] = true
					if x%2 == 0 {
						bob++
					} else {
						alice++
					}
				}
			}

			diff = alice - bob
			if diff >= -2 && diff <= 2 {
				cnt++
			}
		}

		fmt.Printf("Case #%d: %d\n", t, cnt)

	}
}

func cal(store *map[int]([]int), num int) []int {
	if (*store)[num] != nil {
		return (*store)[num]
	}

	(*store)[num] = make([]int, 0)
	count := int(math.Sqrt(float64(num)))
	for i := 2; i <= count; i++ {
		if num%i == 0 {
			xArr := cal(store, i)
			yArr := cal(store, num/i)

			// for x := 1; x < len(xArr); x++ {
			// 	(*store)[num]  = append((*store)[num] ,xArr[x])
			// }
			// for y := 1; y < len(yArr); y++ {
			// 	(*store)[num]  = append((*store)[num] ,yArr[y])
			// }

			factorMap := make(map[int]bool)
			tmpV := 0
			for x := 0; x < len(xArr); x++ {
				for y := 0; y < len(yArr); y++ {
					tmpV = xArr[x] * yArr[y]
					if !factorMap[tmpV] {
						factorMap[tmpV] = true
						(*store)[num] = append((*store)[num], tmpV)
					}
				}
			}

			// fmt.Printf("%d = %d\n", num, (*store)[num])
			return (*store)[num]
		}
	}
	(*store)[num] = append((*store)[num], 1)
	(*store)[num] = append((*store)[num], num)
	// fmt.Printf("%d = %d\n", num, (*store)[num])
	return (*store)[num]
}
