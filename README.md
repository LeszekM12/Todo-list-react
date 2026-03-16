# 📝 Tasks List — Todo App

> A task management application built with **React** and **TypeScript** — add, complete, search and remove tasks. Features a built-in theme switcher with 3 visual styles.

---

## 🚀 Live Demo

👉 **[leszekm12.github.io/Todo-list-react](https://leszekm12.github.io/Todo-list-react/)**

---

## 📸 Preview

<!-- Add a screenshot or GIF here -->
> Add a screenshot of the app in action here

---

## ✨ Features

- **Add tasks** — type and submit to add to the list
- **Complete tasks** — check off individual tasks or complete all at once
- **Delete tasks** — remove tasks from the list
- **Hide completed** — toggle visibility of done tasks
- **Search** — filter tasks by keyword via URL query parameter
- **Task details** — click any task to view its detail page
- **Load example tasks** — fetch sample tasks via Axios
- **3 visual themes** — switch between Minimal, Teal and Purple via the ⚙️ gear icon
- **Theme persistence** — chosen theme is saved to localStorage and restored on reload
- **Persistent storage** — all tasks saved to localStorage automatically

---

## 🎨 Themes

| Theme | Description |
|---|---|
| **Minimal** | Black & white, ultra clean, focus on content |
| **Teal** | Dark teal header, fresh green accents |
| **Purple** | Purple accent, card layout with status badges |

Switch themes via the ⚙️ gear button in the top-right corner of the navigation bar.

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| **React 18** | UI component library |
| **TypeScript** | Static typing |
| **Redux Toolkit** | Global state management (`createSlice`, `useSelector`, `useDispatch`) |
| **Redux Saga** | Side effects (async task fetching, localStorage sync) |
| **React Redux** | React bindings for Redux |
| **Styled Components v6** | CSS-in-JS styling with theme support |
| **React Router DOM v5** | Client-side routing (`HashRouter`, `NavLink`, `useParams`) |
| **Axios** | HTTP requests for example tasks |
| **nanoid** | Unique ID generation for tasks |
| **localStorage API** | Persistent task and theme storage |
| **CSS Custom Properties** | Theme tokens via styled-components `ThemeProvider` |
| **Google Fonts — Lato** | Typography |
| **Normalize.css** | Cross-browser style reset |
| **gh-pages** | GitHub Pages deployment |

---

## 🏗️ Architecture

```
src/
├── core/                      # App shell
│   ├── App.tsx                # Router + layout
│   ├── ThemeContext.tsx        # Theme state + switcher context
│   ├── theme.ts               # 3 theme definitions (minimal, teal, purple)
│   ├── GlobalStyle.tsx        # Global CSS with theme-aware body styles
│   ├── store.tsx              # Redux store configuration
│   ├── rootSaga.tsx           # Root saga combining all sagas
│   └── routes.tsx             # Route path helpers
│
├── common/                    # Reusable UI components
│   ├── NavigationBar/         # Nav with active links + ⚙️ theme settings
│   ├── Section/               # Card wrapper with header + body slots
│   ├── Header/                # Page title heading
│   └── Container/             # Max-width content wrapper
│
├── features/
│   ├── tasks/                 # Tasks feature
│   │   ├── TasksPage/         # Main page composition
│   │   ├── TaskDetails/       # Single task detail page
│   │   ├── TaskList/          # List of task items
│   │   ├── Form/              # Add task form
│   │   ├── Search/            # Search input (URL query param)
│   │   ├── Buttons/           # Hide done / Complete all
│   │   ├── AxiosExampleTasksButton/  # Load example tasks
│   │   ├── tasksSlice.tsx     # Redux slice (actions + selectors)
│   │   ├── tasksSaga.tsx      # Saga (axios fetch + localStorage sync)
│   │   ├── getExampleTasks.tsx # Axios fetch helper
│   │   └── tasksLocalStorage.tsx # localStorage read/write
│   └── author/
│       └── AuthorPage.tsx     # Author info page
│
├── queryParameters.ts         # Custom hooks for URL query params
├── types.ts                   # Shared TypeScript interfaces
└── styled.d.ts                # Styled-components theme type augmentation
```

### Key Design Decisions

- **`ThemeContext` + `ThemeProvider`** — theme state lives in React context, wraps the entire app, and re-renders styled-components with the new theme object on switch
- **`$`-prefixed transient props** (`$hidden`, `$done`, `$toggleDone`, `$remove`, `$active`) — styled-components v6 convention to prevent custom props leaking to the DOM
- **URL-based search** — search query stored in URL (`?szukaj=...`) via `useHistory` + `useLocation`, making searches shareable and browser-history-compatible
- **Saga for side effects** — localStorage sync runs on every Redux action via `takeEvery("*", ...)`, keeping the slice pure

---

## 📁 Project Structure (file tree)

```
todo-list-react/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── exampleTasks.json
├── src/
│   └── ... (see Architecture above)
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Running Locally

```bash
# Clone the repo
git clone https://github.com/LeszekM12/Todo-list-react.git
cd Todo-list-react

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deploying to GitHub Pages

```bash
npm run build
npm run deploy
```

App will be live at `https://YOUR_USERNAME.github.io/Todo-list-react/`

---

## 📄 License

For learning and portfolio use only.
