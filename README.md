> Infinite scrolling is incredibly common especially in social media applications, but it is intimidating to setup. In this video I will be breaking down exactly how to setup infinite scrolling and why it is much easier than it appears. Infinite scrolling is really just a fancy type of pagination that will paginate without the user needing to click a button. This means that we can setup simple pagination, but instead of hooking it up to a button we need to hook it up to scrolling. Setting up a JavaScript event on scroll is not very performant, though, so we will be using the amazing InteresectionObserver API to efficiently check for when the last element of our list is loaded.

## Lessons Learned:

- Using Axios for API calls
- API used : **openlibrary.org**
- How to use React hooks
- useEffect, useState, useRef, useCallback hooks
- IntersectionObserver with React
- used `set` in javascript, pass it an array and it returns just the unique elements
