export function getInitials(name?: string) {
    if (!name) {
        return;
    }
    const capitalStr = name.toUpperCase();
    // Find first and last discrete words, grab firs char from each and append
    const words = capitalStr.split(' ');
      const lastWord = words[words.length - 1];
  
      if (lastWord.length > 1) {
          return `${capitalStr[0]}${lastWord[0]}`;
      } else {
          // Handle cases where the last word has only one letter
          return `${capitalStr[0]}${lastWord}`;
      }  
  };