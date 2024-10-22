import { exec } from 'child_process';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { url } = req.body;

       
        const command = `youtube-dl -f best "${url}"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                return res.status(500).json({ message: 'Error downloading video.' });
            }
            console.log(`Downloaded: ${stdout}`);
            res.status(200).json({ message: 'Video downloaded successfully!' });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
