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

	var T int // T
	fmt.Scanf("%d", &T)
	fmt.Scanf(newline)

	for t := 1; t <= T; t++ {
		var N, M int
		fmt.Scanf("%d %d", &N, &M)
		fmt.Scanf(newline)

		var Cs = make([]int, M, M)
		var Ds = make([]int, M, M)

		for m := 0; m < M; m++ {
			fmt.Scanf("%d %d", &Cs[m], &Ds[m])
			fmt.Scanf(newline)
		}

		// main loop
		{
			var path = make(map[int]([]int))
			for i := 0; i < M; i++ {
				path[Cs[i]] = append(path[Cs[i]], Ds[i])
				path[Ds[i]] = append(path[Ds[i]], Cs[i])
			}

			var nodeCnt = 0
			var max = 0
			var counted = make(map[int](bool))

			for node := range path {
				if !counted[node] {
					max += maxPath(node, &path, &counted)
					nodeCnt += max
					max++
				}
			}

			fmt.Printf("Case #%d: %d\n", t, (N-nodeCnt)*2+max-2)
		}

	}
}

func maxPath(node int, path *map[int]([]int), counted *map[int]bool) int {
	max := 0
	(*counted)[node] = true
	for _, n := range (*path)[node] {
		if !(*counted)[n] {
			max += maxPath(n, path, counted)
		}
	}
	return max + 1
}
