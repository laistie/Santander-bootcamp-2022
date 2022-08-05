import java.util.List;

public class Bank{
    private String name;
    private List<Account> accounts;

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public List<Account> getAccs(){
        return accounts;
    }

    public void setAccs(List<Account> accounts){
        this.accounts = accounts;
    }

    public void showAccs(){
        for(Account element:this.accounts){
            System.out.println(element + "\n");
        }
    }
}