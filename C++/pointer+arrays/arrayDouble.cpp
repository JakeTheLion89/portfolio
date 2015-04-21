
//arrayDouble.cpp

#include "arrayDouble.h"
#include "iostream"
using namespace std;

double ArrayDouble::Max(){
    double result = dArray[0];

    for(int i = 1; i < arrayLen; i++)
        if(result < dArray[i]) // if result is lower than element
            result = dArray[i];// result is element

    return result;
}

double ArrayDouble::Min(){
    double result = dArray[0];

    for(int i = 1; i < arrayLen; i++)
        if(result > dArray[i]) // if result is higher than element
            result = dArray[i];// result is element

    return result;
}

void ArrayDouble::Size(const int sz){
    if (sz == arrayLen) // if array length is the same
        return; // get out of function.

    int bufferLen;

    if(sz < arrayLen)
        bufferLen = sz;
    else
        bufferLen = arrayLen;

    double temp[sz];

    for(int i = 0; i < bufferLen; i++) // assign values into the "temp" array
        temp[i] = dArray[i];

    delete[] dArray; // deallocate memory from dArray pointer

    dArray = new double[sz]; // allocate new memory for dArray pointer

    arrayLen = sz; // change arrayLen

    for(int i = 0; i < arrayLen ; i++)
        dArray[i] = temp[i]; // assign values into the pointer
}

void ArrayDouble::Zero(){
    for(int i = 0; i < arrayLen; i++)
        dArray[i] = 0;
}

void ArrayDouble::SetTo(double v){
    for(int i = 0; i < arrayLen; i++)
        dArray[i] = v;
}

void ArrayDouble::Sort(char order){

    if((order=='a')|| (order=='A'))
    {
        for(int i = arrayLen - 1; i >= 0; i--)
            for(int n = 0; n < i; n++)
                if(dArray[n] > dArray[n+1])
                {
                    double temp = dArray[n];
                    dArray[n] = dArray[n+1];
                    dArray[n+1] = temp;
                };
    }
    else if((order=='d')|| (order=='D'))
    {
        for(int i = arrayLen - 1; i >= 0; i--)
            for(int n = 0; n < i; n++)
                if(dArray[n] < dArray[n+1])
                {
                    double temp = dArray[n];
                    dArray[n] = dArray[n+1];
                    dArray[n+1] = temp;
                };
    };
}

bool ArrayDouble::operator==(ArrayDouble arrObj){
    if(arrayLen == arrObj.arrayLen)
    {
        int i;
        for(i = 0; dArray[i] == arrObj.dArray[i]; i++)
            ;
        if (i == arrayLen)
            return true;
    };
    return false;
}

bool ArrayDouble::operator!=(ArrayDouble arrObj){
    if(arrayLen == arrObj.arrayLen)
    {
        int i;
        for(i = 0; dArray[i] == arrObj.dArray[i]; i++)
            ;
        if (i == arrayLen)
            return false;
    };
    return true;
}

ostream& operator<<(ostream& strm, ArrayDouble arrObj ){
    for(int i = 0; i < arrObj.arrayLen; i++)
        strm << arrObj.dArray[i] << endl;

    return strm;
}
