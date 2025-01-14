1. **Goal**:  
   - Learn to create and clone a Git repository.
   - Understand branching, merging, and resolving conflicts in Git.
   - Practice Markdown basics by creating a personal README.
   - Organize files using folders (e.g., for images).


---

## Step-by-Step Instructions

### 1. Create a Shared Git Repository

1. **Instructor**: Create a new, empty repository on GitHub (or GitLab, etc.) called something like `learn-git-week1`.
2. Invite/allow access to all students so they can clone and contribute.

### 2. Clone the Repository Locally

Open the terminal and run:

```bash
git clone <URL_of_the_repo>
```

This will download the repository to your local machine.

### 3. Explore the Repository Structure

Inside the repository, you might set up an initial structure like:

```
learn-git-week1/
 ├── README.md
 └── .gitignore (if desired)
```

- **README.md** (main branch): A short explanation of the exercise and an overview of how to contribute.

### 4. Create a Branch for Your Personal README

You should:

1. **Create a new branch** for your work. For example, if your name is Maria:
   ```bash
   git checkout -b maria-profile
   ```
2. Confirm they are on the new branch:
   ```bash
   git branch
   ```
   The active branch should be `maria-profile` (or their chosen branch name).

### 5. Add Your Personal Info

1. Create a folder for your profile. For instance:
   ```
   learn-git-week1/
    ├── README.md
    ├── maria/
    │    ├── README.md
    │    └── images/
    │         └── maria-profile-pic.jpg
   ```
2. **Add your personal README**:
   - In `maria/README.md`, include:
     - A heading with your name
     - A few sentences about your background or your hobbies
     - A list (using Markdown) of what you hope to learn in this course
     - An image reference (pointing to your `images` folder)
   
   Example `maria/README.md`:

   ```markdown
   # maria’s Profile

   Hello everyone! My name is maria.

   ### About Me
   - I love coding, especially in Python.
   - I enjoy hiking and reading mystery novels.

   ### Goals for This Course
   1. Understand Git and GitHub collaboration.
   2. Learn about web development fundamentals.
   3. Get comfortable sharing my code and feedback with others.

   ### My Profile Picture
   ![maria Profile Picture](./images/maria-profile-pic.jpg)
   ```

3. Place your profile image (or placeholder image) in `maria/images/`.

### 6. Commit and Push Your Changes

1. **Stage** your files:
   ```bash
   git add maria/
   ```
2. **Commit** your changes:
   ```bash
   git commit -m "Add maria's profile folder and README"
   ```
3. **Push** your branch to the remote repository:
   ```bash
   git push -u origin maria-profile
   ```

### 7. Open a Pull Request

Go to your repository on GitHub:
1. Switch to your branch (`maria-profile`) if you haven’t already.
2. Click on **“Compare & pull request”**.
3. Provide a short explanation of your changes. For example:
   - Title: `Add maria's profile`
   - Description: “This pull request adds my personal README and profile image.”

### 8. Merge Your Branch

1. Once you’ve opened the pull request, you (or a designated reviewer) can **review** the changes.
2. If everything looks good, **merge** the pull request into the main branch.
3. **In case of conflicts**, work with your classmates to resolve them. This might require pulling the latest main branch into your feature branch, fixing the conflict in your files, and committing the resolved changes.

### 9. Confirm Your Changes in the Main Branch

1. Switch back to the main branch locally:
   ```bash
   git checkout main
   ```
2. Pull down the merged changes:
   ```bash
   git pull
   ```
3. Confirm that your folder and personal README are now part of the repository.

---

## Optional Extensions

1. **Conflict Resolution Exercise**:
   - Have everyone add a line to the shared `README.md` at the same time (e.g., a fun fact or a favorite quote).  
   - This will likely cause a merge conflict, which you can practice resolving.

2. **Peer Review**:
   - Ask at least one classmate’s pull request and leave a comment or suggestion in the PR before merging.

3. **Markdown Extras**:
   - Experiment with tables, code blocks, or emojis in their personal README.

4. **GitHub Pages**:
   - If you want to expand the exercise, checkout how to enable GitHub Pages for a simple site.

