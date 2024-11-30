#include "bits/stdc++.h"
using namespace std;
#define ll long long
#define ld long double

void solve(ifstream& input, ofstream& output) {
   int n, x = 0, y = 0, i = 1;
   input >> n;

   while (true) {
      if (i % 2 == 0) {
         x = x + (2 * i - 1);
      } else {
         x = x + -1 * (2 * i - 1);
      }

      if (abs(x) > n) {
         if (i % 2 == 1) {
            output << "Ali" << endl;
         } else {
            output << "Vali" << endl;
         }
         break;
      }
      i++;
   }
}

int main() {
    ios::sync_with_stdio(0); 
    cin.tie(0);

    for (int fileNumber = 0; fileNumber < 15; ++fileNumber) {
        cout<<fileNumber<<endl;
        // Generate file names
        string inputFileName = "3/input" + to_string(fileNumber) + ".txt";
        string outputFileName = "3/output" + to_string(fileNumber) + ".txt";

        // Open input and output files
        ifstream input(inputFileName);
        ofstream output(outputFileName);

        if (!input) {
            cerr << "Error: Could not open " << inputFileName << endl;
            continue;
        }

        int t; 
        input >> t; // Read the number of test cases
        while (t--) {
            solve(input, output);
        }

        input.close();
        output.close();
    }

    return 0;
}
