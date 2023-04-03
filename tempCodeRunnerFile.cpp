#include<bits/stdc++.h>
using namespace std;
class Node{
    public:
    int data;
    Node*left;
    Node*right;
    Node(int val){
        this->data=val;
        this->left=NULL;
        this->right=NULL;
    }
};
void preorder(Node*root){
    if(root!=NULL){
        cout<<root->data<<" ";
    preorder(root->left);
    preorder(root->right);
    }
}
void postOrder(Node*root){
    if(root==NULL){
        return;
    }
    postOrder(root->left);
    postOrder(root->right);
    cout<<root->data<<" ";
}
void inorder(Node*root){
    if(root==NULL){
        return;
    }
    inorder(root->left);
    cout<<root->data<<" ";
    inorder(root->right);
}
int main(){
    Node*root=new Node(1);
    root->left=new Node(2);
    root->right=new Node(3);
    root->left->left=new Node(4);
    root->left->right=new Node(5);
    root->right->left=new Node(6);
    root->right->right=new Node(7);
    cout<<"Preorder:"<<endl;
    preorder(root);
    cout<<endl<<"Inorder:"<<endl;
    inorder(root);
    cout<<endl<<"Postorder:"<<endl;
    postOrder(root);
    return 0;
}