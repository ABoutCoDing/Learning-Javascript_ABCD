const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);               // arr 은 [1, 3, 4, 4]
arr.copyWithin(2, 0, 2);            // arr 은 [1, 3, 1, 3]
arr.copyWithin(0, -3, -1);          // arr 은 [3, 1, 1, 3]