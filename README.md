# highlights-getter
Project code and minified bookmarklet that allows users to get a raw JSON-formatted string of all
of their Kindle highlights.

# Usage
Usage requires you to have an Amazon account attached to a Kindle. The account must have at least
one highlight or note in at least one Kindle book.

1. In your browser of choice (supported browser list to come), create a bookmark.
2. Set the "name" of the bookmark to whatever you please (I use "SAVE KINDLE NOTES")
3. Ensure the bookmark is visible when browsing normally, for example, show your bookmarks bar, and place the bookmark in the list of bookmarks in your bookmarks bar.
4. Copy all of the text in the `highlights-getter.min.js` file in this repo, and paste it into the URL field of the bookmark.
5. Navigate to https://read.amazon.com/kp/notebook
6. If not signed in, do so.
7. Click the bookmark you created earlier. This will cause the javascript code you pasted to run.
8. Wait a bit. You should see an alert pop up letting you know that your kindle notes are saved in your clipboard.

Now you may paste your JSON formatted kindle notes wherever you want. If you want them to be easier to look through, consider finding a free online JSON prettifier.

# License
GPL3
