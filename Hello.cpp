#include<stdio.h>
#include<iostream>
#include<cstring>
using namespace std;

class Hero{
    
    int health;
    char level;
    

    public:
    char *name;

    Hero(){
        cout<<"Constructor called"<<endl;  
        name = new char[100];  // Dynamic memory allocation for name
    }



    Hero (Hero &temp){
        char *ch=new char[strlen(temp.name)+1];  // Deep copy of name (pointer)
        strcpy(ch,temp.name);
        this->name = ch;

        this->health=temp.health; 
        this->level = temp.level;
    }

    Hero(int health){
        this->health = health;  // Parameterized constructor
        cout<<this<<endl;
    }

    Hero(int health,char Level,char *name){

        this->health = health;  
        this->level =   Level;
        this->name = name;
    }

    void print(){
        cout<<"Name is "<<this->name<<endl;
        cout<<"Health is "<<this->health<<endl;
        cout<<"Level is "<<this->level<<endl;
    }



    int getHealth(){
        return health;
    }

    char getLevel(){
        return level;
    }
    
    void setLevel(char l){
        level = l;
    }

    void setHealth(int h){
        health = h; 
    }

    void setName(char name[]){
        strcpy(this->name,name);
    }
    
};

    

int main(){















    
    //  Hero h1;
    //     h1.setHealth(100);
    //     h1.setLevel('A');
    //     char name[7] = "Hero1";
    //     h1.setName(name);

    //     h1.print();

    //     Hero h2(h1);
    //     h2.print();
        
    //     h1.name[0] = 'P';  // Modifying h1's name to see if it affects h2 (deep copy)
        
    //     h1.print();  // Should print "Pero1"
    //     h2.print();  // Should still print "Hero1" if deep copy is implemented correctly








    // Hero S(10,'a');
    // S.print();

    // Hero R(S);   // Copy constructor
    // R.print();
    // Hero a(10);
    // cout<<"Address of a is "<<&a<<endl;
    

    // a.setHealth(50);
    // a.setLevel('c');
    // cout<<"Health is "<<a.getHealth()<<endl;
    // cout<<"Level is "<<a.getLevel()<<endl;

    // Hero *b = new Hero;
    // b->setHealth(70);
    // b->setLevel('d');
    // cout<<"Health is "<<b->getHealth()<<endl;
    // cout<<"Level is "<<b->getLevel()<<endl;
    
}