/**
 * Pow(x, n)
 */
#include <iostream>
#include <map>
#include <vector>

class Solution
{
  public:
    double myPow(double x, int n)
    {

        double S = 1;
        double M = x;
        int N = n;
        int e = 0;
        int filter = 0x1;

        if (N == 0)
            return 1.00000;
        if (N < 0)
        {
            M = 1 / M;
            if (N == INT32_MIN)
            {
                N = -(N + 1);
                S = M;
            }
            else
            {
                N = -(N);
            }
        }

        while (N != 0)
        {
            e = N & filter;

            if (e == filter)
            {
                S *= M;
            }
            M = M * M;
            N = N / 2;
        }

        return S;
    }
};

int main()
{
    Solution S;
    std::cout << S.myPow(2.0000, -3) << std::endl;
}