impl Solution {
    pub fn find_words_containing(words: Vec<String>, x: char) -> Vec<i32> {
        let mut result = Vec::new();

        for (i, word) in words.iter().enumerate() {
            println!("Checking word at index {}: \"{}\"", i, word);

            if word.contains(x) {
                println!("  → Contains '{}', adding index {}", x, i);
                result.push(i as i32);
            } else {
                println!("  → Does not contain '{}'", x);
            }
        }

        println!("Final result: {:?}", result);
        result
    }
}

