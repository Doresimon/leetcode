package main

import (
	"fmt"
)

// var newline = "%c" // win
var newline = "\r" // win
// var newline = "" // kickstart

func main() {
	var T int // T
	fmt.Scanf("%d", &T)
	fmt.Scanf(newline)

	for t := 1; t <= T; t++ {
		var N, Q int
		fmt.Scanf("%d %d", &N, &Q)
		fmt.Scanf(newline)

		var As = make([]int, N, N)

		for i := 0; i < N; i++ {
			fmt.Scanf("%d", &As[i])
		}
		fmt.Scanf(newline)

		var Ps = make([]int, Q, Q)
		var Vs = make([]int, Q, Q)

		for q := 0; q < Q; q++ {
			fmt.Scanf("%d %d", &Ps[q], &Vs[q])
			fmt.Scanf(newline)
		}

		// main loop
		{
			sum := xorSum(&As)
			leftP := leftOdd(&As)
			rightP := rightOdd(&As)

			fmt.Printf("Case #%d:", t)
			for i := 0; i < Q; i++ {
				cnt := N
				sum = sum ^ As[Ps[i]] ^ Vs[i]
				As[Ps[i]] = Vs[i]

				if !bitEven(Vs[i]) { // odd
					if Ps[i] < leftP {
						leftP = Ps[i]
					}
					if Ps[i] > rightP {
						rightP = Ps[i]
					}
				} else {
					if Ps[i] == leftP {
						leftP = leftOdd(&As)
					}
					if Ps[i] == rightP {
						rightP = rightOdd(&As)
					}
				}

				if !bitEven(sum) { // odd
					if leftP+1 <= cnt-rightP {
						cnt -= leftP + 1
					} else {
						cnt -= cnt - rightP
					}
				}
				fmt.Printf(" %d", cnt)
			}
			fmt.Printf("\n")
		}

	}
}

func leftOdd(arr *[]int) int {
	length := len(*arr)
	for i := 0; i < length; i++ {
		if !bitEven((*arr)[i]) {
			return i
		}
	}
	return length - 1
}

func rightOdd(arr *[]int) int {
	length := len(*arr)
	for i := length - 1; i >= 0; i-- {
		if !bitEven((*arr)[i]) {
			return i
		}
	}
	return 0
}

func xorSum(arr *[]int) int {
	ret := 0
	for _, v := range *arr {
		ret = ret ^ v
	}
	return ret
}

func bitEven(v int) bool {
	ret := 0
	for {
		if v == 0 {
			break
		}
		ret += v & 0x1
		v = v >> 1
	}
	return ret%2 == 0
}
