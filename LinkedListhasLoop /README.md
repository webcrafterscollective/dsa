# Floyd's cycle-finding algorithm (tortoise and hare) 
## Step by step

**Step 1: Set Up the Pointers**

We start with two pointers, one called `slow` and the other called `fast`. Both of them initially point to the head of the linked list.

For example, if our linked list looks like this:

```
1 -> 2 -> 3 -> 4 -> 5 -> 6
```

Then `slow` and `fast` both start at the first node, which contains the value `1`.

**Step 2: Move the Pointers**

- `slow` moves one step at a time.
- `fast` moves two steps at a time.

So in our example, after the first move:

```
slow: 2
fast: 3
```

After the second move:

```
slow: 3
fast: 5
```

After the third move:

```
slow: 4
fast: 6
```

**Step 3: Check for a Loop**

If there is a loop in the list, eventually the `fast` pointer will catch up to the `slow` pointer.

For example, let's say there's a loop in our linked list that connects the last node `6` back to `3`, like this:

```
1 -> 2 -> 3 -> 4 -> 5 -> 6
                   ^         |
                   |         v
                   +---------+
```

When the pointers move, they'll eventually meet:

```
slow: 5
fast: 4
```

And there you have it! The `fast` pointer caught up to the `slow` pointer, indicating the presence of a loop.

**Step 4: No Loop Found**

If the `fast` pointer reaches the end of the list (or encounters a null value), it means there is no loop in the list.

For example, if we have a list without a loop:

```
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL
```
