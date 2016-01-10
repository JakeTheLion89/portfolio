#include "iostream"
#include "algorithm"
#include "vector"

using namespace std;

bool binarysearch_function(vector<int> v_input, int key);
vector<int> int_bubblesort(vector<int> v_input);

int main()
{
    int ints[15] = {2,18,2,6,14,7,48,93,2,51,11,2,53,99,1};
    int user_input = 0;

    vector<int> intVector (ints, ints + sizeof(ints)/sizeof(int));

    cout << "Type in a number is see if its in the array: ";
    cin >> user_input;

    cout << binarysearch_function(intVector, user_input) << endl;

    return 0;

};

bool binarysearch_function(vector<int> v_input, int key){

    // First initiate indexes for hi and lo
    int lo, hi = 0;
    vector<int> v = v_input;

    hi = v.size() - 1;

    // order the vector
    v = int_bubblesort(v);

    // while lo is less than or equal to hi
    // derive the middle index
    // if the key is greater than the middle value of the vector,
    //      shorten the search range by making hi equal middle index - 1
    // if the key is less than the middle value
    //      shorten the search range by making lo equal the middle index + 1
    // else
    //      return confirmation that the middle value is equal ot the key
    // function returns false if the lo is equal or greater than hi
    //      this means that no element in the vector has the key
    while (lo <= hi) {
        int mid = lo + (hi - lo)/2;
        if (key < v[mid])
            hi = mid - 1;
        else if (key > v[mid])
            lo = mid + 1;
        else
            return true;
    }

    return false;

}


vector<int> int_bubblesort(vector<int> v_input){

    /*
        Bubble sort

        For the number of elements in the vector
        For all elements in the vector
            compare each element to the element ahead of it
            if the elements are not in order switch them
    */
    int i = 0;

    vector<int> v = v_input;

    for (i=0;i < v.size(); i++){

        int j = 0;

        for(j=0; j < v.size() - 1 - i ;j++){

            if(v[j] > v[j+1]){

                int temp = v[j];

                v[j] = v[j+1];
                v[j+1] = temp;
            };
        };
    };

    for (int i = 0; i < v.size(); i++)
        cout << v[i] << ", ";

    cout << '\n';
    return v;
}
