using Template.Core.Managers;
using Template.Core.Models;

using Microsoft.AspNetCore.Mvc;


namespace Template.Api.Controllers;

[ApiController]
[Route("api/counter")]
public sealed class CounterController(CounterManager counterManager) : ControllerBase
{
    [HttpGet]
    public ActionResult<Counter> Get()
    {
        return Ok(counterManager.Get());
    }

    [HttpPost("increment")]
    public ActionResult<Counter> Increment()
    {
        return Ok(counterManager.Increment());
    }

    [HttpPost("reset")]
    public ActionResult<Counter> Reset()
    {
        return Ok(counterManager.Reset());
    }
}
