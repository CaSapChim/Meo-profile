const audioList = [
    "./Nezuko.mp3",
    "./Nezuko.mp3",
    "./Nezuko.mp3",
    "./Nezuko.mp3", 
    "./Nezuko.mp3"
  ];
  
  const randomIndex = Math.floor(Math.random() * audioList.length);
  const ThanhDieu_Audio = audioList[randomIndex];
  const audio = new Audio(ThanhDieu_Audio);
  
  function ThanhDieuMusic() {audio.play();}
  console.log();
  ThanhDieuMusic();