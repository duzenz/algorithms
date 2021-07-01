package problems;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*
A number of bids are being taken for a project.  Determine the number of distinct pairs of project costs where their absolute difference is some target value.  Two pairs are distinct if they differ in at least one value.
  Example

  n  =  3

  projectCosts = [1, 3, 5]

  target= 2

 There are  2  pairs  [1,3],   [3,5] that  have the target difference  target = 2,  therefore a value of  2  is returned.

   Function Description

 Complete the function  k Difference   in the editor.

Return
integer count of the number of pairs within  a  having a difference of  k

  Function Description

 Complete the function  countPairs  in the editor below.

  countPairs  has the following parameter(s):
      int projectCosts[n]:   array of integers

      int target:  the target difference

 Returns

      int:  the number of distinct pairs in  projectCosts  with an absolute  difference of  target
 */
public class NumberOfDistictPairs {

    public static int countPairs(List<Integer> projectCosts, int target) {
        Set<String> distinctPairs = new HashSet<>();
        int[] array = projectCosts.stream().mapToInt(i -> i).sorted().toArray();

        int count = array.length;
        for (int i = 0; i < count; i++) {
            for (int j = i + 1; j < count; j++) {
                if ((target >= 0 ? array[j] - array[i] : array[i] - array[j]) == target) {
                    distinctPairs.add(i + ":" + j);
                }
            }
        }

        return distinctPairs.size();

    }
}
