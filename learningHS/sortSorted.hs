-- Write a sort function, and a correctness function called sorted. You can use sort, from the slides, as your sorter. 
-- Remember to name your sort function sort, and the correctness function should be called sorted.

import Data.List as L
sortSlide :: Ord a => [a] -> [a]
sortSlide []     = []
sortSlide (x:xs) = sortSlide(filter (<= x)xs) ++ [x] ++ sortSlide (filter (> x) xs)

sorted :: Ord a => [a] -> Bool
sorted []       = True
sorted [x]      = True
sorted (x:xs)   = x:xs == L.sort(x:xs)
