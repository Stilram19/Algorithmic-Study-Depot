#include <iostream>

int multiply(int x, int y)
{
    int result = 0;
    int level_multiplier = 1;

    while (x > 0)
    {
        int carry = 0;
        int level_result = 0;
        int x_digit = (x % 10);
        int y_temp = y;
        int digit_multiplier = 1;

        while (y_temp > 0)
        {
            int y_digit = y_temp % 10;
            int digit_multip_value = x_digit * y_digit;

            level_result += (digit_multip_value % 10 + carry) * digit_multiplier;
            carry = digit_multip_value / 10;
            digit_multiplier *= 10;
            y_temp /= 10;
        }

        level_result += carry * digit_multiplier;

        result += level_result * level_multiplier;
        level_multiplier *= 10;
        x /= 10;
    }
    return (result);
}

int main()
{
    for (int i = 0; i < 100; i++)
    {
        for (int j = 0; j < 100; j++)
        {
            if (multiply(i, j) != i * j)
            {
                std::cout << "Error" << i << "*" << j << "=" << multiply(i, j) << std::endl;
                return (1);
            }
        }
    }
    // std::cout << multiply(12, 5) << std::endl;
    std::cout << "Correct!" << std::endl;
    return (0);
}
