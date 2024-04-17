[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The asymptotic complexity of the tail recursive Fibonacci is $\Theta(n)$. This is because the function will call itself until n <= 2. So the function will call itself n times, each taking constant time. The total amount of calls made is n, so it will take $\Theta(n)$ time.
The non-tail recursive version calls itself twice every time it's called, and it's called until n <=2. It will call itself n times, and every time it calls itself twice, so the asymptotic complexity would be 
$\Theta(2^n)$. The tail recursive version is much more efficient than the non-tail recursive version, which grows exponentially.
