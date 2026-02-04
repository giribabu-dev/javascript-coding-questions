function capitalizeWords(sentence) {
    if (sentence === "") return "";

    const words = sentence.trim().split(/\s+/)
    
    let output = ""
    for (let i = 0; i < words.length; i++) {
        output += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    }
    return output.trim();
}

const result_1 = capitalizeWords("hello world");
console.log(result_1)

const result_2 = capitalizeWords("javaScript is FUN");
console.log(result_2)

const result_3 = capitalizeWords("  multiple  spaces  ");
console.log(result_3)

const result_4 = capitalizeWords("")
console.log(result_4)