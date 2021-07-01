package problems;

import java.util.Scanner;

/*
You are given a 2-Dimensional array with M rows and N columns.
You are initially positioned at (0,0) which is the top-left cell in the array.
You are allowed to move either right or downwards.
The array is filled with 1's and 0's. A 1 indicates that you can move through that cell,
a 0 indicates that you cannot move through the cell.
Given the functionnumberOfPaths which takes in the above 2-D array,
return the number of paths from the top-left cell to the bottom-right cell
(i.e. (0,0) to (M-1,N-1)).


<p><strong>Sample TestCases </strong><br>
<br>
<strong>Input #00:</strong><br>
Consider the 2-D array:<br>
1 1 1 1
1 1 1 1
1 1 1 1
Output: 10

None of the values in the array is 0,
counting all possible ways from (0,0) to (2,3) gives;
us 10 possible paths from the top-left to bottom-right cell.
 */
public class NumberOfPaths {

    static int numberOfPaths(int[][] a, int M, int N) {

        int[][] paths = new int[M][N];
        if ((paths[0][0] = a[0][0]) == 0) {
            return 0;
        }

        for (int i = 1; i < N; i++) {
            paths[0][i] = a[0][i] * paths[0][i - 1];
        }

        for (int i = 1; i < M; i++) {
            paths[i][0] = a[i][0] * paths[i - 1][0];
            for (int j = 1; j < N; j++) {
                paths[i][j] = a[i][j] * (paths[i - 1][j] + paths[i][j - 1]);
            }
        }

        return paths[M - 1][N - 1];

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int _a_cnt = 0, _b_cnt = 0;
        int[][] _a = new int[1000][100];
        try {
            _a_cnt = sc.nextInt();
            _b_cnt = sc.nextInt();
        } catch (Exception e) {
            System.out.println("Here: " + e.getMessage());
        }

        for (int i = 0; i < _a_cnt; i++) {
            for (int j = 0; j < _b_cnt; j++) {
                int _a_tmp = 0;
                try {
                    _a_tmp = sc.nextInt();
                } catch (Exception e) {
                }
                _a[i][j] = _a_tmp;
            }
        }
        System.out.println(numberOfPaths(_a, _a_cnt, _b_cnt));
    }
}
