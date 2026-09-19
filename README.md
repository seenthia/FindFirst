Section 1 — Command Description

FindFirst.js is a Node.js command that combines grep and head. It searches for a word in the first number of lines that the user chooses from a file.

To run it:

node FindFirst.js <PATTERN> <FILENAME> [NUMBEROFLINES]

This command combines grep, which searches for a word in a file, and head, which shows the first number of lines.

Section 2 — AI-Assisted Programming

I asked AI to explain the grep and head commands and to suggest test cases and edge cases for my command. AI helped me understand the commands and gave me ideas for testing FindFirst.js.

I had to run the tests myself, check the results, and make changes to my code. During testing, I found that the program crashed when I entered a number of lines that was greater than the number of lines in the file. AI helped me understand the issue, but I made the change and tested the program again.

One thing AI missed at first was this edge case. Testing helped me find the problem and improve my command.
