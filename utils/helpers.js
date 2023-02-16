module.exports = {
  append_url: (linkType) => {
    switch (linkType) {
      case 'Twitter':
        return "https://twitter.com/";
      case 'Instagram':
        return "https://instagram.com/";
      case 'TikTok':
        return "https://www.tiktok.com/@";
      case 'YouTube':
        return "https://www.youtube.com/@";
      case 'Facebook':
        return "https://www.facebook.com/";
      case 'Snapchat':
        return "https://snapchat.com/add/";
    }
  },
  set_background: (linkType) => {
    switch (linkType) {
      case 'Twitter':
        return "#1DA1F2";
      case 'Instagram':
        return "#C13584";
      case 'TikTok':
        return "#69c9d0";
      case 'YouTube':
        return "#FF0000";
      case 'Facebook':
        return "#4267B2";
      case 'Snapchat':
        return "#FFFC00";
    }
  },
  set_text_color: (linkType) => {
    if (linkType === "Snapchat"){
      return "color: var(--bs-dark);"
    } else {
      return "color: var(--bs-white)"
    }
  }
};
