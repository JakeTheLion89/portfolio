#include "iostream"
#include "vector"
#include <stdlib.h>
#include <time.h>

std::vector<int> td_mergesort(std::vector<int> v_input);
std::vector<int> generate_integers(int range_input, int max);

template<typename T>
std::ostream& operator << (std::ostream &output, const std::vector<T> &v_input){
    output << '[';
    for(int i = 0; i < v_input.size(); i++)
        output << ' ' <<v_input[i];

    output << ']' << '\n';
    return output;
}

int main()
{
    std::vector<int> rand_ints,sorted_ints;

    rand_ints = generate_integers(100,9999);

    std::cout << rand_ints;

    sorted_ints = td_mergesort(rand_ints);

    std::cout << sorted_ints;

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

std::vector<int> merge(std::vector<int> l_vector, std::vector<int> r_vector){

    // after the vector is partitioned to one element per vector
    // the algo takes two vectors and compares them
    std::vector<int> result;

    //reserveing space on the result vector
    result.reserve(l_vector.size() + r_vector.size());

    // for each element in the left array and right
    // switch the elements add the greater to to the right
    // and the lesser to the left
    while ((l_vector.size() > 0) && (r_vector.size() > 0)){
        if (l_vector[0] <= r_vector[0]){
            result.insert(result.end(),l_vector[0]);
            l_vector.erase(l_vector.begin());
        }
        else{
            result.insert(result.end(),r_vector[0]);
            r_vector.erase(r_vector.begin());
        }
    }


    // and then append what is left over on the left vector and the right vector
    // to the end of the array
    if(l_vector.size() > 0){
        result.insert(result.end(),l_vector.begin(), l_vector.end());
    }

    if(r_vector.size() > 0){
        result.insert(result.end(),r_vector.begin(), r_vector.end());
    }

    // return result
    return result;
}

std::vector<int> td_mergesort(std::vector<int> v){
    // the mergesort works recursively
    // if v is only one element long
    // return v
    if (v.size() <= 1)
        return v;

    //then separate into two particions
    std::vector<int> left, right;

    for(int i = 0; i < v.size(); i++){
        if (i < (v.size()/2))
            left.push_back(v[i]);
        else
            right.push_back(v[i]);
    };

    //the merge sort happens recursively
    // first it will sort elements of the left side
    left = td_mergesort(left);

    // then the right
    right = td_mergesort(right);

    //and return a sorted merged vector
    return merge(left,right);
}
