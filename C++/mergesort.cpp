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
    std::vector<int> rand_ints;

    rand_ints = generate_integers(1000,9999)


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

std::vector<int> td_mergesort(std::vector<int> v){

    if (v.size() <= 1)
        return v;

    std::vector<int> left, right;

    for(int i = 0; i < v.size){
        if (i%2 != 0)
            left.push_back(v[i]);
        else
            right.push_back(v[i]);
    };

    td_mergesort(left);
    td_mergesort(right);

    return merge(left,right);
}

std::vector<int> merge(std::vector<int> l_vector, std::vector<int> r_vector){
    std::vector<int> result,container;

    while ((l_vector.size() > 0) && ((r_vector.size() > 0)){
        if l_vector[0] >= r_vector[0]{
            container.insert(l_vector.begin(),l_vector[0]);
            l_vector.erase(l_vector.begin());
        }
        else{
            container.insert(r_vector.begin(),r_vector[0]);
            r_vector.erase(r_vector.begin());
        }
    }

    if(l_vector.size() > 0){
        result.reserve(container.size() + l_vector.size());
        result.insert(result.end(),container.begin(), container.end())
        result.insert(result.end(),l_vector.begin(), l_vector.end())
    }
    if(r_vector.size() > 0){
        result.reserve(container.size() + r_vector.size());
        result.insert(result.end(),container.begin(), container.end())
        result.insert(result.end(),r_vector.begin(), r_vector.end())
    }

    // test this and explain how it works
    return result;
}



}
