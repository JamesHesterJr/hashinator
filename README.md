# Quick Code Assessment:

Following is a brief coding assessment provided by a potential employer.

## Code Sample

The following was provided via link by the potential employer. The direct link to the assignment and any data (aside from the information necessary to describe the assignment) has been removed from this file. 

Write a JavaScript function `unhash(num)` to find a ten letter string of characters that contains only letters from:

`acdfgilmnoprstuw`

such that the `hash(the_string)` is:

--> `292681030017238` <--

if hash is defined by the following pseudo-code:
```
Int64 hash(String s)
{
Int64 hash = 7
String letters = "acdfgilmnoprstuw"
for(Int32 i = 0; i < s.length; i++)
{
hash = (hash * 23 + letters.indexOf(s[i]))
}
return hash
}
```

For example, if we were trying to find the eight letter string where `hash(the_string)` was `593846452632`, the answer would be `"tortilla"`. The following should also not fail.
```
console.assert("tortilla" == unhash(hash("tortilla")));
```

# Author
All contents authored by James Hester Jr. Any questionsa or comments, please direct to himself@jameshesterjr.com