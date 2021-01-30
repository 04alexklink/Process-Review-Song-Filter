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
[20], 10, 40                 | 20
[5], 10, 40                  | 10
[45], 10, 40                 | 40
[10, 20, 40] 10, 40          | [10, 20, 40] i.e. song is returned without having been modified
[10, 20, 40] 15, 40          | [15, 20, 40] i.e. song is returned with modifications due to   low threshold being breached |
[10, 20, 40] 10, 35          | [10, 20, 35] i.e. song is returned with modficiations due to high threshold being breached|
[10, 45, 100, 1001] 40, 1000 | [40, 45, 100, 1000] Both thresholds require song to be modified.                    |
[], 10, 40                   | error: "You haven't inputted a song"
[15, "string", 20], 10, 40   | error: "You have inputted a song with a non-integer frequency
[15, 20, 45]                 | [40, 40, 45] : Default low and high value of 40 and 1000 if not inputted as arguments.       |
[15, 20, 45], "Hello", 40    | Error is thrown: "Please provide integer threshold values"
[15, 20, 45], 10, "Hello"    | Error is thrown: "Please provide integer threshold values"

Edge Cases:
- If no low or high value provided as arguments, default of 40 and 1000 respectively is used
- If provide no song/emptry array, error is thrown telling you that a song is needed as input
- If a frequency in the song is found to be a non-integer, error is thrown 
- If a low or high value provided is not an integer, error is thrown  

Method vs Class instance?
Does the modified song simply just need to be returned, or stored and kept. If stored and kept, i'd create a class so that a new instance of the filter can be used with each new song. 
