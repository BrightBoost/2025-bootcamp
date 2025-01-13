
**Goal**:
   - Practice creating and navigating directories with `mkdir` and `cd`.
   - Initialize a local Git repository with `git init`.
   - Create files using `touch` and edit them with `vim`.
   - Set up a `.gitignore` file to exclude unwanted files.
   - Stage, commit, and review changes locally (no remote push).
   - Practice knowledge of `vim` commands (insert mode, save, quit).

---

## Steps

### 1. Create and Enter a New Project Folder

1. **Create a folder** for your project:
   ```bash
   mkdir my-local-project
   ```
2. **Change directory** into the folder:
   ```bash
   cd my-local-project
   ```

You now have an empty directory called `my-local-project`.

### 2. Initialize a Git Repository

Inside the `my-local-project` folder, run:

```bash
git init
```

This will create a hidden `.git` folder that tracks all version control data.  
To check that it worked:

```bash
ls -a
```
You should see a `.git` folder in the list.

### 3. Create a README Using `touch` and `vim`

1. **Create** an empty file called `README.md`:
   ```bash
   touch README.md
   ```
2. **Open** `README.md` with `vim`:
   ```bash
   vim README.md
   ```
3. **In `vim`**:
   - Press **`i`** to enter **Insert mode**.
   - Type in some content, for example:
     ```markdown
     # My Local Project

     This project is a test for practicing local Git workflows.
     ```
   - Press the **`Esc`** key to exit insert mode.
   - Type `:wq` (colon, w, q) and press **Enter** to **save and quit**.

### 4. Check `git status` and Stage the File

1. **Check** what Git sees as changed:
   ```bash
   git status
   ```
   You should see `README.md` listed as an untracked file.
2. **Stage** the file so it’s ready to be committed:
   ```bash
   git add README.md
   ```
3. **Confirm** that the file is staged:
   ```bash
   git status
   ```
   You should now see `README.md` under **"Changes to be committed"**.

### 5. Make Your First Commit

Create your initial commit:

```bash
git commit -m "Add initial README"
```

Now your local repo has **1 commit**.  
Run:

```bash
git log
```

You’ll see your commit history (currently just one commit).

### 6. Create and Configure a `.gitignore`

1. **Create** a `.gitignore` file (to ignore certain files/folders you don’t want in version control):
   ```bash
   touch .gitignore
   ```
2. **Open** it with `vim`:
   ```bash
   vim .gitignore
   ```
3. **Add** some patterns inside `.gitignore`. For example:
   ```text
   # Ignore node_modules folder
   node_modules/

   # Ignore temporary or backup files
   *.log
   *.bak
   ```
4. **Save** and exit (`:wq`).
5. **Stage** and **commit** your `.gitignore`:
   ```bash
   git add .gitignore
   git commit -m "Add .gitignore to exclude unwanted files"
   ```

### 7. Make Another File for Practice

1. **Create** a file called `notes.txt`:
   ```bash
   touch notes.txt
   ```
2. **Open** it with `vim`:
   ```bash
   vim notes.txt
   ```
3. **Add** some random notes. Then save and exit:
   ```text
   Some notes about this project...
   ```
4. **Check** status and commit (optional if you want to keep it in your repo):
   ```bash
   git status
   git add notes.txt
   git commit -m "Add notes.txt"
   ```

### 8. Review and Experiment

- Run `git log --oneline` to see a condensed history of your commits.
- Make more changes to `README.md` or create new files.  
- Stage and commit them to practice the cycle (`git add <file>`, `git commit -m "<message>"`).

---
