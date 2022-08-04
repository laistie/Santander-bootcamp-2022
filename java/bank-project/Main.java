import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Bank sakuraBank = new Bank();
        sakuraBank.setName("Sakura");
        System.out.println("Welcome to " + sakuraBank.getName() + " Bank! Where your savings can bloom.\n");
        Menu();
    }

    static void Menu(){
        System.out.println("Menu\n1. new account\n2. manage existing account\n3. exit\n\nPlease select an option:");
        Scanner scan = new Scanner(System.in);
        int choice = scan.nextInt();
        while(choice != 1 && choice != 2 && choice != 3){
            System.out.println("\nEnter a valid option:");
            choice = scan.nextInt();
        }
        switch(choice){
            case 1: 
                System.out.println("choice 1");
                break;
            case 2: 
                System.out.println("choice 2");
                break;
            case 3: 
                System.out.println("choice 3");
                break;
        }
    }
}