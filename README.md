# Turn Your 404 Error Page Redirections into Search Results

This script redirects the current page/blog to another blog/site, or the same blog/site. The redirected page will display the search results for the blog post title.

## Note

This is not a 301 redirection method. It's designed to make it easy for users to reach the intended post from a 404 page without any issues.

## Benefits

This script can be used to convert 404 pages into search results. Read more about the implementation here (coming soon).  
##### It can also be used for redirecting within the same domain.

## What Really Happens Here?

![404 Redirection](https://raw.githubusercontent.com/beingfranklin/404-Redirection-into-Search/master/ScreenCapture.gif)

1. Fetch the last part of the URL from Site A.
2. Clean it by removing unwanted hyphens and replacing them with spaces or search terms.
3. Optional: Remove the `.html` extension from the string.
4. Use this formatted string to perform a search on Site B.
   (In most cases, the results will be narrowed as the URL is truncated.)
