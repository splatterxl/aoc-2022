
with open("inputs/1.txt") as f:
    file = f.read()

    elves = file.split("\n\n")

    def map_elves(n: str):
        total = 0

        for number in n.split("\n"):
            if number == '':
                continue
            total += int(number)

        return total

    elves = list(map(map_elves, elves))

    total = 0
    for _ in range(3):
        i = max(elves)

        print(i)
        elves.remove(i)
        total += i

    print(total)
