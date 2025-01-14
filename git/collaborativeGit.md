This is a Disney Princess IT Story exercise, you will:

1. **Clone** a shared repository and **create branches** for your contributions.  
2. **Add and edit** text-based story files in Markdown.  
3. **Open pull requests**, **review** each other’s work, and **resolve merge conflicts** when your changes overlap.  
4. Merge your branches into `main`, contributing to a collective, imaginative tale of Disney princesses turned software professionals after having a gap because of princess duties.

Have fun merging (pun intended) the magic of Disney with IT!
---

## Overview

You and your classmates will co-author a short story in which **Disney princesses are software professionals**. Each of you will **create and/or edit** chapters or scenes, ensuring everyone has a chance to merge changes and solve any conflicts.

**Possible storyline premise**:
> In a futuristic kingdom where **Disney princesses** run massive IT projects, each princess has a specialized tech domain. For example:
> - **Ariel** (The Little Mermaid): manages Microsoft’s Ocean Servers deep under the sea.
> - **Rapunzel**: codes all day in her tower-chamber, optimizing tangled data structures.
> - **Belle**: oversees an advanced AI library powered by enchanted books and machine learning spells.
> - **Cinderella**: orchestrates automated “clean builds” for a large microservices architecture—her stable pipelines run on time before midnight!
> - **Jasmine**: leads security audits for the Royal Cloud, flying around on a cyber magic carpet to detect vulnerabilities.

*(Feel free to invent as many new twists and princesses as you like! You can zoom in on your favorite story or combine several ones, or come up with your own!)*

---

## Step-by-Step Instructions

### 1. Create the GitHub Repository (Instructor or Team Lead)

1. **Create** a new repository on GitHub called `disney-princess-IT`.
2. **Initialize** it with a basic `README.md` describing the project:
   ```markdown
   # Disney Princesses in IT
   A fun, collaborative short story exploring what would happen if Disney princesses were software professionals.
   Tip: For more fun, use generative AI to add some images to the readme.
   ```
3. **Invite** all participants as collaborators.

*(Skip this if the repo already exists.)*

### 2. Clone the Repo Locally

1. **Open** your terminal (or Git Bash).
2. **Clone** the repository:
   ```bash
   git clone <URL_of_the_repo>
   ```
3. **Navigate** into the newly created folder:
   ```bash
   cd disney-princess-IT
   ```

### 3. Explore the Initial Structure

You might see:
```
disney-princess-IT/
 ├── README.md
 └── .gitignore (optional)
```
- `README.md` includes a brief overview.

### 4. Create Initial Story Files

*(Either the instructor or one designated student can do this.)*

1. **Create** the base files:
   ```bash
   touch chapter1.md chapter2.md
   ```
2. Add a quick intro to `chapter1.md`, for example:
   ```markdown
   # Chapter 1: Into the Tech Kingdom

   Long ago, in a magical tech kingdom far, far away, the Disney Princesses
   found themselves leading innovative software projects...
   ```
3. **Stage** and **commit**:
   ```bash
   git add chapter1.md chapter2.md
   git commit -m "Add initial story structure"
   git push origin main
   ```

### 5. Create Your Branch and Add Content

Each student will **create a branch** to contribute. We’ll use an example: **Zahra**.

1. **Pull** the latest changes from `main`:
   ```bash
   git pull origin main
   ```
2. **Create** your feature branch:
   ```bash
   git checkout -b zahra-chapter1-ariel
   ```
3. **Open** one of the `.md` files—let’s say `chapter1.md`—in your editor, and add your part of the story. For instance:

   ```markdown
   # Chapter 1: Into the Tech Kingdom

   Long ago, in a magical tech kingdom far, far away, the Disney Princesses
   found themselves leading innovative software projects...

   ## Ariel’s Underwater Servers
   Ariel, the brilliant network engineer, managed the famed Ocean Servers
   in partnership with Microsoft. Hidden under the waves, these servers
   required constant monitoring to handle immense oceanic data flows.
   Ariel used her favorite mer-shell interface to code in C++ and keep
   the turbines running smoothly despite the swirling sea currents.
   ```
4. **Stage** and **commit** your changes:
   ```bash
   git add chapter1.md
   git commit -m "Zahra adds Ariel's underwater server scene"
   ```
5. **Push** your branch to GitHub:
   ```bash
   git push -u origin zahra-chapter1-ariel
   ```

### 6. Open a Pull Request (PR)

1. On GitHub, find your new branch (`zahra-chapter1-ariel`).
2. Click **“Compare & pull request.”**
3. Provide a **title** and **description**:
   - Title: “Zahra’s Underwater Servers Addition”
   - Description: Explain your new segment about Ariel’s IT role under the sea.

### 7. Review and Comment on PRs

Everyone should **review** each other’s PRs:

1. Open a PR in GitHub.
2. Check the **Files changed** tab to see the new text.
3. Click **Review changes** (top right) to **comment** or **request changes**.
   - Example: “Love how you integrated a mer-shell interface! Could you add a sentence about oceanic data encryption?”

### 8. Merge Conflicts (They Will Happen!)

When two or more of you edit the **same lines** in the same file (like `chapter1.md`), **merge conflicts** occur.

1. If your PR can’t merge automatically, you’ll see a conflict message.
2. **Pull** the latest `main` into your feature branch:
   ```bash
   git checkout zahra-chapter1-ariel
   git pull origin main
   git merge main
   ```
3. **Open** the conflicting file (with `<<<<<<<`, `=======`, `>>>>>>>` markers).
4. **Manually resolve** by choosing or combining the lines. For example:

   ```markdown
   # Chapter 1: Into the Tech Kingdom

   <<<<<<< HEAD
   Ariel’s Underwater Servers
   Ariel, the brilliant network engineer, managed the famed Ocean Servers...
   =======
   Rapunzel’s Tower of Code
   High in her tower, Rapunzel managed a massive Java-based microservices architecture...
   >>>>>>> rapunzel-chapter1
   ```

   Adjust it to blend both ideas, remove the markers, then **save**.
5. **Stage** and **commit** your resolution:
   ```bash
   git add chapter1.md
   git commit -m "Resolve conflict between Ariel and Rapunzel scenes"
   ```
6. **Push** again, then proceed to merge your PR.

### 9. Merge the PR

1. Once the PR is approved and no conflicts remain, click **“Merge pull request.”**
2. **Optionally**, delete your feature branch on GitHub to keep things clean.

### 10. Continue Building the Story

- Create new branches for **Belle, Cinderella, Jasmine**, or any other princess you like.  
- Perhaps Belle is an **AI librarian** training machine learning models from enchanted books.  
- Cinderella might be a **DevOps wizard**, ensuring nightly builds don’t strike midnight errors.  
- Jasmine could run **cloud security audits** on a flying, virtual magic carpet that scans for vulnerabilities across the Royal Cloud.

Each time, you’ll practice the **branch → commit → pull request → review → merge → resolve conflicts** workflow.




