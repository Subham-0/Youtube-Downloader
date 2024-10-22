const ytdl = require('ytdl-core');

export default function handler(req, res) {
    res.status(200).json({ message: "API is working!" });
  }
// export default async function handler(req, res) {
//     const videoUrl = req.query.url;

//     if (!videoUrl || !ytdl.validateURL(videoUrl)) {
//         return res.status(400).json({ success: false, message: 'Invalid URL' });
//     }

//     res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
//     ytdl(videoUrl, { format: 'mp4' }).pipe(res);
// }
