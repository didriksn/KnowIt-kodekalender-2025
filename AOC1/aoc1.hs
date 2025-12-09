main :: IO ()
main = do
    content <- readFile "input.txt"
    let rotations = lines content
    let parsedRotations = map parseLine rotations
    let result = scanl rotate 50 parsedRotations
    print $ length (filter (== 0) result)

rotate x n = (x + n) `mod` 100

parseLine s = let direction = head s
                  value = read (tail s) :: Int
                in case direction of
                     'L' -> (-value)
                     'R' -> value
                     _   -> 0
