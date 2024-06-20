# just-ts

This is a simple TypeScript project to test a few TypeScript features. Follow the steps below to set up and run the project.

## Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

## Setup

1. **Create and navigate to the project directory**:

   ```bash
   mkdir my-ts-project
   cd my-ts-project
   ```

2. **Initialize a new Node.js project**:

   ```bash
   npm init -y
   ```

3. **Install TypeScript and the types for Node.js**:

   ```bash
   npm install typescript @types/node --save-dev
   ```

4. **Initialize a TypeScript configuration file**:

   ```bash
   npx tsc --init
   ```

5. **Create the source directory and a TypeScript file**:
   ```bash
   mkdir src
   touch src/index.ts
   ```

## Configuration

Open the `tsconfig.json` file and ensure the following or similar configuration:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## Writing TypeScript Code

1. Open src/index.ts in your code editor and add the following code:

```typescript
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));
```

## Compiling and Running the Code

1. Compile the TypeScript code:

```
npx tsc
```

This will compile your TypeScript files in the src directory and output JavaScript files to the dist directory.

2. Run the compiled JavaScript code:

```bash
node dist/index.js
```

## Running TypeScript Directly

```bash
npm install -g ts-node
ts-node src/index.ts
```
