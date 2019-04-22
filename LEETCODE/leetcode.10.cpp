/**
 * 10. Regular Expression Matching
 */
#include <iostream>
#include <map>
#include <vector>
#include <string>

using namespace std;

class Solution
{
  public:
    string S;
    string P;
    int SLEN;
    int PLEN;

    bool isMatch(string s, string p)
    {

        this->S = s;
        this->P = p;
        this->SLEN = s.length();
        this->PLEN = p.length();

        return _isMatch(0, 0);
    }

    bool _isMatch(int s, int p)
    {
        if (s == SLEN && p == PLEN)
        {
            return true;
        }

        // decide find what
        int ss;         //
        int pp = p + 1; // pp = p + 1

        if (P[pp] == '*')
        {
            ss = s;
            if (P[p] == '.')
            {
                while (ss <= SLEN)
                {

                    if (_isMatch(ss, pp + 1))
                    {
                        return true;
                    }
                    ss++;
                }
            }
            else
            {
                if (_isMatch(ss, pp + 1))
                {
                    return true;
                }

                while (S[ss] == P[p] || ss == SLEN)
                {
                    ss++;
                    if (_isMatch(ss, pp + 1))
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        if (P[p] == '.')
        {
            return _isMatch(s + 1, p + 1);
        }

        if (P[p] == S[s])
        {
            return _isMatch(s + 1, p + 1);
        }

        return false;
    }
};

class SolutionX
{
  public:
    bool isMatch(string s, string p)
    {
        int m = s.size(), n = p.size();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true;
        for (int i = 0; i <= m; ++i)
        {
            for (int j = 1; j <= n; ++j)
            {
                if (j > 1 && p[j - 1] == '*')
                {
                    dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] == p[j - 2] || p[j - 2] == '.') && dp[i - 1][j]);
                }
                else
                {
                    dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
                }
            }
        }
        return dp[m][n];
    }
};

int main()
{
    Solution S;
    cout << "################" << endl;
    cout << S.isMatch("aa", "a") << endl;
    cout << S.isMatch("aa", "a*") << endl;
    cout << S.isMatch("ab", ".*") << endl;
    cout << S.isMatch("aab", "c*a*b") << endl;
    cout << S.isMatch("mississippi", "mis*is*p*.") << endl;
    cout << S.isMatch("a", "ab*") << endl;
}