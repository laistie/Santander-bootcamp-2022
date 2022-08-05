import java.util.Scanner;
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

public class Main{
    public static void main(String[] args){
        Bank bank = new Bank();
        bank.setName("Sakura");
        List<Account> accList = new ArrayList<Account>();
        bank.setAccs(accList);
        System.out.println("Welcome to " + bank.getName() + " Bank! Where your savings can bloom.\n");
        Menu(bank);
    }

    static void Menu(Bank bank){
        System.out.println("Menu\n1. new account\n2. manage existing account\n3. exit\n\nPlease select an option:");
        Scanner scan = new Scanner(System.in);
        int choice = scan.nextInt();
        while(choice != 1 && choice != 2 && choice != 3){
            System.out.println("\nEnter a valid option:");
            choice = scan.nextInt();
        }
        switch(choice){
            case 1: 
                registerNewAcc(bank);
                break;
            case 2: 
                System.out.println("choice 2");
                break;
            case 3:
                System.out.println("\nWe appreciate your preference for Sakura Bank.\n");
                System.exit(0);
        }
        Menu(bank);
    }

    static Client newClient(){
        Client client = new Client();
        System.out.println("\nClient full name: ");
        Scanner scan = new Scanner(System.in);
        String name = scan.nextLine();
        client.setName(name);
        return client;
    }

    static void registerNewAcc(Bank bank){
        Client client = newClient();
        System.out.println("\nRegistered " + client.getName());
        Account account;
        System.out.println("\nTypes of account\n1. Checking\n2. Savings\n\nPlease select an option:");
        Scanner scan = new Scanner(System.in);
        int accType = scan.nextInt();
        while(accType != 1 && accType != 2){
            System.out.println("\nEnter a valid option:");
            accType = scan.nextInt();
        }
        if(accType == 1){
            account = new CheckingAcc(client);
        }
        else{
            account = new SavingsAcc(client);
        }
        //List accList = bank.getAccs();
        //accList.add(account);
        account.showBalance();
    }
}