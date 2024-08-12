#include <bits/stdc++.h>
using namespace std;
int main() {
	vector<int> r;
	auto it = r.begin();
	r.push_back(3);
	r.push_back(5);
	r.push_back(10);
	r.push_back(2);
	for(auto i =r.begin();i !=r.end();i++){
		cout<<*(i)<<endl;
	}
}