package problems;

/*
Find the complement of an integer.

An e-commerce site has a series of advertisements to display. Links to the ads are stored in a data structure and they are displayed or not based on the value at a bit position in a number. The sequence of ads being displayed at this time can be represented as a binary value, where 1 means the ad is displayed and 0 means it is hidden. The ads should rotate, so on the next page load, ads that are displayed now are hidden and vice versa.

Given a base 10 integer representing the current display state of all ads, determine its binary representation. Starting from the position of its highest order 1 bit, negate that bit and all lower order bits from 0 to 1 or from 1 to 0. Return the base 10 representation of the result.

Example:

base10 = 30

30<sub>10</sub> = 00011110<sub>2</sub>

Strip the insignificant zeros then flip all of the bits in 11110<sub>2</sub> to get 00001<sub>2</sub> = 1<sub>10</sub>. The example shows the value as an 8-bit binary to demonstrate that preceding zeros are discarded.

Function Description

Complete the function  changeAds  in the editor below.


 changeAds has the following parameter:

      int base10:   an integer in base 10

 Return:

      int:  the base 10 value of the resulting binary
 */
public class ChangeAds {

    public static int changeAds(int base10) {
        // Write your code here
        int powerTwo = 1;
        int bit = 0;
        int number = 0;

        while(base10 > 0) {
            bit = (base10 & 1);
            if (bit == 0) {
                number += powerTwo;
            }
            base10 = base10 >> 1;
            powerTwo *= 2;
        }

        return number;

    }
}
