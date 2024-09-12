# Discord CTF Bot

A simple Discord bot designed to run Capture The Flag (CTF) challenges, allowing users to test their cybersecurity skills in a fun and interactive way.

## Features

- **Start CTF Challenges**: Initiate CTF challenges directly in the Discord server.
- **Answer Submission**: Users can submit their answers and receive immediate feedback.
- **Score Tracking**: Tracks user scores and displays their progress.
- **Leaderboard**: Keeps track of the top performers in the server.

## Getting Started

### Prerequisites

- Node.js
- A Discord account
- Administrator rights to add bots to a Discord server

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/discord-ctf-bot.git
   cd discord-ctf-bot
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your bot's token:
   ```env
   DISCORD_TOKEN=your-discord-bot-token
   ```

4. Start the bot:
   ```bash
   node index.js
   ```

## Usage

- `!ctfstart` - Start a CTF challenge.
- `!ctfsubmit <answer>` - Submit your answer for the current challenge.
- `!ctfscore` - Check your current score.

## Permissions

Make sure the bot has the following permissions in your Discord server:
- Read Messages
- Send Messages
- Read Message History

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
