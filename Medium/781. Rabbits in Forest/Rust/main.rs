fn main() {
    println!("{}", num_rabbits(vec![1, 1, 2]));
    println!("{}", num_rabbits(vec![10, 10, 10]));
    println!("{}", num_rabbits(vec![]));
    println!("{}", num_rabbits(vec![0, 0, 1, 1, 1]));
}

fn num_rabbits(answers: Vec<i32>) -> i32 {
    use std::collections::HashMap;

    let mut count_map: HashMap<i32, i32> = HashMap::new();
    for answer in answers {
        *count_map.entry(answer).or_insert(0) += 1;
    }

    let mut result = 0;
    for (key, value) in count_map {
        let group_size = key + 1;
        let num_groups = (value + group_size - 1) / group_size;
        result += num_groups * group_size;
    }

    result
}
