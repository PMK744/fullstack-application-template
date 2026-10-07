using Template.Core.Models;

namespace Template.Core.Managers;


public sealed class CounterManager
{
    private int value;

    public Counter Get()
    {
        return new Counter { Value = Volatile.Read(ref value) };
    }

    public Counter Increment()
    {
        return new Counter { Value = Interlocked.Increment(ref value) };
    }

    public Counter Reset()
    {
        Interlocked.Exchange(ref value, 0);
        return new Counter { Value = 0 };
    }
}
