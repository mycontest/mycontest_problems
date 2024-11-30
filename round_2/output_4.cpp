#include "bits/stdc++.h"
using namespace std;
#define ll long long
#define ld long double

void solve(ifstream& input, ofstream& output) {
   long long n;
   input>>n;
   if(n<3) output<<n;
   else output<<n * (n-1) * (n-2);
}

int main() {
    ios::sync_with_stdio(0); 
    cin.tie(0);

    for (int fileNumber = 0; fileNumber < 15; ++fileNumber) {
        cout<<fileNumber<<endl;
        // Generate file names
        string inputFileName = "4/input" + to_string(fileNumber) + ".txt";
        string outputFileName = "4/output" + to_string(fileNumber) + ".txt";

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
