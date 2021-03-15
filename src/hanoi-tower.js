resolver_tower_of_hanoi = function (tower1, tower2, tower3, n) {

    // terminating condition
    if (n <= 0) {
        return
    }

    resolver_tower_of_hanoi(tower1, tower3, tower2, n - 1)

    console.log(`Move Disk-${n} FROM ${tower1} TO ${tower2}`);

    resolver_tower_of_hanoi(tower3, tower2, tower1, n - 1);
}

resolver_tower_of_hanoi('tower1', 'tower2', 'tower3', 3)
