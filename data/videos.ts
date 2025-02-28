
export type VideoType = {
    id: number;
    title: string;
    channel: string;
    url: string;
    thumbnail: string;
  }
  
  export const videos: VideoType[] = [
    {
      id: 1,
      title: "Yabesh Thapa - Kasari / कसरी",
      channel: "Yabesh Thapa",
      url: "/videos/kasari.mp4",
      thumbnail: "/thumbnails/jhari.jpg"
    },
    {
      id: 2,
      title: "Jhari",
      channel: "Yabesh Thapa",
      url: "/videos/jhari.mp4",
      thumbnail: "/thumbnails/jhari.jpg"
    },
    {
      id: 3,
      title: "Yabesh Thapa - Kasari / कसरी",
      channel: "Yabesh Thapa",
      url: "/videos/kasari.mp4",
      thumbnail: "/thumbnails/jhari.jpg"
    },
  ];