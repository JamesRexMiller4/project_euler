package euler;

public class euler4 {
	static boolean ispalindrome(int x) {
		String str = Integer.toString(x);
		String revstr = "";
		for(int i = 0; i < str.length(); i++) {
			revstr += str.charAt(str.length() - i - 1);
		}
		if(Integer.parseInt(str) == Integer.parseInt(revstr)) {
			return true;
		}else {
			return false;
		}
	}
	public static void main(String[] args) {
		int biggestpal = 0;
		for(int i = 1; i < 1000; i++) {
			for(int j = 1; j < 1000; j++) {
				if(ispalindrome(i*j) && i*j > biggestpal) {
					biggestpal = i*j;
				}
			}
		}
		System.out.print(biggestpal);
	}
}
