![image](https://github.com/user-attachments/assets/2ee963df-c8ba-455b-9df5-0e06829a7720)


RetroGPT reimagines ChatGPT as a 90s-style website! Built using React+Vite, TailwindCSS, Express, and Node, it combines retro web aesthetics with a playful twist. According to the lore, RetroGPT is an all-knowing yet truthful alien that has infested the user’s computer. With an old-school design, pixelated UI, and nostalgic elements, RetroGPT delivers answers like a quirky extraterrestrial straight out of the 90s!


## TechStack:
- Vite+React for the Frontend.
- Tailwind CSS 
- Node.js
- Express
- Groq API

<details>
  <summary><h3>Prerequisites</h3></summary>

- Node.js (>=20.x)
- npm

</details>
<details>
<summary><h3> Steps to set up </h3></summary>

##### 1. Clone the repository 
```
git clone https://github.com/Srayash/RetroGPT.git
```
##### 2. Navigate to the project directory
```
cd RetroGPT
```
### Start the frontend
##### 1. go to the frontend folder:
```
cd client
```
##### 2. install dependencies:
```
npm install
```
##### 3. setup client to use local server for backend:
- Go to src/components/index.jsx
- uncomment the development url and comment out the Production url here:-
<img width="405" alt="Screenshot 2024-12-15 at 7 24 14 PM" src="https://github.com/user-attachments/assets/11364d3b-0cf5-4303-b782-a7ae63353522" />


##### 4. start the frontend
```
npm run dev
```

### Start Backend server
##### 1. go to backend folder
```
cd backend
```
#####  2. add your api keys
- create a .env file in the backend folder
- get a Groq API key from https://console.groq.com/keys
- put this in the env file:
```
export GROQ_API_KEY = <YOUR_API_KEY>
```
##### 3.  install dependencies
```
npm install
```
##### 4. start the server
```
node index.js

```
</details>
