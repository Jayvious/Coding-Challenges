import static java.lang.Math.*;
public class QuadAndPerfectNum {

    public static void main(String[] args){
       //System.out.println(quadraticEquation(1,2,-3));
       System.out.println(checkPerfect(97));
    }

    public static int quadraticEquation(int a, int b, int c){
        double divideBy = 2*a;
        double substractBy  = 4*a*c;
        double finalAns = (-b + Math.sqrt(Math.pow(b,2) - substractBy))/divideBy;
        return (int)finalAns;
    }

    public static Boolean checkPerfect(int n){
        int sumOfFactors = 0;
        int i = 1;
        while(i < n){
            int rem = n%i;
            if(rem == 0){
                sumOfFactors = sumOfFactors + i;
            }
            i++;
        }
        return sumOfFactors == n;
    }

}

