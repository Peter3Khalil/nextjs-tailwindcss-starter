hint: You should install **nodejs** on your machine

Visit this [link](https://nodejs.org/en/download/) to download and install nodejs
## Getting Started

First, Install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

You can change `Port` by modifying script on package.json file to be:
```json
"script":{
    "dev":"next dev -p PORT_NUMBER"
}
```

## Building the project for production

Run the following commands:
- First, Build the project:
```bash
npm run build
```
- Second, Start the project:
```bash
npm start
```
## Tech Stack
- Next.js 14 (React 18) using `App` routing
- TypeScript
- Tailwind
- Shadcn Ui