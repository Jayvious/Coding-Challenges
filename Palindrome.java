import java.util.Arrays;
public class Palindrome{

    public static void main(String[] args){
        //System.out.println(quadraticEquation(1,2,-3));
        System.out.println(isPalindromePossible("3245234"));
     }

    public static Boolean isPalindromePossible(String randomS){
        int[] allChars = new int[256];
        Arrays.fill(allChars, 0);
        for(int i = 0; i < randomS.length(); i++){
            int cAsInt = (int)randomS.charAt(i);
            allChars[cAsInt]++;
        }
        int oddAmountOfChar = 0;
        for(int i = 0; i < allChars.length; i++){
            if(allChars[i] % 2 != 0){
                oddAmountOfChar++;
            }
            if(oddAmountOfChar > 1){
                return false;
            }
        }
        return true;
    }
}