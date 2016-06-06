#array-cop#
[![Code Climate](https://codeclimate.com/github/tomkallen/array-cop/badges/gpa.svg)](https://codeclimate.com/github/tomkallen/array-cop) [![GitHub version](https://badge.fury.io/gh/tomkallen%2Farray-cop.svg)](https://badge.fury.io/gh/tomkallen%2Farray-cop)

Array cop is a zero-dependant vanilla JS nano-library / npm module that deals with arrays.
It is just an utility tool that makes life easier.

##Current features:##
- Flattens any kinds of nested arrays
- Removes duplicates from an array  
- Picks one random item from an array in a specific range  
- Returns the sum of all Numbers in an array no matter how deeply nested they are while ignoring all other types of items  
- Returns and average of Number items in an array, including nested ones. Omits NaNs  
- Returns an object where its `keys` are array items and `values` — numbers of times any given item appears in an array  

*ultra-early dev build. NOT PUBLISHED TO NPM*  

##Usage##

###Browser###
`<script src = "array-cop.min.js">`

###npm###
`npm install --save array-cop`

`var array_ = require('array-cop');`
