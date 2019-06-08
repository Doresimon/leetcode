/**
 * give u an array of number,
 * each number is a height of a mountain
 * 
 * it rains for a long time
 * calculate all range that have water.
 * 
 * eg:
 * [1, 0, 2, 0 ,3, 0, 2, 1]
 * 
 * return
 * [0, 2]
 * [2, 4]
 * [4, 6]
 */
#include <iostream>
#include <vector>

using namespace std;
class Rain
{
  public:
    int calculateRainRange(int *arr, int len)
    {

        vector<int> rangesStart;
        vector<int> rangesEnd;

        int left = 0;
        int right = len - 1;

        int leftMax, rightMax;

        while (left < len)
        {
            if (arr[left] != 0)
            {
                leftMax = left;
                break;
            }
            left++;
        }
        while (right >= 0)
        {
            if (arr[right] != 0)
            {
                rightMax = right;
                break;
            }
            right--;
        }

        bool leftGO = arr[leftMax] <= arr[rightMax];

        while (left <= right)
        {
            if (leftGO)
            {
                left++;
                if (arr[left] >= arr[leftMax])
                {
                    if (left - leftMax > 1)
                    {
                        rangesStart.push_back(leftMax);
                        rangesEnd.push_back(left);
                    }
                    leftMax = left;
                }
            }
            else
            {
                right--;
                if (arr[right] >= arr[rightMax])
                {
                    if (rightMax - right > 1)
                    {
                        rangesStart.push_back(right);
                        rangesEnd.push_back(rightMax);
                    }
                    rightMax = right;
                }
            }
            leftGO = arr[leftMax] <= arr[rightMax];
        }

        auto itS = rangesStart.begin();
        auto itE = rangesEnd.begin();

        for (; itS != rangesStart.end(); itS++, itE++)
        {
            cout << "[" << (*itS) << ", " << (*itE) << "]" << endl;
        }

        return 1;
    }
};

int main()
{
    // int arr[] = {1, 0, 2, 0, 3, 0, 2, 1};
    int arr[] = {1, 0, 2, 2, 3, 0, 2, 1};
    int len = 8;

    Rain R;
    R.calculateRainRange(arr, len);

    return 0;
}