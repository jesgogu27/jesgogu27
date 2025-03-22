using Microsoft.AspNetCore.Mvc;

namespace webApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        private static List<WeatherForecast> weatherForecasts;
        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;

            if (weatherForecasts == null || !weatherForecasts.Any()) {
                weatherForecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                    TemperatureC = Random.Shared.Next(-20, 55),
                    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
                })
                .ToList();
            }

        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return weatherForecasts;

        }

        [HttpPost(Name = "GetWeatherForecast")]
        public IActionResult Post(WeatherForecast weather)
        {
            if (weather == null)
            {
                throw new ArgumentNullException("Argumento no valido");
            }
            else
            {
                weatherForecasts.Add(weather);
                return StatusCode(200, "Ok");
            }
        }

        [HttpDelete("{index}")]
        public IActionResult Delete(int index)
        {
            weatherForecasts.RemoveAt(index);
            return StatusCode(200, "Ok");

        }
    }
}
