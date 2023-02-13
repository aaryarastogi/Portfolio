// //circular maxsubarray sum
// #include<bits/stdc++.h>
// using namespace std;
// int kadane(int arr[] , int s ){
//     int maxSum=INT_MIN;
//     int currSum=0;
//     for(int i=0;i<s;i++){
//         currSum+=arr[i];
//         if(currSum<0){
//             currSum=0;
//         }
//         maxSum=max(currSum , maxSum);
//     }
//     return maxSum;
// }
// int main(){
//     int n;
//     cin>>n;
//     int arr[n];
//     for(int i=0;i<n;i++){
//         cin>>arr[i];
//     }
//     int wrapsum;
//     int nonwrapsum;
//     nonwrapsum=kadane(arr , n);
//     int totalsum=0;
//     for(int i=0;i<n;i++){
//         totalsum+=arr[i];
//         arr[i]=-arr[i];
//     }
//     wrapsum=totalsum-(-(kadane(arr,n)));
//     cout<<max(wrapsum , nonwrapsum)<<endl;
//     return 0;
// }
#include<bits/stdc++.h>
using namespace std;
bool summation(int arr[] , int n , int k){
    int low=0;
    int high=n-1;
    while(low<high){
        if((arr[low]+arr[high])==k){
            cout<<low<<" "<<high<<endl;
            return true;
        }
        else if((arr[low]+arr[high])>k){
            high--;
        }
        else{
            low++;
        }
    }
    return false;
}
int main(){
    int arr[]={1,2,4,5,9,3,2,6};
    int sum=13;
    cout<<summation(arr , 8 , sum)<<endl;;
    return 0;
}