const audioList = [
    "./Nezuko.mp3",
    "./Nezuko.mp3",
    "./Nezuko.mp3",
    "./Nezuko.mp3", 
    "./Nezuko.mp3"
  ];
  
  const randomIndex = Math.floor(Math.random() * audioList.length);
  const Nezuko_Audio = audioList[randomIndex];
  const audio = new Audio(Nezuko_Audio);
  
  function Music() {audio.play();}
  console.log();
  Music();
