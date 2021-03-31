--Using library functions, define a Haskell function
--halve :: [a] -> ([a],[a])
--where halve splits an even-length list into two halves.

halve :: [a] -> ([a], [a])
halve list = (frontHalf,secondHalf)
  where
    frontHalf = take ((length list) `div` 2) list
    secondHalf = drop ((length list) `div` 2) list

main :: IO()
main = print (halve [1,2,3,4,5,6])
