const challenges = [
    {
        id: 1,
        description: 'Decode this base64 string: SGVsbG8gd29ybGQh',
        answer: 'Hello world!',
    }
];

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === '!ctfstart') {
        const challenge = challenges[0];
        message.channel.send(`Welcome to the CTF challenge! Your first challenge is: ${challenge.description}. Submit your answer with \`!ctfsubmit <your_answer>\``);
    }

    if (message.content.toLowerCase().startsWith('!ctfsubmit')) {
        const userAnswer = message.content.split(' ')[1];
        const correctAnswer = challenges[0].answer;

        if (userAnswer === correctAnswer) {
            message.channel.send('🎉 Correct! You solved the challenge!');
            // Here, you can log the user's success, update a leaderboard, etc.
        } else {
            message.channel.send('❌ Incorrect. Try again!');
        }
    }
});