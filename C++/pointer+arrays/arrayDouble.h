//arrayDouble.h

#ifndef _ARRAYDOUBLEH
#define _ARRAYDOUBLEH

#include "iostream"
using namespace std;

class ArrayDouble {
private:
    double *dArray;
    int arrayLen;

public:
    //constructors
    ArrayDouble():arrayLen(0),dArray(NULL){};
    ArrayDouble(int sz){

        for(arrayLen=0; arrayLen <= sz; arrayLen++);

        dArray = new double[arrayLen];

        for(int i = 0; i < arrayLen; i++)
            dArray[i] = 0;
    };

    ArrayDouble(int sz, double initval){
        for(arrayLen = 0; arrayLen < sz; arrayLen++);

        dArray = new double[arrayLen];

        for(int i = 0; i < arrayLen; i++)
            dArray[i] = initval;
    };

    //Access Methods
    int Size()
    {return arrayLen;};
    double Max();
    double Min();

    //Modifier Methods
    void Size(int sz);
    void Zero();
    void SetTo(double v);
    void Sort(char order);

    //Overloaded Operators
    double& operator[](int indx)
    {return dArray[indx];};

    bool operator==(ArrayDouble arrDoubObj);
    bool operator!=(ArrayDouble arrDoubObj);
    friend ostream& operator<<( ostream& strm, ArrayDouble arrDoubleObj);
};

#endif
