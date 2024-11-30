#include "bits/stdc++.h"
using namespace std;
#define ll long long
#define ld long double

void solve(ifstream& input, ofstream& output) {
    string a,b[17]={"00:00","01:10","02:20","03:30","04:40","05:50","10:01","11:11","12:21","13:31","14:41","15:51","20:02","21:12","22:22","23:32"};
    input>>a;
    int s=0,i=0;
    for(;i<17;i++) if(a<b[i]) { output<<b[i]; s++; break;}
    if(s==0) cout<<b[0];
}

int main() {
    ios::sync_with_stdio(0); 
    cin.tie(0);

    for (int fileNumber = 0; fileNumber < 15; ++fileNumber) {
        cout<<fileNumber<<endl;
        // Generate file names
        string inputFileName = "7/input" + to_string(fileNumber) + ".txt";
        string outputFileName = "7/output" + to_string(fileNumber) + ".txt";

        // Open input and output files
        ifstream input(inputFileName);
        ofstream output(outputFileName);

        if (!input) {
            cerr << "Error: Could not open " << inputFileName << endl;
            continue;
        }

        solve(input, output);

        input.close();
        output.close();
    }

    return 0;
}
