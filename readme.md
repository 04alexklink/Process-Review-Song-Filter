#BAND PASS FILTER
# THE PROBLEM
Client would like me to create a filter that can be used to ensure songs that are passed through this filter will be changed to adhere to the soundwave frequency threshold requirements as specified. 

The filter will take 3 arguments/ inputs 
1.) The song: An array of numbers, with each element representing a frequency/soundwave within the song. 
2.) An integer representing the lowest threshold of frequency allowed
3.) An integer representing the highest threshold of frequency allowed

Example input provided by client:
[10, 45, 100, 1001],40,1000
Example output expected:
[40, 45, 100, 1000]

To build on this idea with more examples I should test for:
INPUT                        | OUTPUT
[10, 20, 40] 10, 40          | [10, 20, 40] i.e. song is returned without having been modified
[10, 20, 40] 15, 40          | [15, 20, 40] i.e. song is returned with modifications due to   low threshold being breached |
[10, 20, 40] 10, 35          | [10, 20, 35] i.e. song is returned with modficiations due to high threshold being breached|
[10, 45, 100, 1001] 40, 1000 | [40, 45, 100, 1000] Both thresholds require song to be modified. 

Edge Cases:
- Input of strings or non integer values. 

Method vs Class instance?
Does the modified song simply just need to be returned, or stored and kept. If stored and kept, i'd create a class so that a new instance of the filter can be used with each new song. 
