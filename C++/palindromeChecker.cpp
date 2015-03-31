//Jake Leonen
//Object Oriented Programming II
//Assignment 1
//February 19th, 2015

#include "iostream"
using namespace std;

//FUNCTION PROTOTYPES
void ToLowerString(char s[]);
bool IsPalindrome(char s[]);
void ValidationLoop(char s[]);

//MAIN FUNCTION BEGINS HERE//////////
int main()
{
    char keepGoing[100] = "yes",
         testString[255];

    int  counter = 0,
         numOfPalindromes = 0;

    cout << "---IS IT A PALINDROME---" << endl
         << "Do you want to check if your phrases are palindromes? (Type \"yes\" or \"no\"): " << endl;

    cin >> keepGoing;
    ToLowerString(keepGoing);
    
    ValidationLoop(keepGoing);


    while(strcmp(keepGoing,"yes") == 0)
    {

        cout << "Enter your phrase: ";
        cin.ignore();
        cin.getline(testString,255);
        counter++;

        ToLowerString(testString);

        if(IsPalindrome(testString) == true)
        {
            cout << "It's a palindrome!" << endl;
            numOfPalindromes++;
        }
        else
        {
            cout << "It's NOT a palindrome!" << endl;
        };


        cout << "Do you want to add another? (Type \"yes\" or \"no\"): ";
        cin >> keepGoing;
        ToLowerString(keepGoing);

        ValidationLoop(keepGoing);
    };

    if (counter > 0)
    {
        cout << "Number of palindromes " << numOfPalindromes << endl
             << "Number of non-palindrome phrases " << counter - numOfPalindromes << endl
             << "End of Program" << endl;
    }
    else
        cout << "No action taken \n" << "End of Program" << endl;

    return 0;
};
//MAIN ENDS HERE


////////////////////////
//Function Definitions//
////////////////////////

void ToLowerString(char s[]){
    int sLength = strlen(s);

    for (int i = 0; i < sLength; i++)
    {
        if ((s[i] >= 'A') && (s[i] <= 'Z')) // if the letter is capitalized
            s[i] = s[i] + 32; // make it lower case;
    };
};

bool IsPalindrome(char s[]){

    bool valid = true;
    char testStr[100] = {0};
    int tCount = 0;

    for(int n = 0; n < strlen(s); n++)
        if(((s[n] >= 'a') && (s[n] <= 'z')) || ((s[n] >= '0') && (s[n] <= '9')))
        {
            testStr[tCount] = s[n];
            tCount++;
        };

    for(int i = 0, j = strlen(testStr) - 1; i <= j; i++ , j-- )
        if (testStr[i] != testStr[j])
            valid = false;
    return valid;
};


void ValidationLoop(char s[]){
    
    while((strcmp(s,"yes") != 0) && (strcmp(s,"no") != 0))
    {
        cout << "Invalid response! (Type \"yes\" or \"no\")";
        cin >> s;
        ToLowerString(s);
    };
};

///////////////////
//HOMEWORK OUTPUT//
///////////////////

/*
---IS IT A PALINDROME---
Do you want to check if your phrases are palindromes? (Type "yes" or "no"):
nO
No action taken
End of Program

Macs-MacBook-Pro-94:assignments mac$ ./assignment1
---IS IT A PALINDROME---
Do you want to check if your phrases are palindromes? (Type "yes" or "no"):
yEs
Enter your phrase: Madam Im Adam
It's a palindrome!
Do you want to add another? (Type "yes" or "no"): yeS
Enter your phrase: 1234
It's NOT a palindrome!
Do you want to add another? (Type "yes" or "no"): Yes
Enter your phrase: Able was I ere I saw Elba
It's a palindrome!
Do you want to add another? (Type "yes" or "no"): YES
Enter your phrase: X
It's a palindrome!
Do you want to add another? (Type "yes" or "no"): yES
Enter your phrase: A man a plan a canal Panama
It's a palindrome!
Do you want to add another? (Type "yes" or "no"): YeS
Enter your phrase: aBa4
It's NOT a palindrome!
Do you want to add another? (Type "yes" or "no"): NO
Number of palindromes 4
Number of non-palindrome phrases 2
End of Program
*/

