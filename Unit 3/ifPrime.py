def prime(n):
    flag = 0;
  
    # checking divisibilty by 6
    if ((n + 1) % 6 != 0 and (n - 1) % 6 != 0):
        print("Not Prime");
    else:
  
        # breakout if number is perfect square
        s = pow(n, 1/2);
        if ((s * s) == n):
            print("Semi-Prime");
        else:
            f = int(s);
            l = int(f * f);
  
            # Iterating over to get the
            # closest average value
            for i in range(f + 1, l):
  
                # 1st Factor
                p = i - (pow(((i * i) - (n)), 1/2));
  
                # 2nd Factor
                q = n // p;
  
                # To avoid Convergence
                if (p < 2 or q < 2):
                    break;
                  
                # checking semi-prime condition
                if ((p * q) == n):
                    flag = 1;
                    break;
                  
                # If convergence found
                # then number is semi-prime
                else:
  
                    # convergence not found
                    # then number is prime
                    flag = 2;
                  
            if (flag == 1):
                print("Semi-Prime");
            elif(flag == 2):
  
                print("Prime");
              
# Driver code
if __name__ == '__main__':
  
    # Entered number should be greater
    # than 300 to avoid Convergence of
    # second factor to 1
    prime(8179);
    prime(7894561);
    prime(90000000);
    prime(841);
    prime(22553);
    prime(1187);
  