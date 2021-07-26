import java.util.ArrayList;

public class ContiguousSubarray{
    public static void main(String[] args){
        int[] arr = new int[]{14, 12, 70, 15, 99, 65, 21, 90};
        int value = 97;

        System.out.println(subArray(arr, value).toString());
    }

    private static ArrayList<Integer> subArray(int[] arr, int valueToHit){
        int sum = 0;
        int i = 0;
        int startingIndex = 1;
        ArrayList<Integer> rArray = new ArrayList<Integer>();
        while(i < arr.length){
            sum += arr[i];
            rArray.add(arr[i]);
            i++;
            if(sum > valueToHit){
                sum = 0;
                i = startingIndex;
                rArray.clear();
                startingIndex++;
            }
            if(sum == valueToHit){
                break;
            }
        }

        return rArray;
    }
}