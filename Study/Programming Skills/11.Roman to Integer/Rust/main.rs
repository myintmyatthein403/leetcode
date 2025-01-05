impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let roman = vec![
            ('I', 1), ('V', 5), ('X', 10), ('L', 50), ('C', 100), ('D', 500), ('M', 1000)
        ].into_iter().collect::<std::collections::HashMap<_, _>>();
        
        let mut result = 0;
        let mut prev_value = 0;

        for c in s.chars() {
            let value = *roman.get(&c).unwrap();
            if value > prev_value {
                result += value - 2 * prev_value;
            } else {
                result += value;
            }
            prev_value = value;
        }

        result
    }
}
