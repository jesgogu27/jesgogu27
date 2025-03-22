using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.Services;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloWorldController : ControllerBase
    {
        IHellowWorldService hellowWorldService;

        public HelloWorldController(IHellowWorldService helloWorld)
        {
            hellowWorldService = helloWorld;
        }

        public IActionResult Get()
        {
            return StatusCode(200, hellowWorldService.GetHelloWWorld());
        }
    }
}
