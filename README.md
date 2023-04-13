# Pokedex

## Preconditions
1. Install vscode:  
   `winget install --id Microsoft.VisualStudioCode`
   
2. Install nvm-for-windows:  
   `winget install --id CoreyButler.NVMforWindows`

3. Install git:  
   `winget install --id Git.Git`

4. Install/use latest nodejs version:  
   `nvm install 18.16`  
   `nvm use 18.16`  

5. Install global node packages:  
   `npm i -g nx @angular/cli pnpm`  

6. Clone git project:  
   `git clone https://github.com/wasck/pokedex.git`  

7. Install project packages:  
   `pnpm install`  

## Pokedex application
- Start app
  1. Open NX console
  2. Under projects open `pokedex`
  3. Open serve
  4. Hover `development`
  5. Click on `Execute Task` icon
  6. Press `F5` to launch app in edge browser

- Start e2e environment
  1. Open NX console
  2. Under `GENERATE & RUN TARGET` Click on `e2e`
  3. Select `pokedex-e2e`
  4. Type `watch`
  5. 3x Enter
