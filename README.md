## About Repo

This repo is created for Git training purpose in Antino Labs.

Happy Coding!

## Feature Added by Deepanshi Verma

### What I Added
- Added a **Row Counter** application with increment, save, and reset functionality
- This feature allows users to count rows (useful for knitting, crocheting, or any counting task) and save previous count entries
- Includes user-friendly alert messages and validation to enhance user experience

### How to Test It
1. Open `index.html` in your browser (or use Live Server in VS Code)
2. You'll see a white container with "Row Counter" as the heading and a count starting at 0
3. Click the **INCREMENT** button (blue) multiple times - watch the count increase
4. Click the **SAVE** button (green) to save the current count
   - You'll see success alert messages with your count
   - The saved count will appear under "Previous entries:" 
   - The counter automatically resets to 0
5. Try clicking **SAVE** without incrementing - you'll get a warning message
6. Click the **RESET ALL** button (red) to clear all saved entries
   - A confirmation dialog will appear to prevent accidental resets
   - Upon confirmation, all counts and entries will be cleared

### Files Added/Modified
- `index.html` - Created the counter UI with heading, display, and three action buttons
- `index.css` - Added styling with yarn background image, centered container, and color-coded button styles
- `index.js` - Implemented increment(), save(), and reset() functions with validation and alert messages

### Unique Features
-  Success alert when saving counts
-  Warning alert if trying to save with zero count
-  Motivational message on successful save
-  Confirmation dialog before resetting all data
- Auto-reset counter after each save
- Clean, centered UI with yarn-themed background