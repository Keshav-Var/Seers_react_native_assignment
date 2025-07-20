# 💰 Transactions App (React Native)

A simple transaction manager app built using **React Native**. Users can view, add, and categorize transactions with local state management and simulated API integration.

---

## 🛠 Framework & Libraries Used

- **React Native**: `0.74.x`
- **Expo**: `~50.x`
- **React Navigation**: `^6.x`
- **@react-native-picker/picker**: For category selection
- **Context API**: For global state management

---

## 🚀 Setup & Run Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Keshav-Var/Seers_react_native_assignment
cd Seers_react_native_assignment
npm install
# or
yarn install
npm install @react-native-picker/picker
npm run
```

## 🧠 Notes, Challenges & Improvements

### ✅ What's Working
- Add transactions with title, amount, category, type, and date.
- Simulated API calls using local service layer.
- Modal form for new transactions.
- Context-based global state management.
- Fallback message when no transactions exist.

### ⚠️ Challenges Faced
- `Picker` deprecated in React Native core: Replaced with `@react-native-picker/picker`.
- Date handling issue: Fixed using controlled `DatePicker` and proper formatting.
- UI alignment of empty list message: Handled using `flexGrow` and conditional styles.

### 🧹 Possible Improvements
- Persist transactions using local database (e.g., SQLite or AsyncStorage).
- Integrate a real API for CRUD operations.
- Add filtering/sorting options for transactions.
- Add charts for financial visualization.

### 🐞 Known Bugs
- The mock API integration is local-only and doesn’t persist on reload.
- No input validation for negative numbers or large amounts.
