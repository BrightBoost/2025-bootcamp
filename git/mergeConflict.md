1. **Goal**:
   - Practice creating and merging branches locally.
   - Intentionally create and resolve a merge conflict in a text file.
   - Reinforce Git basics: `git add`, `git commit`, `git merge`, and conflict resolution.

---

## Steps

### 1. Set Up the Project Folder

1. **Create** a folder for the project:
   ```bash
   mkdir merge-conflict-demo
   ```
2. **Navigate** into the folder:
   ```bash
   cd merge-conflict-demo
   ```

### 2. Initialize a Git Repository

```bash
git init
```

Check that `.git` is created:

```bash
ls -a
```
You should see a `.git` folder.

### 3. Create and Commit a Base File

1. **Create** a text file named `my-file.txt`:
   ```bash
   touch my-file.txt
   ```
2. **Open** `my-file.txt` in your editor and add some content (for example):
   ```text
   Line 1: Hello from main branch
   Line 2: This is our base file
   ```
3. **Stage** and **commit** these changes:
   ```bash
   git add my-file.txt
   git commit -m "Initial commit with my-file.txt"
   ```

### 4. Create Two Separate Branches

You will make conflicting changes on two different branches.

1. **Branch A**:
   ```bash
   git checkout -b branchA
   ```
   - In `my-file.txt`, change **Line 2** (or add a new line) to something like:
     ```text
     Line 1: Hello from main branch
     Line 2: Branch A changed this line
     ```
   - **Commit** your changes:
     ```bash
     git add my-file.txt
     git commit -m "Branch A: modify line 2"
     ```

2. **Branch B**:
   - First, switch back to **main**:
     ```bash
     git checkout main
     ```
   - Create and switch to **branchB**:
     ```bash
     git checkout -b branchB
     ```
   - In `my-file.txt`, **edit the same line** that branch A modified (Line 2). For example:
     ```text
     Line 1: Hello from main branch
     Line 2: Branch B changed this line
     ```
   - **Commit** your changes:
     ```bash
     git add my-file.txt
     git commit -m "Branch B: modify line 2"
     ```

### 5. Merge Branch A First

1. Switch back to **main**:
   ```bash
   git checkout main
   ```
2. **Merge** **branchA** into **main**:
   ```bash
   git merge branchA
   ```
   - Since **main** and **branchA** don’t conflict (they differ from the original content in the same place, but main had no change there yet), Git merges seamlessly.
3. **Check** your `my-file.txt` on **main** to confirm the changes from **branchA** are present:
   ```text
   Line 1: Hello from main branch
   Line 2: Branch A changed this line
   ```

### 6. Merge Branch B to Create the Conflict

1. **Still on main**, merge **branchB**:
   ```bash
   git merge branchB
   ```
2. This time, you should see an error message indicating a **merge conflict** in `my-file.txt`, something like:
   ```
   Auto-merging my-file.txt
   CONFLICT (content): Merge conflict in my-file.txt
   Automatic merge failed; fix conflicts and then commit the result.
   ```

3. **Open** `my-file.txt`:
   ```bash
   vim my-file.txt
   ```
   You will see conflict markers:
   ```text
   Line 1: Hello from main branch
   <<<<<<< HEAD
   Line 2: Branch A changed this line
   =======
   Line 2: Branch B changed this line
   >>>>>>> branchB
   ```
   - The `HEAD` section reflects changes from the **main** branch (which now includes Branch A’s text).
   - The `branchB` section shows Branch B’s version.

### 7. Resolve the Conflict

1. **Edit** the file to **manually** choose or combine the changes you want to keep. For example, you might decide to merge them as:
   ```text
   Line 1: Hello from main branch
   Line 2: Branch A changed this line (combined with Branch B)
   ```
   Or pick one version over the other, or rewrite the line entirely—whatever makes sense.

2. **Remove** all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) from the file.

3. **Save** and **quit** the editor.

### 8. Commit the Resolved Changes

1. **Stage** `my-file.txt` again:
   ```bash
   git add my-file.txt
   ```
2. **Commit** with a message indicating you’ve resolved the conflict:
   ```bash
   git commit -m "Resolve merge conflict between branchA and branchB"
   ```

3. **Check** your history with:
   ```bash
   git log --oneline
   ```
   You should see your new merge commit at the top.

### 9. Verify the Final State

- **Open** `my-file.txt` to confirm the final text is as you intended.
- **Run** `git status` to confirm there are no remaining conflicts.

