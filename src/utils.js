import { v4 as uuidv4 } from "uuid";

const data = () => {
  return [
    {
      name: "Al-Fatihah",
      artist: "Ali Jabeer",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      audio: "https://server11.mp3quran.net/a_jbr/001.mp3",
      active: true,
      id: uuidv4(),
    },
    {
      name: "Yusuf",
      artist: "Ali Jabeer",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      audio: "https://server11.mp3quran.net/a_jbr/012.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Al-Kahf",
      artist: "Ali Jabeer",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      audio: "https://server11.mp3quran.net/a_jbr/018.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Luqman",
      artist: "Ali Jabeer",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
      audio: "https://server11.mp3quran.net/a_jbr/031.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Low Rider",
      artist: "Evil Needle",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17090",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Huzun",
      artist: "Paytaht",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/e2/Payitaht_Abd%C3%BClhamid_logo.jpg",
      audio:
        "https://download1645.mediafire.com/hmd45y2qixtg/nsuwegrsxs1561j/Payitaht+H%C3%BCz%C3%BCn+%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89+%D8%A7%D9%84%D8%AD%D8%B2%D9%86.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Osman Pasa",
      artist: "Paytaht",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/e2/Payitaht_Abd%C3%BClhamid_logo.jpg",
      audio:
        "https://download1642.mediafire.com/u64cs3krq80g/78tks7k7gb6gsd9/Dizi-Film-Muzikleri--Payitaht-Abdulhamid-Osman-Pasa.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Back to you",
      artist: "Dj Vianu",
      cover:
        "https://i.pinimg.com/originals/33/e4/4d/33e44d3f792a3dc2047ebe03a892212b.jpg",
      audio:
        "https://download1477.mediafire.com/dwvvr60u9mdg/443oz9zdtkrtz8x/DjVianuBackToYouOriginalMix-arabix.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Montauk Paddling",
      artist: "auv",
      cover: "https://i.scdn.co/image/ab67616d0000b2739104059647f4b827859943cf",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=34372",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Caramel",
      artist: "Leavy",
      cover: "https://mp3.chillhop.com/serve.php/?mp3=34162",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=34372",
      active: false,
      id: uuidv4(),
    },
  ];
};

export default data;
