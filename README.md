# Solvify
## Getting Started With the Project
### Prerequisites
Before you begin, make sure you have installed Nodejs

### Installation
1. Fork the Repository from the solvify github repository by clicking on the FORK Button
2. After Forking, you need to clone it to your local machine to start working on it.
3. To clone the repository, navigate to your forked repo on GitHub and copy the URL (either HTTPS or SSH).
   ```bash
   git clone <URL of Your Forked Repo>
4. Set Upstream Remote
   To Do this
   ```bash
   cd solvify-nmit.github.io
   git remote add upstream https://github.com/Solvify-NMIT/solvify-nmit.github.io.git
5. Create a new branch
   ```bash
   git checkout -b <Your Page-name>
6. Download the Dependencies
   ```bash
   cd client
   npm i
- To preview the website on your local machine, just run this command
    ```bash
    npm run dev      
7. Make Changes to your respective pages by navigating to the components folder by
   ```bash
   cd src
   cd components
- Find your pages in the component Folder and make changes in the component
8. Commiting your Changes
   ```bash
   git add .
   git commit -m "Your detailed commit message here"
   git push origin your-branch-name
- Sync Your Fork with the Original Repository
- fetch the latest changes from the upstream repository
   ```bash
   git fetch upstream
- Checkout to your main branch and merge changes from the upstream repository
   ```bash
   git checkout main
   git merge upstream/main
- If there are any merge conflicts, you’ll need to resolve them manually.
9. After merging, push the changes to your fork
   ```bash
   git push origin main
10. Open a Pull Request
- **Just a friendly reminder to update your progress in the Issues section—it's a great way to keep the team in sync!**
                     
