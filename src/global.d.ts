declare global {
    interface Window {
      lime: any; // Adjust the type as needed if you know the structure of `lime`
      webkitAudioContext?: typeof AudioContext;
    }
  }
  
  export {};
  