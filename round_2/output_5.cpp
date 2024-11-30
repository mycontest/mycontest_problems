#include "bits/stdc++.h"
using namespace std;

#define ll long long
#define ld long double
const int mn = 10000;
int n;
std::vector<int> a(mn, 2); 
std::vector<int> m(mn);

int div2(int k, ifstream& input, ofstream& output) {
    int c = 0; // Carry
    for (int i = k; i >= 0; i--) {
        int x = m[i] + 10 * c;
        m[i] = x / 2;
        c = x - 2 * m[i];
    }
    return c;
}

int main() {
    ios::sync_with_stdio(0); 
    cin.tie(0);

    for (int fileNumber = 0; fileNumber < 15; ++fileNumber) {
        cout<<fileNumber<<endl;
        // Generate file names
        string inputFileName = "5/input" + to_string(fileNumber) + ".txt";
        string outputFileName = "5/output" + to_string(fileNumber) + ".txt";

        // Open input and output files
        ifstream input(inputFileName);
        ofstream output(outputFileName);

        if (!input) {
            cerr << "Error: Could not open " << inputFileName << endl;
            continue;
        }


        input >> n;
            a[0] = 2;

            for (int i = 1; i < n; i++) {
                a[i] = 1;
                for (int j = 0; j <= i; j++) m[j] = a[j];
                
                for (int j = 0; j <= i; j++) {
                    if (div2(i, input, output)) {
                        a[i] = 2;
                        break;
                    }
                }
            }

            for (int i = n - 1; i >= 0; i--) {
                output << a[i];
            } 

        input.close();
        output.close();
    }

    return 0;
}
