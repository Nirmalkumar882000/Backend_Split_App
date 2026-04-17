# 🚀 Split Backend - Core Engine

The high-performance API and operational engine for the **Split** group expense management platform. Built with a focus on real-time synchronization, secure financial tracking, and hybrid data persistence.

## 🌌 Core Features

- **Hybrid Data Architecture**: Leverages MySQL for relational financial consistency and MongoDB for real-time signal (chat) persistence.
- **Real-Time Uplink**: Powering instant group presence, chat, and activity updates via **Socket.io**.
- **Cluster Management**: Robust group operations including member registry, balance tracking, and dynamic settlement algorithms.
- **Financial Telemetry**: Secure expense logging, transaction history, and settlement logic.
- **Security Protocols**: Industrial-grade identity management using **JWT** and **bcryptjs** for credential encryption.
- **Live Monitoring**: Proactive database heartbeat and connection status reporting.

---

## 🛠 Technology Stack

- **Runtime**: Node.js & Express (v5+)
- **Storage Alpha**: MySQL (Relational persistence)
- **Storage Beta**: MongoDB (Message archive)
- **Signal Layer**: Socket.io (Real-time WebSockets)
- **Security**: JSON Web Tokens (JWT) & Bcrypt
- **Validation**: Express-Validator

---

## ⚡ Quick Start

### 1. Repository Access
```bash
git clone https://github.com/Nirmalkumar882000/Backend_Split_App.git
cd Backend_Split_App
```

### 2. Dependency Injection
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory based on the `.env.example` template:
```env
PORT=5000
MYSQL_HOST=localhost
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=splitwise_db
MYSQL_PORT=3306
MONGODB_URI=mongodb://localhost:27017/splitwise_logs
JWT_SECRET=your_ultra_secure_secret
```

### 4. Database Initialization
Ensure your MySQL and MongoDB services are running. Initialize the MySQL schema with the built-in migration tool:
```bash
npm run db
```

### 5. Initiate Core Engine
```bash
# Development Mode (with hot-reload)
npm run dev

# Production Mode
npm start
```

---

## 🛡️ Operational Structure

### API Gateway Routes
| Domain | Path | Purpose |
| :--- | :--- | :--- |
| **Identity** | `/api/auth` | User registry, login, and profile management |
| **Clusters** | `/api/groups` | Group creation, member handling, and stats |
| **Telemetry** | `/api/expenses` | Expense logging and settlement calculations |

### Real-Time Signals (Socket.io)
The engine maintains active rooms for:
- `group_{id}`: Real-time chat and typing indicators within clusters.
- `user_{id}`: Personal notifications and account-wide updates.

---

## 👨‍💻 System Architect
**Nirmal Kumar** - *Full Stack Developer*

---

> [!IMPORTANT]
> Ensure MySQL is running and the database specified in `.env` exists before running the `npm run db` command. 
