import ffmpeg from "fluent-ffmpeg";

// Function to get the duration of a video file
export const getVideoDuration = (videoPath) => {
  return new Promise((resolve, reject) => {
    // ffprobe is a method provided by fluent-ffmpeg to analyze video metadata
    ffmpeg.ffprobe(videoPath, (err, metadata) => {
      if (err) {
        reject("Error extracting video duration");
      } else {
        resolve(metadata.format.duration);
      }
    });
  });
};