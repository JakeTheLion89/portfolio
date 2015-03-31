//Jake Leonen
//Object Oriented Programming
//Assignment 5
//December 18th 2014

#include "iostream"
using namespace std;

//Date Class//

class Date{
private:
    int day,
        month,
        year;
public:
    // Constructors
    Date();
    Date(int m, int d, int y);

    //Access functions
    int get_day() const;
    int get_month() const;
    int get_year() const;

    //Modifier functions
    void set_day(int d){
        day = d;
    }

    void set_month(int m){
        month = m;
    }

    void set_year(int y){
        year = y;
    }

    void set_date(int m, int d, int y){
        month = m;
        day = d;
        year = y;
    }

    //overloaded operations
    bool operator < (Date); //replaced lessthan()
    bool operator > (Date); //replaced greaterthan()
    bool operator == (Date);//replaced equalto()

    //overloaded  IO
    friend istream& operator >> (istream& strm, Date& d); //replaced read()
    friend ostream& operator << (ostream& strm, Date d);// replaced write()
};

//Function Prototypes
void askForDates(int& count,Date dateList[]);
void swapDates(Date& d1, Date& d2);
void ascendingDates(int count,Date dateList[]);
void descendingDates(int count,Date dateList[]);
void writeDates(int count,Date dateList[]);


///MAIN FUNCTION BEGINS HERE////
int main()
{
    Date datearray[100],
         d1,d2; // used to demonstrate overloaded ">>" and "<<" operators;

    int count = 0;
    char response;

    //First test "<<" and ">>" operators with Date objects
    cout << "THIS IS A TEST" << endl
         << "Enter two dates in MM/DD/YYYY format: ";

    cin >> d1 >> d2;

    cout << "The test dates are: " << endl
         << "d1: " << d1 << endl
         << "d2: " << d2 << endl;

    //
    cout << "Order up a list of dates!" << endl;

    askForDates(count,datearray);

    if(count != 0)
    {
        cout << "Do you want the dates in [a]scending or [d]escending order(Type A/d): ";
        cin >> response;

        while(((response != 'a') && (response != 'A') &&
               (response != 'd') && (response != 'D')))
        {
            cout << "Invalid response" << endl
                 << "Do you want the dates in [a]scending or [d]escending order(Type A/d): ";

            cin >> response;
        }

        if ((response == 'a') || (response == 'A'))
            ascendingDates(count,datearray);
        else
            descendingDates(count,datearray);

        writeDates(count,datearray);
    }
    else
        cout << "No values entered" << endl;

    cout << "Done!\n";
}
///MAIN FUNCTION ENDS

//Date Class Definitions//

//CONSTRUCTORS
Date::Date(){
    day = month = year = 0;
}

Date::Date(int m, int d, int y){
    day = d;
    month = m;
    year = y;
}

//ACCESS
int Date::get_day() const{
    return day;
};

int Date::get_month() const{
    return month;
}

int Date::get_year() const{
    return year;
}

//CLASS RELATED OPERATORS
bool Date::operator < (Date otherDate){ // "<" for date class
    if( (year < otherDate.year) ||
        ((year == otherDate.year) && (month < otherDate.month)) ||
        ((year == otherDate.year) && (month == otherDate.month) && (day < otherDate.day))
        )
        return true;
    else
        return false;
}

bool Date::operator > (Date otherDate){ // ">" for date class
    if( (year > otherDate.year) ||
        ((year == otherDate.year) && (month > otherDate.month)) ||
        ((year == otherDate.year) && (month == otherDate.month) && (day > otherDate.day))
        )
        return true;
    else
        return false;
}

bool Date::operator == (Date otherDate){ // equality check for date class
    if ((year == otherDate.year) && (month == otherDate.month) && (day == otherDate.day))
        return true;
    else
        return false;
}

istream& operator >> (istream& strm, Date& d){
    char cantTouchThis;

    cin >> d.month >> cantTouchThis >> d.day >> cantTouchThis >> d.year;

    return strm;
}

ostream& operator << (ostream& strm, Date d){
    if (d.get_month() < 10)
        cout << 0;

    cout << d.get_month() << '/';

    if (d.get_day() < 10)
        cout << 0;

    cout << d.get_day() << '/';

    if ((d.get_year() >= 100) && (d.get_year() <= 999))
        cout << "0";
    else if ((d.get_year() >= 10) && (d.get_year() <= 99))
        cout << "00";
    else if(d.get_year() < 10)
        cout << "000";

    cout << d.get_year() << endl;

    return strm;
}

// program functions

void swapDates(Date& d1, Date& d2){
    Date tempDate;

    tempDate = d1;
    d1 = d2;
    d2 = tempDate;
}

void askForDates(int& count,Date dateList[]){
    cout << "How many dates? (Min:0 / Max:100): ";

    cin >> count;

    while((count < 0) || (count > 100))
    {
        cout << "Invalid value. Please enter a number (Min:0 / Max:100): ";
        cin >> count;
    }

    //collect dates
    cout << "*ENTER DATES IN MM/DD/YYYY FORMAT*" << endl;

    for(int i=0;i < count; i++)
    {
        cout << "Enter date " << i+1 << ": ";
        cin >> dateList[i];
    }
}

void ascendingDates(int count, Date dateList[]){
    for(int n=count-1;n >= 0; n--)
    {
        for(int t=0;t < n;t++)
        {
            if (dateList[t] > dateList[t+1])
               swapDates(dateList[t],dateList[t+1]);
        }
    }
}

void descendingDates(int count, Date dateList[]){
    for(int n=count-1;n >= 0;n--)
    {
        for(int t = 0;t < n ;t++)
        {
            if (dateList[t] < dateList[t+1])
                swapDates(dateList[t],dateList[t+1]);
        }
    }
}

void writeDates(int count,Date dateList[]){
    for(int i=0; i < count; i++)
        cout << dateList[i];
}

/*OUTPUT

---ASCENDING ORDER---
Macs-MacBook-Pro-94:assignments mac$ ./assignment5
THIS IS A TEST
Enter two dates in MM/DD/YYYY format: 11/09/1989 12/12/1989
The test dates are:
d1: 11/09/1989

d2: 12/12/1989

Order up a list of dates!
How many dates? (Min:0 / Max:100): 5
*ENTER DATES IN MM/DD/YYYY FORMAT*
Enter date 1: 07/04/1776
Enter date 2: 12/18/2014
Enter date 3: 06/23/1912
Enter date 4: 04/15/2013
Enter date 5: 04/15/2014
Do you want the dates in [a]scending or [d]escending order(Type A/d): a
07/04/1776
06/23/1912
04/15/2013
04/15/2014
12/18/2014
Done!

---DESCENDING ORDER---
Macs-MacBook-Pro-94:assignments mac$ ./assignment5
THIS IS A TEST
Enter two dates in MM/DD/YYYY format: 04/15/1982
05/23/2090
The test dates are:
d1: 04/15/1982

d2: 05/23/2090

Order up a list of dates!
How many dates? (Min:0 / Max:100): 5
*ENTER DATES IN MM/DD/YYYY FORMAT*
Enter date 1: 07/04/1776
Enter date 2: 12/18/2014
Enter date 3: 06/23/1912
Enter date 4: 04/15/2013
Enter date 5: 04/15/2014
Do you want the dates in [a]scending or [d]escending order(Type A/d): D
12/18/2014
04/15/2014
04/15/2013
06/23/1912
07/04/1776
Done!

---Validity tests---
Macs-MacBook-Pro-94:assignments mac$ ./assignment5
THIS IS A TEST
Enter two dates in MM/DD/YYYY format: 12/21/23
12/12/2342
The test dates are:
d1: 12/21/0023

d2: 12/12/2342

Order up a list of dates!
How many dates? (Min:0 / Max:100): -1
Invalid value. Please enter a number (Min:0 / Max:100): 101
Invalid value. Please enter a number (Min:0 / Max:100): 0
*ENTER DATES IN MM/DD/YYYY FORMAT*
No values entered
Done!

*/
