function tailfib(n, fib = 1, old = 1)
{
    if(n <=2) return fib;
    var newfib = fib + old;
    
    return tailfib(n-1, newfib, fib);
}
