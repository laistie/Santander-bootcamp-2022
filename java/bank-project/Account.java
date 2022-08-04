public abstract class Account implements IAcc{
    private static final int defAgency = 001;
    private static int COUNTING = 2000;

    protected int agency;
    protected int number;
    protected double balance;
    protected Client client;

    public Account(Client client){
        this.agency = defAgency;
        this.number = COUNTING++;
        this.client = client;
    }

    @Override
    public void withdraw(double value){
        if(value <= this.balance){
            this.balance -= value;
        }
        else{
            System.out.println("Operation denied, not enough funds.\n");
        }
    }
    
    @Override
    public void deposit(double value){
        this.balance += value;
    }
    
    @Override
    public void transfer(Account dest, double value){
        this.withdraw(value);
        dest.deposit(value);
    }

    @Override
    public void showBalance(){
        System.out.println(String.format("Account: %d-%d\nbalance: $%.2f\n", this.number, this.agency, this.balance));
    }

    public int getAgency(){
        return agency;
    }

    public int getNumber(){
        return number;
    }

    public double getBalance(){
        return balance;
    }
}