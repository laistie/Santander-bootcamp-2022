public interface IAcc{
    void withdraw(double value);
    void deposit(double value);
    void transfer(Account dest, double value);
    void showBalance();
}