import java.lang.*;
import java.util.*;

class Permutations{
    public static void main(String[] args){
        final int[] array = new int[]{10,20,30};

        for(int i = 0; i < array.length; i++){
            int[] manipulate = array.clone();
            int numOn = manipulate[i];
            int fNum = manipulate[0];
            manipulate[0] = numOn;
            manipulate[i] = fNum;
            recursivePerm(manipulate, 1);
        }
    }

    private static void recursivePerm(int[]a, int i){
        System.out.println(Arrays.toString(a));
        if(a.length-1 > i){
            int tmp = a[i];
            a[i] = a[i+1];
            a[i+1] = tmp;
            recursivePerm(a, i+1);
        }
    }
}