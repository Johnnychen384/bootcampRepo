![](/ga_cog.png)

---
Title: Review: git/github, terminal, and anything we've covered so far & HTML <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Modified by: Kristyn Bryan<br>
Creator: Karolin Rafalski<br>
Competencies: git and github, terminal, html fundamentals <br>
Prerequisites: [Introduction to HTML](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>

---

# Git/Github Review - Confirm Success with Submitting HW


Let's take some time to make sure we all submitted hw correctly and we are able to get the course materials for the day.


### Each of you will interact with three copies of the class repo:
1. The instructor version
    - accessible to you on github. The github version is known as a 'remote' version or 'in the cloud' or 'on the internet'
      - you can look at the repo in the browser by going to the url: `https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Eevee`
      - you can get the contents onto your computer (local version) by `git pull upstream master` (we set this up during the last class)
        - `pull` means bring the changes 'here'
        - `upstream` is just an alias (another name) for the url location of our repo. Computer programers love to work smarter and not harder. By renaming the url to something short, informative and memorable it is much easier to type `upstream` than having to type `https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Eevee/tree/master/unit_1/w01d04/homework` every single time you want to get the changes
        - `master` is the name of the branch. `master` is the default name of the first branch created. We will learn about branches later. For now, we'll only work with master
2. Your remote version
 - accessible to you on github by going to the url
 - you can look at the repo in the browser on github
 - you can get contents onto your computer (local version) by `git pull origin master` (we set this up yesterday)
3. Your local version
 - accessible to you from your computer. This is the copy that 'lives' on your hard drive.
 - it does NOT automatically sync. You have to tell it to sync with the remote versions. This is a good thing.
 - you can send your version to your fork on github (origin). But the instructors have set it so that you can't send your work to our copy (upstream). If you try, you'll get an error. This is nice! You won't accidentally break the class repo.

- Homework submission will be a link to YOUR url of your copy of the class repo homework location

![Group.png](Group.png)


###  Daily workflow:

- `git status` - see the current state of your files

- `git pull upstream master` - get the latest instructor stuff

- `git add .` or `git add -A` (they both do the same thing) - select the files you want to track/save to github (called `staging`)
    - you may not always want to add all of your files all the time.
    - the command `git add .` or `git add -A` specifies 'all the files and folders in this directory' - so anything at this level and below. It will not select files that are in a higher directory
    - if you want to get files that are elsewhere, the easiest thing to do is to navigate to that place and use the above command

![git add](git_add_visual.png)

- `git commit -m 'some informative message'` - this is the command to make a `snapshot` of your file (saves the current version)

- `git push origin master` - this sends your work to your remote copy of the class repo

- Homework submission: create a github issue on the instructor repo that has a link to the location of your homework on your copy of the class repo

![hw submission](HW_submission.png)

### What Success Looks like

-  `git status`
![up to date](https://i.imgur.com/BGPy32T.png)

- `git pull upstream master`
![successful pull](https://i.imgur.com/jBeokRw.png)

### Common Errors and how to solve them



---
**Command:**
- `git status`

 **Error:**
 - `fatal: Not a git repository (or any of the parent directories) `

 **What does it mean?**

 - You are not in the correct directory in terminal

 **Fix**

 - navigate to the correct location on Terminal

 ---

 **Command:**
 - `git push origin master`

  **Error:**
  ```![rejected  master -> master (fetch first)]
  error: failed to push some refs to 'https://github.com/...'
  ...
   ```

   **What does it mean?**

   - Your remote version has more recent updates. You must pull them and merge them before you can push your latest changes
   - Important: Terminal may open Vim - remember to quit Vim - you must type `:wq` - the reason it opens Vim is so you can have a chance to write a descriptive comment about the merge. Keep it simple! In this class, you don't have to worry about writing a note about the merge.
   - Important: failing to exit Vim correctly can cause errors and you will have to start typing the commands again to finish

   **Fix**

   - `git pull origin master`
   - `:wq` if you are in Vim

---

  **Command:**
  - `git status`

   **Error:**


```
   On branch master
   Your branch is up-to-date with 'origin/master'.
   Untracked files:
      list_of_files
    Nothing added to commit but untracked files present (use "git add" to track)

```

   **What does it mean?**

   - Your files are not being tracked

   **Fix**

   - `git add .` or `git add -A`

---

### Converting a git repository back to a regular directory

- When you run `git init` it creates a hidden directory called `.git`
- You can only see this folder when you run `ls -a` , you won't see it if you just run `ls`, additionally, Finder's default is to not show hidden files
- `.git` is updated automatically and you should never make changes in there
- if you no longer want a directory to be tracked by git, you can delete the entire `.git` folder, then when you type `git status` it should then say `fatal: Not a git repository (or any of the parent directories) `

**DANGER ZONE** to remove `.git` , go into the directory where the wrong `.git` is and type `rm -rf .git`

**Use extreme caution** `rm -rf` is a very dangerous command that can irreversibly delete anything on your computer, so make sure to specify the exact directory you want to delete


### One More Gotcha!

GOTCHA: Do not initialize a git repository inside of another git repository, do not make your root directory of your computer a git repository - this will confuse git and you won't be able to track or even open your files on github. Additionally, making  your entire computer a git repository can significantly slow down your entire computer.

![](Gitception.png)


#### Ask Yourself:
1) How many repos can you have on github?
2) How many repos can you have on your computer?
3) Can you put a git repo inside another repo?
4) Should you make your whole computer a git repo?

**If you had any questions about how to submit your homework, set up a 1 on 1 during lab time!**
