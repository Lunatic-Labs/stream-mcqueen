# Braching/SDLC Docs

This documentation is for future developers and explains the braching format and GitHub etiquette used in this project.

## Branch Format

The project is split up between the `main`, `dev`, and various feature branches.  
- The `main` branch is the LIVE production site that anyone can access and will hold the major version releases of the product.  
- The `dev` branch is the branch our testing environment where we will merge our completed tickets to test for stability before we push to production.  
- There will be a feature branch for every issue/ticket and in these branches we will develop different features and elements that we want to add to the product. Once a feature is completd we will create a pull request to review the code before we merge it into `dev` branch.

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
- `git branch` **-** list your branches. a * will appear next to the currently active branch.
- `git branch [branch-name]` **-** create a new branch at the current commit.
- `git checkout` **-** switch to another branch and check it out into your working directory.
- `git merge [branch]` **-** merge the specified branch's history into the current one.
- `git log` **-** show all commits in the current branch's history.
