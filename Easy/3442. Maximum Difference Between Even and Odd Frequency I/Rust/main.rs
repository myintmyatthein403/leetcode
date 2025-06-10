use std::collections::HashMap;

impl Solution {
    pub fn max_difference(s: String) -> i32 {
        let mut freq = HashMap::new();

        for ch in s.chars() {
            *freq.entry(ch).or_insert(0) += 1;
        }

        let mut odd_freqs = Vec::new();
        let mut even_freqs = Vec::new();

        for &count in freq.values() {
            if count % 2 == 0 {
                even_freqs.push(count);
            } else {
                odd_freqs.push(count);
            }
        }

        let max_odd = *odd_freqs.iter().max().unwrap();
        let min_even = *even_freqs.iter().min().unwrap();

        max_odd - min_even
    }

