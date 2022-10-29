# Braching/SDLC Docs

This documentation is for future developers and explains the braching format and GitHub etiquette used in this project.

## Tools:
- React v18.2.0
- Firebase v9.13.0
- yarn v1.22.19
- MongoDB 6.0
- Selenium4

## Branch Format

The project is split up between the `main`, `dev`, and various feature branches.  
- The `main` branch is the LIVE production site that anyone can access and will hold the major version releases of the product.  
- The `dev` branch is the branch our testing environment where we will merge our completed tickets to test for stability before we push to production.  
- There will be a feature branch for every issue/ticket and in these branches we will develop different features and elements that we want to add to the product. 

### Creating a Feature Branch
A user is able to create a feature branch right from an issue posted as a ticket in the GitHub issues tab.
- Go to the page of the repository you're working on.
- Click on the **Issues** tab to open up a page listing all the issues in your repository.
- Here you can select your issue. You can filter by **Assignee** for convenience.
- You can also reach the specific issue page by clicking on the **Projects** tab on the main repository page and then the specific project. Here all the issue tickets are sorted by Backlog, Ready, In Progress, In Review, and Done. You can then click on your specific issue ticket there.
- On the specific issue page you can click on **Create a branch** under **Development** on the right hand margin.
- From there you can pick a branch name and the repository destination.

### Creating a Pull Request
Once a feature is completed we will create a pull request to review the code before we merge it into `dev` branch.
- Go to the page of the repository you're working on.
- Click on the **Pull Requests** tab to see all pull requests for the project.
- Click on the button towards the right that says **New pull request**.
- Use the **compare** dropdown menu to select the feature branch you'd like to merge and the **base** dropdown to select the branch you'd like to merge into.
- Add a title and description for your pull request before clicking **Create pull request**.
***Note***: It is good practice to move the position of your ticket in the **Projects** page when the status of it changes. For example, when you are currently working on it or when you've submitted a pull request for it.

## Git Commands

### Setup & Init
- `git init` **-** initialize an existing directory as a Git repository.  
- `git clone [url]` **-** retrieve an entire repository from a hosted location via URL.

### Stage and Snapshot
- `git status` **-** show modified files in working directory, staged for your next commit.  
- `git add [file]` **-** add a file as it looks now to your next commit(stage).  
- `git reset [file]` **-** unstage a file while retaining the changes in working directory.  
- `git diff` **-** diff of what is changed but not staged.  
- `git diff --staged` **-** diff of what is staged but not yet committed.
- `git commit -m "[descriptive message]"` **-** commit your staged content as a new commit snapshot.

### Branch & Merge
- `git branch` **-** list your branches, a * will appear next to the currently active branch.
- `git branch [branch-name]` **-** create a new branch at the current commit.
- `git checkout` **-** switch to another branch and check it out into your working directory.
- `git merge [branch]` **-** merge the specified branch's history into the current one.
- `git log` **-** show all commits in the current branch's history.
