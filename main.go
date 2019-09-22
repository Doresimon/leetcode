package main

import (
	"fmt"
	"runtime"
)

func main() {
	var newline string
	if runtime.GOOS == "windows" {
		newline = "\r"
	} else {
		newline = ""
	}

	var N int // N
	fmt.Scanf("%d", &N)
	fmt.Scanf(newline)

	var NN = N / 2

	var K = make([]int, NN+1, NN+1)
	K[0] = 1
	K[1] = 1

	for i := 2; i <= NN; i++ {
		K[i] = 0
		tmp := i - 1
		for j := 0; j < i; j++ {
			K[i] += K[j] * K[tmp]
			tmp--
		}
	}

	fmt.Printf("%d\n", K[NN])

}
