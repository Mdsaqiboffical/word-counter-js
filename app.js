function wordCount(text) {
    text = text.trim();
    const words = text.split(/\s+/);
    return words.length;
}

const text = "Hello My Name Is Muhammad Saqib";
console.log("Word count:", wordCount(text));