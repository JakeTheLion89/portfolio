//Jake Leonen
//Object Oriented Programming II
//Assignment 4
//April 2nd, 2015

//mainfile.cpp
#include "iostream"
#include "arrayDouble.h"
using namespace std;

int main()
{
    int enteredLength; // user's desired lenght
    char userRes; // user response for sort method
    ArrayDouble userArray; //

    cout << "Make a DOUBLE ARRAY!!!" << endl
         << "How long do you want this array to be?: ";

    cin >> enteredLength;

    userArray.Size(enteredLength); //changes length of ArrayDouble

    for(int i = 0; i < userArray.Size();i++) // enter values
    {
        cout << "Enter value " << i+1 << "/" <<  userArray.Size() << endl;
        cin >> userArray[i];
    };

    cout << "Do you want it in 'A'scending or 'D'escending order? (Enter 'A' or 'D'):";
    cin >> userRes;

    userArray.Sort(userRes); // do sort function

    cout << userArray << endl
         << "End of Program" << endl;

    return 0;
}

//////////
//OUTPUT//
//////////
/*
Macs-MacBook-Pro-94:assignment4 mac$ ./assignment4
Make a DOUBLE ARRAY!!!
How long do you want this array to be?: 5
Enter value 1/5
2.3
Enter value 2/5
5.2
Enter value 3/5
1.25
Enter value 4/5
23.5
Enter value 5/5
1.22
Do you want it in 'A'scending or 'D'escending order? (Enter 'A' or 'D'):A
1.22
1.25
2.3
5.2
23.5

End of Program
Macs-MacBook-Pro-94:assignment4 mac$ ./assignement4
Make a DOUBLE ARRAY!!!
How long do you want this array to be?: 5
Enter value 1/5
2.3
Enter value 2/5
5.2
Enter value 3/5
1.25
Enter value 4/5
23.5
Enter value 5/5
1.22
Do you want it in 'A'scending or 'D'escending order? (Enter 'A' or 'D'):d
23.5
5.2
2.3
1.25
1.22

End of Program
Macs-MacBook-Pro-94:assignment4 mac$
*/
