const userScores = {};

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === '!ctfstart') {
        const challenge = challenges[0];
        message.channel.send(`Welcome to the CTF challenge! Your first challenge is: ${challenge.description}. Submit your answer with \`!ctfsubmit <your_answer>\``);
    }

    if (message.content.toLowerCase().startsWith('!ctfsubmit')) {
        const userAnswer = message.content.split(' ')[1];
        const correctAnswer = challenges[0].answer;

        if (userAnswer === correctAnswer) {
            const userId = message.author.id;
            if (!userScores[userId]) {
                userScores[userId] = 0;
            }
            userScores[userId] += 1;
            message.channel.send('🎉 Correct! You solved the challenge!');
            message.channel.send(`Your current score: ${userScores[userId]}`);
        } else {
            message.channel.send('❌ Incorrect. Try again!');
        }
    }

    if (message.content.toLowerCase() === '!ctfscore') {
        const userId = message.author.id;
        const score = userScores[userId] || 0;
        message.channel.send(`Your current score: ${score}`);
    }
});