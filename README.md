# Test Assingment

A few notes that I changed and found during the implementation:

Changes:
Instead of a string field for the inventory name, I've decided to add a dropdown field to prevent errors.

Findings:
There is a bug on the back-end side with getting inventories from /inventory. Instead of returning all values, it returns only the last one.
