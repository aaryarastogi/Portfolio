#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<vector<int>>res;
    vector<int>n1={1,2,3};
    vector<int>n2={2,4,6};
    vector<int>a;
    for(int i=0;i<n1.size();i++){
        for(int j=0;j<n2.size();j++){
            if(n1[i]!=n2[j]){
                a.push_back(n1[i]);
            }
        }
    }
    res.push_back(a);
    for(auto x:a){
        cout<<x<<endl;
    }
    return 0;
}