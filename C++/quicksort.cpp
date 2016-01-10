#include "iostream"
#include "vector"
#include <stdlib.h>
#include <time.h>


std::vector<int> generate_integers(int range_input, int max);
void my_quicksort(std::vector<int> &v_input, int left, int right);

template<typename T>
std::ostream& operator << (std::ostream &output, const std::vector<T> &v_input){
    output << '[';
    for(int i = 0; i < v_input.size(); i++)
        output << ' ' <<v_input[i];

    output << ']' << '\n';
    return output;
}


int main(){

    std::vector<int> random_ints;
    int pivot = 0,
        v_end = 0,
        user_range = 0;

    std::cout << "How many numbers do you want to sort?: ";
    std::cin >> user_range;

    random_ints = generate_integers(user_range,9999);
    v_end = random_ints.size()-1;

    std::cout << "====UNSORTED VECTOR VALUES===="<< std::endl
              << random_ints << std::endl;


    my_quicksort(random_ints, 0, v_end);

    std::cout << "====QUICKSORTED VECTOR VALUES===="<< std::endl
              << random_ints << std::endl;

    return 0;
}

std::vector<int> generate_integers(int range_input, int max){

    // Generate random integers for a given range and a given maximum
    int  i = 0;
    std::vector<int> output(range_input,0);

    // set up the seed for rand() with unix time
    std::srand(std::time(0));

    // then input random values into the vector
    for(i=0; i < range_input; i++)
        output[i] = std::rand() % max;

    return output;
}


void my_quicksort(std::vector<int> &v_input, int left, int right){
    // set up lower index-left to i
    // upper index - right to j
    // and a temp for swapping
    int i = left, j = right, temp = 0;

    // then choose a pivot ( in this case it's the value of the middle index)
    int pivot = v_input[(left+right)/2];

    // then partition vector values to the left( <=pivot) and the right (>pivot)
    // while i and j converge
    while(i <= j){
        // find a value on the left side of the vector that is greater
        // than the pivot
        while(v_input[i] < pivot)
            i++;
        // then find a value on the right side of the vector that is less
        // than the pivot
        while (v_input[j] > pivot)
            j--;
        // if the indexes on the left and right have not yet converged
        // swap the value on the left with the value on the right
        // this puts the values lower than the pivot on the left side of the
        // vector and values greater than the pivot on the right
        if (i <= j){

            temp = v_input[i];
            v_input[i] = v_input[j];
            v_input[j] = temp;

            // then go to the next index for i and j
            i++;
            j--;
        };
    };

    // at this point i and j have converged
    // two sub vectors are made with parameter left and index j (lower sub-vector)
    // and parameter right and index i (upper sub-vector)

    // if j has not converged to the beginning of the vector
    // recursively do a quicksort on the lower sub-vector
    if (left < j)
        my_quicksort(v_input,left,j);

    // this will continue until j reaches the beginning of the vector
    // this will sort the lower part of the vector

    // if i has not converged to the end of the vector
    // recursively do a quicksort on the upper sub-vector
    if (i < right)
        my_quicksort(v_input,i,right);
    // this will contine until i reaches the end of the vector
    // this will sort the upper part of the vector


}
