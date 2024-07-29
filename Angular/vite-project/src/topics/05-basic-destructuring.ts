 interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
 }

 interface Details {
    author: string;
    year: number;
 }



 const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: 'Mess',
    details:{
        author: 'Ed Sheeran',
        year:2015 
    }
 }
    const { audioVolumen: cd, songDuration: duration, details} = audioPlayer;
    const { author: compositor} = details;

    console.log(cd);
    console.log(duration);
    console.log(compositor);


    const array: string[] = ['hola', 'como', 'estas'];

    const [p1, , p3 = 'Not Found'] = array;
 
    console.log(p1);    
    console.log(p3);