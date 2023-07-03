import { v4 as uuidv4 } from "uuid";

const data = () => {
  return [
    {
      name: "Al-Fatihah",
      artist: "Ali Jabeer",
      cover: "الفاتحة",
      audio: "https://server11.mp3quran.net/a_jbr/001.mp3",
      active: true,
      id: uuidv4(),
    },
    {
      name: "At-Taubah",
      artist: "Ali Jabeer",
      cover: "التوبة",
      audio: "https://server7.mp3quran.net/a_jbr/009.mp3",
      active: true,
      id: uuidv4(),
    },
    {
      name: "Ibrahim",
      artist: "Ali Jabeer",
      cover: "إبراهيم",
      audio: "https://server7.mp3quran.net/a_jbr/014.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Al-Kahf",
      artist: "Ali Jabeer",
      cover: "الكهف",
      audio: "https://server11.mp3quran.net/a_jbr/018.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Luqman",
      artist: "Ali Jabeer",
      cover: "لقمان",
      audio: "https://server11.mp3quran.net/a_jbr/031.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Al-Qasas",
      artist: "Abdulrahman Alsudaes",
      cover: "القصص",
      audio: "https://server11.mp3quran.net/sds/028.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "YaSin",
      artist: "Abdulrahman Alsudaes",
      cover: "ياس",
      audio: "https://server11.mp3quran.net/sds/036.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Muhammad",
      artist: "Abdulrahman Alsudaes",
      cover: "محمد",
      audio: "https://server11.mp3quran.net/sds/047.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "An-Najm",
      artist: "Saud Al-Shuraim",
      cover: "النجم",
      audio: "https://server7.mp3quran.net/shur/053.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Al-Qamar",
      artist: "Saud Al-Shuraim",
      cover: "القمر",
      audio: "https://server7.mp3quran.net/shur/054.mp3",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Ar-Rahman",
      artist: "Saud Al-Shuraim",
      cover: "الرحمان",
      audio: "https://server7.mp3quran.net/shur/055.mp3",
      active: false,
      id: uuidv4(),
    },
  ];
};

export default data;
