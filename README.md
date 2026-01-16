## About Repo

This repo is created for Git training purpose in Antino Labs.

Happy Coding!

Thankyou

---
## Feature Added
### Persist Previous Row Counter Entries
Previously, the application lost all saved row counter entries when the page was refreshed.
This feature adds persistence for **previously saved entries** using `localStorage`, ensuring
that user-saved data is retained across page reloads.

## How to Test
1. Open the application in the browser.
2. Click **Increment** to increase the row counter.
3. Click **Save** to store the current value under "Previous entries".
4. Refresh the page.
5. Verify that the **Previous entries** are still visible after reload.
