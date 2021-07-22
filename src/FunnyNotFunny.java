import java.util.ArrayList;

public class FunnyNotFunny {
    public static void main(String[] args){
        String s = "";
        ArrayList<Integer> a = new ArrayList<Integer>();

    }

    private static ArrayList<Integer> reverse(ArrayList<Integer> a){
       ArrayList<Integer> rA = new ArrayList<Integer>();
        for(int i = a.size()-1; i <= 0; i--){
            rA.add(a.get(i));
        }
        return rA;
    }
}
