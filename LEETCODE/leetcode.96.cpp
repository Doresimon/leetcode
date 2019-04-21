
#include <iostream>
#include <map>
#include <vector>

class Solution
{
  public:
    int numTrees(int n)
    {

        std::vector<int> cache;

        cache.push_back(1); // 0

        int left;
        int right;
        int sum;

        for (auto i = 1; i <= n; i++)
        {
            left = 0;
            right = i - 1;
            sum = 0;

            while (right >= 0)
            {
                sum += cache[left] * cache[right];
                left++;
                right--;
            }
            cache.push_back(sum);
        }

        return cache[n];
    }
};

int main()
{
    Solution S;
    std::cout << S.numTrees(3) << std::endl;
}